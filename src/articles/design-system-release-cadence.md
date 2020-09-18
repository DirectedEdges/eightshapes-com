---
  category : Releases
  title : Design System Release Cadence
  deck : Modeling How Often and Regularly Your System Delivers
  title_abbreviation : Cadence
  author_id : nathan
  date : 2018-08-28
  masthead : true
  layout : article.njk
  tags : []
---


{% import '../_includes/escom.njk' as escom with context %}



  
    
_#2 of 6 of the series Releasing Design Systems:_
[Outputs](/articles/releasing-design-systems) | **Cadence** | [Versions](/articles/versioning-design-systems) | [Breaking](https://medium.com/@nathanacurtis/visual-breaking-change-in-design-systems-1e9109fac9c4) | [Dependencies](/articles/dealing-with-dependencies-inside-design-systems) | Process

For design system adopters, it’s not enough to know what you deliver. Just as important is knowing when and how often it’ll change.

A design system’s age, stability, code composition, and degree of federated contribution all strongly influence it’s release cadence. Established design systems generally adopt a **continuous** or **by increment/sprint** model, consistent with **longer-term release cycles** consistent with the system’s vision and direction. Between these regular releases, a system program is also capable of pushing irregular **hot fixes** to address urgent defects.

* * *

## Model 1: Continuous Releases

Design systems like Atlassian’s [Atlaskit](https://atlaskit.atlassian.com/) and Financial Times’ [Origami](http://origami.ft.com/) release continuously, not just once but upwards to TWENTY! (yes, 20) times a day.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = 'Diagram plotting release counts by period over time',
      caption = 'Continuous releases, one or more per day, over weeks',
      class = ''
  ) }}

  


Feature changes are narrower per release. The release process is also very automated, allowing contributors to rapidly deploy and and adopters to rapidly reintegration the small changes.

Continuous models more likely break and fix small things in less risky ways along the way. Adopters absorb the cost of the constant flow of small adjustments bit by bit. But they allow it, permitting core developers the latitude given their level of engagement and trust.



  {{ escom.pull_quote(
      quote = 'We’ve built trust in delivering over time. If we need to fix something, we do it. Our developer community trusts that we won’t let important optimizations drop off the radar.',
      attribution = '<a href="https://twitter.com/rowanmanning" rel="nofollow noopener" target="_blank"> Rowan Manning</a>, FT <a href="http://origami.ft.com/" rel="nofollow noopener" target="_blank">Origami</a>',
      class = 'escom-pull-quote--light'
  ) }}

  


These environments tend to blend central engineers driving the library with an active contributor community to evolve a codebase together and collaborate closely. The code library is positioned as a tightly coupled with and possibly blocking product development teams.

On the other hand, this rapid code iteration loosens or disconnects designer participation. Doc is part of the process, but only the code reference targeted to developers. From the outset or over time, the design toolkit and documentation lag or drift from code’s interminable forward momentum.

* * *

## Model 2: Releases By Increment (Usually, By Sprint)

Other system programs like [Morningstar](https://designsystem.morningstar.com/), [Discovery Ed’s Comet](https://comet.discoveryeducation.com/resources/release-history.html), Adobe Spectrum, and [Shopify](https://polaris.shopify.com/whats-new/whats-new#navigation) strive for a regular cadence of a minor release (or two) per planning increment (usually, a sprint) for some if not all outputs.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Diagram of changes per sprint, accumulated into a release per sprint',
      caption = 'Features accumulated over two week increments, packaged into a bi-weekly release',
      class = ''
  ) }}

  


From a code (via a separate `branch`), documentation, or design toolkit perspective, changes accumulate and are merged with and/or replace a previous output as the release. The team usually delivers every two weeks, from grooming existing and emerging requests, sizing and completing work, and releasing outputs regularly to a community of adopters.

