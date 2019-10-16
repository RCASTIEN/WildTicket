import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/HomePage/Home";
import "./App.css";

function App({ location }) {
  return (
    <div className="App">
      <NavBar />
          <section className="route-section">
            <Switch location={location} key={location}>
              <Route exact path="/" component={Home} />
            </Switch>
        </section>
    </div>
  );
}

export default withRouter(App);
