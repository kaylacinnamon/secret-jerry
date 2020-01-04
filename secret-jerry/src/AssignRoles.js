import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

let roles = [
    {player: "", type: "v"},
    {player: "", type: "de"},
    {player: "", type: "op"},
    {player: "", type: "op"},
    {player: "", type: "op"}
]

class AssignRoles extends Component {
    state = {
        players: this.props.location.state.players,
        
    }

    componentDidMount() {
        const keys = Object.keys(this.state.players);
        this.populateRoles(roles, keys);
    }

    populateRoles(roles, players) {
        let opObj = {player: "", type: "op"};
        let deObj = {player: "", type: "de"};

        // add an op if there are at least 6 players
        if (players.length > 5) {
            roles.push(opObj);
        }
        // add a de if there are at least 7 players
        if (players.length > 6) {
            roles.push(deObj);
        }
        // add an op if there are at least 8 players
        if (players.length > 7) {
            roles.push(opObj);
        }
        // add a de if there are at least 9 players
        if (players.length > 8) {
            roles.push(deObj);
        }
        // add an op if there are 10 players
        if (players.length > 9) {
            roles.push(opObj);
        }

        // randomly assign roles
        let tmpPlayers = players;

        for (let i = 0; i < players.length; ++i) {
            let tmp = tmpPlayers[Math.floor(Math.random()*tmpPlayers.length)];
            roles[i].player = tmp;
            tmpPlayers = tmpPlayers.filter(item => item !== tmp);
        }

    }

    render() {
        return (
            <div id="assignPage" className="card text-white bg-primary">
                <div className="card-body">
                    <h1 className="card-title">Currently assigning roles...</h1>
                    <img src="assets/Waiting.gif" alt="waiting" id="waiting"></img>
                </div>
            </div>
        )
    }
}


export default withRouter(AssignRoles);