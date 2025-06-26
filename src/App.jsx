import "./App.css";

function App() {
  const onClickButton = () => {
    alert();
  };

  const contentStyle = {
    color: "blue",
    fontSize: "18px",
    margin: 100,
  };

  return (
    <>
      <h1 style={contentStyle}>こんにちは！</h1>
      <p>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
}

export default App;
