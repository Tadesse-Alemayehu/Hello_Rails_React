import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Greeting from "./greeting";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Root() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/greeting" element={<Greeting />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
