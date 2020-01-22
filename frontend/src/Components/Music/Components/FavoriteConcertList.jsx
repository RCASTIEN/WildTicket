import React, { Fragment } from "react";
import Container from "reactstrap/lib/Container";
import HorizontalCard from "./HorizontalCard";
import axios from "axios";

class FavoriteConcertList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritesConcertsArray: [],
      eventArray: []
    };
  }

  componentDidMount() {
    let concerts_id = [];

    axios.get("http://localhost:5000/api/concerts").then(res => {
      concerts_id = res.data.map(concert => {
        return concert.concert_id;
      });
    });

    axios
      .get(
        "https://api.songkick.com/api/3.0/metro_areas/28886/calendar.json?apikey=5yrQwIh2tGWNTggG"
      )
      .then(res => {
        const favEvents = res.data.resultsPage.results.event.filter(SK => {
          return concerts_id.includes(SK.id);
        });
        this.setState({
          eventArray: res.data.resultsPage.results.event,
          favoritesConcertsArray: favEvents
        });
      });
  }
  render() {
    return (
      <Fragment>
        <Container>
          <h1>Favorite Concerts</h1>
          {this.state.favoritesConcertsArray.map((eachEvent, i) => {
            return (
              eachEvent.performance[0] && (
                <HorizontalCard
                  key={i}
                  name={eachEvent.performance[0].displayName}
                  avatar={eachEvent.performance[0].artist.id}
                  venue={eachEvent.venue.displayName}
                  date={eachEvent.start.date}
                  link={eachEvent.performance[0].artist.id}
                  fav={eachEvent.id}
                  alertFunction={this.handleAlert}
                />
              )
            );
          })}
        </Container>
      </Fragment>
    );
  }
}

export default FavoriteConcertList;
