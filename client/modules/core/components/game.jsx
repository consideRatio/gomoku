import React from 'react';
import Moment from 'moment';
import _string from 'lodash/string';
import cn from 'classnames';

import Board from './board';

// TODO: Indicate current player
// TODO: Indicate player symbol
// TODO: Indicate winning tiles

export default class Game extends React.Component {
  render() {
    const game = this.props.game;
    const blackClassNames = cn({
      'mdl-card__title-text': true,
      'active-player': game.moves.length % 2 === 0
    });
    const whiteClassNames = cn({
      'mdl-card__title-text': true,
      'active-player': game.moves.length % 2 === 1
    });

    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <div className="mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title game-title">
                <svg className="stone stone-title">
                  <use xlinkHref="#black" />
                </svg>
                <h2 className={blackClassNames}>
                  &nbsp;{`${game.players[0].username}`}&nbsp;
                </h2>
                <h2 className="mdl-card__title-text">
                  vs
                </h2>
                <h2 className={whiteClassNames}>
                  &nbsp;{`${game.players[1].username}`}&nbsp;
                </h2>
                <svg className="stone stone-title">
                  <use xlinkHref="#white" />
                </svg>
            </div>
            <div>
              <Board
                size={19}
                moves={game.moves}
                winningStones={game.winningStones}
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
