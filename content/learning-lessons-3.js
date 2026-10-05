export const learningLessons3 = [
  {
    id: 'why-examples-help-us-learn',
    theme: 'Learning',
    title: 'Why Examples Help Us Learn',
    dek: 'Examples make abstract ideas visible, but learners must still identify the principle that connects them.',
    minutes: 16,
    passage: `A definition can be accurate yet difficult to use. Consider the mathematical idea of proportion: two quantities change while keeping the same relationship. A learner may repeat that sentence without recognising proportion in a map scale, a recipe or a speed problem. Examples help by turning an abstract statement into something that can be inspected.

A carefully chosen example directs attention to important features. If a teacher solves two map-scale problems with different numbers, students can compare them and notice that the same relationship is preserved. A contrasting non-example can be just as useful. Seeing a situation in which both quantities increase but not proportionally helps learners discover that “both went up” is not a sufficient rule.

However, one memorable example can also mislead. If every classroom example of a mammal is furry and land-based, a student may incorrectly exclude whales. Surface details such as fur, colour or setting can attract more attention than the deeper principle. Using varied examples reduces this risk because the irrelevant features change while the important relationship remains.

There is also a difference between following an example and using its lesson independently. A completed model can make each step seem obvious when it is visible. When the model is removed, the learner may not know which step to choose. Teachers can address this by pausing before each step, asking students to predict what comes next, and then giving a similar problem without the answer.

Examples are therefore most powerful as material for comparison and explanation, not as decorations placed after a rule. Learners should ask what the examples share, how they differ and why each one fits or fails to fit the idea. The goal is to move from a particular case to a flexible principle that can guide a new case.`,
    questions: [
      { prompt: 'Why can an example be more useful than a definition alone?', options: ['It removes the need to understand a rule', 'It makes an abstract idea available for inspection', 'It guarantees that every learner notices the same detail', 'It replaces all independent practice'], answer: 1, explanation: 'The passage says examples make abstract relationships visible in concrete situations.' },
      { prompt: 'What can a contrasting non-example help a learner discover?', options: ['The boundary of a concept', 'The fastest way to copy an answer', 'That surface details always matter most', 'That definitions are unnecessary'], answer: 0, explanation: 'A non-example reveals why a case does not fit and helps clarify what the concept requires.' },
      { prompt: 'Why should a teacher use varied examples?', options: ['To make every problem look identical', 'To prevent students asking questions', 'To separate the deeper principle from irrelevant features', 'To prove that one example covers every situation'], answer: 2, explanation: 'Variation changes surface details while preserving the important relationship, reducing overgeneralisation from one case.' },
      { prompt: 'Which activity best checks whether learning can transfer?', options: ['Rereading the completed model', 'Highlighting every number in an example', 'Memorising the teacher’s wording', 'Attempting a similar new problem without the answer shown'], answer: 3, explanation: 'Independent work on a related case tests whether the learner can apply the principle rather than merely follow visible steps.' },
    ],
    writingPrompt: 'Write 140–180 words explaining how a teacher could use examples to introduce one difficult idea. Include a non-example or varied example and explain how students would practise independently.',
    writingKeywords: ['example', 'principle', 'compare', 'feature', 'transfer', 'practice'],
    vocabulary: [
      { term: 'abstract', definition: 'existing as an idea rather than a physical object or specific event', example: 'The diagram made the abstract relationship easier to discuss.' },
      { term: 'proportion', definition: 'a relationship in which quantities change at the same relative rate', example: 'The recipe kept the same proportion of flour to water.' },
      { term: 'contrast', definition: 'a clear difference shown by comparing things', example: 'The contrast between the two cases revealed the rule.' },
      { term: 'irrelevant', definition: 'not connected with what matters in the present situation', example: 'The colour of the container was irrelevant to the calculation.' },
      { term: 'transfer', definition: 'the use of learning in a new situation', example: 'The unfamiliar question tested whether transfer had occurred.' },
    ],
  },
  {
    id: 'testing-effect',
    theme: 'Learning',
    title: 'The Testing Effect',
    dek: 'Trying to retrieve knowledge can strengthen later access, especially when practice is low-stakes and corrected.',
    minutes: 17,
    passage: `The word test often suggests grades, time limits and anxiety. In memory research, however, a test can simply mean an attempt to bring information to mind. Students might close a book and list the causes of an event, answer flashcard questions or sketch a process from memory. This act of retrieval can improve later remembering more than spending the same time rereading. The pattern is commonly called the testing effect or retrieval-practice effect.

Retrieval is useful because it exercises access to knowledge. Rereading places the answer in front of the learner, which can create a feeling of familiarity. A blank page offers fewer clues. The effort of reconstructing an answer shows whether the knowledge can be reached when it is actually needed. Successfully retrieving it may also create additional routes for finding it later.

Difficulty must be manageable. If a student cannot recall anything, repeated guessing may be frustrating rather than productive. A hint, a simpler question or another short study period can make the next attempt possible. Feedback is essential when an answer is wrong or incomplete; otherwise, the learner may practise an error. Looking at the correction and then trying again later is more active than merely noting the right answer.

Research generally supports retrieval practice across many subjects, but its effects are not identical in every situation. The form of practice should match the learning goal. Recalling vocabulary may suit short questions, whereas analysing a novel requires prompts that ask for interpretation and evidence. High-pressure exams also include stress and consequences that are absent from a private self-quiz.

A useful study routine can therefore alternate brief study with closed-book recall. Questions should be spaced across several days and revisited after feedback. The purpose is not to collect constant marks. It is to discover what is accessible, correct what is not, and strengthen the path back to important knowledge.`,
    questions: [
      { prompt: 'What does a test mean in the research described?', options: ['Only a graded examination', 'An attempt to retrieve information from memory', 'A period of copying notes', 'A measure of intelligence that never changes'], answer: 1, explanation: 'The passage uses test broadly for activities that require bringing information to mind.' },
      { prompt: 'Why can rereading create false confidence?', options: ['The visible answer can feel familiar without being retrievable', 'It always introduces factual errors', 'It prevents students seeing any words', 'Familiarity guarantees long-term recall'], answer: 0, explanation: 'Seeing information can feel easy even when the learner could not produce it without the text.' },
      { prompt: 'What should happen after an incorrect retrieval attempt?', options: ['The error should be practised repeatedly', 'The topic should be abandoned', 'Corrective feedback should be studied before another attempt', 'A grade should be given immediately'], answer: 2, explanation: 'Feedback prevents an error being reinforced, and a later attempt requires the corrected knowledge to be retrieved.' },
      { prompt: 'Why should retrieval questions match the learning goal?', options: ['Every subject requires identical answers', 'Short questions measure every complex skill', 'Private quizzes should copy high-pressure exams', 'Different goals require different kinds of thinking'], answer: 3, explanation: 'The passage contrasts recalling vocabulary with interpreting a novel to show that practice must fit the desired performance.' },
    ],
    writingPrompt: 'Write 140–180 words proposing a one-week retrieval-practice routine for one Year 9 subject. Explain how questions, spacing and feedback would support learning without creating unnecessary pressure.',
    writingKeywords: ['retrieval', 'memory', 'question', 'feedback', 'spacing', 'practice'],
    vocabulary: [
      { term: 'retrieval', definition: 'the process of bringing stored information back to mind', example: 'Closing the notes turned the activity into retrieval practice.' },
      { term: 'familiarity', definition: 'the feeling that something is known because it has been encountered before', example: 'Familiarity with the page did not guarantee recall.' },
      { term: 'reconstruct', definition: 'to build something again from remembered or available parts', example: 'She tried to reconstruct the argument without looking.' },
      { term: 'corrective', definition: 'intended to identify and repair an error', example: 'Corrective feedback explained which step was missing.' },
      { term: 'accessible', definition: 'able to be reached or used', example: 'Regular recall made the key terms more accessible.' },
    ],
  },
  {
    id: 'how-curiosity-changes-attention',
    theme: 'Learning',
    title: 'How Curiosity Changes Attention',
    dek: 'A meaningful gap in knowledge can focus attention, although novelty alone does not ensure deep learning.',
    minutes: 16,
    passage: `Why does a locked door in a story attract attention? Why can an unanswered question remain in mind after a lesson ends? Curiosity often begins when people notice a gap between what they know and what they want to know. The gap creates a reason to seek information rather than simply receive it.

In experiments, people sometimes remember answers better when they were curious about the questions. Curiosity may increase attention to the expected answer and encourage the learner to connect it with existing knowledge. Some studies also suggest that information encountered during a curious state can be remembered, although this extra benefit is less consistent. Results depend on the task, the learner and how curiosity is measured.

A useful knowledge gap is neither completely empty nor already closed. A question about an unfamiliar technical detail may produce confusion because the learner has no starting point. At the other extreme, a question whose answer seems obvious creates little need to investigate. Teachers can build curiosity by activating partial knowledge, presenting a surprising result, or allowing students to make a prediction before revealing evidence.

Curiosity can misdirect attention as well. A dramatic mystery may be remembered while the scientific explanation is forgotten. Online headlines exploit a similar impulse by promising a surprising answer without providing reliable information. Feeling compelled to click is not the same as conducting careful inquiry. Learners still need to judge sources and stay with an explanation after the initial surprise fades.

Curiosity should therefore open a path, not replace the journey. A strong lesson links the question to a clear learning purpose, gives students enough background to investigate and returns to their first predictions. Students can then explain how the evidence changed their thinking. Curiosity is valuable not because interested learners absorb everything automatically, but because a well-designed question can direct effort towards a gap that is possible and worthwhile to close.`,
    questions: [
      { prompt: 'How does the passage describe the beginning of curiosity?', options: ['A complete absence of any goal', 'A noticed gap between current and desired knowledge', 'A guarantee that all details will be remembered', 'A dislike of surprising information'], answer: 1, explanation: 'The opening defines curiosity as a response to a gap that a person wants to close.' },
      { prompt: 'What cautious claim does the passage make about research?', options: ['Curiosity always improves memory for all nearby details', 'Curiosity has never been measured experimentally', 'Memory benefits vary across tasks, learners and measures', 'Only unfamiliar topics can produce curiosity'], answer: 2, explanation: 'The author notes a common benefit for expected answers but treats broader memory effects as less consistent.' },
      { prompt: 'Why might a highly technical question fail to create useful curiosity?', options: ['The learner may lack enough prior knowledge to begin', 'Technical questions are never worth asking', 'The answer is always too obvious', 'Predictions prevent investigation'], answer: 0, explanation: 'A learner needs some starting knowledge for a gap to feel possible to close rather than merely confusing.' },
      { prompt: 'What distinguishes careful inquiry from a curiosity-driven click?', options: ['Inquiry avoids all surprising questions', 'Inquiry depends only on a dramatic headline', 'Inquiry ends when the first answer appears', 'Inquiry evaluates sources and follows the explanation'], answer: 3, explanation: 'The passage warns that the urge to know must be followed by source judgement and sustained attention.' },
    ],
    writingPrompt: 'Write 140–180 words designing a curiosity-building opening for one school lesson. Explain the knowledge gap, the background students need and how they would evaluate the eventual answer.',
    writingKeywords: ['curiosity', 'attention', 'question', 'knowledge', 'prediction', 'evidence'],
    vocabulary: [
      { term: 'curiosity', definition: 'a desire to know, understand or investigate something', example: 'The unexpected result awakened the class’s curiosity.' },
      { term: 'encounter', definition: 'to meet, experience or come across something', example: 'Students may encounter extra information during an investigation.' },
      { term: 'consistent', definition: 'remaining similar or producing the same pattern', example: 'The extra memory benefit was not consistent across every study.' },
      { term: 'compelled', definition: 'feeling strongly driven to do something', example: 'The headline made readers feel compelled to click.' },
      { term: 'inquiry', definition: 'a process of asking questions and examining evidence', example: 'Curiosity led to a careful inquiry rather than a quick guess.' },
    ],
  },
  {
    id: 'learning-from-worked-solutions',
    theme: 'Learning',
    title: 'Learning from Worked Solutions',
    dek: 'Studying completed steps can reduce overload for beginners when each decision is explained and later practised.',
    minutes: 18,
    passage: `When first meeting a complex algebra problem, a student must understand the question, remember several rules and decide which operation to use. Solving everything at once can overload working memory. A worked solution reduces some of this demand by showing a sequence of steps from the problem to the answer.

The value is not simply that the correct answer is visible. A useful model explains why each step is permitted and how it advances the solution. Two versions can also be compared: one efficient method and one common error, for example. Asking learners to label the reason for each step or predict a missing line keeps them mentally involved. Copying symbols without explanation produces a neat page but may produce little understanding.

Worked solutions are often especially helpful near the beginning of learning, when students have not yet built organised knowledge of the procedure. More experienced learners may gain less from a fully explained example because information they already understand becomes unnecessary. This pattern is sometimes called the expertise-reversal effect. It suggests that support should change as knowledge grows rather than remain fixed for everyone.

One approach is to fade the model gradually. The first example may show every step. The next leaves one step for students to complete, and later examples remove more support. Independent problems then reveal whether learners can select a method without prompts. Feedback should focus on the reasoning as well as the final answer, since a correct result can sometimes come from a lucky or faulty process.

Evidence for worked examples is strongest for well-structured tasks with identifiable procedures, but not all learning has one model path. An essay or scientific investigation involves choices that can be justified in several ways. In those settings, annotated models can still reveal decisions, provided students compare alternatives rather than imitate one formula. A worked solution is a temporary scaffold: it should make expert thinking visible, then step aside as the learner becomes able to direct the process.`,
    questions: [
      { prompt: 'Why can a worked solution help a beginner?', options: ['It reduces some demands on working memory', 'It removes every need to think', 'It proves only one method can exist', 'It guarantees immediate expertise'], answer: 0, explanation: 'Showing a sequence reduces the number of rules and decisions a beginner must manage at once.' },
      { prompt: 'Which activity keeps a learner actively engaged with a model?', options: ['Copying every symbol without comment', 'Looking only at the final number', 'Predicting a missing step and explaining its reason', 'Skipping all comparisons'], answer: 2, explanation: 'Prediction and self-explanation direct attention to the decisions connecting the steps.' },
      { prompt: 'What does the expertise-reversal effect suggest?', options: ['Experts always need more detailed guidance', 'Support that helps beginners may become unnecessary later', 'Beginners should avoid examples', 'Knowledge never changes how a model is used'], answer: 1, explanation: 'As learners gain organised knowledge, fully explained material can become redundant rather than helpful.' },
      { prompt: 'What does it mean to fade a worked solution?', options: ['Make the print harder to see', 'Remove feedback after the first problem', 'Replace reasoning with answer copying', 'Gradually remove steps as learners take more control'], answer: 3, explanation: 'Fading shifts responsibility from the completed model to the learner over a series of tasks.' },
    ],
    writingPrompt: 'Write 140–180 words explaining how worked solutions could be used in one Year 9 topic. Describe how the model would show reasoning, how support would fade and how learning would be checked.',
    writingKeywords: ['solution', 'step', 'reasoning', 'model', 'support', 'independent'],
    vocabulary: [
      { term: 'overload', definition: 'to place more demand on a system or person than can be managed', example: 'Too many unfamiliar steps can overload working memory.' },
      { term: 'procedure', definition: 'an ordered set of actions used to complete a task', example: 'The example made the scientific procedure visible.' },
      { term: 'redundant', definition: 'no longer needed because it repeats what is already known', example: 'The expert found the basic explanation redundant.' },
      { term: 'fade', definition: 'to reduce something gradually', example: 'The teacher began to fade the prompts after several examples.' },
      { term: 'scaffold', definition: 'temporary support that helps someone complete a developing skill', example: 'The sentence frame was a scaffold, not a permanent formula.' },
    ],
  },
  {
    id: 'why-goals-need-feedback',
    theme: 'Learning',
    title: 'Why Goals Need Feedback',
    dek: 'A goal sets a direction, while feedback shows the gap between intention and current performance.',
    minutes: 16,
    passage: `“Improve my writing” sounds positive, but it gives a student little guidance during the next draft. A useful goal describes a desired result clearly enough for progress to be judged. For example, “support each main claim with relevant evidence” directs attention towards a feature of the work. Yet even a clear goal cannot show whether the student is moving towards it. That requires feedback.

Feedback supplies information about the gap between current performance and the goal. It might come from a teacher, a classmate, a checklist or the result of the task itself. If a reader cannot identify how a quotation supports a claim, the writer has evidence about what to revise. The information becomes useful only when there is time and a possible action for closing the gap.

Goals and feedback can both fail when they focus on the wrong measure. A student who aims to write 500 words may meet the number while repeating weak ideas. A reading app may praise a long streak even if the learner recalls little. Easy-to-count measures can support consistency, but they should not replace evidence of quality or understanding.

Feedback may also prompt different responses. If the gap seems manageable, a learner may increase effort or change strategy. If the target feels impossible or every comment sounds like a judgement of ability, the learner may abandon the goal. Breaking a distant aim into achievable stages can help, but making targets effortless would provide no direction for growth. The level of challenge needs review as performance changes.

Effective learning therefore uses a loop: set a meaningful goal, attempt the task, gather relevant information and adjust either the strategy or, when justified, the target. The loop is not mechanical. Some feedback is inaccurate, and some goals deserve reconsideration. Learners must ask whether the measure reflects what matters. A goal without feedback is a destination without a position; feedback without a goal is information without a clear purpose.`,
    questions: [
      { prompt: 'Why is “improve my writing” a weak guide for a draft?', options: ['It is too specific to allow revision', 'It does not identify a feature by which progress can be judged', 'It focuses too strongly on evidence', 'It provides too much task feedback'], answer: 1, explanation: 'The phrase names a general wish but does not show what the learner should attend to or measure.' },
      { prompt: 'When does feedback become useful?', options: ['When it identifies a gap and the learner can act on it', 'When it arrives after revision is impossible', 'When it judges fixed ability', 'When it replaces the goal'], answer: 0, explanation: 'Information about performance supports learning when it leads to a possible next action.' },
      { prompt: 'What risk comes with easy-to-count measures?', options: ['They can never support consistency', 'They make every target impossible', 'They may reward quantity while missing quality', 'They always provide detailed understanding'], answer: 2, explanation: 'Word totals and streaks may be achieved without demonstrating strong ideas or recall.' },
      { prompt: 'Which sequence represents the recommended learning loop?', options: ['Wait, judge, finish, forget', 'Count, reward, repeat, submit', 'Choose a target and ignore new information', 'Set a goal, attempt, gather feedback and adjust'], answer: 3, explanation: 'The conclusion presents goal setting, performance, relevant information and adjustment as a continuing cycle.' },
    ],
    writingPrompt: 'Write 140–180 words proposing a meaningful learning goal for one Year 9 subject. Explain what feedback would show progress, what action could follow and why a simple count may be insufficient.',
    writingKeywords: ['goal', 'feedback', 'progress', 'evidence', 'strategy', 'quality'],
    vocabulary: [
      { term: 'relevant', definition: 'directly connected with the matter being considered', example: 'The paragraph needed relevant evidence for its main claim.' },
      { term: 'performance', definition: 'how well a person carries out a task', example: 'The quiz provided information about current performance.' },
      { term: 'consistency', definition: 'the quality of continuing in a regular or similar way', example: 'The reading calendar supported consistency across the term.' },
      { term: 'manageable', definition: 'able to be handled or achieved with reasonable effort', example: 'Dividing the project made the next stage manageable.' },
      { term: 'mechanical', definition: 'done automatically without enough thought or judgement', example: 'Using the checklist became mechanical until the class discussed its purpose.' },
    ],
  },
  {
    id: 'role-of-prior-knowledge',
    theme: 'Learning',
    title: 'The Role of Prior Knowledge',
    dek: 'What learners already know helps them interpret new information, but it can also carry misconceptions forward.',
    minutes: 17,
    passage: `Two students can read the same paragraph and understand different amounts. One may recognise the topic, connect unfamiliar details to a familiar framework and predict what is likely to come next. The other may have to process every term separately. This difference shows the influence of prior knowledge: the facts, concepts and experiences already available to a learner.

Prior knowledge reduces mental effort by organising details into meaningful groups. A person who understands the basic structure of government can place a new fact about an election within that structure. Without the framework, the fact may remain isolated and easy to forget. Relevant knowledge also supports inference. A reader can combine what a text states with what is already known to reach a conclusion that is implied rather than directly written.

However, existing knowledge is not always accurate. A student who believes that seasons occur because Earth moves much closer to the Sun may interpret a new diagram through that misconception. Simply adding more facts may not repair it. The learner needs to make the original idea visible, compare its predictions with evidence and build a better explanation.

Experience can also differ across students. A text that assumes knowledge of snow, cricket or a particular family routine may be easier for some readers than others. This is not a measure of general ability. Teachers can provide images, definitions and brief background information so that success does not depend on having encountered one cultural setting outside school. They should also invite students to contribute relevant knowledge without expecting one person to represent an entire group.

Before a new topic, a quick concept map, discussion or low-stakes question can reveal useful starting points and possible errors. During learning, students can deliberately link each new idea to something known and then test whether the connection is valid. Prior knowledge is neither an empty container nor an unquestionable authority. It is the starting structure through which new learning is interpreted, revised and extended.`,
    questions: [
      { prompt: 'How can accurate prior knowledge reduce mental effort?', options: ['It organises new details into meaningful groups', 'It makes every new fact unnecessary', 'It prevents all forgetting', 'It removes differences between learners'], answer: 0, explanation: 'An existing framework gives separate details a place and relationship rather than leaving them isolated.' },
      { prompt: 'What is an inference?', options: ['A detail copied exactly from a sentence', 'A conclusion reached by combining text and existing knowledge', 'Any belief that existed before reading', 'An error that cannot be changed'], answer: 1, explanation: 'The passage explains that readers use stated information and what they know to reach implied conclusions.' },
      { prompt: 'Why may adding facts fail to correct a misconception?', options: ['Evidence never changes prior knowledge', 'Every first idea is accurate', 'New information may be interpreted through the faulty idea', 'Diagrams cannot support understanding'], answer: 2, explanation: 'An existing misconception can shape how new facts are understood, so it must be examined and compared with evidence.' },
      { prompt: 'Why should teachers sometimes supply background information?', options: ['To ensure all students have identical lives', 'To avoid asking students what they know', 'To make cultural experience the main measure of ability', 'To prevent success depending on experiences outside school'], answer: 3, explanation: 'Images, definitions and context can provide a fair starting point when a text assumes experiences not shared by everyone.' },
    ],
    writingPrompt: 'Write 140–180 words explaining how a teacher could activate and check prior knowledge before one new topic. Include a possible misconception or experience gap and describe a fair response.',
    writingKeywords: ['knowledge', 'connection', 'framework', 'misconception', 'background', 'evidence'],
    vocabulary: [
      { term: 'framework', definition: 'an organised structure of ideas used to understand information', example: 'The timeline provided a framework for the historical events.' },
      { term: 'inference', definition: 'a conclusion based on evidence and reasoning rather than a direct statement', example: 'The reader made an inference from the muddy footprints.' },
      { term: 'misconception', definition: 'an incorrect understanding or belief', example: 'The experiment challenged a common misconception about weight.' },
      { term: 'interpret', definition: 'to understand or explain the meaning of something', example: 'Prior experience affected how each student interpreted the graph.' },
      { term: 'activate', definition: 'to bring knowledge or a process into use', example: 'The opening question helped activate knowledge from last term.' },
    ],
  },
  {
    id: 'can-background-music-help-study',
    theme: 'Learning',
    title: 'Can Background Music Help Study?',
    dek: 'Background music may support mood or mask noise, but its effect depends on the listener, sound and task.',
    minutes: 15,
    passage: `For some students, beginning homework means choosing a playlist. Music may make a dull session more pleasant, cover unpredictable household noise or signal that study time has begun. These effects can help a learner settle. They do not necessarily mean that music improves the thinking required by the task.

Working memory has limited capacity. When a task involves reading, planning sentences or learning verbal material, lyrics can compete with the words being processed. Music that changes suddenly or carries strong personal meaning may also capture attention. A familiar, quiet instrumental track is less likely to interrupt some listeners, but “less likely” is not the same as harmless for everyone.

Research findings vary. Studies differ in the music chosen, the difficulty of the task, volume, participants and measures of performance. Some report small benefits for mood or simple repetitive work; others find no change or poorer results, particularly for demanding language tasks. People can also enjoy music while overestimating how well they worked. A preference is relevant because discomfort can distract, but preference alone is not evidence of better learning.

Students can run a cautious personal comparison. They might complete similar sets of problems in quiet and with one consistent type of low-volume music. They could record accuracy and time, then test recall the next day. Several sessions are better than one because sleep, topic difficulty and mood vary. The comparison will not be a perfect experiment, but it is more informative than relying on a single impression.

The result may support different choices for different tasks. Music could accompany organising files or practising familiar calculations, while silence may suit close reading or drafting an argument. Volume should remain safe, and headphones must not block instructions or awareness in shared places. Background music is best treated as an adjustable study condition, not a universal brain boost.`,
    questions: [
      { prompt: 'How might music help a student begin studying without improving thinking directly?', options: ['It may create a routine or mask unpredictable noise', 'It increases working-memory capacity permanently', 'It makes all tasks equally easy', 'It guarantees later recall'], answer: 0, explanation: 'The opening separates support for settling into study from improvement in the mental work itself.' },
      { prompt: 'Why are lyrics a particular concern during reading?', options: ['All music damages hearing', 'Songs prevent any words entering memory', 'Lyrics may compete with the verbal material being processed', 'Reading requires loud instrumental sound'], answer: 2, explanation: 'Both the task and the lyrics place demands on language-related processing.' },
      { prompt: 'Why are several comparison sessions better than one?', options: ['They guarantee a controlled laboratory experiment', 'They reduce the influence of day-to-day variation', 'They allow the music to become louder', 'They remove the need to measure accuracy'], answer: 1, explanation: 'Sleep, difficulty and mood can vary, so repeated sessions provide a fairer personal comparison.' },
      { prompt: 'What is the author’s main recommendation?', options: ['Use one playlist for every learner and subject', 'Judge effectiveness only by enjoyment', 'Ban music from all independent work', 'Treat music as a condition to adjust according to evidence and task'], answer: 3, explanation: 'The conclusion rejects a universal rule and recommends flexible choices based on measured work and task demands.' },
    ],
    writingPrompt: 'Write 140–180 words recommending whether background music should be used for one particular study task. Use evidence from the passage and explain how the recommendation could be tested fairly.',
    writingKeywords: ['music', 'study', 'task', 'attention', 'accuracy', 'compare'],
    vocabulary: [
      { term: 'unpredictable', definition: 'not able to be known or expected in advance', example: 'Soft music covered some unpredictable sounds from the kitchen.' },
      { term: 'capacity', definition: 'the amount that a system is able to contain or manage', example: 'Working memory has a limited capacity.' },
      { term: 'verbal', definition: 'connected with words or language', example: 'Lyrics interfered with the verbal task.' },
      { term: 'repetitive', definition: 'involving the same action or pattern many times', example: 'Music made the repetitive sorting activity feel less dull.' },
      { term: 'adjustable', definition: 'able to be changed to suit a situation', example: 'The student treated sound as an adjustable study condition.' },
    ],
  },
  {
    id: 'what-makes-a-good-explanation',
    theme: 'Learning',
    title: 'What Makes a Good Explanation?',
    dek: 'A strong explanation connects causes, evidence and ideas for a particular audience rather than listing facts.',
    minutes: 18,
    passage: `An answer can contain correct facts and still fail to explain. Listing that dark surfaces absorb more radiation and that a black car becomes hot does not yet show how the ideas connect. An explanation makes a relationship visible: it answers how or why by linking a claim to causes, mechanisms, reasons or evidence.

Good explanations are selective. They include what the audience needs and leave out detail that would obscure the main relationship. Selection depends on prior knowledge. A primary student may need an everyday comparison, while a Year 9 science class may need technical terms and a diagram. Clear language is not the same as childish language; it is language that the intended reader can follow accurately.

Structure also matters. A useful explanation often begins with the outcome, identifies the important parts and shows a chain between them. Words such as because, therefore and as a result can signal links, but adding them does not repair faulty reasoning. Each link must be supported. Examples can make a general idea concrete, while a carefully chosen analogy can highlight a shared pattern. Every analogy has limits, so the speaker should explain where the comparison stops working.

More detail is not always better. An expert may overwhelm a beginner with exceptions before establishing the central idea. On the other hand, an explanation can become so simple that it hides a condition or produces a misconception. Testing an explanation with the audience helps locate this balance. Listeners can paraphrase the account, predict a new case or point to the step that remains unclear.

A good explanation is therefore not a fixed package of words. It is a designed connection between an idea and a particular audience. Accuracy sets the boundary, but usefulness also requires relevant detail, logical links and opportunities for checking understanding. If the audience can only repeat the final sentence, the explanation may sound polished. If they can use the reasoning to interpret a new example, it has done more important work.`,
    questions: [
      { prompt: 'How does an explanation differ from a list of correct facts?', options: ['It avoids all evidence', 'It shows how ideas are connected', 'It includes every available detail', 'It uses only simple vocabulary'], answer: 1, explanation: 'The passage defines explanation through relationships such as causes, mechanisms and reasons.' },
      { prompt: 'Why should an explanation be selective?', options: ['The audience needs relevant detail without losing the main relationship', 'Accuracy matters only to experts', 'Technical language is always unclear', 'Examples should replace the central idea'], answer: 0, explanation: 'Selection keeps attention on what a particular audience needs to follow the idea accurately.' },
      { prompt: 'What warning does the author give about analogies?', options: ['They can never make ideas concrete', 'They should contain no shared pattern', 'Their limits need to be explained', 'They are accurate in every respect'], answer: 2, explanation: 'An analogy highlights selected similarities, but the comparison eventually stops fitting.' },
      { prompt: 'Which response best demonstrates understanding of an explanation?', options: ['Repeating the last sentence exactly', 'Counting the number of technical terms', 'Saying that the speaker sounded confident', 'Using the reasoning to interpret a new case'], answer: 3, explanation: 'Application to a new case shows that the audience can use the relationships rather than merely echo the wording.' },
    ],
    writingPrompt: 'Write 140–180 words explaining how to explain one difficult idea to a Year 9 audience. Discuss structure, useful detail and one way to check whether the audience has understood.',
    writingKeywords: ['explanation', 'audience', 'reasoning', 'evidence', 'detail', 'understanding'],
    vocabulary: [
      { term: 'mechanism', definition: 'the process by which a result is produced', example: 'The explanation described the mechanism that moved heat through the material.' },
      { term: 'selective', definition: 'carefully choosing some things rather than including everything', example: 'The speaker was selective about details so the main cause remained clear.' },
      { term: 'obscure', definition: 'to make something difficult to see or understand', example: 'Too many exceptions can obscure the central pattern.' },
      { term: 'analogy', definition: 'a comparison used to explain a shared relationship or pattern', example: 'The teacher used a traffic analogy to describe data flow.' },
      { term: 'paraphrase', definition: 'to express meaning again in different words', example: 'The listener paraphrased the explanation to check understanding.' },
    ],
  },
];
