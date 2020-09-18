---
  category : Documentation
  title : Component Design Guidelines
  deck : Write the Words and Add the Pictures to Empower Designers
  title_abbreviation : Design Guidelines
  author_id : nathan
  date : 2018-06-15
  masthead : true
  layout : article.njk
  tags : []
---


{% import '../_includes/escom.njk' as escom with context %}



  
    


_#4 of 6 of the Documenting Components series:_
[Overview](/articles/documenting-components) | [Intros](/articles/documenting-component-introductions) | [Examples](/articles/component-examples) | **Design** | Code | Authoring

* * *

I remember that morning. September 2014. McLean, Virginia. I arrive for work around 7:30am. I open [Google’s Material Design](https://material.io/design/foundation-overview/#addition) guidelines for the first time. I remember _exactly_ where I stood, for 90 minutes, soaking it all in. It was so, so good. By the end, I didn’t just know Material better. I was a _better designer_, and my mind was awash with how to document better.

During that immersive experience, I found guidelines _pleasurable_. However, component guidelines aren’t pleasure reading. They are a reference, orienting designers towards good decisions. Guidelines should afford quick learning and fast lookup, all while designers go about their business.

Thus, guidelines can’t be scribbled jottings by an uninformed soloist cranking a tedious writing task. Guidelines must be clear. Guidelines must be organized. Guidelines must articulate decisions forged by the inclusive dialogue of a participating design community. Guidelines must empower readers, not laden them with dense, shoddy prose they won’t read.

To produce quality component guidelines, you’ll need a content architecture, writing conventions, and approach to images and demos that work best for your audience. May this guide provides inspiration to get you started.

* * *

## Start with the Words

Design guidelines begin as a writing exercise, even if eventually they aren’t just words (more on that later). Well written words matter. With a predictable structure organizing advice, any reader — especially designers — can make better choices when using a component.

### Organize Guidelines Per Section by Discipline

Some guidelines are better than none. However, a massive list of unorganized bullet points discourages readers. Consistent headings, organized by type of design concern, establishes a familiar pattern for readers _and_ encourages authors to consider implications across concerns.

As a writing plan forms and composition begins, I recommend the following categories (in order):

- **Use When** , often including a countering **Don’t Use When** as a subheading (alternative if discouraged heading: When to Use).
- **Visual Style** to inform judgment about color, type, space, and more (alternative headings: Visual Language, Design Language, Foundations).
- **Behavior** to cover how to cope with events, outcomes, and transitions (alternative headings: Interaction).
- **Editorial** advice covering copy and images flowing into each element (alternative headings: Voice & Tone, Content).
- **Accessibility** checklist(s) that inform design decisions like color contrast.

Not every component offers guidelines in each category, so omit headings that lack content.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Illustration of design guidelines of varying sections',
      caption = 'Different components can result in different available guidelines. Hide headers of empty sections.',
      class = ''
  ) }}

  


With a common structure, a component page’s local navigation (such as a sticky right link list) signals what’s there and anchors to each section.

* * *

### Use When

While a component introduction may hint at relevant use, rely on a Use When section to illustrate the many cases when to use or not use a component.

While some systems opt for “When to Use” as a heading, that’s not my style. “Use When” affords a consistent and more succinct structure by beginning with a gerund (verb ending in “…ing”) like _Displaying…_, _Requiring…_, _Grouping…_, or _Loading…_. Examples include:

- Displaying options within a Menu.<em> (Morningstar’s </em><a href="https://designsystem.morningstar.com/components/list-groups.html#use-when-1" rel="nofollow noopener" target="_blank"><em>List Group</em></a><em>)</em>
- Highlighting an item’s status for quick recognition.<em> (Atlassian’s </em><a href="https://atlassian.design/guidelines/product/components/lozenges" rel="nofollow noopener" target="_blank"><em>Lozenges</em></a><em>)</em>
- Making an image fill the available space while not exceeding the actual image dimensions.<em> (Australian Government Design System’s </em><a href="https://designsystem.gov.au/components/responsive-media/" rel="nofollow noopener" target="_blank"><em>Responsive Media</em></a><em>)</em>
- Highlighting short, indeterminate activities (between 2–5 seconds). Longer activities may require alternate methods of communication, such as snackbars or notifications. <em>(Google Material </em><a href="https://material.io/design/components/progress-indicators.html#circular-progress-indicators" rel="noopener nofollow" target="_blank"><em>Progress Indicator</em></a><em>)</em>


