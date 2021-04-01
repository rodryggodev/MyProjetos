const express = require('express');
const server = express();

// request, response (req, res)
server.get('/', function(req, res){
     return res.send('Pagina Inicial');
});

server.listen(8080, () => console.log('servidor conectado'));
