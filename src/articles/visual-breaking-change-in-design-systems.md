---
  category : Releases
  title : Visual Breaking Change in Design Systems
  deck : We Respect Code APIs. But What About Color, Type and Space?
  title_abbreviation : Visual Breaking Change
  author_id : nathan
  date : 2018-08-24
  masthead : true
  layout : article.njk
  tags : []
---


{% import '../_includes/escom.njk' as escom with context %}



  
    

Design systems establish a baseline visual style that’s an essential dependency. These choices — color, typography, space and more — are robustly specified and expected to stably, predictably change release by release. When an adopter upgrades, a design system shouldn’t break their stuff unexpectedly.

So, ask yourself…



  {{ escom.pull_quote(
      quote = 'Can adopters upgrade to a minor release confident that their UI won’t break due to a system’s visual changes?',
      class = 'escom-pull-quote--light'
  ) }}

  


[Semantic Versioning](https://semver.org/) (SemVer) offers clear criteria to communicate change across releases using major, minor and patch designations. Every design system I encounter uses SemVer and monitoring change in their package’s application programming interface, or [API](about:invalid#zSoyz). This is familiar territory for developers coding JavaScript props and HTML markup. Break your API, and your next version _must_ increment the version to a next major release, such as from `1.4.0` to `2.0.0`.

Specifying an interface to compositional visual style eludes us. It’s feels so difficult to define clear, simple rules to monitor style changes. System makers struggle to articulate what or why “Changing _this_ style breaks an adopter’s UI” versus “Changing _that_ style doesn’t.” Few system teams document such criteria. I ask “What specific types of visual changes trigger a major version for you?” Their response: ¯\_(ツ)\_/¯.

In this article, I propose that _at least_ **Color** , **Typography** , and **Space** warrant criteria that constitute breaking change. There are other properties to consider, too. A design system can define, document and communicate these criteria so that adopters can upgrade release by release with confidence.

* * *

## Breaking Color

Most system teams feel safe in tuning a primary button’s background color. Maybe their motivation is to improve contrast against a usually white text label. “Let’s darken the teal a bit,” they say. “We’ll improve button’s accessible color contrast from a AA to AAA rating.”



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = 'Adjusting background color of a primary button',
      caption = 'Adjusting background color of a primary button',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


Certainly, adopting teams shouldn’t override a standard primary button’s color set. Overriding a system choice severs the connection with a system. At that point, an adopter is on their own. Therefore, adjusting the shade of primary button’s background color is safe and is not a breaking change.

However, changing colors elsewhere may put adopters in peril. Consider the following scenarios.

### Example: System Text on Custom Backgrounds

Imagine a system team fine-tuning interactive blue to improve color contrast. The `interactive-blue` of `v1.4.0` was accessible on a `white` background but failed on the `charcoal` background.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Grid of accessibility contrast scores',
      caption = 'Color contrast checking via <a href="http://contrast-grid.eightshapes.com/?background-colors=%23FFFFFF%2C%20White%0D%0A%23DDDDDD%2C%20Light%20Gray%0D%0A%23404040%2C%20Charcoal&amp;foreground-colors=%230F60B6%2C%20v1.4.0%0D%0A%23398EEA%2C%20v1.5.0&amp;es-color-form__tile-size=compact" rel="noopener nofollow" target="_blank">contrast-grid.eightshapes.com</a>',
      class = ''
  ) }}

  


So, for `v1.5.0`, the team adjusted `interactive-blue` to a lighter, more saturated tone that worked on both `white` and `charcoal`.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Adjusting text color of a ghost button label on unpredictable backgrounds',
      caption = 'Adjusting text color of a ghost button label on unpredictable backgrounds',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


However, an adopter had used the Ghost button dependent on that color on a light gray background. After the system change, the label's text color contrast is inaccessible. _Your system broke their product_.

### Example: System Backgrounds with Custom Overlaid Text

Similarly, imagine a system darkens the Card component’s`background-color`. The Card’s content area includes a "safe" `content-container` zone where adopters insert whatever content and markup they want.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Adjusting background color of a Card that allows contained custom content',
      caption = 'Adjusting background color of a Card that allows contained custom content',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


