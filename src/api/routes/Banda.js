import express from 'express';
import Banda from '../models/Banda.js';

const route = express.Router();

route.use(express.json());

route.get('/', async (req, res) => {
    try {
        let docs = await Banda.find();
        res.json(docs);
    } catch (err) {
        res.status(500).json({ sucesso: false });
    }
})

route.get('/BuscaPorID/:id', async (req, res) => {
    try {
        let id = req.params.id,
            Bandas = await Banda.findById(id);
        res.json(Bandas);
    } catch (err) {
        res.status(500).json({ sucesso: false });
    }
})

route.post('/Salvar', async (req, res) => {
    try {
        let Bandas = new Banda(req.body);
        await Bandas.save();
        res.json({ sucesso: true });
    } catch (err) {
        res.status(500).json({ sucesso: false });
    }
})

route.put('/Atualizar/:id', async (req, res) => {
    try {
        let id = req.params.id,
            body = req.body;
        await Banda.findByIdAndUpdate(id, body);
        res.json({ sucesso: true });
    } catch (err) {
        res.status(500).json({ sucesso: false });
    }
})

route.delete('/Deletar/:id', async (req, res) => {
    try {
        let id = req.params.id;
        await Banda.findByIdAndDelete(id);
        res.json({ sucesso: true });
    } catch (err) {
        res.status(500).json({ sucesso: false });
    }
})

export default route;