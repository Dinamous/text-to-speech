const express = require("express")
const {sequelize, Coment} =  require('./models');
const cors  = require('cors');
const textToSpeech = require('./src/textToSpeech')

const app = express();
app.use(express.json());
app.use(cors({origin:true,credentials: true}));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  if (req.method === "OPTIONS") {
      return res.status(200).end();
  } else {
      next();
  }
});

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

app.use(cors({origin:true,credentials: true}));

app.get('/coments', async(req,res) =>{

  const coments = await Coment.findAll();
  return res.json(coments);


})

app.get('/coments/:id', async(req,res) =>{

  const coment = await Coment.findOne({where: {id: req.params.id}});
   
  await textToSpeech.TPS(coment.content,coment.id)

  return res.json(coment);

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
