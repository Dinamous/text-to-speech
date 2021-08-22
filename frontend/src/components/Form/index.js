import React from 'react'
import "./style.css"
const Form = () => {
  return (
    <div className="content-form">
      <form action="">
        <textarea 
        placeholder="Insira seu texto aqui!"
        name="" id="" cols="30" rows="10"
        wrap="off"></textarea>

      </form>
      <button type="submit"> Adicionar Comentário</button>
    </div>
  )
}

export default Form
