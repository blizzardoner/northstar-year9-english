export const economicsLessons1 = [
  {
    id: 'why-prices-change',
    theme: 'Economics',
    title: 'Why Prices Change',
    dek: 'Prices move when supply, demand, costs and expectations alter the choices of buyers and sellers.',
    minutes: 16,
    passage: `The price of strawberries can be low one week and high the next. This does not usually mean that a shopkeeper changed the number at random. A market price reflects decisions made by many buyers and sellers. Demand is the amount consumers are willing and able to buy at different prices. Supply is the amount producers are willing and able to sell.

Suppose warm weather produces a large strawberry harvest. More punnets reach the market, so sellers may lower prices to clear them before the fruit spoils. If floods then damage farms and roads, supply may fall. With fewer punnets available, buyers compete for the remaining fruit and the price may rise. Demand can shift too. A popular recipe might encourage more people to buy strawberries, while a cheaper substitute, such as apples, may reduce demand.

Costs also matter. Farmers pay for labour, water, fertiliser, packaging and transport. If fuel becomes dearer, moving produce to supermarkets costs more. A business may raise its price, accept a smaller profit or find another saving. Competition limits these choices because customers can compare sellers. Expectations influence behaviour as well: a wholesaler expecting a shortage may order early, adding pressure before the shortage arrives.

Price changes carry information. A higher price can signal scarcity and encourage consumers to buy less or producers to grow more. However, a price does not explain why something changed, and it does not guarantee fairness. Essential goods can become unaffordable for low-income households even when the market is operating normally.

To understand a price movement, economists ask what happened to supply, demand, costs and competition. No single explanation fits every case. The useful question is not simply whether a price rose or fell, but which decisions and conditions shifted behind it.`,
    questions: [
      { prompt: 'Why might a large strawberry harvest lower prices?', options: ['More fruit must be sold before it spoils', 'Demand always disappears in warm weather', 'Transport becomes illegal during harvest', 'Farmers stop supplying every shop'], answer: 0, explanation: 'The second paragraph explains that abundant, perishable fruit increases supply and encourages sellers to clear stock.' },
      { prompt: 'How can a cheaper substitute affect demand for strawberries?', options: ['It must increase farming costs', 'It can lead some buyers to choose the substitute instead', 'It makes every strawberry spoil', 'It prevents prices from ever changing'], answer: 1, explanation: 'The passage uses cheaper apples as an alternative that may reduce demand for strawberries.' },
      { prompt: 'What choice might a business face when fuel costs rise?', options: ['Ignore all transport expenses', 'Guarantee that customers buy more', 'Raise its price, reduce profit or save elsewhere', 'Remove every competitor from the market'], answer: 2, explanation: 'The third paragraph lists these possible responses to higher production or transport costs.' },
      { prompt: 'What limitation of prices does the passage identify?', options: ['They cannot change when supply changes', 'They always reveal the full cause of a change', 'They guarantee that essentials are affordable', 'They can signal scarcity without ensuring fairness'], answer: 3, explanation: 'The fourth paragraph says prices convey information but may leave essential goods unaffordable.' },
    ],
    writingPrompt: 'Write 140–180 words explaining why the price of one everyday product might change. Use supply, demand and costs, and explain one limitation of using price alone to judge the situation.',
    writingKeywords: ['price', 'supply', 'demand', 'cost', 'competition', 'scarcity'],
    vocabulary: [
      { term: 'demand', definition: 'the amount consumers are willing and able to buy at different prices', example: 'Demand for cold drinks increased during the heatwave.' },
      { term: 'supply', definition: 'the amount producers are willing and able to offer for sale', example: 'A strong harvest increased the supply of oranges.' },
      { term: 'substitute', definition: 'a product that can be used in place of another', example: 'Some shoppers chose rice as a substitute for pasta.' },
      { term: 'competition', definition: 'rivalry among sellers seeking customers', example: 'Competition encouraged the two shops to improve their service.' },
      { term: 'scarcity', definition: 'the condition in which available resources are limited compared with wants', example: 'Water scarcity increased after several dry years.' },
    ],
  },
  {
    id: 'true-cost-fast-furniture',
    theme: 'Economics',
    title: 'The True Cost of Fast Furniture',
    dek: 'A cheap table can carry hidden costs across materials, labour, transport and disposal.',
    minutes: 17,
    passage: `A flat-pack desk advertised at a very low price seems like a simple bargain. Its sticker price tells the buyer what to pay at the checkout, but not every cost created during its life. Economists sometimes distinguish between private costs, paid directly by buyers and businesses, and external costs, carried by other people or the environment.

Fast furniture is designed to be inexpensive, fashionable and quickly replaced. Large production runs and efficient packing can reduce manufacturing and transport costs. Lightweight panels also make delivery easier. These methods can give households access to useful furniture at prices they can afford. They may also support jobs in design, retail, warehousing and delivery.

However, low prices can create pressure elsewhere in the supply chain. Timber or minerals must be extracted, factories use energy, and workers assemble products. If a supplier underpays workers or pollution is not included in the sale price, part of the cost has been shifted away from the buyer. Long transport routes add emissions. A weak joint or surface that cannot be repaired may cause the item to be discarded while much of it is still usable.

The alternatives also involve trade-offs. A solid timber desk may last longer but cost more at first, use substantial material and remain unaffordable for some families. Second-hand furniture can extend a product's life, although buyers need time, transport and suitable local choices. Rental, repairable designs and take-back programs can help in some situations, but none removes all environmental impact.

A fuller comparison considers cost per year of use, expected durability, repair options, working conditions and disposal. Governments can set safety or waste rules, businesses can publish sourcing information, and consumers can compare products when reliable information exists. The aim is not to declare every cheap item bad or every costly item good. It is to recognise who pays each cost and to choose with a clearer view of the whole life of the product.`,
    questions: [
      { prompt: 'What is an external cost?', options: ['A cost carried by others or the environment', 'The number printed on a price tag', 'A discount given at the checkout', 'A payment made only by the buyer'], answer: 0, explanation: 'The opening defines external costs as impacts not paid directly by the buyer or business.' },
      { prompt: 'What benefit of fast furniture does the passage recognise?', options: ['It creates no waste at all', 'It can make useful items more affordable', 'It always lasts longer than solid furniture', 'It eliminates transport work'], answer: 1, explanation: 'The second paragraph notes that efficient production can provide furniture at prices more households can afford.' },
      { prompt: 'Why might cost per year of use be informative?', options: ['It ignores how long a product lasts', 'It proves expensive products are always best', 'It connects the purchase price with durability', 'It measures only factory wages'], answer: 2, explanation: 'The conclusion recommends comparing price with expected years of use rather than looking only at the initial payment.' },
      { prompt: 'Which judgement best matches the passage?', options: ['Every low-priced item is harmful', 'Second-hand goods have no costs', 'Price should be the only basis for choice', 'Products should be compared across their whole life and different impacts'], answer: 3, explanation: 'The final paragraph calls for a broad comparison without assuming that cheap or expensive automatically means better.' },
    ],
    writingPrompt: 'Write 140–180 words advising a household choosing between cheap new, durable new and second-hand furniture. Compare private and external costs, then justify a practical decision.',
    writingKeywords: ['furniture', 'cost', 'durability', 'repair', 'waste', 'choice'],
    vocabulary: [
      { term: 'private cost', definition: 'a cost paid directly by the person or business making a choice', example: 'The desk’s purchase price was a private cost for the family.' },
      { term: 'external cost', definition: 'a cost imposed on people or environments outside a transaction', example: 'Polluted water was an external cost of production.' },
      { term: 'supply chain', definition: 'the linked stages and organisations involved in making and delivering a product', example: 'The company traced timber through its supply chain.' },
      { term: 'durability', definition: 'the ability to remain useful and in good condition over time', example: 'Strong joints improved the chair’s durability.' },
      { term: 'trade-off', definition: 'a balance in which gaining one benefit requires accepting another cost', example: 'The heavier desk involved a trade-off between strength and easy transport.' },
    ],
  },
  {
    id: 'cooperatives-share-ownership',
    theme: 'Economics',
    title: 'How Cooperatives Share Ownership',
    dek: 'Member-owned organisations combine economic activity with shared control and responsibility.',
    minutes: 16,
    passage: `Most businesses are owned by an individual, a family, partners or shareholders. A cooperative uses a different structure: it is owned by members who use, work in or supply the organisation. Members might be dairy farmers processing milk together, workers running a shop, residents sharing housing, or customers using a community bank.

The rules vary, but many cooperatives follow the principle of one member, one vote. This differs from a company where voting power often depends on the number of shares owned. Members elect a board and can influence major decisions. Any surplus may be kept for future investment, placed in reserves or returned to members according to their participation rather than simply their invested wealth.

Shared ownership can solve practical problems. Small producers may combine their output to negotiate with large buyers, purchase equipment or market a common brand. Workers may gain a stronger voice over conditions. Consumers can establish a service that private investors do not expect to make highly profitable. Because the members benefit from the service, they may support goals beyond a quick financial return.

Cooperatives still face economic pressures. They must cover costs, attract capable managers and adapt when customers' needs change. Democratic decisions can take time, and members may disagree about whether to lower prices, raise wages, distribute a surplus or invest it. Raising large amounts of capital can also be harder if outside investors receive limited control.

The structure therefore changes incentives; it does not guarantee success or harmony. Clear rules, accurate accounts and active member participation are essential. Some cooperatives grow into major enterprises, while others remain small or close. Their significance lies in offering another way to organise ownership: the people connected to an enterprise can share its benefits, risks and decisions. Whether that model suits a particular activity depends on what members need and how effectively they govern it.`,
    questions: [
      { prompt: 'Who owns a cooperative?', options: ['Only the government', 'Members connected to its work or services', 'Any customer at a competing business', 'A manager with no members'], answer: 1, explanation: 'The opening says cooperatives are owned by members who use, work in or supply the organisation.' },
      { prompt: 'How does one member, one vote differ from typical shareholder voting?', options: ['Voting power does not usually increase with the amount invested', 'No member can vote on decisions', 'Managers receive every vote', 'Members must own identical houses'], answer: 0, explanation: 'The second paragraph contrasts equal member votes with voting power based on share ownership.' },
      { prompt: 'Why might small producers form a cooperative?', options: ['To avoid selling any output', 'To remove the need for accounts', 'To combine scale and negotiate with larger buyers', 'To guarantee agreement on every issue'], answer: 2, explanation: 'The passage explains that producers can pool output, equipment and marketing power.' },
      { prompt: 'What challenge can shared decision-making create?', options: ['Decisions may take time when members have different priorities', 'A cooperative never needs capital', 'Members cannot elect a board', 'Economic costs automatically disappear'], answer: 0, explanation: 'The fourth paragraph notes that democratic decisions can be slower and priorities may conflict.' },
    ],
    writingPrompt: 'Write 140–180 words evaluating whether a group of local food producers should form a cooperative. Explain two possible benefits, one challenge and the importance of governance.',
    writingKeywords: ['cooperative', 'member', 'ownership', 'vote', 'surplus', 'governance'],
    vocabulary: [
      { term: 'cooperative', definition: 'an organisation owned and controlled by members who share its services or work', example: 'Several growers formed a cooperative to package their fruit.' },
      { term: 'surplus', definition: 'money remaining after an organisation has paid its costs', example: 'Members voted to invest the surplus in new equipment.' },
      { term: 'reserve', definition: 'money kept aside for future needs or unexpected costs', example: 'The cooperative used its reserve after a machine failed.' },
      { term: 'capital', definition: 'money or other assets used to establish and operate an enterprise', example: 'The members needed capital to purchase a cool room.' },
      { term: 'governance', definition: 'the rules and processes used to direct and oversee an organisation', example: 'Transparent governance helped members trust the board.' },
    ],
  },
  {
    id: 'economics-of-repair',
    theme: 'Economics',
    title: 'The Economics of Repair',
    dek: 'Repair decisions depend on price, time, skills, design and the value of keeping products in use.',
    minutes: 17,
    passage: `When a toaster, phone or bicycle breaks, its owner faces a choice: repair it, replace it or go without it. The cheapest option is not always obvious. A repair has a quoted price, but the owner may also spend time finding a technician, waiting for parts and travelling without the item. Replacement has costs too, including transferring data, learning a new device and disposing of the old one.

Whether repair is worthwhile depends partly on design. Screws and replaceable parts can make a product easier to open and fix. Glue, unusual tools or software locks can make the same task costly. Manufacturers may stop supplying parts or updates before the physical product wears out. Independent repairers need manuals, diagnostic information and access to components, as well as the skills to use them safely.

Markets for repair can be difficult to sustain. A technician must charge enough to cover labour, rent, tools and training. New products made in large automated factories may be sold for less than several hours of local skilled work. Customers may then choose replacement, reducing demand for repair services and making those services harder to find. This cycle can continue even when repair would use fewer new materials.

However, repair is not automatically the best choice. A damaged electrical item may be unsafe. An old appliance may use much more energy than an efficient replacement, and repeated faults can become expensive. A repair decision should consider likely remaining life, safety, energy use, warranty and whether the item still meets the user's needs.

Policies such as longer guarantees, spare-parts requirements or repair information can change the calculation, but they may also add costs for producers and buyers. Repair cafés and tool libraries reduce some barriers by sharing knowledge and equipment. Good decisions compare the full costs and benefits rather than treating repair as either a moral duty or a waste of money.`,
    questions: [
      { prompt: 'Which hidden cost of replacement does the passage mention?', options: ['Transferring data or learning a new device', 'Receiving a free repair manual', 'Selling more spare parts', 'Reducing every energy bill'], answer: 0, explanation: 'The opening notes that replacement can require data transfer and time spent learning a new product.' },
      { prompt: 'How can product design affect repair?', options: ['All fasteners make repair impossible', 'Replaceable parts and screws can lower repair difficulty', 'Software never influences physical products', 'Manuals remove the need for skills'], answer: 1, explanation: 'The second paragraph contrasts accessible screws and parts with glue, special tools and software locks.' },
      { prompt: 'Why can local repair cost more than a new product?', options: ['Technicians have no business expenses', 'Factories always use more labour per item', 'Skilled local labour must cover time, tools and overheads', 'New products never benefit from large-scale production'], answer: 2, explanation: 'The third paragraph compares paid skilled repair hours with low unit costs from automated mass production.' },
      { prompt: 'When might replacement be reasonable?', options: ['Whenever an item has one loose screw', 'When repair creates no waiting time', 'Only when advertising recommends it', 'When safety, repeated faults or energy use outweigh repair benefits'], answer: 3, explanation: 'The fourth paragraph identifies safety, efficiency and repeated failures as relevant reasons to replace.' },
    ],
    writingPrompt: 'Write 140–180 words advising whether a household should repair or replace a broken appliance. Compare money, time, safety, energy use and remaining product life.',
    writingKeywords: ['repair', 'replace', 'labour', 'design', 'safety', 'cost'],
    vocabulary: [
      { term: 'diagnostic', definition: 'used to identify the cause of a fault or problem', example: 'The technician connected a diagnostic tool to the device.' },
      { term: 'component', definition: 'one part of a larger product or system', example: 'A failed component was replaced instead of the whole machine.' },
      { term: 'overhead', definition: 'an ongoing business cost not tied to one particular job', example: 'Workshop rent was part of the repairer’s overhead.' },
      { term: 'warranty', definition: 'a written promise to repair or replace a faulty product within stated conditions', example: 'The laptop repair was covered by its warranty.' },
      { term: 'guarantee', definition: 'an assurance that a product or service will meet specified standards', example: 'The longer guarantee gave buyers more protection.' },
    ],
  },
  {
    id: 'scarcity-shapes-choices',
    theme: 'Economics',
    title: 'Why Scarcity Shapes Choices',
    dek: 'Limited time, money and resources mean that every choice gives up another possibility.',
    minutes: 15,
    passage: `Scarcity does not mean that nothing is available. It means that resources are limited compared with all the uses people have for them. A student has only twenty-four hours in a day. A council has a finite budget. A drought-affected region has limited water. Because not every goal can be achieved at once, individuals and communities must choose.

Economists describe the next-best alternative given up as the opportunity cost. If a student spends Saturday working, the opportunity cost might be the sporting match they would otherwise attend. If a council uses a vacant site for a library, it cannot use that same land for a park. Opportunity cost includes more than money: time, convenience, enjoyment and future possibilities can all matter.

Choices often occur at the margin. Rather than asking whether to use any water at all, a household might ask whether one extra load of washing is worth the water it consumes. A school might consider the benefit of one additional music class compared with its extra staffing cost. Marginal thinking focuses attention on the effect of a small change.

Scarcity does not tell people what they should value. Two families with the same income may make different choices because their needs and priorities differ. Power also affects options. A wealthy household can respond to high electricity prices differently from a household already cutting essential spending. A choice may be voluntary in a formal sense while still being heavily constrained.

Technology, trade and cooperation can ease some limits. Better irrigation can produce more food with less water, and a shared library lets many people use the same books. Yet these solutions require resources and can create new trade-offs. Scarcity cannot be abolished; it can be managed more thoughtfully. Clear decisions identify the constraint, compare realistic alternatives and state who receives the benefits and bears the opportunity costs.`,
    questions: [
      { prompt: 'What does scarcity mean in economics?', options: ['No resource exists anywhere', 'Resources are limited compared with possible uses', 'Every person has the same income', 'Only money can be scarce'], answer: 1, explanation: 'The opening defines scarcity as limited resources in relation to the many goals they could serve.' },
      { prompt: 'What is the opportunity cost of a choice?', options: ['Every possible alternative added together', 'Only the cash price paid', 'The next-best alternative that is given up', 'A reward received without sacrifice'], answer: 2, explanation: 'The second paragraph directly defines opportunity cost as the next-best forgone option.' },
      { prompt: 'What does marginal thinking examine?', options: ['The effect of one small additional change', 'A choice with no consequences', 'Only decisions made by governments', 'Whether all use should stop forever'], answer: 0, explanation: 'The passage uses an extra load of washing and one additional class to illustrate small changes at the margin.' },
      { prompt: 'Why might equal incomes not produce equal choices?', options: ['Scarcity forces identical priorities', 'Needs, values and constraints can differ', 'Opportunity costs apply only to students', 'Technology removes every trade-off'], answer: 1, explanation: 'The fourth paragraph explains that circumstances and priorities shape how people choose.' },
    ],
    writingPrompt: 'Write 140–180 words analysing one scarce resource in a school or community. Compare two realistic uses, identify the opportunity cost and recommend a fair choice.',
    writingKeywords: ['scarcity', 'resource', 'choice', 'opportunity cost', 'alternative', 'constraint'],
    vocabulary: [
      { term: 'scarcity', definition: 'the condition of limited resources compared with possible uses', example: 'Scarcity required the town to prioritise its water use.' },
      { term: 'opportunity cost', definition: 'the next-best alternative given up when a choice is made', example: 'The opportunity cost of extra work was missing the concert.' },
      { term: 'finite', definition: 'limited in amount or having an end', example: 'The club had a finite budget for new equipment.' },
      { term: 'marginal', definition: 'relating to one additional unit or a small change', example: 'The council compared the marginal benefit of one more bus service.' },
      { term: 'constraint', definition: 'a limit that restricts available choices', example: 'Limited storage space was a constraint on the food bank.' },
    ],
  },
  {
    id: 'value-unpaid-care',
    theme: 'Economics',
    title: 'The Value of Unpaid Care',
    dek: 'Care given outside paid employment supports households and the wider economy, even when no price records it.',
    minutes: 17,
    passage: `Cooking dinner, helping a child with homework, supporting a person with disability and checking on an older relative all require time and skill. Much of this work is unpaid. Because no sale takes place, it is usually not counted directly in gross domestic product, or GDP, a common measure of marketed production. That absence can make care appear economically invisible.

Unpaid care nevertheless enables other activity. A parent may attend paid work because someone else looks after a young child. A recovering patient may leave hospital because a relative assists at home. Households would have to purchase some substitute services if carers stopped. Economists can estimate value by asking what it would cost to hire a worker for similar tasks, or what income a carer gives up. Each method produces a different estimate and cannot capture every emotional relationship.

The distribution of care matters. In Australia, as in many countries, women perform more unpaid care on average than men. People who spend long hours caring may reduce paid work, training or rest. This can affect current income, superannuation and future job opportunities. At the same time, many carers describe meaning, connection and responsibility in their role. Calling care economically valuable should not reduce a relationship to a wage calculation.

Policy choices shift costs between households, employers and government. Affordable child care, paid carers' leave, flexible work and reliable disability or aged-care services can expand choices. These measures require funding and careful design. Informal care will still remain important, and not every family wants the same arrangement.

Measuring unpaid care does not automatically decide which policy is best. It does correct an incomplete picture. An economy depends on both market transactions and the daily work that sustains people. Good decisions recognise carers' contribution, ask whether responsibilities and opportunities are shared fairly, and listen to the people receiving as well as providing care.`,
    questions: [
      { prompt: 'Why is much unpaid care not counted directly in GDP?', options: ['It requires no time or skill', 'It occurs without a market sale', 'It is always provided by government', 'It has no effect on paid work'], answer: 1, explanation: 'The opening explains that GDP commonly records marketed production, while unpaid care has no sale price.' },
      { prompt: 'How might economists estimate unpaid care?', options: ['By counting only hospital beds', 'By assuming every relationship is identical', 'By comparing replacement wages or income forgone', 'By excluding the carer’s time'], answer: 2, explanation: 'The second paragraph presents replacement cost and forgone income as two estimation methods.' },
      { prompt: 'What long-term effect can heavy caring responsibilities have?', options: ['They can reduce income, superannuation and job opportunities', 'They guarantee higher wages', 'They remove the need for rest', 'They ensure equal sharing of household work'], answer: 0, explanation: 'The third paragraph links reduced paid work and training to present and future economic outcomes.' },
      { prompt: 'What is the passage’s main conclusion?', options: ['Only paid activity supports the economy', 'One care arrangement suits every family', 'Measuring care determines one correct policy', 'Economic decisions should recognise care while respecting varied relationships and needs'], answer: 3, explanation: 'The conclusion supports recognition and fairness without reducing care to a single measure or policy.' },
    ],
    writingPrompt: 'Write 140–180 words explaining why unpaid care should be considered in economic decisions. Use evidence about measurement, opportunity and fairness, then discuss one policy response.',
    writingKeywords: ['care', 'unpaid', 'GDP', 'time', 'opportunity', 'fairness'],
    vocabulary: [
      { term: 'gross domestic product', definition: 'the total value of final goods and services produced in a country over a period', example: 'Unpaid household work is not directly included in gross domestic product.' },
      { term: 'forgo', definition: 'to give up or do without something', example: 'The carer chose to forgo several hours of paid work.' },
      { term: 'superannuation', definition: 'money saved and invested to provide income in retirement', example: 'Reduced working hours affected her superannuation balance.' },
      { term: 'informal care', definition: 'unpaid support provided through family or personal relationships', example: 'Informal care helped the patient manage daily tasks at home.' },
      { term: 'transaction', definition: 'an exchange in which goods, services or money pass between parties', example: 'No market transaction occurred when the neighbour helped.' },
    ],
  },
  {
    id: 'insurance-shares-risk',
    theme: 'Economics',
    title: 'How Insurance Shares Risk',
    dek: 'Many people pay into a pool so that uncertain but costly losses do not fall on one household alone.',
    minutes: 18,
    passage: `A severe storm may damage one house while leaving hundreds nearby untouched. The affected owner faces a large loss that was possible but uncertain. Insurance spreads this kind of risk. Many policyholders pay premiums into a pool, and the insurer uses that money to pay valid claims from the smaller number who experience covered losses.

Pooling works best when risks can be estimated across a large group. Insurers study past claims, building types, locations and other evidence to predict average costs. A premium also contributes to administration, reserves and profit for a private insurer. The price for one customer may rise when their probability of claiming or the likely size of a loss is higher.

A policy does not cover everything. It sets limits, exclusions and an excess, which is the amount the policyholder pays towards a claim. These features can keep premiums lower and discourage very small claims, but complicated wording may leave customers surprised. Buyers need to compare what is covered, not just the premium. Insurers must explain terms clearly and assess claims consistently.

Insurance changes incentives. If people feel fully protected, they may take fewer precautions, a problem called moral hazard. Requiring smoke alarms or an excess can preserve an incentive to reduce risk. Another challenge is adverse selection: people who know they face higher risks may be more likely to buy cover, making the pool more expensive than expected. Insurers respond by gathering information and varying prices, although this can make cover unaffordable in high-risk areas.

Insurance cannot prevent a fire, flood or illness. It transfers some financial consequences according to a contract. When hazards become more frequent, premiums may rise or cover may be withdrawn, leaving communities with difficult questions about prevention, public support and where building should occur. A sound insurance system balances affordable access, accurate pricing, clear terms and enough reserves to pay claims when disasters arrive.`,
    questions: [
      { prompt: 'How does insurance pool risk?', options: ['Every policyholder receives a claim payment', 'Many premiums fund losses experienced by a smaller number', 'One household pays for all disasters', 'Insurers remove the chance of storms'], answer: 1, explanation: 'The opening describes premiums collected from many policyholders paying valid claims for those who suffer covered losses.' },
      { prompt: 'What is an excess?', options: ['The amount a policyholder contributes to a claim', 'A profit automatically paid to every customer', 'A hazard excluded from all policies', 'The insurer’s entire financial reserve'], answer: 0, explanation: 'The third paragraph defines an excess as the policyholder’s contribution when making a claim.' },
      { prompt: 'What is moral hazard?', options: ['Past data used to estimate claims', 'A rule requiring clear policy wording', 'Reduced caution because someone feels protected from loss', 'The withdrawal of every insurance product'], answer: 2, explanation: 'The fourth paragraph explains that full protection can weaken incentives to take precautions.' },
      { prompt: 'Why might premiums rise in a high-risk area?', options: ['Insurance has prevented all damage', 'Likely claims have become less costly', 'Policyholders cannot read contracts', 'Expected losses are larger or more frequent'], answer: 3, explanation: 'The passage links prices to the probability and likely size of future claims.' },
    ],
    writingPrompt: 'Write 140–180 words explaining how home insurance shares risk. Discuss premiums, one policy condition, changing incentives and the challenge of keeping cover affordable.',
    writingKeywords: ['insurance', 'risk', 'premium', 'claim', 'excess', 'incentive'],
    vocabulary: [
      { term: 'premium', definition: 'the price paid for insurance cover', example: 'The household paid its insurance premium each month.' },
      { term: 'claim', definition: 'a formal request for payment under an insurance policy', example: 'The owner made a claim after hail damaged the roof.' },
      { term: 'exclusion', definition: 'a loss or circumstance that an insurance policy does not cover', example: 'The customer checked whether flood was an exclusion.' },
      { term: 'moral hazard', definition: 'a tendency to take less care when protected from the cost of a risk', example: 'The excess helped reduce moral hazard by keeping some cost with the driver.' },
      { term: 'adverse selection', definition: 'a situation in which people with higher risks are more likely to seek insurance', example: 'Adverse selection made the claims pool costlier than predicted.' },
    ],
  },
  {
    id: 'tourism-changes-town',
    theme: 'Economics',
    title: 'When Tourism Changes a Town',
    dek: 'Visitors bring income and jobs, while also changing housing, services, prices and the character of a place.',
    minutes: 18,
    passage: `A town with a beautiful beach, historic streets or nearby bushland may attract increasing numbers of visitors. Tourist spending can move through the local economy. A traveller pays a motel, which hires staff and buys food from a supplier. Employees then spend some of their wages in other local businesses. Economists call these linked rounds of activity a multiplier effect, although some money leaks away when goods or owners come from elsewhere.

Tourism can broaden employment beyond a town's traditional industries. It may support cafés, guides, galleries, transport and cultural events. Visitor demand can also justify better public spaces or more frequent services. However, work may be casual or seasonal. A business that is crowded in summer can struggle in winter, and workers may find it difficult to secure stable hours.

Housing creates another tension. Owners may earn more by offering short stays than long-term rentals. This can increase accommodation for visitors but reduce homes available to residents. Higher rents may push workers further from their jobs. At the same time, tourism is rarely the only cause of housing pressure; population growth, construction costs and planning rules also affect supply.

Public facilities experience both benefits and costs. Visitors use roads, toilets, waste services, beaches and national parks. Their spending and taxes can help fund maintenance, but busy periods may require extra capacity that local ratepayers also support. Crowding can change residents' enjoyment of their own town. Cultural tourism can create income and understanding, yet local stories should not be simplified or used without permission.

A town does not have to choose between unlimited tourism and none. It can encourage visits across the year, train local workers, protect long-term housing, collect suitable fees or limit access to fragile places. Each option has trade-offs and should use evidence. The strongest plan asks how much spending remains local, who gains secure work, who bears higher costs and what residents want their town to remain.`,
    questions: [
      { prompt: 'What is the tourism multiplier effect?', options: ['Visitors spend once and money disappears', 'One payment can support further local spending and income', 'Every imported product increases local ownership', 'Tourists multiply the number of houses'], answer: 1, explanation: 'The opening follows visitor spending through businesses, wages and further local purchases.' },
      { prompt: 'What employment risk can tourism create?', options: ['All jobs become permanent', 'Guides cannot work with visitors', 'Work may depend heavily on the season', 'Local businesses never hire staff'], answer: 2, explanation: 'The second paragraph notes that busy summers may be followed by quiet winters and unstable hours.' },
      { prompt: 'How can short-stay accommodation affect residents?', options: ['It can reduce long-term rental supply and raise pressure on rents', 'It guarantees cheaper housing for workers', 'It is the only possible cause of housing pressure', 'It prevents owners from receiving income'], answer: 0, explanation: 'The housing paragraph explains the shift from long-term homes to visitor accommodation while noting other causes too.' },
      { prompt: 'Which question best fits the author’s recommended planning approach?', options: ['How can visitor numbers grow without any limit?', 'How can every town copy the same policy?', 'How can residents be excluded from decisions?', 'Who receives the benefits and who carries the costs?'], answer: 3, explanation: 'The conclusion recommends examining local retention of income, secure work, costs and residents’ goals.' },
    ],
    writingPrompt: 'Write 140–180 words recommending how a growing tourist town should manage visitors. Use evidence about jobs, housing, public facilities and local culture, and explain one trade-off.',
    writingKeywords: ['tourism', 'jobs', 'housing', 'services', 'local', 'trade-off'],
    vocabulary: [
      { term: 'multiplier effect', definition: 'the repeated economic activity created when an initial payment is spent again', example: 'Tourist spending produced a multiplier effect through local wages and purchases.' },
      { term: 'leakage', definition: 'money leaving a local economy through outside ownership or imported purchases', example: 'Buying supplies from another region increased economic leakage.' },
      { term: 'seasonal', definition: 'available or active mainly during a particular part of the year', example: 'The seasonal job ended when the summer visitors left.' },
      { term: 'capacity', definition: 'the maximum amount a service or place can handle', example: 'The town expanded waste-service capacity before the festival.' },
      { term: 'ratepayer', definition: 'a person or organisation that pays local council rates on property', example: 'Ratepayers helped fund maintenance of the foreshore facilities.' },
    ],
  },
];
