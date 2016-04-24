import React from 'react';

export default class Home extends React.Component {

  componentDidMount() {
    // Required by Material-UI Lite JS-plugin
    for (var key in this.refs) {
      componentHandler.upgradeElement(this.refs[key]);
    }
  }

  componentDidUpdate() {
    this.componentDidMount();
  }

  onSignIn(event) {
    event.preventDefault();
    this.props.actions.users.signIn(this.refs.txtUsername.value, this.refs.txtPassword.value);
  }
  onSignUp() {
    this.props.actions.users.signUp(this.refs.txtUsername.value, this.refs.txtPassword.value);
  }
  onSignOut(event) {
    event.preventDefault();
    this.props.actions.users.signOut();
  }

  renderWelcome() {
    return (
      <div className="demo-card-wide mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">Welcome</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <p>Gomoku is easy, just connect five of your stones in a line! Play against someone now!</p>
        </div>
      </div>
    );
  }

  renderAccount() {
    const content = this.props.signedIn ? this.renderSignOut : this.renderSignIn;

    return this.renderAccountBase(content);
  }

  renderAccountBase(content) {
    return (
      <div className="demo-card-wide mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">Account</h2>
        </div>
        <div className="mdl-card__supporting-text">
          {content.apply(this)}
        </div>
      </div>
    );
  }

  renderSignIn() {
    return (
      <form onSubmit={this.onSignIn.bind(this)}>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" ref="txtUsernameContainer">
          <input
            className="account-textfield mdl-textfield__input"
            id="txtUsername"
            ref="txtUsername"

          />
          <label className="mdl-textfield__label" htmlFor="txtUsername">Enter username...</label>
          <span className="mdl-textfield__error">Invalid username!</span>
        </div>
        <div className="account-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label" ref="txtPasswordContainer">
          <input
            className="mdl-textfield__input"
            id="txtPassword"
            ref="txtPassword"
            type="password"

          />
          <label className="mdl-textfield__label" htmlFor="txtPassword">Enter password...</label>
          <span className="mdl-textfield__error">Invalid password!</span>
        </div>
        <div>
          <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" ref="btnSignIn">
            Sign in
          </button>
          <button onClick={this.onSignUp.bind(this)} type="button" className="mdl-button mdl-js-button mdl-js-ripple-effect" ref="btnSignUp">
            Sign up
          </button>
        </div>
      </form>
    );
  }

  renderSignOut() {
    return (
      <form onSubmit={this.onSignOut.bind(this)}>
        <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" ref="btnSignOut">
          Sign out
        </button>
      </form>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
            {this.renderWelcome()}
          </div>
          <div className="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
            {this.renderAccount()}
          </div>
        </div>
      </div>
    );
  }
}

// <div>
//   <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" ref="btnSignOut">
//     Sign out
//   </a>
//   <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" ref="btnChangePassword">
//     Change password
//   </a>
// </div>

// <div className="mdl-card__actions mdl-card--border">
//
// </div>

// <button className="mdl-button mdl-js-button mdl-js-ripple-effect" ref="btnChangePassword">
//   Change password
// </button>
