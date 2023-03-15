import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/index.css";
import { Datas } from "./ContexStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Datas>
      <App />
    </Datas>
  </React.StrictMode>
);
