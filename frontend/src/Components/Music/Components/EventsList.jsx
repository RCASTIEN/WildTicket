import React, { Component, Fragment } from "react";
import axios from "axios";
import Bands from "./Bands";
import { Container, Row } from "reactstrap";

class EventsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventArray: [],
      alert: false,
      message: undefined,
      userId: "",
      favoritesList: [],
      artistList: []
    };
    this.handleAlert = this.handleAlert.bind(this);
  }

  handleAlert(msg) {
    this.setState({
      alert: true,
      message: msg
    });

    setTimeout(() => {
      this.setState({
        alert: false,
        message: undefined
      });
    }, 3000);
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    this.setState({ userId: user.emailInfo.id_user });
    axios
      .get(
        "https://api.songkick.com/api/3.0/metro_areas/28886/calendar.json?apikey=5yrQwIh2tGWNTggG"
      )
      .then(res => {
        const mySortedEvents = res.data.resultsPage.results.event.sort(
          (evtA, evtB) => {
            if (evtA.popularity > evtB.popularity) {
              return -1;
            } else {
              return 1;
            }
          }
        );

        this.setState({
          eventArray: mySortedEvents
        });
      });
    this.updateList(user.emailInfo.id_user);
  }

  updateList = id => {
    if (id !== "") {
      axios.get(`http://localhost:5000/api/favorites/user/${id}`).then(res => {
        const artistList = res.data.map(e => {
          return e.id_artist;
        });
        this.setState({ favoritesList: res.data, artistList: artistList });
      });
    }
  };

  render() {
    return (
      <Fragment>
        {this.state.alert && (
          <div className="alert alert-danger" role="alert">
            {this.state.message}
          </div>
        )}
        <Container>
          <Row className="scrolling-wrapper-flexbox grid">
            {this.state.eventArray.map((eachEvent, i) => {
              let favorite = false;
              let favoriteId = [];
              if (this.state.artistList.includes(eachEvent.id)) {
                favorite = true;

                favoriteId = this.state.favoritesList
                  .filter(e => e.id_artist === eachEvent.id)
                  .map(e => {
                    return e.id_favorite;
                  });
                console.log(favoriteId);
              }
              return (
                eachEvent.performance[0] && (
                  <Bands
                    key={i}
                    name={eachEvent.performance[0].displayName}
                    avatar={eachEvent.performance[0].artist.id}
                    venue={eachEvent.venue.displayName}
                    date={eachEvent.start.date}
                    link={eachEvent.performance[0].artist.id}
                    fav={eachEvent.id}
                    alertFunction={this.handleAlert}
                    userId={this.state.userId}
                    favorited={favorite}
                    favoriteId={favoriteId}
                    updateList={this.updateList}
                  />
                )
              );
            })}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default EventsList;
