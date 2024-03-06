import fastify from 'fastify'
import cookie from '@fastify/cookie'
import websocket from '@fastify/websocket'
import { createPool } from '../routes/createPoll'
import { getPool } from '../routes/getPoll'
import { voteOnPoll } from '../routes/voteOnPoll'
import { pollResults } from './ws/poll-results'

const app = fastify()

app.register(cookie,{
  secret: "my-secret-key", // for cookies signature
  hook: 'onRequest', // set to false to disable cookie autoparsing or set autoparsing on any of the following hooks: 'onRequest', 'preParsing', 'preHandler', 'preValidation'. default: 'onRequest'
 // options for parsing cookies
} )

app.register(websocket)

app.register(createPool)
app.register(getPool)
app.register(voteOnPoll)
app.register(pollResults)




app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running on http://localhost:3333')
})