The release is usually invoked by or at least visibly across a team, assigned to a developer to conduct, and discussed relative to other open branches of work to minimize conflict. For example, at [Salesforce Lightning](https://www.lightningdesignsystem.com/) and [Morningstar](https://designsystem.morningstar.com/), an assigned developer takes two to four hours to “run the release,” and everyone else is aware of impacts to their concurrent work.

Systems operating by increment are more likely supported by multi-disciplinary teams that include developers, designers, product and/or project management, writers and other disciplines. Code remains a paramount source of truth. However, these teams are more likely to synchronize code with design assets and deeper doc that includes design guidance.

In contrast to continuous models, sprint-by-sprint system release also tend to be less coupled with ongoing work of adopting product teams. Instead, regular minor releases offer adopters autonomy in identifying when and how often they upgrade, relative to other priorities and costs.

* * *

## Mixing Continuous and By-Increment

Interestingly, teams will mix the two models depending on their release tooling and community engagement.

Many systems tightly couple **code** and **doc** site releases (inhibiting more timely doc updates not in demand anyway), and update the **design toolkit** less frequently within the same process. However, another strives for biweekly **design toolkit** and **design doc** releases while aligning with an engineering partner team team releasing **code** independently. A third releases **code** every two weeks, but enables access to update the **doc site** immediately at any time.

_Takeaway_: Blend cadence to serve your team’s and community’s norms and capacity to effect change in a timely fashion. While usually mutually exclusive, there are opportunities to leverage continuous and by-increment models in concert.

* * *

## Hot Fixing Unpredictable Mistakes

For teams releasing incrementally by sprint, system can be called upon to release irregularly to “hot fix” a browser defect, documentation typo, or even a malformed Sketch symbol.



  {{ escom.pull_quote(
      quote = '[Hot fixes] occur unpredictably. Therefore, we handle them informally.',
      attribution = 'Shopify Polaris team',
      class = 'escom-pull-quote--light'
  ) }}

  


Unlike regular releases packaging a collection of updates, a hot fix is instead introduced directly into production system code and documentation. As a result, a team member must slide that change _also_ into branch of ongoing work as well.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Diagram of changes within a release period, with a hot fix introduced into both the release branch and the master branch',
      caption = 'A hot fix applied directly to production <em>and</em> folded into ongoing release work',
      class = ''
  ) }}

  


Systems must remain rigorous. While the hot fix’s _trigger_ can be an informal chat in the hallway or Slack, the hot fix’s _process_ usually involves most steps of the ordinary release process plus a few special steps.

_Takeaway_: Avoid a hot fix habit. Increasing team tension due to it’s compressed urgency, a hot fix doesn’t just touch code. It always has associated light documentation. It may also impacts the design toolkit. It happens fast. It disrupts ongoing work. It can impact multiple team members.

* * *

## Long-Term Release Cycles

Whether continuous or sprint-by-sprint, mature design systems plan large-scale efforts and priorities to be delivered over time, on time. These broader cycles usually promote changes associated with high-level objectives and span quarterly, annual, or–most often–semi-annual periods.

### From Initial Launch to Incremental Feature Sets

As an organization is starting a design system, objectives correspond to alpha and beta releases intended for early adopters and lead to general availability. Later, cycles deliver new feature sets of significant value (Charts! Motion! Alerts!) and/or a major upgrade predictably.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Diagram of a year of releases, highlighting big releases of critical new feature sets',
      caption = '',
      class = ''
  ) }}

  


Feedback from some customers amplifies a core expectation: “Don’t overwhelm us with constant change.” These adopters favor less frequent touch points to learn about what’s new and upgrade to a new version.



  {{ escom.pull_quote(
      quote = 'We have clients building against specific timelines. They can’t — and don’t want to — constantly pull down UI updates.',
      attribution = 'Nate Baldwin, Adobe Spectrum',
      class = 'escom-pull-quote--light'
  ) }}

  


They’ll often _only_ engage with a system based on these longer term cycles, fitting the system’s impact on their capacity with other prioritized objectives.

_Takeaway_: System adopters are interested in both what’s coming next as well as the broader direction and bigger chunks you’ll deliver. Orient priorities and release plans to suit both the near- and long-term.

* * *

### Differentiating Core or Internal Customers from “The Rest”

Salesforce Lightning highlights another useful distinction: differentiating cadence by customer type. They’ll iterate and release often in support of their internal customers.

However, “external releases” will happen rarely per year timed with public Salesforce releases and events for their platform. This limits promotion to concentrated periods, aligns with broader objectives, and clearly frames team priorities and customer expectations.

_Takeaway_: Orient release cadence and workflows based on relevant customer distinctions. For more closely aligned teams driving your priorities or more dependent on smaller, incremental change, increase how often—and how automated—you conduct the release process.

