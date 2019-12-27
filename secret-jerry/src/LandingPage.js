import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class LandingPage extends Component {
    static propTypes = {
        roomID: PropTypes.string,
        playerName: PropTypes.string,
        handleCreateGame:  PropTypes.func.isRequired,
        handleRoomIDChange: PropTypes.func.isRequired,
        handlePlayerNameChange: PropTypes.func.isRequired,
        handleJoinGame: PropTypes.func.isRequired,
      };


    render() {
        return (
            <div id="landingPage">
                <br/>
                <div class="row">
                    <div class="col">
                        <div class="card bg-secondary mb-2">
                            <div class="card-header">Create Game</div>
                            <div class="card-body">
                                <h4 class="card-title">Create a New Game</h4>
                                <p class="card-text">Here's some info on how you can create a new game.</p>
                                <button type="button" onClick={this.props.handleCreateGame} id="createGameButton" class="btn btn-primary">Create Game</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card text-white bg-primary mb-2">
                            <div class="card-header">Join Game</div>
                            <div class="card-body">
                                <h4 class="card-title">Join a Game</h4>
                                <p class="card-text">Here's what you need to know to join a game.</p>
                                <InputGroup size="sm" className="mb-3" onChange={this.props.handleRoomIDChange} value={this.props.roomID}>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-sm" name="Room ID">Room ID</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                                <InputGroup size="sm" className="mb-3" onChange={this.props.handlePlayerNameChange} value={this.props.playerName}>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                                <button type="button" onClick={this.props.handleJoinGame} id="joinGameButton" class="btn btn-secondary">Join Game</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <br /><br />
                
            </div>
        )
    }
}

export default LandingPage;