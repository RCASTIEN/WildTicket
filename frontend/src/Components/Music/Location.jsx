import React, { Component, Fragment } from "react";

class Location extends Component {
  render() {
    return (
      <Fragment>
        <div className="text-center">
          <h4>{this.state.concertName}</h4>
          <h5>{this.state.concertLocation}</h5>
          <h5>
            {this.state.concertDate} {this.state.concertTime}
          </h5>
          <h5>
            <a
              href={
                "https://www.google.fr/maps/dir/Wild Code School Lille/" +
                this.state.concertVenueStreet +
                " " +
                this.state.concertVenueZip
              }
              alt=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Address
            </a>
          </h5>
        </div>
      </Fragment>
    );
  }
}
export default Location;
