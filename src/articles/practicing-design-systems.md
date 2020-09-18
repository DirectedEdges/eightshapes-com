---
  category : Process
  title : Practicing Design Systems
  deck : Address How Do I…? Questions to Form Processes That Matter
  title_abbreviation : Building a Practice
  author_id : nathan
  date : 2017-10-17
  masthead : true
  layout : article.njk
  tags : []
---

{% import '../_includes/escom.njk' as escom with context %}

Early on, design system efforts can focus on [defining _what_ a system is](/articles/defining-design-systems) or fret over [principles](/articles/principles-of-designing-systems). However, conversation can shift swiftly towards defining and documenting _how_ it works. Stakeholders want answers to:

{{ escom.pull_quote(
      quote = 'How do I … add a component I designed to the library?',
      attribution = 'Contributing Designer',
      class = 'escom-pull-quote--light'
  ) }}

{{ escom.pull_quote(
      quote = 'How do I … get my pull request approved by teammates?',
      attribution = 'Systems Team Developer',
      class = 'escom-pull-quote--light'
  ) }}

{{ escom.pull_quote(
      quote = 'How do I … adopt a system, without it getting in the way of my priorities?',
      attribution = 'Every Adopting Product Manager, ever, in my career of working systems',
      class = 'escom-pull-quote--light'
  ) }}

One client recently started a Google Doc, [freelisted](http://www.usabilitybok.org/free-listing) questions, and three pages later was befuddled at what to do next. So many questions! Unlocking the answers is essential for a system to thrive as a practice within an organization.

**Design Systems Practice**: System activities and methods performed habitually and regularly with proficiency as a team, enterprise, and community.

Establishing frictionless processes requires knowing the **groups and disciplines** in play, identifying relevant **“How Do I&nbsp;…?”** questions, and forming and documenting processes to address each over time. I’ve got a **full inventory** to get you started. Overwhelmed? Then conduct my [“How Do I…?” Practice Cards Activity](/articles/how-do-i-practice-cards-activity) with your groups to sort out what matters to you.

---

## System Experience Roles & Disciplines

I think of my design system customers using a model that relates groups and disciplines to form perspectives with distinct needs.

### Groups

- [**_System Team_**](/articles/designing-a-systems-team) member allocated to make the system
- [**_Adopter_**](/articles/adopting-design-systems) on a team using the system to make experiences, serving as a primary customer that uses or consumes a system
- [**_Contributor_**](/articles/contributions-to-design-systems) outside the system team making something for the system
- **_Leader_** (usually Directors/VPs) steering a system within an organization
- **_Ops_** configuring tools a system like repos, JIRA boards, and deployments

Yes, some **_Adopters_** can be **_Contributors_** too. In my practice, a person’s needs shift when taking one mindset or the other. Plus, the vast majority of adopters (90%–95%) never become a contributor. As a result, crafting distinct processes for each has been tremendously valuable.

### Disciplines

- **_Designer_** (including UX, Visual, IxD, IA, and UI)
- **_Developer_** (or “engineer,” usually front-end, but can be a “full stack”)
- **_Product Manager_**
- **_Content_** **_Strategist_** / Copywriter (while distinct, usually one or the other)
- **_Accessibility_** **_Specialist_**
- **_Researcher_**
- **_QA_**

### Group + Discipline = A Perspective to&nbsp;Consider

Combining a role and discipline — such as a **_Designer as Adopter_**  — results in so many perspectives to consider! When setting setting up a practice, we’ll focus on eight primary perspectives:

- **_System Team Designer_**
- **_System Team Developer_**
- **_System Team Product Manager_**
- **_Adopting Designer_**
- **_Adopting Developer_**
- **_Adopting Product Manager_**
- **_Contributing Designer_**
- **_Contributing Developer_**

_Takeaway_: All perspectives are valuable, yet value varies. A system practice must know its customers and prioritize investments to serve them well.

---

## Forming “How Do I…?” Questions, by Perspective

From each perspective, we’ll formulate many “How do I…?” questions that frame how the system works for them.

### As an Individual of a Specific Discipline

For example, as a **_System Team Developer_** , how do I [**build a system feature**](/articles/design-system-features-step-by-step) in code?&nbsp;… **release** a version?&nbsp;… release a **hot fix**?

### As an Individual of Any Discipline

Some questions are relevant to any discipline — designer, developer, or product manager — within a group. For example, as an **_Adopter_** , how do I get **help**?&nbsp;… **submit a defect**?&nbsp;… **upgrade** to a new release?

### As a Collective Group

Finally, some are relevant to a entire group, so frame the activity with “we.” For example, as a **_System Team_** , how do we meet as a team to discuss **status**?&nbsp;… convene to **critique** a teammate’s work?&nbsp;… **organize** & **track** our work on a daily basis (Hint: this is an easy answer: use a tool like JIRA)?

_Takeaway_: There’s around 50 recurring processes to define and document across perspectives, some simple and others complicated. If we know the questions and we can’t do everything at once at an infinite level of detail, then we’ll need to prioritize.

---

## The Depth of Defining a&nbsp;Process

Not all processes require the same level of workflow modeling, assignment of responsibilities, and documentation. Heck, some processes need _no_ documentation:

- <strong>“As a system team, how do we organize and track our tasks?”</strong><br>Depth &amp; Formality:<em> None, though it requires — ironically, as a task organizer — tasks that precede it to decide what system to use and then set it up.<br></em>Urgency:<em> Immediately.</em>

On the other hand, other processes are vitally important and require deliberately crafted, high-quality step-by-step documentation. For example, the “Getting Started for Developers” guide is a staple of every UI toolkit code library.

- <strong>As an adopting developer, how do I get started?</strong><br>Depth &amp; Formality: <em>High, outlining in detailed easy-to-follow steps how to setup the code, style components, invoke components in an app, and more.<br></em>Urgency<em>: By </em><code><em>0.1</em></code><em>, not just because some developers may adopt early but also to solidify this essential process that’s a foundation for everything you build.</em>

  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = 'Screenshots of prominent design systems\' getting started pages',
      caption = 'Getting Started pages — or even sections! – on well known UI toolkits',
      class = 'escom-article-figure--break-bleed'
  ) }}