In that presumably safe zone, an adopter added secondary text that, while subtle moderate gray, passed a color contrast test. After the system change, the color contrast is no longer accessible. _Your system broke their product_.

Imagine your system’s minor release included those adjustments. Backward compatible, you said? No risk in upgrading, they trusted? Nope! Your system broke their product!

Therefore, evaluate changed colors properties to determine if a system changed, such as:

- Text `color` that could appear above an adopter's `background-color`, image, or other texture.
- `background-color` on which an adopter's text `color` is overlaid.
- `background-color`, `border-color`, text `color`, `box-shadow`, or other property composed beside, above, or below another component's edge or content so as to diminish contrast between elements.

Accessibility drove these examples. There’s aesthetic risk as well, in that well-intentioned system changes could disrupt the colorful harmony achieved by a product designer. Color interactions abound throughout UI that a system designer doesn’t control or have visibility into.

_Takeaway_: Start breaking change conversation with color criteria. It’s easier to convey risk, it’s objectively measurable, and it’s tied to accessibility that stirs passions. Armed with a few criteria, you can move on to other concerns.

* * *

## Breaking Typography (By Wrapping)

Typography is a core facet of any visual style. Teams want to get it just right. And there are so many dials to tune: `font-family`, `font-weight`, `font-size`, `text-transform`, `line-height`, `letter-spacing`, and more.

Not all experiences risk breaking if a system adjusts typography. For content-heavy experiences, each element’s content can be unpredictable, of varying length, and designed to wrap and respond to changes in viewport width.

For denser interfaces, typography must be precise. Designers grind for hours fine-tuning typography, arranging labels to fit in compact areas. If you adjust system typography, their elements may wrap or crop in unexpected ways.

### Example: Wrapping Tabs Are Awful

Imagine your system adjusts tab label`font-weight` from normal to bold.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Display of wrapping text after a minor upgrade',
      caption = 'After a minor version upgrade, unresponsive tabs wrap. Not good.',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


An adopter upgrades. Their existing unresponsive tabs exceed allocated space, so they wrap. Ghastly! _Your system broke their product._

### Example: Letter Spacing Mayhem

Brand guidelines evolve, yielding new heading hierarchy and style. Thus, your system adapts by increasing each heading’s `letter-spacing`.

An adopter upgrades their dense, single page radiology app that’s translated into 14 languages, composed of myriad control panels, each chock full of form elements and headings. They upgrade, and the UI is awash with headings unpredictably cropped. They call a crisis meeting. They invite the back-end data engineers, for goodness sakes! _Your system broke their product!_

Adjusting system typography can be dangerous. To you, it’s a refreshing typographic evolution deployed effortlessly across a library. To them, text begins misbehaving. They blame you. Maybe they flame you in the `#system-design` Slack channel. Nobody needs that.

_Takeaway_: Prior to `1.0.0`, work diligently to to experiment, refine, and finalize type styles suitable to customer’s variety. Once `1.0.0` passes, sustain a stable base and consider change cautiously. Consider reserving dangerous shifts for the next major release. Until then, incrementally add contained features, such as a Long Form Text component for styling _just_ article copy.

* * *

## Breaking Space and Size

At least you can see color and typography. [Space](/articles/space-in-design-systems) and size? Those are harder to define as concretely reusable, let alone monitor for breaking change.

In HTML, when you change a component’s box model properties — `padding`, `margin`, `width`, `height`, `display`, `box-sizing`, `position`, `left`, `right`, `top`, `bottom` — you risk impacting layout composition that arranges that component with other page elements.

### Example 1: Removing Vertical Spacing

Your system team decides to remove vertical spacing applied form controls in the form of `margin-bottom`. This impacts `<input>`, `<select>`, `<label>`, microcopy and other elements.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Display of form controls no longer including space between inputs and labels',
      caption = 'Originally set with vertical spacing built in, a system removes margins. And so forms look smooshed.',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


