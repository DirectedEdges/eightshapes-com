---
  category : People
  title : Designing a System Team
  deck : Models and Lessons Learned to Scale a Team for an Enterprise
  title_abbreviation : Designing a Team
  author_id : nathan
  date : 2017-04-26
  masthead : true
  layout : article.njk
  tags : []
---


{% import '../_includes/escom.njk' as escom with context %}



  
    

Most organizations are coming to understand systems and why they are important. However, how much does it cost? What team do we need?

* * *

## A System Team Serves Product (or Similar) Teams

Peter Merholz and Kristen Skinner’s excellent book [Org Design for Design Orgs](https://www.amazon.com/Org-Design-Orgs-Building-House/dp/1491938404/ref=sr_1_1?ie=UTF8&qid=1493216532&sr=8-1&keywords=org+design+for+design+orgs) describes models and roles in composing design teams and orgs. In the _Roles and Team Composition_ chapter, they describe an adjunct research team serving across many other teams:



  {{ escom.bar_quote(
      quote = 'UX researchers now have critical mass to be their own team… [with] A Head of Research … supporting the professional growth of the researchers, and maintaining a global understanding of research insights across all of a company’s products and services.'
  ) }}

  


When I read this, I thought to myself “Yup, like design systems teams” solving the widespread, simpler design problems — a visual language, usable interface components, etc.

With this model in mind, I was surprised to hear [Peter reflect on (Spotify’s) systems team last November at UI21](https://aycl.uie.com/virtual_seminars/watch/the_experience_is_the_product/7566) as one that had to “hack a patch, an organizational patch on to [the] model[s]” he’s described. Maybe I’m misunderstanding. But I’ve been on ~15–20 systems teams over the years that serve many teams similarly to (but not the same as) such research practices.

In my experience, the optimal systems team is multidisciplinary and independent to serve many teams making digital things. The system team [behaves as a product being consumed by products (and other teams)](/articles/a-design-system-isn-t-a-project-it-s-a-product-serving-products).



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Diagram of system team supporting many product teams',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


Who’s on that team? Are they full time or part time? What disciplines should be represented? What team(s) do we source them from?

With those questions in mind, this article illustrates the common **stages of growth** of a systems team, share **examples of teams I’ve led** the last four years, and cover **patterns and possible pitfalls** you may face as you form and operate a systems team.

* * *

## Stages of Systems Team Growth

Most individuals I talk to at clients, conferences, and our community’s Design System Slack are evolving across one of four stages of growth: spare timers, allocated individuals, dedicated team, and team-of-teams.

### Stage #1: Spare Timers

Individuals fitting system work on time’s edges often describe how their passionate burst hasn’t really taken off:



  {{ escom.bar_quote(
      quote = '“I’m on my own. I’ve created a {Sketch sticker sheet or mini-Bootstrap code kit} in my extra time, but nobody else is using it. How do I take the next step?”'
  ) }}

  


Systems built on Friday afternoons or Sunday nights don’t endure. A starter Sketch template or starter code is better than nothing. However, spartan efforts aren’t an enterprise‘s practice in the making.

_Takeaway:_ Don’t get discouraged! Many system journeys starts like that. Prove your tools lead to outcomes — consistency, efficiency, reuse — in pilot projects. It’s a stepping stone to educate how a system efforts benefit others.

### Stage 2: Allocated Individual(s)

As system value is recognized, a manager carves an individual’s predictable yet limited allocation (10%? 25%) from a product team commitment and publicizes system responsibility to teams and peers. Empowered with a mandate and time, you start releasing tangible outputs regularly, whether standardized design assets or a coded kit.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Diagram of allocated individuals not yet functioning as a team',
      caption = '',
      class = ''
  ) }}

  


At this point, like-minded systems advocates may start coordinating across design & engineering. Someone may start a backlog, but it may rot with vaguely defined tickets resting for months. Half-baked documentation bubbles up on unpolished web pages or (oh no!) Confluence. Updates happen, but few know when, how, or why.

