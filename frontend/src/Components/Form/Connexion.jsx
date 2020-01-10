import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class Connexion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
      signInID: "",
      signInError: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  signIn = event => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    let { signInEmail, signInPassword } = this.state;
    axios
      .post(
        "http://localhost:5000/api/connexion",
        { email: signInEmail, password: signInPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(({ data }) => {
        this.setState({
          login: {
            signInEmail: data.email,
            signInPassword: data.password,
            signInId: data.id
          }
        });
        localStorage.setItem("user", JSON.stringify(data));
      });
  };

  render() {
    return (
      <Form onSubmit={this.signIn}>
        <FormGroup>
          <Label for="exampleEmailIn" htmlFor="name">
            Email
          </Label>
          <Input
            type="email"
            name="signInEmail"
            id="exampleEmailIn"
            placeholder="entrez votre adresse mail"
            ref={ref => (this.exampleEmailIn = ref)}
            onChange={this.handleChange}
            value={this.state.signInEmail}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmailIn" htmlFor="name">
            Mot de passe
          </Label>
          <Input
            type="password"
            name="signInPassword"
            id="examplePasswordIn"
            placeholder="entrez votre mot de passe"
            ref={ref => (this.examplePasswordIn = ref)}
            onChange={this.handleChange}
            value={this.state.signInPassword}
          />
        </FormGroup>
        <Button>Connexion</Button>
        <h4>
          Pas encore inscrit ? <Link to="/Inscription">Inscrivez-vous</Link> dès
          maintenant
        </h4>
      </Form>
    );
  }
}
export default Connexion;
