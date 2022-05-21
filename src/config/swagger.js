import config from './index';

const swaggerDefinition = {
  info: {
    title: 'Book Directory REST API Docs',
    version: '0.0.1',
    description: 'Book Directory REST API Docs is a project that provides you with <a href="https://nodejs.org/en/">node.js</a> REST API with an ES6 transpiler while following the <a href="https://github.com/airbnb/javascript">Airbnb Javascript (ES6) Style Guide</a> to create, view all, view one, update or delete JSON book object.',
  },

};

const swaggerOptions = {
  swaggerDefinition,
  apis: ['./src/routes/*.js']
};

export default swaggerOptions;