As contrasting examples arise, clarify what not to do. These **Don’t Use When** items are written in the same voice within a sibling or descendant group.

### Visual Style

Visual style guidelines help designers tailor style given their conditions. Topics include color, typography, iconography, borders, space, size, and other visual properties. Just as common, this section elaborates on how to arrange multiple instances (example: aligning primary and multiple secondary buttons) and relate the component to adjacent elements.

Examples include:

- Place a primary button rightmost in a group of buttons.<em> (USAC Indigo’s </em><a href="https://indigo.universalservice.org/latest/components/buttons.html#use-guidelines" rel="nofollow noopener" target="_blank"><em>Button</em></a><em>)</em>
- Adjust opacity across interactive states to suit [the Button’s] background color.
- Always center a stepper above content.<em> (Morningstar’s </em><a href="https://designsystem.morningstar.com/components/steppers.html#visual-style-1" rel="nofollow noopener" target="_blank"><em>Stepper</em></a><em>)</em>


Visual style guidelines are _not_ specs. Avoid the temptation to make this section the final destination of excessive redlines. Specs are for important for an engineer building the component. However, by the time readers encounter this documentation, such visual details are _already built into the available feature_.

### Behavior

Whether or not your built component offers heavy logic built in, a Behavior section offers you the opportunity to elaborate on all the interactive details useful for a designer crafting an experience. Examples include:

- Close the popover when the trigger UI element is clicked again, when the user clicks outside the popover panel, when the user opens a different popover, or when the user presses the ESC key.<em> (NetApp LUCI’s </em><a href="http://luci.netapp.com/components/popovers.html" rel="nofollow noopener" target="_blank"><em>Popover</em></a><em>)</em>

If a library is only offering HTML & CSS without logic built-in, a Behavior section may balloon to offer guidance for designers and engineers alike. Content may take a more structured tone, such as tables offering potential events and associated outcomes.

### Editorial

Whether atomic (like a _Button_ or _Input_) or composable (like a _Card_ or _Menu_), components almost always have words or images. The Editorial section can offer advice on labels, tone, length, punctuation, and writing samples. Examples include:

- Use placeholder text to provide additional context around the data being searched.<em> (Morningstar’s </em><a href="https://designsystem.morningstar.com/components/search-fields.html#visual-language-1" rel="noopener nofollow" target="_blank"><em>Search Fields</em></a><em>)</em>
- Use sentence case, with only the first word in a phrase and any proper nouns capitalized.<em> (IBM Carbon’s </em><a href="http://carbondesignsystem.com/components/checkbox/style" rel="nofollow noopener" target="_blank"><em>Checkbox</em></a><em>)</em>


Editorial guidelines in particular benefit from do and don’t samples a reader can compare and against which model their own writing.

* * *

### Top Tips for Writing Effective Design Guidelines

Voice and tone guidelines vary by design system. As a team begins authoring, I’ll propose the following conventions as a starting point:

1. **Write imperatives** that begin with words like _Hide…_, _Include…_, _Prevent…_, _Limit…_, and _Enable…_.
2. **Omit needless words**. If you can say something with fewer words, do so.
3. **Assert non-negotiables** with _Always…_ or _Never…_.
4. **Encourage a reader’s judgment** with _Consider…_ or _Avoid…_.
5. **Succinctly redirect** to an appropriate alternative with a subsequent sentence beginning with “Instead, use Tooltip.”
6. **Favor positives over negatives** , such as “Always include a logo in global navigation” over “Never omit a logo from global navigation.”
7. **Favor lists over paragraphs**. Readers want to learn quickly or find an item. So don’t bury advice in dense prose unless absolutely necessary.
8. **Limit guidelines length** to two sentences or less.
9. **Favor specific advice** that’s objective, concise and often quantitative over subjective, qualitative, and laborious explanations.

Early on, good habits elude writers. Initial editorial passes across _Button_, _Input_, and _Tooltip_ can result in a bloody mess of Google Doc suggestions.

- **Before**: Really wide logos and site labels can result in degraded displays, hindering usability and being inconsistent with other presentations by causing unnecessary wrapping or taking up too much space. Therefore, try to keep logos less than 100 pixels wide and don’t let labels get too long.
- **After**: Limit product identity to a logo &lt; 100px wide or a text label ≤ 15 characters long.


Stay earnest, my editing friends. Authors adjust by accepting edits, iterating, and adapting to conventions as they author the next component. These writing patterns will take hold, sometimes gradually for authors but quickly for readers.

