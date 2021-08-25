import React from "react";
import "./style.css";
import axios from "axios";
import { Howl } from "howler";
import sound from "../../assets/sound.svg";

import SoundFile from "../../audio/audioTSP.mp3";

const List = ({ ComentUpdate }) => {
  function soundPlay(src) {
    const voice = new Howl({
      src,
      html5: true,
    });

    voice.play();
  }

  async function ClickAudio(id) {
    await axios.get(`http://localhost:5000/coments/${id}`);

    soundPlay(SoundFile);
  }

  return (
    <div>
      <div className="content-list">
        <h4>Lista de Comentários</h4>
        <div className="scroll">
          {ComentUpdate ? (
            ComentUpdate.slice(0)
              .reverse()
              .map((coment) => (
                <div className="comment" key={coment.id}>
                  <p>{coment.content} </p>
                  <button
                    className="soundbtn "
                    onClick={() => ClickAudio(coment.id)}
                  >
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
