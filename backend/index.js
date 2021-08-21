const express = require("express")
const {sequelize, Coment} =  require('./models');

const app = express();
app.use(express.json());


app.post('/coments', async(req,res)=>{
  const {content} = req.body;

  try{
    ///criando o modelo para a inserção
    const coment = await Coment.create({content});
    return res.json(coment);

  }catch(e){
    console.log(e);
    return res.status(500).json(e);
  }
})

app.get('/coments', async(req,res) =>{

  const coments = await Coment.findAll();
  return res.json(coments);


})

//aguardando os modelos serem sincronizados
app.listen({port:5000}, async () =>{

  console.log("O servidor está aberto em: \n https://localhost:5000\n\n")
  console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
  //parâmetro force atualiza a tabela já existente
  await sequelize.authenticate()
  console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
  console.log("\n O banco de dados foi sincronizado.")

})
