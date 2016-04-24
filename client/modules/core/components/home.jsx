import React from 'react';

export default class Home extends React.Component {

  componentDidMount() {
    for (var key in this.refs) {
      componentHandler.upgradeElement(this.refs[key]);
    }

    componentHandler.upgradeDom();
  }

  render() {
    return (
      <div className="container">

        <div className="demo-card-wide mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">Welcome</h2>
          </div>
          <div className="mdl-card__supporting-text">
            <p>Gomoku is easy, just connect five of your stones in a line! Play against someone now!</p>
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" ref="txtUsernameContainer">
              <input className="mdl-textfield__input" id="txtUsername" />
              <label className="mdl-textfield__label" htmlFor="txtUsername">Enter username...</label>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" ref="txtPasswordContainer">
              <input className="mdl-textfield__input" id="txtPassword" type="password"
                pattern="//"
              />
              <label className="mdl-textfield__label" htmlFor="txtPassword">Enter password...</label>
              <span class="mdl-textfield__error">Input is not a number!</span>
            </div>

            <div>
              <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" ref="btnSignIn">
                Sign in
              </a>
              <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" ref="btnSignUp">
                Sign up
              </a>
            </div>
          </div>
        </div>
        <Accounts.ui.LoginForm />
      </div>
    );
  }
}

//
