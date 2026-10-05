export const scienceLessons5 = [
  {
    id: 'problem-of-antibiotic-resistance',
    theme: 'Health Science',
    title: 'The Problem of Antibiotic Resistance',
    dek: 'Antibiotics save lives, but their effectiveness depends on how people use them and how bacteria evolve.',
    minutes: 17,
    passage: `Antibiotics are medicines used to treat infections caused by bacteria. They do not cure illnesses caused by viruses, such as colds or influenza. Since the first antibiotics became widely available, they have made surgery, cancer treatment and the care of serious wounds much safer. However, their success has created a difficult problem: some bacteria are becoming resistant to the medicines designed to kill them.

Resistance develops through evolution. Within a large bacterial population, a few cells may already carry a genetic change that helps them survive a particular antibiotic. When the medicine kills susceptible bacteria, resistant ones have less competition. They reproduce and pass resistance genes to later generations. Bacteria can also exchange some genes with one another, even across different species.

Human behaviour can increase this selection pressure. Antibiotics are sometimes taken for viral infections, used when they are not necessary, or given too routinely to animals. Poor infection control then allows resistant bacteria to spread between patients, farms, communities and countries. A person does not become resistant; the bacteria do. Even someone who has rarely taken antibiotics can acquire a resistant infection.

Solving the problem requires several approaches. Doctors can use tests and clinical evidence to choose whether an antibiotic is needed and which one is most suitable. Patients should follow professional instructions rather than sharing leftover tablets or saving them for another illness. Hospitals can improve hygiene and surveillance, while vaccination and clean water prevent infections that might otherwise require treatment.

Researchers are developing new antibiotics and alternative therapies, but discovery is slow and resistance can eventually emerge again. Existing medicines must therefore be treated as a shared resource. Careful use cannot stop bacterial evolution, yet it can slow the spread of resistance and preserve effective treatments for longer.`,
    questions: [
      { prompt: 'How does antibiotic use favour resistant bacteria?', options: ['It gives every bacterium the same new gene', 'It removes susceptible competitors while resistant bacteria survive', 'It changes a viral infection into a bacterial one', 'It prevents bacteria from reproducing'], answer: 1, explanation: 'The antibiotic kills susceptible cells, leaving resistant bacteria with less competition and more opportunity to reproduce.' },
      { prompt: 'Which statement correctly describes antibiotic resistance?', options: ['The patient’s body becomes resistant to all medicines', 'Viruses learn to produce antibiotics', 'Bacteria survive medicines that once killed them', 'Every bacterium becomes harmless'], answer: 2, explanation: 'Resistance is a property of bacteria, not of the patient, and it allows those bacteria to survive a particular antibiotic.' },
      { prompt: 'Why can a person who rarely uses antibiotics still face a resistant infection?', options: ['Resistant bacteria can spread between people and places', 'Antibiotics remain permanently in drinking water', 'Only rare medicines cause infections', 'Resistance occurs only inside hospitals'], answer: 0, explanation: 'The passage explains that resistant bacteria can move through hospitals, farms, communities and countries.' },
      { prompt: 'What is the passage’s main argument?', options: ['New medicines will permanently end resistance', 'Antibiotics should be used for every fever', 'Resistance is unavoidable, so behaviour does not matter', 'Coordinated prevention and careful use can protect antibiotic effectiveness'], answer: 3, explanation: 'The author presents responsible prescribing, patient behaviour, hygiene, surveillance and prevention as ways to slow resistance and preserve treatments.' },
    ],
    writingPrompt: 'Write 140–180 words explaining how a community can help slow antibiotic resistance. Use evidence from the passage, correct one common misunderstanding and recommend two practical actions.',
    writingKeywords: ['antibiotic', 'bacteria', 'resistance', 'infection', 'evolution', 'prevention'],
    vocabulary: [
      { term: 'antibiotic', definition: 'a medicine that kills bacteria or stops them growing', example: 'The doctor prescribed an antibiotic for the bacterial infection.' },
      { term: 'resistant', definition: 'able to survive an action or treatment that would normally cause harm', example: 'The resistant bacteria continued to grow after treatment.' },
      { term: 'susceptible', definition: 'likely to be affected or harmed by something', example: 'Susceptible bacteria were killed by the medicine.' },
      { term: 'surveillance', definition: 'the careful and continuing collection of information about a problem', example: 'Hospital surveillance detected an increase in resistant infections.' },
      { term: 'preserve', definition: 'to protect something so that it remains useful or available', example: 'Careful prescribing can preserve effective antibiotics.' },
    ],
  },
  {
    id: 'how-seeds-survive',
    theme: 'Plant Biology',
    title: 'How Seeds Survive',
    dek: 'A seed can wait through difficult conditions, then respond when the chances of growth improve.',
    minutes: 15,
    passage: `A seed may appear inactive, but it contains a living plant embryo, a food supply and a protective coat. This compact structure allows many plants to survive periods when an exposed seedling would die. Seeds can endure cold winters, dry seasons or long journeys before beginning to grow. They are not indestructible, however, and different species have very different limits.

Many seeds enter dormancy, a state in which germination is delayed even if the seed is alive. Dormancy prevents a brief shower or warm day from triggering growth at the wrong time. A hard seed coat may block water, while chemical signals inside another seed may keep its embryo inactive. Some Australian plants produce seeds that respond to heat or chemicals in smoke, linking germination to conditions after a bushfire.

To germinate, most seeds require water, oxygen and a suitable temperature. Water activates enzymes that release energy from stored food. Oxygen supports cellular respiration, and temperature affects the speed of chemical reactions. Light matters for some species but not for all. Once the first root emerges, it anchors the young plant and begins absorbing water. A shoot then grows towards conditions where its leaves can receive light.

Seeds also need to reach useful places. Wings, hooks, fleshy fruit and floating husks are adaptations for dispersal by wind, animals or water. Dispersal can reduce competition with the parent plant, but travelling far does not guarantee landing in suitable soil. Most seeds produced by a plant never become mature plants.

Seed banks use cool, dry conditions to slow ageing and preserve genetic diversity. Scientists periodically test stored samples because a seed that looks complete may no longer be viable. Survival therefore depends on a sequence of features: protection, delayed germination, effective dispersal and a correct response to environmental signals.`,
    questions: [
      { prompt: 'What is the main advantage of seed dormancy?', options: ['It makes every seed germinate immediately', 'It delays growth until conditions may be more suitable', 'It removes the need for oxygen', 'It guarantees that the seed avoids animals'], answer: 1, explanation: 'Dormancy prevents short periods of rain or warmth from starting growth when later conditions may kill the seedling.' },
      { prompt: 'What role does water play during germination?', options: ['It activates enzymes that release stored energy', 'It permanently hardens the seed coat', 'It replaces the embryo', 'It stops all chemical reactions'], answer: 0, explanation: 'The passage states that water activates enzymes, allowing the seed to use energy in its stored food.' },
      { prompt: 'Why can dispersal improve a seed’s chances?', options: ['It ensures every seed finds perfect soil', 'It allows seeds to live without stored food', 'It can reduce competition with the parent plant', 'It makes all seeds respond to smoke'], answer: 2, explanation: 'Moving away may reduce competition for light, water and nutrients, although dispersal does not guarantee survival.' },
      { prompt: 'Why do scientists test seeds stored in seed banks?', options: ['Appearance alone cannot show whether a seed remains viable', 'Testing makes every seed genetically identical', 'Stored seeds always germinate too quickly', 'Cool conditions destroy all embryos'], answer: 0, explanation: 'A stored seed may look intact but have lost its ability to germinate, so periodic viability testing is necessary.' },
    ],
    writingPrompt: 'Write 140–180 words explaining how a seed survives before becoming a seedling. Describe dormancy and germination, include one dispersal adaptation and explain why survival is not guaranteed.',
    writingKeywords: ['seed', 'dormancy', 'germination', 'embryo', 'dispersal', 'viable'],
    vocabulary: [
      { term: 'embryo', definition: 'a young developing organism at an early stage', example: 'The plant embryo remained protected inside the seed.' },
      { term: 'dormancy', definition: 'a temporary state of greatly reduced growth and activity', example: 'Dormancy kept the seed from growing during a brief summer shower.' },
      { term: 'germination', definition: 'the process in which a seed begins to grow into a plant', example: 'Warm, moist soil triggered germination.' },
      { term: 'dispersal', definition: 'the movement of seeds or organisms away from their source', example: 'The fruit helped seed dispersal by birds.' },
      { term: 'viable', definition: 'capable of remaining alive and developing successfully', example: 'Only viable seeds produced roots during the test.' },
    ],
  },
  {
    id: 'earthquake-early-warnings',
    theme: 'Earth Science',
    title: 'Earthquake Early Warnings',
    dek: 'Sensors cannot predict an earthquake, but they can send a warning before the strongest shaking arrives.',
    minutes: 16,
    passage: `Earthquake early-warning systems are sometimes confused with earthquake prediction. Prediction would mean knowing in advance when and where an earthquake will begin. Early warning starts only after a fault has ruptured. Its purpose is to detect the first signals quickly and alert places that have not yet received the most damaging shaking.

An earthquake releases several kinds of seismic wave. Fast primary waves, or P-waves, usually cause weaker motion and arrive before slower secondary waves, or S-waves. A network of ground sensors can detect P-waves and estimate the earthquake’s location and size. Computers then calculate which areas may experience strong shaking and send an alert through phones, sirens or automated systems.

The warning may last tens of seconds for a city some distance from the rupture, but a place close to the epicentre may receive only a few seconds or no useful warning. Information also takes time to move through sensors, computers and communication networks. A system must balance speed with accuracy: waiting for more data can improve an estimate, yet it also reduces the time available to act. Occasionally, an alert may overestimate or underestimate the shaking.

Even a short warning can be useful. Trains can slow, factory machinery can stop, surgeons can pause delicate procedures and people can take protective action. A clear instruction such as “Drop, Cover and Hold On” is more practical than asking people to decide whether to leave a building. Evacuating during shaking can expose people to falling glass or masonry.

Early warning works best alongside stronger buildings, emergency planning and public education. It cannot prevent a fault from moving or repair unsafe structures. Its value lies in turning the small difference in wave speed into time for specific actions. The technology does not remove earthquake risk; it helps people and systems respond before the strongest waves arrive.`,
    questions: [
      { prompt: 'How does earthquake early warning differ from prediction?', options: ['It detects an earthquake after rupture begins', 'It names the exact date years in advance', 'It prevents a fault from moving', 'It measures only past earthquakes'], answer: 0, explanation: 'Early warning responds to signals from an earthquake already under way, whereas prediction would identify it before rupture.' },
      { prompt: 'Why can sensors provide warning before strong shaking?', options: ['Alerts travel more slowly than all seismic waves', 'P-waves arrive before the more damaging S-waves', 'S-waves never reach cities', 'Sensors stop waves at the epicentre'], answer: 1, explanation: 'The system detects faster, usually weaker P-waves and sends information ahead of slower S-waves.' },
      { prompt: 'Why might locations near the epicentre receive little warning?', options: ['They have stronger phone batteries', 'The waves require years to reach them', 'Strong shaking arrives before the system can complete its alert', 'P-waves occur only far from faults'], answer: 2, explanation: 'Close to the rupture, there may be too little time for detection, calculation and communication before strong waves arrive.' },
      { prompt: 'What is the author’s view of early-warning systems?', options: ['They make safe construction unnecessary', 'They are useful when combined with broader preparation', 'They can predict every earthquake accurately', 'They should always tell people to run outside'], answer: 1, explanation: 'The final paragraph describes early warning as one layer of safety alongside resilient buildings, planning and education.' },
    ],
    writingPrompt: 'Write 140–180 words explaining earthquake early warning to a school community. Clarify what it can and cannot do, describe how it works and recommend two actions for an alert.',
    writingKeywords: ['earthquake', 'warning', 'P-wave', 'S-wave', 'sensor', 'prepare'],
    vocabulary: [
      { term: 'rupture', definition: 'a break or sudden movement along a fault', example: 'The rupture began several kilometres below the ground.' },
      { term: 'seismic', definition: 'relating to earthquakes or vibrations within Earth', example: 'The station recorded the first seismic waves.' },
      { term: 'epicentre', definition: 'the point on Earth’s surface directly above where an earthquake begins', example: 'The town was located close to the epicentre.' },
      { term: 'estimate', definition: 'a calculation or judgement made from available information', example: 'The computer produced an early estimate of the earthquake’s size.' },
      { term: 'masonry', definition: 'stone, brick or concrete used in building', example: 'Unsecured masonry can fall during strong shaking.' },
    ],
  },
  {
    id: 'chemistry-of-cooking',
    theme: 'Chemistry',
    title: 'The Chemistry of Cooking',
    dek: 'Heat, water and acidity transform ingredients through reactions that cooks can observe and control.',
    minutes: 16,
    passage: `Cooking changes food through chemistry as well as through heating. Ingredients contain proteins, carbohydrates, fats, water and many smaller compounds. When temperature, acidity or moisture changes, these substances can rearrange, break apart or join together. Understanding the reactions helps explain why a cake rises, an egg firms and bread develops a brown crust.

Proteins are long chains folded into particular shapes. Heat, acid or vigorous mixing can unfold them, a process called denaturation. The unfolded chains may then link into a new network. This is why clear egg white becomes opaque and firm in a frying pan. Too much heat can tighten the network further and squeeze out water, producing a rubbery texture.

Starch behaves differently. When starch granules are heated with water, they absorb moisture, swell and release molecules that thicken the surrounding liquid. This process, called gelatinisation, helps turn a thin sauce into a thicker one. If there is too little water or the mixture is not stirred, some granules may form lumps rather than spreading evenly.

Browning can involve the Maillard reaction, which occurs when amino acids and certain sugars react at sufficiently high temperatures. It creates many flavour and aroma compounds on roasted vegetables, toast and seared meat. A wet surface stays near water’s boiling point while moisture evaporates, so drying the surface can encourage browning. Caramelisation also causes browning, but it mainly involves sugars breaking down and forming new compounds.

Recipes are therefore sets of controlled conditions, not just lists of ingredients. Time, temperature, pH and proportion influence which changes occur. Substituting an ingredient may alter more than flavour: it can change water content, acidity or structure. Cooks do not need a laboratory to use chemistry, but careful observation allows them to connect visible results with the reactions happening in the pan.`,
    questions: [
      { prompt: 'Why does egg white become firm when heated?', options: ['Its proteins unfold and link into a network', 'Its starch granules dissolve completely', 'Its water changes into protein', 'Its sugars stop all reactions'], answer: 0, explanation: 'Heat denatures egg-white proteins, and the unfolded chains link together to form a firmer structure.' },
      { prompt: 'What happens during starch gelatinisation?', options: ['Proteins create amino acids', 'Starch granules absorb water and thicken a liquid', 'All moisture instantly evaporates', 'Sugars react only with oxygen'], answer: 1, explanation: 'Heated starch granules take in water, swell and release molecules that increase the liquid’s thickness.' },
      { prompt: 'Why can drying a food’s surface encourage Maillard browning?', options: ['A wet surface stays cooler while water evaporates', 'Drying removes all amino acids', 'Water always burns before food', 'A dry surface cannot transfer heat'], answer: 0, explanation: 'Evaporation holds a wet surface near water’s boiling point, while a drier surface can reach temperatures more favourable to browning.' },
      { prompt: 'What broader point does the author make about substitutions?', options: ['They affect flavour but never structure', 'Any ingredient can replace any other', 'They may change the chemical conditions of a recipe', 'They make time and temperature irrelevant'], answer: 2, explanation: 'A substitute can alter moisture, pH or structure, so its effects extend beyond a different taste.' },
    ],
    writingPrompt: 'Write 140–180 words explaining how chemistry can help a cook improve one dish. Discuss two reactions from the passage, connect conditions to results and suggest one controlled change.',
    writingKeywords: ['protein', 'starch', 'heat', 'moisture', 'browning', 'reaction'],
    vocabulary: [
      { term: 'denaturation', definition: 'a change in the folded shape of a protein caused by heat, acid or other forces', example: 'Heating the egg caused protein denaturation.' },
      { term: 'opaque', definition: 'not allowing light to pass through clearly', example: 'The egg white changed from transparent to opaque.' },
      { term: 'gelatinisation', definition: 'the swelling of starch in hot water so that a mixture thickens', example: 'Starch gelatinisation gave the sauce a smooth texture.' },
      { term: 'acidity', definition: 'the degree to which a substance contains or acts like an acid', example: 'Lemon juice increased the acidity of the mixture.' },
      { term: 'proportion', definition: 'the amount of one ingredient compared with another', example: 'The correct proportion of flour to water produced a firm dough.' },
    ],
  },
  {
    id: 'restoring-oyster-reefs',
    theme: 'Marine Ecology',
    title: 'Restoring Oyster Reefs',
    dek: 'Rebuilding shellfish habitat can improve coastal ecosystems, but recovery requires more than adding oysters.',
    minutes: 17,
    passage: `An oyster reef is built from generations of oysters growing on the shells of earlier animals. The rough, layered structure provides hiding places for fish, crabs and other organisms. Oysters are filter feeders: they pump water across their gills and remove microscopic food particles. Once common along parts of Australia’s coast, many reefs declined because of overharvesting, disease, pollution and changes to the seabed.

Restoration often begins by creating a stable surface. Young oysters, called spat, prefer to attach to hard material, especially oyster shell. Where old reefs have been removed, loose mud or sand may offer few suitable places. Projects may place cleaned shell, rock or purpose-built structures on carefully selected sites, then add hatchery-reared oysters or wait for wild larvae to settle.

Site choice matters. Oysters need suitable salinity, oxygen, water flow and food. Sediment can bury them, while poor water quality or disease can prevent survival. Restorers also consider waves, boat traffic and whether harvesting will be excluded. A structure full of dead shells is not a functioning reef, so teams monitor living oyster density, growth, reproduction and the return of other species.

Healthy reefs may benefit nearby ecosystems. Their three-dimensional surfaces create habitat and can reduce small waves, which may help protect some shorelines. Filtering can make water clearer under certain conditions, but oysters do not remove every pollutant and cannot repair an entire estuary alone. Polluted oysters may also be unsafe to eat, even when the reef itself provides habitat.

Successful restoration therefore combines construction with long-term management. Water quality, fishing rules and future climate conditions all affect the outcome. Rebuilding a reef can restart ecological processes that were lost, but results take time and vary between places. The goal is not simply to count how many oysters were released; it is to establish a self-sustaining community that continues building habitat.`,
    questions: [
      { prompt: 'Why do restoration projects often add shell or rock first?', options: ['Young oysters need a stable hard surface for attachment', 'Shell prevents all disease', 'Rock makes seawater fresh', 'Oysters can grow only above the water'], answer: 0, explanation: 'Spat attach to firm material, and former reef sites may otherwise contain unsuitable loose mud or sand.' },
      { prompt: 'Which result best indicates a functioning restored reef?', options: ['A large pile of empty shells', 'A site visited by one boat', 'Living oysters reproduce and other species return', 'Water becomes free of every pollutant'], answer: 2, explanation: 'A functioning reef contains a persistent oyster population and supports ecological processes and habitat for other organisms.' },
      { prompt: 'What limitation of oyster filtration does the passage identify?', options: ['Oysters cannot move water over their gills', 'Oysters remove every form of pollution', 'Filtration works only in fresh water', 'Oysters cannot repair a whole estuary by themselves'], answer: 3, explanation: 'Filtering may improve clarity in some conditions, but it does not remove all pollutants or replace wider estuary management.' },
      { prompt: 'What is the ultimate goal of oyster-reef restoration?', options: ['Releasing the greatest number of hatchery oysters', 'Creating a self-sustaining habitat-building community', 'Making every restored oyster safe to eat', 'Replacing all coastal management with reefs'], answer: 1, explanation: 'The conclusion shifts the measure of success from the number released to a reproducing community that keeps building habitat.' },
    ],
    writingPrompt: 'Write 140–180 words recommending how an oyster-reef project should measure success. Use evidence from the passage, identify two ecological indicators and explain one limitation of restoration.',
    writingKeywords: ['oyster', 'reef', 'habitat', 'spat', 'water quality', 'monitoring'],
    vocabulary: [
      { term: 'filter feeder', definition: 'an animal that obtains food by straining particles from water', example: 'An oyster is a filter feeder that pumps water across its gills.' },
      { term: 'spat', definition: 'a young oyster after it attaches to a surface', example: 'The spat settled on cleaned oyster shell.' },
      { term: 'salinity', definition: 'the amount of dissolved salt in water', example: 'Heavy rain temporarily lowered the estuary’s salinity.' },
      { term: 'sediment', definition: 'small particles that settle on the bottom of water', example: 'Fine sediment covered some newly placed shells.' },
      { term: 'self-sustaining', definition: 'able to continue without repeated outside support', example: 'Reproduction helped the reef become self-sustaining.' },
    ],
  },
  {
    id: 'why-light-pollution-changes-ecosystems',
    theme: 'Ecology',
    title: 'Why Light Pollution Changes Ecosystems',
    dek: 'Artificial light at night reshapes darkness, changing how organisms feed, move and reproduce.',
    minutes: 16,
    passage: `For most of Earth’s history, nights were lit mainly by the Moon, stars and occasional fire. Electric lighting has transformed human life, but it has also changed a basic environmental condition: darkness. Light pollution includes bright glare, light entering places where it is not needed and the skyglow that forms when outdoor light scatters in the atmosphere.

Organisms use natural cycles of light and dark as information. These cycles help control circadian rhythms, the roughly daily patterns that influence sleep, activity and hormone release. Artificial light at night can shift these rhythms. Nocturnal animals may delay feeding or avoid an illuminated area, while daytime species may remain active for longer and use extra energy.

Light also changes interactions between species. Many insects are attracted to lamps, where they may circle until exhausted or become easy prey. If insects are drawn away from vegetation, plants may receive fewer visits from night-time pollinators. Predators can gain an advantage in lit areas, but species that depend on darkness may lose safe routes between habitats. On beaches, newly hatched sea turtles can become disoriented by lights and crawl away from the ocean’s brighter natural horizon.

The effects depend on brightness, colour, direction and timing. Shorter-wavelength blue-rich light often has strong biological effects, although responses vary among species. Turning every outdoor light off would be impractical and could create safety concerns. Better design aims to provide the right amount of light where and when people need it.

Shielded fittings can direct light downwards, timers and sensors can reduce unnecessary hours, and warmer-coloured lamps can sometimes lessen ecological disruption. Measuring success requires more than lower electricity use; communities should also monitor insects, wildlife movement and dark habitats. Protecting night-time ecosystems means treating darkness as a resource rather than as an empty space waiting to be illuminated.`,
    questions: [
      { prompt: 'How can artificial light affect circadian rhythms?', options: ['It can shift daily patterns of activity and hormone release', 'It makes all nocturnal animals sleep permanently', 'It removes the natural cycle of seasons', 'It affects plants but no animals'], answer: 0, explanation: 'Natural light-dark cycles regulate daily biological patterns, and artificial light can alter their timing.' },
      { prompt: 'How might lamps indirectly affect plant reproduction?', options: ['They can draw night-time insect pollinators away from plants', 'They cause all plants to stop making flowers', 'They increase every insect population', 'They prevent predators from seeing prey'], answer: 0, explanation: 'Insects attracted to lamps may spend less time visiting flowers, reducing some night-time pollination.' },
      { prompt: 'Why does the author not recommend turning off every outdoor light?', options: ['Light has no ecological effect', 'Blue-rich lamps are always harmless', 'People also need lighting for practical and safety reasons', 'Shielded fittings increase skyglow'], answer: 2, explanation: 'The passage recognises human safety and practical needs, then argues for targeted rather than unnecessary lighting.' },
      { prompt: 'Which plan best follows the passage’s recommendations?', options: ['Use brighter unshielded lights all night', 'Direct warm light where needed and limit its operating time', 'Measure success only through electricity bills', 'Illuminate dark habitat corridors'], answer: 1, explanation: 'Shielding, warmer colours and timers reduce spill, biologically disruptive wavelengths and unnecessary exposure.' },
    ],
    writingPrompt: 'Write 140–180 words proposing a light-pollution plan for a school or neighbourhood. Explain two ecological effects, recommend two design changes and address one safety concern.',
    writingKeywords: ['light pollution', 'darkness', 'circadian', 'insects', 'shielding', 'ecosystem'],
    vocabulary: [
      { term: 'skyglow', definition: 'a brightening of the night sky caused by scattered artificial light', example: 'Skyglow hid many stars above the town.' },
      { term: 'circadian', definition: 'relating to biological patterns that repeat about every 24 hours', example: 'Artificial light disturbed the bird’s circadian rhythm.' },
      { term: 'nocturnal', definition: 'active mainly during the night', example: 'The nocturnal mammal avoided the brightly lit path.' },
      { term: 'disoriented', definition: 'confused about direction or position', example: 'The hatchlings became disoriented by lights behind the beach.' },
      { term: 'shielded', definition: 'covered or designed so that light is blocked from unwanted directions', example: 'A shielded lamp directed light towards the footpath.' },
    ],
  },
  {
    id: 'science-of-sports-recovery',
    theme: 'Sports Science',
    title: 'The Science of Sports Recovery',
    dek: 'Recovery is an active biological process shaped by training load, sleep, nutrition and time.',
    minutes: 16,
    passage: `Training challenges the body. A hard running session can reduce stored carbohydrate, disturb fluid balance and create microscopic damage in muscle tissue. These changes are not automatically harmful; with enough recovery, the body repairs tissue and adapts so that it can better handle a similar challenge. Problems arise when repeated training stress exceeds the body’s ability to recover.

Sleep is one of the most important recovery tools. During sleep, processes linked to tissue repair, immune function, memory and hormone regulation continue. Athletes learning a skill also need the brain to consolidate movement patterns. One unusually short night may not ruin performance, but a repeated sleep deficit can slow reaction time, affect mood and make training feel harder.

Food and fluid support recovery rather than replacing it. Carbohydrate helps restore glycogen, a stored fuel used by muscles, while dietary protein supplies amino acids for rebuilding tissue. The useful amounts depend on the athlete, exercise and total diet. Sweat losses also vary, so drinking exactly the same volume after every session is not always appropriate. More is not always better: excessive water intake can dangerously dilute sodium in the blood.

Popular techniques such as ice baths, massage and compression garments may change soreness or comfort for some athletes. Evidence and effects differ by activity and timing. Reducing soreness does not necessarily mean that muscle repair is complete, and regularly suppressing every training response may not support long-term adaptation. A technique should be judged against a clear purpose, not its popularity online.

Recovery plans therefore need to match the training load and the individual. Rest days, easier sessions and gradual increases in workload can reduce injury risk. Persistent pain, unusual fatigue or falling performance may require advice from a qualified health professional. The central principle is simple: improvement occurs through a cycle of challenge and recovery, not through challenge alone.`,
    questions: [
      { prompt: 'Why can training stress lead to improvement?', options: ['Recovery allows the body to repair and adapt', 'Microscopic damage always remains permanent', 'Exercise removes the need for sleep', 'Every hard session immediately increases performance'], answer: 0, explanation: 'When recovery is sufficient, repair and adaptation can make the body better able to handle a similar future load.' },
      { prompt: 'What can a repeated sleep deficit affect?', options: ['Only the colour of sports equipment', 'Reaction time, mood and perceived effort', 'The chemical identity of water', 'Whether muscles use any energy'], answer: 1, explanation: 'The passage links ongoing inadequate sleep with slower reactions, mood changes and training feeling more difficult.' },
      { prompt: 'Why is drinking as much water as possible unsafe?', options: ['Water always prevents glycogen storage', 'Excessive water can dilute blood sodium', 'Sweat contains no water', 'Fluid is unnecessary after exercise'], answer: 1, explanation: 'The passage warns that very high water intake can dangerously lower the concentration of sodium in the blood.' },
      { prompt: 'How should athletes evaluate a recovery technique?', options: ['By how popular it is online', 'By whether it eliminates every training response', 'By whether it serves a clear purpose for that athlete', 'By assuming less soreness proves full repair'], answer: 2, explanation: 'The author argues that techniques should match a defined need, because comfort, repair and long-term adaptation are not identical.' },
    ],
    writingPrompt: 'Write 140–180 words designing a recovery plan after a demanding school sports session. Explain the roles of sleep and nutrition, include one caution and justify one optional technique.',
    writingKeywords: ['recovery', 'training', 'sleep', 'glycogen', 'protein', 'adaptation'],
    vocabulary: [
      { term: 'adapt', definition: 'to change in a way that improves the response to particular conditions', example: 'With recovery, muscles adapt to a gradual training load.' },
      { term: 'consolidate', definition: 'to strengthen and store information or a learned skill', example: 'Sleep can help the brain consolidate a new movement pattern.' },
      { term: 'glycogen', definition: 'a stored form of carbohydrate used as an energy source', example: 'The athlete ate after training to restore muscle glycogen.' },
      { term: 'amino acid', definition: 'a small molecule used by the body to build proteins', example: 'Dietary protein supplied each amino acid needed for repair.' },
      { term: 'suppress', definition: 'to reduce or prevent a process or response', example: 'The treatment may suppress some signs of inflammation.' },
    ],
  },
  {
    id: 'measuring-air-quality',
    theme: 'Environmental Science',
    title: 'Measuring Air Quality',
    dek: 'Air-quality measurements turn invisible mixtures into evidence, but the numbers require careful interpretation.',
    minutes: 18,
    passage: `Air can look clear while containing gases and particles that affect health. Air-quality monitoring measures pollutants such as ozone, nitrogen dioxide and particulate matter. Particulate matter is grouped by size: PM2.5 refers to particles with diameters of 2.5 micrometres or less. These fine particles can travel deep into the lungs, and some may enter the bloodstream.

Regulatory monitoring stations use carefully maintained instruments to produce accurate, comparable measurements. One device may draw air through a filter and measure the collected particle mass, while another estimates particles continuously by detecting how they scatter light. Gas analysers use different chemical or optical methods. Instruments are calibrated against known standards so that a change in the reading is more likely to reflect the air, not a drifting sensor.

Location affects what a monitor records. A station beside a busy road may detect traffic pollution that a suburban background station does not. Height, nearby buildings and wind direction also matter. A single monitor cannot describe every street, so networks combine several sites with weather data, satellite observations and computer models.

Small low-cost sensors allow schools and households to investigate local patterns. They can reveal changes during smoke events or busy traffic periods, but their readings may be influenced by humidity, temperature and differences between sensor units. Comparing a sensor with a trusted reference station and recording its location improves interpretation. One unusual spike should be checked before a strong conclusion is made.

Air-quality indexes translate measurements into categories and health advice. However, an index may combine pollutants using rules that differ between regions, so its number is not the pollutant concentration itself. Good decisions require the time period, pollutant, unit and monitoring location. Measurement makes an invisible hazard easier to understand, but responsible interpretation depends on knowing how, where and why the data were collected.`,
    questions: [
      { prompt: 'Why is PM2.5 a health concern?', options: ['It is too large to enter the nose', 'Fine particles can travel deep into the lungs', 'It measures only harmless water drops', 'It is visible in all clean air'], answer: 1, explanation: 'PM2.5 particles are small enough to reach deep parts of the lungs, and some may pass into the bloodstream.' },
      { prompt: 'What is the purpose of calibrating an air-quality instrument?', options: ['To move the station closer to traffic', 'To compare it with a known standard and limit measurement drift', 'To make every location have identical air', 'To remove weather from the atmosphere'], answer: 1, explanation: 'Calibration checks the instrument against a known reference so that its measurements remain reliable over time.' },
      { prompt: 'Why can two monitoring stations report different values at the same time?', options: ['Pollution is distributed identically everywhere', 'Only satellites can measure gases', 'Local sources, buildings and wind affect each location', 'All sensor differences are mistakes'], answer: 2, explanation: 'A monitor samples its surroundings, so traffic, site height, built structures and wind can create real spatial differences.' },
      { prompt: 'What should a student do before interpreting a low-cost sensor spike?', options: ['Assume it proves a permanent health emergency', 'Delete all other readings', 'Check conditions and compare it with other evidence', 'Convert it directly into any region’s index'], answer: 2, explanation: 'The passage advises checking unusual results, noting local conditions and comparing the sensor with a trusted reference.' },
    ],
    writingPrompt: 'Write 140–180 words planning a school investigation of local air quality. Identify what to measure, explain where to place sensors and describe two steps that would improve reliable interpretation.',
    writingKeywords: ['air quality', 'PM2.5', 'monitor', 'sensor', 'calibration', 'evidence'],
    vocabulary: [
      { term: 'particulate matter', definition: 'a mixture of tiny solid particles and liquid droplets suspended in air', example: 'Bushfire smoke raised the level of particulate matter.' },
      { term: 'micrometre', definition: 'a unit of length equal to one millionth of a metre', example: 'The particle measured less than one micrometre across.' },
      { term: 'calibrate', definition: 'to check or adjust an instrument using a known standard', example: 'Technicians calibrate the analyser to maintain accurate readings.' },
      { term: 'humidity', definition: 'the amount of water vapour present in the air', example: 'High humidity affected the small sensor’s response.' },
      { term: 'concentration', definition: 'the amount of a substance within a particular volume', example: 'The station reported the particle concentration in the air.' },
    ],
  },
];
