import React from 'react';
import UserList from '../containers/user_list.js';
import GameList from '../containers/game_list.js';

const Lobby = () => (
  <div className="container">
    <h2>Users</h2>
    <UserList />
    <h2>Games</h2>
    <GameList />
  </div>
);

export default Lobby;
