import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import { withRouter } from 'react-router-dom';

class Lobby extends Component {
    state = {
        players: {},
        socket: null
    }

    handlePlayerAdded = players => {
        this.setState({players});
    }

    componentDidMount() {
        const socket = openSocket(`http://${window.location.hostname}:4001`);

        console.log('Sending game master event');
        socket.emit('gameMaster')
        socket.on('playerChange', this.handlePlayerAdded);

        this.setState({socket});
    }

    render() {
        return (
            <ol>
                {Object.keys(this.state.players).map(socket => <li key={socket}> {this.state.players[socket]} </li>)}
            </ol>
            
        )
    }
}


export default withRouter(Lobby);