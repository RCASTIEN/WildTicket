import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Concert extends Component {
  render() {
    return (
      <Fragment>
        By Rémi CASTIEN
        <button>
          <Link to="/TermsOfUse">Terme d'utilisation</Link>
        </button>
      </Fragment>
    );
  }
}

export default Concert;
