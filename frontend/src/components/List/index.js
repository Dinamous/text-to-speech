import React from "react";
import "./style.css";

import sound from "../../assets/sound.svg";
const List = () => {
  return (
    <div>
      <div className="content-list">
        <h4>Lista de Comentários</h4>
        <div className="scroll">
          <div className="comment">
            <p>
              texto exemplotexto exemplotexto exemplotexto exemplotexto
              exemplotexto exemplotexto exemplo
            </p>
            <img src={sound} alt="" />
          </div>
          <div className="comment">
            <p>
              texto exemplotexto exemplotexto exemplotexto exemplotexto
              exemplotexto exemplotexto exemplo
            </p>
            <img src={sound} alt="" />
          </div>
          <div className="comment">
            <p>
              texto exemplotexto exemplotexto exemplotexto exemplotexto
              exemplotexto exemplotexto exemplo
            </p>
            <img src={sound} alt="" />
          </div>
          <div className="comment">
            <p>
              texto exemplotexto exemplotexto exemplotexto exemplotexto
              exemplotexto exemplotexto exemplo
            </p>
            <img src={sound} alt="" />
          </div>
          <div className="comment">
            <p>
              texto exemplotexto exemplotexto exemplotexto exemplotexto
              exemplotexto exemplotexto exemplo
            </p>
            <img src={sound} alt="" />
          </div>
          <div className="comment">
            <p>
              texto exemplotexto exemplotexto exemplotexto exemplotexto
              exemplotexto exemplotexto exemplo
            </p>
            <img src={sound} alt="" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default List;
