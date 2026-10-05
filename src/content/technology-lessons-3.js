export const technologyLessons3 = [
  {
    id: 'quantum-computers-hype',
    theme: 'Technology',
    title: 'Quantum Computers Without the Hype',
    dek: 'Unusual physics may help with selected problems, but quantum machines are not faster at everything.',
    minutes: 17,
    passage: `Ordinary computers store information in bits represented as 0 or 1. Quantum computers use quantum bits, or qubits. A qubit can be prepared in a combination of states, and multiple qubits can share linked behaviour called entanglement. Carefully designed algorithms use these properties to change the probability of different answers before a measurement produces ordinary data.

This description can sound like a machine trying every answer at once. That popular shortcut is misleading. A quantum algorithm must arrange operations so that useful possibilities become more likely and unhelpful ones cancel out. Only some problems have known methods that could gain a large advantage. These include particular calculations in chemistry, materials science and cryptography. Email, word processing and most games are unlikely to become magically faster.

Today’s quantum processors are also fragile. Heat, vibration and other disturbances can introduce errors. Researchers use error correction, in which many physical qubits work together to protect a smaller number of reliable logical qubits. However, this requires substantial hardware, and present machines cannot yet run every large calculation that researchers hope to attempt.

Claims of “quantum advantage” need close reading. A machine may beat a conventional computer on a specially chosen test, but the task might have little practical use. Later improvements to ordinary algorithms can also narrow the gap. Even so, experiments can reveal which techniques are promising and where engineering must improve.

Quantum computers are better viewed as possible specialist tools than as replacements for laptops or data centres. They may eventually work alongside conventional supercomputers, which would prepare data and check results. The field is scientifically important, but its schedule is uncertain. Sensible judgement separates demonstrated results from forecasts and asks whether a claimed speed-up applies to a useful, fairly compared problem.`,
    questions: [
      { prompt: 'Why is it misleading to say a quantum computer simply tries every answer at once?', options: ['Qubits can only represent 0', 'A quantum algorithm must shape probabilities to obtain useful results', 'Quantum machines cannot perform measurements', 'Ordinary computers already use entanglement'], answer: 1, explanation: 'The second paragraph explains that operations must strengthen useful possibilities and cancel unhelpful ones before measurement.' },
      { prompt: 'What makes present quantum processors difficult to operate reliably?', options: ['They cannot be linked to ordinary computers', 'They use only word-processing software', 'Their qubits are easily disturbed and prone to errors', 'They require no specialised hardware'], answer: 2, explanation: 'The passage identifies heat, vibration and other disturbances as sources of errors in fragile qubits.' },
      { prompt: 'Why should a claim of quantum advantage be examined carefully?', options: ['The test may be specialised and conventional methods may improve', 'Every quantum result is invented', 'Useful tasks never involve chemistry', 'A laptop always has more qubits'], answer: 0, explanation: 'The fourth paragraph warns that a selected test may lack practical value and that better conventional algorithms can reduce the gap.' },
      { prompt: 'What is the author’s overall view of quantum computers?', options: ['They will soon replace every digital device', 'They are useless until they are perfect', 'They already solve all scientific problems', 'They may become valuable specialist tools, but progress is uncertain'], answer: 3, explanation: 'The conclusion presents quantum computers as possible partners to conventional systems while stressing uncertainty and careful evidence.' },
    ],
    writingPrompt: 'Write 140–180 words responding to the claim that quantum computers will soon replace ordinary computers. Use evidence from the passage, distinguish present facts from forecasts and reach a balanced conclusion.',
    writingKeywords: ['quantum', 'qubit', 'algorithm', 'error', 'advantage', 'evidence'],
    vocabulary: [
      { term: 'entanglement', definition: 'a quantum link in which the states of particles or qubits are connected', example: 'The experiment used entanglement between two qubits.' },
      { term: 'probability', definition: 'the likelihood that a particular event or result will occur', example: 'The algorithm increased the probability of measuring a useful answer.' },
      { term: 'cryptography', definition: 'the use and study of methods for protecting information', example: 'Some quantum research could affect modern cryptography.' },
      { term: 'fragile', definition: 'easily damaged, changed or disturbed', example: 'The fragile quantum state was disrupted by heat.' },
      { term: 'conventional', definition: 'based on established or commonly used methods', example: 'Researchers compared the device with a conventional computer.' },
    ],
  },
  {
    id: 'drones-search-rescue',
    theme: 'Technology',
    title: 'Drones in Search and Rescue',
    dek: 'Eyes in the sky can help emergency teams cover difficult ground, provided their limits are understood.',
    minutes: 16,
    passage: `When a bushwalker is missing or floodwater cuts off a road, a small uncrewed aircraft can give rescuers a view that is difficult to obtain from the ground. Drones may carry ordinary cameras, thermal sensors, lights or loudspeakers. They can inspect unstable slopes and flooded areas without immediately placing a crew in the same danger.

Speed is a major attraction. A drone can search a mapped pattern and send live images to a control team. A thermal camera may detect temperature differences that suggest a person is present, particularly at night. However, a warm shape could be an animal, sun-heated rock or machinery. Thick tree cover can hide a person, and water, wind or rain can reduce image quality. A possible sighting therefore needs trained interpretation and confirmation.

Drones do not make helicopters, boats or ground teams unnecessary. Their batteries limit flight time, payloads are usually small, and aviation rules may restrict where they fly. In strong wind, a crewed aircraft may also be unable to operate safely, but a lightweight drone can be especially vulnerable. Communication links may fail in steep valleys or remote country.

Good planning matters as much as the aircraft. Search leaders must decide which areas have the highest priority, avoid collisions with emergency helicopters and record what has already been examined. Operators need permission and skill, not just a device bought from a shop. Images can also capture homes, properties or people who are not involved in the emergency, so access and storage should be controlled.

Used well, drones add another source of evidence. They can help teams direct limited time and personnel, deliver a radio or small medical item in some situations, and monitor hazards. Yet a drone image is not a rescue by itself. Success still depends on coordination, local knowledge, reliable communication and people able to reach and assist the person in danger.`,
    questions: [
      { prompt: 'What is one safety benefit of using a drone?', options: ['It can inspect dangerous ground before a crew enters', 'It guarantees that a missing person is found', 'It can fly in every kind of weather', 'It replaces all emergency helicopters'], answer: 0, explanation: 'The opening paragraph says drones can view unstable or flooded areas without immediately exposing a crew to those hazards.' },
      { prompt: 'Why must a thermal-camera sighting be confirmed?', options: ['Thermal cameras work only in daylight', 'Every warm shape is a person', 'Animals or heated objects may produce a similar signal', 'A drone cannot transmit an image'], answer: 2, explanation: 'The second paragraph lists animals, warm rocks and machinery as possible causes of a misleading thermal shape.' },
      { prompt: 'Which operational risk does the passage identify?', options: ['Drones always carry large loads', 'Communication links may fail in difficult terrain', 'Aviation rules never apply during rescue work', 'Batteries last for several days'], answer: 1, explanation: 'The passage notes that steep valleys and remote areas can interrupt communication links.' },
      { prompt: 'What is the main argument of the passage?', options: ['Searches should be controlled only by software', 'Privacy never matters during an emergency', 'Ground teams are now outdated', 'Drones are useful supporting tools, not complete rescue systems'], answer: 3, explanation: 'The final paragraph describes drones as another source of evidence while keeping rescue dependent on people, planning and coordination.' },
    ],
    writingPrompt: 'Write 140–180 words advising an emergency service whether to expand its use of search-and-rescue drones. Explain two benefits, two limitations and the rules or training you would require.',
    writingKeywords: ['drone', 'rescue', 'thermal', 'operator', 'evidence', 'safety'],
    vocabulary: [
      { term: 'uncrewed', definition: 'operating without a person travelling on board', example: 'The uncrewed aircraft surveyed the flooded paddock.' },
      { term: 'thermal', definition: 'relating to heat or its measurement', example: 'A thermal sensor detected a warm shape after dark.' },
      { term: 'payload', definition: 'the equipment or goods carried by a vehicle or aircraft', example: 'The drone had a small medical payload.' },
      { term: 'vulnerable', definition: 'open to harm, damage or failure', example: 'The lightweight aircraft was vulnerable to sudden gusts.' },
      { term: 'coordination', definition: 'the organisation of people or activities so they work together', example: 'Careful coordination kept the drone clear of the helicopter.' },
    ],
  },
  {
    id: 'self-driving-cars',
    theme: 'Technology',
    title: 'When Cars Drive Themselves',
    dek: 'Automated driving may reduce some mistakes, but responsibility and safe limits remain contested.',
    minutes: 18,
    passage: `A car that keeps its distance from the vehicle ahead is not necessarily “self-driving”. Driving automation has levels. Some systems assist with steering or speed while a human must supervise continuously. More advanced systems may control the whole driving task within a defined area and under stated conditions. A vehicle that can handle every road and weather condition without a human remains a different and much harder goal.

Automated systems combine cameras, radar or laser-based sensors with maps and software. Computers do not become tired or distracted, and they can react consistently to situations they recognise. Supporters argue that automation could reduce crashes caused by common human errors. It might also improve mobility for some people who cannot drive.

The difficult cases are often unusual ones: temporary roadworks, confusing hand signals, smoke, a fallen branch or behaviour that breaks normal traffic patterns. Sensors can be affected by glare, heavy rain or dirt. Software trained and tested in one city may meet different road markings, wildlife and driving habits elsewhere. Safe operation therefore depends on knowing the system’s operational design domain—the conditions in which it is intended to work.

Handovers create another problem. If a person has watched the car drive for a long time, they may not be ready to respond instantly when the system requests help. Clear controls and realistic instructions matter. Calling an assistance feature “autopilot”, for example, can encourage overconfidence if users misunderstand its limits.

Responsibility must also be settled. After a crash, investigators may need data from the vehicle, while protecting the privacy of passengers and nearby road users. Drivers, manufacturers, software suppliers and road authorities may each influence the outcome. Automated cars should therefore be judged by evidence from transparent testing, including rare and dangerous scenarios, rather than by a flawless demonstration on a sunny road. Progress may be gradual: limited driverless services in suitable areas could arrive well before a car that can safely go anywhere.`,
    questions: [
      { prompt: 'Why does the author distinguish levels of driving automation?', options: ['To show that assistance and full automation are different', 'To prove every modern car is driverless', 'To argue that speed control is illegal', 'To remove the need for human supervision'], answer: 0, explanation: 'The first paragraph separates supervised assistance, automated operation under limited conditions and the harder goal of driving anywhere.' },
      { prompt: 'What is an operational design domain?', options: ['A factory that builds only sensors', 'The conditions in which a system is designed to operate', 'A list of passengers in a vehicle', 'The legal owner of the road'], answer: 1, explanation: 'The third paragraph defines the idea as the specific conditions and surroundings the automated system is intended to handle.' },
      { prompt: 'Why can a handover to a human be risky?', options: ['Humans cannot touch automated controls', 'Cars always stop before a handover', 'A disengaged supervisor may not respond quickly', 'The system never warns the driver'], answer: 2, explanation: 'The passage explains that someone who has not been actively driving may be unprepared to take over immediately.' },
      { prompt: 'What evidence does the author want before judging automated cars?', options: ['Advertising filmed in ideal weather', 'The opinion of one passenger', 'Only the number of sensors installed', 'Transparent testing across rare and dangerous situations'], answer: 3, explanation: 'The conclusion contrasts broad, transparent testing with a polished demonstration on an easy road.' },
    ],
    writingPrompt: 'Write 140–180 words arguing whether driverless cars should first be allowed only in limited areas. Use evidence from the passage and address safety, access and responsibility.',
    writingKeywords: ['automation', 'vehicle', 'driver', 'testing', 'conditions', 'responsibility'],
    vocabulary: [
      { term: 'automation', definition: 'the use of technology to perform tasks with reduced human control', example: 'Driving automation can assist with steering and speed.' },
      { term: 'consistently', definition: 'in a similar and dependable way over time', example: 'The software responded consistently to a familiar signal.' },
      { term: 'domain', definition: 'a particular area, environment or range of activity', example: 'Heavy snow was outside the vehicle’s operating domain.' },
      { term: 'handover', definition: 'the transfer of control or responsibility from one person or system to another', example: 'The driver missed the urgent handover warning.' },
      { term: 'transparent', definition: 'open enough for methods and evidence to be examined', example: 'The regulator requested transparent safety testing.' },
    ],
  },
  {
    id: 'data-centre-energy',
    theme: 'Technology',
    title: 'The Energy Cost of Data Centres',
    dek: 'Streaming, cloud storage and AI rely on physical facilities whose impacts vary by place and design.',
    minutes: 17,
    passage: `A photo stored “in the cloud” is still held on physical equipment. Data centres contain rows of servers that process searches, stream video, host websites and train or run artificial intelligence systems. They also need networking equipment, backup power and cooling. Together, these activities use electricity every hour of the day.

A large facility can consume as much electricity as a substantial town, but simple comparisons can mislead. Data centres differ greatly in size, workload and efficiency. A newer server may complete more tasks for each unit of energy than an older one. Moving computing into a well-managed shared facility can sometimes use less power than running many small, inefficient server rooms.

The source and timing of electricity matter. A centre supplied by a grid dominated by coal has a different carbon impact from one using low-emissions generation. A company may buy renewable-energy certificates or sign a contract supporting a wind or solar project. Such purchases can encourage cleaner supply, but they do not always mean the facility is powered by renewable electricity at every hour. Batteries, flexible workloads and stronger grids may help match demand with clean generation more closely.

Cooling creates local questions too. Some systems evaporate water, which can reduce electricity use but add pressure in a dry region. Other designs use more air cooling or recycle water. Waste heat may warm nearby buildings in cool climates, although distance, temperature and infrastructure affect whether that is practical.

Efficiency is important, but rising demand can outweigh efficiency gains. More video, cloud services and computing-intensive AI may increase total consumption even when each task uses less energy. Meaningful reporting should therefore include total electricity, water use, emissions, location and changes over time—not just one favourable ratio. Users can avoid unnecessary storage or choose lower-resolution streaming when suitable, but companies, energy providers and governments make the larger infrastructure decisions. Digital services feel weightless; their costs are not.`,
    questions: [
      { prompt: 'Why can comparisons between a data centre and a town be misleading?', options: ['Towns never use electricity', 'Facilities vary in scale, work and efficiency', 'Every server performs the same task', 'Cloud storage has no physical equipment'], answer: 1, explanation: 'The second paragraph cautions that facilities differ greatly and that newer or shared systems can process work more efficiently.' },
      { prompt: 'Why might a renewable-energy certificate not describe hourly power use?', options: ['It can support clean generation without matching each hour of demand', 'Certificates prevent companies using wind energy', 'Data centres operate only during daylight', 'Electricity cannot travel through a grid'], answer: 0, explanation: 'The passage distinguishes supporting renewable supply from actually matching a facility’s consumption with it at every hour.' },
      { prompt: 'What trade-off can occur in cooling?', options: ['Water use may fall while servers disappear', 'Air cooling always has zero impact', 'Using evaporated water may reduce electricity but strain local water supplies', 'Waste heat can warm any distant city'], answer: 2, explanation: 'The fourth paragraph explains that evaporative cooling can save electricity while increasing pressure on water in dry places.' },
      { prompt: 'What reporting does the author consider meaningful?', options: ['Only a single efficiency ratio', 'Only the company’s renewable purchases', 'The number of photos stored by each user', 'Total energy, water, emissions, location and trends'], answer: 3, explanation: 'The final paragraph explicitly calls for several measures and change over time rather than one favourable statistic.' },
    ],
    writingPrompt: 'Write 140–180 words proposing what information a data-centre company should publish each year. Use evidence from the passage and explain why one measure alone is insufficient.',
    writingKeywords: ['data centre', 'electricity', 'water', 'emissions', 'efficiency', 'reporting'],
    vocabulary: [
      { term: 'facility', definition: 'a place and its equipment designed for a particular purpose', example: 'The computing facility operated throughout the night.' },
      { term: 'workload', definition: 'the amount and type of work assigned to a person or system', example: 'The centre shifted a flexible workload to the afternoon.' },
      { term: 'certificate', definition: 'an official document or record confirming a claim or purchase', example: 'The company bought a renewable-energy certificate.' },
      { term: 'evaporate', definition: 'to change from liquid into vapour', example: 'The cooling system allowed some water to evaporate.' },
      { term: 'infrastructure', definition: 'the basic systems and structures needed for an activity or society', example: 'New grid infrastructure connected the renewable project.' },
    ],
  },
  {
    id: 'biometric-passports-privacy',
    theme: 'Technology',
    title: 'Biometric Passports and Privacy',
    dek: 'A passport chip can strengthen identity checks, while wider biometric systems raise questions about data use.',
    minutes: 16,
    passage: `A biometric passport, often called an ePassport, contains an electronic chip as well as the familiar printed page. The chip stores identity information and a digital version of the holder’s photograph. At a border gate, software can compare a live image of the traveller’s face with the image linked to the passport. The aim is to check that the document is genuine and belongs to the person presenting it.

Security features can make copied or altered passports easier to detect. Digital signatures allow a reader to check whether information on the chip was issued by a recognised authority and changed afterwards. The chip is not normally a live tracking device: it does not need a battery or continuously report its location. It is read at short range by suitable equipment.

However, the passport is only one part of a broader system. A border agency may store a live photograph, a match result, travel details or records of a manual inspection. Rules about retention, sharing and access differ between countries. A secure chip does not automatically guarantee that every connected database or later use is equally secure and justified.

Facial comparison can also make mistakes. Lighting, camera position, ageing and image quality can affect a match. Performance may differ across groups if systems are built or tested on unrepresentative data. A failed automatic check should not be treated as proof of wrongdoing; travellers need a clear human review process and a way to correct inaccurate records.

The debate is therefore not simply convenience versus privacy. Faster gates may reduce queues and help officers focus on unusual cases. At the same time, collecting information for one purpose does not provide unlimited permission to reuse it for another. Proportionate design asks what data is necessary, how long it should be kept, who can see it and how decisions can be challenged. Trust depends not only on accurate technology, but also on laws, oversight and honest explanations to travellers.`,
    questions: [
      { prompt: 'What does a border gate compare during a biometric passport check?', options: ['A live face image with the passport photograph', 'Two travellers’ fingerprints', 'A home address with a flight map', 'The passport battery with a scanner'], answer: 0, explanation: 'The first paragraph explains that facial comparison links the person at the gate to the image stored with the passport.' },
      { prompt: 'What does a digital signature help a reader check?', options: ['Whether the traveller owns a phone', 'Whether issued chip data has been altered', 'Where the passport travelled yesterday', 'How long a border queue will be'], answer: 1, explanation: 'The second paragraph states that signatures help verify the issuing authority and reveal later changes to chip information.' },
      { prompt: 'Why does the author discuss connected databases?', options: ['To show that chips have unlimited storage', 'To prove all countries keep identical records', 'To distinguish passport security from later storage and use of data', 'To suggest live photographs are never collected'], answer: 2, explanation: 'The third paragraph warns that a secure chip does not make every database, retention rule or later use automatically justified.' },
      { prompt: 'What should happen after a failed automatic match?', options: ['The traveller should automatically be accused', 'All passport records should be published', 'The gate should ignore identity completely', 'A human review and correction process should be available'], answer: 3, explanation: 'The fourth paragraph says an error is not proof of wrongdoing and calls for review and record correction.' },
    ],
    writingPrompt: 'Write 140–180 words arguing what privacy safeguards should apply to biometric passport checks. Refer to data collection, retention, human review and the benefits of faster processing.',
    writingKeywords: ['biometric', 'passport', 'privacy', 'data', 'review', 'border'],
    vocabulary: [
      { term: 'biometric', definition: 'relating to measurable physical or behavioural features used to identify a person', example: 'The gate performed a biometric comparison of her face.' },
      { term: 'genuine', definition: 'real, authentic and not falsely made', example: 'The scanner checked that the passport was genuine.' },
      { term: 'retention', definition: 'the act of keeping information or material for a period of time', example: 'The policy limited retention of live photographs.' },
      { term: 'unrepresentative', definition: 'not accurately reflecting the range of people or cases involved', example: 'An unrepresentative test group can hide performance problems.' },
      { term: 'proportionate', definition: 'appropriate in scale to the need or risk involved', example: 'The inquiry asked whether long-term storage was proportionate.' },
    ],
  },
  {
    id: '3d-printing-disaster-relief',
    theme: 'Technology',
    title: '3D Printing for Disaster Relief',
    dek: 'Local production can supply selected parts quickly, but a printer cannot replace an entire relief chain.',
    minutes: 15,
    passage: `After a cyclone or earthquake, a relief team may need a small plastic connector, a replacement handle or a clip for medical tubing. The part might be cheap, yet damaged roads and crowded transport networks can delay its arrival. A 3D printer offers another option: send a digital design to a nearby machine and build the object layer by layer.

This approach can be useful for low-volume, specialised items. A team can adjust a design to fit available equipment and produce a trial without ordering thousands of units. Digital files are lighter to move than boxes of every possible spare part. In some emergencies, local makers and universities have helped produce face shields, equipment adapters or simple tools.

The benefits have limits. Printing can be slow, and machines require electricity, suitable material, spare parts and trained operators. A printed object may look correct while containing weak layers or an inaccurate measurement. Heat, moisture and dust can affect materials and machines. Items used for drinking water, structural support or medical treatment may need strict testing and approved materials because failure could cause serious harm.

Design sharing also creates responsibility. A file made for one model of device might not fit another. Versions should be labelled, changes recorded and unsafe files removed. Before production, teams should confirm the actual need with local responders; an impressive object is wasteful if nobody can use or repair it. Where possible, affected communities should be partners rather than passive recipients of unfamiliar technology.

3D printing is therefore one tool within a supply network. It may bridge a temporary gap, especially for a small part whose design can be verified. Conventional manufacturing remains better for many standard items because factories can produce them quickly, consistently and at scale. Effective disaster relief begins with needs, standards and logistics—not with a machine looking for a problem.`,
    questions: [
      { prompt: 'When can 3D printing be especially useful after a disaster?', options: ['When a small specialised part is delayed', 'When millions of identical items are immediately needed', 'When no electricity or material exists', 'When the design has not been checked'], answer: 0, explanation: 'The opening and second paragraphs focus on low-volume parts that are needed locally but difficult to transport quickly.' },
      { prompt: 'Why can a printed object require testing even if it looks correct?', options: ['Printers never follow digital files', 'Hidden weak layers or wrong measurements may cause failure', 'All printed objects dissolve in water', 'Testing is needed only for decoration'], answer: 1, explanation: 'The third paragraph warns that appearance can hide weak layers or inaccurate dimensions, especially in safety-critical uses.' },
      { prompt: 'What should happen when a shared design is changed?', options: ['Its version and changes should be recorded', 'It should lose every label', 'It should be used with all device models', 'Local responders should not see it'], answer: 0, explanation: 'The fourth paragraph calls for labelled versions and records of changes so teams know which file they are using.' },
      { prompt: 'How does the author position 3D printing in disaster relief?', options: ['As a replacement for planning and factories', 'As useful only for toys', 'As a complete global supply network', 'As a limited tool within broader logistics and standards'], answer: 3, explanation: 'The conclusion says printing may bridge selected gaps but cannot replace conventional production, logistics or verified needs.' },
    ],
    writingPrompt: 'Write 140–180 words recommending when a disaster-relief team should use 3D printing. Include a suitable example, necessary safety checks and one situation where conventional manufacturing is better.',
    writingKeywords: ['printing', 'disaster', 'design', 'testing', 'local', 'supply'],
    vocabulary: [
      { term: 'specialised', definition: 'designed or developed for a particular purpose', example: 'The team needed a specialised connector for the pump.' },
      { term: 'adapter', definition: 'a device that allows different parts or systems to connect', example: 'A printed adapter joined the hose to the container.' },
      { term: 'structural', definition: 'relating to the parts that support a building or object', example: 'A structural component required rigorous testing.' },
      { term: 'recipient', definition: 'a person or group that receives something', example: 'Residents were partners, not merely recipients of aid.' },
      { term: 'logistics', definition: 'the planning and movement of supplies, people and equipment', example: 'Blocked roads made relief logistics difficult.' },
    ],
  },
  {
    id: 'smart-farms-decisions',
    theme: 'Technology',
    title: 'Smart Farms and Better Decisions',
    dek: 'Sensors and software can guide farm choices, but useful data still needs context, access and judgement.',
    minutes: 16,
    passage: `A soil sensor reports falling moisture in one paddock. Satellite images show uneven plant growth, while a weather station predicts hot, dry conditions. On a “smart farm”, these streams of data can be combined to guide irrigation, fertiliser use, pest checks or the timing of harvest. The goal is not simply to collect more numbers, but to make better decisions.

More precise action can save resources. Instead of watering an entire field equally, a farmer may target drier areas. A camera system might identify signs of weeds so that treatment is applied only where needed. Livestock tags can help locate animals or reveal changes in movement that deserve attention. These tools may improve productivity and reduce some environmental impacts, although results depend on the crop, climate and quality of the system.

Data can be incomplete or wrong. A damaged sensor may report false moisture levels, and a satellite image may be obscured by cloud. A model trained in another region might not account for Australian soils, pests or extreme weather. Farmers still need observations, local experience and backup plans before acting on an alert.

Cost and control also matter. Large farms may be better able to afford equipment, reliable internet and technical support. Smaller producers could benefit from shared services, but ongoing subscriptions can create dependence on one supplier. Contracts should explain who owns farm data, whether it can be sold or used to train commercial models, and whether information can be exported when a farmer changes platforms. Cybersecurity matters when connected systems operate pumps, gates or machinery.

Smart farming should strengthen judgement rather than hide it. A useful system explains uncertainty, allows correction and works when connectivity is poor. Governments, researchers and farming communities can test tools under local conditions and share evidence about costs as well as benefits. A dashboard may reveal a pattern, but deciding what it means—and what action is practical—remains a human responsibility.`,
    questions: [
      { prompt: 'What is the main goal of combining farm data?', options: ['To replace crops with computers', 'To collect numbers without acting', 'To support better decisions about farm work', 'To make every paddock identical'], answer: 2, explanation: 'The first paragraph says collection is not the goal by itself; information should guide choices such as irrigation or harvest timing.' },
      { prompt: 'How might precise technology reduce resource use?', options: ['By watering only areas that need it', 'By applying every treatment everywhere', 'By ignoring soil conditions', 'By removing all livestock tags'], answer: 0, explanation: 'The second paragraph gives targeted irrigation and weed treatment as examples of using fewer resources.' },
      { prompt: 'Why might a model from another region be unreliable?', options: ['Australian farms do not collect data', 'Local soils, pests and weather may differ', 'Satellite images never show plants', 'Farmers cannot read alerts'], answer: 1, explanation: 'The passage notes that regional conditions may not be represented in a model developed elsewhere.' },
      { prompt: 'Which contract issue does the author raise?', options: ['The colour of each sensor', 'The number of clouds each year', 'Whether tractors have radios', 'Who controls, uses and can export farm data'], answer: 3, explanation: 'The fourth paragraph asks who owns data, how suppliers may reuse it and whether farmers can move it to another platform.' },
    ],
    writingPrompt: 'Write 140–180 words advising a farming cooperative whether to invest in smart-farm technology. Balance resource savings with cost, data control, reliability and local knowledge.',
    writingKeywords: ['farm', 'sensor', 'data', 'decision', 'local', 'control'],
    vocabulary: [
      { term: 'irrigation', definition: 'the artificial supply of water to land or crops', example: 'The moisture reading helped schedule irrigation.' },
      { term: 'productivity', definition: 'the amount or value produced from available resources', example: 'Better timing improved the orchard’s productivity.' },
      { term: 'obscured', definition: 'hidden or made difficult to see clearly', example: 'Cloud obscured part of the satellite image.' },
      { term: 'subscription', definition: 'an arrangement involving regular payment for continued access', example: 'The software required an annual subscription.' },
      { term: 'uncertainty', definition: 'the condition of not being completely known or predictable', example: 'The forecast displayed its level of uncertainty.' },
    ],
  },
  {
    id: 'recycle-solar-panels',
    theme: 'Technology',
    title: 'The Race to Recycle Solar Panels',
    dek: 'A growing source of clean electricity will also create a stream of complex material to recover.',
    minutes: 18,
    passage: `Solar panels can generate electricity for decades, but they do not last forever. Storm damage, electrical faults or falling performance may lead to removal, while some working panels are replaced when owners install more powerful systems. As early generations reach the end of their service, Australia and other countries must decide how to handle a growing waste stream.

A typical silicon panel contains glass, an aluminium frame, polymers, silicon cells, copper and small amounts of silver. Aluminium and cables are relatively straightforward to recover. Glass forms most of the panel by weight, but it may be contaminated or worth less than high-quality glass. Valuable materials inside laminated layers are harder to separate without heat, chemicals or specialised machinery.

The best environmental choice is not always immediate recycling. A safe, functioning panel may be tested and reused, extending its life before material recovery. Repair can also help, although damaged electrical components require qualified assessment. Sending old panels to places without sound waste controls can shift pollution and worker risks rather than solve them.

Recycling methods involve trade-offs. A simple process may recover frames and glass cheaply but lose silicon and silver. More advanced treatment can recover a wider range of materials, yet it may use more energy or chemicals and cost more. Whether a facility is viable depends on transport distances, the number of panels available, recovered-material prices and rules that discourage landfill.

Policy can shape the system before waste volumes peak. Product stewardship schemes can make producers or importers contribute to collection and treatment. Clear design standards could encourage panels that are easier to dismantle, while tracking systems can show where equipment goes. Claims of “100 per cent recyclable” should be treated cautiously: a material may be technically recoverable without being recovered in practice. The race is not just to invent a laboratory process, but to build a safe network for collection, reuse and high-quality recovery.`,
    questions: [
      { prompt: 'Why might a working solar panel be removed before it fails?', options: ['Its owner installs a more powerful system', 'All panels stop after one year', 'Glass cannot face sunlight', 'Recycling laws require immediate removal'], answer: 0, explanation: 'The opening paragraph notes that owners sometimes replace functional panels when upgrading to higher-powered equipment.' },
      { prompt: 'Which parts are described as relatively straightforward to recover?', options: ['Laminated silicon and silver only', 'Polymers mixed with glass', 'Aluminium frames and cables', 'Every material at once'], answer: 2, explanation: 'The second paragraph contrasts readily recovered frames and cables with valuable materials trapped inside laminated layers.' },
      { prompt: 'What trade-off can advanced recycling create?', options: ['It recovers fewer materials without equipment', 'It may recover more but use additional energy, chemicals and money', 'It always makes transport free', 'It guarantees a market for every material'], answer: 1, explanation: 'The fourth paragraph says broader recovery can require more energy or chemicals and have higher costs.' },
      { prompt: 'Why is “100 per cent recyclable” an incomplete claim?', options: ['Solar panels contain no useful materials', 'Recycling is illegal in Australia', 'Technical recovery does not guarantee actual recovery', 'Every panel must go to landfill'], answer: 2, explanation: 'The final paragraph distinguishes a material that could technically be recovered from one that is collected and recovered in real systems.' },
    ],
    writingPrompt: 'Write 140–180 words arguing how Australia should manage ageing solar panels. Consider reuse, recycling trade-offs, product stewardship and the difference between technical and actual recovery.',
    writingKeywords: ['solar', 'panel', 'reuse', 'recycling', 'materials', 'stewardship'],
    vocabulary: [
      { term: 'laminated', definition: 'made by bonding together several layers of material', example: 'The laminated panel protected the fragile solar cells.' },
      { term: 'contaminated', definition: 'made impure or less useful by unwanted material', example: 'Mixed coatings left the recovered glass contaminated.' },
      { term: 'viable', definition: 'capable of working successfully in practical conditions', example: 'A steady supply of panels made the facility viable.' },
      { term: 'stewardship', definition: 'responsible management of products or resources over time', example: 'The stewardship scheme funded collection and safe treatment.' },
      { term: 'dismantle', definition: 'to take something apart into its separate pieces', example: 'Workers could dismantle the frame without breaking the glass.' },
    ],
  },
];