For a system to thrive, it must publish high-quality outputs and serve adopters dependably.



  {{ escom.bar_quote(
      quote = '“If you are good at it, you create demand within your organization that cannot meet with current allocations.” — Jared Spool, Beyond the UX Tipping Point'
  ) }}

  


With a steadying stream of regular outputs, your customers (product teams) adopt parts, individuals start to relinquish control to system-solved problems, and management warms to the idea of forming a dedicated team.

### Stage 3: System Team–as–Product Team

In setting up a formal system team, strive for a mix with recognized authority from both design and engineering disciplines.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Diagram of system teams of varying sizes',
      caption = 'High-level system team composition, by size',
      class = ''
  ) }}

  


Teams I’ve recently formed and led are composed as a blend of:

- **MUST HAVE: Design** members can span sub-disciplines — visual, interaction, information architecture to name a few — but the team must excel in crafting an elegant visual language.
- **MUST HAVE: Engineering** brings a front-end focus with HTML & CSS knowledge, seasoned skills to establish conventions, and tool building.
- **SHOULD HAVE: Product Management and Leadership** skills to establish vision, drive direction, curate roadmaps, monitor adoption, and organize backlogs, scrums and critiques.
- **COULD HAVE** : **Speciality** concerns like content strategy, accessibility, performance, SEO, and more. While valuable, keep in mind that systems first and foremost marry design and engineering.
- **USUALLY DON’T HAVE** : **QA** and **Research.** QA funding often isn’t sufficient and [system teams can establish practices to assess quality anyway](/articles/component-qa-in-design-systems). Research can exist as a sibling service to product teams.

### Stage 4: System Team of Teams

Some massive enterprises (like, I suspect, Google, IBM, GE, Cisco, or Microsoft) grow systems efforts to span an umbrella of multiple interrelated teams to accomplish system goals.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Diagram of a team of teams',
      caption = 'Team of Teams',
      class = ''
  ) }}

  


For most of us serving far fewer products than they do, this scale is completely unrealistic and unnecessary. Sure, it’s helpful to see proportions attributed to each practice. However, this scale can scare away would be sponsors of a Systems Team-as-Product Team. Align your team size with realistic objectives and key results you want to obtain.

* * *

## System Team Examples

Although I’ve participated in design system teams continuously since 2006, the practice swerved considerable around 2012 when responsive happened, HTML & CSS strengthened, and unicorns started (partially) designing systematically in code.

The following examples express a progression of systems team models I’ve been involved with since then.

### Example 1: eCommerce Going Responsive

_What Worked Well_: This dedicated team designed and documented copious standards in a customized web-based experience. It was the “big kahuna” system: style, interaction, components, patterns, brand, editorial, SEO, accessibility, the works! As the enterprise took ~2 years to “go responsive,” the system was critical in converging a disparate customer journey.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Diagram of a 6 person system team',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '7',
      image_alt = 'Legend of discipline types, such as designer and developer',
      caption = '',
      class = ''
  ) }}

  


_What I’ve Done Differently Since_: Sigh, engineering. Our system team built a robust component library to prototype responsive designs and build the standard site. Yet engineering leads resisted our code and never built a library for their community. The result? Duplicative efforts, inefficiencies, and inconsistencies except for devs sneaking our code to into their builds.

I’ve vowed to never pursue a codeless system again in environments that obviously need it yet engineering leads block the pursuit.

* * *

### Example 2: A Design Language for a Exploding Org

_What Worked Well_: With the org ballooning from ~30 to 200+ designers in 12–18 months, the system team led the development of a shared design language documented on a custom standards site (thus, the front-end developer). Given the massive, distributed scale of the design org, we employed federated designers to drive interaction, UX, and icon basics.

While scope was smaller — just visual style, buttons and forms in six months of work — it was hailed as a success given the scale and challenges faced.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '8',
      image_alt = 'Diagram of five person system team',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


_What I’ve Done Differently Since_: More in-house staff making and connecting. While we effectively produced outputs, shepherding such a large community was strained by geography, technology, and yet unstable operational practices. The org needed more in-house system staff & stability for that.

