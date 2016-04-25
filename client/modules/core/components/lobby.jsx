import React from 'react';
import UserList from '../containers/user_list.js';
import GameList from '../containers/game_list.js';

const Lobby = () => (
  <div className="container">

    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
        <UserList />
      </div>
      <div className="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
        <GameList />
      </div>
    </div>

  </div>
);

export default Lobby;
