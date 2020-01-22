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
      favorited: false,
      id: ""
    };
    this.handleAddToFavorite = this.handleAddToFavorite.bind(this);
  }

  handleAddToFavorite(e) {
    e.preventDefault();
    this.setState(
      {
        favorited: !this.state.favorited
      },
      () => {
        this.props.alertFunction(
          this.state.favorited
            ? "This concert was added to your favorites !"
            : "This concert was removed from your favorite."
        );
        if (this.state.favorited) {
          axios.post("http://localhost:5000/api/concerts", {
            concert_id: this.props.fav
          });
        } else {
          const idEvent = this.props.fav;
          axios
            .get("http://localhost:5000/api/concerts?concert_id=" + idEvent)
            .then(res => {
              this.setState(
                {
                  id: res.data[0].id
                },
                () => {
                  axios.delete(
                    "http://localhost:5000/api/concerts/" + this.state.id
                  );
                }
              );
            });
        }
      }
    );
  }
  render() {
    const { name, date, venue, avatar, fav } = this.props;

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
                  className={
                    this.state.favorited ? "heart-filled" : "heart-little-card"
                  }
                />
                <a href={`/concert/${fav}`}>
                  <Button className="horizontal-discover-btn">DISCOVER</Button>
                </a>
              </CardBody>
            </Col>
            <Col>
              <div className="img-container">
                <CardImg
                  className="obliqueVertical-img"
                  style={{
                    backgroundImage: `url(https://i.postimg.cc/KzGt5rCH/background-image.jpg)`,
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
