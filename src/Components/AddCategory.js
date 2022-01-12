import React, {Component, useState} from 'react';
import { withFormik, Form, Field } from 'formik';
import {Link} from "react-router-dom";

const form_id2 = 'form_id2';
class MaintenanceForm extends Component {

  editOnClick = (category) => {
    category.preventDefault()
    const data = !(this?.props?.status?.edit)
    this.props.setStatus({
      edit: data,
    })
  }

  cancelOnClick = (category) => {
    category.preventDefault();
    this.props.resetForm();
    this.props.setStatus({
      edit: false,
    });
  }

  _renderAction() {
    return (
      <React.Fragment>
        <div className="form-statusbar">
        {
          this?.props?.status?.edit
          ?
          <React.Fragment>
            <button className="btn btn-primary btn-sm" type="submit" form={form_id2} style={{marginRight: "10px", marginBottom: "30px"}}>Save</button>
            <button className="btn btn-danger btn-sm" onClick={this.cancelOnClick} style={{marginLeft: "0px", marginBottom: "30px"}}>Cancel</button>
          </React.Fragment>
          :
          <button className="btn btn-primary btn-sm" onClick={this.editOnClick} style={{marginLeft: "0px", marginBottom: "30px"}}>Add</button>
        }
        </div>
        <div className="link">
          <button className="btn btn-outline-primary" >
              <Link to={"/event"} className="link-light"> Back to events
              </Link>
          </button>
        </div>
      </React.Fragment>
    );
  }

  _renderFormView = () => {
    return (
        <React.Fragment>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Title</label>
            <div className="col-sm-10">
              <label type="text" name="title" className="form-control">
                {this?.props?.fields?.title}
              </label>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-10">
              <label type="text" name="brand_name" className="form-control">
                {this?.props?.fields?.description}
              </label>
            </div>
          </div>
        </React.Fragment>
    );
  }

  _renderFormInput = () => {
    return (
      <React.Fragment>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Title:</label>
          <div className="col-sm-10">
            <Field type="text" name="title" className="form-control" placeholder="Title" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Description:</label>
          <div className="col-sm-10">
            <Field type="text" name="description" className="form-control" placeholder="Description" />
          </div>
        </div>
     </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <center><h2 className="title2">Categories:</h2></center>
        {this._renderAction()}
        <Form id={form_id2}>
        {
          this?.props?.status?.edit
          ?
          this._renderFormInput()
          :
          this._renderFormView()
        }
        </Form>
      </React.Fragment>
    );
  }
}

const FormikForm2 = withFormik({
  mapPropsToStatus: (props) =>  {
    return {
      edit: props?.edit || false,
    }
  },
  mapPropsToValues: (props) => {
    return {
      title: props.fields.title,
      description: props.fields.description,
    }
  },
  enableReinitialize: true,
  handleSubmit: (values, { props, ...actions }) => {
    props.updateFields(values);
    actions.setStatus({
      edit: false,
    });
  }
})(MaintenanceForm);


export default FormikForm2;