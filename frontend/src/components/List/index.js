import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Howl } from "howler";
import sound from "../../assets/sound.svg";

const List = ({ ComentUpdate }) => {
  const [coments, setComents] = useState(null);

  useEffect(() => {
    const getComents = async () => {
      await axios.get("http://localhost:5000/coments").then((response) => {
        setComents(response.data);
        console.log(ComentUpdate)
      });
    };
    getComents();
  
  }, [ComentUpdate]);




  function soundPlay(src) {
    const voice = new Howl({
      src,
      html5: true,
    });

    voice.play();
  }

  async function ClickAudio(id) {
    axios.get(`http://localhost:5000/coments/${id}`).then(function (res) {
      const audioPath = import(`../../audio/audioTSP-1.mp3`).default;

      soundPlay(audioPath);
    });
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
