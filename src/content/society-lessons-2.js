export const societyLessons2 = [
  {
    id: 'newsroom-corrections',
    theme: 'Society',
    title: 'How Newsrooms Correct Errors',
    dek: 'A visible correction can strengthen trust when it explains what changed and why.',
    minutes: 16,
    passage: `Even careful newsrooms publish mistakes. A reporter may misspell a name, misunderstand a statistic or rely on information that later proves incomplete. Because journalism is produced under time pressure, the important question is not whether an organisation will ever be wrong, but how it responds when an error is discovered.

A responsible correction does more than quietly replace a sentence. It identifies the inaccurate claim, supplies the correct information and tells readers that the article has changed. For a minor typing error, a formal note may be unnecessary. However, if an error alters the meaning of a story, transparency matters. Online articles can be updated instantly, yet that convenience also makes it possible to hide the original mistake. A dated correction note preserves an honest record.

The process often begins with a reader, source or journalist contacting an editor. The editor checks recordings, documents and notes rather than assuming that every complaint is valid. If the evidence supports a change, the newsroom decides whether to correct, clarify or, in rare cases, retract the report. A clarification addresses wording that was technically accurate but misleading. A retraction signals that the central claim cannot be supported.

Corrections do not erase all harm. A false statement may have travelled widely before the correction appears, while the updated version may attract less attention. News organisations can respond by sharing major corrections through the same channels used to promote the original story.

Admitting an error can feel damaging, but refusing to do so is usually worse. Trust does not require an impossible record of perfection. It grows when audiences can see that a newsroom has a consistent method for checking challenges, acknowledging significant mistakes and improving its work.`,
    questions: [
      { prompt: 'Why does the passage favour a dated correction note for meaningful errors?', options: ['It makes the article longer', 'It preserves a visible record of the change', 'It prevents readers from complaining', 'It proves the original report was careless'], answer: 1, explanation: 'The passage argues that a dated note prevents an online update from quietly hiding a significant earlier mistake.' },
      { prompt: 'How is a clarification different from a correction?', options: ['It addresses wording that may mislead despite being technically accurate', 'It removes the entire article permanently', 'It applies only to misspelled names', 'It is published before an editor checks evidence'], answer: 0, explanation: 'A clarification deals with technically accurate wording that could still give readers a misleading impression.' },
      { prompt: 'What should an editor do after receiving a complaint?', options: ['Accept every complaint immediately', 'Delete the story without explanation', 'Check the relevant evidence before deciding', 'Ask the reporter to ignore it'], answer: 2, explanation: 'The editor is expected to examine recordings, documents and notes rather than assume either side is correct.' },
      { prompt: 'Which idea best captures the author’s view of trust?', options: ['Trust depends on journalists never making mistakes', 'Trust grows through open and consistent responses to errors', 'Trust is restored whenever an article becomes shorter', 'Trust matters less than publishing first'], answer: 1, explanation: 'The conclusion presents accountability and a reliable correction process, not perfection, as the foundation of trust.' },
    ],
    writingPrompt: 'Write 140–180 words arguing whether social media posts that promote an incorrect news story should also display its correction. Use evidence from the passage and address one practical difficulty.',
    writingKeywords: ['correction', 'news', 'trust', 'error', 'social media', 'evidence'],
    vocabulary: [
      { term: 'transparency', definition: 'openness that allows others to see how a decision was made', example: 'The correction note improved transparency by describing the change.' },
      { term: 'retract', definition: 'to formally withdraw a statement or publication', example: 'The newspaper chose to retract a claim it could not support.' },
      { term: 'clarification', definition: 'an explanation that makes a meaning less confusing or misleading', example: 'The editor added a clarification about how the survey was conducted.' },
      { term: 'inaccurate', definition: 'not correct or exact', example: 'An inaccurate figure changed the meaning of the report.' },
      { term: 'accountability', definition: 'the duty to accept responsibility for decisions and actions', example: 'Public corrections are one form of journalistic accountability.' },
    ],
  },
  {
    id: 'public-transport-infrastructure',
    theme: 'Society',
    title: 'Public Transport as Social Infrastructure',
    dek: 'Buses and trains do more than move passengers; they connect people to daily life.',
    minutes: 17,
    passage: `A bus route can be measured in kilometres, passengers and travel times. Those figures matter, but they do not capture its full social value. Public transport links people to schools, jobs, medical appointments, shops and one another. In this sense, a reliable network is social infrastructure: a shared system that helps communities participate in daily life.

Access is uneven when services are designed only around the busiest commuter journeys. A train that runs frequently during office hours may not help a nurse starting before dawn. An infrequent suburban bus can turn a short shift into a long day, while a cancelled accessible service may leave a wheelchair user with no realistic alternative. Fares also shape access. A route is not truly available to everyone if its cost forces some passengers to miss essential trips.

However, empty seats are not automatically evidence of failure. A late evening bus may carry fewer people than a peak service while still providing an important safety net. Its presence can allow a hospitality worker to accept a shift or a teenager to attend training without depending on a lift. The benefit includes opportunities that become possible, not merely the number of tickets sold.

This does not mean every route can run everywhere at all hours. Networks have limited vehicles, drivers and funding. Planners must compare needs and make trade-offs. Good decisions combine usage data with consultation, because current passenger numbers can overlook people who would travel if the service were safer, cheaper or more frequent.

Thinking of transport as social infrastructure changes the debate. Efficiency remains important, but it sits beside inclusion, reliability and access. The strongest network is not simply the one that moves the most people at the lowest cost. It is one that enables a wide range of people to take part in their community.`,
    questions: [
      { prompt: 'Why does the author describe public transport as social infrastructure?', options: ['It is always built underground', 'It connects people with essential activities and communities', 'It earns more money than roads', 'It serves only office workers'], answer: 1, explanation: 'The opening paragraph emphasises access to education, work, health care, shops and social connection.' },
      { prompt: 'Why might a late evening bus be valuable despite carrying fewer passengers?', options: ['It makes peak services unnecessary', 'It provides opportunities and a safety net', 'It requires no public funding', 'It always travels faster'], answer: 1, explanation: 'The passage explains that a low-use service may still enable work, training and independent travel.' },
      { prompt: 'What limitation of current passenger data does the passage identify?', options: ['It counts vehicles instead of passengers', 'It cannot record travel time', 'It may miss people discouraged by poor service', 'It is collected only at night'], answer: 2, explanation: 'Existing usage figures do not include potential passengers excluded by cost, safety or low frequency.' },
      { prompt: 'What balance does the author recommend?', options: ['Efficiency alone should determine every route', 'All routes should operate continuously', 'Inclusion and access should replace financial planning', 'Efficiency should be considered alongside inclusion, reliability and access'], answer: 3, explanation: 'The conclusion keeps efficiency in the discussion while adding broader measures of public value.' },
    ],
    writingPrompt: 'Write 140–180 words recommending whether a council should keep a lightly used evening bus route. Use evidence from the passage, propose one measure of social value and acknowledge a budget concern.',
    writingKeywords: ['transport', 'route', 'access', 'community', 'service', 'budget'],
    vocabulary: [
      { term: 'infrastructure', definition: 'the basic systems and services that allow a society to function', example: 'Reliable transport is an important form of public infrastructure.' },
      { term: 'commuter', definition: 'a person who regularly travels between home and work or study', example: 'The early train was crowded with commuters.' },
      { term: 'infrequent', definition: 'not happening often', example: 'An infrequent bus can make a short journey difficult.' },
      { term: 'trade-off', definition: 'a choice in which gaining one benefit means accepting a cost elsewhere', example: 'The timetable involved a trade-off between coverage and frequency.' },
      { term: 'consultation', definition: 'the process of seeking views before making a decision', example: 'Community consultation revealed demand for a later service.' },
    ],
  },
  {
    id: 'refugee-oral-history',
    theme: 'Society',
    title: 'Refugee Stories and Oral History',
    dek: 'Recorded memories can preserve experiences that official documents leave out.',
    minutes: 18,
    passage: `Official records can show when a person crossed a border, entered a camp or received a visa. They rarely capture the sound of a familiar street, the uncertainty of waiting, or the small object someone chose to carry. Oral history helps preserve these dimensions by recording a person speaking about experiences they remember.

When refugees choose to share their stories, their testimony can deepen public understanding of displacement. It may reveal everyday courage as well as loss: neighbours sharing food, children adapting to a new classroom, or families rebuilding routines. Such accounts resist the idea that refugees form one identical group. Each story is shaped by a particular place, age, language and set of decisions.

Yet an interview is not simply a conversation that can be collected without care. The person telling the story should give informed consent and understand where the recording will be stored, who may hear it and whether their name will appear. They must be able to pause, avoid a topic or withdraw permission. An interviewer should not pressure someone to describe trauma merely because dramatic material may interest an audience.

Memory also requires thoughtful interpretation. People may forget dates, combine events or understand the past differently over time. This does not make oral history worthless. A recorded memory offers evidence of how an event was experienced and remembered, although historians may compare it with letters, photographs and other accounts. Translation adds another layer: a translator can communicate meaning, but some humour, rhythm or cultural references may shift.

Ethical oral history therefore depends on relationship, context and control. The goal is not to extract a powerful story from someone. It is to create a record with them, while recognising both the value of personal testimony and the storyteller’s right to decide how it is used.`,
    questions: [
      { prompt: 'What can oral histories provide that official records often cannot?', options: ['Exact dates for every event', 'Personal and sensory dimensions of experience', 'Automatic legal evidence', 'A single story representing all refugees'], answer: 1, explanation: 'The passage contrasts administrative facts with memories, feelings, sounds and meaningful personal details.' },
      { prompt: 'Which practice is part of informed consent?', options: ['Promising that memories are perfectly accurate', 'Requiring discussion of traumatic events', 'Explaining storage, access and naming choices', 'Publishing every recording immediately'], answer: 2, explanation: 'Participants should understand how the recording will be stored, heard and identified before agreeing.' },
      { prompt: 'How does the author treat imperfect memory?', options: ['As proof that oral history has no value', 'As a feature requiring context and comparison', 'As a problem solved entirely by translation', 'As more reliable than every written source'], answer: 1, explanation: 'The text values remembered experience while recommending comparison with other sources and careful interpretation.' },
      { prompt: 'What does the phrase “create a record with them” emphasise?', options: ['The interviewer should control the final account', 'The storyteller should share control over the process', 'The recording should contain several interviewers', 'The story should be rewritten as fiction'], answer: 1, explanation: 'The final paragraph rejects extracting stories and stresses the participant’s agency over how testimony is used.' },
    ],
    writingPrompt: 'Write 140–180 words explaining the most important ethical rule for a school oral-history project involving refugees or migrants. Use evidence from the passage and discuss how the rule would work in practice.',
    writingKeywords: ['story', 'consent', 'history', 'interview', 'memory', 'control'],
    vocabulary: [
      { term: 'testimony', definition: 'a spoken or written account of what someone experienced or witnessed', example: 'Her testimony described the family’s first months in a new city.' },
      { term: 'displacement', definition: 'forced movement away from a home or usual place', example: 'The museum recorded personal experiences of displacement.' },
      { term: 'consent', definition: 'freely given agreement based on enough information', example: 'The student requested consent before starting the recording.' },
      { term: 'trauma', definition: 'lasting emotional harm caused by a deeply distressing experience', example: 'The interviewer did not pressure anyone to discuss trauma.' },
      { term: 'interpretation', definition: 'an explanation of the meaning or significance of something', example: 'Historical interpretation should consider several kinds of evidence.' },
    ],
  },
  {
    id: 'fair-rules',
    theme: 'Society',
    title: 'What Makes a Fair Rule?',
    dek: 'Fairness depends not only on equal wording, but also on purpose, impact and review.',
    minutes: 15,
    passage: `A rule can apply to everyone and still produce unfair results. Imagine a school rule stating that all assignments submitted after 4 p.m. receive no marks. The wording is equal, but its impact may differ for a student whose internet failed, who has caring responsibilities or who simply forgot. Deciding whether the rule is fair requires more than checking that it treats every name the same.

A fair rule usually begins with a legitimate purpose. Deadlines, for example, help teachers provide feedback and prevent an endless flow of late work. The consequence should also be proportionate to the problem. Losing every mark for being one minute late may be simple to administer, but simplicity does not automatically make the response reasonable.

Consistency matters because unpredictable enforcement invites favouritism. If two students in similar circumstances receive different consequences, they deserve an explanation. However, consistency is not identical to refusing all exceptions. A clear process can allow relevant circumstances to be considered without turning every decision into a private favour. Students should know who decides, what evidence is needed and how to request a review.

Participation can improve rules too. People affected by a rule may notice barriers that its designers missed. Consultation does not mean that everyone gets their preferred outcome, nor does it remove the need for leadership. It gives decision-makers better information and makes the reasoning easier to explain.

Finally, fair rules should be reviewable. A policy created for a sensible reason may cause unexpected harm or become outdated. Evidence about its effects should be collected, and the rule should be changed if it no longer serves its purpose. Fairness, then, is not a promise that every outcome will be identical. It is a commitment to a justified purpose, proportionate consequences, consistent procedures, meaningful input and the possibility of correction.`,
    questions: [
      { prompt: 'Why might an identical deadline rule still be unfair?', options: ['All deadlines lack a purpose', 'Its effects can differ according to relevant circumstances', 'Students should choose their own marks', 'Teachers cannot measure time accurately'], answer: 1, explanation: 'The opening example shows that equal wording may affect students differently because their circumstances differ.' },
      { prompt: 'What does “proportionate” mean in the passage?', options: ['The consequence reasonably matches the problem', 'The rule has the same number of words as the offence', 'Every mistake receives the largest penalty', 'The rule is easy to remember'], answer: 0, explanation: 'A proportionate consequence is not excessive compared with the seriousness of the problem.' },
      { prompt: 'How can exceptions be handled fairly?', options: ['Through secret decisions by individual teachers', 'By removing every deadline', 'Through a clear process using relevant evidence', 'By giving each student their preferred outcome'], answer: 2, explanation: 'The passage recommends transparent decision-making, evidence requirements and a review process.' },
      { prompt: 'Why should a rule be reviewable?', options: ['Its purpose and effects may change or prove harmful', 'Consultation makes enforcement impossible', 'Every rule becomes unfair after one year', 'Reviews guarantee identical outcomes'], answer: 0, explanation: 'Review allows outdated rules or policies with unexpected harmful effects to be corrected.' },
    ],
    writingPrompt: 'Write 140–180 words evaluating one rule at your school or in a community group. Explain its purpose, judge whether its consequences are proportionate and propose one fair review process.',
    writingKeywords: ['rule', 'fair', 'purpose', 'consequence', 'review', 'evidence'],
    vocabulary: [
      { term: 'legitimate', definition: 'reasonable, lawful or acceptable for a stated purpose', example: 'Protecting student safety is a legitimate aim.' },
      { term: 'proportionate', definition: 'appropriately balanced in size or seriousness', example: 'The panel asked whether the consequence was proportionate to the mistake.' },
      { term: 'consistency', definition: 'the quality of applying the same standards in similar situations', example: 'Consistency helps people understand what a rule requires.' },
      { term: 'favouritism', definition: 'unfairly giving better treatment to a preferred person or group', example: 'Published procedures can reduce the risk of favouritism.' },
      { term: 'reviewable', definition: 'able to be examined again and possibly changed', example: 'A reviewable decision can be challenged with new evidence.' },
    ],
  },
  {
    id: 'hidden-work-volunteers',
    theme: 'Society',
    title: 'The Hidden Work of Volunteers',
    dek: 'Community service depends on planning, emotional effort and support that can go unseen.',
    minutes: 16,
    passage: `At a community food pantry, the most visible moment occurs when a volunteer hands groceries to a visitor. Behind that exchange lies less visible work: checking expiry dates, arranging deliveries, cleaning shelves, recording stock and learning how to protect people’s privacy. Volunteering is often described as simply giving time, but useful service also requires skill, coordination and care.

Some tasks carry emotional demands. A volunteer answering a crisis line or supporting families after a disaster must listen calmly without promising what they cannot provide. Even at a sporting club, volunteers may manage conflict, include a nervous child or respond to an injury. Organisations have a responsibility to offer training, boundaries and supervision rather than relying only on goodwill.

Unpaid work can create public value, but it should not become an excuse to replace every paid role. A library reading program may benefit from community volunteers while still needing qualified staff to select resources, manage safety and provide continuity. When essential services depend entirely on people who can afford to work without pay, the system may exclude capable volunteers with jobs, disabilities or caring responsibilities.

Recognition also needs thought. Public awards can celebrate contribution, yet some people prefer a quiet thank-you or practical support such as transport reimbursement. More importantly, appreciation should include listening to volunteers when they identify an unsafe process or an unrealistic workload. Praise without support can feel hollow.

The hidden work of volunteers becomes visible when we ask what makes their contribution possible. Someone recruits and trains them; someone prepares the space; families adjust schedules; communities provide trust. Valuing volunteering therefore means more than celebrating generosity. It means designing roles that are purposeful, safe and accessible, while recognising where reliable paid expertise remains necessary.`,
    questions: [
      { prompt: 'What does the food-pantry example demonstrate?', options: ['Food distribution requires no planning', 'Visible service depends on many less visible tasks', 'Volunteers should avoid recording stock', 'Privacy matters only to paid workers'], answer: 1, explanation: 'The opening lists preparation, safety and administrative work behind the public exchange.' },
      { prompt: 'Why do volunteers need boundaries and supervision?', options: ['Good intentions alone may not prepare them for demanding situations', 'Supervision guarantees that no conflict occurs', 'Only paid staff can listen calmly', 'Training turns volunteers into employees'], answer: 0, explanation: 'The text shows that emotional and safety-related responsibilities require organised support, not goodwill alone.' },
      { prompt: 'What risk arises when essential services rely entirely on unpaid work?', options: ['Every service becomes too formal', 'Qualified staff always leave immediately', 'People unable to donate time may be excluded', 'Volunteers receive too much reimbursement'], answer: 2, explanation: 'Unpaid systems can exclude capable people who cannot afford the time because of work, disability or care duties.' },
      { prompt: 'According to the passage, what is meaningful recognition?', options: ['Awards for every volunteer', 'Praise combined with practical support and listening', 'Replacing all paid roles with volunteers', 'Keeping difficult work hidden'], answer: 1, explanation: 'The author values thanks but argues that support and attention to volunteers’ concerns matter more deeply.' },
    ],
    writingPrompt: 'Write 140–180 words proposing how a school or community organisation should support its volunteers. Recommend two practical actions and explain why one role should remain with trained paid staff.',
    writingKeywords: ['volunteer', 'support', 'training', 'community', 'safety', 'staff'],
    vocabulary: [
      { term: 'coordination', definition: 'the organisation of people or activities so they work effectively together', example: 'The event succeeded because of careful volunteer coordination.' },
      { term: 'supervision', definition: 'guidance and oversight provided by a responsible person', example: 'New volunteers worked under appropriate supervision.' },
      { term: 'continuity', definition: 'the state of continuing reliably without harmful interruption', example: 'Permanent staff provided continuity between weekly sessions.' },
      { term: 'reimbursement', definition: 'repayment of money someone spent while doing an activity', example: 'Travel reimbursement made the role accessible to more people.' },
      { term: 'hollow', definition: 'appearing meaningful but lacking real substance', example: 'The public praise seemed hollow when safety concerns were ignored.' },
    ],
  },
  {
    id: 'local-elections',
    theme: 'Society',
    title: 'Why Local Elections Matter',
    dek: 'Council decisions shape ordinary places, services and choices close to home.',
    minutes: 17,
    passage: `National elections attract speeches, debates and constant news coverage. Local elections can seem quieter, yet councils make decisions that people encounter every day. Depending on the area, local government may influence libraries, parks, rubbish collection, planning applications, footpaths, community facilities and support during emergencies.

The effects are often concrete. A planning vote can change the height and location of new housing. A budget decision can extend library hours or delay repairs to a sports ground. Councillors must consider competing needs, legal limits and finite revenue. Supporting one project may mean postponing another, so campaign promises should be examined alongside their cost and the council’s actual powers.

Local representation also affects who is heard. Residents with time, confidence and knowledge may attend meetings or make submissions, while shift workers, young people and those facing language barriers can be less visible. Elections cannot solve that imbalance by themselves, but they allow voters to assess whether candidates understand the whole community and have credible plans for consultation.

Information can be harder to find than in a national campaign. Responsible voters can compare candidate statements, council records and reporting from reliable local news sources. They should distinguish between a disagreement over priorities and evidence of misconduct. A councillor is not necessarily failing because a voter dislikes one decision; democratic representation requires judgement across many issues.

One vote rarely decides an election, but local contests can be close, and participation has value beyond a single result. Voting encourages candidates to address groups they might otherwise overlook. It also signals that decisions about a crossing, a pool or a housing plan are public choices rather than distant administration. Local elections matter because the scale is smaller, not despite it: they shape the shared spaces in which everyday life occurs.`,
    questions: [
      { prompt: 'Why should voters examine the cost of campaign promises?', options: ['Councils have unlimited legal powers', 'Local projects never benefit residents', 'Council resources are limited and choices involve trade-offs', 'All candidates exaggerate deliberately'], answer: 2, explanation: 'The passage notes that finite revenue means funding one priority may delay another.' },
      { prompt: 'Which groups may be less visible in local consultation?', options: ['Only property developers', 'Shift workers, young people and people facing language barriers', 'All council employees', 'Candidates with published statements'], answer: 1, explanation: 'These groups are specifically identified as facing barriers to traditional meetings and submissions.' },
      { prompt: 'What distinction should responsible voters make?', options: ['Between parks and libraries', 'Between close and uncontested elections', 'Between disagreement about priorities and actual misconduct', 'Between local and national newspapers'], answer: 2, explanation: 'The fourth paragraph warns that disliking a decision is not by itself proof that a councillor acted improperly.' },
      { prompt: 'What is the main argument of the final paragraph?', options: ['Local government is unimportant because it operates on a small scale', 'Participation helps make everyday local decisions genuinely public', 'Only close elections deserve voter attention', 'Administrative decisions should be removed from politics'], answer: 1, explanation: 'The conclusion connects participation with representation and public ownership of decisions affecting shared places.' },
    ],
    writingPrompt: 'Write 140–180 words persuading a first-time voter to research a local election. Identify two council decisions that could affect them and explain how they should compare candidates fairly.',
    writingKeywords: ['election', 'council', 'vote', 'candidate', 'local', 'decision'],
    vocabulary: [
      { term: 'revenue', definition: 'money received by an organisation or government', example: 'Limited revenue forced the council to rank its projects.' },
      { term: 'submission', definition: 'a formal statement or proposal given for consideration', example: 'Residents made a submission about the new development.' },
      { term: 'credible', definition: 'believable and supported by convincing evidence or reasoning', example: 'The candidate offered a credible plan with clear costs.' },
      { term: 'misconduct', definition: 'unacceptable or improper behaviour, especially in an official role', example: 'The investigation found no evidence of misconduct.' },
      { term: 'representation', definition: 'the act of speaking or making decisions on behalf of others', example: 'Fair representation requires attention to the whole community.' },
    ],
  },
  {
    id: 'museums-returning-objects',
    theme: 'Society',
    title: 'Museums Returning Objects',
    dek: 'Questions of ownership, history and care shape decisions about cultural return.',
    minutes: 18,
    passage: `Museums hold objects that travelled through trade, excavation, gifts, purchase and conquest. Some were acquired with clear permission; others were removed during colonial rule or taken from communities with little power to refuse. Today, requests to return cultural objects ask museums to examine not only legal ownership, but also the conditions under which collections were formed.

The process is often called repatriation or restitution. A community or government may provide evidence that an object was stolen, exported unlawfully or surrendered under pressure. Museums investigate catalogues, correspondence, shipping records and oral histories. Provenance research, which traces an object’s history of ownership, can reveal certainty in some cases and frustrating gaps in others.

Supporters of return argue that cultural objects are not merely artworks. An item may be connected to ancestors, ceremony, identity or knowledge, and its absence can continue an earlier injustice. Return can restore authority to the community for whom the object has living meaning. Opponents sometimes argue that large museums preserve objects for an international audience, or worry that fragile items may face inadequate care. These concerns deserve evidence, but they should not assume that communities of origin lack expertise.

Return is not always a simple journey from one building to another. Communities may request permanent ownership, shared custody, long-term loans or limits on display. Some sacred objects should not be publicly shown at all. Digital copies can support research, but they do not replace the original when material and spiritual connections matter.

A fair decision requires careful research and genuine dialogue with the people making the claim. Laws remain relevant, yet legality alone may not settle an ethical question. By explaining what is known, acknowledging uncertainty and sharing decision-making power, museums can move from defending collections towards repairing relationships.`,
    questions: [
      { prompt: 'What does provenance research investigate?', options: ['The popularity of a museum exhibition', 'An object’s history of ownership and movement', 'The cost of making a digital copy', 'The age of museum visitors'], answer: 1, explanation: 'The second paragraph defines provenance research as tracing the history of an object’s ownership.' },
      { prompt: 'Why may an object have importance beyond its artistic appearance?', options: ['It may carry ancestral, ceremonial or cultural meaning', 'It is always extremely valuable', 'It can never be studied outside a museum', 'Its original owner is always known'], answer: 0, explanation: 'The passage describes connections to ancestors, ceremony, identity and knowledge.' },
      { prompt: 'Which option shows that return can take different forms?', options: ['Ignoring all display restrictions', 'Replacing every original with a photograph', 'Shared custody or a long-term loan', 'Ending all international research'], answer: 2, explanation: 'The fourth paragraph lists ownership, shared custody, loans and display limits as possible arrangements.' },
      { prompt: 'What principle guides the author’s conclusion?', options: ['Legal ownership answers every ethical question', 'Museums should return every object without research', 'International audiences should make the final decision', 'Research and dialogue should be joined with shared decision-making'], answer: 3, explanation: 'The conclusion calls for evidence, openness about uncertainty and greater power for claimant communities.' },
    ],
    writingPrompt: 'Write 140–180 words responding to a museum that is considering a request to return a cultural object. Recommend a fair decision-making process and address one concern about access or preservation.',
    writingKeywords: ['museum', 'object', 'return', 'community', 'evidence', 'culture'],
    vocabulary: [
      { term: 'repatriation', definition: 'the return of a person or cultural object to a country or community of origin', example: 'The community requested the repatriation of the ceremonial object.' },
      { term: 'restitution', definition: 'the act of returning something wrongfully taken or compensating for its loss', example: 'The agreement provided restitution for objects removed under pressure.' },
      { term: 'provenance', definition: 'the documented history of an object’s ownership and movement', example: 'A shipping record helped establish the painting’s provenance.' },
      { term: 'custody', definition: 'responsibility for protecting and caring for something', example: 'The two institutions agreed to share custody of the collection.' },
      { term: 'colonial', definition: 'relating to control of one territory or people by another power', example: 'Researchers examined how the object left during colonial rule.' },
    ],
  },
  {
    id: 'accessible-cities',
    theme: 'Society',
    title: 'Designing Accessible Cities',
    dek: 'Inclusive streets and buildings work better when barriers are anticipated from the start.',
    minutes: 16,
    passage: `A city may meet a technical building code and still be difficult to navigate. A ramp that ends at a heavy door, a bus announcement available only on a screen, or a crossing signal that changes too quickly can prevent people from travelling independently. Accessibility asks designers to consider the whole journey rather than a collection of separate features.

Disability is diverse. A kerb ramp may assist a wheelchair user, a parent with a pram and a traveller pulling luggage. Tactile paving can guide someone with low vision, while audible signals communicate information that a visual display cannot. Clear signs and predictable layouts may help people with cognitive disabilities, but a noisy station can remain overwhelming. No single adjustment meets every need.

Universal design aims to make places usable by as many people as possible from the beginning. This approach is often more effective than adding special access later. Step-free entrances, generous pathways and information in several formats can become ordinary parts of a design. Still, universal solutions do not remove the need for specific accommodations, such as an Auslan interpreter at a public meeting or a quiet room at a busy venue.

Consultation is most useful when disabled people have genuine influence before plans are final. Asking for feedback after construction may identify a barrier, but correcting it can be expensive or impossible. Designers should also pay people for their expertise rather than treating lived experience as an unlimited source of free advice.

Accessible design involves choices and occasional tensions. An audible signal must be loud enough to hear without unnecessarily disturbing nearby residents. Heritage features may need sensitive alteration. These challenges call for testing and negotiation, not for abandoning access. An accessible city is not one with a few labelled facilities. It is a connected environment in which more people can move, understand information and participate with dignity.`,
    questions: [
      { prompt: 'What does the opening paragraph mean by considering the “whole journey”?', options: ['Every accessible feature must connect and work in practice', 'Cities should remove all heavy doors immediately', 'Only public transport requires accessible design', 'Building codes should be ignored'], answer: 0, explanation: 'The examples show that one accessible feature is ineffective if another barrier interrupts the same journey.' },
      { prompt: 'Why does the author list prams and luggage?', options: ['To suggest disability is temporary', 'To show that inclusive design can benefit many users', 'To argue that kerb ramps are unnecessary', 'To compare tourists with designers'], answer: 1, explanation: 'The kerb-ramp example demonstrates that reducing a barrier often helps people with varied needs.' },
      { prompt: 'Why should consultation happen before plans are final?', options: ['Early influence can prevent barriers that are difficult to fix later', 'Construction workers cannot read final plans', 'Later feedback is always dishonest', 'Consultation removes every design tension'], answer: 0, explanation: 'The passage states that post-construction changes may be costly or impossible.' },
      { prompt: 'How does the author respond to tensions in accessible design?', options: ['By treating them as reasons to abandon access', 'By giving heritage concerns automatic priority', 'By recommending testing and negotiation', 'By using one universal solution in every place'], answer: 2, explanation: 'The conclusion accepts real design tensions but argues that evidence and negotiation should resolve them.' },
    ],
    writingPrompt: 'Write 140–180 words proposing one accessibility improvement for a street, station or school. Explain the barrier it removes, who benefits and how designers should respond to one possible concern.',
    writingKeywords: ['access', 'design', 'barrier', 'city', 'disabled', 'participate'],
    vocabulary: [
      { term: 'accessibility', definition: 'the quality of being usable and reachable by people with varied needs', example: 'The audit examined the accessibility of the entire station journey.' },
      { term: 'tactile', definition: 'designed to be felt through touch', example: 'Tactile paving marked the edge of the platform.' },
      { term: 'accommodation', definition: 'a change or support provided to meet a particular need', example: 'The quiet room was a useful accommodation at the event.' },
      { term: 'cognitive', definition: 'relating to thinking, understanding, memory or learning', example: 'Clear signs can reduce cognitive demands in a complex building.' },
      { term: 'dignity', definition: 'the state of being respected and valued as a person', example: 'Independent access allows people to participate with dignity.' },
    ],
  },
];
