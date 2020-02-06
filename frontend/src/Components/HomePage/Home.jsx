import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import "../../Styles/Home.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <h1>Book unique concerts at the best places.</h1>

        <h2>Comment ça marche ?</h2>
        <h3>1</h3>
        <p>
          Découvrez des artistes populaires et des concerts près de chez vous!
          Choisissez un artiste ou une date que vous aimez et passez une
          merveilleuse soirée.
        </p>
        <h3>2</h3>
        <p>
          Likez l'artiste que vous préférez et suivez ses tournées dans l'onglet
          "Favoris" pour ne manquer aucun concert près de chez vous.
        </p>
        <h3>3</h3>
        <p>
          Réservez la date d'un concert que vous aimez pour ne pas l'oublier et
          organisez vos sorties. Accédez à l'onglet "Favoris" pour trouver des
          opportunités pour passer un bon moment.{" "}
        </p>
        <h2>Prêt à découvrir l'expérience WildTickets ?</h2>
        <div>
          <a href="/Inscription">
            <Button className="discover-btn-login">Inscrivez-vous</Button>
          </a>
        </div>
      </Fragment>
    );
  }
}

export default Home;
