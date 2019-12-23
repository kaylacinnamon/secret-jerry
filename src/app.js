import React, { Component } from 'react';
import openSocket from 'socket.io-client';
// import logo from './logo.svg';
// import './App.css';


class App extends Component {

    handleCreateGame = () => {
        console.log('Opening Socket to server');
        const socket = openSocket('http://localhost:4001');

    };

    

    render() {
        return (
        <div className="App">
            <button onClick={this.handleCreateGame}>Create Game</button>
        </div>
        );
    }
}

export default App;