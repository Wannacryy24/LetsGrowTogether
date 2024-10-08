import { createServer } from 'miragejs';

export function makeServer() {
 return createServer({
    routes() {
      this.namespace = 'api';      
      let sections = [
        { id: '1', name: 'HTML' , img:'html.png', details:'HTML is the standard markup language for Web pages.'},
        { id: '2', name: 'CSS' , img:'css.png', details:'CSS is the language we use to style an HTML document.'},
        { id: '3', name: 'JavaScript' , img:'javascript.png', details:'JavaScript is the programming language of the Web.'},
        { id: '4', name: 'React' , img:'react.png', details:'React is a JavaScript library for building user interfaces.'},
      ];

      let topics = {
        '1': [
          {
            id: '1-1',
            title: 'Introduction to HTML',
            content: 'HTML, or HyperText Markup Language, is the cornerstone of web development. It provides the structure for web pages by defining elements such as headings, paragraphs, links, and images. HTML uses a system of tags to create these elements, allowing browsers to interpret and display content. This language is essential for building websites, as it outlines how information is organized and presented. Understanding HTML is the first step in web development, enabling developers to create visually appealing and functional sites that users can navigate easily.'
        },
        {
            id: '1-2',
            title: 'HTML Elements',
            content: 'HTML elements are the fundamental components that make up a webpage. Each element is defined by a tag, which usually comes in pairs: an opening tag and a closing tag. For example, a paragraph is created using the <p> tag. Elements can also contain attributes, which provide additional information. The structure of an HTML document relies heavily on these elements, as they dictate how the content is displayed in a web browser. Mastering HTML elements is crucial for any aspiring web developer looking to build effective and engaging websites.'
        },
        {
            id: '1-3',
            title: 'HTML Forms',
            content: 'HTML forms are vital for collecting user input on websites. They allow users to submit information, such as text, selections, and files. A form is created using the <form> tag, containing various input elements like text fields (<input type="text">), radio buttons, checkboxes, and submit buttons. Forms also include labels and instructions to enhance usability. By integrating forms into web pages, developers can facilitate interactions, gather data, and enable functions like user registration, feedback, and search capabilities, making them essential for dynamic web applications.'
        },
        {
            id: '1-4',
            title: 'HTML Attributes',
            content: 'HTML attributes are special properties that provide additional information about an element. They are defined within the opening tag and typically follow the syntax of name-value pairs, such as src for images or href for links. Attributes enhance the functionality and appearance of HTML elements. For example, the alt attribute for images improves accessibility by providing a text description for users with visual impairments. Understanding how to use attributes effectively is essential for web developers, as they allow for customization and optimization of web pages for various audiences and devices.'
        },
        {
            id: '1-5',
            title: 'Semantic HTML',
            content: 'Semantic HTML refers to the use of HTML markup that conveys meaning about the content it contains. By utilizing elements like <header>, <footer>, <article>, and <nav>, developers can create more accessible and meaningful web pages. Semantic HTML improves search engine optimization (SEO) by helping search engines understand the structure and context of the content. Additionally, it enhances the experience for assistive technologies, allowing users with disabilities to navigate more effectively. Emphasizing semantic markup is crucial for creating modern, user-friendly websites that adhere to best practices in web development.'
        },
        {
            id: '1-6',
            title: 'HTML Headings',
            content: 'HTML headings are used to define the structure and hierarchy of content on a webpage. They range from <h1> to <h6>, with <h1> representing the most important heading and <h6> the least. Headings not only improve the readability of content but also play a critical role in SEO by signaling to search engines the key topics covered on a page. Proper use of headings helps organize information, making it easier for users to scan and find relevant content. Understanding how to structure headings is essential for effective web design and user experience.'
        },
        {
            id: '1-7',
            title: 'HTML Links',
            content: 'HTML links, created using the <a> tag, are essential for navigation on the web. The href attribute specifies the URL of the page or resource the link points to. Links can connect to other websites, different sections of the same page, or even files for download. The text within the <a> tag is displayed as clickable content, commonly referred to as anchor text. Effective use of links improves user experience by allowing seamless navigation and enhancing site structure. Understanding how to implement and style links is fundamental for web developers in creating interactive sites.'
        },
        {
            id: '1-8',
            title: 'HTML Images',
            content: 'HTML images are incorporated into webpages using the <img> tag. This tag requires the src attribute, which specifies the image’s URL, and the alt attribute, which provides a text alternative for accessibility. Images enhance the visual appeal of a site and can communicate messages more effectively than text alone. Developers can control the size and alignment of images using CSS, allowing for responsive design. Properly utilizing images not only enriches user experience but also contributes to website aesthetics, making them an important element in web design.'
        },
        {
            id: '1-9',
            title: 'HTML Lists',
            content: 'HTML lists are used to organize content into structured formats, making information easier to read and understand. There are two primary types: ordered lists (<ol>) and unordered lists (<ul>). Ordered lists are numbered, while unordered lists use bullet points. Each item in a list is defined by the <li> tag. Lists are useful for displaying items, steps in a process, or any set of related information. Mastering the use of lists enhances the clarity of content and improves user engagement by presenting information in a digestible format.'
        },
        {
            id: '1-10',
            title: 'HTML Tables',
            content: 'HTML tables allow developers to display data in a structured, grid-like format. A table is created using the <table> tag and is composed of rows (<tr>), headers (<th>), and cells (<td>). Tables are particularly useful for presenting comparisons, schedules, or any tabular data. By utilizing attributes like colspan and rowspan, developers can merge cells for better organization. Properly designed tables improve data readability and accessibility, making them a vital component for web pages that require detailed information presentation.'
        }
        ],
        '2': [
          {
            id: '2-1',
            title: 'What is CSS?',
            content: 'CSS, or Cascading Style Sheets, is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS enables web developers to separate content from design, making it easier to maintain and update web pages. It controls various aspects such as layout, colors, fonts, and spacing. With CSS, developers can create visually engaging web pages that adapt to different screen sizes and devices. By using selectors, properties, and values, CSS allows for fine-tuning the appearance of elements on a web page, providing a robust framework for web design.'
          },
          {
            id: '2-2',
            title: 'What are CSS Selectors?',
            content: 'CSS selectors are patterns used to select the elements you want to style within a web document. There are several types of selectors, including element selectors, class selectors, ID selectors, and attribute selectors. Element selectors target HTML tags directly, while class selectors apply styles to elements with specific class attributes. ID selectors are unique and target a single element with a specified ID. Attribute selectors allow you to target elements based on specific attributes or their values. Understanding CSS selectors is essential for applying styles efficiently and effectively to achieve desired designs in web development.'
          },
          {
            id: '2-3',
            title: 'What is the Box Model',
            content: 'The CSS box model is a fundamental concept that describes how elements are structured in terms of box dimensions. Each box consists of margins, borders, padding, and the actual content area. The content area holds the text and images, while padding is the space between the content and the border, which encases it. Margins create space between the borders of adjacent elements. Understanding the box model is crucial for effective layout design, as it affects the overall spacing and dimensions of elements. By manipulating the properties of the box model, developers can create visually appealing and well-structured web pages.'
          },
          {
            id: '2-4',
            title: 'What are CSS Flexbox and Grid?',
            content: 'CSS Flexbox and Grid are powerful layout models that help developers create responsive designs more easily. Flexbox is a one-dimensional layout model, ideal for arranging items in a row or a column. It allows for dynamic resizing and alignment of elements within a container, providing flexibility in distributing space among items. On the other hand, CSS Grid is a two-dimensional layout model that enables the creation of complex grid-based layouts. It allows for precise control over rows and columns, making it suitable for more intricate designs. Understanding these layout models is essential for modern web development, as they greatly simplify responsive design challenges.'
          },
          {
            id: '2-5',
            title: 'What are CSS Media Queries?',
            content: 'CSS media queries are a crucial feature for responsive web design, allowing styles to adapt based on the characteristics of the device being used, such as screen size, resolution, and orientation. By utilizing media queries, developers can apply specific CSS rules only when certain conditions are met. For example, a media query can be used to change the layout of a website on smaller screens, ensuring that content remains accessible and visually appealing on mobile devices. This approach enhances the user experience across different platforms and devices, making media queries an essential tool for modern web development practices.'
          },
          {
            id: '2-6',
            title: 'What is the difference between class and ID selectors?',
            content: 'Class and ID selectors are both used in CSS to apply styles to elements, but they serve different purposes and have distinct characteristics. A class selector is defined with a period (.) and can be applied to multiple elements, making it versatile for grouping similar styles. For instance, if several elements share the same class, they will all inherit the styles defined by that class. In contrast, an ID selector is denoted by a hash (#) and is unique to a single element within a document, making it ideal for targeting specific elements. Understanding these differences is vital for effective CSS organization and specificity management.'
          },
          {
            id: '2-7',
            title: 'What are CSS transitions and animations?',
            content: 'CSS transitions and animations are techniques that enhance the interactivity and dynamism of web pages. Transitions allow for smooth changes between property values over a specified duration when an element’s state changes, such as when hovered over or clicked. This can include alterations in color, size, or position. On the other hand, CSS animations are more complex and can involve multiple keyframes, enabling more elaborate sequences of changes. Animations can be looped, paused, or triggered by events, providing a richer user experience. Mastering transitions and animations is essential for creating visually engaging and responsive web interfaces.'
          },
          {
            id: '2-8',
            title: 'What are CSS Variables (Custom Properties)?',
            content: 'CSS variables, also known as custom properties, allow developers to store values in a reusable manner, enhancing maintainability and consistency in stylesheets. They are defined using the syntax --variable-name and can hold various CSS values, such as colors, sizes, or any other property. Once defined, these variables can be accessed throughout the stylesheet using the var() function. This approach simplifies theme management and makes it easier to implement global style changes, as updating a variable will reflect across all instances where it is used. Understanding CSS variables is increasingly important for modern web design, facilitating more organized and efficient code.'
          },
          {
            id: '2-9',
            title: 'What is the CSS Specificity hierarchy?',
            content: 'CSS specificity determines which styles are applied to an element when multiple rules match. It is calculated based on a hierarchy of selectors, with inline styles having the highest specificity, followed by IDs, classes, attributes, and finally element selectors. The specificity hierarchy can be summarized as follows: Inline styles (1,0,0), IDs (0,1,0), classes and attributes (0,0,1), and element selectors (0,0,0,1). Understanding specificity is essential for debugging styles and ensuring the desired design is achieved without unintentional overrides. A solid grasp of specificity helps developers write cleaner and more efficient CSS code while avoiding common pitfalls related to cascading styles.'
          },
          {
            id: '2-10',
            title: 'What are pseudo-classes and pseudo-elements?',
            content: 'Pseudo-classes and pseudo-elements are powerful tools in CSS that allow developers to style elements based on their state or specific parts of the elements. Pseudo-classes, such as :hover and :active, target elements during specific user interactions, enabling dynamic styling based on user behavior. For example, you can change the color of a button when a user hovers over it. Pseudo-elements, like ::before and ::after, allow you to style specific parts of an element without adding extra HTML elements, such as inserting decorative content before or after an element’s content. Mastering these concepts is key for creating interactive and visually appealing web designs.'
          }
        ],
        '3': [
          {
            id: '3-1',
            title: 'What is JavaScript?',
            content: 'JavaScript is a high-level, interpreted programming language that is a core technology of the World Wide Web, alongside HTML and CSS. It allows developers to create interactive and dynamic web applications by manipulating the Document Object Model (DOM). JavaScript is versatile and can be executed on both the client-side and server-side, making it essential for modern web development. It supports object-oriented, imperative, and functional programming styles. With frameworks and libraries like React, Angular, and Node.js, JavaScript has become one of the most popular languages, empowering developers to build complex applications and enhancing user experience across the web.'
          },
          {
            id: '3-2',
            title: 'What are JavaScript Data Types?',
            content: 'JavaScript supports several data types that determine the kind of data that can be stored and manipulated. These data types include primitives like String, Number, Boolean, Null, Undefined, and Symbol, as well as complex types like Objects and Arrays. Primitives are immutable and represent a single value, while objects and arrays can hold collections of data. Understanding these data types is crucial for effective coding and debugging, as each type has its own behavior and methods. Moreover, JavaScript is a dynamically typed language, meaning that variables can hold values of any type, leading to flexibility but also requiring careful management to avoid errors.'
          },
          {
            id: '3-3',
            title: 'What is the Event Loop in JavaScript?',
            content: 'The event loop is a fundamental concept in JavaScript that enables asynchronous programming. It allows JavaScript to perform non-blocking operations, making it possible to execute tasks concurrently. When a JavaScript program runs, it operates within a single thread and utilizes an event queue to handle events and callbacks. The event loop continuously checks the call stack and the event queue, executing tasks from the queue when the call stack is empty. This mechanism allows developers to create smooth and responsive applications, as long-running operations can run in the background while the main thread remains free for user interactions.'
          },
          {
            id: '3-4',
            title: 'What are Closures in JavaScript?',
            content: 'Closures are a powerful feature in JavaScript that enable functions to retain access to their lexical scope, even when the function is executed outside that scope. This means that a closure can "remember" the environment in which it was created, allowing for the creation of private variables and encapsulation. Closures are commonly used for data hiding and creating function factories. For example, by returning a function from another function, developers can create functions with their own independent states. Understanding closures is vital for mastering advanced JavaScript concepts, as they are frequently used in callbacks, event handlers, and functional programming patterns.'
          },
          {
            id: '3-5',
            title: 'What is the difference between `==` and `===`?',
            content: 'In JavaScript, `==` is the equality operator that compares two values for equality after performing type coercion, while `===` is the strict equality operator that checks for equality without type conversion. This means that `==` may return true for values of different types if they can be coerced into a common type, while `===` requires both the value and type to be the same. For example, `0 == "0"` returns true, but `0 === "0"` returns false. Using `===` is generally recommended to avoid unexpected results due to type coercion, ensuring more predictable and maintainable code.'
          },
          {
            id: '3-6',
            title: 'What are Promises in JavaScript?',
            content: 'Promises are a modern JavaScript feature that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise can be in one of three states: pending, fulfilled, or rejected. When a Promise is created, it starts in a pending state. Once the asynchronous operation is completed successfully, it transitions to a fulfilled state, and if an error occurs, it transitions to a rejected state. Promises provide a cleaner way to handle asynchronous code compared to callbacks, allowing developers to chain `.then()` and `.catch()` methods for success and error handling, making the code easier to read and maintain.'
          },
          {
            id: '3-7',
            title: 'What is the DOM?',
            content: 'The Document Object Model (DOM) is a programming interface for web documents that represents the structure of a webpage as a tree of objects. Each element, attribute, and piece of text in a document is represented as a node in this tree. The DOM allows developers to manipulate the content, structure, and style of a webpage dynamically using JavaScript. By accessing the DOM, developers can create, modify, or delete elements, respond to user events, and update the user interface without requiring a page reload. Understanding the DOM is essential for effective web development, as it bridges HTML and JavaScript, enabling interactivity and dynamic content.'
          },
          {
            id: '3-8',
            title: 'What are JavaScript Functions?',
            content: 'Functions are fundamental building blocks in JavaScript, serving as reusable blocks of code that perform specific tasks. A function can take input parameters, process them, and return an output value. They can be defined using function declarations, function expressions, or arrow functions, each with its own syntax and use cases. Functions also support higher-order capabilities, allowing them to accept other functions as arguments or return them. Mastering functions is essential for structuring code, implementing logic, and facilitating code reuse. Understanding concepts like scope, closures, and callback functions further enhances a developer’s ability to create efficient and modular JavaScript applications.'
          },
          {
            id: '3-9',
            title: 'What are Arrow Functions?',
            content: 'Arrow functions, introduced in ES6, provide a concise syntax for writing function expressions in JavaScript. They are defined using the `=>` syntax and offer several advantages over traditional functions. Arrow functions automatically bind the `this` context from the surrounding lexical scope, which simplifies handling `this` in callback functions, particularly in event handlers and methods. Additionally, they cannot be used as constructors and do not have their own `arguments` object, making them ideal for simpler function definitions. Understanding arrow functions is important for modern JavaScript development, as they promote cleaner and more readable code, especially when working with higher-order functions and functional programming techniques.'
          },
          {
            id: '3-10',
            title: 'What is Asynchronous JavaScript?',
            content: 'Asynchronous JavaScript allows for non-blocking execution of code, enabling developers to perform long-running operations without freezing the user interface. This is particularly useful for tasks like fetching data from APIs or reading files. JavaScript employs mechanisms such as callbacks, Promises, and async/await syntax to handle asynchronous operations. Callbacks were the original method, but they can lead to "callback hell," making code hard to read. Promises offer a cleaner way to manage asynchronous operations, while async/await syntax, introduced in ES8, provides a straightforward, synchronous-looking way to write asynchronous code. Mastering asynchronous JavaScript is crucial for creating responsive and efficient web applications.'
          }
        ],
        '4': [
           {
            id: '4-1',
            title: 'What is React?',
            content: 'React is an open-source JavaScript library developed by Facebook for building user interfaces, especially single-page applications where a fast, interactive user experience is crucial. It allows developers to create large web applications that can change data without reloading the page. React follows a component-based architecture, where UI elements are encapsulated into reusable components, making it easy to manage the applications state and UI effectively. The core of React is its virtual DOM, which optimizes rendering by updating only the parts of the UI that have changed, enhancing performance. Understanding React is essential for modern web development, as it is widely adopted and supported by a strong community.'
          },
          {
            id: '4-2',
            title: 'What are Components in React?',
            content: 'Components are the building blocks of a React application. A component is a self-contained piece of code that defines part of the user interface. React components can be either class-based or functional. Class components are ES6 classes that extend the React.Component base class, allowing them to manage their own state and lifecycle methods. Functional components are simpler, defined as JavaScript functions, and are now often enhanced with hooks to manage state and side effects. Components can accept props, which are inputs passed from parent components, enabling data flow and communication between different parts of the application. Understanding components is key to leveraging React’s capabilities for modular development.'
          },
          {
            id: '4-3',
            title: 'What are Props in React?',
            content: 'Props, short for properties, are a mechanism in React for passing data and event handlers from one component to another. They allow for communication between parent and child components, enabling the creation of dynamic and reusable components. Props are immutable, meaning that a child component cannot modify its own props, which helps maintain a unidirectional data flow in the application. When a parent component renders a child component, it can pass props as attributes in JSX. Understanding how to effectively use props is essential for managing state and behavior across components, leading to a more organized and maintainable codebase.'
          },
          {
            id: '4-4',
            title: 'What is State in React?',
            content: 'State is a built-in object in React components that holds dynamic data and determines the component’s behavior and rendering. Unlike props, which are passed from parent to child, state is managed within the component itself and can be updated in response to user actions or other events. When state changes, React re-renders the component to reflect the new data. State can be initialized in class components via the constructor or using the useState hook in functional components. Understanding how to manage state effectively is crucial for building interactive and responsive applications, as it allows developers to create rich user experiences that adapt to user inputs.'
          },
          {
            id: '4-5',
            title: 'What are Lifecycle Methods in React?',
            content: 'Lifecycle methods are special methods in class components that are invoked at specific points during a component’s existence, allowing developers to run code at critical times. These methods include componentDidMount, componentDidUpdate, and componentWillUnmount, among others. componentDidMount is called after the component is first rendered, making it an ideal place for API calls or setting up subscriptions. componentDidUpdate is invoked after updates, while componentWillUnmount is used for cleanup. Understanding lifecycle methods is essential for managing side effects and optimizing performance in React applications. In functional components, the useEffect hook serves a similar purpose, enabling side effects and cleanup in a more declarative manner.'
          },
          {
            id: '4-6',
            title: 'What is JSX?',
            content: 'JSX, or JavaScript XML, is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript files. It is commonly used with React to describe the user interface in a declarative manner. JSX makes it easier to visualize the structure of the UI and allows for the embedding of expressions and JavaScript code within curly braces. Although JSX is not required to build React applications, it is widely adopted due to its readability and expressiveness. When JSX code is compiled, it transforms into regular JavaScript function calls, making it a powerful tool for building dynamic and interactive user interfaces.'
          },
          {
            id: '4-7',
            title: 'What are Hooks in React?',
            content: 'Hooks are functions that allow developers to use state and other React features in functional components, introduced in React 16.8. They enable state management and lifecycle features without the need for class components, promoting cleaner and more concise code. The most commonly used hooks are useState, which allows for state management, and useEffect, which enables side effects in components. Custom hooks can also be created to encapsulate reusable logic. Understanding hooks is essential for modern React development, as they enhance code reusability, improve readability, and allow developers to build more functional components that leverage React’s powerful features without the complexity of class-based components.'
          },
          {
            id: '4-8',
            title: 'What is Context API in React?',
            content: 'The Context API is a powerful feature in React that allows for global state management and enables the sharing of data across the component tree without passing props down manually at every level. By creating a Context object, developers can provide a value that can be accessed by any component within the tree. This is particularly useful for managing themes, authentication, or user settings, reducing prop drilling and improving code organization. The Context API works well with hooks, allowing functional components to consume context easily with the useContext hook. Understanding the Context API is crucial for building scalable applications with complex data requirements in React.'
          },
          {
            id: '4-9',
            title: 'What is the difference between controlled and uncontrolled components?',
            content: 'In React, controlled components are those whose form data is handled by the component’s state. The form elements derive their value from the component’s state, and any changes are handled through event handlers that update the state. This approach allows for better control over the form data and enables features like validation and conditional rendering. In contrast, uncontrolled components store their form data in the DOM, and React does not manage the state. Accessing the data typically requires using refs. Understanding the difference between controlled and uncontrolled components is important for managing form inputs effectively and ensuring a seamless user experience in React applications.'
          },
          {
            id: '4-10',
            title: 'What are Higher-Order Components (HOCs)?',
            content: 'Higher-Order Components (HOCs) are advanced patterns in React that allow developers to reuse component logic. An HOC is a function that takes a component as an argument and returns a new component, enhancing the original one with additional capabilities. This pattern is often used for cross-cutting concerns like authentication, data fetching, or adding behavior to components without modifying their original code. HOCs help in maintaining the separation of concerns and improving code reusability. Understanding HOCs is essential for building scalable applications and effectively managing component logic in larger React projects, as they provide a way to compose and enhance components in a modular manner.'
          }
        ],
      };

  
      this.get('/sections', () => {
        return { sections };
      });
      
      this.get('/sections/:id/topics', (schema, request) => {
        let sectionId = request.params.id;
        return { topics: topics[sectionId] || [] };
      });

      this.get('/:id',(schema , request)=>{
        let id = request.params.id;
        const allTopics = Object.values(topics).flat();
        var newData  = allTopics.filter(item=>item.id===id);
        console.log(newData);
          return {newData}
      })

      this.get('/topics', (schema, request) => {
        const searchQuery = request.queryParams.q || '';
        const allTopics = Object.values(topics).flat();
        if (searchQuery) {
          const filteredTopics = allTopics.filter(topic =>
            topic.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
          return { topics: filteredTopics };
        } else {
          // agar search query nahi hai to all topics dedo
          return { allTopics };
        }
      });



      this.get('/topics/:id', (schema, request) => {
        let topic = null;
       // topics object par loop chalega to access each section topics
        for (let sectionId in topics) {
          //topics[sectionId] us section ke array of topics dega
          let found = topics[sectionId].find(t => t.id === request.params.id); // id ko request url ki id se match karega
          if (found) {
            topic = found;
            break;
          }
        }
     return { topic};
      });
    },
  });
}
