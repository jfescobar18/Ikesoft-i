import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
