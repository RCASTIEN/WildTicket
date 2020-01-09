import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Artiste extends Component {
  render() {
    return (
      <Fragment>
        <img
          alt="Logo"
          src="https://i.postimg.cc/KzGt5rCH/background-image.jpg"
        />
        By Rémi CASTIEN
        <button>
          <Link to="/TermsOfUse">Terme d'utilisation</Link>
        </button>
      </Fragment>
    );
  }
}

export default Artiste;