An adopter had laid out 38 different forms relying upon that spacing. After the system change, all their forms no longer vertically separate elements. _Your system broke their product_.

### Example 2: Custom Sizing Based on Assumed Spacing

After extensive design community debate, your system concedes to expand a Card’s content block’s `padding`.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '7',
      image_alt = 'Display of a card with wrapping icon toolbar',
      caption = 'A custom icon toolbar wraps after a padding change. Ewww.',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


An adopter had arranged and sized Cards based on their customer’s hardware settings. They’d also added an icon-only toolbar in the bottom row. After the system change, the icons wrap to two rows. _Your system broke their product_.

_Takeaway_: First, avoid spatial rules (usually `margin`) outside a component’s boundary. Second, make spatial adjustments very, very cautiously. Degrading an adopter’s layout is a surefire way to create friction, diminish trust, and result in justifiable bad PR across a community.

* * *

### Contained, Non-Breaking Spatial Change

Some spatial change doesn’t impact adjacent elements or page composition. For example, tightening or expanding the inset `padding` or stacked `margin` between items in a Menu would not be a breaking change because these adjustments are contained within a block that's completely specified by the system, includes no other customizable elements, and is layered in a manner that doesn’t otherwise impact page layout when opened and closed.

* * *

## What Else Can Break Visual Style?

In general, changes in visual style could be specified as changes to a bevy of CSS properties, the range of which is exemplified by [design token](/articles/tokens-in-design-systems) collections in [Salesforce Lightning](https://www.lightningdesignsystem.com/design-tokens/), [Morningstar](https://designsystem.morningstar.com/visual-language/constants.html), [REI](https://github.com/rei/rei-cedar-tokens/tree/master/tokens/foundations), and [Open Table](https://github.com/opentable/design-tokens#otkit).

What other properties could you monitor beyond those of color, typography, space, and size described above? `z-index` applied across components like Popovers, Dialogs, Modals, and Tooltips is central to composition in the third, layered dimension of a layout. `opacity` applied widely to semi-transparent layers (such as under a Modal) also seem a strong candidate. Even subtle changes like a `border-bottom` have an impact.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '8',
      image_alt = 'Display of a table and subsequent component no longer visually distinct',
      caption = 'Adjusting border colors of a component arranged near other components',
      class = 'escom-article-figure--break-bleed'
  ) }}

  

- Your system makes the `border-bottom` of a vertical list's last item transparent. An adopter had positioned that list snugly above another block, relying on the line to create contrast. After the system change, the block's header blends with the label of the list's last item in a manner not obvious to distinguish.
If so, _your system broke their product_.

But what of adjusting `box-shadow`? Or fine tuning `border-radius`? Cue designer ambivalence. It'd be hard to convince that those adjustments would break an adopter's experience.

_Takeaway_: Review the vast collection of possible CSS properties and discuss the consequences of candidate properties with your team. A working session will fruitfully reveal the group’s tolerance for protecting adopters and drive towards documenting how far you’ll go.

* * *

## So, What’s a Visual Breaking Change?

At this point, are you thinking: does this really matter? Shouldn’t we use our system to control our visual language? Are adopters really going to care?

Engineers may care. Designers DEFINITELY care. They spend hours fine-tuning layouts, annotating, and communicating detail to collaborating devs. Therefore, a design system should describe how it changes. And, each time it changes, if it’s going to be a change that degrades their design.

In conversations with design system colleagues, sentiments are:



  {{ escom.bar_quote(
      quote = '“We kinda sorta know what’s a visual breaking change.”<br>“We discuss visual breaking changes when someone’s instinct suggests too.”<br>“I agree this is a thing, we’d don’t do it rigorously, and it’s important.”'
  ) }}

  


