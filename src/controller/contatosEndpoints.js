import { Router } from "express";
import { alterarContato, buscarFavoritos, buscarPorData, buscarPornome, deletarContato, inserirContato, listarContatos } from "../repository/funcoesContato.js";

let endpoints = Router();

endpoints.get('/contato', async (req, resp) => {
    let dados = await listarContatos();
    resp.send(dados);
})

endpoints.post('/contato', async (req, resp) => {
    let contato = req.body;

    let dados = await inserirContato(contato);
    resp.send(dados);
})

endpoints.get('/contato/busca', async (req, resp) =>{
    let nome = req.query.nome;

    let dados = await buscarPornome(nome);
    resp.send(dados);
})

endpoints.get('/contato/favoritos', async (req, resp) => {
    let dados = await buscarFavoritos();

    resp.send(dados);
})

endpoints.get('/contato/cadastro', async (req, resp) => {
    let dataInicio = req.query.inicio;
    let dataFim = req.query.fim;

    let dados = await buscarPorData(dataInicio, dataFim);

    resp.send(dados);
})

endpoints.put('/contato/:id', async (req, resp) => {
    let newData = req.body;
    let contatoID = req.params.id;

    let dados = await alterarContato(newData, contatoID);

    return dados;
})

endpoints.delete('/contato/id', async (req, resp) => {
    let contatoID = req.params.id;

    let dados = await deletarContato(contatoID);

    return dados;
})

export default endpoints;