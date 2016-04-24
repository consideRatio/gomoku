import React from 'react';
import _array from 'lodash/array';

import Intersection from './intersection';

import GamesActions from '../actions/games';


export default class Board extends React.Component {
  generateBoard() {
    let arr = [];
    const count = Math.pow(this.props.size, 2);

    for (let i = 0; i < count; i++) {
      const moveIndex = _array.findIndex(this.props.moves, (move) => move.intersection == i);

      if (moveIndex !== -1) {
        const move = this.props.moves[moveIndex];
        arr.push((<Intersection key={i} onClick={this.props.onClick.bind(undefined, i)} move={move} moveIndex={moveIndex} />));
      } else {
        arr.push((<Intersection key={i} onClick={this.props.onClick.bind(undefined, i)}/>));
      }
    }

    return arr;
  }


  render() {
    return (
      <div>
        <div className="gomoku-board">
          {this.generateBoard()}
        </div>
      </div>
    );
  }
}