In our work on the [Morningstar Design System](https://designsystem.morningstar.com/about/versioning.html), we’ve documented what changes are considered major, minor, and patch. Our team asserts opinions confidently in critique discussions, comments on pull requests, and in our discussions with adopting and upgrading teams.

Our field will adapt to versioning as it deeply engrains in our practice. We’ll do what we can to communicate well with and protect our adopters.

* * *

**#3.** [**Versioning**](/articles/versioning-design-systems) ← Previous | Next → **#5.** [**Dependencies**](/articles/dealing-with-dependencies-inside-design-systems)



  






  
    

Design systems establish a baseline visual style that’s an essential dependency. These choices — color, typography, space and more — are robustly specified and expected to stably, predictably change release by release. When an adopter upgrades, a design system shouldn’t break their stuff unexpectedly.

So, ask yourself…



  {{ escom.pull_quote(
      quote = 'Can adopters upgrade to a minor release confident that their UI won’t break due to a system’s visual changes?',
      class = 'escom-pull-quote--light'
  ) }}

  


[Semantic Versioning](https://semver.org/) (SemVer) offers clear criteria to communicate change across releases using major, minor and patch designations. Every design system I encounter uses SemVer and monitoring change in their package’s application programming interface, or [API](about:invalid#zSoyz). This is familiar territory for developers coding JavaScript props and HTML markup. Break your API, and your next version _must_ increment the version to a next major release, such as from `1.4.0` to `2.0.0`.

Specifying an interface to compositional visual style eludes us. It’s feels so difficult to define clear, simple rules to monitor style changes. System makers struggle to articulate what or why “Changing _this_ style breaks an adopter’s UI” versus “Changing _that_ style doesn’t.” Few system teams document such criteria. I ask “What specific types of visual changes trigger a major version for you?” Their response: ¯\_(ツ)\_/¯.

In this article, I propose that _at least_ **Color** , **Typography** , and **Space** warrant criteria that constitute breaking change. There are other properties to consider, too. A design system can define, document and communicate these criteria so that adopters can upgrade release by release with confidence.

* * *

## Breaking Color

Most system teams feel safe in tuning a primary button’s background color. Maybe their motivation is to improve contrast against a usually white text label. “Let’s darken the teal a bit,” they say. “We’ll improve button’s accessible color contrast from a AA to AAA rating.”



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = 'Adjusting background color of a primary button',
      caption = 'Adjusting background color of a primary button',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


Certainly, adopting teams shouldn’t override a standard primary button’s color set. Overriding a system choice severs the connection with a system. At that point, an adopter is on their own. Therefore, adjusting the shade of primary button’s background color is safe and is not a breaking change.

However, changing colors elsewhere may put adopters in peril. Consider the following scenarios.

### Example: System Text on Custom Backgrounds

Imagine a system team fine-tuning interactive blue to improve color contrast. The `interactive-blue` of `v1.4.0` was accessible on a `white` background but failed on the `charcoal` background.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Grid of accessibility contrast scores',
      caption = 'Color contrast checking via <a href="http://contrast-grid.eightshapes.com/?background-colors=%23FFFFFF%2C%20White%0D%0A%23DDDDDD%2C%20Light%20Gray%0D%0A%23404040%2C%20Charcoal&amp;foreground-colors=%230F60B6%2C%20v1.4.0%0D%0A%23398EEA%2C%20v1.5.0&amp;es-color-form__tile-size=compact" rel="noopener nofollow" target="_blank">contrast-grid.eightshapes.com</a>',
      class = ''
  ) }}

  


So, for `v1.5.0`, the team adjusted `interactive-blue` to a lighter, more saturated tone that worked on both `white` and `charcoal`.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Adjusting text color of a ghost button label on unpredictable backgrounds',
      caption = 'Adjusting text color of a ghost button label on unpredictable backgrounds',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


However, an adopter had used the Ghost button dependent on that color on a light gray background. After the system change, the label's text color contrast is inaccessible. _Your system broke their product_.

### Example: System Backgrounds with Custom Overlaid Text

Similarly, imagine a system darkens the Card component’s`background-color`. The Card’s content area includes a "safe" `content-container` zone where adopters insert whatever content and markup they want.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Adjusting background color of a Card that allows contained custom content',
      caption = 'Adjusting background color of a Card that allows contained custom content',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


In that presumably safe zone, an adopter added secondary text that, while subtle moderate gray, passed a color contrast test. After the system change, the color contrast is no longer accessible. _Your system broke their product_.

