import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../../Styles/Footer.css";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="footer">
          <a
            target="_blank"
            href="https://twitter.com/WildSchoolLille"
            rel="noopener noreferrer"
            className="link"
          >
            {" "}
            WildCodeSchool
          </a>
          <a
            target="_blank"
            href="https://www.songkick.com/"
            rel="noopener noreferrer"
            className="link"
          >
            {" "}
            Songkick
          </a>
          <Link to="/TermsOfUse" className="link">
            {" "}
            Terme d'utilisation
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
