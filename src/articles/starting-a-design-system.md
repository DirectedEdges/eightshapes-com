---
  category : Process
  title : Starting a Design System
  deck : From Pitching a Strategy to Launching 1.0 and Beyond
  title_abbreviation : Starting a Design System
  author_id : nathan
  date : 2017-08-07
  masthead : true
  layout : article.njk
  tags : []
---


{% import '../_includes/escom.njk' as escom with context %}



  
    
Starting a design system to serve a product portfolio isn’t a typical project. Sure, the effort produces recognizable outputs like a visual language and UI components. Making it should feel familiar, cycling through iterations of design, development, and documentation.

However, the system’s promise isn’t a delivered library. The system’s promise is enabling a consistent experience spread across products and sustained with a dependable, predictable practice. System enthusiasts must become entrepreneurs, pitching and selling ideas that get a possibly resistant organization to commit. Over time, a system achieves meaningful outcomes by coordinating and collaborating across organizational boundaries and pesky culture. It’s a process.

This arc to start a system — set a **strategy** , launch a **first release** , and **operate** regularly to foster adoption and community — has proven effective in the five systems I’ve led since early 2016. All were made, adopted, and continue to operate today with activities and timelines described here. May the approach inspire as you start a journey towards a system that endures.

* * *

## Commit to a System Strategy

A design system doesn’t start with choosing a first color. Instead, ground a system in a strategy that discerns customer needs, sets objectives, explores and converges on a design direction, pitches a strategy, and obtain an organization’s commitment.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = 'Diagram of a detailed gantt chart of a strategy phase',
      caption = '',
      class = ''
  ) }}

  

* * *

### Discover Customer Needs

Like any product we design and develop, a design system must address the needs of adopting product teams within the current landscape of culture, tools, existing systems, and practices.

Discovery activities can include:

- **Interviews** of key (potential) contributors, influencers and leaders to assess perspective, attitudes, culture, and existing practices.
- **Survey** ing a broader organization of stakeholders attitudes and posture towards a system, priorities/needs, aspirations, and threats.
- **Requirements** gathering via task analysis, tech planning, and convention setting (using tools like [Brad Frost](https://twitter.com/brad_frost)’s [Front End Questionnaire](https://github.com/bradfrost/frontend-guidelines-questionnaire)).
- **Product tours** to immerse in as-is products and in-flight designs to which the system will apply, taking screenshots and notes.
- **System(s) reviews** assessing as-is design assets, code libraries, standards documentation depth and quality, and governance models.

* * *

### Engage Stakeholders in Inclusive Workshops

Discovery can lead to in-person presentations and working sessions to summarize progress and gather more input. We’ll convene large groups of designers, engineers, executives and others for sessions to:

- Present discovery and survey findings and recommendations.
- Define system and products scope via exercises like [Parts, Products & People](/articles/picking-parts-products-people) and [Component Cut Up](/articles/the-component-cut-up-workshop) inventories of existing products.
- Discuss models and candidates for [system teams](/articles/designing-a-systems-team) and [leaders](/articles/design-system-leader-s-manager-s), [community participation](/articles/team-models-for-scaling-a-design-system), and [contributions](/articles/contributions-to-design-systems).
- Gather engineers and tech managers to confirm assumptions, choose framework(s), and identify dev environment and hosting needs.
- [Roadmap upcoming system activity](/articles/what-s-will-your-design-system-deliver) including [reference design](/articles/reference-designs-for-systems) concepts, first release cycle process, and how we’ll [measure success](/articles/measuring-design-system-success).

* * *

### Converge on a Conceptual Direction

More often than not, establishing a design system coincides with developing a new visual language from the ground up _and_ applying that language to UI components that product teams agree to use. Your success depends on getting your organization on board with the direction you’re headed.

Therefore, it’s critical to demonstrate conceptually your new visual direction with pictures of your product experience before and after a system applies. This process must include and even employ members of your community every step of the way.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Illustration of reference designs before and after at Marriott',
      caption = 'Early-stage <a href="/articles/reference-designs-for-systems" target="_blank">reference designs</a> for the Marriott.com 2012–2014 responsive redesign period.',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


For more on preparing and presenting concepts, read [Reference Designs for Systems: Page Concepts Comparing Before & After, with a System Twist](/articles/reference-designs-for-systems).

* * *

### Pitch a Strategy with a Clear Proposal

Ultimately, a strategy is nothing if the people that matter – both executives with funds and communities of products that adopt – don’t buy into it. So you must pitch a strategy. And that means creating a presentation deck.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Illustration of a Keynote presentation deck in light table view',
      caption = 'A sample system pitch deck, from later 2016',
      class = ''
  ) }}

  


