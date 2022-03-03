import React from "react";
import ReactDOM from "react-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Home from "./components/Home";
import "./styles.scss";

const options = {
  position: "top center",
  timeout: 5000,
  offset: "30px",
  transition: "scale",
};

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <div className="App">
        <Home />
      </div>
    </AlertProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
