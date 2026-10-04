export const learningLessons2 = [
  {
    id: 'power-of-questions',
    theme: 'Learning',
    title: 'The Power of Questions',
    dek: 'A well-formed question can expose assumptions and lead a discussion somewhere new.',
    minutes: 16,
    passage: `In classrooms, questions are often treated as tests. A teacher asks for the capital of a country or the meaning of a word, and a student tries to supply the expected answer. These closed questions are useful for checking knowledge, but they represent only one kind of inquiry. Open questions, which allow several defensible answers, can help people explore ideas rather than merely recall facts.

The wording of a question matters. Asking “Was the character selfish?” encourages a yes-or-no judgement. Asking “What pressures shaped the character’s decision?” directs attention towards motives, evidence and context. Neither form is always superior. A closed question can establish basic understanding before an open question invites deeper analysis.

Questions also uncover assumptions. Imagine a council discussing how to make a park safer. If members ask only where to install brighter lights, they assume that lighting is the main solution. Someone who asks, “When and why do people feel unsafe here?” may reveal problems involving traffic, damaged paths or a lack of other visitors. The new question widens the range of possible responses.

However, questioning is not automatically productive. Rapidly asking “Why?” can sound like an interrogation, especially when a person is explaining a difficult experience. Curious listeners give others time to answer and use follow-up questions to clarify rather than to trap. They also accept that some questions cannot be answered immediately.

Strong learners do more than collect answers. They notice which questions produce useful evidence, which hide assumptions and which need to be revised. In that sense, a question is not simply a gap in knowledge. It is a tool that shapes where attention goes next.`,
    questions: [
      { prompt: 'What is one purpose of a closed question?', options: ['To allow unlimited interpretations', 'To check basic knowledge', 'To avoid factual information', 'To expose every hidden assumption'], answer: 1, explanation: 'The first paragraph says closed questions are useful for checking knowledge.' },
      { prompt: 'Why does the passage compare two questions about a character?', options: ['To prove that yes-or-no questions are useless', 'To show that wording directs attention differently', 'To argue that motives cannot be studied', 'To suggest that every question has one answer'], answer: 1, explanation: 'The comparison demonstrates how wording can focus attention on judgement or on motives and context.' },
      { prompt: 'What assumption might the park discussion contain?', options: ['Traffic is the only danger', 'The park should be closed', 'Lighting is the main safety solution', 'All visitors feel equally safe'], answer: 2, explanation: 'By discussing only brighter lights, members may assume lighting is the central solution.' },
      { prompt: 'Which approach best matches productive questioning?', options: ['Ask rapidly until someone admits an error', 'Use only questions with known answers', 'Clarify respectfully and allow time to respond', 'Avoid revising a question once asked'], answer: 2, explanation: 'The passage recommends patient, respectful follow-up questions that seek clarification rather than entrapment.' },
    ],
    writingPrompt: 'Write 140–180 words explaining how better questions could improve one class discussion or community decision. Use an example and address one possible limitation.',
    writingKeywords: ['question', 'evidence', 'assumption', 'discussion', 'open', 'clarify'],
    vocabulary: [
      { term: 'inquiry', definition: 'a process of asking questions and investigating', example: 'The class began an inquiry into the causes of water pollution.' },
      { term: 'defensible', definition: 'able to be supported with reasons or evidence', example: 'Both interpretations were defensible because each used details from the text.' },
      { term: 'context', definition: 'the circumstances that help explain an event or idea', example: 'Historical context changed how we understood the speech.' },
      { term: 'assumption', definition: 'an idea accepted as true without full proof', example: 'Her question challenged the assumption that everyone travelled by car.' },
      { term: 'interrogation', definition: 'forceful or systematic questioning of someone', example: 'The friendly interview began to feel like an interrogation.' },
    ],
  },
  {
    id: 'stage-fright-performance',
    theme: 'Learning',
    title: 'Stage Fright and Performance',
    dek: 'Performance anxiety can sharpen attention, but it can also overwhelm working memory.',
    minutes: 17,
    passage: `Minutes before a speech, a student may notice a racing heart, dry mouth and trembling hands. These reactions are commonly called stage fright, but they are part of the body’s broader response to pressure. The brain detects an important event and prepares the body for action by increasing alertness and releasing energy.

This response is not always harmful. A moderate level of arousal can sharpen attention and add energy to a performance. Too little may leave a speaker unfocused, while too much can make it difficult to remember lines or control pace. There is no perfect level for everyone: an experienced actor may interpret a pounding heart as readiness, while a beginner interprets the same sensation as evidence that failure is near.

Preparation helps because it reduces the number of decisions required on stage. A speaker who knows the structure of a talk can recover after forgetting one sentence. Rehearsing in conditions that gradually resemble the real event is particularly useful. A student might begin alone, then practise for a friend, record a video and finally present to a small group. This gradual exposure gives the brain evidence that nervous feelings can be tolerated.

Other strategies focus attention outward. Slow breathing may reduce physical tension, but performers can also concentrate on communicating one idea to the audience rather than monitoring every sign of anxiety. Trying to eliminate all nervousness can create another impossible task. It is often more realistic to perform while some discomfort remains.

Stage fright does not prove that a person lacks talent or preparation. It shows that the outcome matters to them. Success therefore need not mean feeling perfectly calm. It can mean using preparation, attention and repeated experience to act effectively even while the heart is beating fast.`,
    questions: [
      { prompt: 'Why does the body react before a performance?', options: ['It detects an important event and prepares for action', 'It always mistakes an audience for physical danger', 'It needs to remove all energy', 'It has forgotten the prepared material'], answer: 0, explanation: 'The opening explains that the brain recognises an important event and increases readiness for action.' },
      { prompt: 'What can happen when arousal is moderate?', options: ['All nervousness disappears', 'Attention and energy may improve', 'A performer forgets every line', 'Experience stops affecting interpretation'], answer: 1, explanation: 'The second paragraph says moderate arousal can sharpen attention and energise performance.' },
      { prompt: 'Why is gradual exposure useful?', options: ['It guarantees a perfect final speech', 'It allows students to avoid every audience', 'It proves nervous feelings can be tolerated', 'It replaces the need to learn the structure'], answer: 2, explanation: 'Increasingly realistic practice gives the brain evidence that anxiety can be endured.' },
      { prompt: 'What does the author define as a realistic success?', options: ['Feeling no physical reaction at all', 'Hiding a lack of preparation', 'Performing effectively despite some discomfort', 'Memorising every word without understanding it'], answer: 2, explanation: 'The conclusion presents effective action with remaining nervousness as a meaningful form of success.' },
    ],
    writingPrompt: 'Write 140–180 words advising a student who fears an upcoming presentation. Recommend two strategies from the passage and explain why they may work.',
    writingKeywords: ['performance', 'nervous', 'practice', 'attention', 'audience', 'prepare'],
    vocabulary: [
      { term: 'arousal', definition: 'a state of increased physical and mental alertness', example: 'A moderate level of arousal helped the athlete focus.' },
      { term: 'interpret', definition: 'to understand or explain the meaning of something', example: 'He chose to interpret his fast heartbeat as readiness.' },
      { term: 'rehearse', definition: 'to practise before a public performance', example: 'The group will rehearse its presentation after school.' },
      { term: 'exposure', definition: 'contact with a situation or experience', example: 'Gradual exposure made speaking to a group feel more familiar.' },
      { term: 'tolerate', definition: 'to endure something difficult or uncomfortable', example: 'She learned to tolerate some nervousness while speaking.' },
    ],
  },
  {
    id: 'why-teams-disagree',
    theme: 'Learning',
    title: 'Why Teams Disagree',
    dek: 'Conflict can reveal useful differences, provided a team separates ideas from identities.',
    minutes: 17,
    passage: `Group work is often praised because several people can contribute different skills. Yet those differences also create disagreement. One student wants to finish quickly, another wants to perfect every detail, and a third believes the task has been misunderstood. Conflict is not necessarily evidence that the team has failed. It may be evidence that members are noticing different risks.

Researchers often distinguish task conflict from relationship conflict. Task conflict concerns the work itself: Which evidence is strongest? How should time be divided? Relationship conflict becomes personal: Who is lazy, controlling or impossible to trust? A team can benefit from calm debate about a task, but personal hostility usually makes members less willing to share information.

Some disagreements begin before anyone speaks. Team members may have different assumptions about quality, deadlines or leadership. If these expectations remain invisible, each person may see another’s behaviour as unreasonable. A short planning conversation can prevent this. Teams can define the goal, assign responsibilities and agree on how decisions will be made.

Power also shapes discussion. A confident speaker may dominate without having the best evidence, while a quiet member may hold crucial knowledge. Techniques such as asking everyone to write an idea before discussion or rotating the chair can make participation more balanced. However, equal speaking time is not the same as equal expertise; relevant evidence still deserves careful weight.

Strong teams do not remove every disagreement. Instead, they create rules that keep disagreement focused on claims, evidence and consequences. Members can summarise an opposing view before criticising it and change their position without losing status. When a team treats revision as a sign of learning rather than weakness, conflict becomes less about winning and more about improving the shared result.`,
    questions: [
      { prompt: 'Why might disagreement be useful to a team?', options: ['It proves nobody understands the task', 'It can reveal that members notice different risks', 'It removes the need for a leader', 'It guarantees a better result'], answer: 1, explanation: 'The first paragraph suggests disagreement may show that members are identifying different risks.' },
      { prompt: 'How does relationship conflict differ from task conflict?', options: ['It focuses on personal judgements', 'It relies more heavily on evidence', 'It concerns deadlines only', 'It always improves information sharing'], answer: 0, explanation: 'Relationship conflict labels people, whereas task conflict concerns choices about the work.' },
      { prompt: 'What is one purpose of a planning conversation?', options: ['To ensure the loudest person decides', 'To make hidden expectations explicit', 'To eliminate all individual responsibilities', 'To give everyone identical expertise'], answer: 1, explanation: 'Planning can clarify goals, roles and decision rules before different assumptions cause conflict.' },
      { prompt: 'Which team behaviour does the author support?', options: ['Treating changed opinions as weakness', 'Criticising people instead of claims', 'Summarising another view before challenging it', 'Giving every idea exactly the same evidential weight'], answer: 2, explanation: 'The conclusion recommends accurately summarising an opposing view before offering criticism.' },
    ],
    writingPrompt: 'Write 140–180 words proposing a disagreement policy for student group work. Explain two rules and show how they would improve a shared result.',
    writingKeywords: ['team', 'disagreement', 'evidence', 'task', 'listen', 'rule'],
    vocabulary: [
      { term: 'conflict', definition: 'a serious disagreement between ideas or people', example: 'The team resolved its conflict by returning to the evidence.' },
      { term: 'hostility', definition: 'unfriendly or aggressive feeling and behaviour', example: 'Personal hostility prevented an honest exchange of ideas.' },
      { term: 'dominate', definition: 'to control a situation or take most of the attention', example: 'One confident voice should not dominate the meeting.' },
      { term: 'expertise', definition: 'special knowledge or skill in a particular area', example: 'Her technical expertise helped the group detect an error.' },
      { term: 'revision', definition: 'a change made to improve an idea or piece of work', example: 'The final revision made their argument more precise.' },
    ],
  },
  {
    id: 'placebo-effect',
    theme: 'Learning',
    title: 'The Placebo Effect',
    dek: 'Expectations can influence symptoms, which is why fair medical tests need careful controls.',
    minutes: 18,
    passage: `When people expect a treatment to help, some report improvement even if the treatment contains no active medicine. This change is often called the placebo effect. It does not mean that an illness was imaginary or that a person deliberately invented relief. Expectations can influence real experiences such as pain, nausea and fatigue through processes in the brain and body.

A placebo might be a tablet with no active drug, but the wider treatment setting matters too. A confident explanation, a familiar routine and attention from a clinician can alter what a patient expects. Symptoms may also change for unrelated reasons. Some illnesses naturally improve over time, and people often seek treatment when symptoms are at their worst. An improvement afterwards might have occurred without any treatment.

For these reasons, researchers use controlled trials. Participants may be randomly assigned to receive either the new treatment or a comparison, and ideally neither participants nor the staff assessing them know who received which option. This blinding reduces the chance that expectations influence reports or observations. If the treatment group improves more than the placebo group, researchers have stronger evidence that the treatment itself has an effect.

Placebos raise ethical questions in ordinary care. Giving a patient an inactive treatment while falsely claiming it is medicine can damage trust and prevent effective care. Researchers have therefore studied open-label placebos, in which patients are honestly told that a pill contains no active drug. Some studies report benefits, but results vary and placebos are not replacements for proven treatments.

The placebo effect is valuable not because belief can cure every disease, but because it reveals that treatment involves more than a chemical ingredient. Expectations, communication and natural recovery can all influence outcomes. Careful experiments are needed to separate these influences rather than dismissing them or exaggerating their power.`,
    questions: [
      { prompt: 'What does the placebo effect show?', options: ['Patients deliberately invent every symptom', 'Expectations can influence real experiences', 'Inactive tablets cure every disease', 'Chemical ingredients never matter'], answer: 1, explanation: 'The passage explains that expectation can alter genuine experiences such as pain, nausea and fatigue.' },
      { prompt: 'Why might a person improve after treatment for an unrelated reason?', options: ['Symptoms can change naturally over time', 'Every clinician gives active medicine', 'A placebo always contains a hidden drug', 'Researchers avoid comparison groups'], answer: 0, explanation: 'The second paragraph notes that some conditions improve naturally, especially after symptoms peak.' },
      { prompt: 'What is the purpose of blinding in a controlled trial?', options: ['To hide all risks permanently', 'To prevent participants receiving care', 'To reduce the influence of expectations on reports', 'To guarantee that the new treatment succeeds'], answer: 2, explanation: 'Blinding helps stop knowledge of group assignment from shaping observations and symptom reports.' },
      { prompt: 'What ethical problem can deceptive placebo use create?', options: ['It can damage trust and delay effective care', 'It makes natural recovery impossible', 'It always costs more than medicine', 'It prevents researchers studying expectations'], answer: 0, explanation: 'The fourth paragraph warns that deception may harm trust and keep patients from effective treatment.' },
    ],
    writingPrompt: 'Write 140–180 words explaining why a new health treatment should be tested against a comparison group. Use evidence from the passage and mention one ethical concern.',
    writingKeywords: ['placebo', 'treatment', 'evidence', 'expectation', 'trial', 'trust'],
    vocabulary: [
      { term: 'placebo', definition: 'an inactive treatment used for comparison or to study expectations', example: 'Half the volunteers received a placebo rather than the experimental tablet.' },
      { term: 'clinician', definition: 'a health professional who works directly with patients', example: 'The clinician explained the possible benefits and risks.' },
      { term: 'randomly', definition: 'by chance rather than by a planned pattern', example: 'Participants were randomly placed into two groups.' },
      { term: 'blinding', definition: 'hiding treatment assignments to reduce bias in a study', example: 'Blinding prevented assessors from knowing who received the drug.' },
      { term: 'ethical', definition: 'connected with principles of right and responsible conduct', example: 'The researchers considered whether the study design was ethical.' },
    ],
  },
  {
    id: 'reading-paper-screens',
    theme: 'Learning',
    title: 'Reading on Paper and Screens',
    dek: 'The best reading medium depends on the text, the task and how deliberately we read.',
    minutes: 16,
    passage: `A printed novel and a digital article can contain exactly the same words, yet readers may approach them differently. Paper offers a stable physical layout: a paragraph remains in the same place, and the thickness of pages gives a rough sense of progress. Screens offer other advantages, including search, adjustable text, dictionaries and access to many documents in one device.

Studies comparing comprehension have produced mixed results. In some experiments, readers remember slightly more from paper, especially when texts are long or time is limited. One explanation is that people often bring habits of skimming to screens. They scroll, follow links and respond to notifications. Another possibility is that physical page cues help readers build a mental map of where information appeared.

However, the device alone does not determine understanding. A focused reader can annotate a digital text, turn off alerts and pause to summarise. A distracted reader can rush through a printed page. Digital tools may be particularly valuable for someone who needs larger type, text-to-speech or an immediate definition. Paper may be preferable when comparing distant sections or reading without reliable power.

The task should guide the choice. Searching a report for one statistic is efficient on a screen. Closely analysing a complex argument may be easier when a reader can spread pages out and mark connections. Students should also consider fatigue, cost and whether a school can provide accessible materials in both forms.

Debating which medium is universally “better” hides these differences. A more useful question is which features support the present reader and purpose. Skilled readers learn to manage the weaknesses of each format: they resist digital distraction, avoid passive highlighting and check their understanding regardless of where the words appear.`,
    questions: [
      { prompt: 'What physical advantage of paper does the passage identify?', options: ['It can search every paragraph instantly', 'Its layout and page thickness provide location cues', 'It automatically defines difficult words', 'It always costs less than a screen'], answer: 1, explanation: 'The opening describes stable placement and page thickness as physical cues for location and progress.' },
      { prompt: 'Why might screen readers remember less in some studies?', options: ['Digital text contains fewer words', 'Screens make annotation impossible', 'Habits such as skimming and following links can distract', 'Paper removes the need to concentrate'], answer: 2, explanation: 'The second paragraph links screens with skimming, links, scrolling and notifications.' },
      { prompt: 'Which example shows that digital reading can improve access?', options: ['Spreading several printed pages out', 'Using larger type or text-to-speech', 'Reading during a power failure', 'Marking a fixed physical location'], answer: 1, explanation: 'Adjustable type and text-to-speech are named as valuable accessibility features.' },
      { prompt: 'What is the author’s main conclusion?', options: ['Paper is always the superior medium', 'Schools should remove digital texts', 'The reader and purpose should guide the choice', 'Comprehension depends only on the device'], answer: 2, explanation: 'The conclusion rejects a universal winner and focuses on matching format features to purpose and reader.' },
    ],
    writingPrompt: 'Write 140–180 words recommending paper, screens or a combination for one school reading task. Justify your choice and address a disadvantage.',
    writingKeywords: ['reading', 'paper', 'screen', 'focus', 'task', 'understanding'],
    vocabulary: [
      { term: 'stable', definition: 'fixed, steady or unlikely to change', example: 'A stable page layout helped her remember where the diagram appeared.' },
      { term: 'comprehension', definition: 'the ability to understand what is read or heard', example: 'Pausing to summarise improved his comprehension.' },
      { term: 'skim', definition: 'to read quickly to gain only the main ideas', example: 'She skimmed the article before studying it closely.' },
      { term: 'annotate', definition: 'to add notes or comments to a text', example: 'Students annotate the paragraph by identifying evidence.' },
      { term: 'accessible', definition: 'easy to use, reach or understand, including for people with disabilities', example: 'Adjustable text made the document more accessible.' },
    ],
  },
  {
    id: 'psychology-of-waiting',
    theme: 'Learning',
    title: 'The Psychology of Waiting',
    dek: 'Waiting feels longer when time is uncertain, unexplained or filled with anxious attention.',
    minutes: 15,
    passage: `Five minutes can feel brief when talking with a friend and endless when waiting for a delayed bus. Clock time has not changed, but experienced time has. Psychologists and service designers study this difference because the way a wait is organised can affect stress, fairness and people’s judgement of an entire experience.

Uncertainty is one important factor. A ten-minute wait with a reliable countdown may feel easier than an unknown delay that could end in two minutes or twenty. Information gives people a sense of control and allows them to make choices. Even an unwelcome message, such as “The train is delayed by twelve minutes,” can be better than silence if it is accurate.

Attention matters as well. An unoccupied wait draws attention towards each passing moment. This is why some places provide music, displays or a view of work being completed. Yet distraction is not always enough. A cheerful video may irritate someone waiting for urgent medical news. The activity should suit the situation rather than hide a serious delay.

Fairness also shapes perception. People become frustrated when someone who arrived later is served first without explanation. Visible queues reassure people that there is an order, but strict first-come service is not suitable everywhere. Emergency departments prioritise the most urgent cases. Clear explanations can help others understand why the order has changed without revealing private information.

Reducing actual delays remains important; clever design should not excuse poor service. However, organisations can improve unavoidable waits by giving honest estimates, explaining the process and offering reasonable choices. The lesson is broader than queue management. People cope better with delay when they understand what is happening, believe the system is fair and can direct their attention towards something useful.`,
    questions: [
      { prompt: 'Why can a countdown make a wait feel easier?', options: ['It always makes the service faster', 'It provides information and a sense of control', 'It prevents every delay', 'It distracts people with entertainment'], answer: 1, explanation: 'The passage says reliable information reduces uncertainty and lets people make choices.' },
      { prompt: 'Why might cheerful entertainment fail during a wait?', options: ['All occupied waits feel longer', 'Music always creates unfairness', 'The distraction may not suit a serious situation', 'People cannot notice displays while waiting'], answer: 2, explanation: 'A cheerful video could feel inappropriate to someone waiting for urgent medical information.' },
      { prompt: 'Why might an emergency department not use strict first-come service?', options: ['It has no visible queue', 'It prioritises patients with the most urgent needs', 'It wants waits to feel uncertain', 'It cannot explain any decisions'], answer: 1, explanation: 'The passage explains that medical urgency can justify changing the normal order.' },
      { prompt: 'Which proposal best reflects the author’s position?', options: ['Use entertainment instead of reducing delays', 'Hide estimates that may be unwelcome', 'Combine shorter waits with honest information and fair processes', 'Serve everyone in arrival order regardless of need'], answer: 2, explanation: 'The conclusion values reducing real delays while also improving information, fairness and choice.' },
    ],
    writingPrompt: 'Write 140–180 words proposing how a school can make one unavoidable wait less frustrating. Explain how your plan addresses uncertainty, attention or fairness.',
    writingKeywords: ['waiting', 'delay', 'information', 'fair', 'choice', 'school'],
    vocabulary: [
      { term: 'uncertainty', definition: 'a state of not knowing what will happen', example: 'The lack of an arrival time increased our uncertainty.' },
      { term: 'perception', definition: 'the way something is noticed and understood', example: 'Clear updates changed passengers’ perception of the delay.' },
      { term: 'unoccupied', definition: 'not busy or engaged in an activity', example: 'An unoccupied wait made every minute noticeable.' },
      { term: 'prioritise', definition: 'to treat something as more important than other things', example: 'The clinic must prioritise urgent cases.' },
      { term: 'unavoidable', definition: 'not able to be prevented or escaped', example: 'Staff explained the unavoidable delay honestly.' },
    ],
  },
  {
    id: 'why-we-copy-others',
    theme: 'Learning',
    title: 'Why We Copy Other People',
    dek: 'Imitation helps humans learn efficiently, but popularity is not proof that a choice is wise.',
    minutes: 16,
    passage: `From early childhood, people learn by watching others. A child copies a gesture, a student observes how a classmate organises an experiment, and a new employee follows the unwritten routines of a workplace. Imitation is efficient because it allows knowledge to travel without every person discovering each solution alone.

Social psychologists use the term social proof for our tendency to treat other people’s behaviour as evidence about what is sensible. When a café is crowded, passers-by may assume its food is good. When many classmates choose the same answer, a student may doubt a different but well-reasoned response. Social proof is especially influential when a situation is uncertain or when the people being copied seem knowledgeable or similar to us.

Copying can support cooperation. Queues work partly because people observe and follow a shared pattern. Online demonstrations can spread useful study methods or safety practices quickly. However, imitation can also spread errors. A rumour repeated thousands of times does not become accurate, and a popular online challenge does not become safe merely because familiar people attempt it.

Digital platforms can intensify this effect by displaying views, likes and trending labels. These numbers provide information about attention, not necessarily quality. They may also create a loop: people select popular content because it appears popular, and each selection makes it look even more dominant. Meanwhile, quieter alternatives become harder to notice.

The solution is not to reject all influence. No one has enough time to investigate every choice from the beginning. Instead, people can pause when a decision has serious consequences and ask what evidence exists beyond popularity. They can identify who began the behaviour, whether that source has relevant expertise and whether independent sources agree. Copying is a powerful learning shortcut, but a shortcut should not replace judgement when the stakes are high.`,
    questions: [
      { prompt: 'Why is imitation an efficient way to learn?', options: ['It guarantees that every copied action is correct', 'It lets knowledge spread without repeated discovery', 'It prevents people developing individual skills', 'It works only during early childhood'], answer: 1, explanation: 'The first paragraph says imitation transfers solutions without everyone discovering them independently.' },
      { prompt: 'When is social proof especially influential?', options: ['When a situation is uncertain', 'When evidence is complete and obvious', 'When nobody else is present', 'When popularity numbers are hidden'], answer: 0, explanation: 'The passage identifies uncertainty and the apparent expertise or similarity of others as important conditions.' },
      { prompt: 'What do online view and like counts directly measure?', options: ['The accuracy of a claim', 'The safety of an action', 'The amount of attention content receives', 'The expertise of every creator'], answer: 2, explanation: 'The fourth paragraph warns that platform numbers indicate attention rather than quality.' },
      { prompt: 'What does the author recommend for high-stakes decisions?', options: ['Reject every popular option', 'Copy the most familiar person immediately', 'Check evidence, expertise and independent agreement', 'Investigate only how many people agree'], answer: 2, explanation: 'The conclusion recommends looking beyond popularity to sources, expertise and independent evidence.' },
    ],
    writingPrompt: 'Write 140–180 words explaining when copying other people is useful and when it becomes risky. Include one example and propose a way to check the evidence.',
    writingKeywords: ['copy', 'influence', 'popular', 'evidence', 'source', 'choice'],
    vocabulary: [
      { term: 'imitation', definition: 'the act of copying another person’s behaviour', example: 'Imitation helped the beginner learn how to hold the tool.' },
      { term: 'social proof', definition: 'other people’s behaviour treated as evidence for a choice', example: 'The long queue acted as social proof that the café was popular.' },
      { term: 'influential', definition: 'able to affect decisions, actions or opinions', example: 'Recommendations from close friends can be highly influential.' },
      { term: 'intensify', definition: 'to make something stronger or more extreme', example: 'Visible popularity scores can intensify pressure to conform.' },
      { term: 'dominant', definition: 'most noticeable, powerful or common', example: 'One viewpoint became dominant in the online discussion.' },
    ],
  },
  {
    id: 'useful-feedback',
    theme: 'Learning',
    title: 'What Makes Feedback Useful?',
    dek: 'Effective feedback identifies a next action instead of merely judging past work.',
    minutes: 17,
    passage: `Students receive many comments on their work, from a tick in the margin to a detailed conference. Yet the amount of feedback does not guarantee improvement. A page covered in corrections may overwhelm a learner, while a single precise suggestion can change the next draft. Feedback becomes useful only when the learner can understand it and act on it.

Timing matters. Immediate feedback is valuable when a student is practising a new procedure and an error could become a habit. A delay can sometimes help when the goal is reflection, because students first have to inspect their own work. The best timing therefore depends on the task rather than on a rule that faster is always better.

Useful comments are specific without taking control away from the learner. “This is unclear” identifies a problem but offers little direction. “Add an example showing how the policy affects renters” points towards a next step. By contrast, rewriting the entire paragraph for the student may produce a smoother assignment without teaching the student how to improve independently.

Feedback also needs priorities. Correcting every spelling error while ignoring a weak central argument sends the wrong message about what matters most. A teacher might focus first on the claim and evidence, then address sentence accuracy in a later draft. The student must also have an opportunity to revise; comments delivered after the final submission may feel like a judgement rather than part of learning.

Receiving feedback is a skill too. Learners can paraphrase a comment, ask for an example and choose one manageable action. They need not accept every suggestion without thought, but they should test advice against the purpose of the work. Effective feedback is therefore a conversation between a current performance and a possible next performance. Its success is measured not by how much is said, but by what the learner can do differently afterwards.`,
    questions: [
      { prompt: 'Why can one precise suggestion be better than many corrections?', options: ['It gives the learner an action they can understand', 'It removes the need for revision', 'It guarantees perfect spelling', 'It allows the teacher to rewrite the work'], answer: 0, explanation: 'The opening argues that usable, actionable feedback matters more than the quantity of comments.' },
      { prompt: 'When can delayed feedback be helpful?', options: ['When an error must never be practised', 'When students need to reflect on their own work first', 'When no revision will be allowed', 'When every task follows the same procedure'], answer: 1, explanation: 'The second paragraph says a delay can encourage learners to inspect and reflect on their work.' },
      { prompt: 'Why should feedback have priorities?', options: ['Learners should ignore central arguments', 'Every error has exactly the same importance', 'Comments should focus attention on what matters most', 'Sentence accuracy should never be discussed'], answer: 2, explanation: 'The passage warns that correcting minor errors first can send the wrong message about important goals.' },
      { prompt: 'How does the author measure successful feedback?', options: ['By the total number of written comments', 'By how different the teacher’s version looks', 'By whether the learner can act differently next time', 'By whether the final submission receives no response'], answer: 2, explanation: 'The conclusion defines success through the learner’s changed future action, not comment quantity.' },
    ],
    writingPrompt: 'Write 140–180 words designing a useful feedback process for a Year 9 assignment. Explain its timing, priorities and opportunity for revision.',
    writingKeywords: ['feedback', 'specific', 'revision', 'improve', 'evidence', 'action'],
    vocabulary: [
      { term: 'overwhelm', definition: 'to affect someone with more than they can manage', example: 'Too many corrections at once can overwhelm a writer.' },
      { term: 'procedure', definition: 'a set of steps for completing a task', example: 'Immediate feedback helped her learn the laboratory procedure.' },
      { term: 'independently', definition: 'without needing another person to take control', example: 'The checklist helped students revise independently.' },
      { term: 'prioritise', definition: 'to decide what is most important and deal with it first', example: 'He chose to prioritise evidence before editing punctuation.' },
      { term: 'paraphrase', definition: 'to express the same meaning in different words', example: 'She paraphrased the comment to check her understanding.' },
    ],
  },
];
