export const australiaLessons1 = [
  {
    id: 'caring-for-country',
    theme: 'Australia',
    title: 'Caring for Country',
    dek: 'First Nations knowledge connects environmental care with culture, responsibility and place.',
    minutes: 18,
    passage: `Across Australia, Aboriginal and Torres Strait Islander peoples use the phrase Caring for Country in ways shaped by their own Nations, communities and places. Country is not simply land. It can include waters, skies, plants, animals, people, stories and responsibilities. Because cultures and environments differ, there is no single set of practices that represents every First Nations community.

In some regions, Traditional Owners use cultural burning: carefully planned, relatively cool fire applied at suitable times and places. The purpose may include protecting important sites, supporting particular plants, creating varied habitats or reducing fuel in selected areas. Cultural burning is not just a technical method that can be copied anywhere. It depends on local authority, seasonal knowledge and relationships built over generations.

Caring for Country also includes activities without fire. Rangers may monitor threatened species, remove invasive plants, care for waterways, record cultural sites and work with scientists. Indigenous ranger groups combine community knowledge with tools such as cameras, maps and satellite images. These partnerships are strongest when Traditional Owners help set the questions and control how cultural knowledge is shared.

There are risks when institutions treat Indigenous knowledge as a collection of useful tips. Knowledge may be connected to particular people, ceremonies or places and may not be open for public use. Respect therefore requires consent, attribution and recognition of Indigenous governance, not merely consultation after decisions have been made.

Caring for Country shows that environmental management is also about relationships and responsibility. Governments and researchers can learn from First Nations expertise, but genuine partnership means listening to the distinct custodians of each Country and supporting their authority to lead work on their lands and waters.`,
    questions: [
      { prompt: 'Why does the passage reject one universal model of Caring for Country?', options: ['All communities use identical environments', 'Practices differ among Nations, communities and places', 'Only scientists can manage Country', 'The phrase refers only to city parks'], answer: 1, explanation: 'The opening explains that First Nations cultures, environments and responsibilities are diverse rather than uniform.' },
      { prompt: 'What makes cultural burning more than a technique?', options: ['It always uses large, hot fires', 'It requires no planning', 'It relies on local authority, seasons and relationships', 'It can be copied unchanged across Australia'], answer: 2, explanation: 'The passage links cultural burning to locally held authority and knowledge developed over generations.' },
      { prompt: 'When are scientific partnerships described as strongest?', options: ['When researchers keep every result', 'When Traditional Owners shape questions and knowledge sharing', 'When cultural sites are ignored', 'When only satellite images are used'], answer: 1, explanation: 'The third paragraph says Traditional Owners should help direct research and control the sharing of cultural knowledge.' },
      { prompt: 'What is the main warning in the fourth paragraph?', options: ['Indigenous knowledge should be treated as free public information', 'Environmental work should avoid technology', 'Useful knowledge can be separated from its custodians', 'Consent and governance must accompany knowledge sharing'], answer: 3, explanation: 'The author warns against extracting tips without consent, attribution or recognition of Indigenous governance.' },
    ],
    writingPrompt: 'Write 140–180 words explaining what genuine partnership in Caring for Country should involve. Use evidence from the passage and address one risk of a poorly designed partnership.',
    writingKeywords: ['Country', 'partnership', 'knowledge', 'consent', 'authority', 'Traditional Owners'],
    vocabulary: [
      { term: 'custodian', definition: 'a person or group responsible for caring for something', example: 'Traditional custodians guide decisions about their Country.' },
      { term: 'invasive', definition: 'spreading into an environment where it causes harm', example: 'Rangers removed an invasive plant from the wetland.' },
      { term: 'attribution', definition: 'acknowledgement of the source or creator of knowledge', example: 'The report gave clear attribution to the community.' },
      { term: 'governance', definition: 'the systems and authority used to make decisions', example: 'Strong governance determines who can approve the project.' },
      { term: 'stewardship', definition: 'responsible care of a place or resource', example: 'Long-term stewardship protects both habitat and heritage.' },
    ],
  },
  {
    id: 'murray-darling-basin',
    theme: 'Australia',
    title: 'The Murray-Darling Basin',
    dek: 'A vast river system reveals why sharing water requires evidence, negotiation and care.',
    minutes: 18,
    passage: `The Murray-Darling Basin crosses several states and territories and contains rivers, wetlands, farms, towns and culturally significant places. Its water supports households and industries, but it also sustains fish, birds, floodplain forests and communities downstream. The Basin is therefore not one simple pipeline. It is a connected system in which decisions made in one location can affect many others.

Rainfall across the Basin is highly variable. Long dry periods can be followed by floods, so managers cannot assume that the same amount of water will be available each year. Dams and irrigation help communities manage uncertainty, yet taking too much water can reduce river flows and damage wetlands. Poor water quality, invasive species and barriers to fish movement add further pressure.

First Nations have cared for Basin Country over countless generations. The Basin includes many distinct Nations, each with its own relationships, laws and knowledge. Rivers are connected to culture, identity and obligations, not only to an economic resource. Water planning that treats First Nations voices as an afterthought misses both rights and expertise.

Governments have developed a Basin-wide plan to coordinate water use across borders. One tool is environmental water: water managed to support river health, such as by helping a wetland receive an important flow. However, arguments continue over targets, evidence, compliance and the effects of change on irrigation communities. A plan on paper matters only if rules are monitored and adjusted as conditions change.

The central challenge is not choosing between people and nature as though they were separate. Healthy rivers support economies and communities over time. Fair management requires transparent evidence, lawful water use, meaningful First Nations participation and difficult negotiations about who bears costs when water is scarce.`,
    questions: [
      { prompt: 'Why is the Basin described as a connected system?', options: ['Every river carries the same amount of water', 'Upstream decisions can affect distant places', 'Only one government controls it', 'Farms do not depend on rivers'], answer: 1, explanation: 'The first paragraph stresses that actions in one location can affect ecosystems and communities elsewhere.' },
      { prompt: 'What makes water planning especially difficult?', options: ['Rainfall and river conditions vary greatly', 'Wetlands need no water', 'Dams create rainfall', 'Floods happen on a fixed schedule'], answer: 0, explanation: 'Variable rainfall and alternating dry periods and floods make future water availability uncertain.' },
      { prompt: 'What is environmental water used for?', options: ['Supporting river and wetland health', 'Removing every dam', 'Increasing household bills', 'Replacing all irrigation'], answer: 0, explanation: 'The passage defines environmental water as water managed to support ecological needs such as wetland flows.' },
      { prompt: 'Which approach best matches the conclusion?', options: ['Treat economic and environmental needs as unrelated', 'Use fixed rules without monitoring', 'Combine evidence, lawful use, participation and negotiation', 'Allow each upstream user to act alone'], answer: 2, explanation: 'The conclusion calls for transparent evidence, compliance, First Nations participation and negotiated trade-offs.' },
    ],
    writingPrompt: 'Write 140–180 words arguing which principle should guide difficult water decisions in the Murray-Darling Basin. Use evidence from the passage and consider one competing need.',
    writingKeywords: ['water', 'river', 'Basin', 'evidence', 'community', 'environment'],
    vocabulary: [
      { term: 'basin', definition: 'an area of land drained by a river and its tributaries', example: 'Rain falling in the basin may eventually enter the river system.' },
      { term: 'variable', definition: 'likely to change or differ over time', example: 'Variable rainfall makes water planning difficult.' },
      { term: 'irrigation', definition: 'the artificial supply of water to crops or land', example: 'The farm used irrigation during a dry season.' },
      { term: 'compliance', definition: 'the act of following a rule or legal requirement', example: 'Accurate meters help officials check compliance.' },
      { term: 'transparent', definition: 'open and clear enough to be examined', example: 'A transparent process explains how decisions were reached.' },
    ],
  },
  {
    id: 'melbourne-laneways',
    theme: 'Australia',
    title: "Melbourne's Laneways",
    dek: 'Small streets show how city spaces change through work, art, planning and debate.',
    minutes: 16,
    passage: `Melbourne's central city is crossed by narrow lanes that were originally used for practical tasks. Many provided rear access to shops, warehouses and homes. Deliveries, waste collection and services could occur away from the wider streets. The lanes were part of the city's working infrastructure rather than attractions designed for visitors.

Over time, some laneways gained cafes, small shops, music venues and public art. Their limited width can create a sense of discovery because a pedestrian sees details that might disappear beside a broad road. Street art has become especially associated with certain lanes. A wall may change repeatedly as new work appears, so the place functions less like a fixed gallery and more like an ongoing public conversation.

Popularity creates tensions. A successful lane can attract heavy foot traffic and higher rents. Businesses may benefit, while long-term tenants or independent artists can be priced out. Residents may face late-night noise, and delivery workers still need access through spaces now filled with diners and photographers. Art can also become a marketing image even when artists have little control over how their work is used.

City planners must balance these competing purposes. Better lighting and clear walking routes can improve safety, but excessive redesign may remove the rough character people value. Cleaning a wall can erase unauthorised art; never cleaning it can leave harmful messages or damage untreated. Rules therefore need to distinguish among safety, property, artistic expression and heritage rather than treating every lane identically.

The laneways are appealing partly because no single person designed their entire identity. Their history has accumulated through work, neglect, creativity, business and public use. Protecting them does not mean freezing them. It means managing change without turning complex urban places into identical tourist products.`,
    questions: [
      { prompt: 'What was an early purpose of many laneways?', options: ['Hosting tourist festivals', 'Providing rear service access', 'Displaying permanent gallery art', 'Replacing all major roads'], answer: 1, explanation: 'The first paragraph describes deliveries, waste collection and access behind buildings.' },
      { prompt: 'Why does the author call street art an ongoing conversation?', options: ['Every work is officially commissioned', 'The walls never change', 'New works can replace earlier ones', 'Artists speak to every visitor'], answer: 2, explanation: 'The passage explains that changing layers of art make the lanes unlike a fixed gallery.' },
      { prompt: 'Which conflict can popularity create?', options: ['Lower rents for all tenants', 'More visitors but pressure on residents and artists', 'An end to delivery work', 'Fewer businesses in the city'], answer: 1, explanation: 'Heavy visitation may help businesses while increasing rent, noise and pressure on working access.' },
      { prompt: 'What does the conclusion suggest protection should mean?', options: ['Preventing every future change', 'Copying the same design into each lane', 'Banning business and tourism', 'Managing change while preserving complexity'], answer: 3, explanation: 'The author supports thoughtful change rather than freezing lanes or making them uniform products.' },
    ],
    writingPrompt: 'Write 140–180 words proposing how Melbourne should manage one popular laneway. Balance at least two uses of the space and justify your priorities with the passage.',
    writingKeywords: ['laneway', 'art', 'business', 'resident', 'change', 'public'],
    vocabulary: [
      { term: 'infrastructure', definition: 'basic physical systems that allow a place to function', example: 'The lanes began as useful urban infrastructure.' },
      { term: 'accumulate', definition: 'to gather or build up over time', example: 'Layers of paint accumulate on the wall.' },
      { term: 'tenant', definition: 'a person or business that rents a property', example: 'The tenant renewed the shop lease.' },
      { term: 'heritage', definition: 'valued features and traditions inherited from the past', example: 'The old warehouse has heritage significance.' },
      { term: 'identical', definition: 'exactly the same', example: 'Good planning need not make every lane identical.' },
    ],
  },
  {
    id: 'bushfire-warning-systems',
    theme: 'Australia',
    title: 'Bushfire Warning Systems',
    dek: 'Warnings work best when reliable information leads to early, practical decisions.',
    minutes: 17,
    passage: `During a bushfire, information can change quickly. Wind may shift, roads may close and smoke may reduce visibility. Warning systems aim to turn observations and forecasts into messages that help people act. They draw on sources such as emergency reports, weather data, fire behaviour modelling and calls from the public, but no system can observe every location instantly.

Australia's nationally consistent warning framework uses three main warning levels: Advice, Watch and Act, and Emergency Warning. The level signals increasing danger, yet the heading alone is not enough. A message should identify the affected area, describe the threat, state what people should do and explain where updated information can be found. Instructions may differ because leaving early, sheltering or avoiding a road depends on the local situation.

Warnings can reach people through official apps and websites, radio, television, telephone alerts and emergency services. Using several channels matters. Mobile coverage and electricity can fail, a visitor may not have the local app, and a person with disability or limited English may need information in another form. Households should know their local official sources before a fire begins.

A warning is not a substitute for preparation. On days of elevated fire danger, people should monitor conditions and follow the advice of their state or territory fire authority. A household plan can identify when to leave, what route to use, where animals will go and how family members will communicate. Waiting for a personal message may waste critical time.

Effective systems therefore share responsibility without shifting it unfairly. Authorities must issue clear, timely and accessible information. Media organisations must avoid rumours. Individuals should prepare and verify information through official channels. The safest response comes from combining trusted warnings with decisions made before smoke is visible.`,
    questions: [
      { prompt: 'Why can no warning system provide perfect immediate knowledge?', options: ['Fires never change direction', 'Every resident uses the same app', 'Conditions change and not every place is observed instantly', 'Weather information is never collected'], answer: 2, explanation: 'The opening notes rapid changes and limits in observing every location at once.' },
      { prompt: 'What are the three warning levels named in the passage?', options: ['Low, Medium and High', 'Advice, Watch and Act, and Emergency Warning', 'Prepare, Drive and Return', 'Notice, Alert and Evacuate'], answer: 1, explanation: 'These are the three levels in the nationally consistent Australian warning framework.' },
      { prompt: 'Why should warnings use several communication channels?', options: ['Every channel always works', 'People have different needs and services can fail', 'Radio can predict every fire', 'Official websites are unnecessary'], answer: 1, explanation: 'The passage cites outages, visitors and accessibility needs as reasons not to rely on one method.' },
      { prompt: 'What is the passage mainly arguing?', options: ['People should wait for a personal alert', 'Preparation is unnecessary when apps exist', 'Warnings and advance planning must work together', 'Media reports should replace fire authorities'], answer: 2, explanation: 'The conclusion combines clear official warnings with household preparation and verified information.' },
    ],
    writingPrompt: 'Write 140–180 words advising a household how to prepare for bushfire information and warnings. Explain three practical actions and why relying on one alert is risky.',
    writingKeywords: ['warning', 'prepare', 'official', 'plan', 'fire', 'information'],
    vocabulary: [
      { term: 'visibility', definition: 'the distance or clarity with which something can be seen', example: 'Smoke reduced visibility on the highway.' },
      { term: 'framework', definition: 'an organised structure for making or understanding something', example: 'The warning framework uses consistent levels.' },
      { term: 'accessible', definition: 'able to be reached, understood or used by different people', example: 'Captions make the video more accessible.' },
      { term: 'elevated', definition: 'raised above the usual level', example: 'Officials announced elevated fire danger.' },
      { term: 'verify', definition: 'to check that information is accurate or genuine', example: 'Residents should verify a claim through official channels.' },
    ],
  },
  {
    id: 'reef-citizen-scientists',
    theme: 'Australia',
    title: "The Great Barrier Reef's Citizen Scientists",
    dek: 'Community observations can extend reef research when methods and limits are clear.',
    minutes: 17,
    passage: `The Great Barrier Reef is too extensive and changeable for professional researchers to observe every place continuously. Citizen science helps widen the field of view. Tour crew, Traditional Owners, recreational visitors and community volunteers can record observations through organised programs, adding information from places scientists may visit less often.

Participants might photograph a reef site, identify animals, note coral condition or report unusual events. Programs such as Eye on the Reef provide methods for recording observations, while other projects train volunteers to carry out structured surveys. A useful record needs more than an exciting picture. Its location, date, method and level of certainty help researchers decide how the observation can be used.

Citizen science has several strengths. Repeated visits can reveal change over time, and public participation can build understanding of reef ecology. It may also provide an early signal that deserves closer investigation. However, volunteer data are not automatically complete or representative. Popular, accessible reefs may receive many reports while remote areas receive few. Different observers may identify the same organism differently.

Quality improves when projects provide training, clear categories and checks by experienced reviewers. Researchers can compare citizen observations with other evidence rather than expecting one dataset to answer every question. Participants also deserve feedback about what their records contributed; otherwise collecting data can feel like a one-way transaction.

First Nations groups have their own knowledge, rights and responsibilities for Sea Country. Collaboration must respect the authority of the relevant Traditional Owners and agreed rules for cultural knowledge. Citizen science is most valuable when it supports, rather than replaces, professional research and Indigenous-led care. Its power comes from connecting many careful observations while remaining honest about gaps and uncertainty.`,
    questions: [
      { prompt: 'Why is citizen science useful on the Great Barrier Reef?', options: ['It makes professional science unnecessary', 'It can extend observations across more places and times', 'It guarantees every reef is equally studied', 'It prevents all environmental change'], answer: 1, explanation: 'Community participants can contribute observations from locations and times researchers may not cover.' },
      { prompt: 'What information makes a photograph more useful as data?', options: ['A dramatic caption only', 'The photographer’s number of followers', 'Location, date, method and certainty', 'A promise that the species is rare'], answer: 2, explanation: 'These details let researchers assess and interpret the observation responsibly.' },
      { prompt: 'What sampling problem does the passage identify?', options: ['Remote reefs may receive fewer reports', 'Every observer visits remote reefs', 'Popular sites cannot be photographed', 'Volunteers always identify organisms identically'], answer: 0, explanation: 'Accessible popular sites may be overrepresented compared with remote locations.' },
      { prompt: 'Which claim best captures the conclusion?', options: ['Citizen science should replace every expert survey', 'All cultural knowledge should be made public', 'More data always remove uncertainty', 'Citizen science should complement research and Indigenous-led care'], answer: 3, explanation: 'The final paragraph presents community observations as support for, not a replacement for, other expertise and authority.' },
    ],
    writingPrompt: 'Write 140–180 words evaluating whether citizen science is a reliable way to study the Great Barrier Reef. Use strengths and limitations from the passage before reaching a judgement.',
    writingKeywords: ['reef', 'citizen science', 'data', 'observation', 'reliable', 'research'],
    vocabulary: [
      { term: 'structured', definition: 'organised according to a clear method', example: 'Volunteers followed a structured survey.' },
      { term: 'representative', definition: 'accurately reflecting a wider group or area', example: 'One busy reef may not be representative of the whole region.' },
      { term: 'dataset', definition: 'a collection of related pieces of information', example: 'Researchers checked the dataset for missing locations.' },
      { term: 'certainty', definition: 'the degree of confidence that something is correct', example: 'The observer recorded her level of certainty.' },
      { term: 'complement', definition: 'to add to something in a way that improves it', example: 'Community reports complement scientific surveys.' },
    ],
  },
  {
    id: 'wool-modern-australia',
    theme: 'Australia',
    title: 'From Wool to Modern Australia',
    dek: 'The history of wool connects global trade, technology, labour and contested land.',
    minutes: 18,
    passage: `For much of Australia's colonial history, wool was a major export. Merino sheep produced fine fibres valued by overseas textile manufacturers, and growing demand encouraged pastoral expansion. Ports, railways, banks and stores developed partly to move and finance wool. The industry helped shape towns and employment far beyond the properties where sheep grazed.

This economic story also involved dispossession. Pastoral expansion occurred on Aboriginal lands, often disrupting access to water, food sources and cultural places. First Nations people resisted occupation and also became essential workers in parts of the pastoral industry, frequently under unequal conditions. An honest account of wool must therefore examine wealth creation alongside the people whose land and labour made it possible.

Work in the industry changed with technology. Shearing remained skilled physical labour, but mechanical handpieces made the task faster than blade shearing. Wool was classed according to qualities such as fibre diameter, length and strength before sale. Transport and communication improvements connected remote properties more closely to national and international markets.

Modern Australia no longer depends on wool in the way the colonial economy once did. Farmers face competition from synthetic fibres and other materials, changing consumer preferences, fluctuating prices and demanding environmental conditions. Producers may seek higher-value markets by demonstrating fibre quality, animal welfare and responsible land management. Traceability can allow buyers to learn where and how wool was produced.

Wool's history is neither a simple success story nor a reason to dismiss the industry. It shows how a commodity can influence settlement, infrastructure, labour relations and national stories. Studying those connections helps Australians ask who benefited, who carried the costs and how an old industry can respond to modern expectations.`,
    questions: [
      { prompt: 'How did wool influence development beyond farms?', options: ['It reduced the need for transport', 'It supported ports, railways, finance and towns', 'It ended overseas trade', 'It replaced all other employment'], answer: 1, explanation: 'The opening links wool exports with transport, banking, stores, towns and jobs.' },
      { prompt: 'Why does the passage discuss dispossession?', options: ['To show that economic growth also imposed costs on Aboriginal peoples', 'To claim First Nations people had no role in pastoral work', 'To prove wool had no economic value', 'To describe synthetic fibres'], answer: 0, explanation: 'The second paragraph places wealth creation beside disrupted Country, resistance and unequal labour conditions.' },
      { prompt: 'What is one purpose of traceability today?', options: ['To hide the wool’s origin', 'To eliminate fibre testing', 'To show buyers where and how wool was produced', 'To guarantee prices never change'], answer: 2, explanation: 'Traceability can give buyers information about origin and production practices.' },
      { prompt: 'What approach to wool history does the author support?', options: ['Celebration without criticism', 'Rejection without investigation', 'Attention only to shearing technology', 'Analysis of benefits, costs and present change'], answer: 3, explanation: 'The conclusion asks readers to examine who benefited, who paid costs and how the industry adapts.' },
    ],
    writingPrompt: 'Write 140–180 words explaining how wool shaped modern Australia. Present both an economic contribution and a social cost, then explain why both belong in the history.',
    writingKeywords: ['wool', 'industry', 'land', 'labour', 'trade', 'history'],
    vocabulary: [
      { term: 'pastoral', definition: 'related to raising sheep or cattle on grazing land', example: 'The pastoral industry expanded across inland districts.' },
      { term: 'dispossession', definition: 'the act of taking land or property away from people', example: 'Colonial expansion caused dispossession from Country.' },
      { term: 'commodity', definition: 'a raw material or product that can be bought and sold', example: 'Wool became a valuable export commodity.' },
      { term: 'fluctuate', definition: 'to rise and fall irregularly', example: 'Global prices can fluctuate from year to year.' },
      { term: 'traceability', definition: 'the ability to track a product through its production journey', example: 'Traceability linked the jumper to its wool producer.' },
    ],
  },
  {
    id: 'pacific-climate-migration',
    theme: 'Australia',
    title: 'Pacific Island Climate Migration',
    dek: 'Climate mobility involves choice, justice and identity as well as movement across borders.',
    minutes: 18,
    passage: `Climate change affects Pacific Island countries in different ways. Sea-level rise can worsen coastal flooding and erosion, while salt water may enter freshwater supplies or gardens. Stronger extremes and changing rainfall can add pressure. Yet it is inaccurate to treat every island, community or household as facing the same future.

Movement can occur within a country, from an outer island to a larger town, or across an international border. It may be temporary, seasonal or permanent. People rarely move for one reason alone: work, education, family networks, housing and environmental risk can interact. The label climate refugee is often used in public debate, but it does not automatically give a person refugee status under current international refugee law.

Migration can help families adapt when people gain income, skills or safer housing. However, leaving can also create losses. Land, language, burial places and community responsibilities may be tied to a specific home. Relocation planned without community leadership can damage social connections even when new buildings are physically safer.

Pacific governments and communities have emphasised the importance of being able to remain safely where possible and to move with dignity when movement becomes necessary. Australia and New Zealand influence these choices through emissions, development partnerships and migration policies. Labour pathways can create opportunities, but they should not be presented as a complete substitute for reducing emissions or funding adaptation.

Good policy avoids portraying Pacific peoples as helpless victims or treating migration as an easy technical fix. It supports locally led adaptation, reliable services, disaster preparation and lawful mobility options. Most importantly, it listens to affected communities about timing, culture and priorities. Climate mobility is not only about where people will go; it is also about who has the power to decide.`,
    questions: [
      { prompt: 'Why does the author reject a single story about Pacific islands?', options: ['Climate change has no effects there', 'Countries and communities face different conditions and choices', 'Every household has already moved', 'Only rainfall can change'], answer: 1, explanation: 'The opening states that impacts and futures differ among islands, communities and households.' },
      { prompt: 'What does the passage say about the term climate refugee?', options: ['It guarantees legal refugee status', 'It is never used in public discussion', 'It does not automatically create status under current refugee law', 'It applies only to seasonal workers'], answer: 2, explanation: 'The second paragraph distinguishes common public language from the current legal definition.' },
      { prompt: 'Why can relocation cause loss?', options: ['New buildings are always less safe', 'Place can be tied to culture, identity and responsibilities', 'Families never value employment', 'Internal movement is impossible'], answer: 1, explanation: 'The passage links home with land, language, burial places and community obligations.' },
      { prompt: 'What does the conclusion identify as central to good policy?', options: ['Letting affected communities shape decisions', 'Using labour migration instead of climate action', 'Assuming everyone wants to leave', 'Choosing one solution for every country'], answer: 0, explanation: 'Locally led action and community power over timing, culture and priorities are the concluding principles.' },
    ],
    writingPrompt: 'Write 140–180 words arguing what role Australia should play in Pacific climate mobility. Include adaptation and migration, and explain how policy can protect community choice.',
    writingKeywords: ['Pacific', 'climate', 'migration', 'adaptation', 'community', 'choice'],
    vocabulary: [
      { term: 'erosion', definition: 'the gradual wearing away of land by water, wind or other forces', example: 'Coastal erosion threatened the road beside the beach.' },
      { term: 'mobility', definition: 'the ability or pattern of moving between places', example: 'Climate mobility can be temporary or permanent.' },
      { term: 'relocation', definition: 'the process of moving people or activities to another place', example: 'The community led planning for relocation.' },
      { term: 'dignity', definition: 'the state of being treated with respect and worth', example: 'The policy should allow families to move with dignity.' },
      { term: 'adaptation', definition: 'adjustment to actual or expected change and its effects', example: 'A stronger water system was part of climate adaptation.' },
    ],
  },
  {
    id: 'antarctic-research-stations',
    theme: 'Australia',
    title: 'Antarctic Research Stations',
    dek: 'Remote stations make long-term science possible through careful systems and cooperation.',
    minutes: 17,
    passage: `Antarctica is a difficult place to conduct research. Extreme cold, strong winds, long winter darkness and great distance from major cities make ordinary tasks complex. Research stations provide laboratories, accommodation, communications and power so that scientists and support teams can work for extended periods.

Australia operates the continental stations Casey, Davis and Mawson, as well as a station on subantarctic Macquarie Island. Research differs by place and season. Teams may study the atmosphere, ice, oceans, geology or living organisms. Long-running observations are especially valuable because they allow researchers to detect patterns that a short visit might miss.

A station depends on many kinds of work. Electricians, mechanics, doctors, cooks, communications specialists and tradespeople maintain the systems that keep research possible. Supplies and waste must be planned carefully, and equipment needs to survive conditions that can damage batteries, vehicles and instruments. During winter, small teams may be isolated for months, so selection, training and cooperation matter as much as technical skill.

Scientific activity can itself affect a fragile environment. Stations use energy, produce waste and disturb local areas. Antarctic programs therefore work under environmental rules established through the Antarctic Treaty system. Projects must assess impacts, prevent pollution and avoid unnecessary disturbance to wildlife. Removing old materials and improving energy efficiency can reduce a station's footprint, although operations cannot be impact-free.

Antarctic stations are sometimes imagined as heroic outposts, but their deeper value lies in patient, collective work. A reliable climate record may depend on someone checking an instrument through winter, while a safe expedition depends on people whose names never appear on a research paper. The station is not separate from the science: it is a carefully managed community and system that makes the science possible.`,
    questions: [
      { prompt: 'Why are long-running Antarctic observations valuable?', options: ['They remove the need for instruments', 'They reveal patterns missed by short visits', 'They make winter warmer', 'They study only one topic'], answer: 1, explanation: 'The passage says extended records can reveal changes and patterns not visible during a brief visit.' },
      { prompt: 'What does the third paragraph emphasise?', options: ['Scientists can operate without support workers', 'Stations depend on diverse practical and technical roles', 'Winter teams receive daily supplies', 'Equipment works normally in extreme cold'], answer: 1, explanation: 'Many specialist and support roles maintain the infrastructure, safety and daily life needed for research.' },
      { prompt: 'How do programs reduce environmental harm?', options: ['By ignoring station waste', 'By promising operations have no impact', 'By assessing effects and preventing pollution', 'By approaching wildlife for better photographs'], answer: 2, explanation: 'Environmental rules require impact assessment, pollution prevention and limited disturbance.' },
      { prompt: 'What is the main idea of the conclusion?', options: ['Heroic individuals matter more than systems', 'Research stations are tourist towns', 'Only published scientists contribute to knowledge', 'Collective station work is part of scientific success'], answer: 3, explanation: 'The author argues that science depends on the whole managed community, including often unseen work.' },
    ],
    writingPrompt: 'Write 140–180 words explaining which quality is most important for a successful Antarctic research station. Use evidence about science, safety and environmental responsibility.',
    writingKeywords: ['Antarctica', 'station', 'research', 'team', 'safety', 'environment'],
    vocabulary: [
      { term: 'extended', definition: 'continuing for a longer period of time', example: 'The team remained at the station for an extended period.' },
      { term: 'isolation', definition: 'the state of being far from other people or places', example: 'Winter isolation makes communication important.' },
      { term: 'fragile', definition: 'easily damaged or disturbed', example: 'Researchers took care in the fragile environment.' },
      { term: 'assess', definition: 'to examine something and judge its nature or effect', example: 'The program must assess the project’s environmental impact.' },
      { term: 'footprint', definition: 'the effect that an activity has on the environment', example: 'Efficient heating can reduce the station’s footprint.' },
    ],
  },
  {
    id: 'economics-food-waste',
    theme: 'Australia',
    title: 'The Economics of Food Waste',
    dek: 'Discarded food carries hidden costs from the farm to the household bin.',
    minutes: 16,
    passage: `When edible food is thrown away, the loss is larger than the price shown on a receipt. Farmers used land, water, energy and labour to produce it. Businesses paid to transport, cool, store and display it. A household spent time and money buying and preparing it. Disposal then creates another cost for councils, businesses or families.

Waste occurs for different reasons along the supply chain. Crops may be damaged by weather or rejected because buyers expect a particular appearance. Stores must make uncertain decisions about demand, while restaurants may serve portions larger than customers want. At home, people can forget what they own, misunderstand date labels or change meal plans.

Economics helps explain why apparently wasteful choices continue. A supermarket with empty shelves may lose customers, so it has an incentive to order extra stock. A restaurant may fear that smaller portions will seem poor value. A busy household may value convenience more than the small saving from using every leftover. The cost of waste is also divided: the person making a decision may not pay all the environmental or disposal costs.

Solutions work best when they target a cause rather than blaming one group. Better forecasting and flexible ordering can reduce excess stock. Clearer date information can help households distinguish food quality from safety advice. Smaller default servings with the option of more food may reduce plate waste. Donation can redirect suitable surplus, but it requires safe handling and should not replace preventing avoidable excess.

Food waste is therefore a design problem as well as a personal habit. Prices, contracts, packaging, portion sizes and information all influence behaviour. A fair response shares responsibility across producers, retailers, hospitality businesses, governments and households. The goal is not to save every item at any cost, but to use resources more intelligently before food becomes waste.`,
    questions: [
      { prompt: 'Why is wasted food worth more than its retail price?', options: ['Receipts include every environmental cost', 'Production, transport, labour and disposal also use resources', 'Waste makes farming free', 'Households never spend time preparing food'], answer: 1, explanation: 'The first paragraph traces resources and costs through production, purchase, preparation and disposal.' },
      { prompt: 'Why might a supermarket order extra stock?', options: ['Empty shelves may drive customers away', 'Extra stock can never spoil', 'Demand is perfectly predictable', 'Disposal has no cost'], answer: 0, explanation: 'The store balances possible waste against the risk of losing sales when shelves are empty.' },
      { prompt: 'What limitation of food donation does the passage identify?', options: ['Surplus food is never suitable', 'Donation requires no organisation', 'It needs safe handling and does not prevent excess', 'It increases every portion size'], answer: 2, explanation: 'Donation can redirect surplus but still requires safety systems and does not solve overproduction.' },
      { prompt: 'What does the author mean by calling waste a design problem?', options: ['Only packaging designers cause waste', 'Systems and incentives shape individual behaviour', 'Personal habits have no influence', 'Every discarded item should be saved'], answer: 1, explanation: 'The conclusion identifies prices, contracts, packaging, portions and information as forces that influence choices.' },
    ],
    writingPrompt: 'Write 140–180 words proposing one practical way for a school to reduce food waste. Explain the economic incentives involved and address one possible drawback.',
    writingKeywords: ['food', 'waste', 'cost', 'school', 'incentive', 'resources'],
    vocabulary: [
      { term: 'supply chain', definition: 'the linked stages that produce and deliver a product', example: 'Food can be lost at several points in the supply chain.' },
      { term: 'forecasting', definition: 'using information to estimate what will happen', example: 'Better forecasting helped the cafe order enough bread.' },
      { term: 'incentive', definition: 'something that encourages a particular action', example: 'A discount created an incentive to buy the surplus meal.' },
      { term: 'surplus', definition: 'an amount greater than what is needed', example: 'The store donated suitable surplus food.' },
      { term: 'disposal', definition: 'the act or process of getting rid of something', example: 'The council pays for waste collection and disposal.' },
    ],
  },
];
