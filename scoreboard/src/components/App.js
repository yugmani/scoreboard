import React, { Component } from "react";
import { Provider } from "./Context";

import Header from "./Header";
// import PlayerList from "./PlayerList";
import AddPlayerForm from "./AddPlayerForm";
import Player from "./Player";

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1,
      },
      {
        name: "Treasure",
        score: 0,
        id: 2,
      },
      {
        name: "Ashley",
        score: 0,
        id: 3,
      },
      {
        name: "James",
        score: 0,
        id: 4,
      },
    ],
  };

  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => {
      return {
        score: (prevState.players[index].score += delta),
      };
    });
  };

  handleAddPlayer = (name) => {
    this.setState((prevState) => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: (this.prevPlayerId += 1),
          },
        ],
      };
    });
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id !== id),
      };
    });
  };

  getHighScore = () => {
    const scores = this.state.players.map((p) => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }

    return null;
  };

  render() {
    const highScore = this.getHighScore();

    return (
      <Provider value={this.state.players}>
        <div className="scoreboard">
          <Header />

          {/* players list */}
          {this.state.players.map((player, index) => (
            <Player
              name={player.name}
              score={player.score}
              id={player.id}
              key={player.id.toString()}
              index={index}
              removePlayer={this.handleRemovePlayer}
              changeScore={this.handleScoreChange}
              //is a player's scorre prop equal to the high score?
              isHighScore={highScore === player.score}
            />
          ))}

          <AddPlayerForm addPlayer={this.handleAddPlayer} />
        </div>
      </Provider>
    );
  }
}

export default App;
