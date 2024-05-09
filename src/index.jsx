import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import { Provider } from "react-redux";
import giphyStore from "./Redux/reduxStore.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store ={giphyStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
