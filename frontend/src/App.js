import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [coment, setComent] = useState([])

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
