---
  category : Documentation
  title : Myths of Documenting Components
  deck : How to Pivot Misguided Perceptions Towards Reality
  title_abbreviation : Myths
  author_id : nathan
  date : 2018-12-19
  masthead : true
  layout : article.njk
  tags : []
---


{% import '../_includes/escom.njk' as escom with context %}






I repeatedly debunk myths about making component documentation. It’s a challenge to encounter them over and over as I setup each system. Yet, I’ll take these opportunities to get real with beliefs I’ve developed over time to better a program. Here’s eight of them.

* * *

### Myth #1. Great Documentation is Instant, Cheap, and Easy

You think it’s just a couple hours of work to draft, review, iterate, editorially polish, produce images, code samples, and demos, and then publish pages as polished as a <a href="https://material.io/design/components/cards.html">Google Material</a> or <a href="https://designsystem.morningstar.com/components/cards.html">Morningstar</a> Card page?

Puh-lease. If you want quality, be ready to invest in that quality. And it ain’t just a step in the process to…

* * *

### Myth #2. Document Everything When Design and Code is Done

<a href="/articles/design-system-features-step-by-step">Doc almost always finishes after design and code</a>. But don’t wait to start.



{{ escom.pull_quote(
    quote = 'The most important thing I’ve learned about writing doc is to always be writing doc. Don’t trigger it by a step in the process. Instead, start a living document that grows as you research, design, code and complete a system feature.',
    attribution = 'Adam Rowe, <a href="https://designsystem.morningstar.com/">Morningstar Design System</a>',
    class = 'escom-pull-quote--light'
) }}



You can accrue a treasure trove of the right rules, ideas, sensitizing examples over time if you have a place to put them. Capture them, even crudely, as they come up, for collecting them is vastly more important than relying on…

* * *

### Myth #3. All Designers and Developers Write Well

Nobody is perfect. Many designers and developers lack writing skills and confidence. That doesn’t mean they shouldn’t write.

The system must equip and help _them_ communicate how _their_ things work. It’s an investment to give their contributions proper care through editing, workshops, and materials to give them confidence and belief in their value. They’ll develop that confidence in a place that’s safe and comfortable, but don’t think that…

* * *

### Myth #4. Pull Requests Are Great for Editing Words

Pull requests (PRs) are great for reviewing code yet terribly inefficient for editing prose. PRs enable line-level comments. A PR is also a venue subject to the impulses to merge, merge, merge. Don’t block the code, right?

Reviewing words of nontrivial length requires comments and suggestions accepted or declined at the character, word, sentence, or broader level. Editing requires reflection, not an instinct to hit the approve button. So consider shifting that work to Google Docs or a similarly effective word processor. Speaking of which…

* * *

### Myth #5. Office365 is a Substitute for Google Docs

`<ax-to-grind>`Within the past year, four system clients started with Google Docs then fell victim to an Office365 mandate. Change! Migrate! Use that corporate standard! If you are a systems advocate, you have to trust (or, at least concede) there’s a well-intentioned rationale to standardize. Otherwise, you could be a hypocrite.

Once a design system program tastes the sweet nectar of dependable, performant, feature-rich coauthoring, it’s deflating to downgrade. Local copies mask who’s changing what when. Browser performance lags to a crawl. Suggestions aren’t visible in-browser. Tracked changes are missing. Oh, the crashes. Tools matter.`</ax-to-grind>`

* * *

### Myth #6. Documentation is Just Words

You’re there! Your 1,500 word draft of Use Whens, imperative guidance, Accessibility criteria, and Prop descriptions await a rapid, coronating review. Yet, oops! There’s more content that needs both creation and review:

- **Polished images**, such as for Do & Don’ts, each with captions.
- **Realistic content** flowed into UI code samples and static images.
- **Dynamic demos** of animation, component explorers, states, and more.

All these extras are quite the buzzkill for the unsuspecting author. However, the content beyond prose is often the difference between “just OK” and memorable, impactful guidance. Consolidating polished content across divergent tools and content types brings us to…

* * *

### Myth #7. Composing Doc = Publishing Doc

Composition answers “Are these the right words and pictures?” Then, publishing answers “Are those words and pictures delivered to and displaying correctly for my readers?”

Authors like to focus on the former: communicating messages clearly and succinctly. The latter can be effortful and intimidating. Separating composition from publishing allows for incremental task completion, dividing responsibility, and offering to take care of the publishing’s drudgery so as to not limit an author’s motivation. That said, don’t believe the hype that…

* * *

### Myth #8. If It’s Not Entered in a Rich Text Editor, Only a Dev Can Do It

Many documentation sites use a static site generator to combines markdown copy with functional calls to display code samples, Do/Don’ts, and more. Code? Oh no! Only devs can do it, right? It’s so complicated, you probably need a computer science degree to try. Not really.

We’ll onboard designers, writers, and product managers with a “white-glove” walkthrough and give them tools to make the majority of publishing not that hard. A 15 minute investment can allay anxiety about text editors, basic Terminal commands, and submitting a pull request. Markdown can be an empowering gateway for non-coders to contribute to a source-of-truth. If you believe contributors are capable, they might believe it too.











