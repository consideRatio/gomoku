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
      <div>
        <div className="container">
          <div className="game-header">
            <span className="player1">{game.players[0].username}</span>
            <span className="player2">{game.players[1].username}</span>
          </div>
        </div>

        <Board
          size={19}
          moves={game.moves}
          onClick={this.props.makeMove.bind(undefined, game._id)}
        />
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
