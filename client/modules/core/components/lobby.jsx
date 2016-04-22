import React from 'react';
import UserListContainer from '../containers/user_list.js';
import GameListContainer from '../containers/game_list.js';
// import UserListComponent from './user_list.jsx';

// const UserList = UserListContainer(UserListComponent);

const Lobby = () => (
  <div>
    <h2>Users</h2>
    <UserListContainer />
    <h2>Games</h2>
    <GameListContainer />
  </div>
);

export default Lobby;
