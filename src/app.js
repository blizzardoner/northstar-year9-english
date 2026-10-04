import { evaluateWriting, getDailyLesson, getDueWords, scoreComprehension, updateWordProgress } from './domain.js';
import { lessons } from './lessons.js';

const STORAGE_KEY = 'northstar-english-v1';
const app = document.querySelector('#app');
let currentView = 'today';
let lessonMode = false;
let quizSubmitted = false;
let writingFeedback = null;
let answers = [];
let reviewReveal = false;
let state = loadState();
const today = new Date();
const lesson = getDailyLesson(lessons, today);
const lessonNumber = lessons.findIndex((item) => item.id === lesson.id) + 1;

function defaultState() {
  return { version: 1, completedDays: [], quizScores: {}, drafts: {}, words: {}, minutes: 0 };
}
function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return parsed?.version === 1 ? { ...defaultState(), ...parsed } : defaultState();
  } catch { return defaultState(); }
}
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function dateKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}
function saveWord(term) {
  const item = lesson.vocabulary.find((word) => word.term === term);
  if (!item || state.words[term]) return false;
  state.words[term] = { ...item, lessonId: lesson.id, interval: 0, repetitions: 0, lapses: 0 };
  saveState();
  return true;
}
function completedToday() { return state.completedDays.includes(dateKey()); }
function streak() {
  const days = new Set(state.completedDays);
  let total = 0;
  const cursor = new Date();
  if (!days.has(dateKey(cursor))) cursor.setDate(cursor.getDate()-1);
  while (days.has(dateKey(cursor))) { total += 1; cursor.setDate(cursor.getDate()-1); }
  return total;
}
function dueWords() { return getDueWords(Object.values(state.words), new Date()); }
function escapeHtml(value='') { return value.replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char])); }
function passageHtml(text) { return text.split(/\n\s*\n/).map(p => `<p>${escapeHtml(p)}</p>`).join(''); }
function toast(message) {
  let node = document.querySelector('.toast');
  if (!node) { node = document.createElement('div'); node.className='toast'; document.body.append(node); }
  node.textContent=message; node.classList.add('show'); setTimeout(()=>node.classList.remove('show'),1800);
}

function shell(content, active=currentView) {
  return `<div class="app-shell">
    <header class="topbar"><div class="brand"><span class="brand-mark">N</span>Northstar</div><button class="profile" aria-label="Learner profile">Y9</button></header>
    <main class="main">${content}</main>
    <nav class="bottom-nav" aria-label="Main navigation">
      ${navButton('today','⌂','Today',active)}${navButton('words','◇','Words',active)}${navButton('progress','◔','Progress',active)}${navButton('settings','⚙','Settings',active)}
    </nav>
  </div>`;
}
function navButton(view, icon, label, active) { return `<button class="nav-btn ${view===active?'active':''}" data-view="${view}"><span>${icon}</span>${label}</button>`; }
function render() {
  if (lessonMode) renderLesson();
  else if (currentView==='words') renderWords();
  else if (currentView==='progress') renderProgress();
  else if (currentView==='settings') renderSettings();
  else renderToday();
  bindCommon();
}
function renderToday() {
  const quiz = state.quizScores[lesson.id];
  app.innerHTML=shell(`
    <section class="hero">
      <div class="eyebrow">Today’s mission · ${lesson.theme}</div>
      <h1>${lesson.title}</h1>
      <p class="hero-copy">${lesson.dek}</p>
      <div class="hero-meta"><span class="meta-chip"><i class="dot"></i>${lesson.minutes} minutes</span><span>Day ${lessonNumber} of ${lessons.length} · Year 9</span></div>
      <button class="primary" id="start-lesson">${completedToday()?'Review lesson':'Start today’s lesson'}</button>
    </section>
    <section class="stats" aria-label="Learning statistics">
      <div class="stat"><strong>${streak()}</strong><span>day streak</span></div>
      <div class="stat"><strong>${state.minutes}</strong><span>minutes</span></div>
      <div class="stat"><strong>${dueWords().length}</strong><span>words due</span></div>
    </section>
    <section class="section">
      <div class="section-head"><div><div class="eyebrow">Daily pathway</div><h2>One focused session</h2></div><span class="section-note">Saved on this device</span></div>
      <div class="card progress-card">
        ${progressRow('1','Read closely',completedToday()||quiz,'A current, evidence-rich text')}
        ${progressRow('2','Check understanding',Boolean(quiz),quiz?`${quiz.correct}/${quiz.total} correct`:'Four comprehension questions')}
        ${progressRow('3','Write with purpose',Boolean(state.drafts[lesson.id]),state.drafts[lesson.id]?'Draft saved':'A structured response')}
        ${progressRow('4','Review vocabulary',dueWords().length===0,'Spaced review for lasting recall')}
      </div>
    </section>`);
  document.querySelector('#start-lesson').onclick=()=>{ lessonMode=true; answers=[]; quizSubmitted=false; writingFeedback=null; render(); scrollTo({top:0}); };
}
function progressRow(icon,title,done,detail){return `<div class="progress-row"><div class="progress-icon">${done?'✓':icon}</div><div><strong>${title}</strong><small>${detail}</small></div><span class="status ${done?'done':''}">${done?'Done':'Next'}</span></div>`;}

