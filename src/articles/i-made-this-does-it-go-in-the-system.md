---
  category : Contributions
  title : I Made This, Does It Go In The System?
  deck : How to Decide What Belongs & Convey Work That Remains
  title_abbreviation : Contribution Criteria
  author_id : nathan
  date : 2017-09-14
  masthead : true
  layout : article.njk
  tags : []
---

{% import '../_includes/escom.njk' as escom with context %}

Every system needs _button_, _checkbox_, and typographic _headings_. But beyond an obvious core, curating a system’s scope requires balancing disparate features, tradeoffs, and an uncertain boundary of how much is too much.

Upon a `1.0` [release](/articles/starting-a-design-system), a system can be inundated with contribution inquiries:

- Can I add my awesome <em>Card</em> design to the library?
- Should we publish my Chart colors in system doc?
- Shall I merge my Layout Grid CSS into the system repo?

Designers and engineers always confront challenges the system doesn’t solve. And then, they’ll solve it. Through blood, sweat and tears, they’ll develop fervent belief about the solution’s value. The system is their path to amplify that value. But is the system the right place for it?

Where and how do we — collaborators chatting, a systems team reviewing proposals, squads planning a release, or a community of practice charting a path — decide **what belongs in the system** and convey **what work remains**?

---

## Does It Belong in the System?

Systems are never the repository for every style, component, and feature designed and built for every product ever. Instead, a system should [include what’s shared across many products and omit what’s not](/articles/principles-of-designing-systems).

By asking a contributor a few simple questions, you can probe how realistic and valuable a contribution can be. Each question need not elicit an emphatic “Yes!” (except the first one). However, they frame discussion between contributors and system representatives to decide whether or not to move forward.

---

### **#1. Is it relevant to any other product? If so, how many?**

For example, a _toast error_ _message_ could be relevant to an entire app ecosystem. On the other hand, a souped-up _data grid_ _with toolbars_ unique to their product may be irrelevant to everyone else. I’ll use a scale:

- Useful only to your product? Not good enough.
- Useful to another product? Let’s _at least_ chat about how useful.
- Useful to 3 products? Got it, let’s a*t least* discuss this with the community.
- Useful to 5 products? It probably belongs.

If relevance isn’t clear yet contributor passions persist, direct them to their community to validate assumptions and strengthen their case.

---

### **#2. Is it consistent with the system’s vision?**

If your system already sports _page-_, _inline-_, and _toast messages,_ a “_top hat”_ for system outages and other announcements could fit nicely into the set of messaging components*.*

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = 'Illustration of alert components, such as page level message, inline error, toast, and a proposed addition of a top hat',
      caption = '',
      class = ''
  ) }}

On the other hand, imagine a library of framework-independent HTML and CSS. Then, a contributor proposes a complex, React-based component. That would trigger a repository refactor, implies a framework commitment, and expands the practice to an entirely new testing workflow. The system isn’t meant for that.

Few want or even tolerate a bunch of random parts bolted onto edges of a system. Instead, grow a collection deliberately and expand into concerns like editorial, brand, and accessibility when it makes sense.

---

### **#3. How much will it cost to make and maintain?**

Got a primitive _pill_ that needs a few varied colors? Easy. Proposing a complex, multi-panel _calendar date picker_? Let’s take a breath.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Comparison of a pil component and a date picker component',
      caption = 'Basic pill vs Very Complicated Date Picker (Source: <a href="http://bootstrap-datepicker.readthedocs.io/en/latest/" rel="noopener nofollow" target="_blank">readthedocs.io</a>)',
      class = ''
  ) }}

_Date Pickers_ are a wonderful example. Many products use a _Date Picker_. However, most need _their specific version_ of a Date Picker. Not only is it complex and expensive, but it’s nearly impossible to build one that meets every product’s nuanced needs and contexts. Instead, adopters gripe about all the overrides and extensions they have to do, effortfully stripping out the features you built thinking they worked for everyone. Avoid complex things made for everyone but fit no one.

---

### **#4. Does it trigger momentum in a new direction?**

A system team can’t take a burgeoning library in every direction at once. If your team is focused on areas like error messaging and notifications, a _Tooltip_ contribution could trigger growth elsewhere.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Illustration of a tooltip that begets a popover that begets a menu component',
      caption = '',
      class = ''
  ) }}

Solving for _Tooltips_ includes `z-index` layering and shadows, JavaScript events, and aligning notches to all sides. Compositionally, such properties extend to _Popover_ and _Menus_ that follow. I’ll bias towards contributions that spur development in directions useful to everyone.

---

### **#5. How deeply can _YOU_ guide its use?**

