export const scienceLessons3 = [
  {
    id: 'pollinators-in-cities',
    theme: 'Urban Ecology',
    title: 'Pollinators in Cities',
    dek: 'City gardens can feed pollinating animals, but useful habitat requires more than colourful flowers.',
    minutes: 15,
    passage: `Cities may seem like unlikely places for pollinators, yet many bees, butterflies, moths, beetles, birds and bats can live among buildings. These animals move pollen between flowers as they search for nectar or pollen to eat. When pollen reaches the correct part of another flower, fertilisation can occur and the plant may produce seeds or fruit.

Urban areas contain a patchwork of possible habitats: gardens, street trees, railway edges, parks and balcony pots. A small patch can provide food or shelter, but its value depends on what is planted and how the space is managed. A garden with one plant species flowering for two weeks creates a brief feast followed by a long shortage. Planting different species that flower across the seasons provides a steadier food supply.

Pollinators need more than flowers. Some native bees nest in bare soil, hollow stems or small holes in timber. Thick mulch spread over every surface can remove nesting opportunities for ground-nesting species. Pesticides may also harm insects that were not the intended target. Even products described as natural should be used carefully because their effects depend on the substance, dose and timing.

Connections between green spaces matter. A bee can cross a road, but wide areas without food or shelter may limit movement, especially for small species. A chain of gardens can act like stepping stones through a suburb. However, simply counting flowers does not prove that a project is successful. Researchers may also record which pollinators visit, how long they stay and whether plants produce seeds.

Supporting city pollinators therefore requires variety, continuity and evidence. Local native plants can be valuable because they may suit local animals and conditions, although well-chosen non-invasive plants can also provide food. The strongest plan combines season-long flowering, nesting places, careful chemical use and monitoring rather than relying on a packet of mixed seeds alone.`,
    questions: [
      { prompt: 'Why should a garden contain plants that flower in different seasons?', options: ['To provide pollinators with food over a longer period', 'To make every pollinator nest in timber', 'To prevent plants from producing seeds', 'To remove the need for habitat connections'], answer: 0, explanation: 'Staggered flowering avoids a short feast followed by a long period with little food.' },
      { prompt: 'How can thick mulch disadvantage some native bees?', options: ['It makes nectar too sweet', 'It may cover the bare soil they need for nesting', 'It causes every flower to close', 'It forces bees to become nocturnal'], answer: 1, explanation: 'The passage states that some ground-nesting bees require access to patches of bare soil.' },
      { prompt: 'What does the stepping-stone comparison explain?', options: ['How pesticides move through soil', 'How linked gardens can help pollinators move through a suburb', 'Why all roads should become gardens', 'Why only large birds can pollinate flowers'], answer: 1, explanation: 'A sequence of suitable patches offers food and shelter between otherwise separated green spaces.' },
      { prompt: 'Which evidence would best show whether a pollinator project is working?', options: ['The price of the seed packet', 'The number of buildings nearby', 'Records of visits and seed production', 'The colour of the garden fence'], answer: 2, explanation: 'Visitor observations and plant reproduction measure ecological use more directly than flower numbers alone.' },
    ],
    writingPrompt: 'Write 140–180 words proposing a pollinator-friendly area at your school. Use evidence from the passage, recommend three design features and explain how students could monitor whether the plan works.',
    writingKeywords: ['pollinator', 'flowering', 'habitat', 'nesting', 'pesticide', 'monitoring'],
    vocabulary: [
      { term: 'pollinator', definition: 'an animal that carries pollen between flowers', example: 'A native bee acted as a pollinator while collecting food.' },
      { term: 'fertilisation', definition: 'the joining of reproductive cells that can begin seed development', example: 'Successful fertilisation allowed the plant to form fruit.' },
      { term: 'patchwork', definition: 'a set of different small areas joined or scattered together', example: 'Parks and gardens formed a patchwork of urban habitat.' },
      { term: 'pesticide', definition: 'a substance used to control organisms considered harmful', example: 'The gardener avoided spraying pesticide near open flowers.' },
      { term: 'continuity', definition: 'the state of continuing without a major gap', example: 'Seasonal planting created continuity in the food supply.' },
    ],
  },
  {
    id: 'physics-of-noise-cancelling-headphones',
    theme: 'Physics',
    title: 'The Physics of Noise-Cancelling Headphones',
    dek: 'Tiny microphones and carefully timed sound waves can reduce unwanted low-frequency noise.',
    minutes: 16,
    passage: `Sound begins when a vibrating source causes pressure changes in the surrounding air. These changes travel as waves. When they reach the ear, they make the eardrum vibrate, and the brain interprets the signal as sound. A wave can be described by properties including frequency, which is linked to pitch, and amplitude, which is linked to the size of the pressure change.

Noise-cancelling headphones use a principle called interference. A microphone detects sound arriving from the environment, and electronic circuits estimate the wave that will reach the listener. The headphones then produce an “anti-noise” wave. Its pressure peaks are timed to meet the original wave’s troughs, and its troughs meet the peaks. When the waves combine, their pressure changes partly cancel through destructive interference.

Perfect cancellation is difficult. The system needs time to measure, calculate and respond, while sound can change from one moment to the next. Steady, low-frequency noises, such as an aircraft engine’s hum, are comparatively predictable and have longer wavelengths. Sudden voices, clattering dishes and other rapidly changing sounds are harder to match. The shape of the headphones and the seal around the ear also affect the result.

Headphones therefore combine active and passive methods. Active cancellation uses microphones, processors and speakers. Passive isolation uses physical materials to block or absorb sound, especially higher-frequency noise. Neither method creates complete silence, and performance varies with fit, design and surroundings.

The waves do not disappear before reaching the headphones; instead, their combined pressure variation near the ear becomes smaller. This distinction matters because noise cancellation is not a force field around the listener. It is a fast, local response based on wave addition. Understanding that limitation also supports safe use: reducing background noise may make music clearer, but listeners should still protect their hearing by keeping volume at a sensible level.`,
    questions: [
      { prompt: 'What is frequency most closely linked to in a sound?', options: ['Pitch', 'Battery life', 'Headphone mass', 'Ear temperature'], answer: 0, explanation: 'The opening paragraph links wave frequency with the pitch that a listener perceives.' },
      { prompt: 'How does an anti-noise wave reduce an unwanted sound?', options: ['Its peaks align with the original peaks', 'It stops the source from vibrating', 'Its peaks align with the original troughs', 'It turns sound waves into light'], answer: 2, explanation: 'Opposite pressure changes combine through destructive interference and reduce the resulting variation.' },
      { prompt: 'Why is a steady engine hum easier to cancel than clattering dishes?', options: ['It is more predictable and changes less rapidly', 'It travels without wavelengths', 'It can only move through metal', 'It has no frequency or amplitude'], answer: 0, explanation: 'A steady low-frequency wave gives the electronics a more predictable signal to estimate and match.' },
      { prompt: 'What is the main difference between active cancellation and passive isolation?', options: ['Only passive isolation covers the ear', 'Active systems create a matching wave, while passive materials block or absorb sound', 'Passive isolation requires a microphone', 'Active cancellation guarantees complete silence'], answer: 1, explanation: 'The passage distinguishes electronic anti-noise from the physical blocking and absorption of sound.' },
    ],
    writingPrompt: 'Write 140–180 words explaining to a younger student how noise-cancelling headphones work. Use the ideas of waves and interference, compare active and passive methods, and identify one limitation.',
    writingKeywords: ['sound', 'wave', 'frequency', 'interference', 'active', 'passive'],
    vocabulary: [
      { term: 'amplitude', definition: 'the maximum size of a wave disturbance from its resting level', example: 'A larger amplitude usually produced a louder sound.' },
      { term: 'frequency', definition: 'the number of wave cycles passing a point each second', example: 'The high note had a greater frequency than the low hum.' },
      { term: 'interference', definition: 'the effect produced when two or more waves combine', example: 'Destructive interference reduced the pressure variation near the ear.' },
      { term: 'predictable', definition: 'able to be expected or estimated in advance', example: 'The steady motor created a predictable sound pattern.' },
      { term: 'isolation', definition: 'separation from surrounding sound by a physical barrier', example: 'Thick ear cushions improved passive noise isolation.' },
    ],
  },
  {
    id: 'how-vaccines-train-the-immune-system',
    theme: 'Health Science',
    title: 'How Vaccines Train the Immune System',
    dek: 'Vaccines present safe biological clues so the immune system can prepare for a future infection.',
    minutes: 17,
    passage: `The immune system protects the body from pathogens such as disease-causing viruses and bacteria. It does not rely on a single defence. Skin and mucus can block entry, while specialised cells recognise, surround or destroy unfamiliar material. Another part of the response can learn to recognise particular molecular features, called antigens.

A vaccine exposes the immune system to an antigen, or to instructions that allow the body to make a harmless example of one. The vaccine does not need to cause the disease in order to teach recognition. Immune cells respond, and some develop into memory cells. If the matching pathogen appears later, these cells can help produce a faster and stronger response than the body could mount during a first encounter.

Different vaccine designs deliver the lesson in different ways. Some contain an inactivated pathogen, part of a pathogen or a harmless carrier. Others provide genetic instructions that cells use briefly to make an antigen. The instructions do not give the cell a permanent new job; they are broken down after use. Each approach is tested for quality, safety and its ability to produce a useful immune response.

Vaccination can cause temporary effects such as a sore arm, tiredness or a mild fever. These effects often reflect immune activity, although having no noticeable reaction does not mean the vaccine failed. Serious adverse events are uncommon and are monitored. Health decisions compare these risks with the risks of the disease itself, which may include severe illness or long-term complications.

Protection is not always absolute or lifelong. Pathogens can change, immunity can decrease, and some people have weaker responses. Booster doses may refresh immune memory. When many people are protected, a pathogen has fewer opportunities to spread, which can also help people who cannot receive certain vaccines. Vaccines therefore train individual immune systems while contributing to a wider public-health defence.`,
    questions: [
      { prompt: 'What role do antigens play in vaccination?', options: ['They provide features the immune system can learn to recognise', 'They permanently replace every immune cell', 'They prevent skin from acting as a barrier', 'They guarantee that pathogens never change'], answer: 0, explanation: 'Vaccines present an antigen or its instructions so immune cells can learn a specific target.' },
      { prompt: 'Why are memory cells useful during a later infection?', options: ['They make the pathogen harmless before it enters the body', 'They support a faster and stronger immune response', 'They stop all temporary vaccine effects', 'They remove the need for other immune defences'], answer: 1, explanation: 'Memory cells preserve recognition and help the body respond more effectively on another encounter.' },
      { prompt: 'What happens to genetic instructions delivered by some vaccines?', options: ['They remain active permanently', 'They turn into disease-causing bacteria', 'They are used briefly and then broken down', 'They replace the genetic material in every cell'], answer: 2, explanation: 'The passage states that cells use the instructions temporarily before the material is broken down.' },
      { prompt: 'How can high vaccination levels help a community?', options: ['They give pathogens more chances to spread', 'They reduce transmission opportunities and help protect vulnerable people', 'They make booster doses impossible', 'They ensure every person has identical immunity'], answer: 1, explanation: 'Widespread protection can interrupt spread and indirectly assist people who cannot receive some vaccines.' },
    ],
    writingPrompt: 'Write 140–180 words explaining how vaccination prepares both an individual and a community for infectious disease. Use evidence from the passage, describe immune memory and address one limitation.',
    writingKeywords: ['vaccine', 'antigen', 'immune', 'memory', 'pathogen', 'protection'],
    vocabulary: [
      { term: 'pathogen', definition: 'an organism or biological agent that can cause disease', example: 'The immune system detected the invading pathogen.' },
      { term: 'antigen', definition: 'a molecular feature that can trigger a specific immune response', example: 'The vaccine presented an antigen from the virus.' },
      { term: 'inactivated', definition: 'treated so that it can no longer reproduce or cause infection', example: 'The dose contained an inactivated form of the pathogen.' },
      { term: 'adverse', definition: 'harmful or unfavourable in its effect', example: 'Researchers monitored reports of any adverse event.' },
      { term: 'booster', definition: 'an additional vaccine dose given to strengthen renewed protection', example: 'A booster refreshed the immune response after several years.' },
    ],
  },
  {
    id: 'reading-tree-rings',
    theme: 'Earth Science',
    title: 'Reading Tree Rings',
    dek: 'Annual growth layers can preserve evidence about a tree’s age, environment and past disturbances.',
    minutes: 15,
    passage: `In many temperate regions, a tree adds a new layer of wood around its trunk each growing season. Growth is often rapid in spring, producing larger, lighter-coloured cells, and slower later in the season, producing denser, darker cells. Together, these bands can form one annual ring. Counting rings may estimate age, but scientists can learn much more by examining their pattern.

A wide ring often indicates favourable growth conditions, while a narrow ring can show that growth was limited. Rainfall and temperature may be involved, but the explanation is not automatic. Shade from neighbouring trees, insect attack, fire damage, soil conditions or the age of the tree can also affect ring width. Researchers compare many trees rather than treating one trunk as a complete weather record.

The process of matching patterns from different samples is called cross-dating. A distinctive sequence of wide and narrow rings can appear in living trees, old timber and fallen logs from the same region. By lining up overlapping sequences, scientists can assign calendar years to rings and extend a record further into the past. Cross-dating can also reveal a missing ring from a year when a tree barely grew.

Scientists usually collect a narrow core with a hollow tool rather than cutting down a living tree. They prepare the sample, view it under magnification and measure each ring. Records from weather stations can then be compared with recent growth. If a consistent relationship exists, older rings may provide evidence about conditions before instruments were available.

Tree rings are evidence, not diaries. They record how a particular tree responded to several interacting influences. Strong studies use multiple samples, identify the species and site, and test possible explanations against other evidence such as historical records, sediments or ice cores. Careful interpretation turns bands of wood into a dated environmental archive without pretending that every narrow ring has one simple cause.`,
    questions: [
      { prompt: 'What usually forms one annual ring in a temperate tree?', options: ['Only the bark produced in winter', 'Bands of faster and slower seasonal growth', 'A layer made entirely by insects', 'Two years of identical rainfall'], answer: 1, explanation: 'Lighter spring growth and denser later growth commonly combine to mark one year.' },
      { prompt: 'Why can a narrow ring not automatically be blamed on low rainfall?', options: ['Ring width can be influenced by several environmental and biological factors', 'Trees never respond to rainfall', 'Narrow rings occur only in young trees', 'Scientists cannot measure wood'], answer: 0, explanation: 'Shade, insects, fire, soil and age may affect growth as well as temperature and rainfall.' },
      { prompt: 'What is the purpose of cross-dating?', options: ['To colour each ring differently', 'To match overlapping patterns and assign calendar years', 'To make every sample the same width', 'To predict the exact height of a tree'], answer: 1, explanation: 'Shared sequences allow samples to be aligned and can reveal years with missing growth rings.' },
      { prompt: 'Which method would produce the strongest interpretation?', options: ['Using one unexplained ring from one tree', 'Assuming every wide ring means the same thing', 'Comparing multiple trees with weather and other records', 'Cutting down every tree at the site'], answer: 2, explanation: 'Multiple samples and independent evidence help researchers test competing explanations for growth patterns.' },
    ],
    writingPrompt: 'Write 140–180 words explaining how scientists can use tree rings to investigate a past drought. Describe cross-dating, identify other influences on growth and recommend evidence needed for a reliable conclusion.',
    writingKeywords: ['ring', 'growth', 'cross-dating', 'climate', 'evidence', 'sample'],
    vocabulary: [
      { term: 'temperate', definition: 'relating to a region with moderate seasonal conditions', example: 'The temperate forest had distinct spring and winter periods.' },
      { term: 'dense', definition: 'containing material packed closely together', example: 'The late-season wood was darker and more dense.' },
      { term: 'cross-dating', definition: 'matching growth-ring patterns among samples to identify exact years', example: 'Cross-dating linked the old beam to a known sequence.' },
      { term: 'core', definition: 'a narrow cylindrical sample removed for scientific study', example: 'The researcher extracted a small core from the trunk.' },
      { term: 'archive', definition: 'a stored record that preserves information from the past', example: 'The rings formed an archive of changing growth conditions.' },
    ],
  },
  {
    id: 'hidden-world-of-fungi',
    theme: 'Biology',
    title: 'The Hidden World of Fungi',
    dek: 'Fungal networks recycle materials, form partnerships and influence ecosystems far beyond visible mushrooms.',
    minutes: 16,
    passage: `A mushroom is only the most visible part of many fungi. Beneath soil or inside wood, a fungus often grows as a network of tiny threads called hyphae. Together, the threads form a mycelium. This hidden body releases enzymes into its surroundings, breaking large materials into smaller substances that the fungus can absorb.

This external digestion makes fungi important decomposers. They help break down dead leaves, fallen branches and animal remains, returning nutrients to ecosystems. Without decomposers, organic material would accumulate and many nutrients would remain locked away. Fungi are not alone in this work; bacteria and small animals also contribute, and decomposition rates change with moisture, temperature and the material involved.

Many fungi form close relationships with living organisms. Mycorrhizal fungi connect with plant roots. Their fine threads can explore a larger volume of soil than roots alone, helping plants obtain water and minerals such as phosphorus. In return, plants provide fungi with sugars made during photosynthesis. The partnership can be beneficial, but it is not a magical system in which every plant freely shares resources with every other plant. Exchanges depend on species, conditions and the structure of the network.

Other fungi act as parasites and obtain resources from living hosts, sometimes causing disease. Fungi can infect crops, wildlife and humans, although only a small fraction of species are harmful to people. Still others are useful in food production, medicines and biotechnology. Yeasts make bread rise, and particular moulds have supplied compounds used in antibiotics.

Scientists estimate that many fungal species have not yet been described. Studying them is challenging because a mycelium may be hidden, microscopic or difficult to grow in a laboratory. DNA methods can detect fungal traces in soil, but finding a sequence does not always reveal what the organism is doing. Combining field observations, experiments and genetic evidence gives a fuller view of this diverse kingdom.`,
    questions: [
      { prompt: 'How does a fungus commonly obtain nutrients from its surroundings?', options: ['By swallowing whole leaves', 'By releasing enzymes and absorbing smaller substances', 'By producing all nutrients from sunlight', 'By turning hyphae into roots'], answer: 1, explanation: 'Fungi digest material externally with enzymes before absorbing the resulting smaller substances.' },
      { prompt: 'Why are decomposing fungi important to ecosystems?', options: ['They lock every nutrient inside dead wood', 'They prevent bacteria from existing', 'They return nutrients from dead material to circulation', 'They stop all organic material accumulating immediately'], answer: 2, explanation: 'Decomposition releases nutrients that would otherwise remain stored in dead organic matter.' },
      { prompt: 'What is exchanged in a mycorrhizal partnership?', options: ['Plants provide sugars while fungi can supply water and minerals', 'Fungi provide sunlight while plants supply soil', 'Plants provide antibiotics while fungi supply flowers', 'Fungi provide roots while plants supply hyphae'], answer: 0, explanation: 'The partners exchange plant-made sugars for access to resources gathered by fungal threads.' },
      { prompt: 'Why should DNA evidence be combined with other research methods?', options: ['DNA cannot occur in soil', 'A detected sequence may not show the fungus’s ecological activity', 'Field observations always identify every species', 'Laboratory experiments remove all uncertainty'], answer: 1, explanation: 'Genetic traces can reveal presence, but observations and experiments help explain biological function.' },
    ],
    writingPrompt: 'Write 140–180 words challenging the idea that fungi are merely mushrooms or disease-causing organisms. Explain decomposition and one partnership, then describe why fungal research can be difficult.',
    writingKeywords: ['fungi', 'hyphae', 'mycelium', 'decomposer', 'nutrient', 'partnership'],
    vocabulary: [
      { term: 'hypha', definition: 'one of the fine branching threads that makes up a fungus', example: 'A fungal hypha grew between particles of soil.' },
      { term: 'mycelium', definition: 'the network of hyphae forming the main body of a fungus', example: 'The hidden mycelium spread through the fallen log.' },
      { term: 'enzyme', definition: 'a substance that speeds up a chemical reaction in living systems', example: 'The fungus released an enzyme that helped break down wood.' },
      { term: 'decomposer', definition: 'an organism that breaks down dead material and wastes', example: 'A decomposer returns nutrients to an ecosystem.' },
      { term: 'parasite', definition: 'an organism that obtains resources from a host and may harm it', example: 'The parasitic fungus damaged leaves on the crop.' },
    ],
  },
  {
    id: 'why-rivers-change-course',
    theme: 'Earth Science',
    title: 'Why Rivers Change Course',
    dek: 'Flowing water erodes, transports and deposits sediment, gradually reshaping river channels and floodplains.',
    minutes: 17,
    passage: `A river channel can look permanent on a map, but flowing water continually reshapes it. The effect is especially clear in a meandering river, where the channel curves across a broad floodplain. Water does not travel at the same speed everywhere in a bend. Faster flow near the outside bank can remove soil and rock, while slower flow near the inside bank allows sediment to settle.

This combination of erosion and deposition gradually shifts a bend sideways. As neighbouring bends grow, the narrow strip of land between them may shrink. During a flood, water can cut across this narrow neck and take the shorter route. Sediment may then seal the ends of the abandoned loop, creating an oxbow lake. Over time, the lake can fill with mud and vegetation.

Floods speed up many channel changes because deep, fast water can carry larger particles and spread across the floodplain. However, a floodplain is not simply wasted land waiting to be built on. Floodwater can deposit nutrient-rich sediment, refill wetlands and reduce energy by spreading out. Buildings and roads placed there remain exposed when the river occupies space it has used before.

People also alter river courses. Dams change the timing of flows and trap sediment. Straightening a channel may move water quickly through one location but increase erosion or flood risk downstream. Levees can protect selected areas while preventing water from reaching other parts of the floodplain. These interventions can be useful, yet their effects extend beyond the construction site.

River managers therefore study old maps, aerial images, sediment and flow records before making decisions. They may stabilise a bank near essential infrastructure while allowing movement elsewhere. There is rarely a choice between a perfectly fixed river and complete neglect. A river is a dynamic system, and safer planning works with its likely movement rather than assuming that yesterday’s channel will remain in place forever.`,
    questions: [
      { prompt: 'What commonly happens on the outside of a river bend?', options: ['Slower water deposits all its sediment', 'Faster water erodes the bank', 'The river immediately forms a dam', 'Vegetation turns into rock'], answer: 1, explanation: 'The outside of a bend often has faster flow, which can remove bank material.' },
      { prompt: 'How can an oxbow lake form?', options: ['A river cuts across a bend neck and abandons the old loop', 'A dam releases every trapped particle', 'A floodplain rises above every flood', 'A straight channel begins to meander underground'], answer: 0, explanation: 'A shortcut across a narrow neck can isolate the former bend as a curved lake.' },
      { prompt: 'What is one ecological role of a floodplain?', options: ['It prevents all sediment movement', 'It spreads floodwater and can refill wetlands', 'It guarantees safe building sites', 'It keeps the river channel fixed'], answer: 1, explanation: 'Floodplains can receive water and sediment, support wetlands and reduce concentrated flow energy.' },
      { prompt: 'Why must managers consider areas downstream of a river project?', options: ['River interventions can change flow, sediment and risk beyond the site', 'Water never crosses project boundaries', 'Downstream channels contain no sediment', 'Old maps predict every future event exactly'], answer: 0, explanation: 'Structures that alter water or sediment in one place may transfer erosion or flooding elsewhere.' },
    ],
    writingPrompt: 'Write 140–180 words advising a town planning development near a meandering river. Explain how the channel changes, identify a floodplain benefit and assess one possible engineering response.',
    writingKeywords: ['river', 'erosion', 'deposition', 'meander', 'floodplain', 'sediment'],
    vocabulary: [
      { term: 'meander', definition: 'a winding bend or curve in a river channel', example: 'The river formed a wide meander across the plain.' },
      { term: 'erosion', definition: 'the removal and transport of soil or rock by natural forces', example: 'Fast water caused erosion along the outer bank.' },
      { term: 'deposition', definition: 'the settling of material that was being transported', example: 'Deposition built a sandy bank inside the bend.' },
      { term: 'floodplain', definition: 'flat land beside a river that is periodically covered by floodwater', example: 'The wetland occupied part of the natural floodplain.' },
      { term: 'levee', definition: 'a raised bank built or formed beside a river to contain water', example: 'The levee reduced flooding in one section of town.' },
    ],
  },
  {
    id: 'search-for-dark-matter',
    theme: 'Astronomy',
    title: 'The Search for Dark Matter',
    dek: 'Invisible matter may explain cosmic motions, but scientists are still testing what it could be.',
    minutes: 18,
    passage: `When astronomers measure how stars move around a galaxy, they find a puzzle. Far from the bright centre, stars often orbit faster than expected from the gravity of visible stars, gas and dust alone. Galaxies in clusters also move as though more mass is present than telescopes can see. Scientists use the name dark matter for this unseen source of additional gravity.

Dark matter is not called dark merely because it is hidden behind something. It appears not to emit, absorb or reflect enough electromagnetic radiation to be detected directly with ordinary telescopes. Its effects are inferred from gravity. One important clue comes from gravitational lensing: mass bends the path of light from more distant objects. By measuring the distortion, researchers can map mass even where little glowing material is visible.

The idea also helps models explain how small differences in the early universe grew into the large network of galaxies observed today. Yet describing what dark matter does is not the same as knowing what it is. It could consist of an undiscovered kind of particle, but several candidates remain hypothetical.

Experiments search in different ways. Detectors deep underground are shielded from much of the radiation at Earth’s surface and look for rare interactions between possible dark matter particles and ordinary atoms. Particle accelerators search for signs of invisible products in high-energy collisions. Astronomers also look for radiation that might be produced if dark matter particles interact with one another.

So far, no experiment has provided a widely accepted direct detection. A non-detection is still useful when it rules out some proposed properties and guides the next test. Researchers also examine whether modified theories of gravity could explain particular observations, although any alternative must account for many kinds of evidence. The search shows science working with an incomplete explanation: observations identify a gap, hypotheses make predictions, and increasingly sensitive tests narrow the possibilities.`,
    questions: [
      { prompt: 'What observation supports the idea of dark matter in galaxies?', options: ['Outer stars often orbit faster than visible mass predicts', 'Every galaxy contains the same number of stars', 'Telescopes detect dark matter glowing blue', 'Gas never moves under gravity'], answer: 0, explanation: 'Unexpected orbital speeds suggest that galaxies contain more gravitational mass than can be seen.' },
      { prompt: 'How does gravitational lensing help researchers?', options: ['It creates new matter inside telescopes', 'It maps mass through the way gravity bends distant light', 'It prevents galaxies from moving', 'It measures only the colour of nearby stars'], answer: 1, explanation: 'The distortion of background light provides evidence about the amount and location of mass.' },
      { prompt: 'Why are some dark matter detectors placed underground?', options: ['To increase interference from surface radiation', 'To shield them from background signals that could hide rare interactions', 'To make gravity stop acting on atoms', 'To observe sunlight more clearly'], answer: 1, explanation: 'Rock helps screen common radiation, making an extremely rare signal easier to distinguish.' },
      { prompt: 'How can a non-detection contribute to science?', options: ['It proves that no unseen mass exists', 'It confirms every proposed particle', 'It can rule out properties and refine future searches', 'It makes other observations irrelevant'], answer: 2, explanation: 'Null results constrain hypotheses and help researchers decide which possibilities remain testable.' },
    ],
    writingPrompt: 'Write 140–180 words explaining why scientists investigate dark matter even though it has not been directly detected. Use two observations, describe one search method and explain the value of non-detections.',
    writingKeywords: ['dark matter', 'gravity', 'galaxy', 'lensing', 'particle', 'evidence'],
    vocabulary: [
      { term: 'infer', definition: 'to reach a conclusion from evidence rather than direct observation', example: 'Astronomers infer extra mass from the motion of stars.' },
      { term: 'electromagnetic', definition: 'relating to energy carried by electric and magnetic waves, including light', example: 'The telescope detects electromagnetic radiation from distant galaxies.' },
      { term: 'lensing', definition: 'the bending and distortion of light by gravity', example: 'Gravitational lensing revealed mass in the galaxy cluster.' },
      { term: 'hypothetical', definition: 'proposed as a possibility but not yet confirmed', example: 'The detector searched for a hypothetical particle.' },
      { term: 'non-detection', definition: 'a result in which a searched-for signal is not found', example: 'The non-detection excluded part of the predicted range.' },
    ],
  },
  {
    id: 'designing-wildlife-corridors',
    theme: 'Conservation Science',
    title: 'Designing Wildlife Corridors',
    dek: 'Connected habitats can help animals move, but effective corridors must match species and landscape.',
    minutes: 16,
    passage: `Roads, farms and suburbs can divide one large habitat into smaller patches. This fragmentation may leave animals with too little food, prevent them from reaching breeding partners or block movement during fire and drought. A wildlife corridor is an area managed to connect separated habitats so organisms can move between them.

A corridor is not simply a green stripe on a map. Its design must suit the target species. A small woodland bird may need dense shrubs for shelter, while a gliding possum requires tall trees close enough to cross between canopies. Frogs may need moist ground and clean water. Width, vegetation, noise, lighting and the distance between safe resting places can all affect whether animals use the route.

Crossings are especially important where a corridor meets a road. Vegetated bridges can carry animals above traffic, and tunnels can guide others underneath. Fences may direct wildlife towards these structures, but a poorly placed fence could trap animals or create a new barrier. Cameras, tracks and genetic samples help researchers test whether animals enter, cross and breed beyond the crossing.

Connections can bring risks as well as benefits. Weeds, predators, disease and fire may also move through a linked landscape. A narrow corridor with strong edge effects can expose animals to heat, wind, pets or invasive species. Designers may reduce these problems by restoring wider sections, protecting several routes and managing surrounding land rather than relying on one thin strip.

Success should be measured over time. A bridge used by one animal once is encouraging but does not prove that a population is secure. Researchers compare movement and survival before and after construction, and they may use similar sites without corridors for comparison. Effective corridor planning combines ecological evidence, landholder cooperation and long-term maintenance. The aim is not connection at any cost, but safe, functional movement that improves a species’ chances of persisting in a changing landscape.`,
    questions: [
      { prompt: 'What problem is a wildlife corridor intended to reduce?', options: ['The separation of habitat patches', 'Seasonal changes in daylight', 'The formation of tree rings', 'The production of plant pollen'], answer: 0, explanation: 'Corridors are designed to reconnect habitat divided by roads, farms or urban development.' },
      { prompt: 'Why must corridor design consider a target species?', options: ['Every species uses exactly the same shelter', 'Different animals require different structures and conditions', 'Only birds can move between habitats', 'Species needs disappear near roads'], answer: 1, explanation: 'The examples show that shrubs, connected canopies and moist ground suit different animals.' },
      { prompt: 'What is a possible disadvantage of habitat connection?', options: ['Animals can never reach breeding partners', 'Predators, weeds or disease may also spread', 'All edge effects immediately disappear', 'Monitoring becomes scientifically impossible'], answer: 1, explanation: 'The passage explains that harmful organisms and disturbances can travel through linked areas.' },
      { prompt: 'Which evidence would best demonstrate long-term corridor success?', options: ['One photograph of one crossing', 'The amount of green ink on a map', 'Improved movement and survival compared over time', 'The height of the nearest road sign'], answer: 2, explanation: 'Repeated before-and-after measures of movement and survival test whether populations benefit.' },
    ],
    writingPrompt: 'Write 140–180 words proposing a wildlife corridor across a fragmented local landscape. Identify a target species, explain three design choices, address one risk and describe how success should be measured.',
    writingKeywords: ['corridor', 'fragmentation', 'habitat', 'crossing', 'species', 'monitoring'],
    vocabulary: [
      { term: 'fragmentation', definition: 'the division of continuous habitat into smaller separated patches', example: 'Road construction increased habitat fragmentation.' },
      { term: 'canopy', definition: 'the upper layer formed by the branches and leaves of trees', example: 'The possum moved through gaps in the forest canopy.' },
      { term: 'vegetated', definition: 'covered or planted with living vegetation', example: 'A vegetated bridge provided shelter above the road.' },
      { term: 'edge effect', definition: 'an environmental change that occurs at a habitat boundary', example: 'The narrow reserve experienced a strong edge effect from heat and wind.' },
      { term: 'persist', definition: 'to continue to exist despite difficulty or change', example: 'Connected habitat may help the population persist after drought.' },
    ],
  },
];
