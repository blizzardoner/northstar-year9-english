export const australiaLessons2 = [
  {
    id: 'supermarkets-shape-choices',
    theme: 'Australia',
    title: 'How Supermarkets Shape Choices',
    dek: 'The design of a grocery store influences what shoppers notice, compare and buy.',
    minutes: 16,
    passage: `Walking into an Australian supermarket can feel like making hundreds of independent choices. Yet the building, shelves and promotions have already shaped what a shopper is likely to notice. Fresh produce often appears near the entrance, creating an impression of abundance. Everyday items such as milk may be placed farther inside, so customers pass many other products before reaching them.

Shelf position matters because people tend to notice items at eye level. Companies may pay for prominent locations or special displays at the end of aisles. Bright discount labels can also attract attention, even when a larger pack or a different brand offers better value per unit. At the checkout, small snacks are placed where waiting customers can make an unplanned purchase.

Supermarket influence is not automatically harmful. Clear signs can guide shoppers towards seasonal produce, lower-priced staples or products with useful nutrition information. Competition between brands can offer variety, while unit pricing allows customers to compare packages of different sizes. However, these tools help only when shoppers have time, confidence and enough money to act on the information.

Location shapes choice too. A regional town may have one major supermarket and limited public transport. In some remote communities, distance and freight costs can reduce the range of affordable fresh food. These circumstances differ across Australia, so a single solution will not suit every place.

Understanding store design does not remove personal responsibility, but it shows that choice happens within an environment. A careful shopper can use a list, compare unit prices and pause before accepting a promotion. Governments and retailers can also make that environment clearer and fairer.`,
    questions: [
      { prompt: 'Why are everyday items sometimes placed deep inside a supermarket?', options: ['To keep them colder', 'To make shoppers pass other products', 'To reduce delivery costs', 'To separate them from fresh food'], answer: 1, explanation: 'The passage says customers pass many other products while walking to everyday items.' },
      { prompt: 'What does unit pricing help customers do?', options: ['Find the brightest label', 'Avoid every promoted product', 'Compare different package sizes', 'Choose only local brands'], answer: 2, explanation: 'Unit pricing makes value comparisons possible when packages contain different amounts.' },
      { prompt: 'Which factor may restrict choice in regional or remote places?', options: ['Too many checkout displays', 'Distance and freight costs', 'Excessive competition', 'Produce near the entrance'], answer: 1, explanation: 'The fourth paragraph identifies distance, transport and freight costs as limits.' },
      { prompt: 'What is the passage’s main argument?', options: ['Supermarkets completely control every purchase', 'Store design influences choices, but people and institutions can respond', 'Discounts always provide the best value', 'All Australian communities need the same shopping policy'], answer: 1, explanation: 'The conclusion balances personal strategies with fairer action by retailers and governments.' },
    ],
    writingPrompt: 'Write 140–180 words arguing for one change that would help supermarket customers make better choices. Use evidence from the passage and address one possible objection.',
    writingKeywords: ['supermarket', 'choice', 'pricing', 'promotion', 'shopper', 'fairness'],
    vocabulary: [
      { term: 'prominent', definition: 'easy to notice or important', example: 'The cereal occupied a prominent shelf at eye level.' },
      { term: 'unit pricing', definition: 'a price shown for a standard amount of a product', example: 'Unit pricing revealed which rice packet offered better value.' },
      { term: 'seasonal', definition: 'available or typical during a particular time of year', example: 'Seasonal fruit can be plentiful in summer.' },
      { term: 'freight', definition: 'goods transported in bulk or the cost of transporting them', example: 'Long freight routes can increase food prices.' },
      { term: 'responsibility', definition: 'a duty to make decisions or take action', example: 'Retailers have a responsibility to display prices clearly.' },
    ],
  },
  {
    id: 'ethical-fashion',
    theme: 'Australia',
    title: 'Ethical Fashion',
    dek: 'A low price can hide environmental and human costs across a clothing supply chain.',
    minutes: 17,
    passage: `A cheap T-shirt may look simple, but its journey is complex. Cotton might be grown in one country, spun into thread in another, dyed elsewhere and sewn in a large factory before arriving in an Australian shop. At each stage, workers, water, energy and chemicals contribute to the final product. Ethical fashion asks shoppers and companies to consider these hidden effects rather than judging clothing only by price and appearance.

Labour conditions are one concern. Garment workers may face low pay, unsafe buildings or excessive hours, especially where laws are weak or poorly enforced. A brand can publish a code of conduct, but a promise is not the same as evidence. Independent inspections, public supplier lists and ways for workers to report problems can make accountability stronger.

Environmental effects are also spread across the supply chain. Growing fibres can require land and water, dyeing can pollute waterways, and synthetic clothes may release tiny plastic fibres during washing. Frequent production of short-lived styles adds to waste. Donating unwanted clothing helps only partly, because charities receive more items than they can sell locally.

Consumers can respond by buying fewer garments, choosing durable items, repairing damage and using second-hand markets. However, responsibility should not fall entirely on individuals. Ethical products can cost more, and labels can be confusing. Companies control design and sourcing, while governments can set rules about truthful claims, waste and workplace standards.

No garment is impact-free. The practical goal is improvement: asking how long an item will last, whether claims can be checked and who carries the cost of a low price.`,
    questions: [
      { prompt: 'Why is a company code of conduct insufficient by itself?', options: ['It makes clothing too durable', 'A promise needs supporting evidence', 'Workers cannot read it', 'It applies only to shoppers'], answer: 1, explanation: 'The passage contrasts promises with inspections, supplier lists and reporting systems.' },
      { prompt: 'Why does donating clothing solve only part of the waste problem?', options: ['Charities may receive more than they can sell', 'Second-hand clothing uses extra cotton', 'Donations are illegal overseas', 'All donated clothes are synthetic'], answer: 0, explanation: 'The third paragraph states that charities often receive excess donated items.' },
      { prompt: 'Which action is mainly controlled by companies?', options: ['Repairing a torn sleeve', 'Buying at a second-hand market', 'Choosing product design and suppliers', 'Washing clothes less often'], answer: 2, explanation: 'The passage assigns design and sourcing decisions to companies.' },
      { prompt: 'What position does the author take?', options: ['Only consumers are responsible', 'Every garment can be impact-free', 'Shared responsibility can reduce hidden costs', 'Low prices prove that production is efficient'], answer: 2, explanation: 'The author distributes responsibility among consumers, businesses and governments.' },
    ],
    writingPrompt: 'Write 140–180 words arguing whether Australian clothing brands should publish full supplier lists. Use evidence from the passage and respond to one concern about the proposal.',
    writingKeywords: ['fashion', 'supplier', 'worker', 'evidence', 'brand', 'accountability'],
    vocabulary: [
      { term: 'supply chain', definition: 'the connected stages used to make and deliver a product', example: 'The shirt passed through a global supply chain.' },
      { term: 'accountability', definition: 'the obligation to explain and accept responsibility for actions', example: 'Public reports can improve company accountability.' },
      { term: 'synthetic', definition: 'made through a chemical process rather than from natural material', example: 'The synthetic jacket was made from polyester.' },
      { term: 'durable', definition: 'able to last through wear or damage', example: 'A durable school bag may be used for years.' },
      { term: 'sourcing', definition: 'the process of obtaining materials or products', example: 'Responsible sourcing includes checking factory conditions.' },
    ],
  },
  {
    id: 'housing-density-matters',
    theme: 'Australia',
    title: 'Why Housing Density Matters',
    dek: 'How and where homes are built affects transport, services, affordability and daily life.',
    minutes: 17,
    passage: `Australian cities are growing, and new residents need places to live. One response is to spread detached houses across the urban edge. Another is to build more homes within established areas through townhouses, terraces and apartments. This second approach increases housing density: the number of homes or people within a given area.

Density can make public transport and local businesses more practical. When more people live near a train station or shopping street, frequent services have a larger group of potential users. Shorter distances may allow some residents to walk or cycle. Building within existing suburbs can also reduce pressure to clear bushland or farmland at the city fringe.

However, density is not simply a matter of adding tall buildings. Poorly designed apartments may overheat, lack storage or offer little access to trees and shared space. Existing schools, drainage systems and health services can become crowded if population growth is not matched by investment. Neighbours may also worry about lost sunlight, privacy or local character.

Good planning therefore asks both how many homes are built and what kind of neighbourhood they create. Medium-density housing near transport can provide family-sized options without requiring a tower. Rules can protect natural light, ventilation and accessible open space. Councils can plan libraries, parks and safer streets alongside development rather than after problems appear.

Debates about density often become a choice between unlimited towers and endless suburban spread. That is a false choice. Different areas need different designs, developed with local evidence and community input. Density matters because housing decisions shape not only a skyline but also daily travel, public costs and access to opportunity.`,
    questions: [
      { prompt: 'How can greater density support public transport?', options: ['It eliminates the need for stations', 'It places more potential users near services', 'It makes every journey shorter', 'It moves residents to the city edge'], answer: 1, explanation: 'More nearby residents can support frequent transport by increasing potential use.' },
      { prompt: 'What risk arises when infrastructure does not grow with population?', options: ['Bushland expands', 'Apartments become detached houses', 'Schools and services become crowded', 'Local shops gain customers'], answer: 2, explanation: 'The third paragraph warns that services can be placed under pressure.' },
      { prompt: 'Which example reflects the author’s preferred planning approach?', options: ['Towers in every suburb', 'Homes without shared space', 'Medium-density housing near transport', 'Growth without community input'], answer: 2, explanation: 'The fourth paragraph presents well-designed medium density near transport as one useful option.' },
      { prompt: 'Why does the author call the usual debate a false choice?', options: ['No city needs more housing', 'Only detached houses are affordable', 'Options exist between unlimited towers and outward spread', 'All neighbourhoods should use one design'], answer: 2, explanation: 'The conclusion argues for varied local solutions rather than two extremes.' },
    ],
    writingPrompt: 'Write 140–180 words recommending how your local area should accommodate more homes. Use evidence from the passage and address one concern from existing residents.',
    writingKeywords: ['housing', 'density', 'transport', 'services', 'design', 'neighbourhood'],
    vocabulary: [
      { term: 'density', definition: 'the amount of people or things within an area', example: 'Housing density increased near the railway station.' },
      { term: 'established', definition: 'existing for a long enough time to be recognised', example: 'The established suburb already had shops and schools.' },
      { term: 'infrastructure', definition: 'basic systems and facilities that support a community', example: 'New infrastructure included drains, paths and classrooms.' },
      { term: 'ventilation', definition: 'the movement of fresh air through a space', example: 'Cross-ventilation helped cool the apartment.' },
      { term: 'accommodate', definition: 'to provide enough room or support for something', example: 'The plan must accommodate a growing population.' },
    ],
  },
  {
    id: 'future-work-experience',
    theme: 'Australia',
    title: 'The Future of Work Experience',
    dek: 'Short workplace placements must change as jobs, technology and access change.',
    minutes: 16,
    passage: `For many Australian students, work experience means spending several days in a workplace to observe employees and try supervised tasks. A placement can reveal routines that are invisible from a classroom. Students may learn how teams communicate, how safety rules operate and which skills a job actually requires. They may also discover that an appealing career is not a good personal fit.

The model has weaknesses. Opportunities often depend on family contacts, transport and the number of employers nearby. A student in a regional area may have fewer industries to choose from, while a student with disability may encounter an inaccessible workplace. Some placements offer meaningful participation; others give students little more than photocopying or passive observation.

Work is changing as digital tools, automation and hybrid schedules alter many roles. Future programs could combine short visits with virtual meetings, online projects and mentoring. A student interested in engineering might tour a local site, then collaborate remotely on a design challenge. Virtual access can widen choices, but it cannot reproduce every physical task or informal workplace interaction.

Quality matters more than novelty. Before a placement, students need clear goals and safety information. Employers need guidance about suitable tasks, supervision and feedback. Afterwards, students should reflect on what they observed, including the less obvious capabilities involved: reliability, listening, problem-solving and asking for help.

Work experience should not force teenagers to choose a permanent career. Its value lies in testing assumptions and connecting school learning with real responsibilities. A flexible program can widen access, but only if schools check that every student receives purposeful work rather than simply occupying a workplace for a week.`,
    questions: [
      { prompt: 'What is one benefit of work experience?', options: ['It guarantees a future job', 'It reveals workplace routines and skills', 'It removes the need for school subjects', 'It lets students work without supervision'], answer: 1, explanation: 'The opening paragraph describes learning about communication, safety and job skills.' },
      { prompt: 'Why are opportunities unequal?', options: ['Every employer offers the same tasks', 'Access can depend on contacts, transport and location', 'Virtual work is compulsory', 'Students always choose nearby careers'], answer: 1, explanation: 'The second paragraph identifies contacts, transport, disability access and local industries.' },
      { prompt: 'What limitation of virtual access does the author identify?', options: ['It cannot widen career choices', 'It requires no planning', 'It cannot reproduce every physical or informal experience', 'It prevents design projects'], answer: 2, explanation: 'The passage notes that some tasks and interactions cannot be recreated online.' },
      { prompt: 'What should determine whether a placement is successful?', options: ['How modern the technology looks', 'Whether it leads to a permanent career choice', 'Whether the student receives purposeful experience', 'How much photocopying is completed'], answer: 2, explanation: 'The conclusion prioritises meaningful, purposeful work for every student.' },
    ],
    writingPrompt: 'Write 140–180 words proposing a fair work-experience program for Year 9 students. Include two features, use evidence from the passage and address one limitation.',
    writingKeywords: ['work', 'experience', 'access', 'student', 'employer', 'purposeful'],
    vocabulary: [
      { term: 'placement', definition: 'a temporary position arranged for learning or experience', example: 'Her placement was with a local architecture studio.' },
      { term: 'inaccessible', definition: 'difficult or impossible for someone to enter or use', example: 'A staircase made the office inaccessible to some visitors.' },
      { term: 'automation', definition: 'the use of technology to perform tasks with less human input', example: 'Automation changed how the warehouse sorted parcels.' },
      { term: 'mentoring', definition: 'guidance provided by a more experienced person', example: 'Online mentoring connected the student with a scientist.' },
      { term: 'purposeful', definition: 'having a clear and useful aim', example: 'The supervisor designed a purposeful research task.' },
    ],
  },
  {
    id: 'local-markets-resilient-towns',
    theme: 'Australia',
    title: 'Local Markets and Resilient Towns',
    dek: 'Markets can strengthen local connections, but resilience requires more than shopping locally.',
    minutes: 16,
    passage: `On a weekend morning, a local market can turn a quiet street or showground into a busy meeting place. Farmers, bakers, artists and repairers sell directly to customers, while community groups share information. The money spent does not remain entirely in town, but local businesses may reuse part of it through wages, supplies and services nearby.

Markets can also strengthen relationships. A grower can explain why a crop is scarce after heavy rain, and customers can give direct feedback about products. During disruption, these connections may help people identify alternative suppliers or share useful information. This ability to adapt and recover is one part of community resilience.

However, markets have limits. Stall fees, insurance, weather and food-safety requirements can make trading difficult. Opening for only a few hours may not suit people who work weekends or lack transport. Prices may be higher than at a large retailer because small producers cannot buy, manufacture or ship at the same scale. A market should not be treated as a complete solution to food access or regional employment.

Councils can support markets by providing shade, water, accessible paths, clear permits and affordable sites. Organisers can accept different payment methods and publish transport information. They can also balance visitors’ interests with residents’ needs by managing traffic and waste.

A resilient town needs diverse businesses, reliable services, emergency planning and strong social networks. A local market can contribute to that mix by creating low-risk space for small enterprises and regular contact between residents. Its deepest value may not be a single sale, but the web of knowledge and trust built over time.`,
    questions: [
      { prompt: 'How might market spending benefit a town?', options: ['All money stays permanently in town', 'Businesses may spend some revenue locally', 'Markets replace every major retailer', 'Customers avoid paying for services'], answer: 1, explanation: 'The passage carefully says that part of the money may circulate through local wages and supplies.' },
      { prompt: 'What does resilience mean in the second paragraph?', options: ['Keeping prices unchanged', 'Avoiding all outside suppliers', 'Adapting and recovering during disruption', 'Opening markets every day'], answer: 2, explanation: 'The passage directly links resilience with the ability to adapt and recover.' },
      { prompt: 'Which barrier can affect sellers?', options: ['Too many permanent shops', 'Stall fees and insurance', 'Free freight for small producers', 'A lack of customer feedback'], answer: 1, explanation: 'Fees, insurance, weather and safety requirements are listed as trading challenges.' },
      { prompt: 'What is the author’s overall view of local markets?', options: ['They are useless without low prices', 'They alone create regional resilience', 'They contribute to resilience as part of a wider system', 'They should serve tourists instead of residents'], answer: 2, explanation: 'The conclusion presents markets as one element alongside services, planning and diverse businesses.' },
    ],
    writingPrompt: 'Write 140–180 words arguing whether your council should support a regular local market. Use evidence from the passage and propose one way to improve access.',
    writingKeywords: ['market', 'local', 'resilience', 'business', 'access', 'community'],
    vocabulary: [
      { term: 'enterprise', definition: 'a business or organised project', example: 'The weekend stall helped a small enterprise test its products.' },
      { term: 'disruption', definition: 'an interruption that prevents normal activity', example: 'Flooding caused disruption to regional deliveries.' },
      { term: 'resilience', definition: 'the capacity to adapt and recover after difficulty', example: 'Diverse suppliers improved the town’s resilience.' },
      { term: 'permit', definition: 'official permission to carry out an activity', example: 'The organiser applied for a permit to use the park.' },
      { term: 'diverse', definition: 'including a variety of different types', example: 'A diverse economy is not dependent on one industry.' },
    ],
  },
  {
    id: 'value-public-parks',
    theme: 'Australia',
    title: 'The Value of Public Parks',
    dek: 'Shared green spaces provide benefits that are easy to enjoy but difficult to price.',
    minutes: 15,
    passage: `A public park may look like land that has not been developed, yet it performs many kinds of work. Trees provide shade and cool nearby surfaces. Soil absorbs some stormwater, while plants offer habitat for insects and birds. Paths, courts and lawns create places for exercise, play and rest without requiring every visitor to buy something.

Parks also support social life. Neighbours may meet repeatedly at a playground or while walking a dog, gradually building familiarity and trust. Festivals and sports bring larger groups together. These uses can reduce isolation, but they can also compete. A quiet garden, a football match and an outdoor concert create different levels of noise, movement and wear.

Access is not equal simply because entry is free. A park may be difficult to reach without a car, unsafe to cross to, or unusable for someone when paths and toilets are inaccessible. Shade, seating, lighting and maintenance influence who can stay comfortably. In hotter Australian communities, a treeless field may offer little relief during the hours when people most need outdoor space.

Councils face pressure to use valuable land for housing or commercial activity. Development can provide genuine benefits, so protecting every open area without examination is not sensible. The question is whether decision-makers count the services a park provides and whether another site can meet the same needs.

Good park planning begins with evidence and community knowledge. Usage counts show patterns, while conversations reveal why some people stay away. A valuable park is not necessarily the largest or most decorative. It is one that supports local needs, protects environmental functions and remains genuinely welcoming to different users.`,
    questions: [
      { prompt: 'Which environmental function do parks provide?', options: ['They prevent all flooding', 'Their soil can absorb some stormwater', 'They remove the need for habitats', 'Their paths create rainfall'], answer: 1, explanation: 'The first paragraph states that park soil can absorb some stormwater.' },
      { prompt: 'Why can park uses conflict?', options: ['All visitors want silence', 'Different activities create different noise and wear', 'Entry fees exclude athletes', 'Parks cannot host social events'], answer: 1, explanation: 'The second paragraph contrasts quiet, sporting and festival uses.' },
      { prompt: 'Why does free entry not guarantee equal access?', options: ['Visitors must buy food', 'Barriers in transport and design may remain', 'Every park lacks trees', 'Councils ban public transport'], answer: 1, explanation: 'The passage identifies roads, transport, paths, toilets, shade and seating as access factors.' },
      { prompt: 'What should planners do before changing park land?', options: ['Count only its sale price', 'Reject every possible development', 'Assess its services and community needs', 'Add decorative features first'], answer: 2, explanation: 'The final paragraphs argue for evidence about environmental and community functions.' },
    ],
    writingPrompt: 'Write 140–180 words recommending one improvement to a public park you know or can imagine. Explain who would benefit and address one competing use or cost.',
    writingKeywords: ['park', 'access', 'shade', 'community', 'benefit', 'public'],
    vocabulary: [
      { term: 'habitat', definition: 'the natural home or environment of a plant or animal', example: 'Native shrubs created habitat for small birds.' },
      { term: 'isolation', definition: 'the state of being separated from other people or places', example: 'Regular gatherings can reduce social isolation.' },
      { term: 'inaccessible', definition: 'not able to be reached, entered or used', example: 'A steep path made the playground inaccessible to some families.' },
      { term: 'commercial', definition: 'connected with business or making money', example: 'The council considered a commercial use for the site.' },
      { term: 'function', definition: 'the purpose or work performed by something', example: 'Cooling the street is one function of mature trees.' },
    ],
  },
  {
    id: 'water-sensitive-urban-design',
    theme: 'Australia',
    title: 'Water-Sensitive Urban Design',
    dek: 'Cities can treat rain as a resource while reducing pollution and flood pressure.',
    minutes: 18,
    passage: `In a natural landscape, rain can soak into soil, collect in wetlands or move slowly towards creeks. In a city, roofs, roads and car parks create hard surfaces that water cannot easily enter. Rain runs rapidly into drains, carrying litter, oil, soil and other pollutants. During intense storms, large volumes can also place pressure on drainage systems.

Water-sensitive urban design aims to make the urban water cycle more like a natural one. A rain garden is a planted, lowered area that receives runoff from a street or roof. Water pauses there and filters through layers of plants and soil. Permeable paving allows some rain to pass through gaps, while tanks can store roof water for gardens or toilet flushing.

These features can reduce pollution, support vegetation and lessen demand for treated drinking water. They may also cool streets and create habitat. However, no single rain garden can prevent every flood. Systems must be designed for local soils, rainfall and available space, with safe overflow routes for major storms.

Maintenance is essential. Sediment can block surfaces, rubbish can collect, and neglected plants can die. Responsibility must be clear: a council, property owner or body corporate needs funding and knowledge to inspect and repair each feature. Designs should also remain safe and accessible for pedestrians.

Australian cities face both water scarcity and periods of intense rain. Water-sensitive design does not remove this tension, but it offers a way to manage water as a connected system rather than as waste to be removed immediately. Its success depends on many modest features working together, supported by careful planning and long-term maintenance.`,
    questions: [
      { prompt: 'Why does rain move rapidly across cities?', options: ['Urban plants repel it', 'Hard surfaces prevent easy absorption', 'Drains create rainfall', 'Wetlands increase road runoff'], answer: 1, explanation: 'The opening paragraph explains that roofs, roads and car parks do not absorb water easily.' },
      { prompt: 'How does a rain garden work?', options: ['It pumps drinking water into streets', 'It stores all floodwater permanently', 'It slows and filters runoff through plants and soil', 'It replaces every drainage pipe'], answer: 2, explanation: 'Rain gardens receive runoff, pause its movement and filter it through planted soil.' },
      { prompt: 'Why are overflow routes necessary?', options: ['Plants need dry soil forever', 'Major storms may exceed a feature’s capacity', 'Permeable paving creates oil', 'Tanks cannot hold roof water'], answer: 1, explanation: 'The passage warns that individual features cannot contain every storm.' },
      { prompt: 'What is essential for long-term success?', options: ['Building features without assigning owners', 'Removing water as quickly as possible', 'Planning, shared systems and maintenance', 'Using one design in every soil type'], answer: 2, explanation: 'The final sections emphasise local design, clear responsibility and continuing maintenance.' },
    ],
    writingPrompt: 'Write 140–180 words proposing one water-sensitive feature for your school or street. Explain how it would work, its benefits and one maintenance requirement.',
    writingKeywords: ['water', 'rain', 'runoff', 'design', 'maintenance', 'pollution'],
    vocabulary: [
      { term: 'runoff', definition: 'water that flows over land or hard surfaces after rain', example: 'The rain garden collected runoff from the car park.' },
      { term: 'permeable', definition: 'allowing liquid to pass through', example: 'Permeable paving let water soak into the ground.' },
      { term: 'sediment', definition: 'small particles of soil or other material carried by water', example: 'Sediment collected beside the drain after the storm.' },
      { term: 'scarcity', definition: 'a shortage of something that is needed', example: 'Water scarcity can worsen during a long dry period.' },
      { term: 'overflow', definition: 'excess liquid that escapes when a container or system is full', example: 'The channel provided a safe route for overflow.' },
    ],
  },
  {
    id: 'indigenous-fire-knowledge',
    theme: 'Australia',
    title: 'Indigenous Fire Knowledge',
    dek: 'First Nations fire practices are place-based systems of knowledge, responsibility and care.',
    minutes: 18,
    passage: `Aboriginal and Torres Strait Islander peoples have cared for Country over countless generations. In many places, this care has included carefully timed, low-intensity burning. The purposes and methods are not identical across Australia. They depend on the particular Country, its plants and animals, seasonal signs, cultural responsibilities and the knowledge held by Traditional Owners.

A cool burn may move slowly through selected ground vegetation, creating a patchwork of areas burned at different times. In suitable places, this can reduce some fuel, protect large trees and support particular habitats or food resources. A patchwork can also give animals nearby places to shelter. These outcomes depend on decisions about when, where and whether to burn; fire is not automatically beneficial.

Colonisation disrupted access to Country and the transfer and practice of knowledge. Government fire management often relied on different schedules and priorities. Today, some First Nations ranger groups and Traditional Owners are leading cultural burning programs, sometimes working with land agencies, scientists and local fire services. These partnerships can combine tools such as weather data and mapping with detailed cultural and ecological knowledge.

Respectful collaboration requires more than copying a technique. Knowledge belongs to communities, and permission, authority and cultural protocols matter. A practice suitable for one ecosystem may be unsafe or ineffective elsewhere. Programs also need long-term relationships rather than inviting First Nations advice only after decisions have been made.

Indigenous fire knowledge should not be presented as one universal recipe or as a replacement for all other fire planning. It offers living, place-based approaches that can strengthen care for Country when the right knowledge holders lead decisions and when local conditions are carefully understood.`,
    questions: [
      { prompt: 'Why do cultural burning practices vary across Australia?', options: ['Fire behaves identically everywhere', 'Methods depend on Country, seasons and community knowledge', 'Traditional Owners use one national schedule', 'Only weather data affects decisions'], answer: 1, explanation: 'The opening paragraph stresses local Country, species, signs, responsibilities and knowledge.' },
      { prompt: 'What can a suitable patchwork burn provide?', options: ['A guarantee against every bushfire', 'Shelter areas near recently burned ground', 'The removal of all large trees', 'Identical habitat across a landscape'], answer: 1, explanation: 'Areas burned at different times can leave nearby shelter for animals.' },
      { prompt: 'How did colonisation affect Indigenous fire knowledge?', options: ['It increased access to Country', 'It ended all ecological change', 'It disrupted access, practice and knowledge transfer', 'It created one shared method'], answer: 2, explanation: 'The third paragraph explicitly describes disruption to Country and knowledge practice.' },
      { prompt: 'What makes collaboration respectful?', options: ['Copying a technique without permission', 'Using the same plan in every ecosystem', 'Leadership, authority, protocols and long-term relationships', 'Seeking advice only after decisions'], answer: 2, explanation: 'The final sections emphasise community authority, permission, protocols and continuing partnership.' },
    ],
    writingPrompt: 'Write 140–180 words explaining principles that should guide a land agency working with First Nations communities on fire management. Use evidence from the passage.',
    writingKeywords: ['Country', 'knowledge', 'fire', 'community', 'leadership', 'place-based'],
    vocabulary: [
      { term: 'Country', definition: 'in many First Nations contexts, lands, waters, skies and their living cultural relationships', example: 'Rangers cared for Country using knowledge held by their community.' },
      { term: 'low-intensity', definition: 'involving a relatively small amount of heat or energy', example: 'The low-intensity fire moved slowly through ground plants.' },
      { term: 'protocol', definition: 'an accepted rule or process for respectful action', example: 'The agency followed community protocols before sharing knowledge.' },
      { term: 'ecological', definition: 'relating to living things and their environment', example: 'The team observed ecological changes after the burn.' },
      { term: 'place-based', definition: 'shaped by the conditions and knowledge of a particular location', example: 'Cultural burning is place-based rather than a universal recipe.' },
    ],
  },
];
