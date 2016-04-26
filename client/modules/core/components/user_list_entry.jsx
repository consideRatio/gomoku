import React from 'react';

export default class UserListEntry extends React.Component {
  componentDidMount() {
    // Required by Material-UI Lite JS-plugin
    for (var key in this.refs) {
      componentHandler.upgradeElement(this.refs[key]);
    }
  }

  render() {
    return (
      <li className="mdl-list__item mdl-list__item--two-line">
        <span className="mdl-list__item-primary-content">
          <button onClick={this.props.challenge.bind(undefined, this.props.user._id)} ref="btnChallenge" className="list-entry-button mdl-list__item-secondary-action mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored">
            <i className="material-icons">pets</i>
          </button>
          <span>{this.props.user.username}</span>
          <span className="mdl-list__item-sub-title">TODO: Available / In game</span>
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
