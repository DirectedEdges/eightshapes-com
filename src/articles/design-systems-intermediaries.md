---
  category : Systems of Systems
  title : Design System Intermediaries
  deck : Relating to the Distributors, Translators, and Themers In Between
  title_abbreviation : Intermediaries
  author_id : nathan
  date : 2019-02-11
  masthead : true
  layout : article.njk
  tags : []
---

{% import '../_includes/escom.njk' as escom with context %}

It’s important to sustain strong, open relationships with all system customers: the individuals and teams adopting the system. Ideally, that relationship is direct — both practically from a collaborative perspective and literally via code dependency. Like any relationship, it gets harder when something gets between me and you.

Intermediaries are inevitable when dispersing systems to the masses. They lodge themselves in the chain between your system (most literally, your system code) and adopting teams. This link breaks a team’s direct connection to a system. As a result, adopters grow frustrated, confused, disenchanted. Who do they go to for help? How do things work? Who _should_ they depend on for upgrades, new features, and fixes?

**Distributors**, **translators**, and **themers** are three common intermediaries provoking both opportunities and challenges. As they step in between your system and teams you support, be ready for what awaits!

---

## Distributors

Sophisticated products — often, a company’s flagship(s) — are often built by many squads that tightly couple work together. To scale, they’ll identify “shared” features (authentication? settings? containers? headers?) and anoint a team as the “platform team” to make and manage them.

A team building shared features often manage shared dependencies, too. Want to use an open source package that other teams want? Then it’s the platform team that installs, deploys, maintains, and upgrades (when necessary) the package for other teams to access.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = 'Comparative diagram of products depending on a system with or without an intermediary platform group in between',
      caption = '',
      class = ''
  ) }}

Sound familiar? Yup, that’s _exactly_ how I position a system code dependency. What I thought would be five independent adopters are actually accessed via a platform squad serving the other four. Triggering adoption by _any_ team means distributing it solely via the platform team.

_Opportunities_:

- **Distributors signal mature practices**. That a group has a platform team signals that they value rigor, dependability, and coordination. That’s correlated with a better readiness for adopting a system. This is what distributors do, and their community is usually better for it.
- **Distributors ease dissemination**. Install a system once, and it’s installed for _all_ squads directly, instantly. Yes!

_Challenges_:

- **Distributors block adoption**. Teams aren’t allowed to directly adopt a design system. You may hear “We’d love to adopt, but we must leverage it _through_ the platform. Otherwise, our hands are tied.” This is what distributors do, they are good at it, and they _should_ take it seriously. But that seriousness gets in the way sometimes.

  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Diagram of a platform group with product dependents, and then other products not working with the platform group',
      caption = '',
      class = ''
  ) }}

- **Distributors Inhibit Upgrade Frequency**. After a distributor installs a system, the system will continue to evolve. However, a distributor’s teams (1) _can’t_ upgrade the system until the distributor upgrades it and (2) often _must_ upgrade when distributor chooses too. A distributor likely upgrades the design system less often (certainly not every minor release), since upgrades involve enhancements and retesting across all features. Even more threatening, this lower upgrade frequency means more effort per upgrade since more system change has occurred. This diminished upgrade frequency inhibits timely access to shiny new system features.

_Takeaways_: Distributors, can’t adopt without ’em, so get used to living with them. Important products require many people and teams to make them special. These practices exist for a reason. So, I’ll work both angles.

1. _Forge a strong relationship with the distributor_. Ask what features and tools they need to ease adoption, and — if possible — architect system code in a manner consistent with their dissemination and optimization practices.
2. _Persist collaborating with feature teams that benefit_. Their case — “We need this system, now!” — is far more influential in provoking adoption and upgrades than you poking the distributor from the outside.

---

## Translators

Some engineering cultures mandate a tool, going through extensive migrations to adopt a stack dependent on one framework, such as React. If there’s a dominant framework in play, then you bet we’ll build our HTML & CSS system in that framework too. That leaves teams on [Angular](https://angularjs.org/), [Vue](https://vuejs.org/), and [Adobe Experience Manager](https://www.adobe.com/marketing-cloud/experience-manager.html) (AEM) to fend for themselves using [design tokens](/articles/tokens-in-design-systems) as their system [gateway drug](https://en.wikipedia.org/wiki/Gateway_drug_theory).

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Diagram of a mostly React product portfolio, with a React translation of the components in between',
      caption = '',
      class = ''
  ) }}

Other cultures advocate autonomy. Teams get to choose, and they do: 10 on React or Vue, a smattering of Angular, maybe a few on AEM. In those cases, we’ll offer a “vanilla” library of HTML, (S)CSS, and “light Javascript” not embedded in any framework, leaving translation up to each adopting team.

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Diagram of a vanilla html and css offering usable by many different frameworks',
      caption = '',
      class = ''
  ) }}

Framework-specific sub-communities of engineers emerge. It’s plausible — even expected — that an adopting team or single engineer takes the initiative to translate a design system’s vanilla HTML & CSS into their framework. They separate the concern in a distinct repo. And they tell their framework friends about it. “Look, here! I’ve translated the system into React in a new `system-react` repo. Anyone can use it. I hope you find it valuable!”

{{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Diagram of an HTML system overlaid into a React system used by adopters',
      caption = '',
      class = ''
  ) }}

