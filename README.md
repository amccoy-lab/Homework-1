# Armani McCoy – Portfolio Website

## Web Development Milestone 3: Accessibility and Visual Design

### Project Overview

For Milestone 3, I improved my personal portfolio website to make it more accessible, visually organized, and easier to navigate. My website includes three pages: Home, Projects, and About. I used HTML, CSS, and JavaScript to create a responsive website with a consistent pink and purple color palette.

## 1. Accessibility Improvements

I made the following improvements to my website:

1. I added skip navigation links to all three pages so keyboard users can move directly to the main content.
2. I added `aria-current="page"` to identify the active navigation link on each page.
3. I used semantic HTML elements, including `header`, `nav`, `main`, `section`, `article`, and `footer`, to organize my website.
4. I improved the image alt text on my Home page to help screen-reader users understand the image.
5. I updated my CSS colors to improve text readability against different backgrounds.
6. I added visible keyboard focus indicators to make navigation easier without a mouse.
7. I used responsive layouts to make my website accessible on mobile phones, tablets, and desktop computers.
8. I added form labels and accessible error messages to my contact form.

## 2. Gestalt Principles

I intentionally applied two Gestalt principles to improve my website's visual design.

**Proximity:** I grouped related information into sections and cards. For example, my Education and Career goals are displayed in separate cards, and my Projects page groups each project title with its description.

**Similarity:** I used matching pink and purple colors, fonts, borders, rounded corners, and navigation styles throughout all three pages. This helps my website look consistent and organized.

## 3. Accessible Contact Form

I added a contact form to my About page so visitors can enter their name, email address, and message.

Each input has a visible label, and I used a `fieldset` and `legend` to group the contact information.

I also added JavaScript validation that displays error messages when required information is missing or an email address is invalid. The form uses `aria-invalid` and `aria-live` to help screen-reader users identify errors.

The contact form currently demonstrates validation but does not send messages.

## 4. Responsive Design

I used CSS Grid and media queries to make my website responsive.

- Desktop: Project cards display in three columns.
- Tablet: Project cards display in two columns.
- Mobile: Project cards display in one column.

I also adjusted spacing, navigation, and font sizes to improve readability on smaller screens.

## 5. Accessibility Testing

**WAVE Accessibility Checker**

Testing is pending for the following pages:

- Home (`index.html`)
- Projects (`project.html`)
- About (`about.html`)

After running WAVE, I will document any errors found and the changes made to correct them.

**WebAIM Contrast Checker**

I updated my color palette to improve readability. I will verify that normal text meets the WCAG AA minimum contrast ratio of 4.5:1 and large text meets 3:1.

## 6. Conclusion

Milestone 3 helped me understand the importance of accessibility and intentional visual design. I learned how semantic HTML, accessible forms, responsive layouts, and Gestalt principles can improve the experience for people visiting my website.

My goal is to continue improving my web development skills and creating websites that are visually appealing and accessible to different users.
