'use strict'



// Get the configuration file. 


/**
 * This function will return the config of the environment
 */
function configEnv(){

    let convictSchema = require('./../schemas/envSchemaConfig') ;
    let env= process.env.NODE_ENV || "dev" ;

    convictSchema.loadFile("./config/" + env +".json") ;
    convictSchema.validate({allowed: 'strict'});

    return convictSchema ; 

}


// This will configure the plugins.  
function configurePlugins(fastify, envConfig) {


    // Configure Swagger
    fastify.register(require('fastify-swagger-ui'), {
        swagger: {
          info: {
            title: 'Test swagger',
            description: 'testing the fastify swagger api',
            version: '0.1.0'
          },
          host: 'localhost',
          schemes: ['http'],
          consumes: ['application/json'],
          produces: ['application/json']
        }
      });  


      // Configure Blipp 
    fastify.register(require("fastify-blipp"));   
    // Configure Boom
    fastify.register(require('fastify-boom'));
    // COnfigure Helmet
    fastify.register(require('fastify-helmet'));

    /*fastify.register(require('fastify-mongodb'), {
        url : envConfig.get('db.url') || ("mongodb:"
    });*/


    fastify.register(require('./../routes'));


}


module.exports = {
    configEnv : configEnv, 
    configurePlugins
} ; 



