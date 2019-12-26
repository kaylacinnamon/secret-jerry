import React, { Component } from 'react';
import PropTypes from 'prop-types';
import openSocket from 'socket.io-client';

class Lobby extends Component {
    static propTypes = {
        roomID: PropTypes.string.isRequired
    }

    state = {
        players: {},
        socket: null
    }

    handlePlayerAdded = players => {
        this.setState({players});
    }

    componentDidMount() {
        const socket = openSocket(`http://${this.props.roomID}:4001`);

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


export default Lobby