import React, { Component } from "react";
import {Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

class Event extends Component {
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
              <Link to={"/event"} className="nav-link">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/event/add"} className="nav-link">
                Add event
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/event/edit"} className="nav-link">
                Edit event
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"events/categories/add"} className="nav-link">
                Add category
              </Link>
            </li>
          </div>
        </nav>
        <h1>All Events</h1>
        <div className="container mt-3">
          <Switch>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Event;