And, again: code. We should have released a kit and asked forgiveness later.

* * *

### Example 3: The Straightforward Web Site Library

_What Worked Well_: Armed with a well-defined visual language from a separate agency, we designed, built, and documented a straightforward component library for diverse, content-rich web properties. Our team successfully deployed a first release in three months, and followed up with maintenance and growth for a limited period.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '9',
      image_alt = 'Diagram of four person system team',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


_What I’ve Done Differently Since_: Despite overt warnings about capacity required to keep it alive, the library went into hibernation as staff dispersed. Our succession and rollout plan wasn’t strong enough to withstand my agency’s departure. In projects since, I’ve assertively planned allocations and succession with in-house leaders throughout a system’s formative period.

* * *

### Example 4: Digital Product Ecosystem

_What Worked Well_: I paired with an in-house designer to design and document the style and components based on flagship product redesign we’d done a quarter prior. Even better, engineering invested three half-time developers from flagship products who wove system outputs incrementally into ongoing product work.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '10',
      image_alt = 'Diagram of six perosn system team',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


We released a library `v1.0` in three months and followed with quarterly cycles to refine tooling and expand the library’s catalog. As design, engineering and product convened for 2017 planning, the VP Engineering hailed the system:



  {{ escom.pull_quote(
      quote = '“The most important thing we did last year was build this system. It’s the foundation of all our future work.”',
      attribution = 'VP Engineering',
      class = 'escom-pull-quote--light'
  ) }}

  

* * *

### Example 5: The Library With Competitors

_What Has Worked Well, So Far:_ While we began to optimize and expand an existing core library, additional libraries emerged in other lines-of-business. Teams were confused: which to adopt? Instead of competing, we coordinated efforts and integrated into a larger, single team.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '11',
      image_alt = 'Diagram of 9 person system team with other specialists contributing',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


There was a short-term drag to re-team and refactor code to flexibly serve everyone. Scrums and planning got longer, too. However, our path forward will produce together for the foreseeable future, and the CEO and another VP seem convinced:



  {{ escom.pull_quote(
      quote = '“I was sensing and had conceded we’d have two libraries, but then a third was emerging. I’m delighted to see we’ve found a way to make just one.”',
      attribution = 'Delighted CEO',
      class = 'escom-pull-quote--light'
  ) }}

  


Another component of scaling the practice was engaging the federated design community to own concerns: UX, icons, brand, charts, content, and accessibility. While none of these “segment owners” has dedicated capacity, all are now points-of-contact to moderate discussions, drive priorities, and engage peers to deliver outputs.

* * *

## Lessons Learned Managing System Teams

### #1. Encoded Design is Truth. Blend Design and Engineering.

I’ve participated on enough teams since 2006 making design asset template libraries and documenting design. I am convinced that a design system’s value increases ten-fold when a bridge forms between strong design and engineering practices.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '12',
      image_alt = 'Diagram communicating the preference for a team blending design and developers',
      caption = '',
      class = ''
  ) }}

  


Yes, there are conditions of worldwide scale (example: Google Material) where a design spec even without code is essential. However, in my practice, unifying a visual language, components, and other frameworks into built code realizes the a system’s promised efficiency, clarity, and maintainability.

_Takeaway:_ No matter the client, my most important initial inquiry is into who from each area can work together to achieve this shared goal.

### #2. Half-Time Capacity is a Strength, Not Weakness

Notice the pattern in every team above? All staff members are committed at half-time capacity, otherwise remaining committed to a product. On a moderately sized team, such commitments create relationships into 3–5 key product teams. This allows visibility into what important products need and minimizes bias towards any single product.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '13',
      image_alt = 'Diagram of team members originating from different product teams',
      caption = 'Designers and Engineers, Convening as System Teams Yet Allocated to Disparate Products',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


This comes with risks:

- Product leads conceding a half-time system capacity but still assigning and expecting 32 or more hours of capacity per week for their product.
- Team members straddling multiple conflicting rituals (scrum, planning, critique) that distort the proportion of meetings vs. “getting stuff done.”

