import React from "react";
import Player from "./Player";
import { Consumer } from "./Context";

function PlayerList(props) {
  return (
    <Consumer>
      {(context) => (
        <React.Fragment>
          {context.map((player, index) => (
            <Player
              {...player}
              key={player.id.toString()}
              index={index}
              changeScore={props.changeScore}
              removePlayer={props.removePlayer}
              //is a player's scorre prop equal to the high score?
              isHighScore={props.highScore === player.score}
            />
          ))}
        </React.Fragment>
      )}
    </Consumer>
  );
}

export default PlayerList;
