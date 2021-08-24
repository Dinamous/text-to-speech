import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [coment, setcoment] = useState(0)

const handleComent = () => {
  setcoment(coment +1);
  console.log("atualizou "+coment)
}

  return (
    <div className="App">
      <h1>Dê voz a seus pensamentos</h1>

      <main>
        <div className="content">
          <Form  UpdateComent={handleComent}/>
          <List ComentUpdate={coment}/>
          {/* <audio media-player="audioPlayer" controls="controls" preload="auto" id="audio"
                crossOrigin="anonymous" src={audio}></audio> */}
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
