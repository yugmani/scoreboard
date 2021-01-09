import React, { Component } from "react";

export class AddPlayerForm extends Component {
  playerInput = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.playerInput.current.value);
    e.currentTarget.reset();
  };

  render() {
    //  console.log(this.playerInput);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref={this.playerInput}
            placeholder="Enter a player's name"
          />

          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  }
}

export default AddPlayerForm;
