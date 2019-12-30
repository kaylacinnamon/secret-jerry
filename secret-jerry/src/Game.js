import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import { withRouter } from 'react-router-dom';


const playerMinimum = 2;

class Game extends Component {
    state = {
        players: this.props.location.state.players,
    }

    componentDidMount() {
        console.dir(this.state);
        const startingPresident = this.state.players[Math.floor(Math.random()*this.state.players.length)];
        handleNewPresident(startingPresident);
    }

    handleNewPresident(president) {
        this.setState({president});
    }

    render() {
        return (
            <div>
                <p> The current president is: {this.state.president} </p>
            </div>
        )
    }
}


export default withRouter(Game);