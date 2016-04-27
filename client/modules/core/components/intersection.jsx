import React from 'react';

import cn from 'classnames';

export default class Intersection extends React.Component {
  render() {
    const svgClassNames = cn({
      stone: !!this.props.move,
      winningStone: this.props.winningStone
    });

    return (
      <svg className={svgClassNames} onClick={this.props.onClick}>
        <use xlinkHref={this.props.moveIndex % 2 == 0 ? '#black' : '#white'} />
      </svg>
    );
  }
}
