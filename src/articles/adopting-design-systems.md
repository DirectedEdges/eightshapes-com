---
  category : Strategy
  title : Adopting Design Systems
  deck : A Playbook for Working with Product Teams & Managers
  title_abbreviation : Adoption
  author_id : nathan
  date : 2017-06-28
  masthead : true
  layout : article.njk
  tags : []
---

{% import '../_includes/escom.njk' as escom with context %}

Your systems pitch got a green light. You’ve started designing, building, and documenting your library. Your first big release approaches fast!

Hey, don’t forget your customers.

During that formative period, you’ll begin aligning with product teams intending to adopt your system so that you can:

- Help them **adopt based on an established model**
- Discuss common system **assumptions and** **misperceptions**
- Pitch how, if and when they will **make a commitment**
- Explain how you’ll **monitor and report** on adoption enterprise-wide

---

## Approaching Adoption as a Modeled Progression

Whether a product adopts all at once or incrementally over time, you can help them understand how to adopt by breaking it down into a series of steps. And the more you make it feel like a checklist, the better.

### Big Bang (All At Once) or Incremental (Over&nbsp;Time)?

Teams adopt systems at different rates. New products are easy: use the **system as a foundation** to achieve complete adoption from the start. For existing products, it’s more complicated.

Some choose to stop everything, throw out the old, implement the new, and get back to work in a limited number of sprints. This **big bang** approach occurs because teams see immediate value (yes!), are forced to (sigh…), or want to just do it and move on.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = 'Big bang or incremental adoption?',
      caption = '',
      class = ''
  ) }}

Others yearn for an **incremental** approach, saying “We’ll be successful if…

- ...standards rollout in phases that don’t overwhelm our development."
- ...I integrate small parts one at a time while working features."
- ...lines of business bring their products up to date little by little."

Bit by bit, part by part, the system weaves in alongside features work. This feels both safe and consistent with how teams make products.

_Takeaway_: Translate their risks into a workable adoption that’s faster (“big bang”), slower (“incremental”), or something else.

---

### Progress Through Achievement Levels

Those that don’t go all the way right away need to know what’s important, how to approach it, and how far they are expected to go.

{{ escom.pull_quote(
      quote = '“Help me understand how to order changes over time as a roadmap.”',
      class = 'escom-pull-quote--light'
  ) }}

You can show how adoption works by depicting how to go from an initial commitment to full adoption via incremental achievements based on specific criteria. For a more straightforward library of style and components, a model could use levels with literal names and detailed items:

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Scale of adoption, from non adopter to complete library',
      caption = '',
      class = 'escom-article-figure--break-bleed '
  ) }}

For a system of broader concerns, a model may use more abstract level labels and include broader criteria for accessibility, editorial, and patterns:

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Scale of adoption, framed as bronze to platinum',
      caption = '',
      class = 'escom-article-figure--break-bleed '
  ) }}

[Pitney Bowes’ design system team](http://www.pb.com/) uses a similar progression across levels, noting that not every product aspires to reach the highest level due to constraints, plans to retire the product, or other reasons.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Pitney Bowes Design System Maturity Levels (used with permission)',
      caption = '',
      class = 'escom-article-figure--break-bleed '
  ) }}

A model should progress from simple to complex, from most to least important so that teams can achieve levels with an unambiguous checklist.

_Takeaway_: Create simple levels to progress adopters across levels, with meaningful achievements you can tout at each step.

---

### Decompose Work into Bite-Size Bits

A deep system — style, components, patterns, editorial,…—intimidate a product team that may already feel overwhelmed by their own backlog.

However, scrumming product teams live and breath stories achievable in a sprint. Take advantage of stories to help express system achievement as:

- integrate the npm package based on #vX.X as a dependency. (low effort)
- replace color hex values &amp; Sass variables with tokens (moderate effort)
- refer to the system icon SVG for all system-available icons. (moderate effort)
- use the system form checkbox for all product checkboxes. (moderate effort)
- use the system modal component for all product modals. (high effort)

Talking in stories is to talk the language of how teams organize work. Stories clarify specifics, align achievable goals, and present an opportunity for system team members to influence tasks.

_Takeaway_: Work with team members — managers, designers, and engineers — to order and craft stories based on their needs.

---

### Tailor Rollout to How Each Team Makes&nbsp;Products

Products are different. Slotting a system can be straightforward for products already built and tested modularly.

However, systems can’t mandate that a team changes how it does business. Other teams have a far less systematic codebase, and may implement a page type at a time. Adoption can spread across deployments of pages or sections: early pilots give way to converting high value pages while other stragglers may be converted later (or, let’s be honest, never).

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Site map of pages to convert across conventional e-commerce site',
      caption = 'Site map of pages to convert across conventional e-commerce site',
      class = 'escom-article-figure--break-bleed'
  ) }}

