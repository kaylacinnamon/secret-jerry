import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


const playerMinimum = 2;

class MainGame extends Component {
    state = {
        players: this.props.location.state.players,
        president: ""
    }

    componentDidMount() {
        const keys = Object.keys(this.state.players);
        const startingPresident = this.state.players[keys[Math.floor(Math.random()*keys.length)]];
        this.handleNewPresident(startingPresident);
    }

    handleNewPresident(president) {
        this.setState({president});
    }

    render() {
        return (
            <div>
                <p> The current president is: {this.state.president} </p>
                <br/>
                <p> {"<board goes here?>"} </p>
            </div>
        )
    }
}


export default withRouter(MainGame);