Takeaway: You can go with half-timers, just expect to align. To manage up and across. To distinguish commitments bending from those that break. It’ll get complicated, but not enough to seriously damage the effort.

### #3. Balance Continuity with Rotation

For system teams with 2+ staff from any discipline, we’ll sometimes identify permanent members intended for a commitment of a year or more. These members may escalate to full time and persist not just decisions and conventions but also tribal rituals. Continuity is important. On the other hand, we’ll rotate other system staff as adoption occurs across products.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '14',
      image_alt = 'Diagram of permanent versus rotational team members',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


For example, after an initial release, we’ll look for what products are the “next wave” of adopters. Within those products, we’ll look for available and talented designers and engineers available for a three or six month half-time tour with the system team. Everyone wins: the system is learned deeply and predictably applied, and a product can expand and evolve the core to it’s own benefit.

### #4. Anticipate Periodic Contraction as an Opportunity

It’s common for some system staff to shift back to full-time product work after a significant system release. That’s ok.

Parlay the shift into tasks around integrating system concerns, monitor how the former system team member is realizing system potential in their space, and use those product improvements to build the narrative of system benefits and flexibility.

### #5. Onboard New Members as Litmus Test of System Quality

Integrating a new team member is a great (and easy) test case of your system’s design clarity, code quality, and adherence to system promises.

Last year, a fourth engineer onboarded and immediately exposed the system’s woeful process documentation in some areas as well as an insufficient focus on specific accessibility tests. Over the next month, we all scrambled to improve those qualities. Seizing the moment, our new member jumped to solve some of those challenges and established an influential position alongside the “long timers” already on the team.

### #6. System Staff Should Span Constituencies

Is the system serving a portfolio for one but not all lines of business? Then that’s the boundary of where you source the staff. Is the system spanning marketing and product organizations? Then work hard to establish (at a minimum) regular, meaningful collaboration between the two or (ideally) blend staff from both orgs together into a practice.

Without proper representation, it’s hard to get a system made by folks over here adopted by teams over there and everywhere.

* * *

_Apr 27, 2017: The article’s diagrams were updated to remove gender specificity in response to a reader’s comment._



  






  
    

Most organizations are coming to understand systems and why they are important. However, how much does it cost? What team do we need?

* * *

## A System Team Serves Product (or Similar) Teams

Peter Merholz and Kristen Skinner’s excellent book [Org Design for Design Orgs](https://www.amazon.com/Org-Design-Orgs-Building-House/dp/1491938404/ref=sr_1_1?ie=UTF8&qid=1493216532&sr=8-1&keywords=org+design+for+design+orgs) describes models and roles in composing design teams and orgs. In the _Roles and Team Composition_ chapter, they describe an adjunct research team serving across many other teams:



  {{ escom.bar_quote(
      quote = 'UX researchers now have critical mass to be their own team… [with] A Head of Research … supporting the professional growth of the researchers, and maintaining a global understanding of research insights across all of a company’s products and services.'
  ) }}

  


When I read this, I thought to myself “Yup, like design systems teams” solving the widespread, simpler design problems — a visual language, usable interface components, etc.

With this model in mind, I was surprised to hear [Peter reflect on (Spotify’s) systems team last November at UI21](https://aycl.uie.com/virtual_seminars/watch/the_experience_is_the_product/7566) as one that had to “hack a patch, an organizational patch on to [the] model[s]” he’s described. Maybe I’m misunderstanding. But I’ve been on ~15–20 systems teams over the years that serve many teams similarly to (but not the same as) such research practices.

In my experience, the optimal systems team is multidisciplinary and independent to serve many teams making digital things. The system team [behaves as a product being consumed by products (and other teams)](/articles/a-design-system-isn-t-a-project-it-s-a-product-serving-products).



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Diagram of system team supporting many product teams',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


Who’s on that team? Are they full time or part time? What disciplines should be represented? What team(s) do we source them from?

With those questions in mind, this article illustrates the common **stages of growth** of a systems team, share **examples of teams I’ve led** the last four years, and cover **patterns and possible pitfalls** you may face as you form and operate a systems team.

* * *

## Stages of Systems Team Growth

Most individuals I talk to at clients, conferences, and our community’s Design System Slack are evolving across one of four stages of growth: spare timers, allocated individuals, dedicated team, and team-of-teams.

### Stage #1: Spare Timers

Individuals fitting system work on time’s edges often describe how their passionate burst hasn’t really taken off:



  {{ escom.bar_quote(
      quote = '“I’m on my own. I’ve created a {Sketch sticker sheet or mini-Bootstrap code kit} in my extra time, but nobody else is using it. How do I take the next step?”'
  ) }}

  


Systems built on Friday afternoons or Sunday nights don’t endure. A starter Sketch template or starter code is better than nothing. However, spartan efforts aren’t an enterprise‘s practice in the making.

_Takeaway:_ Don’t get discouraged! Many system journeys starts like that. Prove your tools lead to outcomes — consistency, efficiency, reuse — in pilot projects. It’s a stepping stone to educate how a system efforts benefit others.

### Stage 2: Allocated Individual(s)

As system value is recognized, a manager carves an individual’s predictable yet limited allocation (10%? 25%) from a product team commitment and publicizes system responsibility to teams and peers. Empowered with a mandate and time, you start releasing tangible outputs regularly, whether standardized design assets or a coded kit.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Diagram of allocated individuals not yet functioning as a team',
      caption = '',
      class = ''
  ) }}

  


