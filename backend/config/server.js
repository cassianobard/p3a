const express = require('express')
const port = 3003

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.listen(port, function () {
  console.log(`p3a_backend em execução (ouvindo a porta ${port}).`)
})

module.exports = server;