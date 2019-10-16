import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';


const Connexion = (props) => {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="entrez votre adresse mail" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Mot de passe</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="entrez votre mot de passe" />
        </FormGroup>
        <Button>Connexion</Button>
        <h4>Pas encore inscrit ? <Link to="/Inscription">Inscrivez-vous</Link> dès maintenant</h4>
      </Form>
    )
}

export default Connexion;