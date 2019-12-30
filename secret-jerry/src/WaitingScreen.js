import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import { withRouter } from 'react-router-dom';

class WaitingScreen extends Component {
    state = {
        socket: null
    }

    componentDidMount() {
        const socket = openSocket(`http://${this.props.location.state.roomID}:4001`);
        this.setState({socket})
        socket.emit('playerJoin', `${this.props.location.state.playerName}`);
    }

    render() {
        return (
            <p> Waiting for host to start game...</p>
        )
    }
}

export default withRouter(WaitingScreen);