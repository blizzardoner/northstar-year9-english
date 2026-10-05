export const australiaLessons4 = [
  {
    id: 'coorong-under-pressure',
    theme: 'Australia',
    title: 'The Coorong Under Pressure',
    dek: 'A long coastal lagoon shows how water decisions connect ecology, culture and communities across a whole river system.',
    minutes: 18,
    passage: `The Coorong is a chain of lagoons near the mouth of the River Murray in South Australia. It forms part of a wetland recognised internationally for its importance to waterbirds. Fresh water arriving through the Lower Lakes and barrages mixes with seawater entering through the Murray Mouth. The result is not one uniform environment: salinity naturally varies between the northern and southern lagoons and across seasons.

This balance has been altered by human decisions. Water extraction across the Murray-Darling Basin can reduce the amount reaching the river's end. Drainage schemes in South Australia's south-east also redirected water that once flowed towards the southern Coorong. During dry periods, evaporation removes water but leaves salt behind. If too little fresh water arrives, parts of the lagoon can become hypersaline, meaning saltier than the sea. Such conditions reduce the plants and small animals available to fish and birds.

The Coorong is within Ngarrindjeri Yarluwar-Ruwe, or Sea Country. Ngarrindjeri people describe the health of lands, waters, living things and people as connected. Their knowledge and authority are therefore essential to decisions about flows, research and restoration. Consultation after a plan is written is not the same as sharing power from the beginning.

Managers use several tools. Environmental water can be released through the barrages to support habitat, fish movement and the export of salt. Dredging can help keep the Murray Mouth open when sand builds up, but it cannot replace adequate river flow. Projects have also restored some south-east water towards the South Lagoon. Monitoring salinity, plants, fish and birds helps test whether these actions are working.

No single intervention can repair every pressure. A healthy future requires Basin-wide water management, local restoration and Ngarrindjeri leadership. It also requires patience: an ecological response may take years and vary with rainfall. The Coorong demonstrates that the condition of a wetland at a river's end records choices made far upstream.`,
    questions: [
      { prompt: 'Why can parts of the Coorong become hypersaline?', options: ['Evaporation removes salt but leaves water behind', 'Low freshwater inflow and evaporation concentrate salt', 'The barrages produce salt during winter', 'Waterbirds carry salt into the lagoons'], answer: 1, explanation: 'The passage explains that reduced freshwater inflow, combined with evaporation that leaves salt behind, can make lagoon water saltier than the sea.' },
      { prompt: 'Why is Ngarrindjeri leadership important to restoration?', options: ['Ngarrindjeri people own every farm in the Basin', 'Only cultural sites are affected by water', 'The Coorong is Ngarrindjeri Sea Country, where health and responsibility are connected', 'Scientific monitoring cannot occur on Country'], answer: 2, explanation: 'The third paragraph identifies the Coorong as Ngarrindjeri Yarluwar-Ruwe and says their knowledge and authority must shape decisions from the beginning.' },
      { prompt: 'What limitation of dredging does the passage identify?', options: ['It cannot replace enough river flow', 'It always closes the Murray Mouth', 'It prevents fish from moving', 'It redirects south-east rainfall'], answer: 0, explanation: 'Dredging may keep the mouth open when sand accumulates, but the passage states that it is not a substitute for adequate flows.' },
      { prompt: 'What is the passage mainly arguing?', options: ['One engineering project can restore the entire wetland', 'Only decisions made beside the Coorong matter', 'The lagoons should have identical salinity everywhere', 'Recovery needs connected water management, restoration and Ngarrindjeri leadership'], answer: 3, explanation: 'The conclusion combines Basin-wide management, local action, monitoring and Ngarrindjeri authority rather than presenting a single solution.' },
    ],
    writingPrompt: 'Write 140–180 words explaining which actions should be prioritised to improve the Coorong. Use evidence from the passage and explain why one action alone would be insufficient.',
    writingKeywords: ['Coorong', 'salinity', 'flow', 'restoration', 'Ngarrindjeri', 'monitoring'],
    vocabulary: [
      { term: 'lagoon', definition: 'a shallow body of water separated partly from a larger body of water', example: 'The southern lagoon becomes saltier when freshwater inflow is low.' },
      { term: 'salinity', definition: 'the amount of dissolved salt in water or soil', example: 'Scientists measured salinity at several sites each month.' },
      { term: 'hypersaline', definition: 'containing a higher concentration of salt than seawater', example: 'Few species can tolerate a hypersaline wetland.' },
      { term: 'intervention', definition: 'an action taken to change or improve a situation', example: 'The water release was one intervention in a larger recovery plan.' },
      { term: 'ecological', definition: 'relating to the connections between living things and their environment', example: 'Bird counts can reveal an ecological response to changing flows.' },
    ],
  },
  {
    id: 'sydneys-green-bans',
    theme: 'Australia',
    title: "Sydney's Green Bans",
    dek: 'In 1970s Sydney, residents and building workers joined forces to influence what kind of city would be built.',
    minutes: 17,
    passage: `During Sydney's building boom of the 1960s and 1970s, developers proposed new offices, roads and apartments across the city. Planning and heritage protections were weaker than they are today. Some projects threatened bushland, older buildings, public spaces and homes occupied by working-class communities. Residents could petition governments, but approval often left them with little direct power to stop demolition.

A different form of action emerged through the New South Wales Builders Labourers' Federation. Its members performed demanding work needed on major construction sites. When they refused to work on a particular development, work could not easily continue. These actions became known as green bans because they defended environmental or social values rather than the wages and conditions usually associated with an industrial ban.

The first famous case involved Kelly's Bush on Wallumedegal Country at Hunters Hill. A group of local women, the Battlers for Kelly's Bush, opposed plans for housing on remnant harbour-side bushland. After other approaches failed, they sought union help. The union required evidence of broad local support, and a public meeting attended by hundreds backed a ban in 1971. Builders labourers then refused to work on the project. Kelly's Bush was eventually protected as public open space.

Further bans supported campaigns in places including The Rocks, Woolloomooloo and Centennial Park. Their aims varied: preserving heritage, resisting the removal of lower-income residents, or protecting parkland. The bans were controversial. Critics argued that an unelected union was blocking lawful development and jobs. Supporters replied that workers should not be forced to build projects that harmed communities and that official planning did not give residents a fair voice.

The green bans did not preserve every contested place, and the movement's power weakened after conflict within the union. However, it changed public debate about who shapes a city. Its history shows that urban heritage is not protected only by architects or laws. Alliances between residents and workers can make development a public question about purpose, memory and fairness.`,
    questions: [
      { prompt: 'What gave builders labourers unusual influence over development?', options: ['They approved every planning application', 'Construction depended on the work they could refuse to perform', 'They owned all threatened land', 'They wrote heritage laws for Parliament'], answer: 1, explanation: 'The passage explains that major projects relied on their labour, so refusing to work could halt or delay construction.' },
      { prompt: 'What condition did the union set before banning work at Kelly’s Bush?', options: ['The developer had to abandon all Sydney projects', 'The site had to contain an office tower', 'Local people had to demonstrate broad support', 'Residents had to join the union'], answer: 2, explanation: 'A well-attended public meeting was used to demonstrate that the proposed ban had substantial community backing.' },
      { prompt: 'Why were the green bans controversial?', options: ['They raised questions about union power, jobs and lawful development', 'They applied only to unsafe machinery', 'They were organised entirely by developers', 'They prevented residents from speaking'], answer: 0, explanation: 'Critics challenged the power of an unelected union to block projects, while supporters defended worker and community participation.' },
      { prompt: 'Which statement best expresses the passage’s conclusion?', options: ['Cities should never change', 'Only governments can protect heritage', 'Every union campaign succeeds', 'Residents and workers can influence the values that guide development'], answer: 3, explanation: 'The conclusion treats city-making as a public question and highlights the influence of alliances between communities and workers.' },
    ],
    writingPrompt: 'Write 140–180 words evaluating whether the green bans were a fair way to influence Sydney’s development. Use evidence from the passage and address one criticism.',
    writingKeywords: ['green ban', 'union', 'residents', 'development', 'heritage', 'fairness'],
    vocabulary: [
      { term: 'petition', definition: 'to make a formal request to an authority, often with public support', example: 'Residents petitioned the council to protect the park.' },
      { term: 'industrial', definition: 'relating to work, workers or the production of goods and buildings', example: 'The refusal to work was a form of industrial action.' },
      { term: 'remnant', definition: 'a small surviving part of something that was once larger', example: 'Kelly’s Bush was a remnant of harbour-side vegetation.' },
      { term: 'contested', definition: 'argued over by people with opposing views', example: 'The future of the contested site drew public attention.' },
      { term: 'alliance', definition: 'a partnership formed to pursue a shared purpose', example: 'An alliance between residents and workers strengthened the campaign.' },
    ],
  },
  {
    id: 'royal-flying-doctor-service',
    theme: 'Australia',
    title: 'The Royal Flying Doctor Service',
    dek: 'Aircraft, communication and local knowledge help connect remote communities with essential health care.',
    minutes: 17,
    passage: `Distance shapes access to health care in rural and remote Australia. A person may live hundreds of kilometres from a major hospital, and roads can be slow, flooded or unsealed. The Royal Flying Doctor Service, or RFDS, was developed to make distance less dangerous by connecting aviation, medicine and communication. It does not remove remoteness, but it can bring skilled care closer and move seriously ill patients quickly.

The service began in 1928 as the Australian Inland Mission Aerial Medical Service at Cloncurry, Queensland. Reverend John Flynn had argued for a medical “mantle of safety” across inland Australia. Aircraft made rapid travel possible, but communication was equally important. Alfred Traeger's pedal-powered radio system enabled isolated people to contact medical staff without a mains electricity supply. Radio advice, medical chests and aircraft could then operate as parts of one system.

Modern RFDS work includes emergency retrievals and transfers between hospitals, but the aircraft are not simply airborne ambulances. Teams may include pilots, flight nurses, doctors and other specialists, with equipment selected for care in a confined cabin. Weather, fuel, landing conditions and patient needs all affect a mission. Local clinic staff, ambulance crews, police, station workers or community members may prepare a landing area and provide information before an aircraft arrives.

The service also supports regular primary health care. Depending on the region, visiting teams may provide general practice, dental care, mental health support or health education. Telehealth can connect patients and local clinicians with distant specialists. These services matter because preventing and treating illness early is better than waiting for an emergency flight.

The RFDS is often represented through dramatic rescue stories, yet its success depends on less visible cooperation. It works alongside state and territory health systems, Aboriginal Community Controlled Health Services and local professionals. Remote communities are not passive recipients: their knowledge of place, culture and practical conditions improves care. The continuing challenge is to provide reliable services without assuming that an occasional aircraft visit can replace strong, community-led health care on the ground.`,
    questions: [
      { prompt: 'Why was radio important to the early flying medical service?', options: ['It allowed isolated people to request advice and assistance', 'It made aircraft unnecessary', 'It supplied every homestead with mains power', 'It replaced all medical training'], answer: 0, explanation: 'The pedal-powered radio connected remote people with medical staff and allowed advice, medical chests and flights to operate together.' },
      { prompt: 'What makes an RFDS mission more complex than simply flying a patient?', options: ['Aircraft cabins have unlimited space', 'Only the pilot makes decisions', 'Weather, landing conditions, equipment and patient needs must be coordinated', 'Every remote landing area is identical'], answer: 2, explanation: 'The third paragraph lists operational and clinical factors and describes cooperation with people on the ground.' },
      { prompt: 'Why does the RFDS provide primary health services?', options: ['To ensure every illness requires a flight', 'To treat problems earlier and improve continuing access to care', 'To close local clinics', 'To avoid working with other health services'], answer: 1, explanation: 'Regular clinics and telehealth can prevent or treat illness before it becomes an aeromedical emergency.' },
      { prompt: 'What warning appears in the conclusion?', options: ['Remote knowledge has no role in medical care', 'Emergency stories should never be told', 'Aircraft should be used only in cities', 'Fly-in visits cannot substitute for strong local, community-led services'], answer: 3, explanation: 'The final sentence cautions against treating occasional aircraft visits as a replacement for reliable care based in communities.' },
    ],
    writingPrompt: 'Write 140–180 words explaining why the Royal Flying Doctor Service depends on more than aircraft. Use evidence about communication, teamwork and community-led care.',
    writingKeywords: ['RFDS', 'remote', 'aircraft', 'communication', 'health care', 'community'],
    vocabulary: [
      { term: 'retrieval', definition: 'the act of reaching and transporting a patient for medical care', example: 'The emergency retrieval required careful planning before take-off.' },
      { term: 'confined', definition: 'limited in space or movement', example: 'The clinical team worked in the confined aircraft cabin.' },
      { term: 'telehealth', definition: 'health care delivered or supported through telephone or digital communication', example: 'Telehealth connected the remote nurse with a specialist.' },
      { term: 'primary health care', definition: 'first-contact and continuing care that supports everyday health needs', example: 'A visiting dental clinic is one form of primary health care.' },
      { term: 'coordinate', definition: 'to organise different people or activities so they work together', example: 'Staff coordinate the flight, ambulance and hospital transfer.' },
    ],
  },
  {
    id: 'cyclone-building-design',
    theme: 'Australia',
    title: 'How Cyclone Buildings Are Designed',
    dek: 'Cyclone-resistant construction relies on a continuous chain of strong connections, not one indestructible material.',
    minutes: 18,
    passage: `A tropical cyclone can expose a building to intense wind, rapidly changing pressure, wind-driven rain and flying debris. Designers cannot make an ordinary home immune to every possible event. Instead, they calculate likely forces for the location and design the structure so those forces have a continuous path into the ground. In Australia's cyclonic regions, building requirements use wind classifications and standards suited to higher risk.

The roof receives particular attention because wind flowing over it can create uplift. Roof sheets or tiles must connect securely to battens; battens connect to rafters or trusses; the roof structure connects to walls; and walls connect to the floor and footings. This sequence is called a load path. One weak or corroded connection can break the chain, even when the other parts are strong. Screws, straps, rods and reinforcing steel may all contribute to tie-down.

Openings create other risks. If a door, window or garage door fails, air pressure inside the building can rise and add to forces on the roof and walls. Windborne objects can also break glass. Engineers therefore specify suitable doors, frames, fixings and, where required, debris protection. Roof shape and the size of overhangs influence pressure, while seals, flashings and drainage details help limit wind-driven rain.

Design is only one stage. Work must be constructed according to the drawings, and materials need maintenance. Rusted fasteners, termite-damaged timber or an altered roof can reduce the strength originally intended. After a severe cyclone, damage hidden inside a roof space may need professional inspection. Older homes may also benefit from assessment and carefully designed upgrades.

Good cyclone design is a system rather than a single “cyclone-proof” product. It combines site classification, engineering, correct construction, inspection and maintenance. Building strength also does not replace emergency planning: occupants still need to follow official warnings and shelter or leave as advised. Resilience comes from matching a strong structure with informed decisions before, during and after the storm.`,
    questions: [
      { prompt: 'What is the purpose of a continuous load path?', options: ['To direct wind forces through connected parts into the ground', 'To channel rainwater into the roof space', 'To make every building the same shape', 'To remove the need for footings'], answer: 0, explanation: 'The passage describes connected roofing, battens, trusses, walls and footings transferring forces safely to the ground.' },
      { prompt: 'Why can the failure of a large opening be dangerous?', options: ['It lowers every wind speed', 'It makes the building heavier', 'It can increase internal pressure and expose the interior', 'It strengthens roof connections'], answer: 2, explanation: 'A failed door or window allows pressure to build inside and may increase the load on roofs and walls.' },
      { prompt: 'How can an older building lose cyclone resistance?', options: ['By having its design documented', 'Through corrosion, termites, alterations or hidden damage', 'By receiving a professional inspection', 'Through correctly installed tie-downs'], answer: 1, explanation: 'The fourth paragraph identifies deterioration, changes and unseen damage as threats to the intended structural system.' },
      { prompt: 'Which statement best summarises the passage?', options: ['One strong roof product guarantees safety', 'Emergency warnings matter only in weak buildings', 'Cyclone design concerns appearance rather than forces', 'Structural resilience depends on connected design, sound construction and maintenance'], answer: 3, explanation: 'The conclusion emphasises a whole system, supported by emergency planning, instead of a single supposedly cyclone-proof feature.' },
    ],
    writingPrompt: 'Write 140–180 words explaining why cyclone resilience should be understood as a system. Use evidence about load paths, openings, maintenance and emergency planning.',
    writingKeywords: ['cyclone', 'load path', 'uplift', 'connection', 'maintenance', 'resilience'],
    vocabulary: [
      { term: 'uplift', definition: 'an upward force, especially one created by wind on a structure', example: 'Strong tie-downs help the roof resist uplift.' },
      { term: 'batten', definition: 'a narrow structural strip that supports roof cladding or tiles', example: 'Each roof batten was fixed securely to the trusses.' },
      { term: 'footing', definition: 'the lowest part of a structure that transfers loads into the ground', example: 'The wall frame was anchored to the concrete footing.' },
      { term: 'windborne', definition: 'carried through the air by wind', example: 'Screens can reduce damage from windborne debris.' },
      { term: 'resilience', definition: 'the capacity to withstand difficulty and recover from it', example: 'Regular inspection contributes to the building’s resilience.' },
    ],
  },
  {
    id: 'return-native-grasses',
    theme: 'Australia',
    title: 'The Return of Native Grasses',
    dek: 'Restoring native grasslands involves diversity, patient management and respect for knowledge held on Country.',
    minutes: 17,
    passage: `A grassland can look plain from a car window, yet a healthy native grassland may contain many grasses, wildflowers, insects, reptiles and birds. Across temperate Australia, large areas were changed by cultivation, introduced pasture, grazing and urban growth. Small remnants survived in places such as roadsides, rail reserves and cemeteries where the soil had not been repeatedly ploughed. These patches can hold species missing from nearby paddocks.

Restoration is more complicated than scattering a packet of seed. Workers first identify the local plant community and the causes of decline. Weeds may outcompete young native plants, while excess fertiliser can favour introduced species adapted to nutrient-rich soil. Seed from a distant climate or soil type may perform poorly. Teams may collect local seed, propagate plants, manage weeds and monitor several seasons before judging success.

Native grasses offer useful traits, but they are not all identical. Some perennial species maintain living roots for much of the year, helping hold soil and provide habitat. Others respond differently to drought, grazing or fire. A mixture of species and ages is usually more resilient than a single-species planting. Restored ground can support conservation, carefully managed grazing, urban landscaping or erosion control, depending on the place and its goals.

Aboriginal peoples have managed and harvested grassland plants for countless generations. Practices and knowledge differ among Nations and should not be reduced to a general recipe. Cultural burning, food production and care for particular species must be led by the Traditional Owners with authority for that Country. Commercial interest in native grains also raises questions about consent, recognition and who receives the benefits.

A successful return of native grasses is therefore not a quick attempt to make a site look green. It rebuilds ecological relationships above and below the soil. Progress may be uneven: rain can trigger germination, while drought or weed growth can cause setbacks. Clear goals, long-term monitoring and partnerships with Traditional Owners and local landholders give restoration the best chance of lasting.`,
    questions: [
      { prompt: 'Why can roadside or cemetery remnants be valuable?', options: ['They have always received extra fertiliser', 'They may retain native species lost from cultivated land', 'They contain only one grass species', 'They never experience weeds'], answer: 1, explanation: 'The passage notes that some less-disturbed patches preserve species that have disappeared from repeatedly ploughed paddocks.' },
      { prompt: 'Why should restoration teams consider the source of seed?', options: ['Every native seed suits every environment', 'Only imported seed can germinate', 'Seed adapted to distant conditions may not suit the local site', 'Local seed removes the need for monitoring'], answer: 2, explanation: 'Climate and soil vary, so plants sourced from far away may be poorly matched to local conditions.' },
      { prompt: 'How does the passage frame First Nations grassland knowledge?', options: ['As knowledge that should be led by the relevant Traditional Owners', 'As one universal method for all of Australia', 'As information useful only in museums', 'As a substitute for consent'], answer: 0, explanation: 'The fourth paragraph stresses distinct Nations, local authority, consent and fair recognition of benefits.' },
      { prompt: 'What is the main reason long-term monitoring is needed?', options: ['A green appearance proves restoration is complete', 'All grasses grow at the same rate', 'Restoration ends after seed is scattered', 'Weather, weeds and ecological recovery vary over time'], answer: 3, explanation: 'The conclusion explains that germination, drought, weeds and ecological relationships change across seasons.' },
    ],
    writingPrompt: 'Write 140–180 words proposing a plan to restore native grasses at a damaged site. Use evidence from the passage and include ecological and cultural responsibilities.',
    writingKeywords: ['grassland', 'restoration', 'seed', 'diversity', 'Traditional Owners', 'monitoring'],
    vocabulary: [
      { term: 'remnant', definition: 'a surviving part of a habitat that was once more extensive', example: 'The roadside remnant contained several rare wildflowers.' },
      { term: 'propagate', definition: 'to grow new plants from seeds, cuttings or other plant material', example: 'Volunteers propagate local grasses in a nursery.' },
      { term: 'perennial', definition: 'a plant that lives for more than two years', example: 'The perennial grass regrew after summer rain.' },
      { term: 'germination', definition: 'the beginning of growth from a seed', example: 'Cool, wet conditions encouraged germination.' },
      { term: 'resilient', definition: 'able to cope with disturbance and recover', example: 'A diverse planting may be more resilient during drought.' },
    ],
  },
  {
    id: 'australias-multilingual-suburbs',
    theme: 'Australia',
    title: "Australia's Multilingual Suburbs",
    dek: 'Languages used at home, school, work and shops shape how communities communicate and belong.',
    minutes: 16,
    passage: `Walk through many Australian suburbs and English will be only one of the languages heard. According to the 2021 Census, 5.8 million people reported using a language other than English at home. Mandarin, Arabic, Vietnamese, Cantonese and Punjabi were among the most widely reported. These national figures do not describe every neighbourhood, but they show that multilingual life is a normal part of contemporary Australia.

A person's languages may serve different purposes. Someone might speak Vietnamese with a grandparent, English at school and both languages in a family business. Children can shift between languages depending on audience and topic, a practice called code-switching. This flexibility is a skill, not evidence that a speaker is confused. Maintaining a family language can carry humour, memories and relationships that are difficult to reproduce exactly in another language.

Public services must communicate across this diversity. Hospitals, councils and emergency agencies may use translated information and qualified interpreters. A relative who speaks some English should not always be expected to interpret complex legal or medical information. Accurate interpreting protects privacy and reduces dangerous misunderstandings. Clear English also matters; translating a confusing original message will not make it clear.

Multilingual suburbs can face unequal access. New arrivals may have limited English while learning how unfamiliar systems work. Other residents may speak English confidently but encounter prejudice because of an accent. Schools can respond by teaching English well without treating home languages as problems. Bilingual staff, community media and library collections can connect people with services and with one another.

Language diversity does not mean that every person from the same background speaks the same language or holds the same views. Census categories cannot capture ability, identity or daily language choices perfectly. Good communication begins by asking what a person needs rather than making assumptions. A multilingual suburb works best when English provides a shared means of communication while other languages are recognised as living resources that strengthen families, services and public life.`,
    questions: [
      { prompt: 'What does code-switching mean in the passage?', options: ['Forgetting every home language', 'Changing languages according to audience or situation', 'Translating only written documents', 'Refusing to use a shared language'], answer: 1, explanation: 'The second paragraph defines code-switching as moving between languages for different people, settings or topics.' },
      { prompt: 'Why are qualified interpreters important in medical or legal settings?', options: ['They prevent people from learning English', 'They make every message longer', 'They improve accuracy and protect privacy', 'They replace all bilingual family communication'], answer: 2, explanation: 'The passage links professional interpreting with confidential, accurate communication where mistakes could cause harm.' },
      { prompt: 'Which response by schools does the author support?', options: ['Teach English while respecting students’ home languages', 'Ban languages other than English in every setting', 'Assume accents show weak knowledge', 'Expect children to interpret every official message'], answer: 0, explanation: 'The fourth paragraph supports strong English teaching without presenting family languages as deficiencies.' },
      { prompt: 'Why should readers be cautious with Census language categories?', options: ['The Census records no language information', 'Every suburb has the same language pattern', 'A category proves a person’s beliefs', 'Categories cannot fully show ability, identity or daily choices'], answer: 3, explanation: 'The conclusion warns that broad data cannot capture the complexity of individual language use and identity.' },
    ],
    writingPrompt: 'Write 140–180 words explaining how a school or council can communicate well in a multilingual suburb. Use evidence from the passage and address one possible misunderstanding.',
    writingKeywords: ['language', 'multilingual', 'English', 'interpreter', 'community', 'access'],
    vocabulary: [
      { term: 'multilingual', definition: 'using or involving more than one language', example: 'The multilingual notice included information in six languages.' },
      { term: 'code-switching', definition: 'changing between languages or language varieties for different situations', example: 'Her code-switching helped her speak naturally with family and classmates.' },
      { term: 'interpreter', definition: 'a person who converts spoken or signed communication between languages', example: 'A qualified interpreter joined the medical appointment.' },
      { term: 'prejudice', definition: 'an unfair judgement about a person or group made without proper knowledge', example: 'An accent should not lead to prejudice about someone’s ability.' },
      { term: 'assumption', definition: 'a belief accepted without enough evidence', example: 'Staff asked about language needs instead of making an assumption.' },
    ],
  },
  {
    id: 'daylight-saving-debate',
    theme: 'Australia',
    title: 'The Debate Over Daylight Saving',
    dek: 'Moving the clock changes daily routines, but geography means Australians do not experience the change in the same way.',
    minutes: 16,
    passage: `Daylight saving does not create extra sunlight. It moves the clock forward so that, by the clock, sunrise and sunset occur later. New South Wales, Victoria, South Australia, Tasmania and the Australian Capital Territory observe it during the warmer part of the year. Queensland, Western Australia and the Northern Territory do not. Because states and territories set their own standard time laws, Australia's summer time zones reflect different regional choices.

Supporters value lighter evenings after work or school. Extra evening daylight may encourage outdoor recreation and can suit cafes, tourism and community events. Businesses dealing with daylight-saving states may also prefer matching office hours. However, a benefit to one activity can be a cost to another. Early workers may begin in darkness, and people must adjust schedules when clocks change.

Geography helps explain regional disagreement. The seasonal change in day length is greater farther from the equator, so shifting an hour may produce a more noticeable summer evening benefit in Hobart than in tropical Darwin. Within a large state, experiences also differ by longitude and lifestyle. Residents in south-east Queensland may focus on business links with Sydney, while people in western or northern areas may be more concerned about dark mornings, heat and school or farm routines.

Claims about energy savings are also contested. Using less electric lighting in the evening could reduce demand, but extra morning lighting or later air-conditioning can offset that saving. Results depend on climate, technology and behaviour, so evidence from one place or decade may not apply neatly to another.

The debate is therefore not simply between people who enjoy sunshine and people who dislike changing clocks. It involves trade-offs among health, work, recreation, energy use and coordination across borders. A strong proposal should identify which communities gain, which carry inconvenience and what evidence supports the claim. Australia's mixed system may look untidy, but it also reflects an important fact: the same clock policy can have different effects across a continent.`,
    questions: [
      { prompt: 'What does daylight saving actually change?', options: ['The amount of sunlight reaching Australia', 'The clock time assigned to sunrise and sunset', 'The distance from a city to the equator', 'The length of the summer season'], answer: 1, explanation: 'The opening distinguishes changing the clock from creating daylight: sunlight occurs at a later clock time.' },
      { prompt: 'Why might views differ within Queensland?', options: ['Every region has identical sunrise times and work patterns', 'Only tourists are affected by time', 'Business links, longitude, climate and routines vary across the state', 'Queensland uses two official summer clocks'], answer: 2, explanation: 'The passage contrasts concerns in the south-east with those in western and northern communities.' },
      { prompt: 'Why are energy-saving claims uncertain?', options: ['Reduced evening use may be offset by morning or cooling demand', 'Electricity cannot be measured', 'Daylight saving always doubles energy use', 'Lighting is the only use of electricity'], answer: 0, explanation: 'The fourth paragraph explains that demand can shift rather than disappear and that outcomes depend on local conditions.' },
      { prompt: 'What standard does the author set for a strong daylight-saving proposal?', options: ['It should assume every community is affected equally', 'It should focus only on evening recreation', 'It should ignore existing time-zone borders', 'It should identify benefits, costs and supporting evidence'], answer: 3, explanation: 'The conclusion calls for explicit attention to who gains, who experiences inconvenience and what evidence supports each claim.' },
    ],
    writingPrompt: 'Write 140–180 words arguing whether one Australian state or territory should adopt, retain or reject daylight saving. Use evidence from the passage and address a competing regional need.',
    writingKeywords: ['daylight saving', 'region', 'time', 'work', 'energy', 'trade-off'],
    vocabulary: [
      { term: 'longitude', definition: 'position east or west on Earth, measured in degrees', example: 'Longitude helps explain differences in local sunrise time.' },
      { term: 'offset', definition: 'to balance or reduce the effect of something else', example: 'Higher morning demand may offset an evening saving.' },
      { term: 'coordination', definition: 'the organisation of activities so they work together effectively', example: 'Shared office hours can improve coordination across borders.' },
      { term: 'contested', definition: 'disputed or argued about', example: 'The claimed energy benefit remains contested.' },
      { term: 'trade-off', definition: 'a situation in which gaining one benefit involves accepting a cost', example: 'A lighter evening may involve a trade-off with a darker morning.' },
    ],
  },
  {
    id: 'future-of-nullarbor',
    theme: 'Australia',
    title: 'The Future of the Nullarbor',
    dek: 'The vast limestone plain raises difficult questions about protection, infrastructure, energy and who decides its future.',
    minutes: 18,
    passage: `The Nullarbor is often described as an empty, treeless plain between South Australia and Western Australia. That description hides much of its value. Low saltbush and bluebush communities support wildlife above ground, while water dissolving limestone has formed caves, sinkholes and underground passages below. The region is part of Mirning Country, with cultural places, knowledge and responsibilities that continue in the present.

The plain also carries infrastructure linking distant communities and economies. The Eyre Highway and Trans-Australian Railway cross it, alongside communications facilities and service settlements. Travellers, freight operators, pastoral businesses, scientists and local communities all depend on reliable access and water. Maintenance is necessary, but creating unnecessary tracks can scar arid soils and disturb vegetation that recovers slowly.

Future proposals add harder choices. The Nullarbor has strong sun and wind, creating interest in large renewable-energy and hydrogen projects. Such developments could contribute to lower-emissions energy and provide employment or income. Yet roads, turbines, solar arrays, pipelines and worker accommodation can fragment habitat. On karst, surface disturbance may also affect hidden caves, water movement and species that occur in very limited locations. Calling an energy source renewable does not mean every proposed site is low impact.

Conservation does not require pretending that people have never used the region. It requires decisions that recognise cumulative effects. One road, bore or visitor site may appear small, but many projects can combine to change a landscape. Baseline surveys are difficult because underground systems remain incompletely mapped. Avoiding sensitive areas is usually safer than promising to repair caves or cultural places after damage.

The Nullarbor's future should not be decided by distant images of a vacant space. Mirning people and other relevant Traditional Owners must have a central role, not merely a late opportunity to comment. Governments, scientists, communities and proponents also need transparent evidence about benefits, alternatives and risks. The central question is not whether the region should remain frozen or accept every project. It is how to meet national needs without treating an ancient living landscape as expendable.`,
    questions: [
      { prompt: 'Why is the description “empty, treeless plain” misleading?', options: ['The Nullarbor is covered by tall rainforest', 'The region contains living communities, cultural values and underground systems', 'No transport route crosses the region', 'Every cave has been fully mapped'], answer: 1, explanation: 'The opening identifies vegetation, wildlife, karst features and continuing Mirning connections that the simple description conceals.' },
      { prompt: 'What special risk does construction on karst create?', options: ['It can affect hidden caves, water movement and restricted species', 'It makes sunlight unavailable for solar power', 'It prevents all railway maintenance', 'It causes limestone to grow immediately'], answer: 0, explanation: 'Surface works may damage interconnected features underground, including caves, hydrology and specialised habitat.' },
      { prompt: 'Why does the passage discuss cumulative effects?', options: ['Only the largest single project can affect a landscape', 'Small actions always repair one another', 'Several individually limited disturbances can combine into major change', 'Pastoral and transport uses leave no trace'], answer: 2, explanation: 'The fourth paragraph explains that roads, bores and visitor sites can add together across a fragile region.' },
      { prompt: 'Which decision-making approach does the author support?', options: ['Treat the Nullarbor as vacant land', 'Approve all renewable projects automatically', 'Exclude local and Indigenous knowledge', 'Combine Traditional Owner authority with transparent assessment of options and risks'], answer: 3, explanation: 'The conclusion centres Mirning and other relevant Traditional Owners while also requiring open evidence about benefits, alternatives and impacts.' },
    ],
    writingPrompt: 'Write 140–180 words proposing principles for decisions about the Nullarbor’s future. Balance infrastructure or energy needs with cultural and environmental protection.',
    writingKeywords: ['Nullarbor', 'karst', 'Mirning', 'infrastructure', 'renewable energy', 'cumulative'],
    vocabulary: [
      { term: 'karst', definition: 'a landscape formed as water dissolves soluble rock such as limestone', example: 'The Nullarbor’s karst includes caves and sinkholes.' },
      { term: 'fragment', definition: 'to divide a habitat or area into smaller disconnected parts', example: 'New roads can fragment habitat used by wildlife.' },
      { term: 'cumulative', definition: 'increasing or building through the combined effect of several actions', example: 'The review considered the cumulative impact of many tracks.' },
      { term: 'baseline', definition: 'an initial set of information used for later comparison', example: 'A baseline survey recorded species before work began.' },
      { term: 'expendable', definition: 'considered able to be used up, sacrificed or replaced', example: 'The ancient landscape should not be treated as expendable.' },
    ],
  },
];
