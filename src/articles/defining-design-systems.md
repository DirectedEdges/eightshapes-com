---
  category : Strategy
  title : Defining Design Systems
  deck : Getting to the Root of What Your System Really Is
  title_abbreviation : Defining
  author_id : nathan
  date : 2017-10-07
  masthead : true
  layout : article.njk
  tags : []
---


{% import '../_includes/escom.njk' as escom with context %}



  
    

Defining design systems seems a daunting challenge. It’s not as if our community hasn’t made [many](https://css-tricks.com/design-systems-building-future/), [many](https://medium.com/ge-design/ges-predix-design-system-8236d47b0891), [many](https://the-pastry-box-project.net/jina-bolton/2015-march-28), [many](https://www.webdesignerdepot.com/2016/11/creating-a-design-system-language/), [many](https://medium.com/buildit/design-systems-wtf-42956f673250), [many](https://medium.freecodecamp.org/how-to-construct-a-design-system-864adbf2a117), [many](https://uxdesign.cc/selling-a-design-system-before-asking-for-buy-in-eeb45e88f66a), [many](https://medium.com/@amiltonpaglia/design-systems-na-pr%C3%A1tica-preparando-o-terreno-cfd5c29d2ae), [many](https://medium.com/hello-group/design-systems-faq-cvi-and-styleguides-ef85736e83cd), [many](https://medium.com/initialized-capital/instacarts-lead-product-designer-on-creating-design-systems-4cffefdfca00), [many](https://www.uxpin.com/studio/blog/design-systems-vs-pattern-libraries-vs-style-guides-whats-difference/), [many](https://uxcellence.com/2017/design-systems-style-guides-pattern-libraries), [many](https://medium.com/@sturobson/styleguides-pattern-libraries-and-design-languages-84746902c51c) attempts. Recently, [Sarah Federman](https://medium.com/@Sarah_federman) wrote about [distilling it into its essence](https://medium.com/design-systems/distilling-how-we-think-about-design-systems-b26432eefef9) and warns us to avoid getting trapped defining things and being dogmatic about what it is and isn’t.

Design systems is a growing [field](https://en.wikipedia.org/wiki/Discipline_%28academia%29) formed by vibrant, collaborative voices. It is important to posit what a system is and how it fits, or we risk undermining its value due to incoherent understanding. We shouldn’t suffer challenges, and there’s common ground to gain. My livelihood depends on it, selling ~15–25 design systems engagements a year to clients understanding the outcomes and outputs (hint: not just UI kits, code, and doc) and why they matter.

* * *

## “What is a Design System?”

If I have ~30 seconds in an elevator or over animated slides, I’ll lead with:



  {{ escom.bar_quote(
      quote = 'Almost always, a design system offers a library of visual style and components documented and released as reusable code for developers and/or tool(s) for designers. A system may also offer guidance on accessibility, page layout, and editorial and less often branding, data viz, <a href="/articles/patterns-components" target="_blank">UX patterns</a>, and other tools.'
  ) }}
  {{ escom.bar_quote(
      quote = 'A design system is <a href="/articles/adopting-design-systems" target="_blank">adopted</a> by and supported for other teams making experiences. These teams use it to develop and ship features more efficiently to form a more cohesive customer journey.'
  ) }}
  {{ escom.bar_quote(
      quote = 'A design system is made by an <a href="/articles/team-models-for-scaling-a-design-system" target="_blank">individual, team, and/or community</a>. While some arise less formally, organizations now dedicate <a href="/articles/designing-a-systems-team" target="_blank">small to large squad</a>(s) to develop and release system versions and processes over time.'
  ) }}

  


If only 10 seconds, I’ll say:



  {{ escom.bar_quote(
      quote = 'A design system offers a library of visual style, components, and other concerns documented and released by an individual, team or community as code and design tools so that adopting products can be more efficient and cohesive.'
  ) }}

  

Formally, a [system](https://en.wikipedia.org/wiki/System) is a set of interconnected parts forming a unified whole. In the case of design systems, this definition actually alludes to not one but three interrelated systems you’ll need to solve for to be successful:

1. a **kit of reusable, interconnected parts** ,
2. a **set of cohesive, interconnected products** , and
3. a **community of collaborative, interconnected people**.

* * *

## #1. A Kit of Reusable, Interconnected Parts

To its primary customers, the system is a set of tangible outputs that they encounter on a day-to-day basis. I’ll start plainly with:



  {{ escom.bar_quote(
      quote = 'Almost always, a design system offers a library of visual style and components documented and released as reusable code for developers and/or tool(s) for designers.'
  ) }}

  


These days, a system of parts connects a codifed visual style (e.g., color, space, typography) to [composible](https://en.wikipedia.org/wiki/Composability) UI components (buttons, forms, headings, so much more) used to design and build interfaces.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = 'Relationship of color, a variable, a function, and many components',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


This starting point packs a punch of intention, revealing beliefs: A system serves developers _and_ designers, in that order. A system must be well-documented. A system must offer style and UI components. Yet every system is different, so I’ll expand a system’s scope to include:



  {{ escom.bar_quote(
      quote = 'A system may also offer guidance on accessibility, page layout, and editorial and less often branding, data viz, UX patterns, and other tools.'
  ) }}

  


This variability fosters useful conversations that draw boundaries around what an organization wants and needs. Some concerns (always style and components) are realized far more often than others (editorial guidance and data visualization).

* * *

## #2. A Set of Cohesive, Interconnected Products

Words like “offer” and “released” are intentional, casting the [design system as a product satisfying the needs of customers](/articles/a-design-system-isn-t-a-project-it-s-a-product-serving-products) (chiefly, developers and designers making products of their own) through tangible outputs they use.

Invoking product concepts trigger a cascade of concepts useful for those familiar with product management applicable to a system too: roadmap, backlog, releases, program increments, sprints, dependencies. However, to focus only on **development** of parts risks missing what makes systems work. Especially, the system’s customers!



  {{ escom.bar_quote(
      quote = 'A design system is adopted by and supported for other teams making experiences. These teams use it to develop and ship features more efficiently to form a more cohesive customer journey.'
  ) }}

  


Design systems invest in **marketing** to product teams to consume the kit of parts to form a unified and cohesively holistic experience. [Fostering adoption](/articles/adopting-design-systems) requires clear messaging to sell others to adopt system and improving themselves (individually and collectively) by realizing its benefits over time as a dependency.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Diagram of dependency versions varying across different adopters',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


Product management also evokes how design systems fit in product **operations** , such as [DevOps](https://en.wikipedia.org/wiki/DevOps) delivery (“How do we release it? How is it automated?”), integration (“How do we version? What’s a breaking change? How, how frequently, and when do we upgrade?”), and infrastructure (“Where’s our repo? Where’s our doc hosted? Is it public?”).

Easy to miss in the definition above is _supported for_, framing the **support and service** of the customer. Effective documentation is essential. Beyond that, there must be paths to and time for providing help, responding to requests, patching defects, and consulting, all in an environment that’s open and responsive.

To cast a design system (and the effort needed to make it work well) as _just_ developed style, components, and assets — to the exclusion of the marketing, service, integration and operations that success depends on— is too narrow.

* * *

## #3. A Community of Interconnected Collaborators

To help stakeholders understand the impacts of a system, I also route conversation through the people and activities required to operate a system.



  {{ escom.bar_quote(
      quote = 'A design system is made by an individual, team, and/or community. While some arise less formally, organizations now dedicate <a href="/articles/designing-a-systems-team" target="_blank">small to large squad</a>(s) to develop and release system versions and processes over time.'
  ) }}

  


Characterizing a system team as a product squad sets the choice in terms familiar to product and marketing professionals: is this important enough to put a [team](/articles/designing-a-systems-team) behind it? That team can adopt rituals, showcase work, and [evolve a roadmap](/articles/what-s-will-your-design-system-deliver) to become part of the fabric of how enterprises make products.

In cases I’ve observed, this team is responsible for the workflows, connections, and community engagement across an enterprise to decide how a system is applied and evolved. Historically referred to as “governance,” I’ll avoid that term to favor a tone of collaboration over control.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Diagram relating the inputs and outputs between a system team and teams that adopt that system',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


From the outside, a designer, engineer, or someone else in a community may not sense the level of execution behind such activities. That doesn’t mean that they aren’t developed, operated, supported, and used deliberately for months or years. This execution of community interactions is an effortful yet intangible product that make a system successful.

* * *

## Composing a High-Level System Definition

While not my intent, this writing returned me to the framework of a [Parts, Products, and People](/articles/picking-parts-products-people) workshop I’ve run for years. This activity steps participants through a prescribed protocol to detail what parts their system needs, what products it’ll apply to, and who does the work.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Photograph of a worksheet',
      caption = 'Parts, Products &amp; People <a href="/articles/picking-parts-products-people" target="_blank">Worksheet Activity</a>',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


However, it’s reasonable to precede or replace this meticulous activity with a leaner, fill-in-the-blanks template to ground understanding:

Our design system offers <strong>_______[kit scope]_______</strong> released as <strong>_______[kit outputs]_____</strong> and documented at <strong>_______[kit doc site]_____</strong> produced by <strong>_______[people]_________</strong> in order to serve <strong>_______[products]_______</strong> products and experiences.



Over years of contributing to design systems, this statement would yield similar yet always unique answers. A system I’m working on now would fill these blanks as:

Our design system offers <strong>visual style, accessible UI components, charts, editorial guidance, UX patterns, and branding</strong> released as an <strong>HTML &amp; CSS framework via </strong><code><strong>npm</strong></code><strong>, Sketch, and other PDF &amp; AI templates</strong> and documented at <strong>designsystem.companyname.com</strong> produced by <strong>a systems team of 1 design director, 1 product manager, 2 designers, 3 engineers and a community of ~15 community contributors </strong>in order to serve <strong>~50 web apps, a few native app and limited branding</strong> products and experiences.

A system I am starting now exhibits a different composition that necessitates a different approach to how it’s made & consumed:

Our design system offers <strong>visual style, UI components, and accessibility procedures</strong>released as an <strong>React component library and Sketch assets via Lingo</strong> and documented at <strong>designsystems.companyname.com</strong> produced by <strong>a systems team of 1 systems lead, 1 product manager, 1 designer, and 2 front-end developers partnering with a React-based engineering team </strong>in order to serve <strong>~10 web-based and 2 native app</strong>products and experiences.

What flummoxes our community is the variability of systems composition. The consistent objective — adopting products producing a cohesive experience more efficiently — is reached through many potential means by involving different kinds of groups with varying areas of focus.

There’s no de-facto formula, no winning methodology (but we’re getting better). Instead, system success requires adapting how you define it to conditions and constraints of the enterprise it serves.

  






  
    

Defining design systems seems a daunting challenge. It’s not as if our community hasn’t made [many](https://css-tricks.com/design-systems-building-future/), [many](https://medium.com/ge-design/ges-predix-design-system-8236d47b0891), [many](https://the-pastry-box-project.net/jina-bolton/2015-march-28), [many](https://www.webdesignerdepot.com/2016/11/creating-a-design-system-language/), [many](https://medium.com/buildit/design-systems-wtf-42956f673250), [many](https://medium.freecodecamp.org/how-to-construct-a-design-system-864adbf2a117), [many](https://uxdesign.cc/selling-a-design-system-before-asking-for-buy-in-eeb45e88f66a), [many](https://medium.com/@amiltonpaglia/design-systems-na-pr%C3%A1tica-preparando-o-terreno-cfd5c29d2ae), [many](https://medium.com/hello-group/design-systems-faq-cvi-and-styleguides-ef85736e83cd), [many](https://medium.com/initialized-capital/instacarts-lead-product-designer-on-creating-design-systems-4cffefdfca00), [many](https://www.uxpin.com/studio/blog/design-systems-vs-pattern-libraries-vs-style-guides-whats-difference/), [many](https://uxcellence.com/2017/design-systems-style-guides-pattern-libraries), [many](https://medium.com/@sturobson/styleguides-pattern-libraries-and-design-languages-84746902c51c) attempts. Recently, [Sarah Federman](https://medium.com/@Sarah_federman) wrote about [distilling it into its essence](https://medium.com/design-systems/distilling-how-we-think-about-design-systems-b26432eefef9) and warns us to avoid getting trapped defining things and being dogmatic about what it is and isn’t.

Design systems is a growing [field](https://en.wikipedia.org/wiki/Discipline_%28academia%29) formed by vibrant, collaborative voices. It is important to posit what a system is and how it fits, or we risk undermining its value due to incoherent understanding. We shouldn’t suffer challenges, and there’s common ground to gain. My livelihood depends on it, selling ~15–25 design systems engagements a year to clients understanding the outcomes and outputs (hint: not just UI kits, code, and doc) and why they matter.

* * *

## “What is a Design System?”

If I have ~30 seconds in an elevator or over animated slides, I’ll lead with:



  {{ escom.bar_quote(
      quote = 'Almost always, a design system offers a library of visual style and components documented and released as reusable code for developers and/or tool(s) for designers. A system may also offer guidance on accessibility, page layout, and editorial and less often branding, data viz, <a href="/articles/patterns-components" target="_blank">UX patterns</a>, and other tools.'
  ) }}
  {{ escom.bar_quote(
      quote = 'A design system is <a href="/articles/adopting-design-systems" target="_blank">adopted</a> by and supported for other teams making experiences. These teams use it to develop and ship features more efficiently to form a more cohesive customer journey.'
  ) }}
  {{ escom.bar_quote(
      quote = 'A design system is made by an <a href="/articles/team-models-for-scaling-a-design-system" target="_blank">individual, team, and/or community</a>. While some arise less formally, organizations now dedicate <a href="/articles/designing-a-systems-team" target="_blank">small to large squad</a>(s) to develop and release system versions and processes over time.'
  ) }}

  


If only 10 seconds, I’ll say:



  {{ escom.bar_quote(
      quote = 'A design system offers a library of visual style, components, and other concerns documented and released by an individual, team or community as code and design tools so that adopting products can be more efficient and cohesive.'
  ) }}

  

Formally, a [system](https://en.wikipedia.org/wiki/System) is a set of interconnected parts forming a unified whole. In the case of design systems, this definition actually alludes to not one but three interrelated systems you’ll need to solve for to be successful:

1. a **kit of reusable, interconnected parts** ,
2. a **set of cohesive, interconnected products** , and
3. a **community of collaborative, interconnected people**.

* * *

## #1. A Kit of Reusable, Interconnected Parts

To its primary customers, the system is a set of tangible outputs that they encounter on a day-to-day basis. I’ll start plainly with:



  {{ escom.bar_quote(
      quote = 'Almost always, a design system offers a library of visual style and components documented and released as reusable code for developers and/or tool(s) for designers.'
  ) }}

  


These days, a system of parts connects a codifed visual style (e.g., color, space, typography) to [composible](https://en.wikipedia.org/wiki/Composability) UI components (buttons, forms, headings, so much more) used to design and build interfaces.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = 'Relationship of color, a variable, a function, and many components',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


This starting point packs a punch of intention, revealing beliefs: A system serves developers _and_ designers, in that order. A system must be well-documented. A system must offer style and UI components. Yet every system is different, so I’ll expand a system’s scope to include:



  {{ escom.bar_quote(
      quote = 'A system may also offer guidance on accessibility, page layout, and editorial and less often branding, data viz, UX patterns, and other tools.'
  ) }}

  


This variability fosters useful conversations that draw boundaries around what an organization wants and needs. Some concerns (always style and components) are realized far more often than others (editorial guidance and data visualization).

* * *

## #2. A Set of Cohesive, Interconnected Products

Words like “offer” and “released” are intentional, casting the [design system as a product satisfying the needs of customers](/articles/a-design-system-isn-t-a-project-it-s-a-product-serving-products) (chiefly, developers and designers making products of their own) through tangible outputs they use.

Invoking product concepts trigger a cascade of concepts useful for those familiar with product management applicable to a system too: roadmap, backlog, releases, program increments, sprints, dependencies. However, to focus only on **development** of parts risks missing what makes systems work. Especially, the system’s customers!



  {{ escom.bar_quote(
      quote = 'A design system is adopted by and supported for other teams making experiences. These teams use it to develop and ship features more efficiently to form a more cohesive customer journey.'
  ) }}

  


Design systems invest in **marketing** to product teams to consume the kit of parts to form a unified and cohesively holistic experience. [Fostering adoption](/articles/adopting-design-systems) requires clear messaging to sell others to adopt system and improving themselves (individually and collectively) by realizing its benefits over time as a dependency.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Diagram of dependency versions varying across different adopters',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


Product management also evokes how design systems fit in product **operations** , such as [DevOps](https://en.wikipedia.org/wiki/DevOps) delivery (“How do we release it? How is it automated?”), integration (“How do we version? What’s a breaking change? How, how frequently, and when do we upgrade?”), and infrastructure (“Where’s our repo? Where’s our doc hosted? Is it public?”).

Easy to miss in the definition above is _supported for_, framing the **support and service** of the customer. Effective documentation is essential. Beyond that, there must be paths to and time for providing help, responding to requests, patching defects, and consulting, all in an environment that’s open and responsive.

To cast a design system (and the effort needed to make it work well) as _just_ developed style, components, and assets — to the exclusion of the marketing, service, integration and operations that success depends on— is too narrow.

* * *

## #3. A Community of Interconnected Collaborators

To help stakeholders understand the impacts of a system, I also route conversation through the people and activities required to operate a system.



  {{ escom.bar_quote(
      quote = 'A design system is made by an individual, team, and/or community. While some arise less formally, organizations now dedicate <a href="/articles/designing-a-systems-team" target="_blank">small to large squad</a>(s) to develop and release system versions and processes over time.'
  ) }}

  


Characterizing a system team as a product squad sets the choice in terms familiar to product and marketing professionals: is this important enough to put a [team](/articles/designing-a-systems-team) behind it? That team can adopt rituals, showcase work, and [evolve a roadmap](/articles/what-s-will-your-design-system-deliver) to become part of the fabric of how enterprises make products.

In cases I’ve observed, this team is responsible for the workflows, connections, and community engagement across an enterprise to decide how a system is applied and evolved. Historically referred to as “governance,” I’ll avoid that term to favor a tone of collaboration over control.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Diagram relating the inputs and outputs between a system team and teams that adopt that system',
      caption = '',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


From the outside, a designer, engineer, or someone else in a community may not sense the level of execution behind such activities. That doesn’t mean that they aren’t developed, operated, supported, and used deliberately for months or years. This execution of community interactions is an effortful yet intangible product that make a system successful.

* * *

## Composing a High-Level System Definition

While not my intent, this writing returned me to the framework of a [Parts, Products, and People](/articles/picking-parts-products-people) workshop I’ve run for years. This activity steps participants through a prescribed protocol to detail what parts their system needs, what products it’ll apply to, and who does the work.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Photograph of a worksheet',
      caption = 'Parts, Products &amp; People <a href="/articles/picking-parts-products-people" target="_blank">Worksheet Activity</a>',
      class = 'escom-article-figure--break-bleed'
  ) }}

  


However, it’s reasonable to precede or replace this meticulous activity with a leaner, fill-in-the-blanks template to ground understanding:

Our design system offers <strong>_______[kit scope]_______</strong> released as <strong>_______[kit outputs]_____</strong> and documented at <strong>_______[kit doc site]_____</strong> produced by <strong>_______[people]_________</strong> in order to serve <strong>_______[products]_______</strong> products and experiences.



Over years of contributing to design systems, this statement would yield similar yet always unique answers. A system I’m working on now would fill these blanks as:

Our design system offers <strong>visual style, accessible UI components, charts, editorial guidance, UX patterns, and branding</strong> released as an <strong>HTML &amp; CSS framework via </strong><code><strong>npm</strong></code><strong>, Sketch, and other PDF &amp; AI templates</strong> and documented at <strong>designsystem.companyname.com</strong> produced by <strong>a systems team of 1 design director, 1 product manager, 2 designers, 3 engineers and a community of ~15 community contributors </strong>in order to serve <strong>~50 web apps, a few native app and limited branding</strong> products and experiences.

A system I am starting now exhibits a different composition that necessitates a different approach to how it’s made & consumed:

Our design system offers <strong>visual style, UI components, and accessibility procedures</strong>released as an <strong>React component library and Sketch assets via Lingo</strong> and documented at <strong>designsystems.companyname.com</strong> produced by <strong>a systems team of 1 systems lead, 1 product manager, 1 designer, and 2 front-end developers partnering with a React-based engineering team </strong>in order to serve <strong>~10 web-based and 2 native app</strong>products and experiences.

What flummoxes our community is the variability of systems composition. The consistent objective — adopting products producing a cohesive experience more efficiently — is reached through many potential means by involving different kinds of groups with varying areas of focus.

There’s no de-facto formula, no winning methodology (but we’re getting better). Instead, system success requires adapting how you define it to conditions and constraints of the enterprise it serves.

  
