import React, { useState } from "react";
import "./style.css";
import axios from "axios";

const Form = ({UpdateComent}) => {
  
  const [textarea, setTextarea] = useState("");
  function handleChange(e) {
    setTextarea(e.target.value);
  }

   function AddComent() {

    axios.post("http://localhost:5000/coments", {
      content: textarea ,
    });
    setTextarea('');
    UpdateComent()
  }

  return (
    <div className="content-form">
      <form action="">
        <textarea
          value={textarea}
          onChange={handleChange}
          placeholder="Insira seu texto aqui!"
          name=""
          id=""
          cols="30"
          rows="10"
          wrap="off"
        ></textarea>
      </form>
      <button className="submitbtn" type="submit" 
      // disabled={!textarea} 
      onClick={AddComent}>
        Adicionar Comentário
      </button>
    </div>
  );
};

export default Form;
