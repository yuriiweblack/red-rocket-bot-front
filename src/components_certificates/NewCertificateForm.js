import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";
import { API2_URL } from "../config/constant";

class NewCertificateForm extends React.Component {
  state = {
    pk: 0,
    title: "",
    description: "",
    owner: "",
    mentor: "",
    date: ""
  };

  componentDidMount() {
    if (this.props.certificate) {
      const { pk, title, description, owner, mentor, date } = this.props.certificate;
      this.setState({ pk, title, description, owner, mentor, date });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createCertificate = e => {
    e.preventDefault();
    axios.post(API2_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editCertificate = e => {
    e.preventDefault();
    axios.put(API2_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.certificate ? this.editCertificate : this.createCertificate}>
        {/*<FormGroup>*/}
        {/*  <Label for="pk">Public ID:</Label>*/}
        {/*  <Input*/}
        {/*    type="text"*/}
        {/*    name="pk"*/}
        {/*    onChange={this.onChange}*/}
        {/*    value={this.defaultIfEmpty(this.state.pk)}*/}
        {/*  />*/}
        {/*</FormGroup>*/}
        <FormGroup>
          <Label for="title">Title:</Label>
          <Input
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.title)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description:</Label>
          <Input
            type="text"
            name="description"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.description)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="owner">Owner:</Label>
          <Input
            type="text"
            name="owner"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.owner)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="mentor">Mentor:</Label>
          <Input
            type="text"
            name="mentor"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.mentor)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="date">Date:</Label>
          <Input
            type="text"
            name="date"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.date)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewCertificateForm;