import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import SignIn from "./SignIn";
import Events from "./Events";
import Event from "./Event";
import AddEvent from "./AddEvent";
import Home2 from "../components_categories/Home2";
import Home3 from "../components_certificates/Home3";


const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'component={Home} />
                <Route exact path='/signin'component={SignIn} />
                <Route exact path='/event'component={Event} />
                <Route exact path='/event/add'component={AddEvent} />
                <Route exact path='/event/edit'component={Events} />
                <Route exact path='/events/categories/add'component={Home2} />
                <Route exact path='/certificates'component={Home3} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;