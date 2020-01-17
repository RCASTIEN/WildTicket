import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import FAQ from "./Components/NavBar/FAQ";
import Home from "./Components/HomePage/Home";
import Contact from "./Components/Form/Contact";
import Connexion from "./Components/Form/Connexion";
import Inscription from "./Components/Form/Inscription";
import NotFound from "./Components/HomePage/NotFound";
import TermsOfUse from "./Components/HomePage/PageFooter/TermsOfUse";
import Footer from "./Components/HomePage/Footer";
import Favorite from "./Components/Music/Favorite";
import Concert from "./Components/Music/Concert";
import Artiste from "./Components/Music/Artiste";
import "./App.css";

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
          <Route path="/NotFound" component={NotFound} />
          <Route path="/TermsOfUse" component={TermsOfUse} />
          <Route path="/Favorite" component={Favorite} />
          <Route path="/Concert" component={Concert} />
          <Route path="/Artiste" component={Artiste} />
        </Switch>
      </section>
      <Footer />
    </div>
  );
}

export default withRouter(App);
