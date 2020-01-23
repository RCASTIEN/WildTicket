import React from "react";
import { Button, Card, CardImg, CardBody, CardTitle, Col } from "reactstrap";
import { Heart } from "react-feather";
import Background from "../../../Pictures/Background/background_image.jpg";
import axios from "axios";

import "../../../Styles/Card.css";

class Bands extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
    this.handleAddToFavorite = this.handleAddToFavorite.bind(this);
  }

  handleAddToFavorite(e) {
    e.preventDefault();

    if (!this.props.favorited) {
      axios
        .post("http://localhost:5000/api/favorites", {
          id_user: this.props.userId,
          id_artist: this.props.fav
        })
        .then(() => {
          this.props.alertFunction("This band was added to your favorites !");
        });
    } else {
      axios
        .delete(
          "http://localhost:5000/api/favorites/" + this.props.favoriteId[0]
        )
        .then(() => {
          this.props.alertFunction("This band was removed from your favorite.");
        });
    }
    this.props.updateList(this.props.userId);
  }

  render() {
    const { name, avatar } = this.props;
    console.log(this.props.favorited);
    return (
      <React.Fragment>
        <Col className="grid__item verticalCard">
          <Card>
            <div className="img-container">
              <CardImg
                className="oblique-img"
                style={{
                  backgroundImage: `url(${Background})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}
                src={
                  "https://images.sk-static.com/images/media/profile_images/artists/" +
                  avatar +
                  "/huge_avatar"
                }
                alt={avatar}
              />
            </div>
            <CardBody>
              <CardTitle>
                <h4 className="ellips-title">{name}</h4>
              </CardTitle>
              <Heart
                onClick={this.handleAddToFavorite}
                color={this.props.favorited ? "red" : "black"}
                fill={this.props.favorited ? "red" : "none"}
              />
              <a href={`/Artiste/${avatar}`}>
                <Button className="discover-btn">DISCOVER</Button>
              </a>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    );
  }
}

export default Bands;
