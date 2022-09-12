import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Greeting from "./greeting";

function App(props) {
  return (
    <Provider store={store}>
      <h1>Hello World!</h1>
      <Greeting />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
