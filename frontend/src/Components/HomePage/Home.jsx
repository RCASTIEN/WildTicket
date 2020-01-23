import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <h1>Book unique concerts at the best places.</h1>

        <h2>Comment ça marche ?</h2>
        <h3>_________________</h3>
        <h2>Prêt à découvrir l'expérience WildTickets ?</h2>
        <button>
          <Link to="/Inscription">Inscrivez-vous</Link>
        </button>
      </Fragment>
    );
  }
}

export default Home;
