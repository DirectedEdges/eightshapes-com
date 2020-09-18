---
  category : Strategy
  title : A Design System's Reach
  deck : Levels to Discuss How Broadly a System Applies
  title_abbreviation : Reach
  author_id : nathan
  date : 2016-02-03
  masthead : false
  layout : article.njk
  tags : []
---


{% import '../_includes/escom.njk' as escom with context %}





Not all design systems are the same: some small used by a single product team, others used by 100s of teams. When starting a system, let’s get one thing straight: How broadly applicable is this system we are making?

Usually, a system’s reach is one of four levels: team, portfolio, enterprise, or worldwide. Each level has validity, worthy of pursuit depending who you are and what you need.

## A Team’s&nbsp;Playbook


  {{ escom.pull_quote(
      quote = '“We need a system as an HTML/CSS playbook for our team to build and maintain a consistent product more efficiently.”',
      class = 'escom-pull-quote--light'
  ) }}




Gotta start somewhere, in the absence of a library shared with or inherited from other teams. A single team can establish a system to organize, build, and maintain a visual language, UI elements, components and maybe page types and realize substantial efficiencies and consistency.

A system need not be a deeply-documented, living web-based toolkit for other teams. The focus can be legitimately inward, with complete autonomy tailored to their product objectives and platform constraints. There is no “centralized system team,” just “the team’s system.”

- **Duration to Setup** : 2–3 months
- **Investment** : None, beyond product team’s work itself

## A Portfolio’s Guide


  {{ escom.pull_quote(
      quote = '“We need a design spec, asset library and/or supporting HTML/CSS to share across our [2 to 10] product teams.”',
      class = 'escom-pull-quote--light'
  ) }}




A portfolio’s design system often includes code (HTML, CSS, JS,&nbsp;…), but usually ends up operationally platform-specific despite lip service to span platforms (to iOS and Android).

When a customer’s journey spans a portfolio projects (such as Home to Search to Products to Checkout to My Account), the system provokes questions of who owns what, who does what (by when), and who pays for making and supporting it. Alignment is required, and [federated participation and/or centralized support](/articles/team-models-for-scaling-a-design-system) may or may not emerge. It is also common for an enterprise to be supporting other similar if competing systems in adjacent lines-of-business and/or platforms.

- **Duration to Setup** : 6–12 months
- **Investment** : Many part time and/or small team, full time

## An Enterprise’s Language


  {{ escom.pull_quote(
      quote = '“We need a cohesive design language, tooling, library, and intentional collaborative activity across all products we make.”',
      class = 'escom-pull-quote--light'
  ) }}




Expectations rise to cover everyone and everything: across platforms (web & native), across product lines, and beyond “just digital” boundaries.

Big corporations like IBM, Capital One, Salesforce, and most notably Google spend years building and evolving system practices. There is evident, nontrivial investment in a separate, centralized service. Outputs and conversations bias toward shared fundamentals (such as color, icons, and typography) and practices (like accessibility and editorial) over complex components and page types.

System implications are threaded into discussions both bottom-up (designers and devs, working the trenches) and top-down (VPs talking themes and expectations). Be careful, though. An Enterprise-wide design system is a massive undertaking, imperiled by shifting corporate priorities, politics, and personalities.

- **Duration to Setup** : A year or more
- **Investment** : Systems team full time and federated participation part time

## A World’s&nbsp;Platform


  {{ escom.pull_quote(
      quote = '“We produce a system’s design and tooling used by teams we’ll never know, anywhere in the world (or some other big context), to deliver their products efficiently.”',
      class = 'escom-pull-quote--light'
  ) }}




These typically take one of two forms: open source toolkit or corporate platform, often spanning beyond _just_ design.

