---
  category : UI Components
  title : Component QA in Design Systems
  deck : Establish a process to deliver on the quality you promise
  title_abbreviation : Component QA
  author_id : nathan
  date : 2017-01-06
  masthead : true
  layout : article.njk
  tags : [ui components]
---

{% import '../_includes/escom.njk' as escom with context %}

Months after our first release, productivity was strong. We’d reached 20 components. Buttons and forms were behind us. We cranked through cards, tables, and nav bars. As another component went to review, comments unexpectedly overwhelmed the pull request:

{{ escom.bar_quote(
      quote = '“Why don’t we have this variation?”<br>“It breaks with a reasonably long label.”<br>“Did you check for accessibility? It’s missing an attribute for…”',
      class = 'escom-pull-quote--light'
  ) }}

As discussion quickened, everyone swarmed to ask more questions. Really good questions. The contributing developer was overwhelmed: a finish line thought close extended again into the distance.

Ugh. We had documented neither what we check for nor how we QA. At all. We just built things, “checked ‘em”, and moved on. System teams must hold themselves to a higher standard than that.

---

## Systems Must Deliver on Promised Quality

In adopting a system, a product team must trust that the system saves time and reduces risk. The system’s quality must be no worse — heck, let’s be honest, *better* — than what the product team would have done on their own. Therefore, incorporate quality into your messaging, but be ready to deliver the goods.

### Promote Using Quality

System advocates highlight quality when marketing their library. For example, [Material Design Lite](https://getmdl.io/index.html) says that they…

{{ escom.bar_quote(
      quote = '… aim to optimize for cross-device use, gracefully degrade in older browsers, and offer an experience that is immediately accessible.'
  ) }}

This isn’t whimsical aspiration. It’s a promise, promoting that library parts ascribe to attributes of quality. In fact, one of my favorite system principles is [Salesforce Lightning’s Beauty](https://www.lightningdesignsystem.com/guidelines/overview/), with a keyword I really appreciate:

{{ escom.bar_quote(
      quote = 'Demonstrate respect for people’s time and attention through thoughtful and elegant <strong>craftsmanship</strong>.'
  ) }}

---

### Get Funded with Quality

In fact, I’ve observed the tone of a system pitch completely shift based on _just one word_ that affords quality, like:

{{ escom.bar_quote(
      quote = 'We guarantee the library includes only quality, <strong>accessible</strong> components.'
  ) }}

Stakeholders–your director or VP–listen for those trigger words. To them, it signifies a library (at least partially) can unburden teams struggling with or ignoring things a leader cares about.

---

### Prove You Deliver the Quality

Therefore, you better be ready for the next questions: “What do you mean by _quality_?” and “How do you _assure_ that quality?” Your answer must be better than “We check stuff after we build it.”

---

## What’s Quality? Our QA Checklist

Here’s a quality checklist my most recent team established:

### ✔ #1 Visual Quality

Does the component apply visual style — color, typography, icons, space, borders, and more — using appropriate variable [tokens](/articles/tokens-in-design-systems)?

### ✔ #2 Sufficient States & Variations

Does it cover all the necessary variations (primary, secondary, flat, menu button) and states (default, hover, active, disabled), given intended scope?

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = 'Demo of many different component states across variations',
      caption = 'A first pass may not comprehensively addressing states across <em>all</em> button types…',
      class = ''
  ) }}

### ✔ #3 Responsiveness

Does it incorporate responsive display patterns and behaviors as needed?

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Depiction of component in a wide viewport and narrow viewport',
      caption = 'Tab component, with options for responsive behavior',
      class = ''
  ) }}

### ✔ #4 Content Resilience

Is each dynamic word or image element resilient to too much, too little, and no content at all, respectively? For tabs, how long can labels be, and what happens when you run out of space?

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Demo of content that breaks a tab display',
      caption = 'Tab component, automatically shifting to alternate display based on content length',
      class = ''
  ) }}

### ✔ #5 [Composability](https://en.wikipedia.org/wiki/Composability)

