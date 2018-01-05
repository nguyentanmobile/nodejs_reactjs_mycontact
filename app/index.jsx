import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "./components/App";
import NotFound from "./components/NotFound";

ReactDOM.render(<BrowserRouter>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="*" component={NotFound}/>
    </Switch>
</BrowserRouter>,document.getElementById("app"));

