import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Player from "./Player";

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
};

const App = () => {
  return (
    <div className="scoreboard">
      <Header title="scoreboard" totalPlayers={2} />
      <Player name="Prasiddha" score={78} />
      <Player name="Prayash" score={77} />
      <Player name="Andrew" score={67} />
      <Player name="John" score={65} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
