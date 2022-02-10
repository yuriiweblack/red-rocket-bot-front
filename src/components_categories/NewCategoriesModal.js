import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewCategoriesForm from "../components_categories/NewCategoriesForm";
import {Link} from "react-router-dom";


class NewCategoriesModal extends Component {
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

    var title = "Edit Category";
    var button = <Button onClick={this.toggle}>Edit</Button>;
    if (create) {
      title = "Creating New Category";

      button = (
        <button
          type="button"
          className="btn btn-outline-primary float-right"
          onClick={this.toggle}
        >
          Add Category
        </button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewCategoriesForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              category={this.props.category}
            />
          </ModalBody>
        </Modal>
        <div className="link">
          <button type="button" className="btn btn-outline-primary float-right" style={{marginLeft: "-510px", marginTop: "10px"}}>
             <Link to={"/event"} > Back to events </Link>
          </button>
        </div>
      </Fragment>
    );
  }
}

export default NewCategoriesModal;