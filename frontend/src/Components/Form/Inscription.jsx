import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const Inscription = (props) => {
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
        <FormGroup>
          <Label for="examplePassword">Confirmer votre mot de passe</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="entrez votre mot de passe" />
        </FormGroup>
        <FormGroup>
        <Label for="exampleText">Date de naissance</Label>
        <Input type="textarea" name="text" id="birthdate" />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Accepter les CGU
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Accepter de recevoir des mails promotionnels
        </Label>
      </FormGroup>
        <Button>Inscription</Button>
      </Form>
    )
}

export default Inscription;