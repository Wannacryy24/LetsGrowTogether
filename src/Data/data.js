export const contentData = {
  HTML: {
    topics: ['Introduction', 'Tags', 'Forms', 'Media', 'Tables', 'Semantic HTML'],
    details: {
      'Introduction': {
        title: 'HTML Introduction',
        description: 'HTML is the standard markup language for creating web pages. It describes the structure of a web page using elements represented by tags.',
        points: [
          'HTML stands for Hyper Text Markup Language.',
          'HTML describes the structure of a web page.',
          'HTML elements are the building blocks of HTML pages.',
          'HTML files are saved with the .html extension.',
        ],
        image: 'https://www.example.com/html-intro.png',
      },
      'Tags': {
        title: 'HTML Tags',
        description: 'HTML tags are used to define and organize the content in a webpage. Each tag serves a different purpose, such as headings, paragraphs, links, images, and more.',
        points: [
          'HTML tags usually come in pairs: an opening tag and a closing tag.',
          'Some commonly used tags are <div>, <h1>, <p>, <a>, <img>, and <table>.',
          'Tags can have attributes, such as class, id, or style.',
        ],
        image: 'https://www.example.com/html-tags.png',
      },
      'Forms': {
        title: 'HTML Forms',
        description: 'HTML forms allow users to submit data to a web server using input elements like text fields, checkboxes, radio buttons, and submit buttons.',
        points: [
          'Forms are created using the <form> tag.',
          'The <input> element can be used to capture text, passwords, emails, etc.',
          'Forms can include dropdowns, checkboxes, and radio buttons.',
          'Form data is submitted using the "action" attribute, typically via HTTP POST.',
        ],
        image: 'https://www.example.com/html-forms.png',
      },
      'Media': {
        title: 'HTML Media',
        description: 'HTML allows the integration of multimedia content such as images, audio, and video.',
        points: [
          'Images are embedded using the <img> tag with the src attribute.',
          'Audio is added with the <audio> tag and can include controls.',
          'Videos can be displayed using the <video> tag with support for multiple file formats.',
        ],
        image: 'https://www.example.com/html-media.png',
      },
      'Tables': {
        title: 'HTML Tables',
        description: 'HTML tables are used to display tabular data in rows and columns.',
        points: [
          'Tables are created using the <table> tag.',
          'Each table row is defined by a <tr> tag, and each cell is defined by <td>.',
          'You can use the <th> tag for table headers.',
        ],
        image: 'https://www.example.com/html-tables.png',
      },
      'Semantic HTML': {
        title: 'Semantic HTML',
        description: 'Semantic HTML uses elements that clearly describe their meaning in a way that is both human and machine-readable.',
        points: [
          'Examples include <header>, <footer>, <article>, and <section>.',
          'Semantic elements help with accessibility and SEO.',
          'These elements describe the structure and purpose of the content they contain.',
        ],
        image: 'https://www.example.com/html-semantic.png',
      },
    },
  },

  CSS: {
    topics: ['Introduction', 'Selectors', 'Box Model', 'Flexbox', 'Grid', 'Animations'],
    details: {
      'Introduction': {
        title: 'CSS Introduction',
        description: 'CSS (Cascading Style Sheets) is used to style and layout web pages. It controls the color, font, spacing, and positioning of elements.',
        points: [
          'CSS allows you to control the presentation of HTML elements.',
          'CSS can be written inline, internally (within a style tag), or externally (in a .css file).',
          'It uses selectors to target HTML elements for styling.',
        ],
        image: 'https://www.example.com/css-intro.png',
      },
      'Selectors': {
        title: 'CSS Selectors',
        description: 'CSS selectors are used to target HTML elements and apply styles to them.',
        points: [
          'Common selectors include element selectors (e.g., p, h1), class selectors (e.g., .className), and ID selectors (e.g., #idName).',
          'You can combine selectors to target multiple elements, e.g., .className #idName.',
          'Pseudo-classes like :hover or :nth-child can be used for dynamic styling.',
        ],
        image: 'https://www.example.com/css-selectors.png',
      },
      'Box Model': {
        title: 'CSS Box Model',
        description: 'The CSS box model defines how the content, padding, border, and margin are rendered around HTML elements.',
        points: [
          'Every element in CSS is considered a rectangular box.',
          'The box model consists of content, padding, border, and margin.',
          'Padding is space inside the element, while margin is space outside.',
        ],
        image: 'https://www.example.com/css-boxmodel.png',
      },
      'Flexbox': {
        title: 'CSS Flexbox',
        description: 'CSS Flexbox is a layout model that makes it easier to design flexible and responsive layout structures.',
        points: [
          'Flexbox allows elements to align and distribute space within a container.',
          'The main properties include flex-direction, justify-content, align-items, and flex-wrap.',
          'It simplifies responsive design compared to float-based layouts.',
        ],
        image: 'https://www.example.com/css-flexbox.png',
      },
      'Grid': {
        title: 'CSS Grid',
        description: 'CSS Grid Layout is a two-dimensional layout system for the web that allows for the creation of complex grid-based designs.',
        points: [
          'Grid can handle both columns and rows simultaneously.',
          'The grid-template-columns and grid-template-rows properties define the grid structure.',
          'CSS Grid is powerful for creating dynamic, responsive layouts.',
        ],
        image: 'https://www.example.com/css-grid.png',
      },
      'Animations': {
        title: 'CSS Animations',
        description: 'CSS animations allow you to animate the transition between CSS style changes.',
        points: [
          'Animations are defined using keyframes with from and to values or percentages.',
          'Properties like animation-duration, animation-timing-function, and animation-iteration-count control how animations play.',
          'Animations can enhance user experience when used sparingly.',
        ],
        image: 'https://www.example.com/css-animations.png',
      },
    },
  },

  JavaScript: {
    topics: ['Introduction', 'Variables', 'Functions', 'DOM', 'Events', 'ES6 Features'],
    details: {
      'Introduction': {
        title: 'JavaScript Introduction',
        description: 'JavaScript is a lightweight, interpreted programming language that is used for creating dynamic web content.',
        points: [
          'JavaScript can change the content and structure of web pages.',
          'It is a client-side scripting language, but can also be used on the server (Node.js).',
          'JavaScript can be embedded directly in HTML using the <script> tag.',
        ],
        image: 'https://www.example.com/js-intro.png',
      },
      'Variables': {
        title: 'JavaScript Variables',
        description: 'Variables in JavaScript are used to store data that can be used and modified later.',
        points: [
          'Variables can be declared using var, let, or const.',
          'let and const have block scope, while var has function scope.',
          'const variables cannot be reassigned, but their properties can be modified.',
        ],
        image: 'https://www.example.com/js-variables.png',
      },
      'Functions': {
        title: 'JavaScript Functions',
        description: 'Functions are blocks of code that perform a specific task and can be reused throughout a program.',
        points: [
          'Functions are defined using the function keyword or arrow function syntax.',
          'Functions can accept parameters and return values.',
          'They allow for code reuse and modular programming.',
        ],
        image: 'https://www.example.com/js-functions.png',
      },
      'DOM': {
        title: 'JavaScript DOM',
        description: 'The DOM (Document Object Model) represents the structure of a webpage, and JavaScript can manipulate it dynamically.',
        points: [
          'JavaScript can access and modify HTML elements via the DOM.',
          'You can use methods like getElementById, querySelector, and createElement to interact with the DOM.',
          'Event listeners can be added to DOM elements to handle user actions like clicks.',
        ],
        image: 'https://www.example.com/js-dom.png',
      },
      'Events': {
        title: 'JavaScript Events',
        description: 'Events in JavaScript refer to actions that happen in the browser, such as clicks, keyboard inputs, or page loads.',
        points: [
          'Event listeners respond to events and can execute functions when triggered.',
          'Common events include click, submit, keyup, keydown, and load.',
          'Event delegation allows for efficient event handling on dynamically added elements.',
        ],
        image: 'https://www.example.com/js-events.png',
      },
      'ES6 Features': {
        title: 'JavaScript ES6 Features',
        description: 'ECMAScript 6 (ES6) introduced new features and syntax to JavaScript, making the language more modern and powerful.',
        points: [
          'New features include let/const, arrow functions, template literals, and destructuring.',
          'Promises and async/await provide better ways to handle asynchronous code.',
          'Modules allow for better code organization and reusability.',
        ],
        image: 'https://www.example.com/js-es6.png',
      },
    },
  },

  React: {
    topics: ['Introduction', 'Components', 'State', 'Props', 'Hooks', 'Lifecycle'],
    details: {
      'Introduction': {
        title: 'React Introduction',
        description: 'React is a JavaScript library for building user interfaces, primarily for single-page applications (SPAs).',
        points: [
          'React allows developers to build reusable UI components.',
          'It uses a virtual DOM for efficient rendering.',
          'React is component-based and declarative.',
        ],
        image: 'https://www.example.com/react-intro.png',
      },
      'Components': {
        title: 'React Components',
        description: 'Components are the building blocks of any React application, representing reusable pieces of the UI.',
        points: [
          'There are two types of components: functional and class-based.',
          'Components can accept inputs called props and return JSX, which is a syntax similar to HTML.',
          'React components can be nested and composed to create complex interfaces.',
        ],
        image: 'https://www.example.com/react-components.png',
      },
      'State': {
        title: 'React State',
        description: 'State is a built-in object in React that holds data that influences the output of a component.',
        points: [
          'State is managed using the useState hook in functional components.',
          'Changing state triggers a re-render of the component.',
          'State can be passed down to child components via props.',
        ],
        image: 'https://www.example.com/react-state.png',
      },
      'Props': {
        title: 'React Props',
        description: 'Props (short for properties) are inputs to React components that allow data to be passed from parent to child components.',
        points: [
          'Props are read-only and cannot be modified by the receiving component.',
          'They are passed as attributes to components.',
          'Props make components reusable by allowing dynamic data to be displayed.',
        ],
        image: 'https://www.example.com/react-props.png',
      },
      'Hooks': {
        title: 'React Hooks',
        description: 'Hooks are functions that let you use React state and other features without writing a class.',
        points: [
          'Common hooks include useState, useEffect, useContext, and useReducer.',
          'useEffect is used for side effects like data fetching and subscriptions.',
          'Hooks allow functional components to manage state and lifecycle methods.',
        ],
        image: 'https://www.example.com/react-hooks.png',
      },
      'Lifecycle': {
        title: 'React Lifecycle',
        description: 'React components go through a lifecycle that includes mounting, updating, and unmounting.',
        points: [
          'Lifecycle methods in class components include componentDidMount, componentDidUpdate, and componentWillUnmount.',
          'In functional components, lifecycle events are handled with the useEffect hook.',
          'Understanding the lifecycle is important for managing side effects, API calls, and performance optimization.',
        ],
        image: 'https://www.example.com/react-lifecycle.png',
      },
    },
  },
};