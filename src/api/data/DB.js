import mongoose from 'mongoose';

const uri = "mongodb+srv://root:root@cluster0.hgdrg.mongodb.net/ProjetoFinal?retryWrites=true&w=majority";
const opcoes = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(uri, opcoes);

mongoose.connection.on('connected', () => {
    console.log('Conexão realizada com sucesso!');
})

export default mongoose;