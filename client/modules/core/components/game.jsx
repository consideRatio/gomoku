import React from 'react';
import Moment from 'moment';

import Board from './board';

export default class Game extends React.Component {
  getDateFormatted (date) {
      Moment.locale('de');
      return Moment(date).format('LL');
  }

  render() {
    const game = this.props.game;

    return (
      <div>
        <h1>
          <span>{game.players[0].username} (X)</span>
          <span> vs </span>
          <span>{game.players[1].username} (O)</span>
        </h1>

        <Board moves={game.moves} />

        <p>
          <small>
            Game ID {game._id},
            StartDate: {this.getDateFormatted(game.startDate)},
            EndDate: {this.getDateFormatted(game.endDate)}
          </small>
        </p>
      </div>
    );
  }
}
