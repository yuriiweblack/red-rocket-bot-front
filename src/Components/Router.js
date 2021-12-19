import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import SignIn from "./SignIn";
import Events from "./Events";
import Certificates from "./Certificates";
// import EventsEdit from "./EventsEdit"


const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'component={Home} />
                <Route exact path='/events'component={Events} />
                <Route exact path='/certificates'component={Certificates} />
                <Route exact path='/signin'component={SignIn} />
                {/*<Route exact path='/events/edit'component={EventsEdit} />*/}
            </Switch>
        </BrowserRouter>
    )

}

export default Router;