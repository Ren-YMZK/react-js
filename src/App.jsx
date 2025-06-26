import { useState } from "react";
import "./App.css";
import ColorfulMessage from "./components/ColorfulMessage";

function App() {
  const [num, setNum] = useState(0);

  const onClickCountUp = () => {
    setNum((prev) => {prev + 1});
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
}

export default App;