* * *


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Illustration',
      caption = '',
      class = 'escom-article-figure--full-width'
  ) }}

  

## Enhance with the Pictures

A picture is worth 1,000 words. Or, at least it’s often over the many, many words it replaces, especially for the most important advice you impart.

As you write or edit design guidelines, your inner voice should consistently challenge each bullet point, paragraph, or heading with:



  {{ escom.bar_quote(
      quote = '“Would a picture work better here? If so, is it worth it?”'
  ) }}

  


Make no mistake, pictures are more expensive to compose, adjust, and content manage than jotting down a few words. Too many images can create an overwhelming scrolled experience down a documentation page. Images get out of date too, creating maintenance headaches.

So find the right balance of words and pictures, such as 1 picture for every 5 to 10 copy-only guidelines. As you author, always be mindful of how you can enhance storytelling with captioned images, Do’s and Don’ts, and other custom options at your disposal.

* * *

### Do Use Do’s and Don’ts, Especially Comparatively

As I edit, vital or wordy guideline bullets often trigger a comment of "Consider a Do/Don’t.”

Do/Don’ts provide a welcome break from tomes of text. The blocks are definitive, concise, focused, and scannable. Each pairs an image with a succinct guideline prepended with a Do or Don’t imperative and accented green or red. Clarity isn’t difficult, and the pattern is eminently reusable in any section.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Two examples, contrasting a do with a don\'t',
      caption = '',
      class = ''
  ) }}

  


As the name implies, optimal Do/Don’ts pair one next to the other. Sure, any number of Do’s followed by any number of Don’ts can work. But enabling the reader to ping pong visually left and right reinforces a memorable teaching point. As a result, consider limiting Do/Don’ts to two per row.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Do and don\'t presented as checklists',
      caption = '',
      class = ''
  ) }}

  


Authoring Do’s and Don’ts benefits from a standard height and width just under 50% of the content well, suggesting a design template (like a Sketch file with premade artboards) for asset creation. Sometimes that 4x3ish image ratio is an unwelcome constraint for larger or horizontally oriented images. Therefore, consider a full-width Do/Don’t variant as an alternative.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'A Do presented without a don\'t',
      caption = '',
      class = ''
  ) }}

  


Do/Don’t work great for words and code snippets, too. The usual suspect triggering my system teams to extend the Do/Don’t display to accommodate words? Error messages, often as a stack of sensitizing examples, as seen on sites like [Shopify Polaris](https://polaris.shopify.com/content/grammar-and-mechanics#section-punctuation) and [Morningstar](https://designsystem.morningstar.com/ux-patterns/errors.html#editorial-1).



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '7',
      image_alt = 'Do and don\'t examples presented as words',
      caption = '',
      class = ''
  ) }}

  


Even Do/Don’t hedging is appearing in the form of cautionary stories accented with yellow or orange, as seen on [Google Material](https://material.io/design/components/buttons.html#text-button).



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '8',
      image_alt = 'A caution contrasted with a don\'t',
      caption = '',
      class = ''
  ) }}

  

* * *

### Enrich Storytelling with Compelling if Expensive Custom Demos

As an investment in design guidelines deepens, so to does a team’s willingness to invest in more custom exhibits, including:

