import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

import sound from "../../assets/sound.svg";

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

  console.log(coments);

  return (
    <div>
      <div className="content-list">
        <h4>Lista de Comentários</h4>
        <div className="scroll">
          {/* <p>{coments[0].content}</p> */}

          {coments ? (
            coments.map((coment) => (
              <div className="comment" key={coment.id}>
                <p>{coment.content} </p>
                <img src={sound} alt="" />
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
