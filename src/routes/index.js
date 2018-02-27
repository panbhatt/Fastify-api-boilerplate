const Boom = require('boom');

// Sinvce everything is a plugin. 


async function configureRoutes(fastify, options) {

    fastify.get('/', async (request, reply) => {
        return { hello: 'world' };
    });

    fastify.get('/error', async (request, reply) => {
        return new Boom(200, "Error Occured");
    });

    fastify.post('/some-route', {
        schema: {
          description: 'post some data',
          tags: ['user', 'code'],
          summary: 'qwerty',
          payload: {
            type: 'object',
            properties: {
              hello: { type: 'string' },
              obj: {
                type: 'object',
                properties: {
                  some: { type: 'string' }
                }
              }
            }
          },
          out: {
            description: 'Succesful response',
            code: 201,
            type: 'object',
            properties: {
              hello: { type: 'string' }
            }
          }
        }
      }, (req, reply) => {});




}


module.exports = configureRoutes; 