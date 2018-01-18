import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "./components/App";
import NotFoun404 from "./components/NotFound404";

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
        <Route path="*" component={NotFoun404}/>
    </Switch>
</BrowserRouter></Provider>,document.getElementById("app"));
