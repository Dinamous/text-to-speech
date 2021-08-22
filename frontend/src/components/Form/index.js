import React, { useState } from "react";
import "./style.css";
import axios from "axios";

const Form = () => {
  const [coment, setComent] = useState("");
  const [textarea, setTextarea] = useState("");
  function handleChange(e) {
    setComent(e.target.value);
    setTextarea(e.target.value);
  }

   function AddComent() {

    axios.post("http://localhost:5000/coments", {
      content: textarea ,
    });

    console.log(typeof(textarea))
    setTextarea('');
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
      <button type="submit" disabled={!textarea} onClick={AddComent}>
        Adicionar Comentário
      </button>
    </div>
  );
};

export default Form;