Other engineers salivate: ohhh, yes, so much saved time! They eagerly adopt it as a translated packaged dependency better suited to their needs. Suddenly, you find your system’s features — at least partially — intermediated by a framework **translation**.

_Opportunities_: That this is an opportunity for growth should be the initial perception of everyone involved: translator, other teams on that framework, and the systems team. So, be ready to:

- **Praise the contributor!** It’s time gush with gratitude and praise. How awesome is that!?! Someone believed enough in your system to not just translate it, but also make it available to others. That’s the community spirit!
- **Accelerate others**. At a minimum, the translation provides an example demonstrating how to thread the system through a framework. Candidate adopters lagging in commitment now have a helpful frame to connect the dots. Even better, maybe they adopt the framework translation directly and accelerate adoption even more.

  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Diagram of a React and Vue translation of a system',
      caption = '',
      class = ''
  ) }}

_Challenges_: I’ve yet to see a faithful, complete, dependable translation of a design system. While it bears a system’s brand name, it may be riddled with:

- **Incomplete translations** of only components (and features of those components) that a translator needs.
- **Out of date dependency** languishing untouched months after a translation’s initial announcement fanfare, since such time your system considerably evolved.
- **Poor support** for help and extensions as translators focus on their product, unlike the systems team that swarms incidents and plans growth.
- **Lagging quality** when translations skimp on testing or drop features — browser support, accessibility, functionality — that adopters expect to get from the system.

_Takeaways_:

1. Approach translators and their framework’s community with curiosity and cautious optimism. Educate them about the processes, engagement, and effort needed to make their “open source” passion play a success.
2. Protect a system’s brand if a translation risks damaging it. If the translation bears your name, it must meet all the promises — feature completeness, support, quality, freshness — to be a part of the program.

Once there’s no looking back, be sure how to position (or distance your system from) how the translation fits within your broader ecosystem.

---

## Themers

Some may want to use a system as a foundation for _their_ experiences too. However, their visual language — logo, color, typography, space, and iconography — may be quite distinct from a system’s foundation. Therefore, a library must be themed, or “skinned,” to meet requirements of any of:

- A master brand’s (like Marriott) subbrand (like Courtyard Hotels).
- An international corporation (like Volkswagon Group or Vodaphone) offering capabilities to an in-country team (like Audi of America or Vodaphone New Zealand).
- A corporation’s partner- or client-supporting teams that integrate solutions into that partner’s broader experience, such as intranet tools.

  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '7',
      image_alt = 'Diagram of themes dependent on a system',
      caption = 'Deeper system architecture, from a design system through two other teams ultimately to client teams making experiences',
      class = 'escom-article-figure--break-bleed'
  ) }}

In one case, there were _four_ layer of teams making customized “partner experiences” that integrated a company’s UI into other company’s experience. Each client team relied on an theme (made by Team 3) that applied custom visual styles to sophisticated analysis components (made by Team 2) that depended on UI components and charting components (made by Team 1, the “Design System” team). From the outside, it’s as if levels 1 to 3 is actually the “design system.”

Themeability isn’t a built-in capability for systems that don’t need it. But when theming is built-in, a system must enable easy configuration. Themers need simple answers to questions like:

- “How do I change a global `font-family` or button `background-color`?”
- “How and where are library and component-specific variables organized?”
- “Where and how should I put style override on a per theme basis?”
- “Are multiple themes made in separate repos or in the same place?”
- “How do you manage change in your code architecture across releases?” (that is, “Is your code architecture both stable and considered part of what’s considered when [semantically versioning](http://www.semver.org/) each system release?”)

_Opportunities_: While effortful and more complex, optimizing for themability strengthens how you can maintain and extend your default visual language, too. To help your themers, organize your code for optimal extensibility and overrides.

- Apply a core visual language using global variables, separate from where you style each component. Even better, embed the visual language into [design tokens](/articles/tokens-in-design-systems) useful _across_ platforms, and demonstrate how overriding this taxonomy as theming’s starting point.
- Isolate component-specific variables (possibly in one file, such as `/components/button/variables.scss`) from component CSS selectors and their rules (such as in `/components/button/button.scss`) in a more predictable and useful location.
- Leverage feature like Sass’&nbsp;`!default`. If a variable has already been assigned a value by a theme’s override, it won't be re-assigned by a rule marked&nbsp;`!default`, which is otherwise applied.

_Challenges_: From a themer’s perspective, your system is their “[Bootstrap](http://www.getbootstrap.com/).” They want to know where the variables are. They value examples of how and where to override features not already represented by a variable.

1. Themers may request that you _reorganize_ or _expand_ your file architecture, variable vocabulary, and token taxonomy to suit their interests. If your system’s primary goal isn’t theming (it usually isn’t), this is more work you gotta do now. Sigh.
2. Innocuous requests can transform into considerable library refactoring from the ground up. Be careful, since serving that themer may inject _breaking changes_ for everyone else.

_Takeaways_: Avoid themers forking your code and drifting their instance from your base. This severs the relationship between you, the theme, and downstream adopters of your system. Anticipate theming requirements early as a system forms, architect accordingly, and build what you can. If you succeed, you’ll amplify your system’s value and expand the recognition of it’s importance across a wider customer base.
