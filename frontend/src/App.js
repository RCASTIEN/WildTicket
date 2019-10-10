import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./router/Home";
import Test from "./router/Test";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/test" component={Test} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