* * *

**#1.** [**Outputs**](/articles/releasing-design-systems) ← Previous | Next → **#3. Versioning**



  






  
    
_#2 of 6 of the series Releasing Design Systems:_
[Outputs](/articles/releasing-design-systems) | **Cadence** | [Versions](/articles/versioning-design-systems) | [Breaking](https://medium.com/@nathanacurtis/visual-breaking-change-in-design-systems-1e9109fac9c4) | [Dependencies](/articles/dealing-with-dependencies-inside-design-systems) | Process

For design system adopters, it’s not enough to know what you deliver. Just as important is knowing when and how often it’ll change.

A design system’s age, stability, code composition, and degree of federated contribution all strongly influence it’s release cadence. Established design systems generally adopt a **continuous** or **by increment/sprint** model, consistent with **longer-term release cycles** consistent with the system’s vision and direction. Between these regular releases, a system program is also capable of pushing irregular **hot fixes** to address urgent defects.

* * *

## Model 1: Continuous Releases

Design systems like Atlassian’s [Atlaskit](https://atlaskit.atlassian.com/) and Financial Times’ [Origami](http://origami.ft.com/) release continuously, not just once but upwards to TWENTY! (yes, 20) times a day.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = 'Diagram plotting release counts by period over time',
      caption = 'Continuous releases, one or more per day, over weeks',
      class = ''
  ) }}

  


Feature changes are narrower per release. The release process is also very automated, allowing contributors to rapidly deploy and and adopters to rapidly reintegration the small changes.

Continuous models more likely break and fix small things in less risky ways along the way. Adopters absorb the cost of the constant flow of small adjustments bit by bit. But they allow it, permitting core developers the latitude given their level of engagement and trust.



  {{ escom.pull_quote(
      quote = 'We’ve built trust in delivering over time. If we need to fix something, we do it. Our developer community trusts that we won’t let important optimizations drop off the radar.',
      attribution = '<a href="https://twitter.com/rowanmanning" rel="nofollow noopener" target="_blank"> Rowan Manning</a>, FT <a href="http://origami.ft.com/" rel="nofollow noopener" target="_blank">Origami</a>',
      class = 'escom-pull-quote--light'
  ) }}

  


These environments tend to blend central engineers driving the library with an active contributor community to evolve a codebase together and collaborate closely. The code library is positioned as a tightly coupled with and possibly blocking product development teams.

On the other hand, this rapid code iteration loosens or disconnects designer participation. Doc is part of the process, but only the code reference targeted to developers. From the outset or over time, the design toolkit and documentation lag or drift from code’s interminable forward momentum.

* * *

## Model 2: Releases By Increment (Usually, By Sprint)

Other system programs like [Morningstar](https://designsystem.morningstar.com/), [Discovery Ed’s Comet](https://comet.discoveryeducation.com/resources/release-history.html), Adobe Spectrum, and [Shopify](https://polaris.shopify.com/whats-new/whats-new#navigation) strive for a regular cadence of a minor release (or two) per planning increment (usually, a sprint) for some if not all outputs.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Diagram of changes per sprint, accumulated into a release per sprint',
      caption = 'Features accumulated over two week increments, packaged into a bi-weekly release',
      class = ''
  ) }}

  


From a code (via a separate `branch`), documentation, or design toolkit perspective, changes accumulate and are merged with and/or replace a previous output as the release. The team usually delivers every two weeks, from grooming existing and emerging requests, sizing and completing work, and releasing outputs regularly to a community of adopters.

