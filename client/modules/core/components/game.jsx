import React from 'react';
import Moment from 'moment';
import _string from 'lodash/string';

import Board from './board';


export default class Game extends React.Component {
  getDateFormatted (date) {
      Moment.locale('en');
      if (date)
        return Moment(date).format('LL');
      else
        return null;
  }

  handleClick(gameId, intersection) {
  }

  render() {
    const game = this.props.game;

    return (
      <div>
        <h1>
          <span>(X) {game.players[0].username}</span>
          <span> vs </span>
          <span>{game.players[1].username} (O)</span>
        </h1>

        <Board moves={game.moves} size={19} onClick={this.props.makeMove.bind(undefined, game._id)}/>

        <small>
          <p>
            Game ID {game._id}
          </p>
          <p>
            StartDate: {this.getDateFormatted(game.startDate)}
          </p>
          <p>
            EndDate: {this.getDateFormatted(game.endDate)}
          </p>
        </small>
      </div>
    );
  }
}
