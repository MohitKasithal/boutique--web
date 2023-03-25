import "./App.css";
import About from "./component/About";
import Container from "./component/Container";
import Experties from "./component/Experties";
import Header from "./component/Header";
import ImagesDesign from "./component/imagesDesign";

function App() {
  return (
    <div className="App">
      <div className="backimages">
        <Header />
        <Container />
      </div>
      <Experties />
      <hr style={{ background: "white", height: "3px" }} />
      <ImagesDesign />
      <hr style={{ background: "white", height: "3px" }} />
      <About />
    </div>
  );
}

export default App;
