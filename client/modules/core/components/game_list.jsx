import React from 'react';
import GameListEntry from './game_list_entry';

export default class GameList extends React.Component {
  render() {
    const games = this.props.games.map((game) => {
      return {
        _id: game._id,
        player1: game.players[0].username,
        player2: game.players[1].username
      }
    });

    return (
      <div className="demo-card-wide mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">Active games</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <ul className="mdl-list">
            {games.map((game) => (
              <GameListEntry key={game._id} game={game} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
