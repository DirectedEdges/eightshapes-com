---
  category : Documentation
  title : Authoring Component Documentation
  deck : Model the Content, People, and Steps Involved
  title_abbreviation : Authoring
  author_id : nathan
  date : 2018-12-19
  masthead : true
  layout : article.njk
  tags : []
---

{% import '../_includes/escom.njk' as escom with context %}

Over the years, I’ve refined how to approach authoring documentation. From **models** and **templates** used to what **people** are involved when to get the work done. May these eight tips help you improve how you document your own components.

---

### #1. Establish a Clear Yet Flexible Content Model

What sections will it have: Use When, How to Install, Accessibility? What are they called: Use When or When to Use? What form will each take: paragraph, bullets, table? What columns per table? What props are shown for each prop?

It takes comparative research, iteration, and — hopefully — community engagement and feedback to settle on a consistent content model for for all components. Use 3 to 5 components to stabilize content’s hierarchy, labels and formats. From there, get ready for mass production.

---

### #2. Offer an Easy-to-Migrate Template To “Fill in the Blanks”

As a content model stabilizes, ease an author’s burden with a pre-built template in your authoring tool of choice. Don’t over-engineer a template with lots of tiny, inflexible fields or overlay too many standards on how to write adjacent to what content they compose.

Instead, optimize how easily you’ll be able to migrate completed doc into a publishable page. For example, one team evolved to permit and eventually encourage authors to include long form markdown syntax in Google Docs. Everyone was comfortable, appreciating the greater clarity in the syntactical structure and the vastly accelerated migration into code templates.

---

### #3. Agree on Voice & Tone Through Iteration

I’m an advocate for imperative language: Avoid, Never, Always, the works. Yet, voice and tone isn’t uniform for component doc across all organizations.

In one instance, a system team was 5 to 7 components in when dissonance emerged. Across draft iterations, we were correcting and commenting with contradictory points of view. Teammates drifted from other’s composition, soften a strongly uniform imperative tone. So, three of us huddled and agreed to close the gap. As we each conceded aspects of our personal voice, I left appreciating that our team had progressed, together.

---

### #4. Expand a Visual Language for What Doc Needs

Usually, system doc communicates using the system’s own visual style. As with any adopting product, the system may not cover all the solution that your doc needs. It can feel like extra work to finalize robust long form text, (orange?) signals for new items, and how to use alert colors (green=Do, red=Don’t, and yellow=Caution). These aren’t always what “real” products need first for their experiences, but nevertheless are essential for how your system communicates.

---

### #5. Name One (or Two, or a Few) “System Editor(s)”

Useful documentation can come from anyone. However, it requires one (or a few) talented writers to ensure doc is high quality and fits together. Steeped in conventions, rapid in feedback, and sensitive to the subtle nuance that distinguishes rules from guidance, these editors are essential.

When authoring begins, find a content strategist or copywriter — even eighth- or quarter-time — to edit drafts irregularly prior to publishing. In the absence of that expertise, identify a team member or two with the talent to serve.

---

### #6. Designers & Engineers Review Each Others Work. Always. Period.

As a core ethic of design systems, designers and engineers must work together to improve the quality of their shared output. When creating doc, that means that a designer should review the technical doc of a component they designed. Similarly, an engineer should have a hand in validating design guidelines. Both should pair to create examples that suit the needs of designers and engineers alike. Therefore, I make the designer and engineer a required reviewer of the other’s work. Period.

---

### #7. Integrate Reviews by Community Members

Quality documentation comes in part from the inclusive participation of the design and engineering communities beyond the system team. That isn’t easy. Asking for feedback via an open call can feel like casting a fishing line into a pond with no fish and waiting for nothing to happen.

So ask named individuals directly to review this or that. Usually, interested participants are evident by their engagement in design critique, code reviews, or ongoing pilots. Encourage their input, give them a few days, make access and commenting easy. If they can’t or promise but don’t, move on.

---

### #8. Publish Incrementally, Since It’s Never Complete.

A code library requires code samples illustrating core usage. Design guidelines are a staple of any self-respecting design toolkit. Yet, while a component explorer is nice at the top, it’s not required. Doc is never perfect, covering every case and illustration. As you ogle <a href="https://material.io/design/">Google Material</a> from afar, I’ll let you in on a little secret. Their doc is incomplete too.

There’s always more stories to tell, more scenarios to exhibit, more guidelines you _could_ write. Some of them are important. But maybe not as much as other things you could do. And that’s ok. Don’t get anxious about it. Your end goal isn’t doc, it’s end-customer experience quality and speed-to-market.
