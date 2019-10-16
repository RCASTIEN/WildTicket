import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const Contact = (props) => {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="entrez votre adresse mail" />
        </FormGroup>
        <FormGroup>
        <Label for="exampleSelect">Sujet</Label>
        <Input type="select" name="select" id="exampleSelect" ple>
          <option>Reporter un problème</option>
          <option>Signalement d'un bug</option>
          <option>Suggestion d'amélioration</option>
          <option>Signaler un problème</option>
          <option>Autre</option>
        </Input>
      </FormGroup>
        <FormGroup>
        <Label for="exampleText">Votre message</Label>
        <Input type="textarea" name="text" id="message" placeholder="entrez votre message"  />
      </FormGroup>
        <Button>Envoyer</Button>
      </Form>
    )
}

export default Contact;