import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome</h2>
        This is Gomoku (animation)

        <Accounts.ui.LoginForm />

        <h2>Rules</h2>
        <ul>
            <li>Win by getting 5 or more in a row (Free-style gomoku)</li>
        </ul>
      </div>
    );
  }
}
