import express from 'express';
import album from '../models/Album.js';

const route = express.Router();

route.use(express.json());

route.get('/', async (req, res) => {
    try {
        let docs = await album.find();
        res.json(docs);
    } catch (err) {
        res.status(500).json({ sucesso: false });
    }
})

route.get('/BuscaPorID/:id', async (req, res) => {
    try {
        let id = req.params.id,
            albuns = await album.findById(id).populate('Banda');
        res.json(albuns);
    } catch (err) {
        res.status(500).json({ sucesso: false });
    }
})

route.post('/SalvarAlbum', async (req, res) => {
    try {
        let albuns = new album(req.body);
        await albuns.save();
        res.json({ sucesso: true });
    } catch (err) {
        res.status(500).json({ sucesso: false });
    }
})

route.put('/AtualizarAlbum/:id', async (req, res) => {
    try {
        let id = req.params.id,
            body = req.body;
        await album.findByIdAndUpdate(id, body);
        res.json({ sucesso: true });
    } catch (err) {
        res.status(500).json({ sucesso: false });
    }
})

route.delete('/DeletaAlbum/:id', async (req, res) => {
    try {
        let id = req.params.id;
        await album.findByIdAndDelete(id);
        res.json({ sucesso: true });
    } catch (err) {
        res.status(500).json({ sucesso: false });
    }
})

export default route;