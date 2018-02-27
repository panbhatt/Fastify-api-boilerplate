const Boom = require('boom');

// Sinvce everything is a plugin. 


async function configureRoutes(fastify, options) {

    fastify.get('/', async (request, reply) => {
        return { hello: 'world' };
    });

    fastify.get('/error', async (request, reply) => {
        return new Boom(200, "Error Occured");
    });

    fastify.put('/some-route/:id', {
        schema: {
            description: 'post some data',
            tags: ['user', 'code'],
            summary: 'qwerty',
            params: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string',
                        description: 'user id'
                    }
                }
            },
            body: {
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
            response: {
                201: {
                    description: 'Successful response',
                    type: 'object',
                    properties: {
                        hello: { type: 'string' }
                    }
                }
            }
        }
    }, (req, reply) => { return { "some": "abcd" }; });




}


module.exports = configureRoutes; 