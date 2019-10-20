import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import FAQ from "./Components/NavBar/FAQ";
import Home from "./Components/HomePage/Home";
import Contact from "./Components/Form/Contact";
import Connexion from "./Components/Form/Connexion";
import Inscription from "./Components/Form/Inscription";
import "./App.scss";

function App({ location }) {
  return (
    <div className="App">
      <NavBar />
      <section className="route-section">
        <Switch location={location} key={location}>
          <Route exact path="/" component={Home} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Connexion" component={Connexion} />
          <Route path="/Inscription" component={Inscription} />
        </Switch>
      </section>
    </div>
  );
}

export default withRouter(App);