function renderLesson() {
  const draft=state.drafts[lesson.id]??'';
  const finishReady=Boolean(state.quizScores[lesson.id])&&wordCount(draft)>=140;
  app.innerHTML=shell(`
    <button class="ghost" id="close-lesson">‹ Today</button>
    <header class="reader-header"><div class="eyebrow">${lesson.theme} · ${lesson.minutes} min</div><h1 class="reader-title">${lesson.title}</h1><p class="reader-dek">${lesson.dek}</p></header>
    <article class="passage">${passageHtml(lesson.passage)}</article>
    <section class="lesson-step"><div class="section-head"><div><div class="eyebrow">Step 1</div><h2>Words worth keeping</h2></div></div><div class="vocab-grid">${lesson.vocabulary.map(vocabCard).join('')}</div></section>
    <section class="lesson-step"><div class="section-head"><div><div class="eyebrow">Step 2</div><h2>Check your reading</h2></div></div><div class="card">${lesson.questions.map(questionCard).join('')}<div id="quiz-result">${quizResultHtml()}</div><button class="primary" id="check-answers" ${quizSubmitted||answers.filter(Number.isInteger).length<lesson.questions.length?'disabled':''}>${quizSubmitted?'Answers checked':'Check answers'}</button></div></section>
    <section class="lesson-step"><div class="section-head"><div><div class="eyebrow">Step 3</div><h2>Build an argument</h2></div></div><div class="writing-prompt">${lesson.writingPrompt}</div><div class="editor-wrap"><textarea class="editor" id="draft" placeholder="Write your response here…">${escapeHtml(draft)}</textarea><div class="editor-meta"><span>Autosaved on this device</span><span id="word-count">${wordCount(draft)} words</span></div></div><div class="action-row"><button class="primary" id="review-writing">Review my writing</button><button class="secondary" id="finish-lesson" ${finishReady?'':'disabled'}>Finish lesson</button></div>${finishReady?'':`<p class="completion-hint">Complete the reading check and write at least 140 words to finish.</p>`}<div id="writing-feedback">${feedbackHtml()}</div></section>`);
  document.querySelector('#close-lesson').onclick=()=>{lessonMode=false;render();};
  document.querySelectorAll('.choice').forEach(button=>button.onclick=()=>selectAnswer(Number(button.dataset.q),Number(button.dataset.a)));
  document.querySelectorAll('.add-word').forEach(button=>button.onclick=()=>{if(saveWord(button.dataset.word)){button.textContent='✓';button.classList.add('saved');toast(`${button.dataset.word} added to review`);}else toast(`${button.dataset.word} is already saved`);});
  if(!quizSubmitted) document.querySelector('#check-answers').onclick=submitQuiz;
  const editor=document.querySelector('#draft');
  editor.oninput=()=>{state.drafts[lesson.id]=editor.value;saveState();document.querySelector('#word-count').textContent=`${wordCount(editor.value)} words`;};
  document.querySelector('#review-writing').onclick=()=>{writingFeedback=evaluateWriting(editor.value,{minWords:140,targetWords:180,keywords:lesson.writingKeywords});render();setTimeout(()=>document.querySelector('#writing-feedback')?.scrollIntoView({behavior:'smooth'}),0);};
  document.querySelector('#finish-lesson').onclick=finishLesson;
}
function vocabCard(word){const saved=Boolean(state.words[word.term]);return `<div class="vocab"><div class="vocab-top"><div><h3>${word.term}</h3><p>${word.definition}</p></div><button class="add-word ${saved?'saved':''}" data-word="${word.term}" aria-label="${saved?'Saved':'Add'} ${word.term} ${saved?'in':'to'} review">${saved?'✓':'+'}</button></div><em>“${word.example}”</em></div>`;}
function questionCard(q,index){return `<div class="question"><div class="question-number">QUESTION ${index+1}</div><p>${q.prompt}</p><div class="choices">${q.options.map((option,a)=>`<button class="choice ${choiceClass(index,a)}" data-q="${index}" data-a="${a}">${quizSubmitted?(a===q.answer?'✓ ':a===answers[index]?'✕ ':''):''}${String.fromCharCode(65+a)}. ${option}</button>`).join('')}</div>${quizSubmitted?`<div class="explanation">${q.explanation}</div>`:''}</div>`;}
function choiceClass(q,a){if(quizSubmitted){if(a===lesson.questions[q].answer)return'correct';if(a===answers[q])return'wrong';}return answers[q]===a?'selected':'';}
function selectAnswer(q,a){if(quizSubmitted)return;answers[q]=a;render();}
function submitQuiz(){const result=scoreComprehension(lesson.questions,answers);state.quizScores[lesson.id]={correct:result.correct,total:result.total};saveState();quizSubmitted=true;render();setTimeout(()=>document.querySelector('#quiz-result')?.scrollIntoView({behavior:'smooth',block:'center'}),0);}
function quizResultHtml(){if(!quizSubmitted)return'';const score=state.quizScores[lesson.id];return `<div class="result-banner"><strong>${score.correct}/${score.total}</strong><div>${score.correct===score.total?'Excellent evidence reading.':'Review the explanations, then try to state the evidence in your own words.'}</div></div>`;}
function wordCount(text){return (text.match(/[A-Za-z]+(?:'[A-Za-z]+)?/g)||[]).length;}
function feedbackHtml(){if(!writingFeedback)return'';return `<div class="feedback"><div class="card"><div class="feedback-top"><div class="score-ring" style="--score:${writingFeedback.score}"><span>${writingFeedback.score}</span></div><div><h3>Draft readiness</h3><p class="section-note">${writingFeedback.wordCount} words · ${writingFeedback.paragraphCount} paragraphs · ${writingFeedback.connectorCount} linking phrases</p></div></div><p class="disclaimer">${writingFeedback.summary}</p></div><div class="card"><h3>What is working</h3><ul class="feedback-list">${(writingFeedback.strengths.length?writingFeedback.strengths:['Start with one clear claim.']).map(x=>`<li>${x}</li>`).join('')}</ul><h3>Next revision</h3><ul class="feedback-list">${(writingFeedback.nextSteps.length?writingFeedback.nextSteps:['The structure is ready. Ask a teacher or secure AI reviewer to challenge the ideas and expression.']).map(x=>`<li>${x}</li>`).join('')}</ul></div></div>`;}
function finishLesson(){const key=dateKey();if(!state.completedDays.includes(key))state.completedDays.push(key);state.minutes+=lesson.minutes;saveState();lessonMode=false;toast('Today’s lesson complete');render();}

function renderWords(){const due=dueWords();const word=due[0];app.innerHTML=shell(`<div class="eyebrow">Vocabulary</div><h1>Words that return<br>at the right time.</h1><p class="reader-dek">Short, spaced reviews build recall without cramming.</p>${word?`<div class="flashcard"><div class="eyebrow">${due.length} due today</div><h2>${word.term}</h2>${reviewReveal?`<p>${word.definition}</p><p><em>“${word.example}”</em></p>`:`<p>Say the meaning aloud, then reveal the answer.</p><button class="primary" id="reveal-word">Reveal meaning</button>`}</div>${reviewReveal?`<div class="review-actions"><button class="review-btn again" data-rating="again">Again tomorrow</button><button class="review-btn good" data-rating="good">I remembered</button></div>`:''}`:`<div class="card empty"><h2>You’re caught up.</h2><p>New words will return when they are due.</p></div>`}`, 'words');
  if(word&&!reviewReveal)document.querySelector('#reveal-word').onclick=()=>{reviewReveal=true;render();};
  document.querySelectorAll('[data-rating]').forEach(b=>b.onclick=()=>{state.words[word.term]=updateWordProgress(word,b.dataset.rating,new Date());saveState();reviewReveal=false;render();});
}
function renderProgress(){const lessonsDone=new Set(state.completedDays).size;const quizValues=Object.values(state.quizScores);const accuracy=quizValues.length?Math.round(quizValues.reduce((sum,x)=>sum+x.correct,0)/quizValues.reduce((sum,x)=>sum+x.total,0)*100):0;const mastered=Object.values(state.words).filter(w=>w.repetitions>=2).length;app.innerHTML=shell(`<div class="eyebrow">Progress</div><h1>Small sessions.<br>Visible growth.</h1><div class="stats"><div class="stat"><strong>${lessonsDone}</strong><span>lessons</span></div><div class="stat"><strong>${accuracy}%</strong><span>reading</span></div><div class="stat"><strong>${mastered}</strong><span>mastered</span></div></div><section class="section card progress-bars">${metric('Reading accuracy',accuracy)}${metric('Writing habit',Math.min(100,lessonsDone*14))}${metric('Vocabulary mastery',Math.min(100,mastered*10))}</section><section class="section card"><h2>Parent view</h2><p class="reader-dek">Progress stays on this device. A future family sync can share summaries without exposing every draft.</p></section>`, 'progress');}
function metric(label,value){return `<div><div class="metric-head"><strong>${label}</strong><span>${value}%</span></div><div class="bar"><div style="width:${value}%"></div></div></div>`;}
function renderSettings(){app.innerHTML=shell(`<div class="eyebrow">Settings</div><h1>Made for focus.</h1><section class="card install-card"><h2>Install on iPhone</h2><p>Northstar works like an app from the Home Screen and keeps today’s lesson available after the first visit.</p><ol class="install-steps"><li>Open the deployed link in Safari.</li><li>Tap the Share button.</li><li>Choose “Add to Home Screen”.</li><li>Open Northstar from its new icon.</li></ol></section><section class="section card"><h2>Built-in course library</h2><p class="reader-dek">${lessons.length} complete lessons rotate in sequence, one per day, before the library repeats.</p></section><section class="section card"><h2>Privacy</h2><p class="reader-dek">Drafts, scores and vocabulary progress are stored only in this browser. No student writing is uploaded in this version.</p><button class="secondary" id="reset-data">Reset learning data</button></section><section class="section card"><h2>About writing feedback</h2><p class="reader-dek">The current reviewer is a transparent local rubric. It checks length, paragraphs, linking phrases, prompt relevance and sentence variety. It does not pretend to understand ideas like a teacher. Secure AI feedback can be added through a protected server later.</p></section>`, 'settings');document.querySelector('#reset-data').onclick=()=>{if(confirm('Reset all Northstar progress on this device?')){state=defaultState();saveState();render();}};}
function bindCommon(){document.querySelectorAll('[data-view]').forEach(button=>button.onclick=()=>{currentView=button.dataset.view;lessonMode=false;reviewReveal=false;render();scrollTo({top:0});});}

render();
if('serviceWorker' in navigator && location.protocol!=='file:') window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
