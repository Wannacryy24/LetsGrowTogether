import { createServer } from 'miragejs';

export function makeServer() {
  return createServer({
    routes() {
      this.namespace = 'api';

      
      let sections = [
        { id: '1', name: 'HTML' },
        { id: '2', name: 'CSS' },
        { id: '3', name: 'JavaScript' },
        { id: '4', name: 'React' },
      ];

  
      let topics = {
        '1': [
          { id: '1-1', title: 'Introduction to HTML', content: 'HTML is the standard markup language for creating web pages.' },
          { id: '1-2', title: 'HTML Elements', content: 'HTML elements are the building blocks of HTML pages.' },
          { id: '1-3', title: 'HTML Forms', content: 'HTML forms are used to collect user input.' },
        ],
        '2': [
          { id: '2-1', title: 'Introduction to CSS', content: 'CSS is used to control the style of web documents in a simple and easy way.' },
          { id: '2-2', title: 'CSS Selectors', content: 'CSS selectors are used to select the HTML elements you want to style.' },
          { id: '2-3', title: 'CSS Box Model', content: 'The CSS box model is a box that wraps around every HTML element.' },
        ],
        '3': [
          { id: '3-1', title: 'Introduction to JavaScript', content: 'JavaScript is a programming language used to make web pages interactive.' },
          { id: '3-2', title: 'JavaScript Functions', content: 'Functions are one of the fundamental building blocks in JavaScript.' },
          { id: '3-3', title: 'JavaScript DOM Manipulation', content: 'JavaScript can change the content of an HTML document.' },
        ],
        '4': [
          { id: '4-1', title: 'Introduction to React', content: 'React is a JavaScript library for building user interfaces.' },
          { id: '4-2', title: 'React Components', content: 'Components are the building blocks of React applications.' },
          { id: '4-3', title: 'React State and Props', content: 'State and props are two important concepts in React for handling data.' },
        ],
      };

  
      this.get('/sections', () => {
        return { sections };
      });

      
      this.get('/sections/:id/topics', (schema, request) => {
        let sectionId = request.params.id;
        return { topics: topics[sectionId] || [] };
      });
    },
  });
}