I’ve always appreciated the details and clarity of [Material Design Lite’s Getting Started walkthrough](https://getmdl.io/started/index.html). U.S. Web Design Standards effectively pairs [a developer guide](https://standards.usa.gov/getting-started/developers/) with a “Getting Started” guide for designers too. GE’s Predix library has [_an entire section of their site_](https://www.predix-ui.com/#/about/introduction) devoted to this process, with full videos, links to tutorials, and so much more.

_Takeaway_: When faced with a vast array of processes, find comfort in that some workflows are simple and others complicated. Some warrant extensive documentation while others skimp (at least, until a practice scales further).

---

## The “How Do I…” Question Inventory

The following list helps teams form system practices by considering a wide variety of perspectives and questions. Some questions may not directly be a process (For example: “As an adopter, how do I know what **browsers and devices** you support?”), but indirectly requires an essential process whose description rolls off your tongue when asked.

Every team and organization is different. Surely there are additional questions relevant to you given your conditions and circumstances. Got a recommendation for another question? Let me know!

### System Team

- As a system team, how do we get [from nothing to **launch a first release**](/articles/starting-a-design-system)?
- As a system team, how do we evolve our [**roadmap**](/articles/roadmaps-for-design-systems) & priorities?
- As a system team, how do we convene regularly to plan **release cycles**?
- As a system team, how do we **organize** & **track** our work on a daily basis?
- As a system team, how do we meet as a team to discuss **status**?
- As a system team, how do we convene to **critique** a teammate’s work?
- As a system team member, how do I **request a review** from a teammate so I can complete my task?
- As a system team, how do we [**compose our system team**](/articles/designing-a-systems-team)?
- As a system team, how do we **plan for rotating team members** and approving future capacity?
- As a system team, how do we follow [**steps to make things**](/articles/design-system-features-step-by-step) like a component, including approvers?
- As a system team, how do we validate feature **usability** via research?
- As a system team, how do we [discover and decide on potential system features](/articles/design-system-features-step-by-step) we choose to design, build and document?
- As a system team designer, how do I collect **examples and design requirements** from a design community for system features?
- As a system team designer, how do I [**design a system feature**](/articles/design-system-features-step-by-step)?
- As a system team designer, how do I **engage my design community** and leadership to validate emerging system feature designs?
- As a system team developer, how do I [**build a system feature**](/articles/design-system-features-step-by-step) in code?
- As a system team developer, how do I **release** a version?
- As a system team developer, how do I release a **hot fix**?
- As a system team member, how do I author and review **documentation**?
- As a system team member, how do I **publish** content on the system site?
- As a system team, how do we [**QA** visual language and UI components](/articles/component-qa-in-design-systems)?
- As a system team, how do we route, assign and respond to **help requests**?
- As a system team, how do we **communicate and promote** each release?
- As a system team, how do we monitor system [**adoption across products**](/articles/adopting-design-systems)?

### Adopter

- As an adopting designer, how do I **get started**?
- As an adopting developer, how do I **get started**?
- As an adopting product manager, how does my product **adopt a system**?
- As an adopting product manager, how do I adopt system incrementally?
- As an adopting product manager, how do I get **monitored** and reported on for system adoption?
- As an adopting product manager, how does my team **work with the system team** to integrate the system?
- As an adopter, how do I know what **browsers and devices** you support?
- As an adopter, how do I **request** a new feature?
- As an adopter, how do I learn about **new system updates**?
- As an adopter, how do I get **help**?
- As an adopter, how do I **submit a defect**?
- As an adopter, how do I **upgrade** to a new release?
- As an adopter, how do I get **assessed** for system compliance?
- As an adopter, how do I get a (short) system **introduction** for my team?
- As an adopter, how do I get (longer) **training** on how the system works?
- As an adopter, how do I know if an upgrade will **break** what I already use?
- As an adopting product manager, how do I estimate integration **cost**?
- As an adopter, how do I have confidence that features are **usable**?

### Contributor

- As a contributor, how do I [**propose a contribution**](/articles/contributions-to-design-systems) to be evaluated for inclusion in the system?
- As a contributing designer, how do I **contribute design** to the system?
- As an contributing developer, how do I **contribute code** to the system?
- As an contributing developer, how do I follow **coding style** requirements?
- As a contributor, how and where do I **compose documentation** and get it reviewed and approved?
- As a contributor, how do I contribute **guidelines & specs** to system doc?
- As a contributor, how do I **publish documentation** on the system site?
- As a contributing designer, how do I **get involved** to influence the system?
- As a contributor, how do I [**join the systems team**](/articles/designing-a-systems-team) as a rotating team member for a shorter period, and convince my boss too?

### Leader

- As a leader, how do I get an **introduction** to the system?
- As a leader, how do I get regular **system updates** on progress?
