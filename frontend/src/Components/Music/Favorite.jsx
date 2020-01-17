import React, { Component, Fragment } from "react";
import FavoriteConcertList from "./Components/FavoriteConcertList";
import { Container } from "reactstrap";

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        By Rémi CASTIEN
        <Container className="bg-to-delete">
          <FavoriteConcertList />
        </Container>
      </Fragment>
    );
  }
}

export default Favorite;
