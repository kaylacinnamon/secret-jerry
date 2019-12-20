import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import "bootswatch/dist/lux/bootstrap.min.css"; 
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
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
            <img src="assets/Header.png" alt="header" id="header"></img>
            <br/>
            <Button onClick={this.handleCreateGame}>Create Game</Button>
            <InputGroup size="sm" className="mb-3" onChange={this.handleRoomIDChange}>
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm" name="Room ID">Room ID</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-3" onChange={this.handlePlayerNameChange}>
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <Button onClick={this.handleJoinGame}>Join Game</Button>
        </div>
        );
    }
}

export default App;