import React from "react";
import ReactDOM from "react-dom/client";
import { createContext } from "react";

import App from "./App";

const Context = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider value={"Harikesh"}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

export { Context };
