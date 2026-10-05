import { scienceLessons1 } from './content/science-lessons-1.js';
import { scienceLessons2 } from './content/science-lessons-2.js';
import { scienceLessons3 } from './content/science-lessons-3.js';
import { scienceLessons4 } from './content/science-lessons-4.js';
import { scienceLessons5 } from './content/science-lessons-5.js';
import { technologyLessons1 } from './content/technology-lessons-1.js';
import { technologyLessons2 } from './content/technology-lessons-2.js';
import { technologyLessons3 } from './content/technology-lessons-3.js';
import { technologyLessons4 } from './content/technology-lessons-4.js';
import { societyLessons1 } from './content/society-lessons-1.js';
import { societyLessons2 } from './content/society-lessons-2.js';
import { societyLessons3 } from './content/society-lessons-3.js';
import { societyLessons4 } from './content/society-lessons-4.js';
import { learningLessons1 } from './content/learning-lessons-1.js';
import { learningLessons2 } from './content/learning-lessons-2.js';
import { learningLessons3 } from './content/learning-lessons-3.js';
import { learningLessons4 } from './content/learning-lessons-4.js';
import { australiaLessons1 } from './content/australia-lessons-1.js';
import { australiaLessons2 } from './content/australia-lessons-2.js';
import { australiaLessons3 } from './content/australia-lessons-3.js';
import { australiaLessons4 } from './content/australia-lessons-4.js';
import { cultureLessons1 } from './content/culture-lessons-1.js';
import { economicsLessons1 } from './content/economics-lessons-1.js';
import { healthLessons1 } from './content/health-lessons-1.js';

