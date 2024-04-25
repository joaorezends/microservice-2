// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async function handler (request, reply) {
  reply.send(await require("./service")())
})

// Run the server!
fastify.listen({ host: '0.0.0.0', port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
