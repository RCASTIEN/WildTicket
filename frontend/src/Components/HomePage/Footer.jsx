import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <button>
          <Link to="https://twitter.com/WildSchoolLille">WildCodeSchool</Link>
        </button>
        By Rémi CASTIEN
        <button>
          <Link to="/TermsOfUse">Terme d'utilisation</Link>
        </button>
      </Fragment>
    );
  }
}

export default Footer;