- **Low-fidelity diagrams** of component examples (example: [Salesforce Lightning Loading](http://www.lightningdesignsystem.com/guidelines/loading/)), flows or states. As a supplement to coded, full-fidelity examples nearby, such storytelling can be less expensive to produce and focus a reader on elements relevant to the story.
- **Videos** , **animated GIFs** , and other **custom demos** that capture an arc of interaction, animation, or quick looping sample. (Example: [Google Material Motion](https://material.io/design/motion/speed.html#duration))
- Additional **live code examples** , enriching understanding beyond the list of variations.

Admittedly, custom demos are rare across most component pages across most design systems. It’s usually more expensive, may slow down authoring, and usually requires tools and assets less familiar or available to authors. Therefore, pick your moments, but don’t hesitate when the teachable moment warrants investment.

* * *

### Avoid Redundancy with Coded Examples

If readers have already encountered a list of rendered examples with code equivalents (as suggested in [Component Examples](/articles/component-examples)), strongly avoid repeating the examples in design guidelines to tell the same story. Such examples — effectively labeled and ideally coupled with succinct “Use When”-style statements — have already exhibited the range of relevant cases.

Therefore, reserve the Design Guidelines for deeper storytelling that elaborates on rather than repeats what the examples have already taught.

* * *

[**#3. Examples**](/articles/component-examples) ← Previous | Next → **#5. Code Guidelines**



  






  
    


_#4 of 6 of the Documenting Components series:_
[Overview](/articles/documenting-components) | [Intros](/articles/documenting-component-introductions) | [Examples](/articles/component-examples) | **Design** | Code | Authoring

* * *

I remember that morning. September 2014. McLean, Virginia. I arrive for work around 7:30am. I open [Google’s Material Design](https://material.io/design/foundation-overview/#addition) guidelines for the first time. I remember _exactly_ where I stood, for 90 minutes, soaking it all in. It was so, so good. By the end, I didn’t just know Material better. I was a _better designer_, and my mind was awash with how to document better.

During that immersive experience, I found guidelines _pleasurable_. However, component guidelines aren’t pleasure reading. They are a reference, orienting designers towards good decisions. Guidelines should afford quick learning and fast lookup, all while designers go about their business.

Thus, guidelines can’t be scribbled jottings by an uninformed soloist cranking a tedious writing task. Guidelines must be clear. Guidelines must be organized. Guidelines must articulate decisions forged by the inclusive dialogue of a participating design community. Guidelines must empower readers, not laden them with dense, shoddy prose they won’t read.

To produce quality component guidelines, you’ll need a content architecture, writing conventions, and approach to images and demos that work best for your audience. May this guide provides inspiration to get you started.

* * *

## Start with the Words

Design guidelines begin as a writing exercise, even if eventually they aren’t just words (more on that later). Well written words matter. With a predictable structure organizing advice, any reader — especially designers — can make better choices when using a component.

### Organize Guidelines Per Section by Discipline

Some guidelines are better than none. However, a massive list of unorganized bullet points discourages readers. Consistent headings, organized by type of design concern, establishes a familiar pattern for readers _and_ encourages authors to consider implications across concerns.

As a writing plan forms and composition begins, I recommend the following categories (in order):

- **Use When** , often including a countering **Don’t Use When** as a subheading (alternative if discouraged heading: When to Use).
- **Visual Style** to inform judgment about color, type, space, and more (alternative headings: Visual Language, Design Language, Foundations).
- **Behavior** to cover how to cope with events, outcomes, and transitions (alternative headings: Interaction).
- **Editorial** advice covering copy and images flowing into each element (alternative headings: Voice & Tone, Content).
- **Accessibility** checklist(s) that inform design decisions like color contrast.

Not every component offers guidelines in each category, so omit headings that lack content.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Illustration of design guidelines of varying sections',
      caption = 'Different components can result in different available guidelines. Hide headers of empty sections.',
      class = ''
  ) }}

  


With a common structure, a component page’s local navigation (such as a sticky right link list) signals what’s there and anchors to each section.

* * *

### Use When

While a component introduction may hint at relevant use, rely on a Use When section to illustrate the many cases when to use or not use a component.

While some systems opt for “When to Use” as a heading, that’s not my style. “Use When” affords a consistent and more succinct structure by beginning with a gerund (verb ending in “…ing”) like _Displaying…_, _Requiring…_, _Grouping…_, or _Loading…_. Examples include:

- Displaying options within a Menu.<em> (Morningstar’s </em><a href="https://designsystem.morningstar.com/components/list-groups.html#use-when-1" rel="nofollow noopener" target="_blank"><em>List Group</em></a><em>)</em>
- Highlighting an item’s status for quick recognition.<em> (Atlassian’s </em><a href="https://atlassian.design/guidelines/product/components/lozenges" rel="nofollow noopener" target="_blank"><em>Lozenges</em></a><em>)</em>
- Making an image fill the available space while not exceeding the actual image dimensions.<em> (Australian Government Design System’s </em><a href="https://designsystem.gov.au/components/responsive-media/" rel="nofollow noopener" target="_blank"><em>Responsive Media</em></a><em>)</em>
- Highlighting short, indeterminate activities (between 2–5 seconds). Longer activities may require alternate methods of communication, such as snackbars or notifications. <em>(Google Material </em><a href="https://material.io/design/components/progress-indicators.html#circular-progress-indicators" rel="noopener nofollow" target="_blank"><em>Progress Indicator</em></a><em>)</em>


As contrasting examples arise, clarify what not to do. These **Don’t Use When** items are written in the same voice within a sibling or descendant group.

### Visual Style

Visual style guidelines help designers tailor style given their conditions. Topics include color, typography, iconography, borders, space, size, and other visual properties. Just as common, this section elaborates on how to arrange multiple instances (example: aligning primary and multiple secondary buttons) and relate the component to adjacent elements.

Examples include:

- Place a primary button rightmost in a group of buttons.<em> (USAC Indigo’s </em><a href="https://indigo.universalservice.org/latest/components/buttons.html#use-guidelines" rel="nofollow noopener" target="_blank"><em>Button</em></a><em>)</em>
- Adjust opacity across interactive states to suit [the Button’s] background color.
- Always center a stepper above content.<em> (Morningstar’s </em><a href="https://designsystem.morningstar.com/components/steppers.html#visual-style-1" rel="nofollow noopener" target="_blank"><em>Stepper</em></a><em>)</em>


Visual style guidelines are _not_ specs. Avoid the temptation to make this section the final destination of excessive redlines. Specs are for important for an engineer building the component. However, by the time readers encounter this documentation, such visual details are _already built into the available feature_.

### Behavior

Whether or not your built component offers heavy logic built in, a Behavior section offers you the opportunity to elaborate on all the interactive details useful for a designer crafting an experience. Examples include:

- Close the popover when the trigger UI element is clicked again, when the user clicks outside the popover panel, when the user opens a different popover, or when the user presses the ESC key.<em> (NetApp LUCI’s </em><a href="http://luci.netapp.com/components/popovers.html" rel="nofollow noopener" target="_blank"><em>Popover</em></a><em>)</em>

If a library is only offering HTML & CSS without logic built-in, a Behavior section may balloon to offer guidance for designers and engineers alike. Content may take a more structured tone, such as tables offering potential events and associated outcomes.

### Editorial

Whether atomic (like a _Button_ or _Input_) or composable (like a _Card_ or _Menu_), components almost always have words or images. The Editorial section can offer advice on labels, tone, length, punctuation, and writing samples. Examples include:

- Use placeholder text to provide additional context around the data being searched.<em> (Morningstar’s </em><a href="https://designsystem.morningstar.com/components/search-fields.html#visual-language-1" rel="noopener nofollow" target="_blank"><em>Search Fields</em></a><em>)</em>
- Use sentence case, with only the first word in a phrase and any proper nouns capitalized.<em> (IBM Carbon’s </em><a href="http://carbondesignsystem.com/components/checkbox/style" rel="nofollow noopener" target="_blank"><em>Checkbox</em></a><em>)</em>


Editorial guidelines in particular benefit from do and don’t samples a reader can compare and against which model their own writing.

* * *

### Top Tips for Writing Effective Design Guidelines

Voice and tone guidelines vary by design system. As a team begins authoring, I’ll propose the following conventions as a starting point:

1. **Write imperatives** that begin with words like _Hide…_, _Include…_, _Prevent…_, _Limit…_, and _Enable…_.
2. **Omit needless words**. If you can say something with fewer words, do so.
3. **Assert non-negotiables** with _Always…_ or _Never…_.
4. **Encourage a reader’s judgment** with _Consider…_ or _Avoid…_.
5. **Succinctly redirect** to an appropriate alternative with a subsequent sentence beginning with “Instead, use Tooltip.”
6. **Favor positives over negatives** , such as “Always include a logo in global navigation” over “Never omit a logo from global navigation.”
7. **Favor lists over paragraphs**. Readers want to learn quickly or find an item. So don’t bury advice in dense prose unless absolutely necessary.
8. **Limit guidelines length** to two sentences or less.
9. **Favor specific advice** that’s objective, concise and often quantitative over subjective, qualitative, and laborious explanations.

Early on, good habits elude writers. Initial editorial passes across _Button_, _Input_, and _Tooltip_ can result in a bloody mess of Google Doc suggestions.

- **Before**: Really wide logos and site labels can result in degraded displays, hindering usability and being inconsistent with other presentations by causing unnecessary wrapping or taking up too much space. Therefore, try to keep logos less than 100 pixels wide and don’t let labels get too long.
- **After**: Limit product identity to a logo &lt; 100px wide or a text label ≤ 15 characters long.


Stay earnest, my editing friends. Authors adjust by accepting edits, iterating, and adapting to conventions as they author the next component. These writing patterns will take hold, sometimes gradually for authors but quickly for readers.

* * *


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Illustration',
      caption = '',
      class = 'escom-article-figure--full-width'
  ) }}

  

