# projeto-final

link do projeto: "https://projetofinalppw2.herokuapp.com/"

## Rota /Album 

requisição: "https://projetofinalppw2.herokuapp.com/Album"
requisição por id: "https://projetofinalppw2.herokuapp.com/Album/BuscaPorId/:id"
Salvar: "https://projetofinalppw2.herokuapp.com/Album/SalvarAlbum"
Atualizar: "https://projetofinalppw2.herokuapp.com/Album/AtualizarAlbum/:id"
Deletar: "https://projetofinalppw2.herokuapp.com/Album/DeletaAlbum/:id"

Estrutura: 
```javascript
{
    nome: String,
    Banda: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Banda'
    },
    ano: Number,
    generos: Array,
    faixas: Array,
    lancamento: Date
}, {timestamp: true}
```

## Rota /Banda

requisição: "https://projetofinalppw2.herokuapp.com/Banda"
requisição por id: "https://projetofinalppw2.herokuapp.com/Banda/BuscaPorId/:id"
Salvar: "https://projetofinalppw2.herokuapp.com/Banda/Salvar"
Atualizar: "https://projetofinalppw2.herokuapp.com/Banda/Atualizar/:id"
Deletar: "https://projetofinalppw2.herokuapp.com/Banda/Deleta/:id"

Estrutura:
```javascript
{
    nome: String,
    pais: String,
    quantidadeIntegrantes: Number,
    inicioAtividade: Date
}, {timestamp: true}
```

## Rota /Piloto

requisição: "https://projetofinalppw2.herokuapp.com/Piloto"
requisição por id: "https://projetofinalppw2.herokuapp.com/Piloto/BuscaPorId/:id"

Estrutura:
```javascript
{
	teamId: string;
	name: string;
	dateOfBirth: Date;
	pastTeams: string[];
}
```
