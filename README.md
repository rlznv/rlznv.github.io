# 3368-final

final project for engl 3368

# How to Use the Template Files
- `templateDropBurger.html` is a boilerplate HTML template with placeholder text.
    - `<script>` elements import `js-init.js`, `darkmode.js`, `dropmenu.js`, and `hamburger.js`.
    - `<header>` contains the site name, desktop navigation buttons, mobile navigation links, the hamburger button, and the theme switch button.
    - The `drop-container` element is below `<header>`.
    - The `<main>` element is necessary. `base.css` styles it to have 1rem padding on the left and right, preserving readability.
    - The `<footer>` element contains the site map footer.
- `template-exam.html` is a template page with components designed specifically for the exam help page.
    - The `<ul>` with the `breadcrumbs` class is the breadcrumbs navigation section for the page. This must be edited manually.
    - The `<article>` element with the `toc-wrapper` class contains the page's table of contents. This must be edited manually per page.
- `template-info.html` is a template page with components designed specifically for informational pages.
    - The `<ul>` with the `breadcrumbs` class is the breadcrumbs navigation section for the page. This must be edited manually per page.
    - The `<article>` element with the `toc-wrapper` class contains the page's table of contents. This must be edited manually per page.

## General Format for Informational and Exam Help Pages
- Page title is written the `<h1>` element under the breadcrumbs.
- `<h2>` within the `info-sect` section will display the introductory paragraph heading. 
- Create a introductory paragraph using `<p>` to explain the purpose of the page and provide any important information.
- Insert the table of contents below the introductory element.
- Use `<h3>` to create subheadings. `<h4>` and onwards are not styled. Try to keep the heading levels minimal without making content confusing.

## Modifying `template-info.html` 
Using the template-info.html page to write content.

### Modifying the Page Title and Breadcrumbs
- All content will go inside the `<main>` element.
- Modify content within `<ul class="breadcrumb">` to reflect the page's path within the site
- Modify the `<h1 class="title-xx">` element to reflect the page's title and category. Possible classes are `title-html`, `title-css`, `title-js`, and `title-more`. The class will affect the styling of the title.

### Modifying Content
-  `<section class="info-sect">` is where content goes. use only one `info-sect` section. 
- The first `<h2>` within `info-sect` will display the first level heading of the page. Adding a class is not necessary unless creating a page dicussing HTML, CSS, and JavaScript and distinct headings are needed.
- A basic `<p>` is sufficient to write content.
- `<article class="toc-wrapper">` contains the table of contents. Modify the element to reflect the content of the page.
- A basic `<h3>` is sufficient for subsection headings. Classes are unnecessary.

### Creating Code Snippets
- First create a div container in the format of `<div class="code-snippet"></div>`.
- Within that div, create `<pre class="code text"></pre>`.
- To adjust the styling to the code type, add a class to the preformatted text element. Possible classes are `html-code`, `css-code`, and `js-code`. 

## Modifying `template-exam.html`
The template-exam.html page uses many of the same classes as the template-info.html page. 

### Creating Exam Question and Answer `<divs>`
- First create the `exam-qa` div container using `<div class="exam-qa"></div>`
- Inside the div, create a `<p class="exam-question"></p>` to create the question.
- Additional `<p class="exam-question"></p>` elements can be used. 
- Code snippets can also be added after the `<p class="exam-question">` element.
- To create the blurred answer box, inside of the `exam-qa` div container, create a `<div class="exam-answer blur-word"></div>` element.
- Insert text or images by using regular `<p>` or `<figure><img></figure>` elements.

# Javascript Files
All JavaScript files are located in the `/js/` folder.

Documentation of using the scripts are below.
- `blur.js`
    - When DOM content is loaded, create a variable named `blurWordArray` that selects all elements with the `blur-word` class. For each element with the `blur-word` class, when clicked, will toggle the `unblur-word` class for itself. 

- `js-init.js` 
    - Upon DOM content load from `js-init.js`, run `darkmode_init`

- `darkmode.js` 
    - Create a function named `toggleTheme()`. Creates a variable `theme` for an element with the `theme` id (the link element to the theme css). Upon invoking the function, if `theme` is set to the light css, switch to the dark css. If `theme` is set to the dark css, switch to the light css.
    - When DOM content is loaded, create a boolean variable `isDark` and recreate the `theme` variable. Create a function that sets the `firstTimeVisitor` cookie with a one year expiration. Create a function if the `firstTimeVisitor` cookie exists. Upon DOM load, check if `firstTimeVisitor` cookie exists. If `firstTimeVisitor` cookie exists, do nothing. If `firstTimeVisitor` cookie does not exist, run the `setFirstTimeCookie` function and run check if `isDark` is true. If `isDark` is true, set `theme` to the dark css.
    - Create a function named `darkmode_init`. Create `darkmodeCookie` function that sets, gets, and removes the cookie. If `darkmodeCookie` is true on DOM load, set the `theme` to the dark css. Create an event listener on click. If `theme` is set to dark css, set `darkmodeCookie`. If `theme` is set to light css, remove `darkmodeCookie`.

- `dropmenu.js` Created by Claude AI
    - On DOM load, create `navLinks` and `navDropdowns` variables for all elements with `nav-link` and `nav-drop` respectively. Create an event listener for each `navLink`. Upon click on `navLink`, create `dropdowns` variable for `navDropdowns` index number, remove the `active` class for any `navDropdowns` that were not clicked, toggle the respective `navDropdowns` of the `navLinks` using `dropdown`. 
    - Any click on the document will remove the `active` class from an open `navDropdowns`.
- `hamburger.js`
    - Create the `toggleBurger()` function. Upon function call, creates `burgButton` and `navMenu` by the respective `burger` and `mobile-nav` ids. Toggle the `active` class for `burgButton` and `navMenu`.
    - On DOM load, recreate `burgButton` and `navMenu`. Create an event listener for clicks. If the click is while `navMenu` contains the `active` class and the click target is not `burgButton` and the click target is not `navMenu`, remove the `active` class from `navMenu` and `burgButton`.

# GenAI Created Resources
- `dropdown.js` was created by Claude AI. 
    - [Link to prompt and response.](https://claude.ai/share/8478faec-0492-4c80-8f57-6b7f0aab1bc7)

# CC Attributions
- create attributions page or section in about or more resources?
- css image https://www.svgrepo.com/svg/508795/css3-02 
- more image https://www.svgrepo.com/svg/521184/more-horizontal 
- hamburger image https://github.com/game-icons/icons/blob/master/delapouite/hamburger-menu.svg 