Imagine your system’s minor release included those adjustments. Backward compatible, you said? No risk in upgrading, they trusted? Nope! Your system broke their product!

Therefore, evaluate changed colors properties to determine if a system changed, such as:

- Text `color` that could appear above an adopter's `background-color`, image, or other texture.
- `background-color` on which an adopter's text `color` is overlaid.
- `background-color`, `border-color`, text `color`, `box-shadow`, or other property composed beside, above, or below another component's edge or content so as to diminish contrast between elements.

Accessibility drove these examples. There’s aesthetic risk as well, in that well-intentioned system changes could disrupt the colorful harmony achieved by a product designer. Color interactions abound throughout UI that a system designer doesn’t control or have visibility into.

_Takeaway_: Start breaking change conversation with color criteria. It’s easier to convey risk, it’s objectively measurable, and it’s tied to accessibility that stirs passions. Armed with a few criteria, you can move on to other concerns.

* * *

## Breaking Typography (By Wrapping)

Typography is a core facet of any visual style. Teams want to get it just right. And there are so many dials to tune: `font-family`, `font-weight`, `font-size`, `text-transform`, `line-height`, `letter-spacing`, and more.

Not all experiences risk breaking if a system adjusts typography. For content-heavy experiences, each element’s content can be unpredictable, of varying length, and designed to wrap and respond to changes in viewport width.

For denser interfaces, typography must be precise. Designers grind for hours fine-tuning typography, arranging labels to fit in compact areas. If you adjust system typography, their elements may wrap or crop in unexpected ways.

### Example: Wrapping Tabs Are Awful

Imagine your system adjusts tab label`font-weight` from normal to bold.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Display of wrapping text after a minor upgrade',
      caption = 'After a minor version upgrade, unresponsive tabs wrap. Not good.',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


An adopter upgrades. Their existing unresponsive tabs exceed allocated space, so they wrap. Ghastly! _Your system broke their product._

### Example: Letter Spacing Mayhem

Brand guidelines evolve, yielding new heading hierarchy and style. Thus, your system adapts by increasing each heading’s `letter-spacing`.

An adopter upgrades their dense, single page radiology app that’s translated into 14 languages, composed of myriad control panels, each chock full of form elements and headings. They upgrade, and the UI is awash with headings unpredictably cropped. They call a crisis meeting. They invite the back-end data engineers, for goodness sakes! _Your system broke their product!_

Adjusting system typography can be dangerous. To you, it’s a refreshing typographic evolution deployed effortlessly across a library. To them, text begins misbehaving. They blame you. Maybe they flame you in the `#system-design` Slack channel. Nobody needs that.

_Takeaway_: Prior to `1.0.0`, work diligently to to experiment, refine, and finalize type styles suitable to customer’s variety. Once `1.0.0` passes, sustain a stable base and consider change cautiously. Consider reserving dangerous shifts for the next major release. Until then, incrementally add contained features, such as a Long Form Text component for styling _just_ article copy.

* * *

## Breaking Space and Size

At least you can see color and typography. [Space](/articles/space-in-design-systems) and size? Those are harder to define as concretely reusable, let alone monitor for breaking change.

In HTML, when you change a component’s box model properties — `padding`, `margin`, `width`, `height`, `display`, `box-sizing`, `position`, `left`, `right`, `top`, `bottom` — you risk impacting layout composition that arranges that component with other page elements.

### Example 1: Removing Vertical Spacing

Your system team decides to remove vertical spacing applied form controls in the form of `margin-bottom`. This impacts `<input>`, `<select>`, `<label>`, microcopy and other elements.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Display of form controls no longer including space between inputs and labels',
      caption = 'Originally set with vertical spacing built in, a system removes margins. And so forms look smooshed.',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


An adopter had laid out 38 different forms relying upon that spacing. After the system change, all their forms no longer vertically separate elements. _Your system broke their product_.

### Example 2: Custom Sizing Based on Assumed Spacing

