import React from 'react';

import cn from 'classnames';

export default class Intersection extends React.Component {
  render() {
    console.log(this.props.move);

    const svgClassNames = cn({
      stone: !!this.props.move
    });

    return (
      <svg className={svgClassNames}>
        <use xlinkHref={this.props.moveIndex % 2 == 0 ? '#black' : '#white'} />
      </svg>
    );
  }
}
