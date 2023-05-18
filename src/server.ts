import { log } from 'console'
import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const port = 8080
const prisma = new PrismaClient()

app.get('/hello', async () => {
  const users = await prisma.user.findMany()
  return users
})

app
  .listen({
    port,
  })
  .then(() => {
    log(`🚀 HTTP server running port ${port}`)
  })
