import React from "react";
import { Button, Card, CardImg, CardBody, CardTitle, Col } from "reactstrap";
import { Heart } from "react-feather";
//import Background from "https://i.postimg.cc/KzGt5rCH/background-image.jpg";
import axios from "axios";

class Bands extends React.Component {
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
            ? "This band was added to your favorites !"
            : "This band was removed from your favorite."
        );
        if (this.state.favorited) {
          axios.post("http://localhost:5000/api/favorites", {
            band_id: this.props.fav
          });
        } else {
          const idEvent = this.props.fav;
          axios
            .get("http://localhost:5000/api/favorites?band_id=" + idEvent)
            .then(res => {
              this.setState(
                {
                  id: res.data[0].id
                },
                () => {
                  axios.delete(
                    "http://localhost:5000/api/favorites/" + this.state.id
                  );
                }
              );
            });
        }
      }
    );
  }

  render() {
    const { name, avatar } = this.props;
    return (
      <React.Fragment>
        <Col className="grid__item verticalCard">
          <Card>
            <div className="img-container">
              <CardImg
                className="oblique-img"
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
            <CardBody>
              <CardTitle>
                <h4 className="ellips-title">{name}</h4>
              </CardTitle>
              <Heart
                onClick={this.handleAddToFavorite}
                className={
                  this.state.favorited ? "heart-filled" : "heart-little-card"
                }
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
