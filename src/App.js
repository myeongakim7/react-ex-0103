import "./App.css";
import ColorButton from "./components/ColorButton";

function App() {
  return (
    <>
      <h1>App</h1>
      <ColorButton bgColor="green" color="white">
        버튼1
      </ColorButton>
      <ColorButton bgColor="pink" color="white">
        버튼2
      </ColorButton>
    </>
  );
}

export default App;
