import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import {Howl} from "howler"
import sound from "../../assets/sound.svg";
import audio from '../../audio/audioTSP.mp3'

const List = () => {
  const [coments, setComents] = useState(null);

  useEffect(() => {
    const getComents = async () => {
      await axios.get("http://localhost:5000/coments").then((response) => {
        setComents(response.data);
      });
    };

    getComents();
  }, []);


function soundPlay(src){

  const voice = new Howl({
    src,
    html5:true
  })

  voice.play()
}


  function ClickAudio(id) {
    console.log(id)
    
    axios.get(`http://localhost:5000/coments/${id}`)
    .then(soundPlay(audio))
    
    

  }

  return (
    <div>
      <div className="content-list">
        <h4>Lista de Comentários</h4>
        <div className="scroll">
        

          {coments ? (
            coments
              .slice(0)
              .reverse()
              .map((coment) => (
                <div className="comment" key={coment.id}>
                  <p>{coment.content} </p>
                  <button className="soundbtn "onClick={() => ClickAudio(coment.id)} >
                  <img src={sound} alt="" />
                  </button>
                </div>
              ))
          ) : (
            <p className="vazio">Nenhum registro :(</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
