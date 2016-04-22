import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <a href="/">Home</a>
        /
        <a href="/lobby">Lobby</a>
        /
        <a href="/game/571a3cb104c8b90f0f14cbd6">The game</a>
      </div>
    );
  }
}