## Enhance with the Pictures

A picture is worth 1,000 words. Or, at least it’s often over the many, many words it replaces, especially for the most important advice you impart.

As you write or edit design guidelines, your inner voice should consistently challenge each bullet point, paragraph, or heading with:



  {{ escom.bar_quote(
      quote = '“Would a picture work better here? If so, is it worth it?”'
  ) }}

  


Make no mistake, pictures are more expensive to compose, adjust, and content manage than jotting down a few words. Too many images can create an overwhelming scrolled experience down a documentation page. Images get out of date too, creating maintenance headaches.

So find the right balance of words and pictures, such as 1 picture for every 5 to 10 copy-only guidelines. As you author, always be mindful of how you can enhance storytelling with captioned images, Do’s and Don’ts, and other custom options at your disposal.

* * *

### Do Use Do’s and Don’ts, Especially Comparatively

As I edit, vital or wordy guideline bullets often trigger a comment of "Consider a Do/Don’t.”

Do/Don’ts provide a welcome break from tomes of text. The blocks are definitive, concise, focused, and scannable. Each pairs an image with a succinct guideline prepended with a Do or Don’t imperative and accented green or red. Clarity isn’t difficult, and the pattern is eminently reusable in any section.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Two examples, contrasting a do with a don\'t',
      caption = '',
      class = ''
  ) }}

  


