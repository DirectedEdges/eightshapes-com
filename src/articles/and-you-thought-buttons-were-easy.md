---
  category : UI Components
  title : And You Thought Buttons Were Easy?
  deck : A Story for Selling a System that Scales
  title_abbreviation : Why Buttons Aren't Easy
  author_id : nathan
  date : 2017-07-26
  masthead : false
  layout : article.njk
  tags : [ui components]
---


{% import '../_includes/escom.njk' as escom with context %}





Selling a design system into an enterprise usually involves a pitch to many audiences. Designers appreciate cohesiveness. Engineers value efficiencies. And, pivotally, executives appreciate value.

While a pitch covers a lot of ground — system composition, team & community strategy, scope & roadmaps — my narrative pivots from introductions to the ask using a story about Buttons. It’s simple yet reveals button’s complicated yet solvable glory, taking a few slides and lasting a minute or two.

Experience suggests the story is compelling enough to leave executives nodding heads, reacting with thoughtful questions, and admitting “You had me at buttons.”

* * *

## Part #1. The Setup: Button’s Are Simple, Right?

Our trip towards cohesiveness starts with the most basic of components: the button. It’s a simple component, made of a label on a background shape.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = 'Simple button',
      caption = '',
      class = ''
  ) }}




However, even our simple button includes many properties that formalize important decisions about our visual language. Text color, case, weight, and size. Shape size and roundedness. Spatial density both within a component as well as it’s relationship with adjacent components.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Button annotated',
      caption = '',
      class = ''
  ) }}




These fundamental decisions spread across all products we make. Getting enterprise-wide agreement on them takes effort, coordination, and time.

* * *

## Part #2. The Switch: Layered Complexity

Yet, there’s more to buttons than just a simple, default appearance. A button has arc of interaction including hover, active, and disabled states.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Button states',
      caption = '',
      class = ''
  ) }}




And, we’ll need more than one, primary button. We’ll need a range of buttons: secondary, tertiary, and perhaps even special buttons for scenarios like getting started or a red button for selling things, since online marketing proved that red sells best.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Button types',
      caption = '',
      class = ''
  ) }}




We’ll also incorporate icons and interactions like a menu to open a panel, or — my favorite — a split button that couples a primary action on the left with a menu-triggering caret on the right.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Button compositional variants',
      caption = '',
      class = 'escom-article-figure--break-bleed '
  ) }}




We must solve for how these variations appear on diverse backgrounds, whether light and dark settings or a range of themes.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Buttons with states and variants across backgrounds',
      caption = '',
      class = 'escom-article-figure--full-width '
  ) }}




All of these combinations must be considered to ensure that the system delivers on promised accessibility. It turns out, buttons are complicated.

* * *

## Part #3. Buttons Are Expensive, So Make a&nbsp;Library

Let’s imagine you combine a designer, engineer and QA specialist to design, build, and test these buttons. If these staff cost $100/hr, and it takes this team of three 200 hours combined to design, build and test buttons at this level of quality, then buttons cost $20,000.



  {{ escom.bar_quote(
      quote = '200 hrs × $100/hr = $20,000 for Buttons'
  ) }}




If your enterprise has 25 teams each making buttons, then it costs your enterprise $1,000,000 to have good buttons.



  {{ escom.bar_quote(
      quote = '$20,000 × 50 teams = $1,000,000 for Buttons'
  ) }}




That’s a _million_ dollars, for buttons. And since buttons were made by 50 _different_ teams, expect quality and consistency to vary significantly.

If buttons cost a million dollars, how much do our complicated components like header, cards, data grids, and modals cost? It’s not hard to imagine that they could cost millions of dollars each.

This is why we need a system to spread a visual language and reusable UI components across our enterprise of product development teams. So, on to how we can make and adopt such a system.











Selling a design system into an enterprise usually involves a pitch to many audiences. Designers appreciate cohesiveness. Engineers value efficiencies. And, pivotally, executives appreciate value.

While a pitch covers a lot of ground — system composition, team & community strategy, scope & roadmaps — my narrative pivots from introductions to the ask using a story about Buttons. It’s simple yet reveals button’s complicated yet solvable glory, taking a few slides and lasting a minute or two.

Experience suggests the story is compelling enough to leave executives nodding heads, reacting with thoughtful questions, and admitting “You had me at buttons.”

* * *

## Part #1. The Setup: Button’s Are Simple, Right?

Our trip towards cohesiveness starts with the most basic of components: the button. It’s a simple component, made of a label on a background shape.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '1',
      image_alt = 'Simple button',
      caption = '',
      class = ''
  ) }}




However, even our simple button includes many properties that formalize important decisions about our visual language. Text color, case, weight, and size. Shape size and roundedness. Spatial density both within a component as well as it’s relationship with adjacent components.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '2',
      image_alt = 'Button annotated',
      caption = '',
      class = ''
  ) }}




These fundamental decisions spread across all products we make. Getting enterprise-wide agreement on them takes effort, coordination, and time.

* * *

## Part #2. The Switch: Layered Complexity

Yet, there’s more to buttons than just a simple, default appearance. A button has arc of interaction including hover, active, and disabled states.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '3',
      image_alt = 'Button states',
      caption = '',
      class = ''
  ) }}




And, we’ll need more than one, primary button. We’ll need a range of buttons: secondary, tertiary, and perhaps even special buttons for scenarios like getting started or a red button for selling things, since online marketing proved that red sells best.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '4',
      image_alt = 'Button types',
      caption = '',
      class = ''
  ) }}




We’ll also incorporate icons and interactions like a menu to open a panel, or — my favorite — a split button that couples a primary action on the left with a menu-triggering caret on the right.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '5',
      image_alt = 'Button compositional variants',
      caption = '',
      class = 'escom-article-figure--break-bleed '
  ) }}




We must solve for how these variations appear on diverse backgrounds, whether light and dark settings or a range of themes.



  {{ escom.article_figure(
      image_path = page.fileSlug,
      image_number = '6',
      image_alt = 'Buttons with states and variants across backgrounds',
      caption = '',
      class = 'escom-article-figure--full-width '
  ) }}




All of these combinations must be considered to ensure that the system delivers on promised accessibility. It turns out, buttons are complicated.

* * *

## Part #3. Buttons Are Expensive, So Make a&nbsp;Library

Let’s imagine you combine a designer, engineer and QA specialist to design, build, and test these buttons. If these staff cost $100/hr, and it takes this team of three 200 hours combined to design, build and test buttons at this level of quality, then buttons cost $20,000.



  {{ escom.bar_quote(
      quote = '200 hrs × $100/hr = $20,000 for Buttons'
  ) }}




If your enterprise has 25 teams each making buttons, then it costs your enterprise $1,000,000 to have good buttons.



  {{ escom.bar_quote(
      quote = '$20,000 × 50 teams = $1,000,000 for Buttons'
  ) }}




That’s a _million_ dollars, for buttons. And since buttons were made by 50 _different_ teams, expect quality and consistency to vary significantly.

If buttons cost a million dollars, how much do our complicated components like header, cards, data grids, and modals cost? It’s not hard to imagine that they could cost millions of dollars each.

This is why we need a system to spread a visual language and reusable UI components across our enterprise of product development teams. So, on to how we can make and adopt such a system.



