import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './index.css';
import App from './components/App';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter>
    <Switch>
        <Route exact path="/" component={App}/>
        <Route path="*" component={NotFound}/>
    </Switch>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
