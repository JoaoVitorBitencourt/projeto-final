import mongoose from '../data/DB.js'

let Album = mongoose.model('Album', new mongoose.Schema({
    nome: String,
    Banda: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Banda'
    },
    ano: Number,
    generos: Array,
    faixas: Array,
    lancamento: Date
}, {timestamp: true}))

export default Album;