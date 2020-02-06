import React, { Component, Fragment } from "react";
import EventsList from "./Components/EventsList";

class Concert extends Component {
  render() {
    return (
      <Fragment>
        <EventsList />
      </Fragment>
    );
  }
}

export default Concert;
