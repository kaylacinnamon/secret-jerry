import React, { Component } from 'react';
import "bootswatch/dist/lux/bootstrap.min.css"; 
import { Link, withRouter} from "react-router-dom";


class App extends Component {
    state = {
      socket: null,
      isGameMaster: false,
      playerName: '',
      roomID: ''
    };

    handleCreateGame = () => {
        console.log('Opening Socket to server');
        this.setState({isGameMaster: true, roomID: window.location.hostname})
    };

    handleRoomIDChange = event => {
        this.setState({roomID: event.target.value});
    };

    handlePlayerNameChange = event => {
        this.setState({playerName: event.target.value});
    };

    render() {
        return (
            <div id="landingPage">
                <br/>
                <div className="row">
                    <div className="col">
                        <div className="card bg-secondary mb-2">
                            <div className="card-header">Create Game</div>
                            <div className="card-body">
                                <h4 className="card-title">Create a New Game</h4>
                                <p className="card-text">Here's some info on how you can create a new game.</p>
                                <Link
                                    to={{
                                        pathname:"/lobby",
                                    }}
                                >
                                    <button
                                        type="button"
                                        onClick={this.props.handleCreateGame}
                                        id="createGameButton"
                                        className="btn btn-primary">Create Game
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white bg-primary mb-2">
                            <div className="card-header">Join Game</div>
                            <div className="card-body">
                                <h4 className="card-title">Join a Game</h4>
                                <p className="card-text">Here's what you need to know to join a game.</p>
                                <form>
                                    <fieldset>
                                        <div className="form-group">
                                            <label htmlFor="roomID">Room ID</label>
                                            <input type="text"  className="form-control" id="roomID" value={this.state.roomID} onChange={this.handleRoomIDChange}></input>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="playerName"> Name </label>
                                            <input type="text" className="form-control" id="playerName" value={this.state.playerName} onChange={this.handlePlayerNameChange}></input>
                                        </div>
                                    </fieldset>
                                </form>
                                <Link
                                    to={{
                                        pathname:"/waiting_room",
                                        state: {
                                            roomID: this.state.roomID,
                                            playerName: this.state.playerName
                                        }
                                    }}
                                >
                                    <button
                                        type="button"
                                        disabled={!this.state.roomID || !this.state.playerName}
                                        id="joinGameButton"
                                        className="btn btn-secondary">Join Game</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(App);
