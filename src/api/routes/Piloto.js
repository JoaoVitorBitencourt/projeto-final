import express from 'express';
import axios from 'axios';

const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const resposta = await axios.get("https://f1-api-ppw.herokuapp.com/pilots/");
        res.json(resposta.data)
    } catch(err) {
        res.status(500).json("Erro desconhecido");
    }
})

route.get('/BuscaPorId/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const resposta = await axios.get(`https://f1-api-ppw.herokuapp.com/pilots/${id}`);
        res.json(resposta.data)
    } catch(err) {
        res.status(404).json("Objeto não encontrado");
    }
})

export default route;