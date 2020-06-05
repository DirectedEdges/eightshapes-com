---
  category : Visual Style
  id : reference-designs-for-systems
  title : Reference Designs for Systems
  deck : Page Concepts Comparing Before & After, with a System Twist
  title_abbreviation : Reference Designs
  author_id : nathan
  date : 2016-08-22
  masthead : true
  layout: article.njk
  tags: ['design systems', 'visual style']
---
{% import '../_includes/escom.njk' as escom with context %}


When it comes to selling a design system, you’ve gotta have a pitch. And by pitch, I mean a compelling, infomercial-like comparison of


{{ escom.bar_quote(
    quote = '“Here’s what you look like, today, without a system” vs. “Here’s you look like, tomorrow, cohesive using a system.”'
) }}



Early on, nothing — not a library, not a sticker sheet, nothing! — demonstrates a beautiful future more than **reference designs**.

Reference designs are a collection high-fidelity page concepts (static or [threaded as a prototype](/articles/stitching-a-journey-together-in-a-prototype)) spanning a holistic customer experience, shining with a new system. While disposable and imperfect, they still depict an aspirational future that every stakeholder can understand. They invite reactions from the enterprise and begin to stress decisions made in narrower exercises like [style tiles](http://styletil.es/) and [element collages](http://danielmall.com/articles/rif-element-collages/).

Don’t skimp and stay too atomic. Use reference designs to build belief in a system’s promise and convince everyone you are headed in a direction worthy of everyone’s invested time and attention.

* * *

## Planning Reference Designs

Reference designs are more than just concept explorations. The output is familiar: a collection of high-fidelity page mocks and/or prototypes. However, you’ll approach the activity — how and who does the work, pages you design, and more — differently with system-focused mindset.

### Which Pages? A Broad Cross-Section

When creating reference page concepts, thoughtfully select pages representative of a the broad experience, not just one or two flagship products. You should:

- Represent **many products** (such as Home, Search, Products, Checkout, Email Campaigns, and Account Management) and platforms, with a concentration on flagship and a few secondary products.
- Explore a mixture of **layout motifs**  — _Product Page_ with heavy photography, _Search Results_ full of _Media Objects_, _Sign In_ form, _Press Release_ article, _Dashboard_, _Map_, the works — including responsive considerations.
- Maximize **elements and components diversity** to parallel your intended library’s diversity.
- Reveal **opportunities for shared components** to provoke useful lines of discussion, such as a unified global web navigation or cards across platforms.
- Vary between **simple and complex** displays, particularly if your experience shifts from high-styled hero photography to dense, rich interactions.
- Balance **high-value key pages**  — a _Home_ or _Product_ view — that matter most to your stakeholders with an **outlier** (or three) to emphasize the [system’s reach](https://medium.com/p/a-design-system-s-reach-3835b2eb8e52).
- Be [**stitchable as a customer journey**](/articles/stitching-a-journey-together-in-a-prototype), so you can tell the story of your pursuit of cohesiveness through the customer’s eyes. A reference design demo as a journey — even as few as 6 to 10 screens — can be quite the aphrodisiac.
- Avoid muddling efforts with near-term release priorities or today’s fire drill. **Focus on the long view** of the target experience.

_Takeaway_: Don’t just launch into designing some cool pages. Thoughtfully consider such criteria to confidently select pages that demo well and inform the system.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Marriott.com planning doc, describing the rationale to design each page, back when we made such docs. 2012',
      caption = 'Marriott.com planning doc, describing the rationale to design each page, back when we made such docs. 2012.',
      class = ''
  ) }}


### How Many? At Least 5, Ideally 10+

Rendering two or three layouts representing a couple flagship products doesn’t convince anyone of a design that scales. That’s too limited a product reach and insufficiently diverse. So reach for more. While some teams succeed with 5 to 10 for more limited portfolio, an enterprise-wide set often warrants 10 to 20.

### When? Early On, in a Quick Burst

A burst of reference designs usually takes place in sprint 2 or 3 of a system’s formative period, after planning and strategy solidify. With sufficient focus, a reference designer (or up to three or four) can crank through a first pass within a week, and iterate for one to three weeks depending the depth and range of feedback required.

