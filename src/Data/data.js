import { createServer } from 'miragejs';

export function makeServer() {
  createServer({
    routes() {
      this.namespace = 'api';
      
      this.get('/sections', () => (
        [
          { id: 'html', name: 'HTML' },
          { id: 'css', name: 'CSS' },
          { id: 'javascript', name: 'JavaScript' },
          { id: 'react', name: 'React' }
        ]
      ));

      
      this.get('/sections/:sectionId/topics', (schema, request) => {
        const { sectionId } = request.params;
        const data = {
          html: {
            topics: [
              'Introduction', 'Elements', 'Attributes', 'Forms', 'Semantics'
            ],
            details: {
              'Introduction': {
                title: 'HTML Introduction',
                description: 'HTML is the standard markup language for creating web pages.',
                points: [
                  'Used to create the structure of a web page.',
                  'Composed of elements and tags.'
                ],
                image: 'https://www.example.com/html-intro.png'
              },
              'Elements': {
                title: 'HTML Elements',
                description: 'HTML elements are the building blocks of web pages.',
                points: ['Examples include <p>, <div>, <h1>, etc.'],
                image: 'https://www.example.com/html-elements.png'
              }
           
            }
          },
          css: {
            topics: [
              'Selectors', 'Box Model', 'Flexbox', 'Grid', 'Animations'
            ],
            details: {
              'Selectors': {
                title: 'CSS Selectors',
                description: 'Selectors in CSS are used to select the HTML elements you want to style.',
                points: [
                  'Different types: Class, ID, Element.',
                  'Can combine multiple selectors.'
                ],
                image: 'https://www.example.com/css-selectors.png'
              }
           
            }
          },
          javascript: {
            topics: [
              'Introduction', 'DOM Manipulation', 'ES6', 'Functions', 'Async'
            ],
            details: {
              'Introduction': {
                title: 'JavaScript Introduction',
                description: 'JavaScript is a versatile programming language for the web.',
                points: [
                  'Used for interactivity on web pages.',
                  'Can manipulate the DOM and handle events.'
                ],
                image: 'https://www.example.com/js-intro.png'
              }
            
            }
          },
          react: {
            topics: [
              'Introduction', 'Components', 'State', 'Props', 'Hooks'
            ],
            details: {
              'Introduction': {
                title: 'React Introduction',
                description: 'React is a JavaScript library for building user interfaces.',
                points: [
                  'Allows creating reusable UI components.',
                  'Uses a virtual DOM for performance.'
                ],
                image: 'https://www.example.com/react-intro.png'
              }
             
            }
          }
        };

        return data[sectionId] || { topics: [], details: {} };
      });
    }
  });
}