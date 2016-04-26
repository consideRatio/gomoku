import React from 'react';
import UserList from '../containers/user_list.js';
import GameList from '../containers/game_list.js';

const Lobby = () => (
  <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet">
      <UserList />
    </div>
    <div className="mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet">
      <GameList public={false} />
    </div>
    <div className="mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet">
      <GameList public={true} />
    </div>
  </div>
);

export default Lobby;