Our typical strategy pitch presentation covers topics like:

- Defining what a design system is and why it’s important.
- **Stories** expressing value, such as pairing the universal [And You Thought Buttons Were Easy](/articles/and-you-thought-buttons-were-easy) with other challenges relevant to an organization.
- Proposed **scope, timing, products and processes** included in `1.0` release, subsequent product adoption and support, and system development and maintenance that follows (the how and when).
- Recommended multi-disciplinary [**system team** composition](/articles/designing-a-systems-team) and how they’ll engage contributors and decision-makers (the who).

* * *

### Get a Commitment to Purpose and Team

Don’t be shy. You are asking to launch a new product at your organization, so you have to ask. What are you asking for?

1. Capacity of staff to make & maintain a system, now _and_ after it launches.
2. Products – often, many many products – to anticipate responsibility for making significant changes sometime in the future.
3. A community and organization to evolve how it operates, shares work, makes decisions, and more. Organizational change is hard.

We’ll often leave a pitch with direct or tacit approval to get on with it. I’m buoyed even more when a CEO walks up to my in-house peers and I huddling afterwards and says:



  {{ escom.bar_quote(
      quote = 'What you shared is very compelling and valuable. Great job. Let me know whatever you need to make this happen.'
  ) }}

  


Yet verbal approvals don’t mean starting tomorrow. Sometimes, things stall.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Diagram of a gantt chart with a disruption of inactivity between a strategy and build phase',
      caption = '',
      class = ''
  ) }}

  


Many factors can slow momentum. Maybe your first pitch triggered a followup pitch to operations and HR to shift staff. Perhaps you have to wait for the next round in an enterprise’s quarterly operating budget process. Or there’s simply a transition period as the system team shifts from product team commitments. Stay the course! Stay persistent! You’ll get there.

With approval, at some point, you’ll officially start making a system.

* * *

## Launch a 1.0 Release

You’ve secured an organizational mandate and a squad of designers, engineers, leaders and others. Scope is clear. It’s time to design, build and document a system sprint by sprint to get to a first release.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Diagram of a gantt chart of a build phase broken into phases (like alpha and beta) and sprints',
      caption = '',
      class = ''
  ) }}

  


As essential parts emerge, an alpha `0.1` provides early adopters a sneak peek. As the component library grows, early adoption can commence using beta releases like `0.3` and beyond.

Yet, while sprints can yield incremental releases to solidify your process, your eye is on the prize of the release after which all teams adopt. Simpler libraries can take 2–3 months while robust component catalogs — flexible theming, sophisticated tooling, robust documentation — may take a couple months longer. By the cycle’s end, the `1.0` represents the “big launch” you publicize is generally available to product squads at the ready.

* * *

### Delivering Scope Incrementally

A first release cycles delivers something where there was nothing. As a system progresses, its customers, sponsors, and even the team itself must have an idea of what will done by when as well as comfort in the inexact timing of finishing each piece.

During that time, a newly formed team will acclimate to a development process to deliver each part, here depicted as design/build in orange and document/publish in dark gray.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Diagram of a gantt chart delivering features step=by-step across sprints',
      caption = '',
      class = ''
  ) }}

  


For high-level planning, detailed workflows per item aren’t important. Neither is the order or names of specific components in the example above (although, frankly, that’s a pretty common scope and order of delivery). Instead, I focus on how our team is:

- Delivering parts progressively over sprints.
- Delivering more parts per sprint later as productivity increases.

What must everyone trust? That the system team will deliver an initial library — dare I say “MVP?” — that can be adopted by a predictable time. That’s why I’ll reinforce repeatedly that we’re on course to launch a `1.0` that delivers a strong visual foundation and 12 to 16 UI components.

* * *

## Operate Beyond the 1.0 Release

From the outset of pursuing a design system, even as early as your interviews and workshops during Discovery, it is essential to communicate that [a design system isn’t a project, it’s a product](/articles/a-design-system-isn-t-a-project-it-s-a-product-serving-products). It’ll be practiced, delivered, and maintained over time that doesn’t end with `1.0`.

As a result, I’ll be working with leadership to arrange capacity and processes for what’s next as the team is amid an intense first release cycle.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '7',
      image_alt = 'Diagram of a gantt chart of a subsequent release cycle',
      caption = '',
      class = ''
  ) }}

  