const coreLessons = [
  {
    id: 'cool-cities',
    theme: 'Environment',
    title: 'Can a City Learn to Stay Cool?',
    dek: 'How trees, roofs and better planning can reduce dangerous urban heat.',
    minutes: 18,
    passage: `On a summer afternoon, a city can be several degrees warmer than the countryside around it. Roads, roofs and concrete walls absorb the sun’s energy during the day and release it slowly after sunset. This “urban heat island” effect is more than an inconvenience. During a heatwave, it can increase illness, raise electricity use and make sleep difficult.

Some cities are responding by planting more trees. A mature tree provides shade, but it also cools the air when water evaporates from its leaves. However, planting is not as simple as putting a sapling into every empty space. Young trees need water and protection, and their roots require enough soil. If planners choose the wrong species, the trees may struggle as the climate becomes hotter and drier.

Other solutions focus on buildings. Light-coloured roofs reflect more sunlight than dark roofs, while “green roofs” support plants above offices and apartment blocks. These changes can reduce indoor temperatures, although they cost money to install. Critics argue that wealthier neighbourhoods often receive improvements first, even though poorer areas may have fewer trees and residents who are more vulnerable to extreme heat.

The strongest plans combine evidence with fairness. Temperature sensors can identify the hottest streets, while health data can reveal where people are most at risk. Communities can then help decide whether a neighbourhood needs shade at a bus stop, trees around a school or better insulation in older homes. A cooler city is not created by one impressive project. It develops through many practical decisions about who receives protection, where it is placed and how it will be maintained.`,
    questions: [
      { prompt: 'What causes the urban heat island effect?', options: ['Cities create more wind', 'Built surfaces absorb and release heat', 'Country areas receive less sunlight', 'Trees produce warm air at night'], answer: 1, explanation: 'The first paragraph explains that roads, roofs and walls absorb solar energy and release it slowly.' },
      { prompt: 'Why can tree planting fail?', options: ['Trees always increase electricity use', 'Only mature trees can grow in cities', 'Species, water and soil may be unsuitable', 'Communities usually oppose shade'], answer: 2, explanation: 'The passage identifies water, protection, soil and species choice as practical limits.' },
      { prompt: 'What concern do critics raise?', options: ['Sensors are never accurate', 'Green roofs make buildings hotter', 'Benefits may reach wealthy areas first', 'Bus stops should not have trees'], answer: 2, explanation: 'The third paragraph raises an equity concern about where improvements happen first.' },
      { prompt: 'Which statement best expresses the author’s main idea?', options: ['One dramatic project will solve urban heat', 'Cities should replace every roof with a garden', 'Cooling requires evidence, fairness and maintenance', 'Extreme heat is mainly a rural problem'], answer: 2, explanation: 'The final paragraph combines evidence, fair allocation and long-term maintenance.' },
    ],
    writingPrompt: 'Write 140–180 words arguing which cooling measure your local council should fund first. Use evidence from the passage and address one possible objection.',
    writingKeywords: ['heat', 'cool', 'tree', 'roof', 'council', 'shade'],
    vocabulary: [
      { term: 'absorb', definition: 'to take in energy, liquid or information', example: 'Dark pavement can absorb heat throughout the day.' },
      { term: 'vulnerable', definition: 'more likely to be harmed or affected', example: 'Older residents can be vulnerable during a heatwave.' },
      { term: 'insulation', definition: 'material that slows the movement of heat', example: 'Better insulation keeps a home cooler in summer.' },
      { term: 'equity', definition: 'fairness that accounts for different needs', example: 'Equity matters when public funds are limited.' },
      { term: 'maintain', definition: 'to keep something in good condition', example: 'The city must maintain young trees for years.' },
    ],
  },
  {
    id: 'sleep-memory',
    theme: 'Science',
    title: 'Why Sleep Is Part of Learning',
    dek: 'Rest does not interrupt learning; it helps the brain organise it.',
    minutes: 16,
    passage: `Students often treat sleep as time that can be exchanged for study. Before a test, staying awake for an extra two hours may appear useful. Yet research on memory suggests that sleep is not empty time. While the body rests, the brain continues to process experiences from the day.

When people learn something new, the memory is initially fragile. During sleep, especially deep sleep, patterns of brain activity linked to recent learning are repeated. Scientists describe this process as consolidation because it helps stabilise memories and connect them with older knowledge. Sleep can also make it easier to notice patterns. A student may struggle with a mathematical method at night but recognise the solution more quickly the next morning.

This does not mean that sleep can replace practice. The brain cannot strengthen information that was never understood in the first place. Effective learning still requires attention, retrieval practice and useful feedback. Sleep supports these activities; it does not perform them magically.

Screens create another difficulty. Bright light and stimulating content can delay the feeling of tiredness. More importantly, a phone beside the bed makes interruption easy. Even a short notification may break a period of deep sleep. Some students solve this problem by charging devices outside the bedroom and setting a regular stopping time for homework.

The practical lesson is not that every teenager must follow a perfect routine. It is that study plans should include recovery. A well-rested learner may complete fewer late-night minutes but use the next day’s lessons more effectively.`,
    questions: [
      { prompt: 'What is consolidation?', options: ['Forgetting unused information', 'Stabilising and connecting memories', 'Studying without feedback', 'Replacing practice with sleep'], answer: 1, explanation: 'The second paragraph defines consolidation as stabilising memories and linking them to older knowledge.' },
      { prompt: 'Why can sleep not replace practice?', options: ['Deep sleep is too short', 'Phones prevent every student sleeping', 'The brain needs learned material to strengthen', 'Practice only works in the morning'], answer: 2, explanation: 'The passage says the brain cannot strengthen information that was not understood.' },
      { prompt: 'What is the author’s view of perfect routines?', options: ['They are compulsory', 'They are impossible and useless', 'Recovery matters more than perfection', 'Only adults need them'], answer: 2, explanation: 'The conclusion emphasises including recovery rather than demanding perfection.' },
      { prompt: 'Which action is directly recommended?', options: ['Study until falling asleep', 'Keep notifications loud', 'Charge devices outside the bedroom', 'Avoid mathematical problems at night'], answer: 2, explanation: 'The fourth paragraph gives this as a practical strategy.' },
    ],
    writingPrompt: 'Write 140–180 words advising a Year 9 student who studies late every night. Explain two changes and justify them with evidence from the passage.',
    writingKeywords: ['sleep', 'study', 'memory', 'phone', 'rest', 'routine'],
    vocabulary: [
      { term: 'fragile', definition: 'easily damaged or changed', example: 'A new memory can be fragile before sleep.' },
      { term: 'consolidation', definition: 'the process of making something stronger or more stable', example: 'Sleep supports the consolidation of memory.' },
      { term: 'retrieval', definition: 'bringing stored information back to mind', example: 'Practice quizzes improve retrieval.' },
      { term: 'stimulating', definition: 'causing greater mental activity or excitement', example: 'A fast-paced video can be stimulating before bed.' },
      { term: 'recovery', definition: 'a return to a ready or healthy state', example: 'Good training plans include recovery.' },
    ],
  },
  {
    id: 'repair-culture',
    theme: 'Society',
    title: 'The Return of Repair',
    dek: 'Repair cafés challenge the idea that a broken object has no value.',
    minutes: 17,
    passage: `A toaster stops working, a jacket tears or a lamp develops a loose connection. For many households, replacing the item is faster than repairing it. Modern products can be difficult to open, spare parts may be unavailable, and professional repair sometimes costs almost as much as a new purchase.

Repair cafés offer a different response. At these community events, volunteers with practical skills help visitors investigate broken objects. The aim is not simply to provide free labour. Visitors are encouraged to watch, ask questions and take part. A successful repair therefore restores both an object and a small amount of confidence.

Supporters argue that repair reduces waste and preserves the energy and materials already used to manufacture a product. It can also pass knowledge between generations. Someone who has never held a soldering iron may learn from a retired technician, while an experienced sewer may show a teenager how to strengthen a damaged seam.

However, repair has limits. Electrical devices can be dangerous, and an untrained person should not attempt work that requires specialist knowledge. Some objects are designed in ways that make safe repair nearly impossible. Campaigners therefore support “right to repair” laws that require manufacturers to provide parts, instructions and reasonable access to diagnostic tools.

Repair culture does not demand that every object be saved forever. Instead, it asks people to pause before assuming that replacement is the only sensible option. That pause can reveal whether the real barrier is damage, design, missing knowledge or simply habit.`,
    questions: [
      { prompt: 'What is a key aim of a repair café?', options: ['To sell new appliances', 'To involve visitors in learning', 'To replace trained electricians', 'To collect damaged objects'], answer: 1, explanation: 'Visitors are encouraged to observe, ask questions and participate.' },
      { prompt: 'How can repair connect generations?', options: ['By making products more expensive', 'By transferring practical knowledge', 'By banning modern tools', 'By avoiding all professional work'], answer: 1, explanation: 'The passage gives examples of experienced people teaching younger visitors.' },
      { prompt: 'Why are right-to-repair laws proposed?', options: ['To make every repair free', 'To stop people buying products', 'To improve access to parts and information', 'To remove safety standards'], answer: 2, explanation: 'Campaigners want manufacturers to provide parts, instructions and diagnostic access.' },
      { prompt: 'What does the final “pause” encourage?', options: ['Automatic replacement', 'A closer examination of the real barrier', 'Ignoring unsafe electrical devices', 'Keeping every object forever'], answer: 1, explanation: 'The author asks readers to identify whether damage, design, knowledge or habit is the barrier.' },
    ],
    writingPrompt: 'Write 140–180 words arguing whether schools should teach basic repair skills. Use one example from the passage and consider a safety concern.',
    writingKeywords: ['repair', 'school', 'skill', 'safety', 'waste', 'object'],
    vocabulary: [
      { term: 'diagnostic', definition: 'used to identify the cause of a problem', example: 'The mechanic connected a diagnostic tool.' },
      { term: 'manufacture', definition: 'to make goods, usually in large quantities', example: 'Factories manufacture electronic devices.' },
      { term: 'preserve', definition: 'to protect something from loss or damage', example: 'Repair can preserve useful materials.' },
      { term: 'specialist', definition: 'a person with deep knowledge of one area', example: 'A specialist checked the damaged wiring.' },
      { term: 'barrier', definition: 'something that prevents progress', example: 'The cost of parts became a barrier to repair.' },
    ],
  },
  {
    id: 'quiet-maps',
    theme: 'Cities',
    title: 'Mapping the Sound of a Neighbourhood',
    dek: 'Noise maps reveal that the same street can feel different at different hours.',
    minutes: 15,
    passage: `Traditional maps show roads, buildings and parks, but they rarely show how a place sounds. Community researchers are changing this by creating sound maps. Volunteers walk through a neighbourhood, record noise levels and describe what they hear at different times.

The results can challenge assumptions. A street beside a railway may be peaceful between trains, while a narrow road with frequent delivery vehicles may remain noisy for hours. Numbers alone are not enough. Two sounds at the same measured volume can have different effects: birdsong may be pleasant, while an unpredictable alarm can create stress.

Sound maps can support better decisions. A school might move outdoor reading away from a loading zone, or a council might change delivery hours near apartments. Trees and walls can reduce some noise, but design choices must avoid creating hidden or unsafe spaces.

There are also questions about fairness. People who can afford better windows or quieter streets have more control over their environment. Renters may have little power to improve a noisy home. When councils collect sound data, they should therefore ask not only where noise is loudest, but also who has the fewest options for escaping it.

A sound map makes an invisible feature of city life easier to discuss. It cannot decide what level of noise is acceptable, because that judgement involves health, culture, work and personal preference. It can, however, give a community shared evidence for a more informed debate.`,
    questions: [
      { prompt: 'Why are volume measurements alone insufficient?', options: ['Volunteers cannot use meters', 'Sounds at the same volume may affect people differently', 'Birdsong is always louder than traffic', 'Railways are silent between trains'], answer: 1, explanation: 'The passage contrasts pleasant birdsong with a stressful alarm at the same measured volume.' },
      { prompt: 'What fairness issue does the author identify?', options: ['Everyone can buy better windows', 'Councils only map wealthy streets', 'Some residents have fewer ways to escape noise', 'Renters prefer alarms'], answer: 2, explanation: 'The fourth paragraph focuses on unequal control over noisy environments.' },
      { prompt: 'What can a sound map provide?', options: ['A final legal noise limit', 'Shared evidence for discussion', 'A guarantee of silence', 'A replacement for community judgement'], answer: 1, explanation: 'The conclusion says maps inform debate but do not make the judgement themselves.' },
      { prompt: 'Which is an example of using a sound map?', options: ['Building a railway through a school', 'Moving outdoor reading away from deliveries', 'Measuring only birds', 'Closing every apartment window'], answer: 1, explanation: 'This example appears in the third paragraph.' },
    ],
    writingPrompt: 'Write 140–180 words proposing one way to make your school quieter without making it less welcoming. Explain benefits and possible disadvantages.',
    writingKeywords: ['noise', 'quiet', 'sound', 'school', 'welcoming', 'student'],
    vocabulary: [
      { term: 'assumption', definition: 'an idea accepted without complete proof', example: 'The survey challenged our assumption about the street.' },
      { term: 'unpredictable', definition: 'not able to be known in advance', example: 'Unpredictable noise can make concentration difficult.' },
      { term: 'acceptable', definition: 'good enough or suitable in a situation', example: 'Residents disagreed about an acceptable noise level.' },
      { term: 'informed', definition: 'based on relevant knowledge or evidence', example: 'The data supported an informed decision.' },
      { term: 'preference', definition: 'a greater liking for one option', example: 'Sound preference differs between people.' },
    ],
  },
  {
    id: 'productive-struggle',
    theme: 'Learning',
    title: 'When Difficulty Helps',
    dek: 'A task can be challenging without being discouraging.',
    minutes: 16,
    passage: `A quick answer feels satisfying, so students often assume that easy learning is effective learning. Yet some difficulties can improve memory. When learners have to retrieve an idea, explain a choice or correct an error, they process the material more deeply than when they simply reread it.

Psychologists sometimes call these “desirable difficulties”. A short delay before reviewing a topic, for example, makes recall harder but can strengthen later memory. Mixing different types of problems also forces students to decide which method to use instead of repeating the same procedure automatically.

Difficulty is not automatically desirable. If a task is far beyond a learner’s current knowledge, effort may produce confusion rather than insight. Useful challenge sits near the edge of what a student can do with support. Clear feedback is essential because it helps the learner distinguish a productive mistake from a misunderstanding that needs correction.

Emotions matter too. A student who interprets every error as proof of low ability may avoid challenge. Teachers can respond by treating mistakes as information. Instead of saying only that an answer is wrong, they can identify which part of the reasoning was effective and where it changed direction.

Productive struggle is therefore neither effortless success nor endless frustration. It is a carefully supported period in which the learner has to think, receives feedback and tries again. The goal is not to make school harder for its own sake. The goal is to create the kind of effort that changes what a student can do next time.`,
    questions: [
      { prompt: 'Why can retrieval improve learning?', options: ['It removes all errors', 'It requires deeper processing', 'It makes every task easy', 'It replaces feedback'], answer: 1, explanation: 'The opening paragraph connects retrieval and explanation with deeper processing.' },
      { prompt: 'When is difficulty not useful?', options: ['When feedback is clear', 'When problems are mixed', 'When a task is far beyond current knowledge', 'When students try again'], answer: 2, explanation: 'The third paragraph warns that excessive difficulty can create confusion.' },
      { prompt: 'How should teachers treat mistakes?', options: ['As evidence of fixed ability', 'As information about reasoning', 'As reasons to remove challenge', 'As irrelevant to learning'], answer: 1, explanation: 'The fourth paragraph recommends identifying useful reasoning and the point where it changed.' },
      { prompt: 'What balance defines productive struggle?', options: ['Fast success without feedback', 'Permanent frustration', 'Supported challenge with feedback and another attempt', 'Rereading the same page'], answer: 2, explanation: 'The conclusion defines productive struggle as supported thinking, feedback and retrying.' },
    ],
    writingPrompt: 'Write 140–180 words explaining whether students should be allowed to correct and resubmit work. Use the passage and address one counterargument.',
    writingKeywords: ['correct', 'resubmit', 'feedback', 'mistake', 'student', 'work'],
    vocabulary: [
      { term: 'retrieve', definition: 'to bring stored information back to mind', example: 'The quiz asked students to retrieve facts without notes.' },
      { term: 'desirable', definition: 'worth having or seeking', example: 'A manageable challenge can be desirable.' },
      { term: 'distinguish', definition: 'to recognise the difference between things', example: 'Feedback helps us distinguish two types of error.' },
      { term: 'interpret', definition: 'to decide or explain what something means', example: 'She chose to interpret the mistake as useful evidence.' },
      { term: 'frustration', definition: 'annoyance caused by being unable to succeed', example: 'Too much difficulty can lead to frustration.' },
    ],
  },
];

export const legacyLessons = [
  ...coreLessons,
  ...scienceLessons1,
  ...scienceLessons2,
  ...technologyLessons1,
  ...technologyLessons2,
  ...societyLessons1,
  ...societyLessons2,
  ...learningLessons1,
  ...learningLessons2,
  ...australiaLessons1,
  ...australiaLessons2,
];

export const lessons = [
  ...legacyLessons,
  ...scienceLessons3,
  ...scienceLessons4,
  ...scienceLessons5,
  ...technologyLessons3,
  ...technologyLessons4,
  ...societyLessons3,
  ...societyLessons4,
  ...learningLessons3,
  ...learningLessons4,
  ...australiaLessons3,
  ...australiaLessons4,
  ...cultureLessons1,
  ...economicsLessons1,
  ...healthLessons1,
];
