import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';


class App extends Component {

    handleCreateGame = () => {
        console.log('test');
    };

    render() {
        return (
        <div className="App">
            <button onClick={this.handleCreateGame}>Create Game</button>
        </div>
        );
    }
}

export default App;