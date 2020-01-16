import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Container>
          <h1>
            Cette page n'existe pas{" "}
            <span role="img" aria-label="img">
              🤔
            </span>
          </h1>
        </Container>
      </Fragment>
    );
  }
}

export default NotFound;
