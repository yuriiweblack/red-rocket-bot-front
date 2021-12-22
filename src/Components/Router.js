import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import SignIn from "./SignIn";
import Events from "./Events";
import Certificates from "./Certificates";
import Event from "./Event";
import Addevent from "./Add-event";

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'component={Home} />
                <Route exact path='/event'component={Event} />
                <Route exact path='/add'component={Addevent} />
                <Route exact path='/edit'component={Events} />
                <Route exact path='/certificates'component={Certificates} />
                <Route exact path='/signin'component={SignIn} />
            </Switch>
        </BrowserRouter>
    )

}

export default Router;