The second development cycle also settles into a regular cadence of planning and delivery, such as quarters of six or seven sprints. The objective isn’t launch an unexpected `2.0`, which would be premature and tumultuous. Instead, in contrast with an intense push to `1.0`, the team must start to perform with discipline and be perceived as “business as usual.”

* * *

### Shift from Formation to Operations

This ongoing program requires a pivot from a formative to operational mindset. No longer limited to delivering core features, activities diversify to:

- Extending, optimizing, and fixing defects to **maintain** what’s there.
- Delivering **new features** important to the business.
- Coordinating and supporting [**product adoption**](/articles/adopting-design-systems) with training, paired integration, help, monitoring, and reporting.
- Cultivating **community** of influence and [contribution](/articles/contributions-to-design-systems) across designers and engineers.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '8',
      image_alt = 'Diagram of a gantt chart spanning a first and subsequent release cycle',
      caption = 'Emphasizing an adoption plan brings focus to the relationship between a system and products it serves',
      class = ''
  ) }}

  


In particular, helping a product organization [adopt a design system](/articles/adopting-design-systems) requires deliberate, focused, and effortful collaboration. Be equipped with a concise presentation deck and demo, and ready to present it over and over and over. Emphasizing adoption in a high-level plan creates a useful focus on your most important relationships: a system and all its adopting products.

* * *

### Invest the Program in Regular Time Increments

These periods maintain a growing library but must also must continue delivering demonstrable business value. Like a system’s own patterns, planning and [delivering the program over increments](http://www.scaledagileframework.com/program-increment/) builds a pattern of newsworthy progress, syncing with products, and [roadmapping](/articles/what-s-will-your-design-system-deliver).



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '9',
      image_alt = 'Diagram of a gantt chart spanning many quarterly cycles of delivery',
      caption = '',
      class = ''
  ) }}

  


For each quarter, you could deliver **epics** like:

- In Q3, **navigation** components, patterns, and **responsive** layouts.
- In Q4, diverse **alert** components with editorial guidance, plus **motion**!
- In Q1 next year, **data visualization** , **charts** , and robust illustrations.
- In Q2 next year, a broad sub-catalog of **hero** and **content** components.

Elongating the time scale even more, mature system programs grow into establishing **objectives** or **themes** reconsidered annually and tracked just like any other product, portfolio and program across an enterprise.

This may seem far off or even scary as you get a system off the ground. But even as you deliver essentials first, you can use concepts of regular planning cadence, epics and themes to illustrate where your system journey may go.

  






  
    
Starting a design system to serve a product portfolio isn’t a typical project. Sure, the effort produces recognizable outputs like a visual language and UI components. Making it should feel familiar, cycling through iterations of design, development, and documentation.

However, the system’s promise isn’t a delivered library. The system’s promise is enabling a consistent experience spread across products and sustained with a dependable, predictable practice. System enthusiasts must become entrepreneurs, pitching and selling ideas that get a possibly resistant organization to commit. Over time, a system achieves meaningful outcomes by coordinating and collaborating across organizational boundaries and pesky culture. It’s a process.

This arc to start a system — set a **strategy** , launch a **first release** , and **operate** regularly to foster adoption and community — has proven effective in the five systems I’ve led since early 2016. All were made, adopted, and continue to operate today with activities and timelines described here. May the approach inspire as you start a journey towards a system that endures.

* * *

## Commit to a System Strategy

A design system doesn’t start with choosing a first color. Instead, ground a system in a strategy that discerns customer needs, sets objectives, explores and converges on a design direction, pitches a strategy, and obtain an organization’s commitment.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = 'Diagram of a detailed gantt chart of a strategy phase',
      caption = '',
      class = ''
  ) }}

  

* * *

### Discover Customer Needs

Like any product we design and develop, a design system must address the needs of adopting product teams within the current landscape of culture, tools, existing systems, and practices.

Discovery activities can include:

- **Interviews** of key (potential) contributors, influencers and leaders to assess perspective, attitudes, culture, and existing practices.
- **Survey** ing a broader organization of stakeholders attitudes and posture towards a system, priorities/needs, aspirations, and threats.
- **Requirements** gathering via task analysis, tech planning, and convention setting (using tools like [Brad Frost](https://twitter.com/brad_frost)’s [Front End Questionnaire](https://github.com/bradfrost/frontend-guidelines-questionnaire)).
- **Product tours** to immerse in as-is products and in-flight designs to which the system will apply, taking screenshots and notes.
- **System(s) reviews** assessing as-is design assets, code libraries, standards documentation depth and quality, and governance models.

* * *

### Engage Stakeholders in Inclusive Workshops

Discovery can lead to in-person presentations and working sessions to summarize progress and gather more input. We’ll convene large groups of designers, engineers, executives and others for sessions to:

- Present discovery and survey findings and recommendations.
- Define system and products scope via exercises like [Parts, Products & People](/articles/picking-parts-products-people) and [Component Cut Up](/articles/the-component-cut-up-workshop) inventories of existing products.
- Discuss models and candidates for [system teams](/articles/designing-a-systems-team) and [leaders](/articles/design-system-leader-s-manager-s), [community participation](/articles/team-models-for-scaling-a-design-system), and [contributions](/articles/contributions-to-design-systems).
- Gather engineers and tech managers to confirm assumptions, choose framework(s), and identify dev environment and hosting needs.
- [Roadmap upcoming system activity](/articles/what-s-will-your-design-system-deliver) including [reference design](/articles/reference-designs-for-systems) concepts, first release cycle process, and how we’ll [measure success](/articles/measuring-design-system-success).

* * *

### Converge on a Conceptual Direction

More often than not, establishing a design system coincides with developing a new visual language from the ground up _and_ applying that language to UI components that product teams agree to use. Your success depends on getting your organization on board with the direction you’re headed.

Therefore, it’s critical to demonstrate conceptually your new visual direction with pictures of your product experience before and after a system applies. This process must include and even employ members of your community every step of the way.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Illustration of reference designs before and after at Marriott',
      caption = 'Early-stage <a href="/articles/reference-designs-for-systems" target="_blank">reference designs</a> for the Marriott.com 2012–2014 responsive redesign period.',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


For more on preparing and presenting concepts, read [Reference Designs for Systems: Page Concepts Comparing Before & After, with a System Twist](/articles/reference-designs-for-systems).

* * *

### Pitch a Strategy with a Clear Proposal

Ultimately, a strategy is nothing if the people that matter – both executives with funds and communities of products that adopt – don’t buy into it. So you must pitch a strategy. And that means creating a presentation deck.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Illustration of a Keynote presentation deck in light table view',
      caption = 'A sample system pitch deck, from later 2016',
      class = ''
  ) }}

  


Our typical strategy pitch presentation covers topics like:

- Defining what a design system is and why it’s important.
- **Stories** expressing value, such as pairing the universal [And You Thought Buttons Were Easy](/articles/and-you-thought-buttons-were-easy) with other challenges relevant to an organization.
- Proposed **scope, timing, products and processes** included in `1.0` release, subsequent product adoption and support, and system development and maintenance that follows (the how and when).
- Recommended multi-disciplinary [**system team** composition](/articles/designing-a-systems-team) and how they’ll engage contributors and decision-makers (the who).

* * *

### Get a Commitment to Purpose and Team

Don’t be shy. You are asking to launch a new product at your organization, so you have to ask. What are you asking for?

1. Capacity of staff to make & maintain a system, now _and_ after it launches.
2. Products – often, many many products – to anticipate responsibility for making significant changes sometime in the future.
3. A community and organization to evolve how it operates, shares work, makes decisions, and more. Organizational change is hard.

We’ll often leave a pitch with direct or tacit approval to get on with it. I’m buoyed even more when a CEO walks up to my in-house peers and I huddling afterwards and says:



  {{ escom.bar_quote(
      quote = 'What you shared is very compelling and valuable. Great job. Let me know whatever you need to make this happen.'
  ) }}

  


Yet verbal approvals don’t mean starting tomorrow. Sometimes, things stall.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Diagram of a gantt chart with a disruption of inactivity between a strategy and build phase',
      caption = '',
      class = ''
  ) }}

  


Many factors can slow momentum. Maybe your first pitch triggered a followup pitch to operations and HR to shift staff. Perhaps you have to wait for the next round in an enterprise’s quarterly operating budget process. Or there’s simply a transition period as the system team shifts from product team commitments. Stay the course! Stay persistent! You’ll get there.

With approval, at some point, you’ll officially start making a system.

* * *

## Launch a 1.0 Release

You’ve secured an organizational mandate and a squad of designers, engineers, leaders and others. Scope is clear. It’s time to design, build and document a system sprint by sprint to get to a first release.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Diagram of a gantt chart of a build phase broken into phases (like alpha and beta) and sprints',
      caption = '',
      class = ''
  ) }}

  


As essential parts emerge, an alpha `0.1` provides early adopters a sneak peek. As the component library grows, early adoption can commence using beta releases like `0.3` and beyond.

