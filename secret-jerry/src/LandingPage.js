import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
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
                <Button onClick={this.props.handleCreateGame}>Create Game</Button>
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
                <Button onClick={this.props.handleJoinGame}>Join Game</Button>
            </div>
        )
    }
}

export default LandingPage;