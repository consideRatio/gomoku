import React from 'react';

import Intersection from './intersection';

export default class Board extends React.Component {
  generateBoard() {
    let arr = [];
    const count = Math.pow(this.props.size, 2);

    for (let i = 0; i < count; i++) {
      arr.push((<Intersection key={i}>{i}</Intersection>));
    }

    return arr;
  }
  renderBoard() {
    console.log(this.generateBoard());
    console.log(...this.generateBoard());
    return this.generateBoard();
  }


  render() {
    return (
      <div>
        <p>Board {this.props.size}</p>

      {this.generateBoard()}
      </div>
    );
  }
}
