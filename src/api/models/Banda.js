import mongoose from '../data/DB.js'

let Banda = mongoose.model('Banda', new mongoose.Schema({
    nome: String,
    pais: String,
    quantidadeIntegrantes: Number,
    inicioAtividade: Date
}, {timestamp: true}))

export default Banda;