import React, { Component, Fragment } from "react";
import axios from "axios";

class Artists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      artistName: "Not on Tour...",
      artistId: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.songkick.com/api/3.0/artists/${this.props.match.params.artistId}/calendar.json?apikey=5yrQwIh2tGWNTggG`
      )
      .then(res => {
        this.setState({
          artists: res.data.resultsPage.results.event,
          artistName:
            res.data.resultsPage.results.event[0].performance[0].artist
              .displayName,
          artistId:
            res.data.resultsPage.results.event[0].performance[0].artist.id
        });
        console.log("ICI");
      });
    console.log(this.setState());
  }

  render() {
    return (
      <Fragment>
        <div className="bg-white">
          <img
            className="cadre"
            style={{
              backgroundImage: `url(https://i.postimg.cc/KzGt5rCH/background-image.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
            src={
              "https://images.sk-static.com/images/media/profile_images/artists/" +
              this.state.artistId +
              "/huge_avatar"
            }
            alt="Background"
            title={this.state.artistName}
          />
          <img
            className="doublev"
            style={{
              backgroundImage: `url(https://i.postimg.cc/KzGt5rCH/background-image.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
            src={
              "https://images.sk-static.com/images/media/profile_images/artists/" +
              this.state.artistId +
              "/huge_avatar"
            }
            alt="W"
            title={this.state.artistName}
          />
          <img
            className="tet"
            style={{
              backgroundImage: `url(https://i.postimg.cc/KzGt5rCH/background-image.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
            src={
              "https://images.sk-static.com/images/media/profile_images/artists/" +
              this.state.artistId +
              "/huge_avatar"
            }
            alt="T"
            title={this.state.artistName}
          />
          <div className="shadow text-center">
            <h2>{this.state.artistName}</h2>
            <p>{this.state.artists.length + " date(s)"}</p>
            <hr />
          </div>
        </div>
        <div>
          {this.state.artists.map((artist, i) => (
            <div key={i}>
              <div className="shadow my-5 p-3">
                <a
                  href={"/Lieu/" + this.state.artists[i].id}
                  alt=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4 className="text-center">{artist.displayName}</h4>
                  <div className="row">
                    <h5 className="col-sm-4 col-12 text-center">
                      {artist.location.city}
                    </h5>
                    <h5 className="col-sm-4 col-12 text-center">
                      {artist.start.date}
                    </h5>
                    <h5 className="col-sm-4 col-12 text-center">
                      {artist.start.time}
                    </h5>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Artists;
