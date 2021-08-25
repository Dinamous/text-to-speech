require('dotenv/config');

const fs = require('fs');

const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

exports.TPS = async function (coment,id){

  console.log("comente:" + coment)

  const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({
      apikey: process.env.API_KEY
    }),
    serviceUrl: process.env.API_URL,
  });
  
  const synthesizeParams = {
    text: coment,
    accept: 'audio/mp3',
    voice: 'pt-BR_IsabelaVoice',
  };
  
  // textToSpeech
  // .synthesize(synthesizeParams)
  // .then(async (response) => {
  //   const audio = response.result;
  //    audio.pipe(await fs.createWriteStream(__dirname+'/../../frontend/src/audio/audioTSP.mp3'));
  // })
  // .catch(err => {
  //   console.log('error:', err);
  // });

  try{
    const response = await textToSpeech.synthesize(synthesizeParams)
    const  audio = response.result
    audio.pipe(await fs.createWriteStream(__dirname+'/../../frontend/src/audio/audioTSP.mp3'))
  }catch(err){
    console.log(err)

  }
  
}