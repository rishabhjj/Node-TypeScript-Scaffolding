import * as path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';
import { config } from '../config';

const swaggerDefinition = {
  info: {
    title: config.SWAGGER_TITLE,
    version: config.SWAGGER_VERSION,
    description: config.SWAGGER_DESCRIPTION,
  },
  host: config.SERVICE_ENDPOINT, // the host or url of the app
  basePath: config.SERVICE_BASEPATH, // the basepath of your endpoint
};

// swagger doc options
const options = {
  // import swaggerDefinitions
  swaggerDefinition,
  // path to the API docs and add all yaml under docs folder.
  apis: [`${path.resolve(__dirname)}/docs/*.yaml`],
};

module.exports = swaggerJSDoc(options);