Some apps deploy features that span pages and shared components. Centralized system updates to such feature-based approaches can trigger an expensive, wide-reaching testing cycle for every tiny change. Until that team starts encapsulating work better, your collaboration with them may include more rigorous planning.

_Takeaway_: Empathize with how teams approach their work to tailor system integration and how you report on their adoption.

---

### Encourage Upgrades With&nbsp;Aging

Systems change over time, and products can’t let their system version get too stale. Therefore, incorporate criteria around aging — “How old is your system dependency?” — for products to maintain higher levels of adoption. If a product’s system version gets too old, slide it down to a lower level.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Hightlighted aging criteria, by adoption level',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

_Takeaway_: Set expectations: it’s not one and done, and upgrades will come. Falling behind doesn’t mean failure, but may mean there’s more work to do.

---

## Talk Adoption Early &&nbsp;Often

Even after you pitch a system and move forward, expect to meet varying levels of often justified resistance. Interviews with and surveys of product teams — particularly from product managers — reveal themes of size, priority, and momentum.

### #1. “The System is Too&nbsp;Big”

Some see a system as a beastly monolith. That’s reasonable: it’s a big library!

{{ escom.pull_quote(
      quote = 'It’s too big to succeed. We can’t start some huge redesign. Migrating our product is too massive an undertaking.',
      class = 'escom-pull-quote--light'
  ) }}

Yet, a system is modular. It has lots of small parts. Some parts can prioritized and adopted independently, others ignored as irrelevant. Adoption isn’t an all or nothing, all at once. Instead, as you teach teams about the system, also probe what’s relevant to them versus what’s not, and how important each one is to their product.

_Takeaway_: Systems ≠ monolith. So shift conversation from adoption as “all or nothing” to it’s modular essence.

### #2. “The System is Not Important&nbsp;…&nbsp;Enough”

Product teams have a backlog bursting with features, optimization, and defects. What else do they have? Built buttons, massive modals, cards with content. Don’t they already have all the system offers?

Conversation can tilt to a torrent of reasonable objections like:

- We built those already. Why build them again?
- Higher priority fixes &amp; optimization take precedence!
- Our roadmap says feature, feature, feature!

Use their language: cohesiveness IS a feature, both within their product and even more across a portfolio. Tactics can include:

- We’re enabling a cohesiveness across products that is a competitive advantage.
- Ecosystem quality through consistency is a product development theme this year.
- The system’s efficiencies redirect your investment to solve customer problems.

_Takeaway_: Lean on leadership to endorse a portfolio-wide feature, and then steer conversation to benefits specific to their product.

### #3. “The System Slows Us&nbsp;Down”

A team’s velocity and momentum towards objectives is paramount. The system cannot get in the way. Admittedly, system adoption can hinder short-term momentum of feature development.

{{ escom.pull_quote(
      quote = 'Pressure from management has meant we’ve been on the feature treadmill for so long that we can’t get off.',
      class = 'escom-pull-quote--light'
  ) }}

Take the long view. Product teams will speed up gradually to a new level by ceding small solutions to a shared effort. They’ll also achieve benefits that they can’t do themselves or refuse to prioritize, like accessibility.

Systems are modular, efficiencies, and a platform for cohesiveness everyone believes in. Keep those in mind as you get down to brass tacks.

_Takeaway_: Long-term benefit can require a short-term cost, so reverse system perceptions from disabler to enabler and focus on efficiencies that improve what they already have.

---

## Get Commitments to Your Sales&nbsp;Pitch

Systems are modular, efficiencies, and a platform for cohesiveness everyone believes in. Keep those in mind as you get down to brass tacks.

You may see yourself as a system “advocate.” Or even a system “evangelist.” After years, I’ll admit: I’m a system “salesman” too. Following a systems pitch, I ask simple questions to sense if a product team is serious:

1. Will you?
2. When will you?
3. When will your roadmap and backlog reflect it?
4. When will you integrate the package?
5. When will you have “Hello System!” progress in production?

Inquiries are pragmatic and direct, not pushy. My goal: clarify a commitment — or lack thereof — to adopt.

### #1. “Will your product adopt the&nbsp;system?”

It’s easy for a team to say they _should_ adopt a system. But that’s different than articulating they _will_ adopt a system. I’ll drive a conversation to:

{{ escom.pull_quote(
      quote = '“I‘ve been asked to report on which products will and will not adopt the system. Should I put you among those intending to adopt?”',
      class = 'escom-pull-quote--light'
  ) }}

Ask the question, let them fill the silence that follows. If I get a “yes,” I can move on to the more interesting _how soon_ and _how much_ next.

