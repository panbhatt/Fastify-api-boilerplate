'use strict'

const fastify = require('fastify')();
const pino = require('pino') ;
const config = require('./config');

// Initialization of the server.



let envConfig = config.configEnv(); 

config.configurePlugins(fastify,envConfig);  

fastify.get('/ram', async (request, reply) => {
    return { hello: 'world' }; 
  }); 


const startServer = async () => {
    try {

        await fastify.listen(envConfig.get('port'));
        

        fastify.ready(err => {
            if (err) throw err
            fastify.blipp();
            //console.log(JSON.stringify(fastify.swagger({  json : true, route: 'documentation', exposeRoute : true  }))) ;
            console.log(JSON.stringify(fastify.swagger({  route : '/abc' }))) ;
            
            console.log(`server listening on ${fastify.server.address()}`);
          });
        
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}
startServer();