[Adam Rowe](https://www.linkedin.com/in/admrwe/), a recent system collaborator, came up with this productive and reasonable challenge question:

{{ escom.bar_quote(
      quote = 'What guidance can you document now? Use…when? Configure…how? Alter content…in what ways? How does this work, for everybody?'
  ) }}

If your contributor struggles to articulate ideas and you don’t know either, maybe the feature isn’t mature or ready for broad distribution. However, what if your contributor quickly cites scenarios of use, rattles off do and don’ts, and itemizes editorial and style considerations? Now we’re talking!

---

### **#6. Is the timing right for contributor AND system?**

Ultimately, a contribution conversation must zero in on timing. Does your system team’s release cycle and roadmap have space for this now or later? Does this feature pair well with other current developments?

Just as important, does your contributor have enough time to complete the work to be done? It’s often tough for a contributor to answer. First, they may not control their time and would need to get space from their manager or product owner. Plus, they may not have a grasp of the work that remains.

---

## What’s Left to Be Done?

In my 10+ years of system work, I’ve never seen a contribution complete enough to be immediately merged into the system. Instead, there’s work to fine tune the contribution to:

1. **Expand** to a minimally sufficient feature set,
2. **Reduce** scope to omit contentious features, and
3. _Always, always_ **normalize** to how system features are designed and built.

---

### #1. Expand to Cover a Minimally Relevant Feature Set

You can’t add half-baked features to a library. Premature and simplistic solutions risk inconsistent interpretations per product that you meant to eradicate. Even worse, adding features later risks triggers breaking changes that can alienate adopters.

For example, a proposed _Card_ may appear simple: image and title. Done, right? Not so fast! A system-worthy grid may require opinions on card description, type, photo aspect ratio, interactions, and more.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Different additional elements added to a card design',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

_What’s left to be done?_ Resolve **what features to have**  — Description or not? Tall photo or not? Photo optional? — and verify the solution with across the product community that’ll adopt it.

_Who does the work?_ This is a tough one. A contributor’s passion may diffuse into apathy when forced to engage a large community to define requirements and finalize design. Be upfront on the time commitment and discern if the contributor is up to the task.

---

### #2. Reduce Scope to Broaden Relevance

The contribution may also need to **reduce scope to a relevant essence** useful across products. Consider an already arduous collaboration across three flagship products to unify a _Card_ component design.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Three alternative card designs',
      caption = 'Three alternative Card designs',
      class = 'escom-article-figure--break-bleed'
  ) }}

_Headings_, _descriptions_, and _images_ are fairly similar, and we quickly achieved consensus on _thumbnail_ aspect ratio. But interactions are all over the place! Conversations on button and icon arrangements swirled into oblivion. Argh, c’mon, can’t we all get along?

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Reconciled features of a card added to a system',
      caption = 'Card design added to the system',
      class = 'escom-article-figure--break-bleed'
  ) }}

Actually, you already get along! A system’s _Card_ can include agreed features — *thumbnail*, copy _heading_ styles, *descriptions* — and omit contentious items. This is especially true if a library also offers other primitives—here, _button_ and \_icons — _so that product teams can customize the contentious stuff themselves. Problem solved, move on.

_What’s left to be done?_ Review proposed features and prune unessential items lacking consensus. This may also yield other components (here, _thumbnail_) reusable in future components too (like _media object_ and _content tiles_).

_Who does the work?_ Reduction is often driven by a system expert acting as connector and negotiator across a community, probing and challenging designs effectively, and biasing collaboration towards consensus.

---

### #3. Normalize! Align with System Composition and Quality

Perhaps a design include myriad non-system colors, wacky spatial choices, and product-specific icons. Or, maybe contributed HTML markup is crude, CSS is unorganized across files, and — gasp! — uses [Stylus](http://stylus-lang.com) instead of the system’s [Sass](http://sass-lang.com/). Without a doubt, contributions always lack every text / background combo, size option and theming construct the system offers.

_What’s left to be done?_ Each contribution must be normalized into system standards. The system promises [robust and accessible features of high visual quality and resilient to varied content](/articles/component-qa-in-design-systems), dependent on a shared — and perhaps [tokenized](/articles/tokens-in-design-systems) — visual language. The system’s code aligns with repository standards to ease per-item and cross-library maintenance. So, the contribution has to get there.

_Who does the work?_ For seasoned contributors, this step is familiar and completed with relative ease. However, the system rep must balance the time needed to deeply educate a contributor, suffer exhausting iterative reviews, and risk still having to complete the task themselves anyway. More often than not, a system rep volunteers for this production.
