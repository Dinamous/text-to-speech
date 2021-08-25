import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [coment, setComent] = useState([])

  //utilizando de um lift state para manipular e atualizar
  //componentes siblings para
  //não havendo necessidade de um ContextAPI


//esta função lista todos os comentários já cadastrados no banco de
//é chamada no useEffect() para ser carregada assim que o componente for montado
//esta mesma função é passada para o componente <FORM>
//para que cada vez que um novo comentário for cadastrado, a lista seja atualizada
//por fim a lista atualizada é passada pro componente <LIST>
//para assim ser renderizado


async  function handleComent (){
 const data =  await axios.get("http://localhost:5000/coments")
  setComent(data.data)
}

useEffect(() => {
  handleComent()

}, [])

  return (
    <div className="App">
      <h1>Dê voz a seus pensamentos</h1>

      <main>
        <div className="content">
          <Form  UpdateComent={handleComent}/>
          <List ComentUpdate={coment}/>
          
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