At this point, like-minded systems advocates may start coordinating across design & engineering. Someone may start a backlog, but it may rot with vaguely defined tickets resting for months. Half-baked documentation bubbles up on unpolished web pages or (oh no!) Confluence. Updates happen, but few know when, how, or why.

For a system to thrive, it must publish high-quality outputs and serve adopters dependably.



  {{ escom.bar_quote(
      quote = '“If you are good at it, you create demand within your organization that cannot meet with current allocations.” — Jared Spool, Beyond the UX Tipping Point'
  ) }}

  


With a steadying stream of regular outputs, your customers (product teams) adopt parts, individuals start to relinquish control to system-solved problems, and management warms to the idea of forming a dedicated team.

### Stage 3: System Team–as–Product Team

In setting up a formal system team, strive for a mix with recognized authority from both design and engineering disciplines.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Diagram of system teams of varying sizes',
      caption = 'High-level system team composition, by size',
      class = ''
  ) }}

  


Teams I’ve recently formed and led are composed as a blend of:

- **MUST HAVE: Design** members can span sub-disciplines — visual, interaction, information architecture to name a few — but the team must excel in crafting an elegant visual language.
- **MUST HAVE: Engineering** brings a front-end focus with HTML & CSS knowledge, seasoned skills to establish conventions, and tool building.
- **SHOULD HAVE: Product Management and Leadership** skills to establish vision, drive direction, curate roadmaps, monitor adoption, and organize backlogs, scrums and critiques.
- **COULD HAVE** : **Speciality** concerns like content strategy, accessibility, performance, SEO, and more. While valuable, keep in mind that systems first and foremost marry design and engineering.
- **USUALLY DON’T HAVE** : **QA** and **Research.** QA funding often isn’t sufficient and [system teams can establish practices to assess quality anyway](/articles/component-qa-in-design-systems). Research can exist as a sibling service to product teams.

### Stage 4: System Team of Teams

Some massive enterprises (like, I suspect, Google, IBM, GE, Cisco, or Microsoft) grow systems efforts to span an umbrella of multiple interrelated teams to accomplish system goals.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Diagram of a team of teams',
      caption = 'Team of Teams',
      class = ''
  ) }}

  


For most of us serving far fewer products than they do, this scale is completely unrealistic and unnecessary. Sure, it’s helpful to see proportions attributed to each practice. However, this scale can scare away would be sponsors of a Systems Team-as-Product Team. Align your team size with realistic objectives and key results you want to obtain.

* * *

## System Team Examples

