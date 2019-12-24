import React, { Component } from 'react';
import openSocket from 'socket.io-client';
// import logo from './logo.svg';
// import './App.css';


class App extends Component {

    state = {
        roomID: null,
        playerName: null
    };


    handleCreateGame = () => {
        console.log('Opening Socket to server');
        const socket = openSocket('http://192.168.1.126:4001');
        socket.emit('gameMaster')
    };

    handleRoomIDChange = (event) => {
        this.setState({roomID: event.target.value});
    }
    handlePlayerNameChange = () => {
        this.setState({playerName: event.target.value});
    }

    handleJoinGame = () => {
        console.log('Joining Game...');
        const socket = openSocket('http://192.168.1.126:4001');
        socket.emit('playerJoin', this.state.playerName);
    }
   
    render() {
        return (
        <div className="App">
            <button onClick={this.handleCreateGame}>Create Game</button>
            <br/>
            <br/>
            <div> Room ID </div>
            <input name="Room ID" onChange={this.handleRoomIDChange}/>
            <br/>
            <br/>
            <div> Name </div>
            <input onChange={this.handlePlayerNameChange}/>
            <br/>
            <button onClick={this.handleJoinGame}>Join Game</button>
        </div>
        );
    }
}

export default App;