We’re thankful for [Bootstrap](http://getbootstrap.com), [Foundation](http://foundation.zurb.com/), [Code for America](http://style.codeforamerica.org), and other similar libraries we’ll use as great sensitizing examples to build web sites and apps. [Android Developers](http://developer.android.com/), [Apple Developers](https://developer.apple.com/resources/), and [Salesforce Lightning](https://developer.salesforce.com/lightning) (and their subsystems, like [Lightning Design System](https://www.lightningdesignsystem.com/) web app toolkit) are wonderful resources to get started and build stuff.

The parts look like ours, and we may emulate design and doc patterns of these well-architected systems. We also may have a path to communicate with and ask for more from their creators. It’s their job. But such massive, broadly applicable systems are not the goal of 99% of the design systems out there.

- **Duration to Setup** : 2+ years
- **Investment** : Team(s) of contributors










Not all design systems are the same: some small used by a single product team, others used by 100s of teams. When starting a system, let’s get one thing straight: How broadly applicable is this system we are making?

Usually, a system’s reach is one of four levels: team, portfolio, enterprise, or worldwide. Each level has validity, worthy of pursuit depending who you are and what you need.

## A Team’s&nbsp;Playbook


  {{ escom.pull_quote(
      quote = '“We need a system as an HTML/CSS playbook for our team to build and maintain a consistent product more efficiently.”',
      class = 'escom-pull-quote--light'
  ) }}




Gotta start somewhere, in the absence of a library shared with or inherited from other teams. A single team can establish a system to organize, build, and maintain a visual language, UI elements, components and maybe page types and realize substantial efficiencies and consistency.

A system need not be a deeply-documented, living web-based toolkit for other teams. The focus can be legitimately inward, with complete autonomy tailored to their product objectives and platform constraints. There is no “centralized system team,” just “the team’s system.”

- **Duration to Setup** : 2–3 months
- **Investment** : None, beyond product team’s work itself

## A Portfolio’s Guide


  {{ escom.pull_quote(
      quote = '“We need a design spec, asset library and/or supporting HTML/CSS to share across our [2 to 10] product teams.”',
      class = 'escom-pull-quote--light'
  ) }}




A portfolio’s design system often includes code (HTML, CSS, JS,&nbsp;…), but usually ends up operationally platform-specific despite lip service to span platforms (to iOS and Android).

When a customer’s journey spans a portfolio projects (such as Home to Search to Products to Checkout to My Account), the system provokes questions of who owns what, who does what (by when), and who pays for making and supporting it. Alignment is required, and [federated participation and/or centralized support](/articles/team-models-for-scaling-a-design-system) may or may not emerge. It is also common for an enterprise to be supporting other similar if competing systems in adjacent lines-of-business and/or platforms.

- **Duration to Setup** : 6–12 months
- **Investment** : Many part time and/or small team, full time

## An Enterprise’s Language


  {{ escom.pull_quote(
      quote = '“We need a cohesive design language, tooling, library, and intentional collaborative activity across all products we make.”',
      class = 'escom-pull-quote--light'
  ) }}




Expectations rise to cover everyone and everything: across platforms (web & native), across product lines, and beyond “just digital” boundaries.

Big corporations like IBM, Capital One, Salesforce, and most notably Google spend years building and evolving system practices. There is evident, nontrivial investment in a separate, centralized service. Outputs and conversations bias toward shared fundamentals (such as color, icons, and typography) and practices (like accessibility and editorial) over complex components and page types.

System implications are threaded into discussions both bottom-up (designers and devs, working the trenches) and top-down (VPs talking themes and expectations). Be careful, though. An Enterprise-wide design system is a massive undertaking, imperiled by shifting corporate priorities, politics, and personalities.

- **Duration to Setup** : A year or more
- **Investment** : Systems team full time and federated participation part time

## A World’s&nbsp;Platform


  {{ escom.pull_quote(
      quote = '“We produce a system’s design and tooling used by teams we’ll never know, anywhere in the world (or some other big context), to deliver their products efficiently.”',
      class = 'escom-pull-quote--light'
  ) }}




These typically take one of two forms: open source toolkit or corporate platform, often spanning beyond _just_ design.

We’re thankful for [Bootstrap](http://getbootstrap.com), [Foundation](http://foundation.zurb.com/), [Code for America](http://style.codeforamerica.org), and other similar libraries we’ll use as great sensitizing examples to build web sites and apps. [Android Developers](http://developer.android.com/), [Apple Developers](https://developer.apple.com/resources/), and [Salesforce Lightning](https://developer.salesforce.com/lightning) (and their subsystems, like [Lightning Design System](https://www.lightningdesignsystem.com/) web app toolkit) are wonderful resources to get started and build stuff.

The parts look like ours, and we may emulate design and doc patterns of these well-architected systems. We also may have a path to communicate with and ask for more from their creators. It’s their job. But such massive, broadly applicable systems are not the goal of 99% of the design systems out there.

- **Duration to Setup** : 2+ years
- **Investment** : Team(s) of contributors


