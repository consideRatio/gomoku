import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';

export default class MainLayout extends React.Component {
  componentDidMount() {
    // Required by Material-UI Lite JS-plugin
    for (var key in this.refs) {
      componentHandler.upgradeElement(this.refs[key]);
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      challengeConsidered: null
    };
  }

  componentDidUpdate() {
    this.handleChallenges();
  }

  handleChallenges() {
    /*
      Task: To display challenge dialogs
    */

    // --- Section: React to incomming challenges
    const incommingChallenge = this.props.challenges.find((c) => {
      return c.status === "pending" && c.villian._id === Meteor.userId();
    });

    // Are a challenge dialog already open?
    if (this.state.challengeConsidered) {
      if (!incommingChallenge) {
        this.hideChallengeDialog();
      }
    } else {
      if (incommingChallenge) {
        this.showChallengeDialog(incommingChallenge);
      }
    }

    // --- Section: React to challenge responses
    const answeredChallenge = this.props.challenges.find((c) => {
      return c.status !== "pending" && c.hero._id === Meteor.userId();
    });

    if (answeredChallenge) {
      this.props.actions.challenges.acknowledge(answeredChallenge._id);
    }
  }

  hideChallengeDialog() {
    this.refs.diagChallengeResponse.close();
    this.setState({challengeConsidered: null});
  }

  showChallengeDialog(incommingChallenge) {
    this.refs.diagChallengeResponse.showModal();
    this.setState({challengeConsidered: incommingChallenge});
  }

  challengeResponseHandler(accepted) {
    console.log(`Component: MainLayout - ${accepted ? "Accepted" : "Rejected"} challenge`);
    this.props.actions.challenges.respond(this.state.challengeConsidered._id, accepted);
    this.hideChallengeDialog();
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span href="/" className="mdl-layout-title">
              {Meteor.user() ?
                `Gomoku (${Meteor.user().username})` :
                "Gomoku"
              }
            </span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <a className="mdl-navigation__link" href="/">Home</a>
              <a className="mdl-navigation__link" href="/lobby">Lobby</a>
            </nav>
          </div>
        </header>
        <main className="mdl-layout__content">
          <div className="page-content">{this.props.content()}</div>
        </main>

        <dialog ref="diagChallengeResponse" className="mdl-dialog">
          <h4 className="mdl-dialog__title">Challenged!</h4>
          <div className="mdl-dialog__content">
            <p>
              Accept challenge?
            </p>
          </div>
          <div className="mdl-dialog__actions">
            <button ref="btnAcceptChallenge" onClick={this.challengeResponseHandler.bind(this, true)} type="button" className="mdl-button">Accept</button>
            <button ref="btnRejectChallenge" onClick={this.challengeResponseHandler.bind(this, false)} type="button" className="mdl-button">Reject</button>
          </div>
        </dialog>

      </div>
    );
  }
}

export default MainLayout;

// <button id="show-dialog" onClick={this.showChallengeDialog.bind(this)} type="button" className="mdl-button">Show Dialog</button>

// <footer className="mdl-mini-footer">
//   <div className="mdl-mini-footer__left-section">
//     <div className="mdl-logo">Title</div>
//     <ul className="mdl-mini-footer__link-list">
//       <li><a href="#">Help</a></li>
//       <li><a href="#">Privacy & Terms</a></li>
//     </ul>
//   </div>
// </footer>
