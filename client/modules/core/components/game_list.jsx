import React from 'react';
import GameListEntry from './game_list_entry';

export default class GameList extends React.Component {
  render() {
    const title = this.props.public ? "Spectate others" : "Play yourself";

    return (
      <div className="demo-card-wide mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">{title}</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <ul className="mdl-list">
            {this.props.games.map((game) => (
              <GameListEntry key={game._id} game={game} public={this.props.public} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
