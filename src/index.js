import express from 'express';
import rotaAlbum from './api/routes/Album.js';
import rotaBanda from './api/routes/Banda.js';
import rotaPiloto from './api/routes/Piloto.js';

const PORTA = process.env.PORT || 8080;
const app = express();

app.use('/Album', rotaAlbum);

app.use('/Banda', rotaBanda);

app.use('/Piloto', rotaPiloto);

app.use('/', (req, res) => {
    res.redirect('/Album');
})

app.listen(PORTA, () => {
    console.log(`Servidor inicializado na porta ${PORTA}`)
})