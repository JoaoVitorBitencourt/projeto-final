import express from 'express';

const PORTA = process.env.PORT || 8080;
const app = express();

app.use('/teste', (req, res) => {

})

app.listen(PORTA, () => {
    console.log(`Servidor inicializado na porta ${PORTA}`)
})