As the name implies, optimal Do/Don’ts pair one next to the other. Sure, any number of Do’s followed by any number of Don’ts can work. But enabling the reader to ping pong visually left and right reinforces a memorable teaching point. As a result, consider limiting Do/Don’ts to two per row.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Do and don\'t presented as checklists',
      caption = '',
      class = ''
  ) }}

  


Authoring Do’s and Don’ts benefits from a standard height and width just under 50% of the content well, suggesting a design template (like a Sketch file with premade artboards) for asset creation. Sometimes that 4x3ish image ratio is an unwelcome constraint for larger or horizontally oriented images. Therefore, consider a full-width Do/Don’t variant as an alternative.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'A Do presented without a don\'t',
      caption = '',
      class = ''
  ) }}

  


Do/Don’t work great for words and code snippets, too. The usual suspect triggering my system teams to extend the Do/Don’t display to accommodate words? Error messages, often as a stack of sensitizing examples, as seen on sites like [Shopify Polaris](https://polaris.shopify.com/content/grammar-and-mechanics#section-punctuation) and [Morningstar](https://designsystem.morningstar.com/ux-patterns/errors.html#editorial-1).



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '7',
      image_alt = 'Do and don\'t examples presented as words',
      caption = '',
      class = ''
  ) }}

  


Even Do/Don’t hedging is appearing in the form of cautionary stories accented with yellow or orange, as seen on [Google Material](https://material.io/design/components/buttons.html#text-button).



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '8',
      image_alt = 'A caution contrasted with a don\'t',
      caption = '',
      class = ''
  ) }}

  

* * *

### Enrich Storytelling with Compelling if Expensive Custom Demos

As an investment in design guidelines deepens, so to does a team’s willingness to invest in more custom exhibits, including:

- **Low-fidelity diagrams** of component examples (example: [Salesforce Lightning Loading](http://www.lightningdesignsystem.com/guidelines/loading/)), flows or states. As a supplement to coded, full-fidelity examples nearby, such storytelling can be less expensive to produce and focus a reader on elements relevant to the story.
- **Videos** , **animated GIFs** , and other **custom demos** that capture an arc of interaction, animation, or quick looping sample. (Example: [Google Material Motion](https://material.io/design/motion/speed.html#duration))
- Additional **live code examples** , enriching understanding beyond the list of variations.

Admittedly, custom demos are rare across most component pages across most design systems. It’s usually more expensive, may slow down authoring, and usually requires tools and assets less familiar or available to authors. Therefore, pick your moments, but don’t hesitate when the teachable moment warrants investment.

* * *

### Avoid Redundancy with Coded Examples

If readers have already encountered a list of rendered examples with code equivalents (as suggested in [Component Examples](/articles/component-examples)), strongly avoid repeating the examples in design guidelines to tell the same story. Such examples — effectively labeled and ideally coupled with succinct “Use When”-style statements — have already exhibited the range of relevant cases.

Therefore, reserve the Design Guidelines for deeper storytelling that elaborates on rather than repeats what the examples have already taught.

* * *

[**#3. Examples**](/articles/component-examples) ← Previous | Next → **#5. Code Guidelines**



  