The release is usually invoked by or at least visibly across a team, assigned to a developer to conduct, and discussed relative to other open branches of work to minimize conflict. For example, at [Salesforce Lightning](https://www.lightningdesignsystem.com/) and [Morningstar](https://designsystem.morningstar.com/), an assigned developer takes two to four hours to “run the release,” and everyone else is aware of impacts to their concurrent work.

Systems operating by increment are more likely supported by multi-disciplinary teams that include developers, designers, product and/or project management, writers and other disciplines. Code remains a paramount source of truth. However, these teams are more likely to synchronize code with design assets and deeper doc that includes design guidance.

In contrast to continuous models, sprint-by-sprint system release also tend to be less coupled with ongoing work of adopting product teams. Instead, regular minor releases offer adopters autonomy in identifying when and how often they upgrade, relative to other priorities and costs.

* * *

## Mixing Continuous and By-Increment

Interestingly, teams will mix the two models depending on their release tooling and community engagement.

Many systems tightly couple **code** and **doc** site releases (inhibiting more timely doc updates not in demand anyway), and update the **design toolkit** less frequently within the same process. However, another strives for biweekly **design toolkit** and **design doc** releases while aligning with an engineering partner team team releasing **code** independently. A third releases **code** every two weeks, but enables access to update the **doc site** immediately at any time.

_Takeaway_: Blend cadence to serve your team’s and community’s norms and capacity to effect change in a timely fashion. While usually mutually exclusive, there are opportunities to leverage continuous and by-increment models in concert.

* * *

## Hot Fixing Unpredictable Mistakes

For teams releasing incrementally by sprint, system can be called upon to release irregularly to “hot fix” a browser defect, documentation typo, or even a malformed Sketch symbol.



  {{ escom.pull_quote(
      quote = '[Hot fixes] occur unpredictably. Therefore, we handle them informally.',
      attribution = 'Shopify Polaris team',
      class = 'escom-pull-quote--light'
  ) }}

  


Unlike regular releases packaging a collection of updates, a hot fix is instead introduced directly into production system code and documentation. As a result, a team member must slide that change _also_ into branch of ongoing work as well.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Diagram of changes within a release period, with a hot fix introduced into both the release branch and the master branch',
      caption = 'A hot fix applied directly to production <em>and</em> folded into ongoing release work',
      class = ''
  ) }}

  


Systems must remain rigorous. While the hot fix’s _trigger_ can be an informal chat in the hallway or Slack, the hot fix’s _process_ usually involves most steps of the ordinary release process plus a few special steps.

_Takeaway_: Avoid a hot fix habit. Increasing team tension due to it’s compressed urgency, a hot fix doesn’t just touch code. It always has associated light documentation. It may also impacts the design toolkit. It happens fast. It disrupts ongoing work. It can impact multiple team members.

* * *

## Long-Term Release Cycles

Whether continuous or sprint-by-sprint, mature design systems plan large-scale efforts and priorities to be delivered over time, on time. These broader cycles usually promote changes associated with high-level objectives and span quarterly, annual, or–most often–semi-annual periods.

### From Initial Launch to Incremental Feature Sets

As an organization is starting a design system, objectives correspond to alpha and beta releases intended for early adopters and lead to general availability. Later, cycles deliver new feature sets of significant value (Charts! Motion! Alerts!) and/or a major upgrade predictably.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Diagram of a year of releases, highlighting big releases of critical new feature sets',
      caption = '',
      class = ''
  ) }}

  


Feedback from some customers amplifies a core expectation: “Don’t overwhelm us with constant change.” These adopters favor less frequent touch points to learn about what’s new and upgrade to a new version.



  {{ escom.pull_quote(
      quote = 'We have clients building against specific timelines. They can’t — and don’t want to — constantly pull down UI updates.',
      attribution = 'Nate Baldwin, Adobe Spectrum',
      class = 'escom-pull-quote--light'
  ) }}

  


They’ll often _only_ engage with a system based on these longer term cycles, fitting the system’s impact on their capacity with other prioritized objectives.

_Takeaway_: System adopters are interested in both what’s coming next as well as the broader direction and bigger chunks you’ll deliver. Orient priorities and release plans to suit both the near- and long-term.

* * *

### Differentiating Core or Internal Customers from “The Rest”

Salesforce Lightning highlights another useful distinction: differentiating cadence by customer type. They’ll iterate and release often in support of their internal customers.

However, “external releases” will happen rarely per year timed with public Salesforce releases and events for their platform. This limits promotion to concentrated periods, aligns with broader objectives, and clearly frames team priorities and customer expectations.

_Takeaway_: Orient release cadence and workflows based on relevant customer distinctions. For more closely aligned teams driving your priorities or more dependent on smaller, incremental change, increase how often—and how automated—you conduct the release process.

* * *

**#1.** [**Outputs**](/articles/releasing-design-systems) ← Previous | Next → **#3. Versioning**



  