Although I’ve participated in design system teams continuously since 2006, the practice swerved considerable around 2012 when responsive happened, HTML & CSS strengthened, and unicorns started (partially) designing systematically in code.

The following examples express a progression of systems team models I’ve been involved with since then.

### Example 1: eCommerce Going Responsive

_What Worked Well_: This dedicated team designed and documented copious standards in a customized web-based experience. It was the “big kahuna” system: style, interaction, components, patterns, brand, editorial, SEO, accessibility, the works! As the enterprise took ~2 years to “go responsive,” the system was critical in converging a disparate customer journey.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Diagram of a 6 person system team',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '7',
      image_alt = 'Legend of discipline types, such as designer and developer',
      caption = '',
      class = ''
  ) }}

  


_What I’ve Done Differently Since_: Sigh, engineering. Our system team built a robust component library to prototype responsive designs and build the standard site. Yet engineering leads resisted our code and never built a library for their community. The result? Duplicative efforts, inefficiencies, and inconsistencies except for devs sneaking our code to into their builds.

I’ve vowed to never pursue a codeless system again in environments that obviously need it yet engineering leads block the pursuit.

* * *

### Example 2: A Design Language for a Exploding Org

_What Worked Well_: With the org ballooning from ~30 to 200+ designers in 12–18 months, the system team led the development of a shared design language documented on a custom standards site (thus, the front-end developer). Given the massive, distributed scale of the design org, we employed federated designers to drive interaction, UX, and icon basics.

While scope was smaller — just visual style, buttons and forms in six months of work — it was hailed as a success given the scale and challenges faced.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '8',
      image_alt = 'Diagram of five person system team',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


_What I’ve Done Differently Since_: More in-house staff making and connecting. While we effectively produced outputs, shepherding such a large community was strained by geography, technology, and yet unstable operational practices. The org needed more in-house system staff & stability for that.

And, again: code. We should have released a kit and asked forgiveness later.

* * *

### Example 3: The Straightforward Web Site Library

_What Worked Well_: Armed with a well-defined visual language from a separate agency, we designed, built, and documented a straightforward component library for diverse, content-rich web properties. Our team successfully deployed a first release in three months, and followed up with maintenance and growth for a limited period.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '9',
      image_alt = 'Diagram of four person system team',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


_What I’ve Done Differently Since_: Despite overt warnings about capacity required to keep it alive, the library went into hibernation as staff dispersed. Our succession and rollout plan wasn’t strong enough to withstand my agency’s departure. In projects since, I’ve assertively planned allocations and succession with in-house leaders throughout a system’s formative period.

* * *

### Example 4: Digital Product Ecosystem

_What Worked Well_: I paired with an in-house designer to design and document the style and components based on flagship product redesign we’d done a quarter prior. Even better, engineering invested three half-time developers from flagship products who wove system outputs incrementally into ongoing product work.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '10',
      image_alt = 'Diagram of six perosn system team',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


We released a library `v1.0` in three months and followed with quarterly cycles to refine tooling and expand the library’s catalog. As design, engineering and product convened for 2017 planning, the VP Engineering hailed the system:



  {{ escom.pull_quote(
      quote = '“The most important thing we did last year was build this system. It’s the foundation of all our future work.”',
      attribution = 'VP Engineering',
      class = 'escom-pull-quote--light'
  ) }}

  

* * *

### Example 5: The Library With Competitors

_What Has Worked Well, So Far:_ While we began to optimize and expand an existing core library, additional libraries emerged in other lines-of-business. Teams were confused: which to adopt? Instead of competing, we coordinated efforts and integrated into a larger, single team.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '11',
      image_alt = 'Diagram of 9 person system team with other specialists contributing',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


There was a short-term drag to re-team and refactor code to flexibly serve everyone. Scrums and planning got longer, too. However, our path forward will produce together for the foreseeable future, and the CEO and another VP seem convinced:



  {{ escom.pull_quote(
      quote = '“I was sensing and had conceded we’d have two libraries, but then a third was emerging. I’m delighted to see we’ve found a way to make just one.”',
      attribution = 'Delighted CEO',
      class = 'escom-pull-quote--light'
  ) }}

  


