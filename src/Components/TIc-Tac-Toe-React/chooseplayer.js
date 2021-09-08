import React, { Component } from "react";

class Player extends Component {
  handleForm(e) {
    e.preventDefault();
    this.props.player(e.target.player.value);
  }
  render() {
    return (
      <form onSubmit={(e) => this.handleForm(e)}>
        <input type="radio" name="player" value="O" />

        <input
          style={{
            backgroundColor: "#97EC5B",
            margin: "20px",
            borderRadius: "20px",
          }}
          type="submit"
          value="Start"
        />
      </form>
    );
  }
}

export default Player;
