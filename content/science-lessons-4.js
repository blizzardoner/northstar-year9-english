export const scienceLessons4 = [
  {
    id: 'how-animals-navigate',
    theme: 'Animal Behaviour',
    title: 'How Animals Navigate',
    dek: 'Animals combine inherited abilities, learned landmarks and several natural signals to find their way.',
    minutes: 16,
    passage: `A migrating bird does not carry a printed map, yet it may travel thousands of kilometres and return to a familiar breeding site. Other animals perform equally impressive journeys. Sea turtles cross oceans, salmon locate the rivers where they began life, and ants return to tiny nests after searching for food. These travellers do not all use one universal navigation system.

Some animals respond to a compass direction. Experiments suggest that certain birds can detect Earth’s magnetic field, although scientists are still investigating exactly how their bodies sense it. The Sun and stars can also provide directional information. Because the Sun appears to move across the sky, an animal using it must allow for the time of day. Young birds may inherit a tendency to fly in a particular direction for a certain period, then refine their routes through experience.

Landmarks provide another source of information. Coastlines, mountain ranges, smells and even patterns of city lights may help experienced animals recognise a route. Desert ants can estimate direction from the Sun and distance from the number and length of their steps. If researchers alter an ant’s leg length, it initially overshoots or undershoots its nest, revealing how its internal estimate works.

Navigation studies must separate possible cues carefully. A bird released under an overcast sky might lose access to the Sun but retain magnetic information. Researchers can compare this bird with others under different conditions rather than drawing a conclusion from one flight.

Most long journeys probably depend on several systems that check or replace one another. A magnetic compass may give a broad direction, while smells and landmarks become useful near the destination. Navigation is therefore not a mysterious single sense. It is a flexible process in which inherited responses, sensory evidence and learning work together.`,
    questions: [
      { prompt: 'Why must an animal using the Sun as a compass account for time?', options: ['The Sun appears to move across the sky', 'The Sun changes Earth’s magnetic field each hour', 'Landmarks disappear during the day', 'Animals can see the Sun only at noon'], answer: 0, explanation: 'The apparent position of the Sun changes through the day, so direction must be adjusted for time.' },
      { prompt: 'What did altered leg length reveal in experiments with desert ants?', options: ['Ants navigate only by smell', 'Ants estimate distance partly through their steps', 'Longer legs remove the need for sunlight', 'Ants cannot learn a route'], answer: 1, explanation: 'Ants with changed leg length misjudged the nest distance, supporting the idea of step-based estimation.' },
      { prompt: 'Why might researchers release birds under different conditions?', options: ['To make every bird follow the same route', 'To separate the effects of possible navigation cues', 'To prevent birds using inherited behaviour', 'To prove that one flight explains all migration'], answer: 1, explanation: 'Comparing conditions helps researchers test which cues, such as sunlight or magnetism, affect navigation.' },
      { prompt: 'What is the passage’s main conclusion?', options: ['Every animal uses the same magnetic sense', 'Navigation usually combines several sources of information', 'Learning has no role in animal movement', 'Landmarks matter only to insects'], answer: 1, explanation: 'The conclusion presents navigation as a flexible combination of inherited responses, senses and learning.' },
    ],
    writingPrompt: 'Write 140–180 words explaining how an animal could use several navigation systems during a long journey. Use evidence from the passage, describe two cues and explain why relying on one cue may be risky.',
    writingKeywords: ['navigation', 'magnetic', 'compass', 'landmark', 'migration', 'evidence'],
    vocabulary: [
      { term: 'navigate', definition: 'to find and follow a route from one place to another', example: 'The turtle can navigate across a wide ocean.' },
      { term: 'migrating', definition: 'moving seasonally from one region to another', example: 'The migrating birds stopped to feed beside the wetland.' },
      { term: 'cue', definition: 'a signal or piece of information that guides behaviour', example: 'A familiar smell may act as a navigation cue.' },
      { term: 'inherit', definition: 'to receive a biological feature from earlier generations', example: 'Young birds may inherit a tendency to fly south.' },
      { term: 'refine', definition: 'to improve something by making small changes', example: 'Experience helps animals refine their routes.' },
    ],
  },
  {
    id: 'science-of-fermentation',
    theme: 'Food Science',
    title: 'The Science of Fermentation',
    dek: 'Microorganisms transform food by releasing energy, creating flavours and changing storage life.',
    minutes: 15,
    passage: `Bread dough rising, yoghurt becoming tangy and cabbage turning into sauerkraut may seem like unrelated changes. In each case, microorganisms transform ingredients through fermentation. These organisms obtain energy by breaking down sugars. Their products, which can include acids, gases and alcohol, change the food around them.

Yeast is a microscopic fungus used in bread making. In moist dough, yeast cells consume available sugars and release carbon dioxide and ethanol. Much of the ethanol evaporates during baking, while bubbles of carbon dioxide become trapped in the dough’s stretchy network of proteins. The expanding gas makes the loaf rise. Temperature matters: cool conditions slow yeast activity, but excessive heat can kill the cells.

Different bacteria drive many other fermentations. In yoghurt, lactic acid bacteria turn a sugar in milk into lactic acid. As acidity increases, milk proteins gather into a thicker structure and the flavour becomes sharp. Similar acid-producing microbes are involved when vegetables ferment in salty water. Salt discourages many unwanted organisms while allowing salt-tolerant microbes to grow, but the concentration and cleanliness still need careful control.

People have used fermentation for thousands of years, long before they could see microorganisms. Fermented food sometimes lasts longer because acidity or alcohol makes conditions less suitable for organisms that cause spoilage. However, fermentation does not automatically make any food safe. The correct culture, temperature, salt level, oxygen conditions and time are important. A strange smell, colour or container pressure can signal a failed process rather than an interesting flavour.

Modern food scientists measure acidity, temperature and microbial populations to make results more predictable. Fermentation remains a biological process, so small changes can affect texture and taste. Its value comes from controlled microbial activity: humans create favourable conditions, and living cells perform the chemical transformations.`,
    questions: [
      { prompt: 'What makes bread dough rise during yeast fermentation?', options: ['Lactic acid dissolves the flour', 'Carbon dioxide becomes trapped in the dough', 'Salt turns directly into oxygen', 'Ethanol freezes inside the loaf'], answer: 1, explanation: 'Yeast releases carbon dioxide, and bubbles trapped in the protein network expand the dough.' },
      { prompt: 'How does lactic acid affect yoghurt?', options: ['It makes milk proteins form a thicker structure', 'It removes every microorganism', 'It changes milk sugar into carbon dioxide only', 'It prevents the flavour becoming sharp'], answer: 0, explanation: 'Increasing acidity causes milk proteins to gather and gives yoghurt its tangy flavour.' },
      { prompt: 'Why can some fermented foods last longer?', options: ['Fermentation removes all water instantly', 'Acid or alcohol can discourage spoilage organisms', 'Every fermented food becomes sterile', 'Microorganisms stop all chemical change'], answer: 1, explanation: 'The passage explains that acidity or alcohol may create unsuitable conditions for spoilage organisms.' },
      { prompt: 'What warning does the author give?', options: ['Cool conditions always kill yeast', 'Fermentation makes every ingredient safe', 'Safe fermentation depends on controlled conditions', 'Scientists cannot measure microbial activity'], answer: 2, explanation: 'Correct cultures and conditions are necessary; fermentation alone is not a guarantee of safety.' },
    ],
    writingPrompt: 'Write 140–180 words explaining how microorganisms change one fermented food. Describe the inputs and products, identify two conditions that require control and explain why fermentation is not an automatic safety guarantee.',
    writingKeywords: ['fermentation', 'microorganism', 'sugar', 'acid', 'temperature', 'control'],
    vocabulary: [
      { term: 'fermentation', definition: 'a process in which microorganisms break down substances such as sugars', example: 'Fermentation produced gas that lifted the dough.' },
      { term: 'microorganism', definition: 'a living thing too small to be seen clearly without magnification', example: 'Each microorganism grows best under particular conditions.' },
      { term: 'ethanol', definition: 'a type of alcohol produced in some fermentations', example: 'Yeast released ethanol as it consumed sugar.' },
      { term: 'acidity', definition: 'the level of acid in a substance', example: 'The yoghurt’s acidity increased as bacteria grew.' },
      { term: 'culture', definition: 'microorganisms deliberately grown for a particular purpose', example: 'The yoghurt maker added a bacterial culture to warm milk.' },
    ],
  },
  {
    id: 'mapping-the-ocean-floor',
    theme: 'Earth Science',
    title: 'Mapping the Ocean Floor',
    dek: 'Sound, satellites and careful measurements reveal a landscape hidden beneath deep water.',
    minutes: 17,
    passage: `For most of human history, the deep ocean floor was harder to map than the surface of the Moon. Sailors could lower a weighted line to measure depth at one point, but this slow method left enormous gaps. The seabed is not a flat plain. It contains mountain chains, trenches, volcanoes, canyons and broad areas covered by sediment.

Modern survey ships commonly use sonar, which depends on sound travelling through water. A device sends a pulse towards the seabed and records the echo. If scientists know the speed of sound in that water and measure the pulse’s return time, they can calculate depth. Multibeam sonar sends out a fan of pulses, allowing a ship to map a wide strip rather than a single line.

The calculation requires corrections. Sound speed changes with temperature, pressure and salinity, so crews lower instruments that measure water conditions. Waves and ship motion can tilt the sonar beam. Positioning systems must also locate each measurement accurately. Uncorrected errors might create a feature on a map that does not exist or hide a real one.

Satellites contribute a broader but less detailed view. Undersea mountains contain extra mass, which slightly changes local gravity and causes a small bulge in the sea surface above them. Satellites can detect these subtle surface variations. The method helps researchers estimate seabed shape between ship surveys, but it cannot replace close sonar mapping.

Detailed maps guide ships, reveal habitats and help scientists study plate tectonics. They are also important when planning cables or investigating tsunami hazards. Yet large parts of the ocean remain mapped only at low resolution. Every map is a model assembled from measurements with limits. By recording uncertainty and combining methods, researchers can improve the picture without pretending that every hidden ridge has already been seen.`,
    questions: [
      { prompt: 'How does sonar help scientists calculate ocean depth?', options: ['It photographs the seabed through all water', 'It measures the return time of a sound pulse', 'It weighs the sediment on the seabed', 'It measures only the sea surface temperature'], answer: 1, explanation: 'Depth can be calculated from the travel time of the sound echo and the speed of sound in water.' },
      { prompt: 'Why do survey crews measure temperature, pressure and salinity?', options: ['These factors affect the speed of sound', 'They prevent all movement of the ship', 'They show where satellites are located', 'These factors make gravity disappear'], answer: 0, explanation: 'Sound speed varies with water conditions, so measurements are needed to correct the calculation.' },
      { prompt: 'What can satellites detect above an undersea mountain?', options: ['A small sea-surface bulge linked to gravity', 'Every animal living on the mountain', 'A sonar echo from the ship', 'The exact colour of the seabed'], answer: 0, explanation: 'The mountain’s extra mass affects gravity and creates a subtle variation in sea-surface height.' },
      { prompt: 'Why does sonar mapping remain necessary?', options: ['Satellite estimates provide less seabed detail', 'Sound cannot travel through seawater', 'Ships can map only flat areas', 'Gravity gives exact high-resolution images'], answer: 0, explanation: 'Satellite data provide broad estimates, while close sonar surveys produce finer detail.' },
    ],
    writingPrompt: 'Write 140–180 words explaining how a research team should map an unfamiliar area of ocean floor. Compare sonar and satellite evidence, identify two possible errors and explain how the team could improve reliability.',
    writingKeywords: ['sonar', 'seabed', 'sound', 'satellite', 'depth', 'uncertainty'],
    vocabulary: [
      { term: 'sonar', definition: 'a system that uses sound and echoes to detect or measure underwater objects', example: 'The ship used sonar to map a deep trench.' },
      { term: 'salinity', definition: 'the amount of dissolved salt in water', example: 'The instrument recorded salinity at several depths.' },
      { term: 'multibeam', definition: 'using many sound beams to measure a wide area at once', example: 'Multibeam equipment mapped a strip beneath the vessel.' },
      { term: 'resolution', definition: 'the level of detail that a measurement or image can show', example: 'The close survey produced a map with higher resolution.' },
      { term: 'tectonics', definition: 'the processes involving movement and deformation of Earth’s crust', example: 'Seabed ridges provide evidence about plate tectonics.' },
    ],
  },
  {
    id: 'why-some-materials-remember-shape',
    theme: 'Materials Science',
    title: 'Why Some Materials Remember Shape',
    dek: 'Shape-memory materials return to a trained form because their internal structures can switch arrangement.',
    minutes: 16,
    passage: `A bent paperclip usually stays bent, but a wire made from a shape-memory alloy can behave differently. After being twisted at a cool temperature, it may return to a trained shape when warmed. The wire does not contain a tiny picture of its original form. Its apparent memory comes from reversible changes in the arrangement of its atoms.

A common shape-memory alloy contains nickel and titanium. At higher temperatures, its atoms favour an ordered crystal structure called austenite. When the material cools, it can change into martensite, a structure that is easier to deform. Bending the cool alloy rearranges variants of this martensite without necessarily breaking atomic bonds. Heating gives the atoms enough energy to return to the austenite arrangement, pulling the object back towards its trained shape.

Manufacturers train the material by holding it in the required form while applying a carefully controlled heat treatment. The temperatures at which later transformations occur depend on composition and processing. This makes accurate manufacturing important: a small change in the proportion of elements can alter when the response begins.

Shape-memory alloys can produce movement without gears or conventional motors. They are used in some medical devices, pipe couplings and small actuators. A compact medical frame, for example, can be inserted in a narrow form and expand at body temperature. However, these materials have limits. Their movement may be slower than a motor, repeated cycling can cause fatigue, and temperature changes can be difficult to control precisely. Nickel-containing devices also need suitable surface design and testing.

Other materials, including certain polymers, can show shape-memory behaviour through different molecular mechanisms. In every case, “memory” is a useful description, not evidence that the material thinks. Its response follows from structure, energy and a designed trigger.`,
    questions: [
      { prompt: 'What causes a shape-memory alloy to return towards its trained form?', options: ['A reversible change in atomic arrangement', 'A motor hidden inside the wire', 'The permanent breaking of all atomic bonds', 'A picture stored in the metal'], answer: 0, explanation: 'Heating can restore the austenite crystal arrangement, which pulls the alloy towards its trained shape.' },
      { prompt: 'Why is cool martensite relatively easy to deform?', options: ['It becomes a liquid', 'Its structural variants can rearrange', 'It contains no atoms', 'It always breaks when bent'], answer: 1, explanation: 'The martensite variants can rearrange during bending without necessarily breaking atomic bonds.' },
      { prompt: 'How can composition affect a shape-memory alloy?', options: ['It changes the transformation temperatures', 'It removes the need for manufacturing', 'It guarantees unlimited cycling', 'It makes all alloys respond at body temperature'], answer: 0, explanation: 'The proportions of elements and processing determine when structural changes occur.' },
      { prompt: 'Which limitation is identified in the passage?', options: ['The alloys can never produce movement', 'Repeated use can cause material fatigue', 'Heating has no effect on crystal structure', 'Medical devices need no testing'], answer: 1, explanation: 'The passage notes that repeated cycling can fatigue the material and reduce its useful performance.' },
    ],
    writingPrompt: 'Write 140–180 words assessing a possible use for a shape-memory material. Explain how the material changes, describe one advantage and two limitations, and decide whether it suits the chosen purpose.',
    writingKeywords: ['alloy', 'shape', 'austenite', 'martensite', 'temperature', 'fatigue'],
    vocabulary: [
      { term: 'alloy', definition: 'a material made by combining a metal with one or more other elements', example: 'The alloy contained carefully measured amounts of nickel and titanium.' },
      { term: 'reversible', definition: 'able to return to an earlier state or condition', example: 'Heating triggered a reversible structural change.' },
      { term: 'deform', definition: 'to change shape when a force is applied', example: 'A user could deform the cool wire without snapping it.' },
      { term: 'actuator', definition: 'a component that creates movement in a machine or system', example: 'The heated wire worked as a simple actuator.' },
      { term: 'fatigue', definition: 'weakening or damage caused by repeated loading or movement', example: 'Thousands of cycles eventually caused metal fatigue.' },
    ],
  },
  {
    id: 'carbon-cycle-in-peatlands',
    theme: 'Climate Science',
    title: 'The Carbon Cycle in Peatlands',
    dek: 'Waterlogged soils slow decay, allowing peatlands to store carbon while remaining vulnerable to disturbance.',
    minutes: 18,
    passage: `Peatlands cover only a portion of Earth’s land, yet they store vast amounts of carbon. They form where dead plant material accumulates faster than it decomposes. In bogs and fens, waterlogged soil contains little oxygen. Many decomposers work slowly under these cool, acidic or oxygen-poor conditions, so partly decayed remains build up as peat.

Living plants take carbon dioxide from the atmosphere during photosynthesis. Some carbon becomes leaves, stems and roots. When these tissues die, a small fraction may remain in the wet ground for centuries. Layer by layer, the peat becomes a long-term carbon store. At the same time, microbes continue to respire and release carbon dioxide. In oxygen-poor zones, some microorganisms also produce methane, a powerful greenhouse gas. A peatland therefore absorbs and releases carbon in several forms.

The balance can change rapidly when people drain peatlands for farming, forestry or fuel extraction. Lower water levels allow oxygen to enter previously saturated layers. Decomposition speeds up, releasing carbon dioxide that had been locked away. Dry peat can also burn, sometimes smouldering underground for long periods. Fire releases carbon and removes material that took centuries to accumulate.

Restoration often involves blocking drains and raising the water table. Rewetting can slow carbon loss and support peat-forming plants, but recovery is not immediate. Methane emissions may increase for a time, and badly eroded peat may require additional work. Local rainfall, vegetation and past damage all influence the outcome.

For this reason, scientists measure greenhouse gases over seasons and years rather than judging a project from one reading. Protecting an intact peatland usually avoids the large losses caused by drainage. Restoring a damaged site can still be valuable, but its carbon benefits must be assessed as a changing balance, not as a simple claim that wet ground always removes greenhouse gases.`,
    questions: [
      { prompt: 'Why does plant material accumulate as peat?', options: ['Waterlogged conditions slow decomposition', 'All microbes are absent from peatlands', 'Plants stop taking in carbon dioxide', 'Oxygen makes decay impossible'], answer: 0, explanation: 'Low-oxygen, often cool and acidic conditions slow decomposers, allowing remains to build up.' },
      { prompt: 'How does drainage alter stored peat carbon?', options: ['It blocks oxygen from the soil', 'It can speed decomposition and carbon dioxide release', 'It instantly creates new peat', 'It prevents dry peat from burning'], answer: 1, explanation: 'A lower water table exposes peat to oxygen, increasing decomposition and carbon loss.' },
      { prompt: 'Why can rewetting produce mixed short-term results?', options: ['Methane emissions may increase for a time', 'It always causes immediate peat fires', 'It removes every peat-forming plant', 'Carbon can no longer enter roots'], answer: 0, explanation: 'Although rewetting can slow carbon loss, oxygen-poor conditions may initially increase methane emissions.' },
      { prompt: 'Why are measurements needed across seasons and years?', options: ['Peatland carbon exchange changes over time', 'One reading always captures the full balance', 'Scientists measure only plant height', 'Restoration ends all microbial activity'], answer: 0, explanation: 'Absorption and emissions vary, so long-term evidence is needed to assess the overall balance.' },
    ],
    writingPrompt: 'Write 140–180 words advising whether a damaged peatland should be rewetted. Explain how peat stores carbon, describe drainage impacts, address methane as a complication and recommend how success should be measured.',
    writingKeywords: ['peatland', 'carbon', 'decomposition', 'drainage', 'methane', 'restoration'],
    vocabulary: [
      { term: 'peat', definition: 'partly decayed plant material that accumulates in wet ground', example: 'A thick layer of peat had formed beneath the bog plants.' },
      { term: 'decomposer', definition: 'an organism that breaks down dead material', example: 'Each decomposer worked slowly in the waterlogged soil.' },
      { term: 'saturated', definition: 'holding as much water as possible', example: 'The saturated ground contained very little oxygen.' },
      { term: 'smoulder', definition: 'to burn slowly with little flame', example: 'Dry peat can smoulder below the ground surface.' },
      { term: 'rewetting', definition: 'the process of restoring water to drained land', example: 'Rewetting raised the water table near the surface.' },
    ],
  },
  {
    id: 'how-forensic-scientists-read-pollen',
    theme: 'Forensic Science',
    title: 'How Forensic Scientists Read Pollen',
    dek: 'Tiny grains transferred between places can support an investigation when experts interpret them cautiously.',
    minutes: 17,
    passage: `Every flowering plant produces pollen, and each grain carries the male reproductive cells needed for plant reproduction. Pollen also has a tough outer wall with patterns that differ among plant groups. These features make grains surprisingly persistent and sometimes identifiable under a microscope. Forensic palynology applies the study of pollen and spores to legal investigations.

Pollen can settle on clothing, hair, shoes, soil or vehicles. A mixture collected from an object may reflect places it has visited. For example, abundant grains from a plant with a limited distribution could support a connection with a particular habitat. Wind-pollinated plants often release huge amounts that travel widely, while insect-pollinated species may produce less pollen that is transferred more locally. Investigators must consider these differences.

Collecting useful evidence requires strict procedures. Samples from an item are sealed and labelled, while control samples are taken from relevant locations. Tools must be cleaned to prevent cross-contamination. In the laboratory, specialists compare the size, shape, surface pattern and openings of grains. Some pollen can be identified only to a plant family rather than a single species, which limits the precision of any claim.

A pollen match does not prove exactly when or how contact occurred. Grains may remain on a jacket through several trips, arrive indirectly on another object, or be common across a broad region. Seasonal flowering can provide clues, but stored or transported plant material complicates the timing. Analysts therefore compare complete pollen mixtures and other evidence instead of relying on one distinctive grain.

Forensic pollen is best treated as supporting evidence. It can strengthen or weaken a proposed link between an object and a place, especially when careful controls rule out contamination. Its power comes not from making a perfect botanical fingerprint, but from combining microscopic observations with ecology, statistics and a transparent account of uncertainty.`,
    questions: [
      { prompt: 'Why can pollen be useful in forensic science?', options: ['Its tough patterned wall can persist and aid identification', 'Every grain identifies one exact address', 'It disappears immediately from clothing', 'All plants produce identical pollen'], answer: 0, explanation: 'Pollen walls can survive and have features that differ among plant groups.' },
      { prompt: 'Why must analysts distinguish wind-pollinated from insect-pollinated plants?', options: ['Their pollen may travel over different distances', 'Only insect-pollinated plants reproduce', 'Wind removes all pollen patterns', 'Their grains cannot occur together'], answer: 0, explanation: 'Wind-pollinated plants may spread abundant pollen widely, changing how strongly it links a sample to a place.' },
      { prompt: 'What is the purpose of cleaning collection tools?', options: ['To enlarge the pollen grains', 'To prevent cross-contamination between samples', 'To make every plant flower', 'To determine when a jacket was worn'], answer: 1, explanation: 'Clean tools reduce the chance that investigators transfer grains from one sample to another.' },
      { prompt: 'Why can a pollen match not prove exactly how contact occurred?', options: ['Pollen can persist or be transferred indirectly', 'Microscopes cannot reveal surface patterns', 'Control samples are never collected', 'Plant distribution has no effect on evidence'], answer: 0, explanation: 'Old or indirect transfer offers alternative explanations, so the evidence must be interpreted with caution.' },
    ],
    writingPrompt: 'Write 140–180 words evaluating a claim that pollen on a shoe proves its owner visited one location. Explain how pollen is compared, identify two alternative explanations and recommend other evidence or controls.',
    writingKeywords: ['pollen', 'forensic', 'sample', 'transfer', 'contamination', 'uncertainty'],
    vocabulary: [
      { term: 'palynology', definition: 'the scientific study of pollen and spores', example: 'Palynology helped the analyst compare grains from two sites.' },
      { term: 'persistent', definition: 'continuing to exist or remain for a long time', example: 'The persistent pollen stayed trapped in the fabric.' },
      { term: 'distribution', definition: 'the area or pattern over which something occurs', example: 'The plant had a narrow distribution near the coast.' },
      { term: 'cross-contamination', definition: 'the unwanted transfer of material between samples', example: 'Separate tools reduced the risk of cross-contamination.' },
      { term: 'precision', definition: 'the degree of exactness in a measurement or statement', example: 'Family-level identification limited the precision of the conclusion.' },
    ],
  },
  {
    id: 'physics-of-skateboarding',
    theme: 'Physics',
    title: 'The Physics of Skateboarding',
    dek: 'Forces, momentum and energy explain how riders accelerate, turn, balance and land.',
    minutes: 15,
    passage: `A skateboarder rolling across level ground is demonstrating more than balance. Every change in speed or direction results from forces. To accelerate, the rider pushes backwards on the ground with one foot. The ground pushes the rider forwards with an equal and opposite force. Once both feet return to the board, friction in the wheel bearings, tyre deformation and air resistance gradually reduce speed.

On a ramp, energy changes form. At the top, the rider-board system has gravitational potential energy because of its height. As it descends, much of this becomes kinetic energy, the energy of motion. Climbing the opposite side changes kinetic energy back into potential energy. Some energy is transferred to heat and sound, so without another push the rider will not return to exactly the original height.

Turning depends on forces as well. Leaning causes the skateboard’s trucks to steer and the ground supplies a sideways force that curves the path. A tighter or faster turn requires a larger sideways force. If the available grip is insufficient, the wheels may slide instead of following the intended curve.

During an ollie, the rider rapidly pushes down on the tail, making it strike the ground. The board rotates, and the rider’s front foot guides it upwards while both rider and board are briefly airborne. The rider must coordinate forces and timing; simply jumping without controlling the board will not produce the same motion.

Landing with bent knees increases the time over which the rider’s downward momentum is brought to zero. Spreading that change over more time reduces the average force on the body. Helmets and pads do not cancel the laws of physics, but they can absorb energy and lengthen stopping time during a fall. Skill improves control, while protective equipment reduces the consequences when control is lost.`,
    questions: [
      { prompt: 'What force helps accelerate a skateboarder forwards during a push?', options: ['The ground pushing forwards on the rider', 'Air resistance pulling forwards', 'Gravity acting sideways', 'The bearings removing friction'], answer: 0, explanation: 'The rider pushes backwards, and the ground exerts an equal and opposite forward force.' },
      { prompt: 'Why does a rider not reach the original ramp height without another push?', options: ['All potential energy vanishes at the bottom', 'Some energy transfers to heat and sound', 'Kinetic energy exists only on flat ground', 'Gravity stops acting on the second slope'], answer: 1, explanation: 'Non-useful transfers such as friction and sound leave less mechanical energy for the return climb.' },
      { prompt: 'What may happen if there is not enough grip during a turn?', options: ['The wheels may slide', 'The board gains unlimited energy', 'The rider’s mass becomes zero', 'The ramp supplies no force'], answer: 0, explanation: 'Grip supplies the sideways force, so insufficient grip can cause sliding.' },
      { prompt: 'Why can bending the knees reduce landing force?', options: ['It increases the stopping time for the momentum change', 'It makes gravity disappear', 'It prevents momentum from changing', 'It shortens the landing to no time'], answer: 0, explanation: 'A longer stopping time reduces the average force needed to bring downward momentum to zero.' },
    ],
    writingPrompt: 'Write 140–180 words explaining the physics of a skateboarder moving through a ramp and landing safely. Describe two energy changes, explain the role of force or momentum and recommend one safety measure.',
    writingKeywords: ['force', 'energy', 'momentum', 'friction', 'turn', 'landing'],
    vocabulary: [
      { term: 'accelerate', definition: 'to change velocity by speeding up, slowing down or changing direction', example: 'The rider pushed against the ground to accelerate.' },
      { term: 'kinetic energy', definition: 'energy possessed by an object because it is moving', example: 'The skateboard gained kinetic energy on the descent.' },
      { term: 'momentum', definition: 'a quantity related to an object’s mass and velocity', example: 'Bent knees helped change the rider’s momentum gradually.' },
      { term: 'friction', definition: 'a force that resists movement between surfaces or within mechanisms', example: 'Friction in the bearings slowly reduced the board’s speed.' },
      { term: 'coordinate', definition: 'to organise movements so they work together effectively', example: 'The skater had to coordinate the jump and foot movement.' },
    ],
  },
  {
    id: 'what-ice-cores-remember',
    theme: 'Earth and Climate Science',
    title: 'What Ice Cores Remember',
    dek: 'Layered ice preserves ancient air, particles and chemical clues to past environments.',
    minutes: 18,
    passage: `In parts of Antarctica and Greenland, snow can remain through summer. New snow buries older layers, and pressure gradually turns them into dense ice. Scientists drill long cylinders called ice cores from these frozen sheets. A core is not a written diary, but its layers preserve physical and chemical evidence from the past.

As snow becomes ice, tiny bubbles of air are sealed inside. They contain samples of the ancient atmosphere, allowing researchers to measure gases such as carbon dioxide and methane. The ice itself contains different forms of oxygen and hydrogen. Their relative amounts are influenced by temperature and by the journey water vapour took before falling as snow, so they can help researchers estimate past climate conditions.

Other material arrives with the snow. Volcanic eruptions may leave acidic chemicals or ash, while wind carries dust from distant continents. Sea salts and traces of smoke can also be recorded. A sudden volcanic layer may provide a marker that helps match one core with another, although researchers need independent evidence to identify which eruption produced it.

Reading a core is not always straightforward. Near the surface, seasonal layers may be counted, rather like tree rings. Deeper ice has been compressed and stretched as the ice sheet flows, making layers thinner and harder to separate. The air in a bubble is also younger than the surrounding ice because snow remains porous for years before bubbles finally close. Scientists must account for this age difference.

Ice cores show that atmosphere and climate have changed over hundreds of thousands of years, but each drilling site records its own conditions. Researchers compare cores with ocean sediments, tree rings and modern measurements. Agreement among different records strengthens a conclusion; disagreement can reveal a dating problem or a regional event. What ice “remembers” is evidence that requires calibration, comparison and cautious interpretation.`,
    questions: [
      { prompt: 'What do bubbles in an ice core contain?', options: ['Samples of ancient atmosphere', 'Liquid from the deep ocean', 'Living trees from past forests', 'Only modern drilling gases'], answer: 0, explanation: 'Air becomes sealed as snow turns to ice, preserving gases from the ancient atmosphere.' },
      { prompt: 'How can a volcanic layer help researchers?', options: ['It can act as a marker for matching cores', 'It makes every ice layer thicker', 'It prevents the ice sheet flowing', 'It gives the exact eruption name without other evidence'], answer: 0, explanation: 'Distinct volcanic material can link records, although other evidence is needed to identify its source.' },
      { prompt: 'Why is deep ice harder to date by counting layers?', options: ['It contains no chemical evidence', 'Flow has thinned and distorted the layers', 'Deep snow never experiences pressure', 'Bubbles remain open forever'], answer: 1, explanation: 'Compression and ice-sheet movement make deeper layers thin and difficult to distinguish.' },
      { prompt: 'Why do scientists compare ice cores with other records?', options: ['To test interpretations and identify regional effects', 'To replace all measurements with one core', 'To prove every location has identical weather', 'To avoid calibrating evidence'], answer: 0, explanation: 'Independent records can strengthen conclusions or expose dating problems and local events.' },
    ],
    writingPrompt: 'Write 140–180 words explaining what scientists can learn from an ice core and why interpretation requires care. Discuss two types of evidence, one dating challenge and the value of comparison.',
    writingKeywords: ['ice core', 'atmosphere', 'bubble', 'climate', 'layer', 'evidence'],
    vocabulary: [
      { term: 'core', definition: 'a long cylindrical sample removed for scientific study', example: 'The drill brought an ice core to the surface.' },
      { term: 'porous', definition: 'containing small spaces through which air or liquid can pass', example: 'Young snow remains porous before it becomes solid ice.' },
      { term: 'isotope', definition: 'a form of an element with a particular number of neutrons', example: 'The proportion of an oxygen isotope can provide a climate clue.' },
      { term: 'calibration', definition: 'comparison or adjustment used to make measurements reliable', example: 'Careful calibration improved the gas measurements.' },
      { term: 'interpretation', definition: 'an explanation of what evidence means', example: 'Several records supported the scientist’s interpretation.' },
    ],
  },
];
