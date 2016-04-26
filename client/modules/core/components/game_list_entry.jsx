import React from 'react';
import moment from 'moment';

export default class GameListEntry extends React.Component {
  componentDidMount() {
    // Required by Material-UI Lite JS-plugin
    for (var key in this.refs) {
      componentHandler.upgradeElement(this.refs[key]);
    }
  }

  render() {
    const icon = this.props.public ? "remove_red_eye" : "pets";

    return (
      <li className="mdl-list__item mdl-list__item--two-line">
        <span className="mdl-list__item-primary-content">
          <a ref="btnViewGame" href={`/game/${this.props.game._id}`} className="list-entry-button mdl-list__item-secondary-action mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored">
            <i className="material-icons">{icon}</i>
          </a>
          <span>{this.props.game.players[0].username} vs {this.props.game.players[1].username}</span>
          <span className="mdl-list__item-sub-title">{`Started: ${moment(this.props.game.startDate).fromNow()}`}</span>
        </span>
      </li>
    );
  }
}


// Accept / Decline icon suggestions
// done
// not interested

// Challenge icon suggestions
// pets JA
// flash on JA
// room service NJA
// notifications NEJ
// feedback NJA
