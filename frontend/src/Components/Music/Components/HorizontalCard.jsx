import React from "react";
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Col,
  Row
} from "reactstrap";
import { Save } from "react-feather";
import Background from "../../../Pictures/Background/background_image.jpg";
import axios from "axios";

const formatDate = paramDate => {
  let setDate = paramDate;
  let regex = /^2019-/g;
  setDate = setDate.replace(regex, "");
  regex = /-/g;
  return (setDate = setDate.replace(regex, "/"));
};

class HorizontalCard extends React.Component {
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
    const { name, date, venue, avatar } = this.props;

    return (
      <div className="grid__item horizontalCard">
        <Card>
          <Row>
            <Col>
              <CardBody className="horizontal-text-card-left">
                <CardTitle>
                  <h4 className="ellips-title">{name}</h4>

                  <p className="text-muted">
                    {venue}-{formatDate(date)}
                  </p>
                </CardTitle>
                <Save
                  onClick={this.handleAddToFavorite}
                  color={this.props.favorited ? "red" : "black"}
                  fill={this.props.favorited ? "red" : "none"}
                />
                <a href={`/Artiste/${avatar}`}>
                  <Button className="horizontal-discover-btn">DISCOVER</Button>
                </a>
              </CardBody>
            </Col>
            <Col>
              <div className="img-container">
                <CardImg
                  className="obliqueVertical-img"
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
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default HorizontalCard;
