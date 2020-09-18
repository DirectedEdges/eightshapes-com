---
  title : Stitching Prototypes
  deck : Demoing a User’s Journey Spanning Many In-Flight Products
  title_abbreviation : Typography
  author_id : nathan
  date : 2015-10-20
  masthead : true
  layout: article.njk
  tags: []
---
{% import '../_includes/escom.njk' as escom with context %}

I once worked with a Head of Design responsible for all the native apps for a large bank during their formative period leading to a design system. In my career, I’ve never met someone who could demo his team’s emerging work better than he could.

He was the quintessential “Minuteman” able to demo any project on a minute’s notice.

Once we sat together for an hour, and our conversation repeatedly led him to his laptop to open a prototype and demo a succinct product story. He’d clearly articulate user goals. He’d plainly proffer the value prop. After each demo, we discussed how it fit with other projects. Over and over. Must have been 8 to 10 demos in just one hour.

His stories were so tight. He proved he was the leader threading his teams together, revealing their progress to everyone else. I left that conversation impressed by the good work and yearning to be _that_ effective as a communicator.

But something was missing amid all those experiences, all those products, a designer expertly showing off a portfolio. What’s the path _through_ the products?

Across the enterprise, there was no focal point (beyond his impromptu demos) for communicating, contributing to and collaborating through the complete customer journey.

* * *

## Large-Scale Web Apps are Many Products, Woven&nbsp;Together

During the 2012–2013 period, my company [EightShapes](http://www.eightshapes.com/) worked deeply with Marriott International to make marriott.com responsive and apply a new design language. Over more than a year, design processes yielded distinct artifacts across agile teams working homepage, global navigation, account management, search, hotels, booking, and everything else.

Each team did well to move its design forward and demo it to its stakeholders and up the product management chain. But no group was revealing _whole_ journey. How do we reveal what our customers will experience when they traverse the path on whatever device they choose?

* * *

### Livia’s Idea: “I need to show the whole journey!”

At the time, [Livia Labate](https://www.linkedin.com/in/livlab) was Sr. Director Digital Standards & Practices and a leading evangelist of the responsive program. As she surveyed the landscape of work, she realized no one team was responsible for communicating the interdependent nature of the portfolio.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = '',
      caption = '',
      class = ''
  ) }}



**Stitch prototype**: a collection of prototypes from multiple products, woven together to interactively demo a threaded, complete digital journey.

She and her team realized that they can thread all the artifacts into a single, cohesive prototype. It shouldn’t be _that_ hard, actually. So they set about doing so, and gave the result a memorable, relevant name.

* * *

### Many Product Teams = Many Artifact&nbsp;Types

Stitching together many different design artifacts feels daunting.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = '',
      caption = 'Multiple product teams, building towards a converged, responsive experience at different stages of their design and development cycles.',
      class = ''
  ) }}




Disparate teams follow their own process and use tools they chose, and during this period Marriott’s tools were spread wide. Some teams went from sketches into high-fidelity, fully responsive prototypes built in HTML & (S)CSS. Other designers lived an entire project in Photoshop. Yet others, Adobe Fireworks.

Based on parallel commitments, teams spun up responsive work at different times, resulting in concepts of varying stability and detail. Nevertheless there was sufficient material that would be predictably maintained to stitch them together with confidence.

[James Melzer](https://twitter.com/jamesmelzer), a design lead of the Standards & Practices team, sought out each design team to learn about their process and see and gather their artifacts.

* * *

## Treat Design Systems — and Design Projects — as Submodules

With design artifacts in hand, it fell to James to stitch them together in a separate Github repository.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = '',
      caption = '',
      class = ''
  ) }}




The stitch’s homepage provided a birds-eye view of all the pages — and products — included, enabled you to start dropping in from anywhere, and visualized the status and stability of designs next to each page link.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = '',
      caption = 'Thumbnail of stitch homepage, with partial index of pages included',
      class = ''
  ) }}




The repository reinforced that the stitch was a separate project (albeit, a small one) with an issues list of tasks like adding connecting links and smoothing discontinuities.

* * *

## Resist Focusing Negatively on&nbsp;Seams

Whether you’re assembling or demoing stitched prototypes, you’ll find seams in the experience. Inconsistencies are easy to spot: wayward icons, odd typography, distinct components that really should be normalized.

However, since the stitch’s ongoing success depended on persisted participation of many product teams, we couldn’t turn it into a governor’s audit tool. It’d be collaborative suicide to integrate a team’s assets only to turn right around and point out “all the mistakes you’ve been making.”



  {{ escom.pull_quote(
      quote = 'A stitch prototype exists to reveal an interconnected journey across products, not to strong arm each into submission.',
      class = 'escom-pull-quote--light'
  ) }}




The initial artifact gathering and ongoing maintenance did provoke chances to mutually recognize areas to improve. Some conversations were easy, and revealed a lack of progress but intent to fix. However, collaborative conversations remained light and mutually nurturing rather than taking the tone of a web review board.

* * *

## Hook ’em with a Magical Minute, Get the Rest for Discussion


  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = '',
      caption = '',
      class = ''
  ) }}




To Livia, the stitch prototype was her “[Stone Soup](https://en.wikipedia.org/wiki/Stone_Soup),” based on an old children’s tale where hungry strangers trick local townspeople into sharing food.

The ploy relies on seemingly magical stones placed in a pot first (here, the journey revealed via the stitch) to motivate the town (product managers, QA, executives, whoever) to offer their scarce resources to produce a feast they all enjoy together.

Livia’s mission: convince all groups with their varying motives, perspectives, and experiences that the effort was worthy of their attention and effort.

Her **1** minute stitch demo convinced attendees time and time again. She hooked ’em, then engage in heftier topics of planning and prioritization in the 59 minutes that remained.



  {{ escom.pull_quote(
      quote = 'I shared the prototype with everyone, <strong>presenting to a new group about once per week</strong> and sending out the URL whenever I could f<strong>or 9 months</strong>.',
      attribution = '<a href="https://www.linkedin.com/in/livlab" rel="nofollow noopener" target="_blank">Livia Labate</a>',
      class = 'escom-pull-quote--light'
  ) }}



* * *

## Nurture Its Life, and Predict Its&nbsp;Death

Stitch prototypes aren’t free. They require an initial build. Once setup, maintenance can be predictable. Edits are cheap: refresh a github.com submodule or swap old screenshots for new.

Despite its vitality, the stitch prototype was still a throwaway design artifact. It wasn’t _the_ experience, and it becomes irrelevant once the enterprise-wide effort concludes.



  {{ escom.pull_quote(
      quote = 'I always explained that <strong>it had an end</strong>, the very day we launched the experience it depicted.',
      attribution = '<a href="https://www.linkedin.com/in/livlab" rel="nofollow noopener" target="_blank">Livia Labate</a>',
      class = 'escom-pull-quote--light'
  ) }}




It served a purpose to help so many people understand the journey. To see the future. Until the future was now. After launch day, the repository & URL quietly disappeared. The team saw the journey as the public did, via production with whatever seams remained.