import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="footer">
          <a
            target="_blank"
            href="https://twitter.com/WildSchoolLille"
            rel="noopener noreferrer"
          >
            {" "}
            WildCodeSchool
          </a>
          <a
            target="_blank"
            href="https://www.songkick.com/"
            rel="noopener noreferrer"
          >
            {" "}
            Songkick
          </a>
          <Link to="/TermsOfUse"> Terme d'utilisation</Link>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
