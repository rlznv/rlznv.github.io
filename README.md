# 3368-final

Final project for ENGL 3368: *Designing for the Web* created by Jessica Escobar, Sophia Garcia, and Theresa Lam in the spring of 2025.

This project is a hand-built, educational website tailored for ENGL 3368 students. This website covers HTML, CSS, and JavaScript basics. Additionally, this website provides exam preparation help and links to useful external resources.

This README covers:
- This repository's structure
- Template file usage
- Utilized JavaScript
- GenAI created resources
- Copyright attributions
- Copyright

# Repository Structure

- `css` folder: Contains the web pages of the CSS portion of the website.
- `demos` folder: Contains HTML files with templates for the header and footer, landing pages, informational pages, and exam help pages.
- `html` folder: Contains web pages of the HTML portion of the website.
- `img` folder: Contains all images used for the website.
- `javascript` folder: Contains web pages of the JavaScript portion of the website,
- `js` folder: Contains all JavaScript files used for the website.
- `more` folder: Contains web pages of the More Resources portion of the website.
- `styles` folder: Contains all CSS files used for the website.

# Understanding the Template Files

## General Template Information
- `<script>` elements are used to import `js-init.js`, `darkmode.js`, `dropmenu.js`, and `hamburger.js`.
- `<header>` contains the site name, desktop navigation buttons, mobile navigation links, the hamburger button, and the theme switch button.
- The `drop-container` element is placed below `<header>`.
- The `<main>` element is necessary. `base.css` styles it to have 1rem padding on the left and right, preserving readability.
- The `<footer>` element contains the site map footer.
- The `<ul>` with the `breadcrumbs` class is the breadcrumbs navigation section for informational pages. This must be edited manually.

## `templateDropBurger.html`

`templateDropBurger.html` is a boilerplate HTML template with placeholder text. This file contains informational comments.

## `template-exam.html`

`template-exam.html` is a template page with components designed specifically for the exam help page.  This file contains informational comments.

- Contains placeholder examples of:
    - h1 page titles
    - h2 section headings
    - h3 subsection headings
    - Paragraph text with inline links
    - Breadcrumbs
    - Table of Contents 
    - Q&A blocks with blurred text and blurred images
    - Code snippet boxes

## `template-info.html`

`template-info.html` is a template page with components designed specifically for informational pages.  This file contains informational comments.

- Contains placeholder examples of:
    - h1 page titles
    - h2 section headings
    - h3 subsection headings
    - h4 subsection subheadings
    - Paragraph text with inline links
    - Breadcrumbs
    - Table of Contents 
    - Code snippet boxes
    - Figures and images
    - Lists

## General Format for Informational and Exam Help Pages
- Page title is written the `<h1>` element under the breadcrumbs.
- `<h2>` within the `info-sect` section will display the introductory paragraph heading.
    - Add a class with `exam-header` to create a box around the heading
    - Add a class with `title-html`, `title-css`, `title-js`, `title-about`, and `title-more` to add color to the heading.
- Create a introductory paragraph using `<p>` to explain the purpose of the page and provide any important information.
- Insert the table of contents below the introductory element.
- Use `<h3>` and onwards to create subheadings. 

## Modifying `template-info.html` 
Using the template-info.html page to write content.

### Modifying the Page Title and Breadcrumbs
- All content will go inside the `<main>` element.
- Modify content within `<ul class="breadcrumb">` to reflect the page's path within the site

### Modifying Content
- Inside the `<main>` element, `<section class="info-sect">` is where content goes. Use only one `info-sect` section. 
- The first `<h2>` within `info-sect` will display the first level heading of the page.
- A basic `<p>` is sufficient to write content.
- After the introductory paragraph, `<article class="toc-wrapper">` contains the table of contents. Modify the element to reflect the content of the page.

### Creating Code Snippets
- First create a div container in the format of `<div class="code-snippet"></div>`.
- Within that div, create `<pre class="code text"></pre>`.
- Add code snippets inside of the `<pre>` element.
- To adjust the styling to the code type, add a class to the preformatted text element. Possible classes are `html-code`, `css-code`, `js-code`, and `mystery-code`. 

## Modifying `template-exam.html`
The template-exam.html page uses many of the same classes as the template-info.html page. 

### Creating Exam Question and Answer `<divs>`
- First create the `exam-qa` div container using `<div class="exam-qa"></div>`
- Inside the `exam-qa` div, create a `<p class="exam-question"></p>` to create the question.
- Code snippets can also be added after the `<p class="exam-question">` element. Refer to Modifying `template-info.html` section for code snippet information. 
- To create the blurred answer box, inside of the `exam-qa` div container, create a `<div class="exam-answer blur-word"></div>` element.
- Insert text or images by using regular `<p>` or `<figure><img></figure>` elements.

# Javascript Files
All JavaScript files are located in the `/js/` folder.

Brief explanations of the scripts are below.
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
- CC Attributions have been moved to the `about.html` page.

# Copyright

Copyright © 2025 Geoffrey Sauer