Another component of scaling the practice was engaging the federated design community to own concerns: UX, icons, brand, charts, content, and accessibility. While none of these “segment owners” has dedicated capacity, all are now points-of-contact to moderate discussions, drive priorities, and engage peers to deliver outputs.

* * *

## Lessons Learned Managing System Teams

### #1. Encoded Design is Truth. Blend Design and Engineering.

I’ve participated on enough teams since 2006 making design asset template libraries and documenting design. I am convinced that a design system’s value increases ten-fold when a bridge forms between strong design and engineering practices.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '12',
      image_alt = 'Diagram communicating the preference for a team blending design and developers',
      caption = '',
      class = ''
  ) }}

  


Yes, there are conditions of worldwide scale (example: Google Material) where a design spec even without code is essential. However, in my practice, unifying a visual language, components, and other frameworks into built code realizes the a system’s promised efficiency, clarity, and maintainability.

_Takeaway:_ No matter the client, my most important initial inquiry is into who from each area can work together to achieve this shared goal.

### #2. Half-Time Capacity is a Strength, Not Weakness

Notice the pattern in every team above? All staff members are committed at half-time capacity, otherwise remaining committed to a product. On a moderately sized team, such commitments create relationships into 3–5 key product teams. This allows visibility into what important products need and minimizes bias towards any single product.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '13',
      image_alt = 'Diagram of team members originating from different product teams',
      caption = 'Designers and Engineers, Convening as System Teams Yet Allocated to Disparate Products',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


This comes with risks:

- Product leads conceding a half-time system capacity but still assigning and expecting 32 or more hours of capacity per week for their product.
- Team members straddling multiple conflicting rituals (scrum, planning, critique) that distort the proportion of meetings vs. “getting stuff done.”

Takeaway: You can go with half-timers, just expect to align. To manage up and across. To distinguish commitments bending from those that break. It’ll get complicated, but not enough to seriously damage the effort.

### #3. Balance Continuity with Rotation

For system teams with 2+ staff from any discipline, we’ll sometimes identify permanent members intended for a commitment of a year or more. These members may escalate to full time and persist not just decisions and conventions but also tribal rituals. Continuity is important. On the other hand, we’ll rotate other system staff as adoption occurs across products.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '14',
      image_alt = 'Diagram of permanent versus rotational team members',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


For example, after an initial release, we’ll look for what products are the “next wave” of adopters. Within those products, we’ll look for available and talented designers and engineers available for a three or six month half-time tour with the system team. Everyone wins: the system is learned deeply and predictably applied, and a product can expand and evolve the core to it’s own benefit.

### #4. Anticipate Periodic Contraction as an Opportunity

It’s common for some system staff to shift back to full-time product work after a significant system release. That’s ok.

Parlay the shift into tasks around integrating system concerns, monitor how the former system team member is realizing system potential in their space, and use those product improvements to build the narrative of system benefits and flexibility.

### #5. Onboard New Members as Litmus Test of System Quality

Integrating a new team member is a great (and easy) test case of your system’s design clarity, code quality, and adherence to system promises.

Last year, a fourth engineer onboarded and immediately exposed the system’s woeful process documentation in some areas as well as an insufficient focus on specific accessibility tests. Over the next month, we all scrambled to improve those qualities. Seizing the moment, our new member jumped to solve some of those challenges and established an influential position alongside the “long timers” already on the team.

### #6. System Staff Should Span Constituencies

Is the system serving a portfolio for one but not all lines of business? Then that’s the boundary of where you source the staff. Is the system spanning marketing and product organizations? Then work hard to establish (at a minimum) regular, meaningful collaboration between the two or (ideally) blend staff from both orgs together into a practice.

Without proper representation, it’s hard to get a system made by folks over here adopted by teams over there and everywhere.

* * *

_Apr 27, 2017: The article’s diagrams were updated to remove gender specificity in response to a reader’s comment._



  
