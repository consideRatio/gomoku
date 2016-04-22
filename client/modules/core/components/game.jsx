import React from 'react';

export default class Game extends React.Component {
  render() {
    console.log(this);

    return (
      <div>
        Game {this.props.game._id}
      </div>
    );
  }
}
