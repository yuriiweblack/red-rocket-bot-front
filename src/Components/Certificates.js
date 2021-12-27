import React, { Component } from "react";
import {BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";



class Certificate extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>  
            <li className="nav-item">
              <Link to={"/certificates"} className="nav-link">
                Certificate
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add-certificate"} className="nav-link">
                Add Certificate
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/edit-certificate"} className="nav-link">
                Edit Certificate
              </Link>
            </li>
          </div>
        </nav>

        <h1>All Certificates</h1>
        <div className="container mt-3">
          <Switch>

          </Switch>
        </div>
      </div>
    );
  }
}

export default Certificate;