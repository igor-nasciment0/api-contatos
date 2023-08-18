import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import endpoints from './controller/contatosEndpoints.js';

let servidor = express()
servidor.use(cors())
servidor.use(express.json())

servidor.listen(process.env.PORT, () => console.log('API ONLINE'))