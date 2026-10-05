export const healthLessons1 = [
  {
    id: 'why-teenagers-need-more-sleep',
    theme: 'Health Science',
    title: 'Why Teenagers Need More Sleep',
    dek: 'Changes in body clocks and growing brains help explain why teenagers often sleep and wake later.',
    minutes: 16,
    passage: `Sleep is not simply time when the body switches off. During sleep, the brain continues to organise memories, regulate emotions and support learning. The body also carries out processes linked to growth, tissue repair and immune function. Although individuals differ, teenagers generally need more sleep than most adults because adolescence is a period of rapid physical and neurological development.

A teenager’s sleep timing is influenced by the circadian rhythm, an internal cycle that helps coordinate alertness and sleep across roughly 24 hours. During puberty, the release of melatonin, a hormone associated with sleepiness, tends to shift later in the evening. This biological change can make it difficult to fall asleep early, even when a teenager must wake early for school. It is not just a matter of choosing to stay awake.

Sleep pressure also matters. It builds while a person is awake and decreases during sleep. Bright light in the evening, especially from screens held close to the face, can delay feelings of sleepiness in some people. Homework, sport, paid work, social activity, stress and early transport schedules may further shorten the available sleep period.

Too little sleep does not affect everyone in exactly the same way. However, repeated sleep restriction is associated with slower reaction time, reduced concentration and changes in mood. Sleeping very late on weekends may partly repay a sleep debt, but large shifts in timing can make Monday mornings harder by moving the body clock again.

Helpful routines may include keeping wake times reasonably consistent, allowing enough time in bed and reducing bright light close to bedtime. A dark, quiet sleep environment can also help. Persistent sleep difficulties, severe daytime sleepiness or concerns about mood deserve support from a parent, carer, school wellbeing staff member or qualified health professional. Sleep is shaped by biology and circumstances, so blaming tired teenagers misses much of the science.`,
    questions: [
      { prompt: 'Why do many teenagers find it difficult to fall asleep early?', options: ['Their bodies stop producing all hormones', 'Puberty can shift melatonin release and the circadian rhythm later', 'Sleep pressure disappears permanently during adolescence', 'Teenagers no longer need a regular body clock'], answer: 1, explanation: 'The passage explains that puberty tends to delay melatonin release, shifting natural sleepiness later in the evening.' },
      { prompt: 'What happens to sleep pressure?', options: ['It builds during waking hours and falls during sleep', 'It appears only when a screen is used', 'It is highest immediately after a full night of sleep', 'It replaces the circadian rhythm'], answer: 0, explanation: 'According to the passage, time awake increases sleep pressure, while sleeping reduces it.' },
      { prompt: 'Why might sleeping very late on weekends make Monday morning difficult?', options: ['Weekend sleep permanently prevents tissue repair', 'Extra sleep always reduces concentration', 'A large timing shift can move the body clock again', 'Schools require less sleep on Mondays'], answer: 2, explanation: 'The passage notes that a major change in weekend timing may shift the circadian rhythm, making an early Monday start harder.' },
      { prompt: 'Which conclusion best reflects the passage?', options: ['Teenage tiredness is always caused by poor choices', 'One sleep routine works equally well for everybody', 'Screens are the only cause of insufficient sleep', 'Teenage sleep reflects both biological changes and daily circumstances'], answer: 3, explanation: 'The author combines puberty-related changes with light exposure, schedules, stress and other circumstances rather than blaming one cause.' },
    ],
    writingPrompt: 'Write 140–180 words explaining why teenage sleep can differ from adult sleep. Use evidence about body clocks and sleep pressure, identify two practical barriers and suggest two realistic supports.',
    writingKeywords: ['sleep', 'circadian rhythm', 'melatonin', 'adolescence', 'routine', 'concentration'],
    vocabulary: [
      { term: 'circadian rhythm', definition: 'an internal cycle that helps regulate sleep and alertness across about 24 hours', example: 'Morning light helped Mia keep her circadian rhythm consistent.' },
      { term: 'melatonin', definition: 'a hormone involved in signalling that it is time for sleep', example: 'Melatonin levels usually rise as the evening becomes darker.' },
      { term: 'neurological', definition: 'relating to the brain, spinal cord and nerves', example: 'Adolescence involves important neurological development.' },
      { term: 'sleep pressure', definition: 'the biological drive for sleep that grows during time awake', example: 'His sleep pressure increased after a long day.' },
      { term: 'restriction', definition: 'the act of limiting the amount or availability of something', example: 'Repeated sleep restriction made concentrating in class more difficult.' },
    ],
  },
  {
    id: 'science-of-hydration',
    theme: 'Human Biology',
    title: 'The Science of Hydration',
    dek: 'Water supports essential body processes, yet hydration needs change with activity, weather, food and individual biology.',
    minutes: 16,
    passage: `Water makes up a large part of the human body and provides the setting for many chemical reactions. It helps transport nutrients and wastes, lubricate joints and regulate temperature. Water is continually lost through urine, breathing, sweat and faeces, then replaced through drinks and water-containing foods. Hydration describes the balance between these gains and losses.

The body controls this balance closely. When the blood becomes more concentrated, specialised receptors help trigger thirst and the release of a hormone that tells the kidneys to conserve water. Urine then usually becomes more concentrated. Thirst is useful, but it may not always keep pace during prolonged exercise, illness or very hot conditions. Urine colour can offer a rough clue, although food, supplements and some medicines can change it, so it is not a perfect test.

Fluid needs are not a single fixed number for everyone. Body size, temperature, humidity, clothing, activity and sweat rate all matter. An athlete exercising in hot weather may lose far more water and salt than a student sitting indoors. Foods such as fruit, yoghurt and soup also contribute fluid, meaning drinking water is not the only source.

During ordinary daily activities, regular access to water and responding to thirst will suit many healthy people. During long or intense exercise, replacing some electrolytes may be useful because sweat contains salts, particularly sodium. However, sports drinks are not automatically necessary for short, light activity, and they may contain substantial sugar.

More water is not always safer. Drinking an extreme amount faster than the kidneys can remove it can dilute sodium in the blood, a potentially dangerous condition. Hydration advice should therefore consider context rather than promote a competition to drink the most. People who are unwell, have ongoing symptoms or have been given fluid restrictions should seek individual guidance from a qualified health professional rather than relying on general online rules.`,
    questions: [
      { prompt: 'How does the body respond when blood becomes more concentrated?', options: ['It stops the kidneys working', 'It triggers thirst and signals the kidneys to conserve water', 'It removes all sodium through breathing', 'It prevents water from entering food'], answer: 1, explanation: 'The passage states that receptors contribute to thirst and hormone release, leading the kidneys to conserve water.' },
      { prompt: 'Why is urine colour only a rough guide to hydration?', options: ['Urine never contains water', 'It can be changed by food, supplements and some medicines', 'Its colour measures sweat rate exactly', 'It is identical in every person'], answer: 1, explanation: 'Several factors unrelated to hydration can alter urine colour, so the observation cannot provide a perfect measurement.' },
      { prompt: 'When might replacing electrolytes be useful?', options: ['During every short classroom lesson', 'Only when a person dislikes water', 'During prolonged or intense exercise with substantial sweating', 'Whenever fruit is eaten'], answer: 2, explanation: 'Because sweat contains salts, electrolyte replacement may help during long or demanding exercise, especially when sweat losses are high.' },
      { prompt: 'What central idea does the passage communicate?', options: ['Everybody should drink exactly the same volume', 'The largest possible water intake is always healthiest', 'Hydration depends on balancing changing gains and losses', 'Sports drinks are essential for all movement'], answer: 2, explanation: 'The passage defines hydration as a balance and repeatedly shows that needs vary with conditions, activity, food and the individual.' },
    ],
    writingPrompt: 'Write 140–180 words explaining hydration to students preparing for a summer sports day. Describe how the body manages water, identify factors that change fluid needs and include one caution.',
    writingKeywords: ['hydration', 'water', 'thirst', 'kidneys', 'sweat', 'electrolytes'],
    vocabulary: [
      { term: 'hydration', definition: 'the state of having an appropriate balance of water in the body', example: 'The team planned water breaks to support hydration.' },
      { term: 'receptor', definition: 'a cell or structure that detects a particular change or signal', example: 'A receptor detected a change in blood concentration.' },
      { term: 'concentrated', definition: 'containing a relatively large amount of a substance in a given volume', example: 'The kidneys produced more concentrated urine to conserve water.' },
      { term: 'electrolyte', definition: 'a mineral with an electrical charge that helps body processes', example: 'Sodium is an electrolyte lost in sweat.' },
      { term: 'dilute', definition: 'to make a substance less concentrated by adding liquid', example: 'Excess water can dilute sodium in the blood.' },
    ],
  },
  {
    id: 'how-muscles-adapt-to-training',
    theme: 'Sports Science',
    title: 'How Muscles Adapt to Training',
    dek: 'Exercise provides a stimulus, but gradual challenge and recovery allow muscles to become better suited to a task.',
    minutes: 17,
    passage: `A muscle does not become stronger during a workout itself. Exercise provides a challenge, or stimulus, that temporarily disturbs the body’s usual state. In the hours and days afterwards, cells repair tissue and adjust to the work. If the challenge is suitable and recovery is adequate, the muscle may become better prepared for a similar task in the future.

Resistance training, such as lifting a weight or working against body weight, creates mechanical tension in muscle fibres. It also activates chemical signals that can increase the building of muscle proteins. Over time, individual fibres may grow in cross-sectional area, a change called hypertrophy. Early strength gains, however, often occur before much growth is visible. The nervous system becomes more skilled at recruiting motor units and coordinating movement, allowing existing muscle to produce force more effectively.

Endurance training leads to different, though sometimes overlapping, adaptations. Muscle cells may develop more mitochondria, structures that release usable energy through aerobic respiration. Networks of tiny blood vessels can become denser, improving delivery of oxygen and removal of some waste products. These changes help muscles sustain repeated activity; they do not necessarily produce large muscles.

Adaptation follows the principle of specificity: the body responds to the kind of demand placed on it. Cycling, sprinting and heavy lifting therefore produce different patterns of change. Progress also requires overload, meaning a challenge beyond what is already easy. Overload does not mean making every session maximal. Workload can increase gradually through resistance, repetitions, duration or complexity.

Recovery supplies time and materials for adaptation. Sleep, sufficient food and easier days all contribute. Muscles and tendons may adapt at different rates, so sudden jumps in training can increase injury risk even when motivation is high. Pain that is sharp, persistent or worsening should not be treated as proof of progress; it is sensible to stop and seek guidance from a qualified coach or health professional. Effective training is a repeated cycle of appropriate challenge, recovery and adjustment.`,
    questions: [
      { prompt: 'Why can strength improve before muscles visibly grow?', options: ['The nervous system recruits and coordinates motor units more effectively', 'Muscle fibres stop containing protein', 'Aerobic respiration ends during training', 'Every tendon immediately doubles in size'], answer: 0, explanation: 'The passage explains that early gains often result from improved neural recruitment and coordination of existing muscle.' },
      { prompt: 'Which adaptation is especially associated with endurance training?', options: ['Fewer blood vessels around muscle', 'Loss of all motor units', 'More mitochondria within muscle cells', 'A permanent need for maximal effort'], answer: 2, explanation: 'Endurance work can increase mitochondria, supporting the release of energy through aerobic respiration over sustained activity.' },
      { prompt: 'What does specificity mean in training?', options: ['All activities create identical adaptations', 'The body adapts to the particular demands placed on it', 'Only professional athletes can adapt', 'Recovery matters only after cycling'], answer: 1, explanation: 'Specificity explains why cycling, sprinting and heavy lifting lead to different patterns of adaptation.' },
      { prompt: 'Why should training load usually rise gradually?', options: ['Muscles never respond to overload', 'Sudden increases can exceed the different adaptation rates of tissues', 'Gradual training prevents all tiredness', 'Maximum effort is required in every session'], answer: 1, explanation: 'The passage notes that muscles and tendons can adapt at different speeds, so abrupt workload jumps may increase injury risk.' },
    ],
    writingPrompt: 'Write 140–180 words explaining how a beginner could train for greater muscular strength safely. Discuss neural and muscular adaptation, apply overload and specificity, and explain why recovery matters.',
    writingKeywords: ['muscle', 'adaptation', 'hypertrophy', 'motor unit', 'overload', 'recovery'],
    vocabulary: [
      { term: 'stimulus', definition: 'a change or event that causes a biological response', example: 'The climbing session provided a new training stimulus.' },
      { term: 'hypertrophy', definition: 'an increase in the size of tissue caused by growth of its cells', example: 'Consistent resistance training can contribute to muscle hypertrophy.' },
      { term: 'motor unit', definition: 'a nerve cell and the muscle fibres it controls', example: 'The nervous system recruited another motor unit to produce force.' },
      { term: 'mitochondrion', definition: 'a structure in a cell that releases usable energy from nutrients', example: 'Each mitochondrion supports aerobic energy production.' },
      { term: 'specificity', definition: 'the principle that adaptation reflects the particular type of training performed', example: 'Training hills applied specificity to the runner’s goal.' },
    ],
  },
  {
    id: 'reading-health-claims-critically',
    theme: 'Health Literacy',
    title: 'Reading Health Claims Critically',
    dek: 'Strong health decisions depend on the quality of evidence, not the confidence or popularity of a claim.',
    minutes: 18,
    passage: `Health claims appear in advertisements, news reports, videos and posts from friends. Some provide useful information; others exaggerate uncertain findings or are designed mainly to sell a product. Reading critically does not mean rejecting every claim. It means asking how the conclusion was reached and whether the evidence is strong enough to support it.

A useful first question is: compared with what? A claim that a product “doubles improvement” sounds impressive, but an increase from one person in a hundred to two is small in absolute terms. Readers should look for the number of participants, the size of the effect and the group studied. Results from ten adults may not apply to thousands of teenagers.

Study design also matters. In a randomised controlled trial, participants are allocated by chance to different groups, helping researchers balance other influences. A control group provides a comparison. Blinding can reduce the effect of expectations on participants or researchers. No design removes every weakness, and one study rarely settles a complex question.

Correlation is another common source of confusion. If people who eat a certain food also report better health, the food may not be the cause. They might differ in income, activity, sleep or access to health care. These alternative influences are called confounding factors. Repeated results from well-designed studies make a causal explanation more convincing, especially when a plausible biological mechanism exists.

Readers should also inspect the source. Was the research reviewed by other experts? Who funded it? Funding does not automatically make a result false, but undisclosed financial interests can increase the risk of bias. Testimonials and “before and after” images cannot show what usually happens or rule out other causes.

Reliable health information usually states limitations and avoids promises of a guaranteed cure. When a claim could affect treatment, medication or serious symptoms, checking it with a qualified health professional is safer than acting on a post. Critical reading replaces quick certainty with better questions.`,
    questions: [
      { prompt: 'Why can a claim that a result “doubled” be misleading?', options: ['Relative change can sound large while the absolute change is small', 'Doubling always means the study was randomised', 'Percentages cannot describe health data', 'A doubled result proves causation'], answer: 0, explanation: 'The passage contrasts a dramatic relative description with a small change from one person in a hundred to two.' },
      { prompt: 'What is one purpose of random allocation in a controlled trial?', options: ['To guarantee that the treatment works', 'To balance other influences between groups', 'To remove the need for a comparison group', 'To ensure every participant knows their group'], answer: 1, explanation: 'Random allocation helps distribute other characteristics across groups, making the comparison fairer.' },
      { prompt: 'Why does correlation alone not establish causation?', options: ['Correlations occur only in advertisements', 'Two variables can never change together', 'Other factors may influence both the behaviour and the outcome', 'Biological mechanisms are never relevant'], answer: 2, explanation: 'The passage gives income, activity, sleep and health-care access as possible confounding factors.' },
      { prompt: 'Which source deserves the greatest caution?', options: ['A review that explains uncertainty and limitations', 'A large trial with a control group', 'A guaranteed-cure advertisement supported only by testimonials', 'Several studies with similar results'], answer: 2, explanation: 'Guaranteed language and testimonials do not establish typical effects or exclude other explanations.' },
    ],
    writingPrompt: 'Write 140–180 words evaluating a fictional online claim that a drink “doubles concentration”. Explain what evidence you would request, identify two possible weaknesses and recommend a responsible next step.',
    writingKeywords: ['claim', 'evidence', 'control group', 'correlation', 'confounding', 'bias'],
    vocabulary: [
      { term: 'absolute', definition: 'expressed as the actual amount rather than in relation to another value', example: 'The absolute increase was only one person in every hundred.' },
      { term: 'randomised', definition: 'assigned by chance to one of two or more study groups', example: 'Participants were randomised to the treatment or control group.' },
      { term: 'correlation', definition: 'a relationship in which two measurements vary together', example: 'The correlation did not prove that one behaviour caused the outcome.' },
      { term: 'confounding factor', definition: 'an outside influence that may distort an apparent relationship', example: 'Sleep was a possible confounding factor in the study.' },
      { term: 'bias', definition: 'a systematic influence that can distort a judgement or result', example: 'Blinding was used to reduce the risk of bias.' },
    ],
  },
  {
    id: 'why-social-connection-affects-wellbeing',
    theme: 'Wellbeing Science',
    title: 'Why Social Connection Affects Wellbeing',
    dek: 'Supportive relationships can shape stress, behaviour and belonging, but connection is about quality as well as quantity.',
    minutes: 16,
    passage: `Humans are a social species. Across much of human history, sharing information, food and protection improved a group’s chances of survival. Modern life is different, yet relationships still influence how people interpret challenges, develop identity and find practical support. Social connection is not a luxury added after physical needs; it is one part of wellbeing.

Support can take several forms. Emotional support includes listening and showing care. Practical support might involve helping with a task or providing transport. Informational support can offer advice or a different perspective. Knowing that support is available may make a stressful situation feel more manageable, even when the problem itself remains.

Researchers find associations between supportive relationships and outcomes such as life satisfaction, healthy routines and recovery from stress. Several pathways may contribute. Friends can encourage useful habits, shared activities can create purpose, and calm conversation may reduce a sense of threat. However, an association does not prove that one factor alone caused the outcome. Health, personality, income and community conditions can influence both relationships and wellbeing.

The number of contacts is also an imperfect measure. A person can feel lonely in a crowd, while another may feel supported by a small circle. Loneliness is the distressing gap between the connection someone wants and what they experience; solitude is time alone and may be chosen or restorative. Online communication can maintain meaningful friendships, especially across distance, but comparison, conflict or exclusion online can also cause strain.

Building connection is usually gradual. Joining a regular activity, checking in with someone, listening without immediately solving their problem and including a person who is left out can all strengthen trust. Responsibility must remain realistic: a friend can care and listen but is not expected to manage a serious problem alone. Ongoing loneliness, distress, bullying or concern for someone’s safety should be shared with a trusted adult, school wellbeing service or qualified professional. Strong communities make asking for help easier and ensure that support does not depend on one friend.`,
    questions: [
      { prompt: 'Which example is practical support?', options: ['Listening carefully to a worry', 'Helping someone travel to an appointment', 'Explaining a different point of view', 'Feeling lonely in a crowd'], answer: 1, explanation: 'The passage defines practical support as concrete help with a task or need, such as providing transport.' },
      { prompt: 'Why does the passage treat research associations cautiously?', options: ['Relationships can never affect wellbeing', 'Only online friendships can be studied', 'Other factors may influence both connection and wellbeing', 'Life satisfaction cannot be described'], answer: 2, explanation: 'Health, personality, income and community conditions are identified as factors that can affect both sides of the association.' },
      { prompt: 'How does loneliness differ from solitude?', options: ['Loneliness is always chosen, while solitude never is', 'Loneliness is an unwanted gap in connection; solitude can be chosen and restorative', 'Solitude requires a large social group', 'There is no difference between them'], answer: 1, explanation: 'The passage defines loneliness as a distressing mismatch, whereas time alone may be voluntary and helpful.' },
      { prompt: 'What does the author say about helping a friend with a serious problem?', options: ['One friend should handle it in secret', 'Listening is never useful', 'The friend should promise to solve everything', 'Care should be combined with support from trusted adults or professionals'], answer: 3, explanation: 'The conclusion sets realistic limits and recommends involving appropriate adults or qualified support when problems are serious.' },
    ],
    writingPrompt: 'Write 140–180 words proposing how a school could strengthen social connection. Explain two kinds of support, distinguish loneliness from solitude and include a safe response to serious distress.',
    writingKeywords: ['connection', 'wellbeing', 'support', 'belonging', 'loneliness', 'trust'],
    vocabulary: [
      { term: 'wellbeing', definition: 'a state involving physical, emotional and social health and quality of life', example: 'A sense of belonging can contribute to student wellbeing.' },
      { term: 'emotional support', definition: 'care shown through listening, empathy and reassurance', example: 'Her calm attention provided emotional support.' },
      { term: 'association', definition: 'a measured relationship between two factors that does not by itself prove cause', example: 'Researchers reported an association between support and life satisfaction.' },
      { term: 'loneliness', definition: 'distress caused by a gap between desired and experienced social connection', example: 'Loneliness can occur even when other people are nearby.' },
      { term: 'restorative', definition: 'able to renew energy, strength or wellbeing', example: 'A quiet afternoon alone felt restorative after a busy week.' },
    ],
  },
  {
    id: 'biology-of-stress-and-recovery',
    theme: 'Human Biology',
    title: 'The Biology of Stress and Recovery',
    dek: 'Stress responses can support short-term action, while recovery helps body systems return towards their usual balance.',
    minutes: 17,
    passage: `Stress is the body’s response to a demand or perceived threat. It is not automatically harmful. Before a performance, competition or difficult conversation, a short-term stress response can sharpen attention and prepare the body for action. The effect depends on the intensity, duration, context and the resources a person has for coping.

When the brain detects a challenge, the sympathetic branch of the autonomic nervous system can act within seconds. Adrenaline contributes to a faster heart rate, redirects blood flow and makes stored energy more available. A slower pathway, often called the HPA axis, leads to the release of cortisol. Cortisol helps mobilise energy and affects many systems, including immunity. These responses are useful when they are matched to a temporary demand.

After the challenge passes, the parasympathetic nervous system supports recovery. Heart rate and breathing can slow, and the body moves towards its usual internal balance, known as homeostasis. Recovery is not an instant switch. Sleep, food, movement, enjoyable activity and a sense of safety may all help, although no single strategy works for every person or every situation.

Problems can emerge when demands are intense or continue without enough recovery. Repeated activation may contribute to poor sleep, irritability, difficulty concentrating or physical tension. These signs have many possible causes, so they should not be used to diagnose a condition. Stress can also become a cycle: worry disrupts sleep, reduced sleep makes coping harder, and ordinary demands then feel more threatening.

Useful coping can target either the demand or the response. Planning smaller steps may reduce an overloaded task. Slow breathing can send the body cues associated with safety, while talking with someone can provide perspective and support. Avoidance may bring brief relief but can sometimes make a manageable challenge grow. If stress feels overwhelming, lasts for a long time, interferes with daily life or raises safety concerns, a trusted adult or qualified health professional should be involved. Understanding stress biology should increase self-awareness, not create another reason to judge oneself.`,
    questions: [
      { prompt: 'How can a short-term stress response be useful?', options: ['It can prepare attention and energy for action', 'It permanently switches off the immune system', 'It removes every difficult demand', 'It guarantees perfect performance'], answer: 0, explanation: 'The opening paragraph explains that temporary stress can sharpen attention and prepare the body to respond.' },
      { prompt: 'Which pathway acts rapidly when the brain detects a challenge?', options: ['The digestive microbiome alone', 'The sympathetic nervous system', 'Bone growth at the joints', 'The parasympathetic system only'], answer: 1, explanation: 'The sympathetic branch can respond within seconds, with adrenaline supporting rapid physical changes.' },
      { prompt: 'What role does the parasympathetic nervous system play after a challenge?', options: ['It keeps heart rate high permanently', 'It prevents all future stress', 'It supports a return towards usual internal balance', 'It produces every stressful thought'], answer: 2, explanation: 'The passage links parasympathetic activity with slower breathing and heart rate as the body moves towards homeostasis.' },
      { prompt: 'Why should stress signs not be used for self-diagnosis?', options: ['They can have many possible causes', 'They occur only during sport', 'Cortisol can never be measured', 'Recovery always happens immediately'], answer: 0, explanation: 'Poor sleep, tension and concentration changes are not specific to one condition and therefore do not establish a diagnosis.' },
    ],
    writingPrompt: 'Write 140–180 words explaining the biology of stress and recovery to a student before exams. Describe two body systems, explain a possible stress cycle and suggest safe, realistic supports.',
    writingKeywords: ['stress', 'adrenaline', 'cortisol', 'sympathetic', 'parasympathetic', 'recovery'],
    vocabulary: [
      { term: 'autonomic', definition: 'relating to body processes controlled without conscious effort', example: 'Heart rate is influenced by the autonomic nervous system.' },
      { term: 'adrenaline', definition: 'a hormone that helps prepare the body for rapid action', example: 'Adrenaline contributed to a faster heartbeat before the race.' },
      { term: 'cortisol', definition: 'a hormone involved in the body’s response to stress and energy demand', example: 'Cortisol helps make energy available during a challenge.' },
      { term: 'parasympathetic', definition: 'describing the branch of the nervous system that supports rest and recovery', example: 'Slow breathing may encourage parasympathetic activity.' },
      { term: 'homeostasis', definition: 'the regulation of relatively stable internal conditions in the body', example: 'Recovery helped the body move back towards homeostasis.' },
    ],
  },
];