After extensive design community debate, your system concedes to expand a Card’s content block’s `padding`.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '7',
      image_alt = 'Display of a card with wrapping icon toolbar',
      caption = 'A custom icon toolbar wraps after a padding change. Ewww.',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


An adopter had arranged and sized Cards based on their customer’s hardware settings. They’d also added an icon-only toolbar in the bottom row. After the system change, the icons wrap to two rows. _Your system broke their product_.

_Takeaway_: First, avoid spatial rules (usually `margin`) outside a component’s boundary. Second, make spatial adjustments very, very cautiously. Degrading an adopter’s layout is a surefire way to create friction, diminish trust, and result in justifiable bad PR across a community.

* * *

### Contained, Non-Breaking Spatial Change

Some spatial change doesn’t impact adjacent elements or page composition. For example, tightening or expanding the inset `padding` or stacked `margin` between items in a Menu would not be a breaking change because these adjustments are contained within a block that's completely specified by the system, includes no other customizable elements, and is layered in a manner that doesn’t otherwise impact page layout when opened and closed.

* * *

## What Else Can Break Visual Style?

In general, changes in visual style could be specified as changes to a bevy of CSS properties, the range of which is exemplified by [design token](/articles/tokens-in-design-systems) collections in [Salesforce Lightning](https://www.lightningdesignsystem.com/design-tokens/), [Morningstar](https://designsystem.morningstar.com/visual-language/constants.html), [REI](https://github.com/rei/rei-cedar-tokens/tree/master/tokens/foundations), and [Open Table](https://github.com/opentable/design-tokens#otkit).

What other properties could you monitor beyond those of color, typography, space, and size described above? `z-index` applied across components like Popovers, Dialogs, Modals, and Tooltips is central to composition in the third, layered dimension of a layout. `opacity` applied widely to semi-transparent layers (such as under a Modal) also seem a strong candidate. Even subtle changes like a `border-bottom` have an impact.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '8',
      image_alt = 'Display of a table and subsequent component no longer visually distinct',
      caption = 'Adjusting border colors of a component arranged near other components',
      class = 'escom-article-figure--break-bleed'
  ) }}

  

- Your system makes the `border-bottom` of a vertical list's last item transparent. An adopter had positioned that list snugly above another block, relying on the line to create contrast. After the system change, the block's header blends with the label of the list's last item in a manner not obvious to distinguish.
If so, _your system broke their product_.

But what of adjusting `box-shadow`? Or fine tuning `border-radius`? Cue designer ambivalence. It'd be hard to convince that those adjustments would break an adopter's experience.

_Takeaway_: Review the vast collection of possible CSS properties and discuss the consequences of candidate properties with your team. A working session will fruitfully reveal the group’s tolerance for protecting adopters and drive towards documenting how far you’ll go.

* * *

## So, What’s a Visual Breaking Change?

At this point, are you thinking: does this really matter? Shouldn’t we use our system to control our visual language? Are adopters really going to care?

Engineers may care. Designers DEFINITELY care. They spend hours fine-tuning layouts, annotating, and communicating detail to collaborating devs. Therefore, a design system should describe how it changes. And, each time it changes, if it’s going to be a change that degrades their design.

In conversations with design system colleagues, sentiments are:



  {{ escom.bar_quote(
      quote = '“We kinda sorta know what’s a visual breaking change.”<br>“We discuss visual breaking changes when someone’s instinct suggests too.”<br>“I agree this is a thing, we’d don’t do it rigorously, and it’s important.”'
  ) }}

  


In our work on the [Morningstar Design System](https://designsystem.morningstar.com/about/versioning.html), we’ve documented what changes are considered major, minor, and patch. Our team asserts opinions confidently in critique discussions, comments on pull requests, and in our discussions with adopting and upgrading teams.

Our field will adapt to versioning as it deeply engrains in our practice. We’ll do what we can to communicate well with and protect our adopters.

* * *

**#3.** [**Versioning**](/articles/versioning-design-systems) ← Previous | Next → **#5.** [**Dependencies**](/articles/dealing-with-dependencies-inside-design-systems)



  
