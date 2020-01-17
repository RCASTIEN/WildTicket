import React, { Component, Fragment } from "react";
import axios from "axios";
import EventsList from "./Components/EventsList";

class Concert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      concerts: [],
      concertName: "Not On Tour...",
      performance: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.songkick.com/api/3.0/events/${this.props.match.params.concertId}.json?apikey=5yrQwIh2tGWNTggG`
      )
      .then(res => {
        this.setState({
          concerts: res.data.resultsPage.results.event,
          concertName: res.data.resultsPage.results.event.displayName,
          concertLocation: res.data.resultsPage.results.event.location.city,
          concertDate: res.data.resultsPage.results.event.start.date,
          concertTime: res.data.resultsPage.results.event.start.time,
          concertVenueName:
            res.data.resultsPage.results.event.venue.displayName,
          concertVenueStreet: res.data.resultsPage.results.event.venue.street,
          concertVenueZip: res.data.resultsPage.results.event.venue.zip,
          concertArtists: res.data.resultsPage.results.event.performance
        });
      });
  }

  render() {
    return (
      <Fragment>
        <EventsList />
      </Fragment>
    );
  }
}

export default Concert;
