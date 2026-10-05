export const technologyLessons4 = [
  {
    id: 'recommendation-systems-shape-taste',
    theme: 'Technology',
    title: 'How Recommendation Systems Shape Taste',
    dek: 'Suggestions can help people discover new favourites, while quietly influencing what becomes familiar and popular.',
    minutes: 16,
    passage: `When a music app creates a playlist or a video platform selects the next clip, a recommendation system is making a prediction. It compares signals such as previous choices, viewing time, searches and reactions. It may also notice patterns among users with similar behaviour. The aim is usually to estimate what a person will enjoy or engage with next.

These systems can make enormous catalogues easier to explore. A listener might discover an independent Australian artist whose work would otherwise remain buried. Recommendations can also help people locate tutorials, books or communities relevant to their interests. However, a prediction is not merely a mirror of existing taste. What people are repeatedly offered becomes familiar, and familiarity can influence what they later choose.

A feedback loop may develop. If a song is recommended, it gains more plays. Those plays become evidence that the song is popular, so the system recommends it again. Meanwhile, an unfamiliar style may receive little attention, not because listeners rejected it, but because few encountered it. Companies may also optimise for measurable goals such as clicks or listening time. These measures do not always equal satisfaction, curiosity or lasting value.

Personalisation requires data, creating privacy questions. A service might infer a user’s mood, beliefs or routines from seemingly ordinary activity. Useful safeguards include collecting only necessary information, explaining why it is used and allowing people to delete or limit it. Yet privacy controls alone do not guarantee variety.

A fairer design could include a discovery setting, show why an item was suggested and let users reset or adjust their profile. Human editors, community radio and recommendations from friends can add different pathways. The goal need not be to reject algorithms. It is to recognise that taste grows through exposure, then give people meaningful control over who or what shapes that exposure.`,
    questions: [
      { prompt: 'How can a recommendation system predict what a user may enjoy?', options: ['By examining signals and patterns in user behaviour', 'By asking every artist to select the next item', 'By removing all previous activity', 'By choosing only the newest content'], answer: 0, explanation: 'The opening paragraph says systems compare choices, viewing time, searches, reactions and patterns among similar users.' },
      { prompt: 'How can a feedback loop make popular content more visible?', options: ['Popular items are deleted after one play', 'Recommendations create plays that encourage further recommendations', 'Users stop producing any behavioural data', 'Every unfamiliar item receives equal exposure'], answer: 1, explanation: 'The passage explains that a recommendation earns plays, which then become evidence used to recommend the item again.' },
      { prompt: 'Why might listening time be an incomplete measure?', options: ['It cannot be recorded by a platform', 'It proves that a user dislikes every song', 'It may not represent satisfaction, curiosity or lasting value', 'It always leads to greater variety'], answer: 2, explanation: 'The third paragraph directly contrasts measurable engagement with harder-to-measure qualities such as satisfaction and curiosity.' },
      { prompt: 'What balanced response does the author support?', options: ['Banning all personalised services', 'Allowing algorithms to make every choice invisibly', 'Keeping recommendations while improving control and alternative pathways', 'Collecting more private data without explanation'], answer: 2, explanation: 'The conclusion accepts the usefulness of algorithms but calls for adjustable settings, explanations and other routes to discovery.' },
    ],
    writingPrompt: 'Write 140–180 words arguing whether music or video platforms should include a setting that deliberately increases variety. Use evidence from the passage and address one possible disadvantage.',
    writingKeywords: ['recommendation', 'taste', 'variety', 'algorithm', 'choice', 'privacy'],
    vocabulary: [
      { term: 'catalogue', definition: 'a complete organised collection or list of items', example: 'The streaming catalogue contained millions of songs.' },
      { term: 'exposure', definition: 'the experience of encountering or becoming familiar with something', example: 'Exposure to several styles changed her musical taste.' },
      { term: 'feedback loop', definition: 'a process in which an outcome becomes input that strengthens the same pattern', example: 'Extra plays created a feedback loop that increased the song’s visibility.' },
      { term: 'optimise', definition: 'to make a system work as effectively as possible for a chosen goal', example: 'The platform tried to optimise its home page for viewing time.' },
      { term: 'infer', definition: 'to reach a conclusion from evidence rather than a direct statement', example: 'The service could infer his routine from repeated searches.' },
    ],
  },
  {
    id: 'digital-twins-cities',
    theme: 'Technology',
    title: 'Digital Twins of Cities',
    dek: 'Virtual models can test urban decisions, but their conclusions are only as sound as their data and assumptions.',
    minutes: 17,
    passage: `A digital twin is a changing computer model of a real object or place. For a city, it may combine three-dimensional maps with live or regularly updated information about traffic, energy, weather and public transport. Planners can use the model to explore a question before making a costly change in the physical world.

Imagine a council considering shade structures near a railway station. A digital twin could model the sun’s position, surrounding buildings and pedestrian routes at different times of year. It might compare several designs or estimate how new trees would affect summer heat. Another simulation could test how closing one road during a flood changes traffic on nearby streets. These experiments can reveal interactions that are difficult to see on separate maps.

However, a digital twin is not a perfect copy. Sensors can fail, data can arrive late and some activities are easier to measure than others. Vehicle movements may be recorded in detail while the experiences of people walking, using wheelchairs or resting in public spaces remain poorly represented. A realistic-looking image can therefore create more confidence than the underlying evidence deserves.

Collection also raises privacy concerns. Transport cards, mobile devices and cameras may produce useful patterns, but detailed records can expose individual routines. Cities can reduce this risk by removing identifying details, combining records into groups, limiting storage and testing whether supposedly anonymous data could be linked back to people. Residents should know what is collected and have opportunities to question its use.

Used carefully, a digital twin can support rather than replace public discussion. Planners should publish assumptions, compare predictions with actual outcomes and invite local knowledge that the model misses. A simulation may show where congestion could move, but it cannot decide whose travel time matters most or whether a plan makes a neighbourhood fairer. Those are civic judgements. The model can improve the evidence available; people must still debate the values guiding the decision.`,
    questions: [
      { prompt: 'What is a city digital twin designed to do?', options: ['Replace the physical city with a game', 'Combine information in a changing model for testing ideas', 'Guarantee that no planning decision fails', 'Record only the shapes of buildings'], answer: 1, explanation: 'The first paragraph defines it as an updated model that combines maps and city information so planners can explore changes.' },
      { prompt: 'Why can a realistic-looking model be misleading?', options: ['Three-dimensional maps cannot show buildings', 'The visual detail may hide incomplete or uneven data', 'All sensors report human experiences equally', 'Simulations never contain assumptions'], answer: 1, explanation: 'The passage warns that missing experiences and faulty data can be concealed by a convincing visual display.' },
      { prompt: 'Which privacy protection is suggested?', options: ['Keeping every record forever', 'Publishing individual travel routines', 'Combining records into groups and limiting storage', 'Removing all public information about the project'], answer: 2, explanation: 'The fourth paragraph recommends de-identification, aggregation, storage limits and re-identification testing.' },
      { prompt: 'What must people still decide?', options: ['Whether values such as fairness guide a plan', 'The exact position of the sun', 'Whether computers can display maps', 'How to eliminate every source of uncertainty'], answer: 0, explanation: 'The conclusion says models can inform choices but cannot settle civic judgements about priorities and fairness.' },
    ],
    writingPrompt: 'Write 140–180 words advising a council whether to use a digital twin when redesigning a busy town centre. Explain the benefit, one data limitation and one privacy safeguard.',
    writingKeywords: ['city', 'model', 'data', 'planning', 'privacy', 'simulation'],
    vocabulary: [
      { term: 'simulation', definition: 'a model that imitates a real process or situation', example: 'The flood simulation showed several possible road closures.' },
      { term: 'interaction', definition: 'the way two or more things affect one another', example: 'The model revealed an interaction between shade and pedestrian movement.' },
      { term: 'underlying', definition: 'forming the basis of something but not always immediately visible', example: 'The colourful map hid weaknesses in the underlying data.' },
      { term: 'anonymous', definition: 'not identified by name or other recognisable details', example: 'The council released anonymous travel statistics.' },
      { term: 'civic', definition: 'relating to a city, community or the duties of citizens', example: 'Residents joined a civic debate about the new station.' },
    ],
  },
  {
    id: 'limits-facial-recognition',
    theme: 'Technology',
    title: 'The Limits of Facial Recognition',
    dek: 'A possible computer match is not proof of identity, especially when images, databases and decisions are flawed.',
    minutes: 17,
    passage: `Facial recognition systems compare an image of a face with stored facial templates. Some verify a claimed identity, as when a person unlocks their own phone. Others search a large database for possible matches. These tasks may sound similar, but searching thousands of faces creates more opportunities for an incorrect result.

Performance depends on conditions. A clear, front-facing photograph is different from a distant security-camera image captured in poor light. Ageing, camera angle and partial coverings can also affect comparison. Developers often report an accuracy rate from a particular test, yet that figure may not describe performance in a crowded station or on a different population. The composition of training and testing data matters because error rates can vary between demographic groups.

A false match is not just a technical inconvenience when it influences policing, border control or access to a service. A person may have to prove that a machine is wrong, while an official may give the computer result more authority than it deserves. Human review helps only if reviewers examine independent evidence rather than automatically accepting the suggested match.

There are also limits beyond accuracy. A highly accurate system can still create constant surveillance if cameras identify people wherever they travel. People cannot easily change their face as they can change a password. Collecting templates without meaningful consent therefore creates lasting privacy and security risks. On the other hand, tightly controlled use may assist in finding a missing person or verifying access to a personal device.

Rules should match the seriousness of the setting. Organisations can restrict databases, record every search, set deletion dates and allow independent audits. High-impact decisions should never rest on a facial match alone, and affected people need a clear way to challenge errors. The central question is not simply whether recognition works. It is whether a particular use is necessary, proportionate and supported by safeguards strong enough for the harm a mistake or misuse could cause.`,
    questions: [
      { prompt: 'Why does searching a large database create additional risk?', options: ['It provides more opportunities for an incorrect match', 'It prevents cameras from taking images', 'It makes every facial template identical', 'It verifies only the phone owner'], answer: 0, explanation: 'The first paragraph contrasts one-to-one verification with searching thousands of possible identities.' },
      { prompt: 'Why might a published accuracy rate be incomplete?', options: ['Accuracy cannot be tested at all', 'The rate may come from conditions unlike real use', 'Every population produces identical results', 'Camera angle never affects an image'], answer: 1, explanation: 'The passage says laboratory or specific test results may not represent crowded, poorly lit or demographically different settings.' },
      { prompt: 'When is human review insufficient?', options: ['When reviewers check independent evidence', 'When people can challenge a decision', 'When reviewers simply trust the computer suggestion', 'When search records are audited'], answer: 2, explanation: 'The third paragraph warns that review adds little if a person automatically accepts the system’s proposed match.' },
      { prompt: 'What principle guides the author’s conclusion?', options: ['Facial recognition is always harmless if accurate', 'Every camera should search every available database', 'Safeguards should reflect necessity and possible harm', 'Privacy matters only when a system makes mistakes'], answer: 2, explanation: 'The conclusion calls for necessary, proportionate uses and protections suited to the consequences of error or misuse.' },
    ],
    writingPrompt: 'Write 140–180 words arguing whether facial recognition should be used at a major sporting event. Consider safety, accuracy, privacy and how a person could challenge a match.',
    writingKeywords: ['face', 'match', 'accuracy', 'privacy', 'evidence', 'safeguard'],
    vocabulary: [
      { term: 'verify', definition: 'to check or prove that something is true or genuine', example: 'The phone used a face scan to verify its owner.' },
      { term: 'demographic', definition: 'relating to a population group with shared characteristics', example: 'The audit compared results across demographic groups.' },
      { term: 'surveillance', definition: 'close observation of people, often to monitor their actions', example: 'Residents objected to constant surveillance in public spaces.' },
      { term: 'proportionate', definition: 'appropriate in size or seriousness for the situation', example: 'The judge asked whether the response was proportionate to the risk.' },
      { term: 'audit', definition: 'an independent, systematic examination of records or performance', example: 'An external audit found that search logs were incomplete.' },
    ],
  },
  {
    id: 'computers-detect-emotion',
    theme: 'Technology',
    title: 'Can Computers Detect Emotion?',
    dek: 'Software can measure expressions, voices and movement, but turning those signals into feelings requires uncertain interpretation.',
    minutes: 16,
    passage: `A camera records raised eyebrows and a tightened mouth. Software labels the expression “worried”. Has the computer detected an emotion, or has it only classified visible movements? Emotion-recognition systems analyse signals such as facial expression, voice, posture, typing speed or heart rate. They then use patterns learned from data to assign categories such as happiness, anger or stress.

The idea has appealing uses. A car might notice signs that a driver is becoming drowsy. An optional learning tool could invite a student to request help after repeated difficulty. Some people may also benefit from technology that describes social cues. Yet physical signals do not have one fixed meaning. A person may smile from politeness, nervousness or amusement. A quiet voice may reflect sadness, concentration, culture or simply a sore throat.

Training data adds further uncertainty. Researchers may ask participants to act out emotions, producing exaggerated expressions unlike everyday life. Labels are often supplied by observers who cannot directly know what another person feels. A system trained in one language or culture may misread communication styles elsewhere. Even measurements such as heart rate can indicate exercise, illness or excitement rather than one particular emotion.

Mistakes matter most when people cannot refuse the system or explain themselves. An employer using an emotion score in an interview could disadvantage someone whose expression differs from the program’s expectations. A school that secretly monitors webcams would also create serious privacy and consent concerns. In lower-risk settings, a private tool controlled by the user may be less troubling.

Computers can detect measurable signals and sometimes identify useful patterns. That is not the same as reading an inner state with certainty. Responsible systems should describe results as estimates, avoid high-stakes judgements, minimise stored data and allow correction or opt-out. Emotion is shaped by context and personal experience. Any technology that ignores those facts may sound scientific while offering more confidence than understanding.`,
    questions: [
      { prompt: 'What does emotion-recognition software directly analyse?', options: ['A person’s private thoughts', 'Signals such as expression, voice and posture', 'Only written medical records', 'The future choices of every user'], answer: 1, explanation: 'The opening paragraph lists observable or measurable signals used to assign emotion categories.' },
      { prompt: 'Why is a smile difficult to interpret?', options: ['It can have several meanings depending on context', 'Cameras are unable to record mouths', 'Smiling always indicates sadness', 'Every culture uses it identically'], answer: 0, explanation: 'The passage notes that a smile may express politeness, nervousness or amusement rather than one certain feeling.' },
      { prompt: 'What weakness can occur in training data?', options: ['Participants may perform exaggerated emotions', 'Observers can directly read another person’s mind', 'Heart rate always identifies one emotion', 'All data represents every culture equally'], answer: 0, explanation: 'The third paragraph explains that acted expressions may differ from emotions displayed in ordinary life.' },
      { prompt: 'Which use would the author consider most concerning?', options: ['A private optional tool controlled by its user', 'A driver choosing to monitor drowsiness', 'A high-stakes interview score that cannot be challenged', 'Software describing its result as uncertain'], answer: 2, explanation: 'The author stresses the danger of compulsory, high-impact decisions such as employment assessments.' },
    ],
    writingPrompt: 'Write 140–180 words arguing whether schools should use software that claims to detect student emotion. Discuss one possible benefit, the limits of interpretation and rules for consent.',
    writingKeywords: ['emotion', 'signal', 'context', 'consent', 'estimate', 'school'],
    vocabulary: [
      { term: 'classify', definition: 'to place something into a group according to shared features', example: 'The program tried to classify each recorded expression.' },
      { term: 'posture', definition: 'the position in which a person holds their body', example: 'Her upright posture did not reveal how nervous she felt.' },
      { term: 'exaggerated', definition: 'made to seem larger, stronger or more extreme than usual', example: 'Actors used exaggerated expressions for the training images.' },
      { term: 'disadvantage', definition: 'to place someone in a less favourable position', example: 'A rigid scoring system could disadvantage some applicants.' },
      { term: 'opt-out', definition: 'a choice to refuse or stop taking part in something', example: 'Students needed a genuine opt-out from webcam analysis.' },
    ],
  },
  {
    id: 'fragile-chain-computer-chips',
    theme: 'Technology',
    title: 'The Fragile Chain Behind Computer Chips',
    dek: 'A tiny chip depends on specialised materials, factories and transport routes spread across the world.',
    minutes: 18,
    passage: `A computer chip may be smaller than a fingernail, but producing it requires a global chain of remarkable complexity. The journey begins with materials such as silicon, chemicals and metals. Designers create circuits containing billions of components, while specialised factories build them on thin wafers through repeated stages of coating, printing, etching and cleaning.

No single country or company usually performs every step. Design software may come from one region, manufacturing equipment from another and advanced production from a small number of costly factories. Chips are then cut, packaged, tested and fitted into products elsewhere. This specialisation can improve quality and reduce costs because each participant develops deep expertise. It also creates points of dependence.

A disruption at one point can travel through the chain. Drought may limit the extremely clean water required by a factory. Fire, earthquake, power failure, trade restrictions or shipping delays can interrupt supply. A car containing many common chips may remain unfinished because one inexpensive controller is missing. Building extra factories is not a quick solution: advanced facilities cost enormous sums, take years to complete and need highly trained workers.

Governments and companies are trying to make supplies more resilient. They may hold reserves, use several suppliers, redesign products around available components or support manufacturing closer to customers. However, complete self-sufficiency would be expensive and could duplicate facilities unnecessarily. Stockpiles can also become outdated because chip designs change.

The chain involves ethical and environmental questions as well. Mining affects communities and ecosystems, factories consume energy and water, and discarded electronics contain valuable materials alongside hazardous waste. Resilience should therefore mean more than keeping shelves full. Longer-lasting products, responsible sourcing, safe recycling and transparent working conditions can reduce harm. The chip supply chain shows that digital technology is never weightless: every calculation depends on physical resources, skilled labour and cooperation across borders.`,
    questions: [
      { prompt: 'Why does specialisation create both strength and risk?', options: ['It builds expertise but also creates dependence on particular suppliers', 'It allows every country to complete every step alone', 'It removes the need for manufacturing equipment', 'It makes all chip designs remain current forever'], answer: 0, explanation: 'The second paragraph says specialised participants gain expertise while the whole chain becomes dependent on them.' },
      { prompt: 'How can one missing chip affect a car?', options: ['It automatically changes the car’s colour', 'It can prevent the completed vehicle from being sold', 'It supplies clean water to every factory', 'It makes shipping unnecessary'], answer: 1, explanation: 'The passage gives the example of an unfinished car held back by one inexpensive controller.' },
      { prompt: 'Why can stockpiling have limits?', options: ['Chips never require storage', 'Stored designs may become outdated', 'Factories can be built in a day', 'Reserves eliminate all environmental effects'], answer: 1, explanation: 'The fourth paragraph notes that rapidly changing designs can make stored components obsolete.' },
      { prompt: 'What broader meaning does the author give to resilience?', options: ['Producing the largest possible number of disposable devices', 'Ignoring labour and environmental costs', 'Maintaining supply while reducing social and environmental harm', 'Ending all international cooperation'], answer: 2, explanation: 'The conclusion connects reliable supply with responsible sourcing, recycling, product life and transparent conditions.' },
    ],
    writingPrompt: 'Write 140–180 words recommending two ways a technology company could make its chip supply chain more resilient and responsible. Explain one trade-off in your plan.',
    writingKeywords: ['chip', 'supply', 'factory', 'resilience', 'resources', 'recycling'],
    vocabulary: [
      { term: 'wafer', definition: 'a thin slice of material on which electronic circuits are manufactured', example: 'The factory printed many chips onto one silicon wafer.' },
      { term: 'etching', definition: 'the process of cutting a pattern into a surface using chemicals or other methods', example: 'Etching formed extremely small features on the wafer.' },
      { term: 'specialisation', definition: 'concentration on a particular area of work or expertise', example: 'Specialisation allowed the supplier to perfect one manufacturing stage.' },
      { term: 'resilient', definition: 'able to recover from difficulty or continue despite disruption', example: 'Several suppliers made the production chain more resilient.' },
      { term: 'transparent', definition: 'open, clear and easy for others to examine', example: 'The company published transparent reports about factory conditions.' },
    ],
  },
  {
    id: 'undersea-cables-matter',
    theme: 'Technology',
    title: 'Why Undersea Cables Matter',
    dek: 'Most international internet traffic travels through slender fibre-optic links resting across the ocean floor.',
    minutes: 16,
    passage: `Sending a message overseas feels almost instant and completely wireless. In reality, most international data travels through fibre-optic cables laid across the seabed. Inside each cable, pulses of light carry calls, videos, financial transactions and website requests between continents. Satellites are valuable for remote locations and particular services, but cables usually carry far more data with less delay.

An undersea cable must survive a demanding environment. Near shore, it may have protective layers because anchors and fishing equipment can damage it. In deep water, where human activity is lower, the cable can be much thinner. Survey ships map a route that avoids hazards where possible, and specialised vessels slowly lower the cable to the ocean floor. Equipment along the line strengthens the light signal across great distances.

Breaks still occur. Earthquakes and underwater landslides can cut several cables at once, while accidental human damage is common near coasts. Network operators usually send traffic along other routes, so an individual user may not notice a single fault. Regions with only one or two links are more vulnerable: a break can slow connections, raise costs or isolate services until a repair ship arrives.

Ownership and geography also matter. Private companies build many cables, often connecting major commercial centres. Landing stations become critical points where international links meet networks on land. Governments worry about sabotage and espionage, but secrecy can also make public oversight difficult. Security measures need to protect routes without falsely suggesting that every fault is an attack.

Resilience comes from diversity: several cables, different landing sites, spare capacity and tested repair plans. Environmental surveys are also needed because construction can disturb habitats, although a narrow cable may have a smaller continuing footprint than many people imagine. Undersea cables are largely invisible, yet economies and communities rely on them. Understanding this physical network helps replace the myth of an internet floating in a cloud with a more accurate picture of shared infrastructure that requires investment, cooperation and care.`,
    questions: [
      { prompt: 'Why do cables carry most international data instead of satellites?', options: ['They generally offer greater capacity and less delay', 'They never require maintenance', 'They float above all weather', 'They can only connect nearby suburbs'], answer: 0, explanation: 'The opening paragraph says satellites have uses but cables usually move more data with lower latency.' },
      { prompt: 'Why are cables more protected near the shore?', options: ['Deep water contains more fishing boats', 'Anchors and fishing activity create greater risk', 'Light signals stop working near land', 'Repair ships cannot reach coastal water'], answer: 1, explanation: 'The second paragraph identifies anchors and fishing equipment as hazards in busy coastal areas.' },
      { prompt: 'What usually happens after one cable breaks in a well-connected region?', options: ['All global internet service ends', 'Traffic can be redirected along other routes', 'Every landing station is abandoned', 'Satellites immediately repair the cable'], answer: 1, explanation: 'The passage explains that operators reroute data, which can make a single fault unnoticeable to users.' },
      { prompt: 'Which strategy best improves resilience?', options: ['Depending on one secret cable', 'Using multiple routes, landing sites and repair plans', 'Removing all spare network capacity', 'Treating every fault as sabotage'], answer: 1, explanation: 'The conclusion defines resilience through route diversity, alternative landing points, spare capacity and preparation.' },
    ],
    writingPrompt: 'Write 140–180 words advising an island nation how to make its international internet connection more resilient. Consider cost, cable routes, repair planning and environmental care.',
    writingKeywords: ['cable', 'internet', 'ocean', 'route', 'resilience', 'connection'],
    vocabulary: [
      { term: 'seabed', definition: 'the ground at the bottom of the sea or ocean', example: 'The fibre-optic cable rested on the deep seabed.' },
      { term: 'latency', definition: 'the delay before data begins to travel or a response is received', example: 'Low latency made the video call feel more natural.' },
      { term: 'vulnerable', definition: 'open to being harmed, damaged or disrupted', example: 'The island was vulnerable because it had only one cable link.' },
      { term: 'sabotage', definition: 'deliberate damage intended to disrupt a system or organisation', example: 'Investigators found no evidence that the break was sabotage.' },
      { term: 'infrastructure', definition: 'the basic physical systems and facilities needed by a society', example: 'Reliable communications infrastructure supported local businesses.' },
    ],
  },
  {
    id: 'technology-older-users',
    theme: 'Technology',
    title: 'Designing Technology for Older Users',
    dek: 'Inclusive products respond to varied abilities and experience instead of treating age as a single limitation.',
    minutes: 17,
    passage: `When an older person struggles with an app, the problem is often described as a lack of skill. Sometimes the design deserves closer attention. Tiny text, pale colours, short time limits and unfamiliar symbols can make a simple task difficult. These barriers may affect anyone, but changes in vision, hearing, memory or movement can make them more common with age.

Older users are not one uniform group. Some have worked with computers for decades; others have had little reason or opportunity to use them. A person may confidently manage online banking but find a new gesture confusing. Designers who assume that all older people are helpless can produce patronising products, while designers who ignore age-related needs can exclude users from essential services.

Inclusive design offers practical responses. Text can be resized without breaking the screen. Buttons can have clear labels and enough space around them. Important instructions can use both sound and visual cues. A form can preserve information after a mistake rather than forcing the user to begin again. Clear confirmation before a payment helps prevent accidental actions, while an easy undo function supports recovery.

Testing must involve older people with varied abilities and backgrounds from the beginning, not only after a product is finished. Observing where users hesitate can reveal problems that a design team missed. Privacy also matters during support. A family member or worker may assist without needing permanent access to messages, finances or health records. Systems can offer temporary, limited permissions instead of demanding shared passwords.

Good accessibility rarely benefits only one group. Larger touch targets help a commuter using a phone on a moving bus, captions support people in noisy places and plain language assists new users of any age. Essential services should also keep realistic alternatives for people who cannot use a digital channel. Designing for older users is therefore not about creating a separate, simplified world. It is about building flexible technology that respects independence, protects privacy and expects human abilities to vary.`,
    questions: [
      { prompt: 'Why does the author question the idea that users simply lack skill?', options: ['Poor design can create avoidable barriers', 'Every older person has the same experience', 'Small text always improves accuracy', 'Age prevents anyone from learning technology'], answer: 0, explanation: 'The opening paragraph lists design choices such as tiny text and short time limits that can cause difficulty.' },
      { prompt: 'What mistaken assumption should designers avoid?', options: ['Some users value clear confirmation', 'Older users form one helpless, uniform group', 'Permissions can be limited', 'People benefit from adjustable text'], answer: 1, explanation: 'The second paragraph stresses wide differences in experience and warns against patronising stereotypes.' },
      { prompt: 'How can technology protect privacy during support?', options: ['Require users to share every password', 'Give helpers permanent access to all records', 'Offer temporary permission for specific tasks', 'Remove all confirmation screens'], answer: 2, explanation: 'The fourth paragraph recommends limited, temporary access instead of broad or permanent sharing.' },
      { prompt: 'Why does inclusive design benefit more than older users?', options: ['Features such as captions and larger targets help in many situations', 'It removes every non-digital service', 'It makes all users develop identical abilities', 'It prevents products from being tested'], answer: 0, explanation: 'The conclusion gives examples of accessibility features helping commuters, people in noise and new users of any age.' },
    ],
    writingPrompt: 'Write 140–180 words proposing three design rules for an essential service used by older people. Explain how your rules support independence, accessibility and privacy.',
    writingKeywords: ['design', 'older', 'accessibility', 'independence', 'privacy', 'support'],
    vocabulary: [
      { term: 'patronising', definition: 'treating someone as less capable or intelligent than they are', example: 'Users rejected the patronising instructions and childish tone.' },
      { term: 'inclusive', definition: 'designed to involve and support people with different needs', example: 'The inclusive website worked with keyboards and screen readers.' },
      { term: 'cue', definition: 'a signal or piece of information that prompts an action', example: 'A visual cue showed that the payment was complete.' },
      { term: 'permission', definition: 'authorisation to access information or perform an action', example: 'The helper received temporary permission to update one setting.' },
      { term: 'accessibility', definition: 'the quality of being usable by people with varied abilities', example: 'Adjustable text improved the app’s accessibility.' },
    ],
  },
  {
    id: 'brain-computer-interfaces',
    theme: 'Technology',
    title: 'The Promise and Risk of Brain-Computer Interfaces',
    dek: 'Direct links between neural activity and devices may restore control while raising questions about safety, access and mental privacy.',
    minutes: 18,
    passage: `A brain-computer interface, or BCI, creates a pathway between patterns of brain activity and an external device. Sensors may sit on the scalp or be implanted through surgery. Software learns to connect certain signals with an intended action, such as moving a cursor, selecting a letter or controlling a robotic limb. The system does not read every thought; it recognises limited patterns for a trained task.

The strongest promise is greater independence for people with paralysis or other conditions affecting movement and communication. In research settings, participants have used BCIs to type, operate assistive devices or produce speech from attempted movements. Progress can be life-changing, but demonstrations do not always translate immediately into reliable daily tools. Systems may require long training, expert support and regular adjustment.

Each approach involves trade-offs. Non-invasive headsets avoid surgery but receive weaker signals through hair, skin and bone. Implants can record more precise activity, yet surgery brings risks such as infection, and devices may wear out or need replacement. Researchers must explain uncertainty clearly so that hope does not become pressure to accept danger.

Brain data also raises privacy questions. Signals collected for one purpose might reveal health information or be reused to train commercial systems. Security failures could expose extremely sensitive records. Consent should cover storage, sharing, future use and the right to stop participating. If a company closes, users of an implanted device also need a plan for maintenance, data access and safe removal.

Access and control matter as much as invention. Expensive technology could widen inequality if only wealthy users receive continuing support. People should be able to correct or override a device, and responsibility must remain clear when an action goes wrong. BCIs should not be presented as magic or rejected because they involve the brain. Their value depends on evidence, user priorities, long-term care and rules that protect mental privacy while allowing carefully tested benefits to develop.`,
    questions: [
      { prompt: 'What does a current BCI generally recognise?', options: ['Every thought a person has', 'Limited brain-signal patterns linked to trained tasks', 'Only spoken instructions from a researcher', 'The future health of every user'], answer: 1, explanation: 'The first paragraph distinguishes task-specific signal recognition from reading a person’s complete thoughts.' },
      { prompt: 'Why might a research demonstration not become an immediate daily tool?', options: ['BCIs cannot control any external device', 'Practical use may require training, support and adjustment', 'Every headset requires surgery', 'Participants never practise with the system'], answer: 1, explanation: 'The second paragraph notes that reliability outside research can depend on substantial training and expert assistance.' },
      { prompt: 'What trade-off is described between headsets and implants?', options: ['Headsets have weaker signals, while implants involve surgical risk', 'Implants never need maintenance', 'Headsets read all thoughts without training', 'Both methods have identical risks and precision'], answer: 0, explanation: 'The third paragraph contrasts safer non-invasive collection with the stronger signals and surgical risks of implants.' },
      { prompt: 'Why is a company closure plan important?', options: ['It guarantees that the company earns a profit', 'Implanted users may still need maintenance, data access or removal', 'It prevents users from withdrawing consent', 'It makes brain data less sensitive'], answer: 1, explanation: 'The privacy paragraph states that people with implanted devices need continuing support even if the provider stops operating.' },
    ],
    writingPrompt: 'Write 140–180 words arguing what rules should apply before a brain-computer interface is offered outside a research study. Address benefit, safety, privacy and long-term support.',
    writingKeywords: ['brain', 'interface', 'signal', 'consent', 'privacy', 'support'],
    vocabulary: [
      { term: 'interface', definition: 'a point or system through which two things communicate or interact', example: 'The interface translated brain signals into cursor movement.' },
      { term: 'paralysis', definition: 'loss of the ability to move some or all muscles', example: 'The device helped a participant living with paralysis to type.' },
      { term: 'non-invasive', definition: 'not requiring instruments to enter the body or break the skin', example: 'The non-invasive headset used sensors placed on the scalp.' },
      { term: 'override', definition: 'to use authority or control to change or stop an automatic action', example: 'The user could override the device before it moved the chair.' },
      { term: 'inequality', definition: 'an unfair difference in access, opportunity or treatment', example: 'High ongoing costs could increase inequality in access to care.' },
    ],
  },
];
