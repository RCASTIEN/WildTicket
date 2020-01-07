import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import cogoToast from "cogo-toast";

class Inscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpEmail: "",
      signUpPassword: "",
      signInID: "",
      signUpError: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  signUp = event => {
    event.preventDefault();
    const errors = {};

    errors.signUpEmailError = !/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(
      this.state.signUpEmail
    );
    errors.signUpPasswordError = this.state.signUpPassword.length <= 7;
    this.setState(errors);
    if (!errors.signUpEmailError && !errors.signUpPasswordError) {
      axios
        .post(
          "http://localhost:5000/api/inscription",
          {
            email: this.state.signUpEmail,
            password: this.state.signUpPassword
          },
          { headers: { Accept: "application/json" } }
        )
        .then(res => {
          if (res.data.code === 201) {
            cogoToast.success("Inscription réussie", { position: "top-right" });
            this.autoSignIn();
          }
        })
        .catch(error => {
          cogoToast.error("L'inscription a échoué", { position: "top-right" });
        });
    }
  };

  render() {
    return (
      <Form onSubmit={this.signUp}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="signUpEmail"
            id="exampleEmail"
            placeholder="entrez votre adresse mail"
            ref={ref => (this.exampleEmail = ref)}
            onChange={this.handleChange}
            value={this.state.signUpEmail}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Mot de passe</Label>
          <Input
            type="password"
            name="signUpPassword"
            id="examplePassword"
            placeholder="entrez votre mot de passe"
            ref={ref => (this.examplePassword = ref)}
            onChange={this.handleChange}
            value={this.state.signUpPassword}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Confirmer votre mot de passe</Label>
          <Input
            type="password"
            name="signUpPassword"
            id="examplePassword"
            placeholder="entrez votre mot de passe"
            ref={ref => (this.examplePassword = ref)}
            onChange={this.handleChange}
            value={this.state.signUpPassword}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Date de naissance</Label>
          <Input type="textarea" name="text" id="birthdate" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Accepter les CGU
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Accepter de recevoir des mails
            promotionnels
          </Label>
        </FormGroup>
        <Button>Inscription</Button>
      </Form>
    );
  }
}
export default Inscription;