### Who? Ideally, System & Product Designers Working Together

It’s hard to divert leading product designers from their product teams for a sprint’s worth of collaboration in a war room. That doesn’t mean you shouldn’t try. If you can’t assemble your all-star team, at least assertively seek feedback from [designers on those flagship and secondary products](http://alistapart.com/article/promoting-a-design-system-across-your-products).

_Takeaway:_ Minimize black-boxedness of conceptual exercises. This will bode well for future adoption and start down a path of collective ownership.

* * *

## Presenting Reference Designs

### Before & After, Side by Side

When presenting reference designs, start with the old, reveal the new, and follow with key points of visual style (like color, typography, and space) and components (like buttons and global navigation). Once complete, rest your presenter’s display on a side-by-side view of old vs new to open discussion.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Google products before and after reference designs',
      caption = '<em>A comparison of current Google products to design explorations that led to Material Design, by </em><a href="http://www.behance.net/gallery/Google-Product-Redesign/4315369" rel="nofollow noopener" target="_blank">
  <em>Andy Gugel, Jesse Kaczmarek, and Google Creative lab</em>
</a><em>, as described in the Verge.com article </em><a href="http://www.theverge.com/2013/1/24/3904134/google-redesign-how-larry-page-engineered-beautiful-revolution" rel="nofollow noopener" target="_blank">Redesigning Google: how Larry Page engineered a beautiful revolution</a>',
      class = ''
  ) }}



This lets the audience compare on their own. I may have a boundless passion for button varieties. But my audience usually isn’t like me. They are usually convinced by a bigger picture evoking today’s pain next to tomorrow’s promise.

_Takeaway_: Sell your audience on the before and after, side-by-side. Revel in it. Let the comparison persuade them.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Red Gate Software designs on wall, comparing before and after',
      caption = '<a href="http://red-gate.com" rel="nofollow noopener" target="_blank">Red-gate.com</a> site and product reference designs in a hallway. August 2015.',
      class = ''
  ) }}


### Soliciting Input from Product Teams

Some teams post reference designs on walls of a conference room or hallway. This exposes the target state in a space where others can stop by and thoughtfully consider the designs themselves.

The [hudl.com system](http://www.hudl.com/) team led by Kyle Murphy and John Henry Müller used an effective Post-It notes and dots technique to invite structured feedback for their pre-system product design audit. While the audit preceded this activity, the structure would work really well for reference designs too to solicit:

- “LOVE! This is how we should feel!” using pink.
- “NOPE! This is not how we should feel” using yellow.
- “OPP! An idea for improvement” using green.

  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Hudl designs on wall, annotated with love, nope, and opportunities',
      caption = '<a href="http://www.hudl.com" rel="nofollow noopener" target="_blank">Hudl.com</a> early system artifacts in conference room, layered with feedback in notes and dots. Spring 2016.',
      class = ''
  ) }}



Their wall of designs transformed into visualization. The systems team catalogued responses to inform early priorities and subsequent work on color, buttons, forms, and other components.

_Takeaway_: Don’t bury reference designs in some InVision prototype or Keynote deck for only attendees of an invite-only presentation. Put ’em where they can see ’em, invite feedback, and be transparent.

* * *

## Using Reference Designs Later

As early reference concepts give way to painstaking design and build of each part, I’ll revisit reference designs for:

### **Inspiration**

In my experience, I pull out reference designs as I build individual components to look for inspiration: additional states I haven’t considered, alternative layouts I’d not expected, and variations that help us build more flexible pieces.

### **Composing Page Examples**

As a system’s library matures towards a first release, building full pages based on components you’ve built is essential. These pages showcase examples of what’s possible and stress test your build by fitting all the pieces together. More often than not, we’ll build our initial reference design concepts using the parts we’ve subsequently built.


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'NetApp page types built in code',
      caption = 'Fully built pages showcased in the NetApp LUCI library (<a href="http://luci.netapp.com/page-types.html" rel="nofollow noopener" target="_blank">http://luci.netapp.com/page-types.html</a>)',
      class = 'escom-article-figure--break-bleed'
  ) }}

