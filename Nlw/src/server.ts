import express from "express";

const app = express();

/*
  * Metodos ou verbos http
  * GET = Buscas
  * POST = Criação
  * PUT = Alteraçãp/ Update
  * DELETE = Excluir/ Deletar
  * PATCH = PARA ALTERAR UMA INFOMAÇÃO ESPECIFICA 
 */

app.get('/', (req, res) =>{
    return res.send('Bem Vindo');
});

app.post('/', (req, res) => {
    return res.json({message: "usuario cadastrado!"});
});


app.listen(3333, () => console.log('server rodando'));
