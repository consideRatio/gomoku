import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <a href="/">Home</a>
        /
        <a href="/lobby">Lobby</a>
        /
        <a href="/game/5717de2de056ab31d0df712c">The game</a>
      </div>
    );
  }
}
