import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Lobby from './Lobby';
import Game from './Game';
import WaitingScreen from './WaitingScreen'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <img src="assets/Header.png" alt="header" id="header"></img>

        <Router>
            <Switch>
            <Route path="/lobby">
                <Lobby />
            </Route>
            <Route path="/waiting_room">
                <WaitingScreen />
            </Route>
            <Route path="/">
                <App />
            </Route>
            <Route path="/game">
                <Game />
            </Route>
            </Switch>
        </Router>
    </div>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
