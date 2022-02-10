import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import {Link} from "react-router-dom";
import NewCertificateForm from "../components_certificates/NewCertificateForm";


class NewCertificateModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    const create = this.props.create;

    var title = "Edit Certificate";
    var button = <Button onClick={this.toggle}>Edit</Button>;
    if (create) {
      title = "Creating New Certificate";

      button = (
        <button
          type="button"
          className="btn btn-outline-primary float-right"
          onClick={this.toggle}
        >
          Add Certificate
        </button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewCertificateForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              certificate={this.props.certificate}
            />
          </ModalBody>
        </Modal>
        <div className="link">
          <button type="button" className="btn btn-outline-primary float-right" style={{marginLeft: "-510px", marginTop: "10px"}}>
             <Link to={"/"} > Back to homepage </Link>
          </button>
        </div>
      </Fragment>
    );
  }
}

export default NewCertificateModal;