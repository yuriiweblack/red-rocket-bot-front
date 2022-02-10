import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CertificateList from "../components_certificates/CertificateList";
import NewCertificateModal from "../components_certificates/NewCertificateModal";

import axios from "axios";
import { API2_URL } from "../config/constant";

class Home3 extends Component {
  state = {
    certificates: []
  };

  componentDidMount() {
    this.resetState();
  }

  getCertificates = () => {
    axios.get(API2_URL).then(res => this.setState({ certificates: res.data }));
  };

  resetState = () => {
    this.getCertificates();
  };

  render() {
    return (
        <div className="container4">
          <Container>
            <Row>
              <Col>
                <CertificateList
                  certificates={this.state.certificates}
                  resetState={this.resetState}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <NewCertificateModal create={true} resetState={this.resetState} />
              </Col>
            </Row>
          </Container>
          </div>
    );
  }
}

export default Home3;