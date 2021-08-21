const express = require("express")
const {sequelize} =  require('./models');

const app = express();
app.use(express.json());


app.post('/coments', async(req,res)=>{
  const {content} = req.body;
})



//aguardando os modelos serem sincronizados
async function main (){
  //parâmetro force atualiza a tabela já existente
  await sequelize.sync({force:true});

}



main()