I repeatedly debunk myths about making component documentation. It’s a challenge to encounter them over and over as I setup each system. Yet, I’ll take these opportunities to get real with beliefs I’ve developed over time to better a program. Here’s eight of them.

* * *

### Myth #1. Great Documentation is Instant, Cheap, and Easy

You think it’s just a couple hours of work to draft, review, iterate, editorially polish, produce images, code samples, and demos, and then publish pages as polished as a <a href="https://material.io/design/components/cards.html">Google Material</a> or <a href="https://designsystem.morningstar.com/components/cards.html">Morningstar</a> Card page?

Puh-lease. If you want quality, be ready to invest in that quality. And it ain’t just a step in the process to…

* * *

### Myth #2. Document Everything When Design and Code is Done

<a href="/articles/design-system-features-step-by-step">Doc almost always finishes after design and code</a>. But don’t wait to start.



{{ escom.pull_quote(
    quote = 'The most important thing I’ve learned about writing doc is to always be writing doc. Don’t trigger it by a step in the process. Instead, start a living document that grows as you research, design, code and complete a system feature.',
    attribution = 'Adam Rowe, <a href="https://designsystem.morningstar.com/">Morningstar Design System</a>',
    class = 'escom-pull-quote--light'
) }}



You can accrue a treasure trove of the right rules, ideas, sensitizing examples over time if you have a place to put them. Capture them, even crudely, as they come up, for collecting them is vastly more important than relying on…

* * *

### Myth #3. All Designers and Developers Write Well

Nobody is perfect. Many designers and developers lack writing skills and confidence. That doesn’t mean they shouldn’t write.

The system must equip and help _them_ communicate how _their_ things work. It’s an investment to give their contributions proper care through editing, workshops, and materials to give them confidence and belief in their value. They’ll develop that confidence in a place that’s safe and comfortable, but don’t think that…

* * *

### Myth #4. Pull Requests Are Great for Editing Words

Pull requests (PRs) are great for reviewing code yet terribly inefficient for editing prose. PRs enable line-level comments. A PR is also a venue subject to the impulses to merge, merge, merge. Don’t block the code, right?

Reviewing words of nontrivial length requires comments and suggestions accepted or declined at the character, word, sentence, or broader level. Editing requires reflection, not an instinct to hit the approve button. So consider shifting that work to Google Docs or a similarly effective word processor. Speaking of which…

* * *

### Myth #5. Office365 is a Substitute for Google Docs

`<ax-to-grind>`Within the past year, four system clients started with Google Docs then fell victim to an Office365 mandate. Change! Migrate! Use that corporate standard! If you are a systems advocate, you have to trust (or, at least concede) there’s a well-intentioned rationale to standardize. Otherwise, you could be a hypocrite.

Once a design system program tastes the sweet nectar of dependable, performant, feature-rich coauthoring, it’s deflating to downgrade. Local copies mask who’s changing what when. Browser performance lags to a crawl. Suggestions aren’t visible in-browser. Tracked changes are missing. Oh, the crashes. Tools matter.`</ax-to-grind>`

* * *

### Myth #6. Documentation is Just Words

You’re there! Your 1,500 word draft of Use Whens, imperative guidance, Accessibility criteria, and Prop descriptions await a rapid, coronating review. Yet, oops! There’s more content that needs both creation and review:

- **Polished images**, such as for Do & Don’ts, each with captions.
- **Realistic content** flowed into UI code samples and static images.
- **Dynamic demos** of animation, component explorers, states, and more.

All these extras are quite the buzzkill for the unsuspecting author. However, the content beyond prose is often the difference between “just OK” and memorable, impactful guidance. Consolidating polished content across divergent tools and content types brings us to…

* * *

### Myth #7. Composing Doc = Publishing Doc

Composition answers “Are these the right words and pictures?” Then, publishing answers “Are those words and pictures delivered to and displaying correctly for my readers?”

Authors like to focus on the former: communicating messages clearly and succinctly. The latter can be effortful and intimidating. Separating composition from publishing allows for incremental task completion, dividing responsibility, and offering to take care of the publishing’s drudgery so as to not limit an author’s motivation. That said, don’t believe the hype that…

* * *

### Myth #8. If It’s Not Entered in a Rich Text Editor, Only a Dev Can Do It

Many documentation sites use a static site generator to combines markdown copy with functional calls to display code samples, Do/Don’ts, and more. Code? Oh no! Only devs can do it, right? It’s so complicated, you probably need a computer science degree to try. Not really.

We’ll onboard designers, writers, and product managers with a “white-glove” walkthrough and give them tools to make the majority of publishing not that hard. A 15 minute investment can allay anxiety about text editors, basic Terminal commands, and submitting a pull request. Markdown can be an empowering gateway for non-coders to contribute to a source-of-truth. If you believe contributors are capable, they might believe it too.


