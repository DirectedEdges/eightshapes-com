---
  category : Strategy
  title : Principles of Design Systems
  deck : Core Beliefs to Guide System Strategy and Tactics
  title_abbreviation : Principles
  author_id : nathan
  date : 2017-05-24
  masthead : false
  layout : article.njk
  tags : []
---

{% import '../_includes/escom.njk' as escom with context %}

I’m wary of design principles. I find some inspirational (like my favorite, [Salesforce Lightning’s Beauty](https://www.lightningdesignsystem.com/guidelines/overview/), which focuses on craft). Yet, in-house teams can spend months defining principles too vague (“Be Magical!”) or generic (“Simplicity!”, as if most efforts crave complexity) to be useful. These principles then surface rarely if ever, even in design discussions that include principle authors.

So, why write on design system principles? Because I find myself repeating a few core beliefs with collaborators to short-circuit meandering discussions and ground decision-making. Here are eight principles that I repeat often when talking strategy and tactics with design system teams.

---

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Design system principle #1: Systems solve the easy problems so Products can solve hard problems more easily.</p>&mdash; Nathan Curtis (@nathanacurtis) <a href="https://twitter.com/nathanacurtis/status/844908081935007744?ref_src=twsrc%5Etfw">March 23, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Buttons are the most atomic interactive component used _everywhere_ by _everyone_. [Buttons are complex](/articles/buttons-in-design-systems), with all their properties, states, types, variations, and complexities. The days of each and every team making their own buttons must come to an end. Just ask [Etsy](https://medium.com/etsy-design/designed-for-growth-cdc2a01a8a8a#.2vvndtaoz), or execs after I’ve depicted the six-figure button cost across their 10+ product portfolio.

Thus, it makes sense to build buttons once, _really well_, to shave costs from every team. However, that doesn’t mean that systems teams suddenly own the design and build of the complete customer journey from start to finish. So start small, and build from there.

---

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Design system principle #2: Include what’s shared, omit what’s not.</p>&mdash; Nathan Curtis (@nathanacurtis) <a href="https://twitter.com/nathanacurtis/status/844908229213728773?ref_src=twsrc%5Etfw">March 23, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

When collaborating with a community of designers and developers, I’ll hear “I’ve made something that’d be great for the system!”

A cursory demo reveals a carefully crafted solution, perfectly imbued with the system’s style, behavior, and voice. Certain carousels, date pickers, and dashboards modules come to mind. My reaction: “What a great solution! What other products need this?” Response: 🤔.

Just because a component, pattern or other solution is well-crafted – even an award winner – doesn’t mean it belongs in the system. First, it’s effortful to integrate, normalize, and maintain contributions, especially complex ones. Secondly, if nobody else needs it, it’s noise getting in the way of system users trying to make their way through an unfamiliar place.

---

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Design system principle #3: Products own their destiny, systems equip them to realize that destiny.</p>&mdash; Nathan Curtis (@nathanacurtis) <a href="https://twitter.com/nathanacurtis/status/844908342791356418?ref_src=twsrc%5Etfw">March 23, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Systems should neither take over building things for products nor think they decide what and when the products do or don’t do anything. Instead, systems exist to improve development efficiency, raise consistency, and improve quality. Ultimately, it’s up to products to choose to adopt a system, use it appropriately, and decide how fast and how much to use.

Many collaborators on both sides struggle to see this. Instead, product managers hear system leads mandating a threat to their autonomy. System staff, assertive and excited about their progress, get a bit pushy. It takes time for both disarm their points-of-view to recognize each product owns it’s own path. This transforms incentives for system staff to make things good enough for the product to choose to adopt it, or for leadership higher up to justifiably set expectations to do so.

---

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Design system principle #4: Favor community over control.</p>&mdash; Nathan Curtis (@nathanacurtis) <a href="https://twitter.com/nathanacurtis/status/844908413108785153?ref_src=twsrc%5Etfw">March 23, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

The arc of practicing design and development favors those that can collaborate, negotiate, and work well with others. While I’ve been a part of systems past that injected standards gates, audits, and review milestones into a product’s development path to production, I don’t encounter them much anymore. One VP outright banned the notion:

{{ escom.pull_quote(
    quote = '“Don’t use the word governance in our organization.” ',
    attribution = "VP, Digital Design",
    class = 'escom-pull-quote--light'
) }}

Building a community is a critical component of practicing design systems. When the “Big G” (governance) comes up in early strategic discussions, I try to redirect the conversation. How’s your culture of cross-product critique, whether in design or engineering? Are design system offerings considered features by product managers? Have you established segment guides to curate and monitor topics like accessibility, motion, iconography, or UX patterns? While sometimes governance is necessary, I start with the carrot before donning the stick, knowing community building is a big, effortful track of work.

---

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Design system principle #5: Favor elegance of simple things over flexibility of complex things.</p>&mdash; Nathan Curtis (@nathanacurtis) <a href="https://twitter.com/nathanacurtis/status/844908723067916290?ref_src=twsrc%5Etfw">March 23, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

As our team approached `v1.0`, we began to enhance a basic _Button_ to include icons left and right, menus, split zones, the works. The instant I opened the pull request to review, I saw it. A simple `button` now had a three-deep hierarchy of HTML elements. A quick SlackHQ message to the developer inquired “Seriously? To put a basic button on the page, I need all this gook?”

He took the feedback to heart and returned with a solution that kept the simple simple, and layered complexity as needed. The experience was a microcosm of what we struggle with making systems every day: create solutions to complex problems used via an interface that’s clean and simple. As we increase complexity, it’s up to us to minimize how much we reveal and transfer that complexity to our system’s users.

---

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Design system principle #6: Make documentation first as a tool to use, then as pictures to show, then – if needed – as words to read.</p>&mdash; Nathan Curtis (@nathanacurtis) <a href="https://twitter.com/nathanacurtis/status/844908856488669184?ref_src=twsrc%5Etfw">March 23, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

It’s really tempting to follow the path of least resistance: a documentation template as a big, empty Word/Google document. Just start typing stuff you want people to know. Yet, there’s no bigger buzzkill to an onboarding designer than to be told “Go read this tome called our design standards.”

That why we start each component documentation page with rendered variations and copiable code, possibly introduced via [component explorers](https://blog.hichroma.com/the-crucial-tool-for-modern-frontend-engineers-fb849b06187a#.mn1np7yzw) demonstrations. That’s also why we write guidelines in the imperative (shortening sentences) and replace important ones with effective [do & don’t contrasts](/articles/design-system-doc-components). What’s better: a hefty table of hex code color values or clickable tints stack as a visualization that when clicked copy a hex code or variable value to your clipboard?

Take a look at your documentation, and ask yourself: how can I visualize these ideas better? Even more, how can I make these ideas into a tool?

---

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Design system principle #7: Measure success on dependency.</p>&mdash; Nathan Curtis (@nathanacurtis) <a href="https://twitter.com/nathanacurtis/status/844908991453040641?ref_src=twsrc%5Etfw">March 23, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I’m pretty adamant that despite how much we build – and how much fun we have building it – nothing matters unless products use what we make:

{{ escom.bar_quote(
      quote = 'A system’s value is realized when products ship features using a system’s parts.'
  ) }}

Therefore, the first step of any system-product relationship is the dependency, these days first in the form of an NPM dependency in the product’s `package.json` file. From there, brief planning yields a map for integration: migrate to tokenized variables if needed, and then layer in HTML, CSS, or whatever way the system manifests. Those dependencies help form system success criteria that can be measured, monitored, and reported.

---

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Design system principle #8: Favor quality over quantity.</p>&mdash; Nathan Curtis (@nathanacurtis) <a href="https://twitter.com/nathanacurtis/status/844909151327322114?ref_src=twsrc%5Etfw">March 23, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Very early in a formative system period, two things happen: we make a [list of parts – mostly visual style and components – we want to make](/articles/picking-parts-products-people), and we identify the [minimum quality each must achieve](/articles/component-qa-in-design-systems). These concern create a familiar tension when discerning how far we’ll get, how fast.

However, a system’s quality must always meet or exceed the quality threshold held by a product team, lest the product not trust or respect it enough to adopt it. Therefore, be deliberate and trust your process to achieve a high level of quality, even if stakeholders (including me, sometimes!) want so much so much sooner.
