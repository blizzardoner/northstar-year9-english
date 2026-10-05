export const societyLessons3 = [
  {
    id: 'public-benches',
    theme: 'Society',
    title: 'Why Public Benches Matter',
    dek: 'A simple seat can shape who is able to rest, meet others and use a public place.',
    minutes: 15,
    passage: `A public bench may look like a minor piece of street furniture, but it changes how people can use a place. A seat allows an older person to pause on the way to the shops, a parent to feed a baby, friends to talk, or a pedestrian to wait for a bus. Without somewhere to rest, a short trip can become difficult for people with limited mobility, chronic pain or low energy.

The position of a bench matters as much as its presence. A seat beside a shaded path may help people during hot weather, while one facing a playground lets carers supervise children. Benches near shops can encourage visitors to stay in an area, but a seat placed too close to heavy traffic may be noisy and unpleasant. Good planning considers shade, lighting, shelter, footpath width and access for wheelchairs or mobility aids.

Benches also create opportunities for social contact. People who live alone may exchange greetings with familiar strangers, and a well-used seat can make a quiet space feel safer. However, shared seating can produce disagreement. Nearby residents may worry about late-night noise, and councils sometimes install dividers or sloping surfaces to prevent people from lying down. Supporters call these features practical management; critics describe them as hostile design because they exclude people experiencing homelessness rather than addressing why they lack safe accommodation.

No bench can solve loneliness, disability access or homelessness by itself. Nor should every public space be filled with seats. Still, decisions about seating reveal whose comfort is considered in public design. Councils can observe how a site is used, consult nearby residents and access groups, and test temporary seating before installing a permanent bench. The humble bench matters because public space is not truly usable if many people cannot pause in it.`,
    questions: [
      { prompt: 'Why can the absence of benches make a short trip difficult?', options: ['It forces shops to close earlier', 'Some people need places to pause and recover', 'It prevents buses from using the road', 'Some footpaths are too brightly lit'], answer: 1, explanation: 'The passage explains that people with limited mobility, pain or low energy may need a place to rest.' },
      { prompt: 'Which location does the passage identify as useful for carers?', options: ['A bench facing a playground', 'A seat beside heavy traffic', 'A bench blocking a narrow footpath', 'A seat without shade or lighting'], answer: 0, explanation: 'A bench facing a playground can allow carers to sit while supervising children.' },
      { prompt: 'Why do critics object to some bench dividers?', options: ['They make benches too easy to repair', 'They encourage visitors to stay longer', 'They exclude people without addressing homelessness', 'They prevent councils from adding lighting'], answer: 2, explanation: 'Critics argue that hostile design moves people on without addressing their lack of safe accommodation.' },
      { prompt: 'What planning approach does the author recommend?', options: ['Installing identical benches in every location', 'Removing seats whenever anyone complains', 'Consulting users and testing seating at the site', 'Allowing only nearby businesses to decide'], answer: 2, explanation: 'The final paragraph recommends observation, consultation and temporary trials before permanent installation.' },
    ],
    writingPrompt: 'Write 140–180 words proposing the best location and design for a new public bench in your area. Use evidence from the passage and address one possible concern.',
    writingKeywords: ['bench', 'public', 'access', 'rest', 'design', 'community'],
    vocabulary: [
      { term: 'mobility', definition: 'the ability to move around freely and safely', example: 'The shaded bench improved mobility for older residents.' },
      { term: 'chronic', definition: 'continuing for a long time or recurring often', example: 'Chronic pain can make a short walk tiring.' },
      { term: 'supervise', definition: 'to watch and guide an activity or person', example: 'Carers could supervise the playground from the bench.' },
      { term: 'hostile', definition: 'unfriendly or designed to discourage a person or action', example: 'Critics described the divided seat as hostile design.' },
      { term: 'consult', definition: 'to seek information or opinions before deciding', example: 'The council will consult access groups about the plan.' },
    ],
  },
  {
    id: 'restorative-justice-schools',
    theme: 'Society',
    title: 'Restorative Justice in Schools',
    dek: 'Responding to harm can involve responsibility, repair and safety as well as punishment.',
    minutes: 18,
    passage: `When a student breaks a school rule, the usual response may be a warning, detention or suspension. These consequences can mark behaviour as unacceptable and protect others from immediate harm. However, a punishment alone may not help the student understand who was affected, repair damaged relationships or prevent the behaviour from happening again.

Restorative justice takes a different starting point. Instead of asking only, “Which rule was broken, and what penalty applies?”, it also asks, “Who was harmed, what do they need, and who is responsible for putting things right?” A restorative meeting might involve the student who caused harm, the person affected, a trained facilitator and supportive adults. Participants discuss what happened, its effects and possible steps towards repair.

Repair must be meaningful rather than merely convenient. A student who damaged a class display might help rebuild it and replace materials. Someone who spread a cruel rumour might correct the false claim, apologise and agree to changes in online behaviour. The process is not an easy escape from consequences. It requires the person responsible to listen, answer questions and complete an agreed action.

Restorative meetings are not suitable in every case. Participation should not be forced on a harmed student, especially when there is fear, repeated bullying or a serious imbalance of power. Schools must assess safety, protect privacy and provide other disciplinary or wellbeing responses when needed. A poorly managed meeting can pressure someone to forgive before they are ready or suggest that both sides are equally responsible when they are not.

Used carefully, restorative practice can sit alongside clear rules and proportionate consequences. Its success is not measured by whether everyone becomes friends. A better test is whether harm is acknowledged, the affected person has a genuine voice, responsibility is accepted and future risk is reduced.`,
    questions: [
      { prompt: 'What limitation of punishment alone does the opening identify?', options: ['It always takes too long to organise', 'It may not repair harm or prevent repetition', 'It makes every student admit responsibility', 'It cannot communicate that behaviour is unacceptable'], answer: 1, explanation: 'The passage says punishment may not build understanding, repair relationships or stop the behaviour recurring.' },
      { prompt: 'What role does a facilitator have in a restorative meeting?', options: ['To support a structured discussion', 'To decide that both sides are equally responsible', 'To force the affected person to forgive', 'To replace every school rule'], answer: 0, explanation: 'A trained facilitator helps participants discuss what happened, its impact and possible repair.' },
      { prompt: 'Which action is given as a meaningful repair for a cruel rumour?', options: ['Ignoring the false claim', 'Changing schools immediately', 'Correcting the claim and changing online behaviour', 'Giving the harmed student a detention'], answer: 2, explanation: 'The passage suggests correcting the false information, apologising and agreeing to safer online behaviour.' },
      { prompt: 'When might a restorative meeting be unsuitable?', options: ['When an agreement includes practical action', 'When the incident affected another person', 'When fear or a serious power imbalance prevents safe participation', 'When a trained adult is available'], answer: 2, explanation: 'Safety and voluntary participation are essential, particularly where fear, repeated bullying or unequal power exists.' },
    ],
    writingPrompt: 'Write 140–180 words explaining how a school should respond when one student deliberately damages another student’s project. Combine accountability, repair and safety in your proposal.',
    writingKeywords: ['harm', 'repair', 'responsibility', 'student', 'safety', 'consequence'],
    vocabulary: [
      { term: 'restorative', definition: 'intended to repair harm and rebuild what was damaged', example: 'The school offered a restorative process after the conflict.' },
      { term: 'facilitator', definition: 'a person who guides a discussion or activity', example: 'The facilitator ensured that each participant could speak.' },
      { term: 'accountability', definition: 'accepting responsibility for actions and their effects', example: 'Replacing the materials was part of the student’s accountability.' },
      { term: 'proportionate', definition: 'appropriate in size or seriousness to the situation', example: 'The principal selected a proportionate consequence.' },
      { term: 'acknowledge', definition: 'to recognise or accept that something is true', example: 'The student needed to acknowledge the harm caused.' },
    ],
  },
  {
    id: 'language-of-apologies',
    theme: 'Society',
    title: 'The Language of Apologies',
    dek: 'The words “I’m sorry” matter most when they clearly recognise harm and responsibility.',
    minutes: 16,
    passage: `An apology is a short form of language with a demanding purpose. It may need to recognise harm, accept responsibility, express regret and offer repair. Because these tasks are uncomfortable, people often use wording that sounds apologetic while avoiding the main issue.

Compare “I’m sorry that you were upset” with “I’m sorry I shared your message without permission”. The first sentence focuses on the other person’s reaction and leaves the speaker’s conduct unnamed. The second identifies an action and ownership of it. Phrases such as “mistakes were made” can also hide who acted, while adding “but” may turn an apology into a defence: “I’m sorry, but you embarrassed me first.” Context matters, yet an explanation is more useful after responsibility has been stated clearly.

A complete apology does not need to be dramatic. It can describe the action, recognise its effect, express genuine regret and explain what will change. If possible, it can offer a suitable repair, such as replacing an item, correcting false information or giving someone time and space. Promising never to make any mistake again is less convincing than naming a practical step.

The person receiving an apology also has choices. They may accept it, ask questions, need time or decide that trust has not yet been restored. An apology is not a command to forgive. Repeated harmful behaviour can make polished words seem empty, especially if the speaker gains praise for apologising while the affected person carries the consequences.

Public apologies from schools, companies or governments face an additional challenge. They may speak to many people with different experiences, and legal or formal language can sound distant. Even so, the same principles apply: clarity about what happened, responsibility for the harm, and action that supports repair. The strongest apology is not measured by how quickly it ends discomfort, but by whether words and later behaviour match.`,
    questions: [
      { prompt: 'Why is “I’m sorry I shared your message” presented as stronger wording?', options: ['It identifies the action and accepts ownership', 'It promises that no mistake will happen again', 'It focuses only on the listener’s feelings', 'It avoids mentioning permission'], answer: 0, explanation: 'The sentence clearly names what the speaker did instead of shifting attention to the other person’s reaction.' },
      { prompt: 'What can happen when “but” is added to an apology?', options: ['The repair becomes automatic', 'The apology may turn into a defence', 'The harmed person must accept it', 'The action becomes impossible to identify'], answer: 1, explanation: 'The passage shows how “but” can introduce an excuse or blame the other person.' },
      { prompt: 'Which promise does the passage describe as more convincing?', options: ['A practical change that can be observed', 'A claim that no future error is possible', 'A request for immediate forgiveness', 'A detailed explanation before accepting responsibility'], answer: 0, explanation: 'Specific, realistic action provides stronger evidence of change than an impossible promise of perfection.' },
      { prompt: 'What determines the strength of an apology in the conclusion?', options: ['How formal its vocabulary sounds', 'How quickly it ends discussion', 'Whether words are matched by later behaviour', 'Whether the speaker receives public praise'], answer: 2, explanation: 'The author argues that conduct after the apology must support its claims.' },
    ],
    writingPrompt: 'Write 140–180 words analysing an effective apology for sharing a classmate’s photo without permission. Explain what the speaker should say, avoid and do afterwards.',
    writingKeywords: ['apology', 'responsibility', 'harm', 'repair', 'regret', 'behaviour'],
    vocabulary: [
      { term: 'regret', definition: 'sadness or disappointment about something that happened', example: 'She expressed regret for sharing the private message.' },
      { term: 'conduct', definition: 'the way a person behaves', example: 'The apology named the conduct that caused harm.' },
      { term: 'defence', definition: 'a reason offered to justify or protect an action', example: 'Adding an excuse made the apology sound like a defence.' },
      { term: 'restore', definition: 'to bring something back to a former or better state', example: 'Trust may take time to restore.' },
      { term: 'formal', definition: 'following an official or carefully structured style', example: 'The company issued a formal public apology.' },
    ],
  },
  {
    id: 'communities-prepare-disasters',
    theme: 'Society',
    title: 'How Communities Prepare for Disasters',
    dek: 'Preparation works best when plans combine official warnings with local knowledge and neighbourly support.',
    minutes: 18,
    passage: `Bushfires, floods, cyclones and heatwaves affect Australian communities in different ways, but preparation has a common aim: reducing harm before danger arrives. Emergency services create warnings, evacuation routes and response plans. Households can prepare supplies, review insurance, clear hazards where appropriate and decide how they will receive reliable information if power or mobile networks fail.

A plan must be specific enough to use under pressure. “Leave if it gets bad” does not explain what warning will trigger action, which route is safest or where family members will meet. Good plans identify alternatives because roads may close and circumstances may change quickly. People also need to know that leaving early can be safer than waiting for visible danger, while following current advice from the responsible authority.

Community preparation goes beyond individual households. Neighbours may know who lacks transport, uses medical equipment that needs electricity, speaks limited English or requires assistance to understand a warning. Local organisations can translate information, check on isolated residents and practise evacuation procedures. This support should preserve people’s dignity and choices rather than assuming that age or disability makes someone helpless.

Official plans also benefit from local knowledge. Residents may know which crossing floods first or where visitors gather during holiday periods. Aboriginal and Torres Strait Islander knowledge, developed through long relationships with Country, can inform land and fire management when Traditional Owners lead and consent to its use. Local experience does not replace scientific forecasting or emergency authority; it can strengthen them by adding detail.

Preparation cannot remove every risk, and a plan that worked in one disaster may fail in another. Communities should review what happened after an event, including whose warnings arrived late and which groups were overlooked. Drills, updated contact lists and clear communication can seem ordinary when no emergency is occurring. Their value becomes visible when people must make difficult decisions quickly, with incomplete information and little time.`,
    questions: [
      { prompt: 'Why is “leave if it gets bad” an inadequate emergency plan?', options: ['It contains too many alternative routes', 'It does not define triggers, routes or meeting places', 'It relies too heavily on written contact lists', 'It requires people to leave before any warning'], answer: 1, explanation: 'A usable plan specifies when to act, how to travel and where people will reconnect.' },
      { prompt: 'How can local organisations support community preparation?', options: ['By replacing every emergency authority', 'By translating warnings and checking isolated residents', 'By discouraging evacuation practice', 'By assuming older people cannot make choices'], answer: 1, explanation: 'The passage identifies translation, welfare checks and evacuation practice as useful community roles.' },
      { prompt: 'What relationship between local knowledge and scientific forecasting does the passage support?', options: ['Local knowledge should always overrule forecasts', 'Scientific forecasting makes local detail unnecessary', 'They can work together and strengthen planning', 'Neither should influence emergency authorities'], answer: 2, explanation: 'Local experience can add place-specific detail without replacing science or official responsibility.' },
      { prompt: 'Why should plans be reviewed after a disaster?', options: ['To guarantee that the same plan is used forever', 'To identify failures and groups that were overlooked', 'To remove all alternative communication methods', 'To prove that every risk can be eliminated'], answer: 1, explanation: 'Review helps communities learn where warnings, procedures or inclusion were inadequate.' },
    ],
    writingPrompt: 'Write 140–180 words proposing two actions your school or neighbourhood could take to prepare for a likely local disaster. Explain responsibilities, communication and access needs.',
    writingKeywords: ['disaster', 'prepare', 'warning', 'community', 'evacuation', 'risk'],
    vocabulary: [
      { term: 'evacuation', definition: 'the organised movement of people away from danger', example: 'The town practised an evacuation before cyclone season.' },
      { term: 'trigger', definition: 'an event or condition that causes an action to begin', example: 'A severe warning was the trigger for leaving early.' },
      { term: 'isolated', definition: 'separated from other people or difficult to reach', example: 'Volunteers checked on isolated residents.' },
      { term: 'forecasting', definition: 'predicting future conditions using evidence and analysis', example: 'Weather forecasting helped authorities issue an early warning.' },
      { term: 'consent', definition: 'permission given freely after understanding what is proposed', example: 'Traditional knowledge should be used with the owners’ consent.' },
    ],
  },
  {
    id: 'local-newspapers',
    theme: 'Society',
    title: 'Why Local Newspapers Matter',
    dek: 'Reporting close to home can connect residents with decisions that larger news services overlook.',
    minutes: 16,
    passage: `A council changes parking rules, a local hospital loses a service, or a junior sporting club needs a new ground. These stories may have immediate effects on thousands of people but attract little attention from national news organisations. A local newspaper can attend the council meeting, question decision-makers and explain what a change means for particular streets, schools or businesses.

Local reporting also creates a shared record. Birth notices, election results, court reports, school events and community debates become part of an area’s archive. Journalists who regularly cover one place may notice when a promised project is delayed or when the same problem appears in several suburbs. This continuity supports accountability because public statements can be compared with later action.

However, local news is costly to produce. Advertising that once paid for reporters has moved to online platforms, and some papers have closed or reduced staff. A publication with only one reporter cannot attend every meeting or investigate every claim. Ownership matters too. If one company controls many titles, articles may be shared across regions, reducing the amount of reporting created within each community.

Digital neighbourhood groups can spread updates quickly, but speed is not the same as verification. Posts may contain useful eyewitness information, rumours, advertising or personal disputes. Professional journalism is not error-free, yet named sources, corrections and evidence provide ways to test its reliability. Newspapers must also earn trust by separating news from paid content and representing the whole community rather than only influential voices.

Possible funding models include subscriptions, advertising, donations, public grants and not-for-profit ownership. Each has advantages and risks: a major donor, advertiser or government funder might be seen as influencing coverage. Clear rules and disclosure can protect editorial independence. Local newspapers matter not because every printed page is valuable, but because communities need someone to observe nearby institutions, verify claims and keep a public record.`,
    questions: [
      { prompt: 'Why might a national news organisation overlook a local story?', options: ['Local decisions never affect many people', 'The story may be important nearby but not nationally prominent', 'National reporters are not allowed at council meetings', 'Local papers own every public record'], answer: 1, explanation: 'The passage contrasts strong local impact with limited national attention.' },
      { prompt: 'How does continuity in local reporting support accountability?', options: ['It removes the need to question officials', 'It allows earlier promises to be compared with later action', 'It ensures every community event is positive', 'It prevents newspapers from making corrections'], answer: 1, explanation: 'Regular coverage creates a record against which delays and follow-through can be checked.' },
      { prompt: 'What financial change has weakened some local newspapers?', options: ['Advertising has shifted to online platforms', 'Council meetings now charge reporters entry', 'Subscriptions have been made illegal', 'Printing has replaced all digital publishing'], answer: 0, explanation: 'The passage explains that advertising income once supporting reporters has moved elsewhere online.' },
      { prompt: 'What safeguard can reduce concern about funding influence?', options: ['Hiding the identity of major donors', 'Mixing paid content with news', 'Clear funding rules and public disclosure', 'Publishing unverified neighbourhood posts'], answer: 2, explanation: 'Transparency about funding and firm rules can help protect editorial independence.' },
    ],
    writingPrompt: 'Write 140–180 words arguing which local issue a newspaper should investigate and why. Explain what evidence reporters should seek and how the story could serve the community.',
    writingKeywords: ['local', 'newspaper', 'reporting', 'evidence', 'community', 'accountability'],
    vocabulary: [
      { term: 'archive', definition: 'a collection of records kept for future reference', example: 'The library preserved the newspaper archive.' },
      { term: 'accountability', definition: 'the obligation to explain actions and accept scrutiny', example: 'Regular reporting increased council accountability.' },
      { term: 'verification', definition: 'the process of checking that information is accurate', example: 'The editor required verification before publication.' },
      { term: 'disclosure', definition: 'the act of making relevant information known', example: 'A funding disclosure appeared below the article.' },
      { term: 'editorial', definition: 'relating to decisions about news content and publication', example: 'The grant did not control editorial decisions.' },
    ],
  },
  {
    id: 'compulsory-voting',
    theme: 'Society',
    title: 'Should Voting Be Compulsory?',
    dek: 'Compulsory voting aims for broad participation, but debate continues about freedom and informed choice.',
    minutes: 18,
    passage: `At Australian federal elections, eligible citizens must enrol and attend a polling place, use an accepted alternative such as postal voting, or provide a valid reason for not voting. The ballot remains secret. A person can leave it blank or mark it in a way that is not counted, although election officials explain how to cast a formal vote. This distinction matters: the law requires participation in the process, not support for a particular candidate.

Supporters of compulsory voting argue that democracy works better when election results reflect nearly the whole adult citizen population. High turnout means parties cannot focus only on enthusiastic supporters while ignoring people less likely to vote. Because attendance is normal, schools, media and election authorities also have a reason to provide information for a broad audience. Supporters compare the requirement with other civic duties that take a small amount of time.

Critics respond that political participation should include the freedom not to take part. They argue that an unwilling or poorly informed voter may choose randomly, follow a familiar name or submit an informal ballot. Fines can also affect people unevenly, particularly those facing homelessness, illness, language barriers or unstable mail. A fair system therefore needs accessible voting options and reasonable ways to explain non-participation.

Voluntary-voting countries offer a different model. Citizens may express dissatisfaction by staying home, but low turnout can make results less representative. Compulsory systems achieve higher participation, yet attendance alone does not guarantee knowledge, trust or meaningful choice. Both systems depend on accurate information, fair electoral boundaries and genuine competition.

The debate involves two democratic values: individual freedom and broad public participation. Evidence can show turnout rates and the effects of enforcement, but it cannot decide how much weight each value deserves. Any judgement should distinguish compulsory attendance from compulsory political belief and consider how rules operate for people in very different circumstances.`,
    questions: [
      { prompt: 'What does Australian federal law require according to the passage?', options: ['Support for at least one candidate', 'Participation in the voting process or a valid reason', 'A public statement of political belief', 'A correctly marked ballot in every case'], answer: 1, explanation: 'Eligible citizens must participate through an accepted method or give a valid reason, but the secret ballot does not force a candidate choice.' },
      { prompt: 'Why do supporters value high turnout?', options: ['It guarantees every voter understands each policy', 'It makes results reflect a broader share of citizens', 'It allows parties to address only strong supporters', 'It removes the need for election information'], answer: 1, explanation: 'Supporters argue that broad participation makes the electorate more representative.' },
      { prompt: 'What concern does the passage raise about fines?', options: ['They make ballots public', 'They may affect disadvantaged people unevenly', 'They prevent all postal voting', 'They are paid directly to political parties'], answer: 1, explanation: 'People facing illness, homelessness, language barriers or unreliable mail may experience enforcement differently.' },
      { prompt: 'Which conclusion best matches the author’s position?', options: ['Turnout is the only democratic value that matters', 'Voluntary voting always produces informed choices', 'The debate requires balancing freedom and participation', 'Evidence proves that one system is perfect'], answer: 2, explanation: 'The conclusion presents competing values and asks readers to examine both principles and practical effects.' },
    ],
    writingPrompt: 'Write 140–180 words arguing whether voting should remain compulsory in Australia. Use evidence from the passage, distinguish attendance from candidate choice, and address a counterargument.',
    writingKeywords: ['voting', 'compulsory', 'freedom', 'participation', 'turnout', 'democracy'],
    vocabulary: [
      { term: 'eligible', definition: 'meeting the conditions required to take part', example: 'Eligible citizens were reminded to enrol.' },
      { term: 'ballot', definition: 'the method or paper used to record a vote', example: 'Each voter completed a secret ballot.' },
      { term: 'informal', definition: 'not completed in a way that can be counted under election rules', example: 'The unclear marking made the ballot informal.' },
      { term: 'civic', definition: 'connected with the duties and life of citizens', example: 'Supporters describe voting as a civic duty.' },
      { term: 'representative', definition: 'accurately reflecting a wider group', example: 'High turnout may produce a more representative result.' },
    ],
  },
  {
    id: 'invisible-rules-queues',
    theme: 'Society',
    title: 'The Invisible Rules of Queues',
    dek: 'Waiting in line depends on shared expectations that become visible when someone breaks them.',
    minutes: 15,
    passage: `A queue is a simple way of deciding who receives service next, yet its rules are often unwritten. In many Australian settings, people expect “first come, first served”. They notice who arrived before them, leave a reasonable gap and move forward when space opens. The system works because strangers cooperate without needing a formal referee.

The shape of a queue can change its meaning. A single line feeding several counters usually sends the next person to the first available worker. Separate lines require each customer to choose a counter, even though one line may move more slowly. At a bus stop, the order can be less visible because people wait in a loose group. Confusion is more likely when signs, barriers or local habits do not make the arrangement clear.

Queue-jumping causes strong reactions because it appears to take time from everyone behind. However, not every person moving ahead is acting unfairly. A staff member may call someone with an appointment, a passenger may need priority boarding, or a person with disability may use an accessible entrance. Fairness does not always mean identical treatment. The reason for an exception matters, and private needs do not always have to be announced to the whole crowd.

Technology has created new forms of waiting. Numbered tickets, online bookings and virtual queues allow people to sit down or leave temporarily. These systems can reduce physical discomfort, but they may confuse people without a smartphone, reliable internet or confidence using an app. A transparent system explains how places are allocated and offers another way to join.

Queue rules reveal a wider social skill: people must combine patience with attention to context. Someone who is unsure can ask, “Is this the end of the line?” Staff can reduce conflict by giving clear directions. Most queues remain orderly not because everyone enjoys waiting, but because people recognise a shared rule and trust that justified exceptions will not make the system meaningless.`,
    questions: [
      { prompt: 'Why can many queues operate without a referee?', options: ['People cooperate around a shared expectation', 'Every queue has numbered tickets', 'Customers are forbidden to leave gaps', 'Separate lines always move equally fast'], answer: 0, explanation: 'People generally recognise arrival order and adjust their behaviour to an unwritten rule.' },
      { prompt: 'When is confusion at a bus stop more likely?', options: ['When the waiting order is physically obvious', 'When people form a loose group without clear guidance', 'When one line feeds several counters', 'When every passenger has an appointment'], answer: 1, explanation: 'A loose group can hide arrival order, especially when signs and local habits are unclear.' },
      { prompt: 'Why might a person fairly move ahead of others?', options: ['They dislike waiting more than everyone else', 'They want to save a place for several friends', 'They have an appointment or accessibility need', 'They arrived after the service closed'], answer: 2, explanation: 'The passage gives appointments, priority boarding and accessible entry as possible justified exceptions.' },
      { prompt: 'What should a fair virtual queue provide?', options: ['A hidden method for allocating places', 'Only a smartphone application', 'A clear process and an alternative way to join', 'Priority for people with faster internet'], answer: 2, explanation: 'Transparency and a non-digital option help prevent technology from excluding users.' },
    ],
    writingPrompt: 'Write 140–180 words proposing fair queue rules for a crowded school canteen. Explain the normal order, any justified exceptions and how the system should be communicated.',
    writingKeywords: ['queue', 'fairness', 'order', 'waiting', 'exception', 'access'],
    vocabulary: [
      { term: 'unwritten', definition: 'understood without being formally recorded', example: 'The queue followed an unwritten rule about arrival order.' },
      { term: 'referee', definition: 'a person who ensures that rules are followed', example: 'The orderly line did not need a referee.' },
      { term: 'priority', definition: 'the right to be dealt with before something else', example: 'The passenger received priority boarding.' },
      { term: 'allocate', definition: 'to assign or distribute something for a purpose', example: 'The ticket system allocated each customer a number.' },
      { term: 'transparent', definition: 'open and clear enough to be understood', example: 'A transparent process reduced arguments about places.' },
    ],
  },
  {
    id: 'public-holidays',
    theme: 'Society',
    title: 'What Makes a Public Holiday?',
    dek: 'A day off can commemorate history, express shared values and expose disagreement about belonging.',
    minutes: 17,
    passage: `A public holiday is more than a date when many workplaces close. It is an official decision to interrupt ordinary routines and give public attention to an event, tradition or group. Australian public holidays include nationally observed days as well as dates set by states and territories. Some mark religious festivals, some commemorate historical events, and others recognise workers, monarchs, sporting events or regional traditions.

Public holidays serve several purposes. Ceremonies can preserve memory, while a shared day off creates time for family, community events or rest. The holiday’s name and date also make a statement about what a society considers significant. That symbolic role explains why holidays sometimes become contested. People may disagree about the history being remembered, whether a date causes pain, or whose experiences are absent from the calendar.

Changing a holiday is not only a symbolic decision. Hospitals, public transport and emergency services must continue operating. Businesses consider penalty rates, staffing and lost trade, while workers may value both extra pay and time with family. Communities with different religious and cultural traditions may prefer flexible leave that lets individuals observe meaningful days not included in the official calendar.

Several responses are possible when a holiday is disputed. Governments can keep the date but change ceremonies or educational material. They can rename the day, move it, add a new holiday or support local events that present several perspectives. Each option has practical costs and sends a different public message. Adding days indefinitely may be unrealistic, but removing a familiar holiday can also create resistance.

A durable public holiday needs more than habit. Its purpose should be explained honestly, including difficult parts of the history, and people affected by the commemoration should have a meaningful voice. Complete agreement is unlikely in a diverse society. The question is whether the day can support reflection, participation and rest without pretending that everyone experiences its meaning in the same way.`,
    questions: [
      { prompt: 'How do public holidays differ across Australia?', options: ['Every date is chosen by local businesses', 'Some are national while others are set by states and territories', 'Only religious holidays are officially recognised', 'All regions hold the same sporting holiday'], answer: 1, explanation: 'The passage distinguishes nationally observed holidays from those determined by individual states and territories.' },
      { prompt: 'Why can the date of a holiday become contested?', options: ['Dates have no symbolic meaning', 'People may experience the remembered history differently', 'Emergency services always close for the day', 'Every community prefers identical traditions'], answer: 1, explanation: 'A date can represent pride for some people and painful or excluded histories for others.' },
      { prompt: 'Which practical issue is linked to public holidays?', options: ['Whether essential services can stop permanently', 'Staffing, penalty rates and continued essential services', 'Whether historical events actually occurred', 'The removal of all flexible leave'], answer: 1, explanation: 'The passage identifies workplace costs, staffing and the need to keep essential services operating.' },
      { prompt: 'What does the author say a durable public holiday requires?', options: ['Complete agreement from every citizen', 'A purpose supported only by long habit', 'Honest explanation and meaningful participation', 'The removal of all disputed history'], answer: 2, explanation: 'The conclusion emphasises honest history and a genuine voice for people affected by the commemoration.' },
    ],
    writingPrompt: 'Write 140–180 words proposing how Australia should review a contested public holiday. Recommend whether to keep, move, rename or replace it, and consider practical effects.',
    writingKeywords: ['holiday', 'public', 'history', 'commemoration', 'community', 'date'],
    vocabulary: [
      { term: 'commemorate', definition: 'to remember and publicly honour an event or person', example: 'The ceremony commemorated an important historical event.' },
      { term: 'symbolic', definition: 'representing an idea or value beyond a practical function', example: 'Changing the date would have symbolic meaning.' },
      { term: 'contested', definition: 'disputed because people hold different views', example: 'The purpose of the holiday became contested.' },
      { term: 'penalty rate', definition: 'a higher rate of pay for working particular hours or days', example: 'Some employees received a penalty rate on the holiday.' },
      { term: 'durable', definition: 'able to continue and remain effective over time', example: 'A durable commemoration needs public trust.' },
    ],
  },
];