Yet, while sprints can yield incremental releases to solidify your process, your eye is on the prize of the release after which all teams adopt. Simpler libraries can take 2–3 months while robust component catalogs — flexible theming, sophisticated tooling, robust documentation — may take a couple months longer. By the cycle’s end, the `1.0` represents the “big launch” you publicize is generally available to product squads at the ready.

* * *

### Delivering Scope Incrementally

A first release cycles delivers something where there was nothing. As a system progresses, its customers, sponsors, and even the team itself must have an idea of what will done by when as well as comfort in the inexact timing of finishing each piece.

During that time, a newly formed team will acclimate to a development process to deliver each part, here depicted as design/build in orange and document/publish in dark gray.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Diagram of a gantt chart delivering features step=by-step across sprints',
      caption = '',
      class = ''
  ) }}

  


For high-level planning, detailed workflows per item aren’t important. Neither is the order or names of specific components in the example above (although, frankly, that’s a pretty common scope and order of delivery). Instead, I focus on how our team is:

- Delivering parts progressively over sprints.
- Delivering more parts per sprint later as productivity increases.

What must everyone trust? That the system team will deliver an initial library — dare I say “MVP?” — that can be adopted by a predictable time. That’s why I’ll reinforce repeatedly that we’re on course to launch a `1.0` that delivers a strong visual foundation and 12 to 16 UI components.

* * *

## Operate Beyond the 1.0 Release

From the outset of pursuing a design system, even as early as your interviews and workshops during Discovery, it is essential to communicate that [a design system isn’t a project, it’s a product](/articles/a-design-system-isn-t-a-project-it-s-a-product-serving-products). It’ll be practiced, delivered, and maintained over time that doesn’t end with `1.0`.

As a result, I’ll be working with leadership to arrange capacity and processes for what’s next as the team is amid an intense first release cycle.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '7',
      image_alt = 'Diagram of a gantt chart of a subsequent release cycle',
      caption = '',
      class = ''
  ) }}

  


The second development cycle also settles into a regular cadence of planning and delivery, such as quarters of six or seven sprints. The objective isn’t launch an unexpected `2.0`, which would be premature and tumultuous. Instead, in contrast with an intense push to `1.0`, the team must start to perform with discipline and be perceived as “business as usual.”

* * *

### Shift from Formation to Operations

This ongoing program requires a pivot from a formative to operational mindset. No longer limited to delivering core features, activities diversify to:

- Extending, optimizing, and fixing defects to **maintain** what’s there.
- Delivering **new features** important to the business.
- Coordinating and supporting [**product adoption**](/articles/adopting-design-systems) with training, paired integration, help, monitoring, and reporting.
- Cultivating **community** of influence and [contribution](/articles/contributions-to-design-systems) across designers and engineers.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '8',
      image_alt = 'Diagram of a gantt chart spanning a first and subsequent release cycle',
      caption = 'Emphasizing an adoption plan brings focus to the relationship between a system and products it serves',
      class = ''
  ) }}

  


In particular, helping a product organization [adopt a design system](/articles/adopting-design-systems) requires deliberate, focused, and effortful collaboration. Be equipped with a concise presentation deck and demo, and ready to present it over and over and over. Emphasizing adoption in a high-level plan creates a useful focus on your most important relationships: a system and all its adopting products.

* * *

### Invest the Program in Regular Time Increments

These periods maintain a growing library but must also must continue delivering demonstrable business value. Like a system’s own patterns, planning and [delivering the program over increments](http://www.scaledagileframework.com/program-increment/) builds a pattern of newsworthy progress, syncing with products, and [roadmapping](/articles/what-s-will-your-design-system-deliver).



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '9',
      image_alt = 'Diagram of a gantt chart spanning many quarterly cycles of delivery',
      caption = '',
      class = ''
  ) }}

  


For each quarter, you could deliver **epics** like:

- In Q3, **navigation** components, patterns, and **responsive** layouts.
- In Q4, diverse **alert** components with editorial guidance, plus **motion**!
- In Q1 next year, **data visualization** , **charts** , and robust illustrations.
- In Q2 next year, a broad sub-catalog of **hero** and **content** components.

Elongating the time scale even more, mature system programs grow into establishing **objectives** or **themes** reconsidered annually and tracked just like any other product, portfolio and program across an enterprise.

This may seem far off or even scary as you get a system off the ground. But even as you deliver essentials first, you can use concepts of regular planning cadence, epics and themes to illustrate where your system journey may go.

  
