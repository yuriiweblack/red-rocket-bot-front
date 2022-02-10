import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";
import { API3_URL } from "../config/constant";

class NewUserForm extends React.Component {
  state = {
    pk: 0,
    title: "",
    description: ""
  };

  componentDidMount() {
    if (this.props.category) {
      const { pk, title, description } = this.props.category;
      this.setState({ pk, title, description });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createCategory = e => {
    e.preventDefault();
    axios.post(API3_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editCategory = e => {
    e.preventDefault();
    axios.put(API3_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.category ? this.editCategory : this.createCategory}>
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
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewUserForm;