import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "./components/App";
import NotFound from "./components/NotFound";

import {createStore,applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {reducers} from "./reducers/index";

import 'babel-polyfill';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas/indexSaga';

const sagaMiddleware = createSagaMiddleware();
let middleware = applyMiddleware(sagaMiddleware);
const store = createStore(reducers,middleware);
sagaMiddleware.run(sagas);


ReactDOM.render(<Provider store = {store}>
<BrowserRouter>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="*" component={NotFound}/>
    </Switch>
</BrowserRouter></Provider>,document.getElementById("app"));

