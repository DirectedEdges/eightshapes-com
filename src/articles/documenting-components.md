---
  category : Documentation
  title : Documenting Components
  deck : Serve a System’s Audiences with Well-Architected Content
  title_abbreviation : Overview
  author_id : nathan
  date : 2018-03-20
  masthead : true
  layout : article.njk
  tags : [documentation]
---

{% import '../_includes/escom.njk' as escom with context %}

_#1 of 6 of the series Documenting Components:_
**Overview** | [Intros](/articles/documenting-component-introductions) | [Examples](/articles/component-examples) | [Design](/articles/component-design-guidelines) | Code | Authoring

---

High-quality component documentation is a hallmark of an effective library. We describe each UI component robustly, aiming to drive effective design decisions and speed development. Good doc isn’t free. It takes planning, effort, and process to make examples and guidelines that make a difference.

Starting here, this collection of six articles spans the story of documenting components. I begin with the strategy of audience, content, and architecture. Next, I expand article by article on introductions, examples, and guidance on design and code, and conclude with process. The tips reflect what I’ve learned over years and am inspired by what our community shares publicly today.

And so I begin by asking the question: what **audiences** is this doc for, what **content** do they need, and how do we optimally **architect** pages to convey it?

---

## Audience

First things first: who it is this for? And since the answer usually spans more than one discipline, who’s more important?

### Engineers, Designers, and Everyone Else!

When a library offers code, _engineers_ are an audience. Obviously. If a library is only code, should doc serve _designers_ too? If doc only offers design guidance without code (e.g., [Google Material](http://material.google.com/)), do engineers care?

In my opinion, in both cases, yes. Absolutely, yes. Component documentation must serve both audiences, always, to varying degrees.

Beyond that, is it for anyone else? Possibly, especially as a system entrenches itself into how teams get things done. Powerful, pithy intros sensitize _product managers_. Examples expose states to _QA specialists_. Style, behavior, and editorial concerns guide _researchers_ and _content strategists_ alike. _Accessibility practitioners_ can revel in a place their guidelines calls home.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = 'Diagram of different disciplines',
      caption = '',
      class = ''
  ) }}

Many system teams also publish a system as publicly visible to a community. While intrinsically they seek to share, extrinsically they justify a visible site as a recruiting tool. The system shall expose rigor and quality, craft and collaboration, practices elevated so that a talented recruit sees strength.

The documentation’s primary goal remains: equips practitioners — engineers, designers, and everyone else — to use a system efficiently and effectively. As it grows, it can serve many despite their varying needs and frequency of use.

_Takeaway_: The arc of design systems bends towards collaboration across disciplines not limited to designers and engineers. If you intend to scale, advocate for content that serves a widening audience.

---

### Engineers, _then_ Designers, _then_ Everyone Else

Serving everyone doesn’t mean serving each equally. Engineers may visit doc 5, 10, or even more times daily. It may even be an open window adjacent to their code editor! A designer may visit less frequently, comparing this to that and occasionally absorbing details. A content strategist or researcher may visit rarely to support a decision.

So, who’s most important? My experience suggests a clear starting point: systems are first made of, by, and for engineers and designers. While others welcomely contribute and benefit, they are secondary. Serving secondary audiences less than optimally may be a necessary tradeoff. If we skimp on engineers or designers, it’s a problem. A _big_ problem.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Diagram prioritizing disciplines',
      caption = '',
      class = ''
  ) }}

What about engineers versus designers? Every system I’ve worked recently serves both, guiding both design and code. Some doc I observe from other orgs reflects a strong bias towards one or the other, or separates destinations for each (more on that later). There are many dimensions to consider: your objectives, their frequency of use, content depth, quality, cost of content production, and relevance to their work.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Diagram of design versus engineering discipline',
      caption = '',
      class = ''
  ) }}

I’m a designer. But I’m also a pragmatist. If I had to choose one, without any context, I’d favor engineers. Getting 50 engineers to code well-designed components is more likely to result in cohesive, efficiently built experiences compared to 50 designers reading tomes of guidance about decisions already built into that code.

_Takeaway_: Audience priority depends on many factors. Expect designer and engineer needs to collide, and attempt to optimize for both. If you can’t, orient tradeoffs towards those using the material closest to the final product, usually code. That means engineers first, designers second.

---

## Content

Component doc connects the your audience with content you can provide. The content takes many forms, they don’t all cost the same, and it’s up to you to weave them together.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Diagram of introduction and example content',
      caption = '',
      class = ''
  ) }}

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Diagram of design reference and code reference content',
      caption = '',
      class = ''
  ) }}

At a high level, component doc usually includes these four types:

1. **Introduction** of component’s name and succinct descriptive content that sets the tone of what’s there. (Required)
2. **Examples** illustrating a component’s named variation, states, and other dimensions, preferably paired with and rendered by code instead of presented via static images. (Required)
3. **Design Reference** including Use Whens, Do’s and Don’ts, and guidelines for visual, interaction, and editorial concerns. (Recommended)
4. **Code Reference** detailing the code’s API (such as Props) and other implementation concerns. (Required, if code exists)

