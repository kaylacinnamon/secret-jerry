import React, { Component } from 'react';
import openSocket from 'socket.io-client';

class WaitingScreen extends Component {
    state = {
        socket: null
    }

    componentDidMount() {
        const socket = openSocket(`http://192.168.1.105:4001`);
        this.setState({socket})
        socket.emit('playerJoin', 'Jerry');
    }

    render() {
        return (
            <p> Waiting for host to start game...</p>
        )
    }
}

export default WaitingScreen