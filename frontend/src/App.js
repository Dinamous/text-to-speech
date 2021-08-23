import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <h1>Dê voz a seus pensamentos</h1>

      <main>
        <div className="content">
          <Form />
          <List />
          {/* <audio media-player="audioPlayer" controls="controls" preload="auto" id="audio"
                crossOrigin="anonymous" src={audio}></audio> */}
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