---

### Content Production Cost Varies by Type

The cost of each varies. An _Introduction_ should be quick and cheap, riffing off an example to write a sentence or two. Well-organized _Examples_ are an essential investment, over time becoming predictably produced. _Code_ references should emerge via straightforward if tedious templates that engineers use to fill in the blanks.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Chart indicating the cost versus level of detail of content types, with design reference having greatest cost.',
      caption = '',
      class = ''
  ) }}

But, take a deep breath. Effective _Design_ reference can be very costly, skimped to achieve only basics, or skipped altogether. Design narratives depend on a system’s goals, team capacity and talent, and a community’s appetite.

_Takeaway_: Component doc can include a wide variety of content. So start discussions at the top to evoke a team’s values and discuss authoring types designers and engineers may distinguish (code vs. design reference), overlap (intro), or share (examples, including naming, content and order).

---

## Architecting the Component Page

### Design & Code: To Fragment or Combine?

In practice, component doc can emerge from both deliberate choices and unfavorable constraints (“get it out there!”). Often, component doc ends up a split story: designers publish for designers here, engineers publish for engineers there. This fragmentation can occur by accident, design, or both. As a result, discuss a component page’s information architecture early.

Google Material’s doc ecosystem illustrates fragmentation. [Material’s design foundation](http://material.google.com/) arose prior to its implementations, from [Material Design Lite](https://getmdl.io/components/) and the [Polymer Project](https://www.webcomponents.org/collection/PolymerElements/paper-elements) to [Android Developer’s](https://developer.android.com/design/index.html) design section and [Material UI](https://material-ui-next.com/) (built for React). These implementations reference loosely link to their design parent, which remains unencumbered by code concerns.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '7',
      image_alt = 'Diagram of many code sites referring to one design site',
      caption = 'Google Material propagates stories across <a href="https://material.io/guidelines/components/buttons.html" rel="noopener nofollow" target="_blank">
  <strong>Material Design</strong>
</a>, <a href="https://getmdl.io/components/index.html#buttons-section" rel="noopener nofollow" target="_blank">
  <strong>Material Design Lite</strong>
</a>, and <strong>Material UI</strong>’s <a href="https://material-ui-next.com/demos/buttons/" rel="noopener nofollow" target="_blank">Demos</a> and <a href="https://material-ui-next.com/api/button/" rel="noopener nofollow" target="_blank">API</a>.',
      class = 'escom-article-figure--break-bleed'
  ) }}

This fragmentation isn’t just essential, it’s meaningful and justified. Material’s spread across frameworks, teams, platforms, and—let’s be honest—the world exceeds every other design system in practice today. Newsflash: we all aren’t aiming to be Google Material!

For the rest of us, a design goes here engineering goes there mentality is common. This intent focuses content by discipline, optimizing a reading experience for each audience separately.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '8',
      image_alt = 'Diagram of a code site and design site separate but paired together',
      caption = 'Component design guidance and code &amp; API docs, loosely coupled via separate sites. Example: <a href="https://design.atlassian.com" rel="nofollow noopener" target="_blank">
  <strong>Atlassian</strong>
</a>.',
      class = 'escom-article-figure--break-bleed'
  ) }}

A design/code separation carries risks, too. Over time, sites fall out of sync as:

- Taxonomies diverge (even for simple names like `loader` & `spinner`).
- Features diverge: design expresses deep features unachievable in code, or code articulates undesigned outcomes.

The lack of agreement feels ok. The stories are separate, right? Well, they are conveniently separate for an author’s workflow, at least.

Yet adopters yearn for a single source-of-truth. Those interested in _both_ stories find themselves in a tennis rally, back and forth, back and forth. Useful details exist in both places, architected distinctly as narratives adopters must knit together themselves.

_Takeaway:_ Be wary of a design & code split. While convenient to author and publish early on, long term risks may outweigh benefits. Sibling sites can indicate of a corrosive divide between design and engineering, too.

---

### For Threaded Content, Stack or Tab?

In many systems programs I’ve led in recent years, such as the [Morningstar Design System](https://designsystem.morningstar.com/), we’ve thread design and code together. Adopters find unified names, guidance, and narratives on how to use variations and features.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '9',
      image_alt = 'Diagram of single page content stacked together',
      caption = 'Component documentation page that threads design and code content together in one scrollable view, as shown in <a href="https://designsystem.morningstar.com/components/buttons.html" rel="noopener nofollow" target="_blank">
  <strong>Morningstar Design System</strong>
</a>.',
      class = ''
  ) }}

A threaded page comes with tradeoffs: it runs longer with content varyingly relevant per discipline. As an alternative, other systems follow an introduction with content organized into tabs.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '10',
      image_alt = 'Diagram of a component page with tabs for examples, design and code',
      caption = '',
      class = ''
  ) }}

_Takeaway_: Blend design and code is possible, and a team can choose the UI—stacked, tabs, something else—that suits their interest.

