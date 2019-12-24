import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import "bootswatch/dist/lux/bootstrap.min.css"; 
import WaitingScreen from './WaitingScreen'
import LandingPage from './LandingPage'
import Lobby from './Lobby';
import './App.css';


class App extends Component {

    state = {
      socket: null,
      isGameMaster: false,
      playerName: '',
      roomID: null
    };

    handleCreateGame = () => {
        console.log('Opening Socket to server');
        this.setState({isGameMaster: true})
    };

    handleRoomIDChange = event => {
        this.setState({roomID: event.target.value});
    };

    handlePlayerNameChange = event => {
        this.setState({playerName: event.target.value});
    };

    handleJoinGame = () => {
        console.log('Joining Game...');
        const socket = openSocket('http://192.168.1.126:4001');
        this.setState({socket})
        socket.emit('playerJoin', this.state.playerName);
    };

    render() {
        return (
            <div className="App">
              {!this.state.socket && !this.state.isGameMaster &&
               <LandingPage
                  roomID = {this.state.roomID}
                  playerName = {this.state.playerName}
                  handleCreateGame={this.handleCreateGame}
                  handleRoomIDChange = {this.handleRoomIDChange}
                  handlePlayerNameChange = {this.handlePlayerNameChange}
                  handleJoinGame = {this.handleJoinGame}
                />
              }
              {this.state.socket && !this.state.isGameMaster && <WaitingScreen/>}
              {this.state.isGameMaster && <Lobby/>}
            </div>
        );
    }
}

export default App;