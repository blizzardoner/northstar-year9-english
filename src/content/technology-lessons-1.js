export const technologyLessons1 = [
  {
    id: 'everyday-algorithms',
    theme: 'Technology',
    title: 'Algorithms in Everyday Life',
    dek: 'Step-by-step rules shape ordinary choices, from bus routes to video recommendations.',
    minutes: 16,
    passage: `An algorithm is a set of instructions for completing a task. A recipe is a simple example: follow the steps in order and, if conditions are right, dinner appears. Computer algorithms can follow millions of steps quickly, which makes them useful for sorting search results, suggesting music and finding a route across a city.

Algorithms do not make choices from nothing. People decide what goal an algorithm should pursue and which data it may use. A navigation app might seek the fastest trip, but “fastest” is not always the same as “best”. Its route could send heavy traffic down a quiet residential street. Changing the goal to reduce fuel use or avoid school zones could produce a different answer.

Recommendation systems face a similar problem. If a video platform is told to maximise viewing time, it may suggest material that keeps people watching. That does not prove every recommendation is harmful or manipulative. It does mean that the system’s goal can influence what users see, while popular items may receive even more attention simply because they are already popular.

Algorithms can also reflect weaknesses in their training data. A system trained mainly on past decisions may repeat an unfair pattern hidden in those records. Testing results across different groups can reveal some problems, although no test guarantees perfect fairness.

Understanding algorithms does not require everyone to become a programmer. It begins with useful questions: What is the system trying to optimise? What information does it use? Who benefits when it succeeds, and who carries the cost when it fails? Those questions turn an invisible process into something people can examine and debate.`,
    questions: [
      { prompt: 'Why might a navigation algorithm choose an unsuitable route?', options: ['It cannot read any maps', 'Its goal may value speed above other concerns', 'Residential streets never appear in data', 'Users always request the longest trip'], answer: 1, explanation: 'The passage explains that pursuing the fastest route can create costs, such as extra traffic near homes.' },
      { prompt: 'What can happen when a platform maximises viewing time?', options: ['Every recommendation becomes false', 'It stops collecting all information', 'It may favour material that holds attention', 'Popular videos immediately disappear'], answer: 2, explanation: 'The third paragraph links the viewing-time goal with recommendations designed to keep users watching.' },
      { prompt: 'How might unfair patterns enter an algorithm?', options: ['Through patterns in past data', 'Only through typing mistakes', 'Because computers refuse to follow rules', 'When users ask questions'], answer: 0, explanation: 'The passage states that training on past decisions can reproduce unfair patterns contained in those records.' },
      { prompt: 'What is the author’s main message?', options: ['All algorithms should be banned', 'Only programmers can evaluate technology', 'Algorithms are neutral because they use numbers', 'People should examine goals, data, benefits and costs'], answer: 3, explanation: 'The conclusion offers these four questions as a practical way to assess an algorithm.' },
    ],
    writingPrompt: 'Write 140–180 words arguing whether students should be told when an algorithm selects content for them. Use evidence from the passage and consider one counterargument.',
    writingKeywords: ['algorithm', 'student', 'content', 'goal', 'data', 'choice'],
    vocabulary: [
      { term: 'algorithm', definition: 'a set of instructions used to solve a problem or complete a task', example: 'The route algorithm compared several possible roads.' },
      { term: 'pursue', definition: 'to try to achieve or continue towards something', example: 'The program was designed to pursue a clear goal.' },
      { term: 'maximise', definition: 'to make something as large or effective as possible', example: 'The company hoped to maximise viewing time.' },
      { term: 'manipulative', definition: 'designed to influence someone unfairly or without openness', example: 'Critics called the hidden sales tactic manipulative.' },
      { term: 'optimise', definition: 'to make something work as effectively as possible for a chosen goal', example: 'The app can optimise a journey for lower fuel use.' },
    ],
  },
  {
    id: 'deepfakes-evidence',
    theme: 'Technology',
    title: 'Deepfakes and Evidence',
    dek: 'When realistic media can be fabricated, careful verification matters more than quick certainty.',
    minutes: 17,
    passage: `A video appears to show a public figure saying something shocking. The voice sounds familiar, the face moves naturally and the clip arrives with a confident caption. Yet the scene may be a deepfake: synthetic media created or altered using artificial intelligence. Deepfakes can be made for satire, film effects and education, but they can also mislead viewers.

Detection is not as easy as searching for a strange blink or a blurred edge. Early deepfakes often contained visible mistakes, but methods improve. Compression and poor lighting can also make genuine footage look suspicious. A single visual clue is therefore weak evidence. Automated detectors may assist investigators, although their results can become less reliable when new generation methods appear.

A stronger approach examines the clip’s context. Who first published it? Is there a longer version? Do trusted reports, official transcripts or recordings from other angles support the claim? Reverse image searches may reveal that old footage has been given a false caption. Journalists may also inspect file information or contact people who witnessed the event.

The existence of deepfakes creates another danger: a person caught in genuine footage can dismiss it as fake. Researchers sometimes call this the “liar’s dividend”. For this reason, automatically doubting every recording is no wiser than believing every recording.

Digital evidence should be treated as part of a chain, not as an isolated object. Source, timing, motive and supporting material all matter. Before sharing a dramatic clip, viewers can pause, locate its earliest credible source and check whether independent evidence agrees. Verification takes longer than outrage, but that delay can prevent a false claim from travelling much further.`,
    questions: [
      { prompt: 'Why is one visual flaw weak evidence of a deepfake?', options: ['Real footage can also contain visual problems', 'All deepfakes are perfectly made', 'Video compression proves a clip is false', 'Detectors never examine images'], answer: 0, explanation: 'The passage notes that compression and poor lighting can make genuine recordings look suspicious.' },
      { prompt: 'Which action best checks a clip’s context?', options: ['Reading only its caption', 'Sharing it to ask friends later', 'Finding its original source and longer version', 'Judging the speaker’s appearance'], answer: 2, explanation: 'The third paragraph recommends tracing the publisher and looking for fuller or supporting records.' },
      { prompt: 'What is the “liar’s dividend”?', options: ['Payment for creating satire', 'The chance to dismiss genuine evidence as fake', 'A reward for automated detectors', 'Money earned from old footage'], answer: 1, explanation: 'The term describes how real recordings can be denied because fabricated media also exists.' },
      { prompt: 'What balanced position does the author support?', options: ['Believe every clear video', 'Distrust all digital media', 'Use several sources and forms of evidence', 'Rely only on detection software'], answer: 2, explanation: 'The author argues for checking source, context and independent supporting material rather than automatic belief or doubt.' },
    ],
    writingPrompt: 'Write 140–180 words advising students what to do before sharing a dramatic video online. Explain at least three checks and why each one matters.',
    writingKeywords: ['video', 'source', 'evidence', 'check', 'share', 'deepfake'],
    vocabulary: [
      { term: 'synthetic', definition: 'made artificially rather than occurring naturally', example: 'The synthetic voice closely copied the actor’s speech.' },
      { term: 'verification', definition: 'the process of checking that something is true or accurate', example: 'Verification should happen before a clip is shared.' },
      { term: 'transcript', definition: 'a written record of spoken words', example: 'The official transcript showed the complete statement.' },
      { term: 'credible', definition: 'believable and worthy of trust', example: 'The reporter searched for a credible original source.' },
      { term: 'isolated', definition: 'separated from other people, things or information', example: 'An isolated image gave too little context.' },
    ],
  },
  {
    id: 'instant-delivery-cost',
    theme: 'Technology',
    title: 'The Cost of Instant Delivery',
    dek: 'A fast arrival can hide complicated decisions about labour, packaging and city streets.',
    minutes: 16,
    passage: `Ordering a phone charger or snack can take less than a minute, and some services promise delivery soon afterwards. The speed feels almost effortless to the customer. Behind the screen, however, software must match an order with stock, a warehouse worker, a packer, a driver and a route through busy streets.

Fast delivery can be useful. A household may urgently need medicine, or a person with limited mobility may depend on goods arriving at home. Efficient route planning can also combine orders and reduce unnecessary travel. Yet a promise of extreme speed leaves less room to group deliveries. Several partly empty vehicles may travel through the same neighbourhood, adding traffic and emissions.

Working conditions are another concern. Digital platforms may use ratings, countdowns and automatic job allocation to organise drivers. These tools can make work flexible, but they may also create pressure to hurry. Conditions differ between companies and places, so it would be inaccurate to claim that every delivery worker has the same experience. Questions about pay, insurance, breaks and responsibility for vehicle costs still deserve attention.

Packaging adds a further cost. A small object may arrive inside layers of cardboard and plastic chosen to prevent damage during rapid handling. Recyclable material helps only if local systems can process it and customers dispose of it correctly.

Consumers do not control the whole system, but their choices send signals. Selecting a slower delivery window, combining orders or buying locally may reduce some impacts. Companies and governments have larger responsibilities: they can publish emissions data, design safer targets and protect workers. Convenience is real, but its full price includes effects that never appear on the checkout screen.`,
    questions: [
      { prompt: 'Why might very fast delivery increase traffic?', options: ['Drivers cannot use maps', 'Orders have less time to be grouped', 'Customers always order medicine', 'Warehouses stop holding stock'], answer: 1, explanation: 'The passage explains that extreme speed can lead to several partly empty vehicles making separate trips.' },
      { prompt: 'Why does the author mention medicine and limited mobility?', options: ['To show that delivery can provide genuine benefits', 'To prove all orders are urgent', 'To argue shops should close', 'To explain why packaging is plastic'], answer: 0, explanation: 'These examples show that home delivery is sometimes important rather than merely convenient.' },
      { prompt: 'What cautious claim is made about workers?', options: ['Every driver is treated badly', 'Ratings always improve safety', 'Experiences and conditions vary', 'Drivers never pay vehicle costs'], answer: 2, explanation: 'The passage explicitly warns against treating every company, place or worker experience as identical.' },
      { prompt: 'Who does the author say holds larger responsibilities?', options: ['Only customers', 'Companies and governments', 'Warehouse robots alone', 'Local shops only'], answer: 1, explanation: 'The conclusion distinguishes consumer choices from the larger duties of businesses and government.' },
    ],
    writingPrompt: 'Write 140–180 words arguing whether online shops should make slower delivery the default option. Use evidence from the passage and address an urgent exception.',
    writingKeywords: ['delivery', 'slower', 'default', 'worker', 'traffic', 'urgent'],
    vocabulary: [
      { term: 'allocation', definition: 'the act of distributing jobs, resources or responsibilities', example: 'Automatic job allocation sent the driver across town.' },
      { term: 'emissions', definition: 'gases or other substances released into the environment', example: 'Combining trips may reduce vehicle emissions.' },
      { term: 'mobility', definition: 'the ability to move freely and easily', example: 'Home delivery assisted a resident with limited mobility.' },
      { term: 'recyclable', definition: 'able to be processed and used again', example: 'The box was made from recyclable cardboard.' },
      { term: 'convenience', definition: 'the quality of being easy, useful or suitable', example: 'Fast delivery offers convenience but can create hidden costs.' },
    ],
  },
  {
    id: 'changing-passwords',
    theme: 'Technology',
    title: 'Why Passwords Are Changing',
    dek: 'Passkeys and better security checks aim to reduce the weaknesses of memorable secrets.',
    minutes: 15,
    passage: `For years, online safety advice focused on making passwords complicated. People were told to combine capital letters, numbers and symbols, then change the result regularly. This created strings that were difficult to remember but not always difficult for criminals to obtain. A strong password cannot protect an account if it is entered into a convincing fake website or stolen from a poorly secured database.

Current advice often favours long, unique passwords stored in a reputable password manager. Length makes guessing harder, while uniqueness prevents one leaked password from opening several accounts. Multi-factor authentication adds another check, such as an app notification or a physical security key. Text-message codes can help, although they may be vulnerable if a phone number is taken over.

Passkeys offer a different approach. Instead of sending a shared secret to a website, a device proves that it holds a matching digital key. The user may approve the login with a fingerprint, face scan or device PIN. Biometric information usually unlocks the key on the device; it is not meant to be sent to every website. Because a passkey is linked to the genuine site, it can resist many common phishing attacks.

No system removes every risk. People can lose devices, recovery processes may fail, and not every service supports passkeys. Shared computers and unequal access to modern phones also complicate a complete changeover.

The direction of travel is clear, even if the transition is gradual: security is moving away from asking people to memorise more secrets. Good protection increasingly combines careful design, secure devices and recovery options. Users still need to check unexpected requests, but they should not carry the entire burden alone.`,
    questions: [
      { prompt: 'Why can a strong password still fail?', options: ['It may be stolen or entered into a fake site', 'Long passwords cannot contain letters', 'Websites never protect databases', 'Criminals only attack phones'], answer: 0, explanation: 'The opening paragraph identifies phishing and database theft as risks that complexity alone cannot solve.' },
      { prompt: 'Why should passwords be unique?', options: ['To make them shorter', 'To prevent one leak opening several accounts', 'To remove the need for secure storage', 'To make text messages safer'], answer: 1, explanation: 'Uniqueness limits the damage if one service loses or exposes a password.' },
      { prompt: 'How does a passkey resist phishing?', options: ['It displays the password publicly', 'It works only on shared computers', 'It is linked to the genuine website', 'It sends fingerprints to every site'], answer: 2, explanation: 'The passage says a passkey is connected to the legitimate site rather than typed into an imitation.' },
      { prompt: 'Which limitation of passkeys is mentioned?', options: ['They cannot use device PINs', 'Every service already requires them', 'They remove account recovery', 'Access to suitable devices is unequal'], answer: 3, explanation: 'The fourth paragraph notes unequal access to newer phones and other transition difficulties.' },
    ],
    writingPrompt: 'Write 140–180 words explaining which login system a school should offer students. Compare passwords, multi-factor authentication and passkeys, then justify your recommendation.',
    writingKeywords: ['password', 'passkey', 'school', 'security', 'login', 'account'],
    vocabulary: [
      { term: 'reputable', definition: 'generally trusted because of a good record', example: 'She chose a reputable password manager.' },
      { term: 'authentication', definition: 'the process of proving identity or permission', example: 'The second code added another layer of authentication.' },
      { term: 'biometric', definition: 'relating to measurable features of a person’s body', example: 'A fingerprint is one form of biometric information.' },
      { term: 'phishing', definition: 'a trick that imitates a trusted source to steal information', example: 'The false login page was part of a phishing attempt.' },
      { term: 'transition', definition: 'a change from one state or system to another', example: 'The transition to passkeys will take time.' },
    ],
  },
  {
    id: 'digital-afterlife',
    theme: 'Technology',
    title: 'The Digital Afterlife',
    dek: 'Accounts, photos and messages can remain online long after their owner has died.',
    minutes: 17,
    passage: `A person’s digital life can include thousands of photographs, years of messages, online game items, cloud documents and social media accounts. When that person dies, these materials do not automatically disappear. Families may value them as memories, yet gaining access can be legally, technically and emotionally difficult.

Ownership is not always simple. Someone may own a photograph they created but only hold a licence to use a purchased song, film or digital book. A platform’s terms may also restrict whether an account can be transferred. Privacy matters as well: giving a relative access to one person’s messages may reveal private words written by many other people.

Some services allow users to choose a legacy contact who can manage a memorial page or download selected information. Others delete an account after receiving documents that confirm a death. These processes vary, and they can change. Recording clear wishes while alive can reduce uncertainty, but many people avoid the subject because it feels uncomfortable or distant.

New tools make the issue more complex. Companies can build chatbots or digital avatars from a person’s old posts, recordings and photographs. Supporters suggest that these simulations might preserve stories. Critics question whether meaningful consent was given and whether a lifelike imitation could prolong grief or misrepresent the person. Evidence about long-term effects remains limited.

A digital plan does not need to be dramatic. It can list important accounts, explain where secure recovery information is kept and state which materials should be saved or deleted. Passwords should not be placed in an unprotected document. The central question is not only what technology can preserve, but who should decide, whose privacy should continue and how the living can remember someone without rewriting them.`,
    questions: [
      { prompt: 'Why can access to messages affect more than one person?', options: ['Messages are always public', 'Other people’s private words may be included', 'Platforms own every sentence', 'Families cannot read digital text'], answer: 1, explanation: 'The passage notes that an account contains communications written by other people whose privacy also matters.' },
      { prompt: 'What can a legacy contact sometimes do?', options: ['Change all platform laws', 'Own every purchased film', 'Manage a memorial account or selected data', 'Automatically receive every password'], answer: 2, explanation: 'The third paragraph describes these limited roles offered by some services.' },
      { prompt: 'Why does the author treat digital avatars cautiously?', options: ['They cannot use recordings', 'Their effects and consent can be uncertain', 'They always delete family photos', 'They are only used in games'], answer: 1, explanation: 'The passage raises concerns about consent, grief and misrepresentation, while noting limited long-term evidence.' },
      { prompt: 'Which action is recommended in a digital plan?', options: ['Publish all passwords', 'Ignore licensed materials', 'State what should be kept or deleted', 'Give every relative account access'], answer: 2, explanation: 'The final paragraph recommends recording wishes and secure recovery arrangements.' },
    ],
    writingPrompt: 'Write 140–180 words arguing what responsibilities a social media company has when a user dies. Consider memory, access and the privacy of other people.',
    writingKeywords: ['account', 'privacy', 'memory', 'access', 'company', 'family'],
    vocabulary: [
      { term: 'licence', definition: 'official permission to use something under stated conditions', example: 'The subscription provided a licence to stream the film.' },
      { term: 'legacy', definition: 'something passed on or left behind after a person’s life', example: 'She selected a trusted legacy contact.' },
      { term: 'memorial', definition: 'something created to remember a person who has died', example: 'Friends shared photographs on the memorial page.' },
      { term: 'consent', definition: 'permission given freely with enough understanding', example: 'The family debated whether meaningful consent had been given.' },
      { term: 'misrepresent', definition: 'to give a false or misleading picture of someone or something', example: 'An edited quotation could misrepresent his beliefs.' },
    ],
  },
  {
    id: 'robots-aged-care',
    theme: 'Technology',
    title: 'Robots in Aged Care',
    dek: 'Helpful machines may support older people, but care involves more than completing tasks.',
    minutes: 18,
    passage: `In an aged-care home, a small robot leads a movement class while residents copy its raised arms. Elsewhere, a robotic device helps a worker lift someone safely from a bed. These machines look very different because “care robot” is a broad term. It can include social companions, medicine reminders, mobility aids and equipment for physically demanding work.

Potential benefits are practical. A lifting device may reduce injuries to workers and residents. A sensor could alert staff after a fall, while a reminder may help someone follow a routine. If technology handles repetitive tasks, staff might have more time for conversation and complex support. Whether that extra time actually appears depends on staffing levels and how managers use the savings.

Risks also deserve attention. Sensors inside bedrooms can collect intimate information. A social robot might record voices or faces, and residents may not always understand what is stored. Machines can fail, misread a situation or become difficult to use. Some people enjoy speaking to a robot; others find it childish, confusing or unsettling.

The greatest concern is substitution. A machine can deliver a reminder, but it cannot fully notice the meaning behind a person’s silence or replace a trusted human relationship. On the other hand, rejecting every robot could also remove useful independence. An older person might prefer a machine’s help with a private task rather than always relying on another person.

Good decisions should therefore begin with the resident, not the novelty of the device. Consent should be ongoing, privacy protections should be clear, and a human alternative should remain available where possible. Robots may contribute to care, but efficiency is not the only measure. Dignity, choice and genuine connection matter too.`,
    questions: [
      { prompt: 'Why does the author call “care robot” a broad term?', options: ['All robots look human', 'It covers devices with very different roles', 'Only hospitals use robots', 'Every machine records faces'], answer: 1, explanation: 'The first paragraph lists social, reminder, mobility and lifting technologies with different purposes.' },
      { prompt: 'What condition affects whether robots give staff more time?', options: ['The colour of the device', 'Whether residents exercise', 'Staffing and management decisions', 'The age of the building'], answer: 2, explanation: 'The passage cautions that time savings depend on staffing levels and how managers use them.' },
      { prompt: 'What balanced point is made about independence?', options: ['All residents prefer human help', 'Private tasks should never receive support', 'Some people may prefer machine assistance for certain tasks', 'Robots guarantee complete independence'], answer: 2, explanation: 'The fourth paragraph recognises that a machine may offer some residents greater privacy or independence.' },
      { prompt: 'Which principle should guide decisions?', options: ['Novelty before need', 'The resident’s consent and choices', 'Replacing every staff member', 'Collecting as much data as possible'], answer: 1, explanation: 'The conclusion centres the resident and calls for ongoing consent, privacy and human alternatives.' },
    ],
    writingPrompt: 'Write 140–180 words arguing how one type of robot should or should not be used in aged care. Balance possible benefits with dignity, privacy and choice.',
    writingKeywords: ['robot', 'care', 'resident', 'privacy', 'choice', 'human'],
    vocabulary: [
      { term: 'mobility', definition: 'the ability to move from place to place', example: 'The powered frame supported her mobility.' },
      { term: 'repetitive', definition: 'involving the same action many times', example: 'The machine completed a repetitive transport task.' },
      { term: 'intimate', definition: 'very private or closely personal', example: 'Bedroom sensors may collect intimate information.' },
      { term: 'substitution', definition: 'the act of replacing one thing or person with another', example: 'Residents worried about substitution of staff with machines.' },
      { term: 'dignity', definition: 'the state of being respected and treated as valuable', example: 'Good care protects each resident’s dignity.' },
    ],
  },
  {
    id: 'explainable-ai',
    theme: 'Technology',
    title: 'Can AI Explain Its Decisions?',
    dek: 'An answer from a machine may be useful, but an explanation must also be trustworthy.',
    minutes: 17,
    passage: `Imagine that an artificial intelligence system rejects a loan application or marks a medical scan as high risk. The person affected may reasonably ask, “Why?” If the system cannot provide a meaningful answer, checking for error or unfairness becomes difficult. This concern has encouraged research into explainable AI.

Some computer models are easy to inspect. A small decision tree follows visible rules: if one condition is met, move to one branch; otherwise, move to another. More complex models can contain billions of numerical connections. Their internal calculations may produce accurate predictions without forming a simple, human-readable reason.

Researchers use several methods to interpret such systems. One method highlights which parts of an image most influenced a result. Another changes individual inputs to see when the outcome shifts. These tools can reveal useful patterns, but they do not read the machine’s “thoughts”. An attractive explanation may simplify the process or even create a misleading story after the decision has already been made.

The right level of explanation depends on the situation. A movie recommendation may need only a short note about viewing preferences. A decision involving health, education, employment or justice requires stronger evidence, expert review and a way to challenge the result. Sometimes a less complicated model may be preferable if people can test and understand it more reliably.

Explainability is therefore not a decorative sentence beside an answer. A useful explanation should be accurate enough to test, relevant to the affected person and connected to a real appeal process. AI can support decisions, but responsibility still belongs to the organisations and people who choose where and how it is used.`,
    questions: [
      { prompt: 'Why is explanation important in high-impact decisions?', options: ['It makes every model smaller', 'It helps people check errors and unfairness', 'It guarantees an application succeeds', 'It replaces expert review'], answer: 1, explanation: 'The opening paragraph links meaningful reasons with the ability to inspect mistakes or unfair outcomes.' },
      { prompt: 'What makes a decision tree easier to inspect?', options: ['It follows visible branches and conditions', 'It always uses medical images', 'It has billions of hidden links', 'It never produces errors'], answer: 0, explanation: 'The passage contrasts visible decision-tree rules with highly complex numerical models.' },
      { prompt: 'What limitation of interpretation tools is identified?', options: ['They can only analyse films', 'They always reveal machine thoughts', 'They may produce an oversimplified story', 'They prevent inputs from changing'], answer: 2, explanation: 'The third paragraph warns that a neat explanation may simplify or misrepresent what produced the result.' },
      { prompt: 'Who remains responsible for the use of AI?', options: ['The affected person alone', 'The machine itself', 'Nobody if accuracy is high', 'The people and organisations deploying it'], answer: 3, explanation: 'The final sentence keeps responsibility with those who choose where and how the system operates.' },
    ],
    writingPrompt: 'Write 140–180 words arguing whether a school should use AI to help decide student awards. Explain what evidence, explanation and appeal process would be required.',
    writingKeywords: ['AI', 'school', 'decision', 'explanation', 'evidence', 'appeal'],
    vocabulary: [
      { term: 'inspect', definition: 'to examine something closely', example: 'The reviewer could inspect each branch of the model.' },
      { term: 'interpret', definition: 'to explain or decide the meaning of something', example: 'A coloured map helped the doctor interpret the result.' },
      { term: 'input', definition: 'information entered into a system', example: 'Changing one input altered the prediction.' },
      { term: 'relevant', definition: 'closely connected to the matter being considered', example: 'The explanation must be relevant to the applicant.' },
      { term: 'appeal', definition: 'a formal request for a decision to be reviewed', example: 'The student submitted an appeal with new evidence.' },
    ],
  },
  {
    id: 'attention-economy',
    theme: 'Technology',
    title: 'The Attention Economy',
    dek: 'Many free digital services compete for a limited resource: the user’s focus.',
    minutes: 16,
    passage: `A social app may cost no money to open, but that does not mean nothing is being exchanged. Many digital businesses earn revenue by selling advertising or encouraging purchases. To do this, they compete for attention: the limited time and focus people can give. This system is often called the attention economy.

Design features can make staying feel effortless. Endless scrolling removes a natural stopping point. Notifications create a reason to return, while streaks turn repeated use into a visible achievement. Personalised recommendations may be genuinely useful, yet they also reduce the moment when a user might decide to leave. No single feature controls a person, but several features working together can shape habits.

It would be too simple to blame users for lacking self-control. Companies test colours, timing and layouts with large groups, giving them far more information than an individual user has. However, it would also be too simple to claim that everyone is affected in the same way. Age, purpose, personality and circumstances all influence how a person responds.

Attention-focused design has benefits. It can help people discover communities, creative work and important news. Problems arise when success is measured mainly by clicks, minutes or repeated visits, even when those measures conflict with a user’s goals.

Practical responses can operate at several levels. A user can silence non-essential alerts or set a stopping cue. Schools can teach students to recognise persuasive design. Platforms can provide honest controls and measure satisfaction rather than time alone. Governments may require clearer data practices or protections for children. The aim need not be to reject digital life. It is to make the competition for attention more visible, so people have a fairer chance to direct their own focus.`,
    questions: [
      { prompt: 'What is being exchanged in the attention economy?', options: ['Only physical goods', 'Users’ time and focus', 'School marks', 'Computer memory alone'], answer: 1, explanation: 'The first paragraph identifies attention as the limited resource sought by many digital businesses.' },
      { prompt: 'How does endless scrolling affect use?', options: ['It provides a natural stopping point', 'It turns off all recommendations', 'It removes a cue to stop', 'It blocks advertising'], answer: 2, explanation: 'The passage says endless scrolling eliminates a natural moment for leaving.' },
      { prompt: 'Why is blaming only the user too simple?', options: ['Companies carefully test persuasive designs', 'Users never make choices', 'All people react identically', 'Notifications have no effect'], answer: 0, explanation: 'The third paragraph contrasts individual self-control with companies’ large-scale testing and information.' },
      { prompt: 'What is the author’s overall aim?', options: ['To ban every social platform', 'To make persuasive competition visible and choices fairer', 'To maximise time online', 'To remove all digital communities'], answer: 1, explanation: 'The conclusion seeks greater awareness and control rather than total rejection of digital life.' },
    ],
    writingPrompt: 'Write 140–180 words proposing one change an app, school or government should make to protect young people’s attention. Justify benefits and acknowledge one limitation.',
    writingKeywords: ['attention', 'app', 'young', 'design', 'focus', 'control'],
    vocabulary: [
      { term: 'revenue', definition: 'income received by a business or organisation', example: 'Advertising provided most of the platform’s revenue.' },
      { term: 'personalised', definition: 'adapted for a particular person', example: 'The app offered a personalised list of songs.' },
      { term: 'circumstance', definition: 'a condition that affects a situation', example: 'Her response depended on the circumstance.' },
      { term: 'persuasive', definition: 'able or designed to influence beliefs or actions', example: 'Students examined the app’s persuasive design.' },
      { term: 'non-essential', definition: 'not completely necessary', example: 'He silenced non-essential notifications during study.' },
    ],
  },
  {
    id: 'open-source-medicine',
    theme: 'Technology',
    title: 'Open-Source Medicine',
    dek: 'Sharing designs and knowledge can widen access, but medical tools still require careful testing.',
    minutes: 18,
    passage: `Open-source software allows people to inspect, use and modify its code under a licence. A similar idea is appearing in medicine. Researchers and community groups may share designs for laboratory equipment, prosthetic limbs or health software so that others can study and adapt them. During an emergency, shared knowledge can help teams respond quickly when commercial equipment is scarce.

The approach may lower some barriers. A university could build a research tool from affordable parts instead of purchasing a costly closed system. A prosthetic design might be adjusted to fit locally available materials. Public inspection can also reveal faults, and improvements made in one place can be offered back to the wider community.

However, “open” does not mean “safe”. A design that works in one laboratory may fail when built with different materials or used in heat, dust or humidity. Instructions can be misunderstood. Medical devices may require quality-controlled manufacturing, clinical evidence, trained operators and approval from regulators. Downloading a file is not a substitute for these protections.

There are questions about responsibility too. If volunteers alter a design, who checks the change? Who supports the device when a part breaks? Open projects need clear documentation, version records and processes for reporting faults. They also need to include the people who will use the technology, rather than assuming one design suits every body or community.

Open-source medicine is best understood as a method of collaboration, not a shortcut around standards. Sharing can make useful ideas easier to examine and adapt, while independent testing checks whether those ideas work safely. Openness and regulation can support each other: one invites participation, and the other sets evidence-based limits where mistakes could cause harm.`,
    questions: [
      { prompt: 'How might an open design improve access?', options: ['By requiring rare imported parts', 'By allowing adaptation to affordable local materials', 'By avoiding written instructions', 'By preventing public inspection'], answer: 1, explanation: 'The second paragraph describes building and adapting tools with affordable or locally available parts.' },
      { prompt: 'Why might a successful laboratory design fail elsewhere?', options: ['Open files cannot contain measurements', 'Different materials or conditions may affect it', 'Regulators ban every shared idea', 'Clinical evidence is never available'], answer: 1, explanation: 'The passage names changes in materials, heat, dust and humidity as possible causes of failure.' },
      { prompt: 'What support do responsible open projects need?', options: ['Secret changes and no records', 'Only a downloadable picture', 'Documentation, version records and fault reporting', 'One design for every community'], answer: 2, explanation: 'The fourth paragraph lists these systems as necessary for accountability and maintenance.' },
      { prompt: 'How does the author relate openness and regulation?', options: ['They must always oppose each other', 'Regulation makes testing unnecessary', 'Openness should replace all standards', 'They can support collaboration and safety together'], answer: 3, explanation: 'The conclusion argues that participation and evidence-based safety limits can be complementary.' },
    ],
    writingPrompt: 'Write 140–180 words arguing whether public funding should support open-source medical designs. Use evidence from the passage and explain what safety conditions should apply.',
    writingKeywords: ['open-source', 'medical', 'design', 'safety', 'testing', 'public'],
    vocabulary: [
      { term: 'prosthetic', definition: 'an artificial body part or a device that replaces one', example: 'The team adapted a prosthetic hand design.' },
      { term: 'scarce', definition: 'available only in a small or insufficient amount', example: 'Protective equipment became scarce during the emergency.' },
      { term: 'clinical', definition: 'relating to the observation and treatment of patients', example: 'The device required stronger clinical evidence.' },
      { term: 'regulator', definition: 'an authority that checks and controls an industry or activity', example: 'The regulator reviewed the safety information.' },
      { term: 'collaboration', definition: 'the act of working together towards a shared result', example: 'International collaboration improved the original design.' },
    ],
  },
];
