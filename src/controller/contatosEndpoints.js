import { Router } from "express";
import { buscarPornome, inserirContato, listarContatos } from "../repository/funcoesContato.js";

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

export default endpoints;