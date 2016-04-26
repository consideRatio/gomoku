import React from 'react';
import Moment from 'moment';
import _string from 'lodash/string';

import Board from './board';

// TODO: Indicate current player
// TODO: Indicate player symbol
// TODO: Indicate winning tiles

export default class Game extends React.Component {
  render() {
    const game = this.props.game;

    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <div className="mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title">
              <h2 className="mdl-card__title-text">
                {game.players[0].username} vs {game.players[1].username}
              </h2>
            </div>
            <div>
              <Board
                size={19}
                moves={game.moves}
                onClick={this.props.actions.games.makeMove.bind(undefined, game._id)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// getDateFormatted (date) {
//     Moment.locale('en');
//     if (date)
//       return Moment(date).format('LL');
//     else
//       return null;
// }

// <p>Game ID {game._id}</p>
// <p>StartDate: {this.getDateFormatted(game.startDate)}</p>
// <p>EndDate: {this.getDateFormatted(game.endDate)}</p>