_Takeaway_: Getting a product to declare intent only begins the conversation.

### #2. “When will you adopt, generally?”

When you ask “When?” be ready for anything. Actual dates? Now we’re talking! Overt dithering? Don’t be surprised.

Some may avoid any talk of any timing whatsoever. They may cite a locked roadmap or allude vaguely to “next year.” These are completely reasonable, so respect their boundaries. Probe and add context of your constraints like:

{{ escom.pull_quote(
      quote = '“Leaders indicate to me that 24 months is too long, so…”',
      class = 'escom-pull-quote--light'
  ) }}

This can narrow to a reasonable range (“How about 12 to 18 months?”) balancing product commitments and an enterprise’s systematic aspirations.

_Takeaway_: Bracket time estimates to narrower gaps to make discussions more precise and to inform subsequent planning with leadership.

### #3. “When will your roadmap & backlog reflect an adoption&nbsp;plan?”

Planning isn’t free. It takes work to learn a system, analyze a product, and plan an integration. Those sessions, emails, and hallway conversations aren’t just with you, either. They include product stakeholders too.

Such planning can take from 10%-50% of the time it takes to adopt overall.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '7',
      image_alt = 'Steps, with Step 1 - plan and dependency - highlighted',
      caption = 'Recognize the effort required to plan adoption by making it a milestone',
      class = 'escom-article-figure--break-bleed '
  ) }}

_Takeaway_: Acknowledge the effort in and reward a team’s completed planning efforts by recognizing it as a milestone within your model.

### #4. “When integrate the system’s code package?”

Most teams deploy system assets as a reusable package such as via [node package management](https://www.npmjs.com/). Getting the system in a product’s repository might be as simple as a one line pull request, like:

`"dependencies": {"designSystem":"1.2.0"}`

This commit marks the start of code dependency and a lead engineer’s signal of good-faith intent. It’s also an easy, early and tangible milestone.

_Takeaway_: Recognize a product integrating a dependency (such as via `npm`) as a milestone that forges a code relationship between system and product.

### #5. “What’s our ‘Hello, System!’&nbsp;moment?”

Code integration is one thing. Tangible design impacts is another. A few system-aligned improvements launched in production can boost momentum and result in small but meaningful customer impact.

These “Hello, system!” moments provide both product and system with a demonstrable win during a sprint review or system roadshow update, respectively. Aim small, start small, build from there.

_Takeaway_: Celebrate the moment a product launches a feature that depends on the system. You’ve achieved something, together!

### Bonus Question: “What release(s) & sprint(s)?”

For products citing imminent adoption, get specific on timing. If you to know what sprint they’ll begin and end an effort, you can:

- **Before they begin** : check in to help prep, review their plan, and possibly deliver small system bits to support them.
- **During adoption** : be on alert for ad hoc requests, unexpected fixes, and lending a helping hand.
- **When they finish** : gauge progress to plan future system work and highlight their achievements in your materials.

_Takeaway_: Do what you can to be by their side to improve trust and confidence in the system.

---

## Monitor & Report with a Scorecard

With both individual products as well as reporting organization-wide, you need a structure monitor and report on adoption. This can be as simple as an adoption scorecard depicting products [grouped by priority](http://alistapart.com/article/promoting-a-design-system-across-your-products) as rows and adoption levels, status and notes as columns.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '8',
      image_alt = 'Scorecard for a small-to-moderate product portfolio',
      caption = 'Scorecard for a small-to-moderate product portfolio',
      class = 'escom-article-figure--break-bleed '
  ) }}

Include the scorecard as front matter of a periodic update. Improvements can be displayed by movement from left to right across levels or via green and arrows for positive and negative progress.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '9',
      image_alt = 'Step by step display of many products completing different quantities of steps and planning others ',
      caption = '',
      class = ''
  ) }}

Additionally, keep an initial focus on the portfolio before telling product-specific stories. Once you’ve set the tone with a summary, then you can dive into more detail around how active an flagship product is making incremental progress on some features but not others.

_Takeaway_: Monitor & regularly report on adoption with a scorecard across products, and make it visible to leadership and the community.

### Be Sensitive to Product Limitations

Some products may only partial adopt a system. A legacy product may warrant little further investment. A platform with limited flexibility inhibits modern design.

No matter the limitation, highlight accomplishments without making those products appear as second-class citizens. It can often be _more_ effortful for such products to adopt system, even the basics!

_Takeaway_: Protect reputations of products justifiably not going all the way.

---

## Celebrate Adoption!

Praise recent adoptions during periodic system presentations as a lead story! Not only will those teams feel rewarded, but that achievement — product adoption — is the primary objective, more than any flashy component or tool you now offer.