---

### Grouping and Ordering Content by Type

Whether stacked or tabbed, I’ve come to advocate for a consistent content order and priority of:

1. **Introduction**.
2. **Examples—** the venerable “goods” they are most after—front and center.
3. **Design** guidance expanding on examples yet drifting into storytelling of uncertain length.
4. **Code** reference, predictably structured and dependably authored. If engineers are the priority and Props paramount, elevate that reference table into a dominant position.

Examples rule, and so long as deeper design and code reference is a click away, you’ll be ok. Interestingly, industry examples name and prioritize design and code concerns with inconsistent labels and varied order.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '11',
      image_alt = 'Diagram of tab order, with code first',
      caption = '',
      class = ''
  ) }}

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '12',
      image_alt = 'Diagram of tab order, with design first',
      caption = '',
      class = ''
  ) }}

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '13',
      image_alt = 'Diagram of tab order, with design content as placeholder?',
      caption = 'Distinct approaches varying what content is prioritized: Code (in Examples) first, Design first, or a sensitizing example <em>above</em> tabs altogether',
      class = ''
  ) }}

[IBM Carbon](http://carbondesignsystem.com/components/checkbox/code) values examples revealing _Code_ first and foremost, leaving design details for _Usage_ and _Style_ to subsequent tabs. [Hudl’s Uniform](http://uniform.hudl.com/components/forms/checkbox/design) system reverses priority, telling the _Design_ before _Code_, relegated to a second tab with a content taxonomy that’s similar but not exactly the same. Salesforce’s [Lightning Design System](https://www.lightningdesignsystem.com/components/cards/) presents a sensitizing example as a component explorer above a default _Developer Guidelines_ tab, yet _Implementation Notes_ and _Design Guidelines_ tabs remain curiously empty.

Depending on an organization, additional sections — often, **Accessibility**  — also emerge as a peer, perhaps before or after a Design tab.

_Takeaway_: Start with an _Introduction_ and position _Examples_ prominently. Beyond that, prioritizing _Design_ or _Code_ guidance varies by organization and how they value their audiences and storytelling.

---

### For Longer Pages, Anchor Readers with Persistent Local Navigation

The longer your page, the more important it is to signal what’s there and where you are. Vertical local navigation in a right rail works effectively: ever present, tracking page location as you scroll, and expanding to reveal sub-headers along the way.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '14',
      image_alt = 'Screenshot of Morningstar component page content',
      caption = '<a href="https://designsystem.morningstar.com/" rel="nofollow noopener" target="_blank">
  <strong>Morningstar Design System</strong>
</a> organizes local navigation along a page’s right rail with two levels of hierarchy.',
      class = ''
  ) }}

_Takeaway_: The UI — across tabs or in a single scrollable view — can be a matter of taste, although many sites trend towards a vertical navigation that sticks. Ask your audience, know your content, maximize usability, and no matter what: keep section names and order consistent across the library.

---

### Showing Design OR Code Or Both?

The more design and code thread together, the more audiences interested predominantly in one over the other will ask to refine the page’s interface to suit what they want to see.

- A design manager asks…</em><br>Can I hide all the code samples and reference tables?
- An engineer asks…</em><br>Can I get rid of all the lengthy design storytelling?

Consider a toggle to hide design or code concerns. This requires classifying each content type as relevant to one, the other, or both audiences, such as:

- **Always display** Introductions, labeled examples, and everything regarding accessibility.
- **“Design Only”** could hide code snippets and overtly technical guidance like tables of Props or CSS Modifier Classes.
- **“Code Only”** could hide lengthy sections on visual style and editorial considerations, but still reveal some guidance — Use Whens, in particular –relevant for engineers.

In a similar vein, [Hudl’s Uniform](http://uniform.hudl.com/components/forms/checkbox/design) implemented a page toggle to distinguish design and code, serving as a defacto tab to orient users one way or the other:

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '15',
      image_alt = 'Hudl Uniform screenshot of design page',
      caption = '',
      class = ''
  ) }}

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '16',
      image_alt = 'Hudl Uniform screenshot of code page',
      caption = '<a href="http://uniform.hudl.com/components/forms/checkbox/design" rel="nofollow noopener" target="_blank">
  <strong>Hudl’s Uniform</strong>
</a> design system distinguishes guidance for Design and Code via a page-level toggle (upper right).',
      class = ''
  ) }}

The implementation is smooth and yet comes with a cost: build the UI _and_ manage content effectively. Other clients I’ve served have sought a similar breakdown, finding my heart with acknowledging the separate yet open borders between design and engineering.

_Takeaway_: Filtering based on content types is a content management challenge more than a technical one. The stricter your IA, the better chance you’ve got, but it depends on an effective authoring workflow and separation of concerns that may challenge the notion of content relevant for both sides.

---

So, you have a strong sense of your audiences, know the kinds of content to produce, and agree on a high-level page structure. It’s time to get to work.

Next → [**#2. Introductions**](/articles/documenting-component-introductions)
