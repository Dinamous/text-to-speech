require('dotenv/config');

const fs = require('fs');

const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

exports.TPS = async function (coment,id){

  //autenticação da API da IBM Watson Text-to-speech
  //as credenciais vieram do arquivo .env 
  //como explicado no README.md
  const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({
      apikey: process.env.API_KEY
    }),
    serviceUrl: process.env.API_URL,
  });
  
  //criando o objeto para a sintentização do arquivo
  const synthesizeParams = {
    text: coment,
    accept: 'audio/mp3',
    voice: 'pt-BR_IsabelaVoice',
  };
  

  //salvando o buffer de aúdio em um arquivo local
  try{
    const response = await textToSpeech.synthesize(synthesizeParams)
    const  audio = response.result
    audio.pipe(await fs.createWriteStream(__dirname+'/../../frontend/src/audio/audioTSP.mp3'))
  }catch(err){
    console.log(err)

  }
  
}