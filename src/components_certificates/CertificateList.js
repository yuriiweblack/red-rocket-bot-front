import React, { Component } from "react";

import { Table } from "reactstrap";
import NewCertificateModal from "../components_certificates/NewCertificateModal";
import ConfirmsRemovalModal from "../components_certificates/ConfirmsRemovalModal";


class CertificateList extends Component {
  render() {
    const certificates = this.props.certificates;
    return (
      <Table class="table table-bordered">
        <thead>
          <tr>
            <th>Public ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Owner</th>
            <th>Mentor</th>
            <th>Date</th>
            <th style={{ paddingLeft: "240px" }}>Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!certificates || certificates.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b style={{marginLeft: "400px"}}>It haven't certificates yet</b>
              </td>
            </tr>
          ) : (
            certificates.map(certificate => (
              <tr key={certificate.pk}>
                <td>{certificate.pk}</td>
                <td>{certificate.title}</td>
                <td>{certificate.description}</td>
                <td>{certificate.owner}</td>
                <td>{certificate.mentor}</td>
                <td>{certificate.date}</td>
                <td align="center">
                  <NewCertificateModal
                    create={false}
                    certificate={certificate}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmsRemovalModal
                    pk={certificate.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default CertificateList;