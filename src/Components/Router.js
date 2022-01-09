import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import SignIn from "./SignIn";
import Events from "./Events";
import Certificates from "./Certificates";
import Event from "./Event";
import AddEvent from "./AddEvent";
import AddCertificate from "./AddCertificate";
import Category from "./Category";

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'component={Home} />
                <Route exact path='/event'component={Event} />
                <Route exact path='/event/add'component={AddEvent} />
                <Route exact path='/event/edit'component={Events} />
                <Route exact path='/event/categories/add'component={Category} />
                <Route exact path='/certificates'component={Certificates} />
                <Route exact path='/add-certificate'component={AddCertificate} />
                <Route exact path='/signin'component={SignIn} />
            </Switch>
        </BrowserRouter>
    )

}

export default Router;