const server = require('./config/server');

const fornecedores = require('./routes/fornecedores')

server.use('/fornecedores', fornecedores);