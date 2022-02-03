import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "../components_categories/CategoryList";
import NewCategoriesModal from "../components_categories/NewCategoriesModal";

import axios from "axios";
import { API3_URL } from "../config/constant";

class Home2 extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    this.resetState();
  }

  getCategories = () => {
    axios.get(API3_URL).then(res => this.setState({ categories: res.data }));
  };

  resetState = () => {
    this.getCategories();
  };

  render() {
    return (
        <div className="container3">
          <Container>
            <Row>
              <Col>
                <CategoryList
                  categories={this.state.categories}
                  resetState={this.resetState}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <NewCategoriesModal create={true} resetState={this.resetState} />
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default Home2;