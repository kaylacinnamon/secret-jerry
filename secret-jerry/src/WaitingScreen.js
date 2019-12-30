import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import { withRouter } from 'react-router-dom';

class WaitingScreen extends Component {
    state = {
        socket: null
    }

    componentDidMount() {
        console.log(this.props.location.state.roomID);
        const socket = openSocket(`http://${this.props.location.state.roomID}:4001`);
        this.setState({socket})
        socket.emit('playerJoin', `${this.props.location.state.playerName}`);
    }

    render() {
        return (
            <div id="waitingPage" className="card text-white bg-primary">
                <div className="card-header">{this.props.location.state.playerName}</div>
                <div className="card-body">
                    <h2 className="card-title">Waiting for game to start...</h2>
                    <img src="assets/Waiting.gif" alt="waiting" id="waiting"></img>
                </div>
            </div>
        )
    }
}

export default withRouter(WaitingScreen);