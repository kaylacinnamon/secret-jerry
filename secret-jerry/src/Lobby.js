import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import { Link, withRouter } from 'react-router-dom';


const playerMinimum = 5;

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
            <div id="lobby" className="card text-white bg-primary">
                <div className="card-header">Lobby</div>
                <div className="card-body">
                    <ol>
                        {Object.keys(this.state.players).map(socket => <li key={socket}> {this.state.players[socket]} </li>)}
                    </ol>
                    <br/>
                    <Link
                        to={{
                            pathname:"/main_game",
                            state: {
                                players: this.state.players
                            }
                        }}
                    >
                        <button
                            type="button"
                            id="startGameButton"
                            className="btn btn-secondary"
                            disabled={this.state.players < playerMinimum}
                        >
                                Start Game
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}


export default withRouter(Lobby);