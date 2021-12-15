import React, {Component, useState} from 'react';
import { withFormik, Form, Field } from 'formik';
import '../css/home.css';

const form_id = 'form_id';
class MaintenanceForm extends Component {

  editOnClick = (event) => {
    event.preventDefault()
    const data = !(this?.props?.status?.edit)
    this.props.setStatus({
      edit: data,
    })
  }

  cancelOnClick = (event) => {
    event.preventDefault();
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
            <button className="btn btn-primary btn-sm" type="submit" form={form_id} style={{marginRight: "10px", marginBottom: "30px"}}>Save</button>
            <button className="btn btn-danger btn-sm" onClick={this.cancelOnClick} style={{marginLeft: "0px", marginBottom: "30px"}}>Cancel</button>
            {/*  <button type="button" className="btn-close" aria-label="Close" onClick={this.cancelOnClick} style={{marginLeft: "8px", marginBottom: "40px"}}></button>*/}
          </React.Fragment>
          :
          <button className="btn btn-primary btn-sm" onClick={this.editOnClick} style={{marginLeft: "0px", marginBottom: "30px"}}>Edit</button>
        }
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
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Date/time</label>
          <div className="col-sm-10">
            <label type="text" name="device_type" className="form-control">
              {this?.props?.fields?.date_time}
            </label>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Category</label>
          <div className="col-sm-10">
            <label type="text" name="device_type" className="form-control">
              {this?.props?.fields?.category}
            </label>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Link</label>
          <div className="col-sm-10">
            <label type="text" name="device_type" className="form-control">
              {this?.props?.fields?.link}
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
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Date/time:</label>
          <div className="col-sm-10">
            <Field type="text" name="date_time" className="form-control" placeholder="Date_time" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Category:</label>
          <div className="col-sm-10">
            <Field type="text" name="category" className="form-control" placeholder="Category" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Link:</label>
          <div className="col-sm-10">
            <Field type="text" name="link" className="form-control" placeholder="Link" />
          </div>
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <center><h2>Events:</h2></center>
        {this._renderAction()}
        <Form id={form_id}>
        {
          this?.props?.status?.edit
          ?
          this._renderFormInput()
          :
          this._renderFormView()
        }
        </Form>

          {/*This code output inner structure events to and after editable in format JSON*/}

        {/*<h4>Current value</h4>*/}
        {/*<div>*/}
        {/*  <pre>*/}
        {/*    <code>{JSON.stringify(this.props.fields, null, 2)}</code>*/}
        {/*  </pre>*/}
        {/*</div>*/}

      </React.Fragment>
    );
  }
}

const FormikForm = withFormik({
  mapPropsToStatus: (props) =>  {
    return {
      edit: props?.edit || false,
    }
  },
  mapPropsToValues: (props) => {
    return {
      title: props.fields.title,
      description: props.fields.description,
      date_time: props.fields.date_time,
      category: props.fields.category,
      link: props.fields.link,
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


export default FormikForm;

