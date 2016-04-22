import React from 'react';

import Intersection from './intersection';

import _ from 'lodash/array';

export default class Board extends React.Component {
  generateBoard() {
    let arr = [];
    const count = Math.pow(this.props.size, 2);

    for (let i = 0; i < count; i++) {
      const moveIndex = _.findIndex(this.props.moves, (move) => move.intersection == i);

      if (moveIndex !== -1) {
        const move = this.props.moves[moveIndex];
        arr.push((<Intersection key={i} move={move} moveIndex={moveIndex} />));
      } else {
        arr.push((<Intersection key={i} />));
      }
    }

    return arr;
  }


  render() {
    return (
      <div>
        <p>Board {this.props.size}</p>
        <div className="gomoku-board">
          {this.generateBoard()}
        </div>
      </div>
    );
  }
}