Does it fit well when placed next to or layered with other components to form a larger composition? For tabs, how can they be applied stacked with or on top of other components?

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Demo of a tab component displayed below and on top of an image',
      caption = 'Tabs in different settings, positioned stacked after or on top of a photograph',
      class = ''
  ) }}

### ✔ #6 Functionality

Do all behaviors – typically, JavaScript-driven – function as expected? For responsive tabs, are gestures (for sliding left and right) and menus (for overflow tabs) behaving correctly in varied device settings?

### ✔ #7 Accessibility

Has the design and implementation accounted for accessible:

- color contrast
- ARIA
- print versions
- disabled CSS
- `svg` and `img` attributes
- descriptive headers
- keyboard navigability, …

The list goes on, and could be augmented by testing with a screen reader like [ChromeVox](http://www.chromevox.com/).

### ✔ #8 Browsers & Device Compatibility

Has the component visual quality and accuracy been assessed across Safari, Chrome, Firefox, IE and other browsers across relevant devices?

### ✔ Usability Testing EXTRA CREDIT

Has the component design been assessed via usability testing with our customers, whether conducted for a product team or by our system team?

We don’t gate releases of an component — particularly the smallest ones — by usability testing. But we do seek out opportunities to assess component efficacy in related product tests as well as commission our own studies of relevant concepts too.

---

## How We Assure Quality: A QA Workflow

It might feel like a pain. Too much rigor. A threat to team momentum. That was my gut reaction to the realities of a QA-then-refactor step. Do this to the whole library, now that we’re behind? This could limit production for sprints! It didn’t, actually.

I credit my team with convincing us that the library is _nothing_ if the quality is poor or below a stated standard. Sure, we’d done light damage. Components in the wild now needed light refactoring. And this did trigger a distracting major [semver release](http://semver.org) with a bevy of small, breaking changes. But the library’s demonstrable quality — and team’s confidence — shot way up when we got our act together.

_Takeaway:_ Devise your QA checklist and process as you build your first components. You’ll justify the promise you make to your customers, and improve confidence and reputation as a result.

### Where? Using a “Kitchen Sink” Page

It may be tempting to think you can test your variations using that doc page you’ve also started to build. Bad idea.

Documentation page structure tightly constrains component displays to fit in the article’s width and example box, limiting display options. Plus, the page loads _all the CSS_ of everything it displays, conflating your no-longer-encapsulated component styles with everything else.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Display of a kitchen sink page',
      caption = 'Buttons documentation page (left) and all 92,000px of vertically scrolled Buttons “Kitchen Sink” page examples (right)',
      class = ''
  ) }}

As an alternative, our team creates a “[kitchen sink](http://idioms.thefreedictionary.com/everything+but+the+kitchen+sink).” The page bursts with examples: states (default, active, disabled, etc), content (too long, too short, just right, none), colors and themes, all across the many variations (text only, with icon, icon only, etc). We limit loaded CSS to only that component and base styles, improving encapsulation.

We publish sink pages named `buttons-sink.html` in the same folder as the`buttons.html` documentation page. There it rests, a useful if orphaned resource for design reviews, quick reference and automated visual differencing.

_Takeaway_: Separate documentation from testing artifacts.

### When? As a Build Concludes

QA begins when a developer signals they’re ready for a final review of their work in the build step, distinct from the documentation that may run in parallel but usually concludes after build.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Diagram of a step by step flow, placing a QA step within Build',
      caption = 'For our team, QA is part of the Build task.',
      class = ''
  ) }}

_Takeaway_: Incorporate QA as a clear step or sub-step that’ll prevent an item’s release if tests aren’t passed.

### Who? The Associated Designer _and_ Another Dev

A dedicated QA resource is a luxury item for a systems team. Instead, systems teams I’ve been on blend designers and developers that wear other hats as needed, including QA. We hold a contributing developer accountable to submit components that they’ve already run through the checklist. Our process _then_ also requires a distinct person — a different developer, the component’s designer, or both — to run through the checklist too.

_Takeaway_: Identify a predictable role expected to review each contribution.
