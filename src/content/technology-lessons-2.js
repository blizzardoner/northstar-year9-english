export const technologyLessons2 = [
  {
    id: 'satellites-disaster-response',
    theme: 'Technology',
    title: 'Satellites and Disaster Response',
    dek: 'Images from orbit can guide rescuers, but useful decisions still depend on people on the ground.',
    minutes: 17,
    passage: `After a cyclone, flood or earthquake, emergency teams need reliable information quickly. Roads may be blocked, phone towers damaged and entire communities cut off. Satellites can help by observing large areas from orbit. Images taken before and after an event allow analysts to identify flooded districts, damaged bridges or places where landslides have changed the landscape.

Different satellites provide different kinds of evidence. Optical cameras produce detailed pictures, but clouds and smoke can hide the ground. Radar instruments send signals towards Earth and measure what returns. Because radar can operate through cloud and at night, it is especially valuable during storms. Other sensors detect heat, which can help teams track bushfires or volcanic activity.

However, a satellite image is not an instant rescue plan. Raw data must be received, processed and interpreted. An image may show that a road has disappeared, but it cannot confirm whether people nearby have clean water or medical supplies. Local responders add this context through radio reports, community networks and direct observation. They can also notice when an old map has labelled a building incorrectly.

Access is another challenge. High-resolution commercial images can be expensive, and organisations need trained staff and suitable software. International agreements sometimes make emergency data freely available, yet fast delivery still matters. Information that arrives after rescue routes have been chosen may have little practical value.

The best disaster response therefore combines a wide view from space with detailed knowledge from the ground. Satellites can help teams decide where to investigate first, but they do not replace local judgement. Their greatest strength is not seeing everything; it is reducing uncertainty when time and attention are limited.`,
    questions: [
      { prompt: 'Why is radar especially useful during storms?', options: ['It repairs damaged phone towers', 'It can observe through cloud and at night', 'It always produces colour photographs', 'It communicates directly with survivors'], answer: 1, explanation: 'The passage explains that radar signals can operate through cloud cover and darkness.' },
      { prompt: 'What can local responders add to satellite evidence?', options: ['The ability to move satellites', 'Commercial image licences', 'Context about immediate needs and map errors', 'A guarantee that every road is open'], answer: 2, explanation: 'Ground reports reveal local needs and can correct inaccurate labels that images alone cannot explain.' },
      { prompt: 'Which obstacle can reduce the usefulness of satellite data?', options: ['Images arriving too late for decisions', 'Radar working at night', 'Communities using radio reports', 'Analysts comparing two images'], answer: 0, explanation: 'The fourth paragraph notes that information may have little value if it arrives after routes are selected.' },
      { prompt: 'What is the passage’s main argument?', options: ['Satellites should replace local emergency teams', 'Only commercial images are accurate', 'Satellite evidence works best when combined with local judgement', 'Optical cameras can see through every hazard'], answer: 2, explanation: 'The conclusion emphasises combining the broad satellite view with detailed knowledge on the ground.' },
    ],
    writingPrompt: 'Write 140–180 words explaining how an emergency agency should combine satellite data with local reports after a flood. Include one limitation and one practical solution.',
    writingKeywords: ['satellite', 'disaster', 'local', 'data', 'response', 'evidence'],
    vocabulary: [
      { term: 'orbit', definition: 'the curved path of an object around a planet or other body', example: 'The satellite circles Earth in a low orbit.' },
      { term: 'radar', definition: 'a system that uses radio waves to detect objects or surfaces', example: 'Radar revealed flooding beneath the thick cloud.' },
      { term: 'interpret', definition: 'to explain or decide the meaning of information', example: 'Trained analysts interpret the images before sending an alert.' },
      { term: 'resolution', definition: 'the amount of visible detail in an image', example: 'A high-resolution image showed damage to the bridge.' },
      { term: 'uncertainty', definition: 'a lack of complete knowledge or confidence', example: 'Current maps reduced uncertainty about the safest route.' },
    ],
  },
  {
    id: 'problem-infinite-scroll',
    theme: 'Technology',
    title: 'The Problem with Infinite Scroll',
    dek: 'A seamless feed removes stopping points, changing how people notice time and make choices.',
    minutes: 16,
    passage: `On many social media and shopping apps, new items appear whenever a user reaches the bottom of the screen. This design is called infinite scroll. Instead of choosing to open another page, the user can continue with one small movement of a thumb. The feature feels convenient because it removes waiting and keeps attention on the feed.

That convenience also removes a natural stopping point. A numbered page asks a person to make another decision: continue or leave. Infinite scroll makes the default option continuation. Because there is no clear ending, users may have difficulty judging how much they have viewed or how long they have spent. Each new item also offers a small possibility of surprise, so an uninteresting post can be followed immediately by one that feels rewarding.

Designers did not invent infinite scroll simply to waste time. On a small phone screen, loading a continuous list can make browsing smoother. It can help people explore unfamiliar topics without guessing which page contains useful material. For services funded by advertising, however, extra attention can also produce extra revenue. This creates a conflict between a company’s goals and a user’s intention to check only one thing.

Some platforms have introduced reminders, daily limits or messages saying that a user is up to date. These tools restore moments for reflection, but they work only if they are clear and easy to use. A warning that can be dismissed instantly may change little.

The issue is not that scrolling is always harmful. It is that interface design can quietly shape behaviour. A fair design gives people meaningful control: visible time information, optional stopping cues and settings that do not require a determined search. Convenience should reduce effort needed to find information, not remove every opportunity to decide when enough is enough.`,
    questions: [
      { prompt: 'How does infinite scroll differ from numbered pages?', options: ['It requires a decision before every item', 'It automatically continues the feed', 'It prevents advertising from appearing', 'It shows users exactly how much remains'], answer: 1, explanation: 'New items load automatically, so continuing does not require the deliberate choice of opening another page.' },
      { prompt: 'Why can the feature hold attention?', options: ['Every post is equally useful', 'Phones stop showing the time', 'Each new item may offer a rewarding surprise', 'Users must pay to close the feed'], answer: 2, explanation: 'The passage describes how the possibility of a rewarding next item encourages continued scrolling.' },
      { prompt: 'What benefit of continuous lists does the author acknowledge?', options: ['They eliminate company revenue', 'They can make browsing smoother on small screens', 'They guarantee accurate information', 'They make daily limits unnecessary'], answer: 1, explanation: 'The third paragraph recognises smoother mobile browsing as a genuine design advantage.' },
      { prompt: 'According to the conclusion, what makes a design fairer?', options: ['Hiding all usage information', 'Removing every continuous list', 'Giving users clear controls and stopping cues', 'Making settings difficult to locate'], answer: 2, explanation: 'The author calls for visible information, meaningful stopping points and accessible settings.' },
    ],
    writingPrompt: 'Write 140–180 words arguing whether social media apps should be required to offer an option that replaces infinite scroll with pages. Address convenience and user control.',
    writingKeywords: ['scroll', 'design', 'attention', 'control', 'choice', 'app'],
    vocabulary: [
      { term: 'seamless', definition: 'smooth and continuous, with no obvious breaks', example: 'The app creates a seamless path from one video to the next.' },
      { term: 'default', definition: 'the option used automatically unless someone changes it', example: 'Continuation is the default in an endless feed.' },
      { term: 'revenue', definition: 'money received by a business or organisation', example: 'More advertising views can increase revenue.' },
      { term: 'reflection', definition: 'careful thought about an action or idea', example: 'A stopping cue creates a moment for reflection.' },
      { term: 'interface', definition: 'the controls and visual elements through which a user operates technology', example: 'A clear interface makes the time setting easy to find.' },
    ],
  },
  {
    id: 'who-owns-your-face',
    theme: 'Technology',
    title: 'Who Owns Your Face?',
    dek: 'Facial recognition turns a personal feature into searchable data, raising questions about consent and control.',
    minutes: 18,
    passage: `A face is both deeply personal and regularly visible in public. Facial recognition technology turns that visible feature into data. Software measures patterns such as the distance between the eyes and the shape of the jaw, then converts them into a mathematical template. A system can compare that template with others to suggest a possible match.

The technology has useful applications. A phone owner can unlock a device without typing a code, and investigators may use an image to search for a missing person. Yet the same capacity can identify people who never agreed to join a database. Photographs posted for friends can be collected, copied and used to train recognition systems far beyond their original purpose.

Accuracy is another concern. A result is not a certain identification; it is a prediction based on similarity. Lighting, camera angle and image quality affect performance. Some systems have also produced different error rates for different demographic groups, often because their training data did not represent populations equally. If a mistaken match leads to police questioning or denial of access, the consequences are not shared fairly.

Ownership is complicated because a person may own a photograph while a company stores the facial template extracted from it. Laws in some places treat facial information as biometric data and require consent for its collection. Elsewhere, rules are limited or unclear. Even consent can be weak when refusing means losing access to an essential service.

Asking who owns a face may therefore be less useful than asking who may collect its measurements, for what purpose, for how long and with what appeal process. Clear limits cannot prevent every misuse, but they can make organisations justify decisions before turning an ordinary image into a permanent tracking tool.`,
    questions: [
      { prompt: 'What does facial recognition software create from a face?', options: ['A mathematical template', 'A perfect photograph', 'A phone password', 'A public ownership record'], answer: 0, explanation: 'The opening paragraph says measured facial patterns are converted into a mathematical template.' },
      { prompt: 'Why can training data affect fairness?', options: ['Templates cannot be compared', 'Unequal representation can produce different error rates', 'All photographs have identical lighting', 'Training data removes camera angles'], answer: 1, explanation: 'The passage links unequal representation in training data with uneven performance across groups.' },
      { prompt: 'Why might consent still be weak?', options: ['People cannot see their own faces', 'Every country bans biometric data', 'Refusal may block access to an essential service', 'Consent always lasts only one day'], answer: 2, explanation: 'The fourth paragraph notes that consent is not fully free when refusal carries a serious cost.' },
      { prompt: 'Which question does the author consider most useful?', options: ['Whether faces should be visible in public', 'Who may collect facial data and under what limits', 'Whether every image belongs to a company', 'How to make all cameras identical'], answer: 1, explanation: 'The conclusion shifts attention from simple ownership to collection, purpose, duration and appeal rights.' },
    ],
    writingPrompt: 'Write 140–180 words proposing rules for the use of facial recognition at a school. Explain one possible benefit, one risk and how students could challenge mistakes.',
    writingKeywords: ['face', 'recognition', 'consent', 'data', 'school', 'privacy'],
    vocabulary: [
      { term: 'template', definition: 'a stored pattern used for comparison or as a model', example: 'The system compared the new scan with a facial template.' },
      { term: 'demographic', definition: 'relating to a group defined by features such as age or background', example: 'Researchers compared error rates across demographic groups.' },
      { term: 'biometric', definition: 'relating to measurable physical or behavioural features used for identification', example: 'A fingerprint is a form of biometric data.' },
      { term: 'consent', definition: 'freely given permission for something to happen', example: 'The app requested consent before storing the image.' },
      { term: 'appeal', definition: 'a formal request for a decision to be reviewed', example: 'The visitor could appeal an incorrect refusal.' },
    ],
  },
  {
    id: 'video-games-spatial-thinking',
    theme: 'Technology',
    title: 'Video Games and Spatial Thinking',
    dek: 'Navigating digital worlds may exercise useful mental skills, although improvement does not transfer automatically.',
    minutes: 16,
    passage: `To solve a maze, pack a suitcase or interpret a diagram, people use spatial thinking. This includes imagining how objects would look when rotated, judging distance and understanding the relationship between different positions. Because many video games require players to navigate three-dimensional spaces, researchers have investigated whether playing them can strengthen these skills.

Certain games provide repeated spatial practice. A player may study a map, remember landmarks, predict the path of a moving object or rotate pieces to build a structure. Games also give rapid feedback. If a route fails, the player can adjust a plan and try again within seconds. This combination of practice and feedback may improve performance on tasks that resemble actions in the game.

However, improvement does not automatically transfer to every situation. Becoming skilled at locating opponents on one game map does not guarantee success in geometry or real-world navigation. The strongest evidence usually shows modest gains on particular spatial tests, especially when a game closely matches the skill being measured. Other factors matter too: experienced players may begin with an interest in spatial challenges, and time spent gaming can replace sleep, exercise or study.

These limits do not make games useless for learning. Teachers can choose short activities with a clear purpose, then ask students to explain the strategy they used. A building game, for example, could support a lesson on scale if students compare the digital model with measurements and drawings. The discussion helps connect game experience to an academic concept.

The important question is not whether games make people smarter in general. It is which game, which skill and under what conditions. When claims are precise, games can be treated as one tool for practice rather than as either a miracle lesson or a meaningless distraction.`,
    questions: [
      { prompt: 'Which activity uses spatial thinking?', options: ['Imagining a rotated object', 'Memorising a song lyric', 'Choosing a synonym', 'Counting only by repetition'], answer: 0, explanation: 'The first paragraph includes mentally rotating objects as an example of spatial thinking.' },
      { prompt: 'How can games support practice?', options: ['By preventing all failed attempts', 'By giving rapid feedback and chances to adjust', 'By replacing the need for explanation', 'By making every skill transfer'], answer: 1, explanation: 'Players can see when a route fails, change their plan and try again quickly.' },
      { prompt: 'What does the author say about transfer?', options: ['It is guaranteed after any game', 'It occurs only outside school', 'It is often limited to similar tasks', 'It makes sleep less important'], answer: 2, explanation: 'The passage says gains are usually modest and strongest where the game resembles the measured skill.' },
      { prompt: 'Why should students explain their game strategy?', options: ['To connect the activity with an academic concept', 'To increase the game’s loading speed', 'To avoid using measurements', 'To prove all games are educational'], answer: 0, explanation: 'Discussion helps learners transfer a game experience to ideas such as scale and measurement.' },
    ],
    writingPrompt: 'Write 140–180 words recommending or rejecting one kind of video game for a school learning activity. Identify the spatial skill and explain how learning would be checked.',
    writingKeywords: ['game', 'spatial', 'skill', 'learning', 'practice', 'evidence'],
    vocabulary: [
      { term: 'spatial', definition: 'relating to the position, size or shape of objects in space', example: 'Reading a floor plan requires spatial thinking.' },
      { term: 'navigate', definition: 'to plan and follow a route through a place or system', example: 'Players navigate the virtual city using landmarks.' },
      { term: 'transfer', definition: 'to apply learning from one situation to another', example: 'The teacher checked whether the skill would transfer to geometry.' },
      { term: 'modest', definition: 'limited or moderate in size or amount', example: 'The study found a modest improvement in test scores.' },
      { term: 'precise', definition: 'exact, specific and clearly expressed', example: 'A precise claim names the game and the skill being tested.' },
    ],
  },
  {
    id: 'last-mile-internet',
    theme: 'Technology',
    title: 'The Last Mile of the Internet',
    dek: 'Global networks can cross oceans quickly, yet the final connection to a home may remain slow or costly.',
    minutes: 17,
    passage: `The internet often feels wireless, but most long-distance data travels through physical cables. Thick fibre-optic lines cross cities and even oceans, carrying information as pulses of light. These major routes can move enormous amounts of data. The difficult section is often the “last mile”: the link between a high-capacity network and each home, school or business.

In a dense suburb, one new cable can serve many customers within a small area. In a remote region, the same length of cable may reach only a few properties. Digging trenches, crossing rivers and maintaining equipment can cost more than providers expect to earn from subscriptions. Old copper telephone lines may remain in use, but their speed falls over long distances and they can be affected by damage or weather.

Several technologies attempt to close this gap. Fixed wireless systems send data from a tower to an antenna on a building. Satellites can reach places without nearby cables, while fibre offers high speed and capacity where construction is practical. No option is perfect. Mountains can block wireless signals, satellite services may have delays or limited capacity, and fibre is expensive to install across great distances.

The last mile is also a social problem. A connection that technically reaches a town may still be unaffordable, unreliable or too slow for video lessons and medical appointments. Reporting only the number of connected addresses can therefore hide unequal service quality.

Governments and providers must decide what level of access counts as essential and who should pay for difficult connections. A mixed network may be more sensible than searching for one universal technology. Solving the last mile means considering geography, reliability, speed and price together, because a line on a coverage map does not guarantee that a person can participate fully online.`,
    questions: [
      { prompt: 'What does the “last mile” mean?', options: ['The final kilometre of an ocean cable', 'The link from a major network to individual premises', 'A limit on how far light can travel', 'The distance between two satellites'], answer: 1, explanation: 'The passage defines it as the final connection to homes, schools and businesses.' },
      { prompt: 'Why can remote connections be expensive?', options: ['Remote users always need more data', 'One cable may serve relatively few properties', 'Copper becomes faster over distance', 'Cities do not use trenches'], answer: 1, explanation: 'Construction costs are spread across fewer potential customers in sparsely populated areas.' },
      { prompt: 'What can a coverage count fail to show?', options: ['The existence of oceans', 'The colour of network cables', 'Whether service is affordable, reliable and fast enough', 'Whether towers contain metal'], answer: 2, explanation: 'A town may be officially connected while its actual service remains costly, slow or unreliable.' },
      { prompt: 'Why does the author support a mixed network?', options: ['Every technology has different strengths and limits', 'Fibre never carries much data', 'Satellites work only in cities', 'Price should not affect access'], answer: 0, explanation: 'Geography and practical constraints mean no single connection method is ideal everywhere.' },
    ],
    writingPrompt: 'Write 140–180 words advising a government how to improve internet access in a remote community. Compare two technologies and include affordability in your recommendation.',
    writingKeywords: ['internet', 'remote', 'connection', 'fibre', 'wireless', 'affordable'],
    vocabulary: [
      { term: 'fibre-optic', definition: 'using thin glass or plastic fibres to carry information as light', example: 'The fibre-optic cable transmitted data between cities.' },
      { term: 'capacity', definition: 'the maximum amount that something can contain or carry', example: 'More users placed pressure on the network’s capacity.' },
      { term: 'subscription', definition: 'an arrangement to pay regularly for access to a service', example: 'The monthly internet subscription was too expensive for some families.' },
      { term: 'premises', definition: 'a building and the land belonging to it', example: 'Engineers connected the school premises to the network.' },
      { term: 'universal', definition: 'applying to or available for everyone', example: 'No universal technology suits every landscape.' },
    ],
  },
  {
    id: 'translation-apps-wrong',
    theme: 'Technology',
    title: 'When Translation Apps Get It Wrong',
    dek: 'Fast translations can be useful, but meaning depends on context, culture and the cost of an error.',
    minutes: 16,
    passage: `Translation apps can turn a sentence into another language within seconds. For travellers reading a menu or students checking an unfamiliar phrase, this speed is valuable. Modern systems learn patterns from enormous collections of translated text. Instead of replacing each word separately, they predict which sequence is most likely to express the source sentence.

Prediction, however, is not the same as understanding. A word can have several meanings, and the correct choice depends on context. “Bank” might describe a financial institution or the side of a river. Pronouns may be omitted in one language but required in another. Humour, politeness and idioms create further difficulty because a literal version can sound confusing or rude.

Errors are not equally serious. An awkward translation in a holiday message may cause brief embarrassment. A mistake in medical instructions, a legal form or an emergency warning can cause real harm. Users should therefore match their checking process to the risk. Important documents may require a qualified human translator, while a simple conversation can be checked by rephrasing the sentence and confirming key details.

People can also help an app produce better results. Short, complete sentences provide more context than isolated fragments. Avoiding slang can reduce ambiguity. Translating the result back into the original language may reveal an obvious mistake, although this technique is not proof of accuracy because both translations can repeat the same error.

Translation technology is most useful when treated as assistance rather than authority. It can lower barriers and support communication between people who do not share a language. Responsible use requires knowing when speed matters, when precision matters more and when a human should review the result. Fluency on a screen can make a sentence look trustworthy, but smooth wording is not evidence that its meaning is correct.`,
    questions: [
      { prompt: 'How do modern translation systems generally work?', options: ['They replace every word without context', 'They predict likely sequences from learned patterns', 'They ask a human about every sentence', 'They use only dictionary definitions'], answer: 1, explanation: 'The first paragraph describes systems learning patterns and predicting likely sequences.' },
      { prompt: 'Why are idioms difficult to translate?', options: ['They always contain financial terms', 'Their intended meaning may not be literal', 'They occur only in legal forms', 'Apps cannot display complete sentences'], answer: 1, explanation: 'A word-for-word version of an idiom may fail to communicate its cultural meaning.' },
      { prompt: 'When does the author recommend human review?', options: ['For every menu item', 'Only when an app is slow', 'For high-risk material such as medical or legal text', 'Whenever a sentence has a pronoun'], answer: 2, explanation: 'The passage distinguishes minor conversational mistakes from errors that could cause serious harm.' },
      { prompt: 'What warning is given about translating text back again?', options: ['It always changes the language permanently', 'It may repeat the same error in both directions', 'It works only with slang', 'It requires a legal translator'], answer: 1, explanation: 'Back-translation can reveal problems, but the author warns that matching errors can make it misleading.' },
    ],
    writingPrompt: 'Write 140–180 words creating a sensible translation-app policy for a school excursion overseas. Explain what students may translate and when an adult or translator must check.',
    writingKeywords: ['translation', 'context', 'meaning', 'risk', 'check', 'language'],
    vocabulary: [
      { term: 'context', definition: 'the surrounding situation or words that help explain meaning', example: 'The context showed that “bank” meant the river’s edge.' },
      { term: 'idiom', definition: 'an expression whose meaning is different from its literal words', example: 'The idiom confused the automatic translation system.' },
      { term: 'literal', definition: 'following the exact basic meaning of words without interpretation', example: 'A literal translation failed to communicate the joke.' },
      { term: 'ambiguity', definition: 'the quality of having more than one possible meaning', example: 'A complete sentence reduced the ambiguity of the phrase.' },
      { term: 'fluency', definition: 'the quality of being smooth and natural in language', example: 'The sentence had fluency but contained an important error.' },
    ],
  },
  {
    id: 'repairable-phones',
    theme: 'Technology',
    title: 'Repairable Phones',
    dek: 'A phone designed to be opened and fixed can last longer, but repairability involves practical trade-offs.',
    minutes: 17,
    passage: `When a phone battery weakens or a screen cracks, many users discover that the device is difficult to repair. Strong adhesives hold parts together, unusual screws require special tools and replacement components may not be sold to the public. A minor failure can therefore lead to the replacement of an otherwise useful phone.

Repairable design takes a different approach. Parts such as batteries, screens and charging ports can be removed without damaging the device. Manufacturers may provide manuals, tools and software support for replacement components. This can extend a phone’s working life and reduce electronic waste. It may also save money when one affordable part can be changed instead of the entire product.

There are trade-offs. Sealed construction can help make a phone thin and resistant to water or dust. Connectors and removable panels take up space, while keeping spare parts available for years has a cost. Poorly performed repairs can damage a battery or weaken water protection. Repairability therefore needs clear instructions, safe component design and honest information about which jobs require expertise.

Software matters as much as hardware. A phone with a replaceable battery is not truly long-lasting if security updates stop after a few years. Some devices also reject replacement parts until special software pairs them with the phone. Manufacturers argue that pairing can protect security and performance; critics say it can prevent independent repair even when a component is genuine.

A useful repair score should examine more than whether a case can be opened. It should consider part prices, tool requirements, manuals, software restrictions and the length of update support. Consumers can then compare durability rather than relying on vague environmental claims. The goal is not to make every repair effortless. It is to ensure that one worn component does not unnecessarily decide the life of the whole device.`,
    questions: [
      { prompt: 'How can repairable design reduce waste?', options: ['By making every phone disposable', 'By allowing failed parts to be replaced', 'By ending all software updates', 'By sealing every component with adhesive'], answer: 1, explanation: 'Replacing a single damaged component can extend the useful life of the rest of the device.' },
      { prompt: 'What advantage can sealed construction provide?', options: ['Easier battery removal', 'Permanent software support', 'Resistance to water and dust', 'Free replacement parts'], answer: 2, explanation: 'The passage recognises that sealed designs can protect thin phones from water and dust.' },
      { prompt: 'Why is software support relevant to repairability?', options: ['Security updates affect how long a phone remains safe to use', 'Software can physically replace a cracked screen', 'Updates remove the need for batteries', 'Manuals cannot contain pictures'], answer: 0, explanation: 'A physically repairable phone still has a short life if it no longer receives security updates.' },
      { prompt: 'What should a useful repair score include?', options: ['Only the thickness of the case', 'Only the phone’s purchase price', 'Parts, tools, instructions, restrictions and update support', 'The number of advertisements for the phone'], answer: 2, explanation: 'The final paragraph lists several hardware and software factors needed for a meaningful comparison.' },
    ],
    writingPrompt: 'Write 140–180 words arguing what information a repairability label on new phones should show. Explain which factor matters most and address one design trade-off.',
    writingKeywords: ['phone', 'repair', 'battery', 'software', 'waste', 'design'],
    vocabulary: [
      { term: 'component', definition: 'one part of a larger machine or system', example: 'The damaged component could be replaced separately.' },
      { term: 'adhesive', definition: 'a substance used to stick materials together', example: 'Strong adhesive made the phone difficult to open.' },
      { term: 'durability', definition: 'the ability to remain useful despite wear or damage', example: 'Buyers considered durability as well as appearance.' },
      { term: 'restriction', definition: 'a rule or limit on what can be done', example: 'A software restriction blocked the replacement camera.' },
      { term: 'expertise', definition: 'special knowledge or skill in a particular area', example: 'Battery repair may require technical expertise.' },
    ],
  },
  {
    id: 'digital-maps-missing-places',
    theme: 'Technology',
    title: 'Digital Maps and Missing Places',
    dek: 'What a map leaves blank can affect deliveries, emergency help and whether a community is recognised.',
    minutes: 18,
    passage: `A digital map can seem complete because it fills a screen with roads, names and coloured shapes. Yet every map is built from selected data, and some places remain missing. A new street may not appear for months. A footpath used daily by residents may never have been recorded. In rapidly growing settlements, formal addresses may not exist at all.

These gaps have practical effects. Delivery drivers can fail to find homes, health workers may lose time and emergency services may receive unclear directions. A business absent from a popular map can be harder for customers to discover. Missing names also matter culturally. If a landscape shows only a recent official label, an older Indigenous place name and its history may become less visible.

Mapping companies gather information from satellite images, government records, vehicles and user reports. Each source has limits. Tree cover can hide narrow tracks from above, official records may be outdated and automated systems can mistake a private driveway for a public road. Local contributors often know the area best, but they need tools, internet access and a way to correct errors.

Adding detail also requires care. Publishing the exact location of a sacred site could invite damage. Showing a private shelter or an endangered species habitat may create risk. A good map is not simply the one with the most data; it balances usefulness, consent, privacy and safety.

Communities can take part through open mapping projects, especially before disasters or public health campaigns. Their work is strongest when local knowledge is credited and sensitive information remains controlled by the people it concerns. Maps do more than describe places: they influence which routes are used, which services arrive and which stories are noticed. Treating blank spaces as questions rather than emptiness can lead to a more accurate and respectful map.`,
    questions: [
      { prompt: 'What is one consequence of a place being missing from a map?', options: ['Satellite images become impossible', 'Emergency services may receive unclear directions', 'All official records are deleted', 'Residents must stop using footpaths'], answer: 1, explanation: 'The second paragraph explains that map gaps can delay services and make locations difficult to find.' },
      { prompt: 'Why might an Indigenous place name matter?', options: ['It makes every road public', 'It preserves cultural history and visibility', 'It guarantees internet access', 'It identifies private shelters'], answer: 1, explanation: 'The passage notes that showing only a recent label can make older names and histories less visible.' },
      { prompt: 'What limitation of automated mapping is mentioned?', options: ['It may confuse a private driveway with a public road', 'It cannot use any government records', 'It always removes satellite images', 'It reveals every sacred site'], answer: 0, explanation: 'Automated systems can misclassify features because they lack local context.' },
      { prompt: 'Why should some map details remain controlled?', options: ['All maps should contain blank screens', 'Sensitive locations can face harm if published', 'Businesses never want customers', 'Footpaths cannot be mapped safely'], answer: 1, explanation: 'The author gives sacred sites, shelters and habitats as examples where exact locations may create risks.' },
    ],
    writingPrompt: 'Write 140–180 words proposing a community mapping project for an overlooked area. Explain what should be added, who should be consulted and what information should stay private.',
    writingKeywords: ['map', 'community', 'place', 'local', 'privacy', 'service'],
    vocabulary: [
      { term: 'settlement', definition: 'a place where people establish a community', example: 'The growing settlement did not yet have formal street addresses.' },
      { term: 'outdated', definition: 'no longer accurate or suitable because circumstances have changed', example: 'The outdated map showed a road that had been closed.' },
      { term: 'sacred', definition: 'connected with deep religious or cultural importance', example: 'The community protected the location of the sacred site.' },
      { term: 'consent', definition: 'permission freely given after understanding a proposal', example: 'Mappers sought consent before publishing local knowledge.' },
      { term: 'credit', definition: 'public recognition for a contribution or achievement', example: 'Local contributors received credit for correcting the map.' },
    ],
  },
];
