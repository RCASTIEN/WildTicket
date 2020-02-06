import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import NavBarWild from "./Components/NavBar/NavBar";
import FAQ from "./Components/NavBar/FAQ";
import Home from "./Components/HomePage/Home";
import Contact from "./Components/Form/Contact";
import Connexion from "./Components/Form/Login";
import Inscription from "./Components/Form/SignUp";
import NotFound from "./Components/HomePage/NotFound";
import TermsOfUse from "./Components/HomePage/PageFooter/TermsOfUse";
import Footer from "./Components/HomePage/Footer";
import Favorite from "./Components/Music/Favorite";
import Concert from "./Components/Music/Concert";
import Artiste from "./Components/Music/Artist";
import Localisation from "./Components/Music/Places";
import "./App.css";

function App({ location }) {
  return (
    <div className="App">
      <NavBarWild />
      <section className="route-section">
        <Switch location={location} key={location}>
          <Route exact path="/" component={Home} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Connexion" component={Connexion} />
          <Route path="/Inscription" component={Inscription} />
          <Route path="/TermsOfUse" component={TermsOfUse} />
          <Route path="/Favorite" component={Favorite} />
          <Route path="/Concert" component={Concert} />
          <Route path="/Lieu/:concertId" component={Localisation} />
          <Route path="/Artiste/:artistId" component={Artiste} />
          <Route component={NotFound} />
        </Switch>
      </section>
      <Footer />
    </div>
  );
}

export default withRouter(App);
