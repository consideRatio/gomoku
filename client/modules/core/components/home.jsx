import React, {Component} from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home (Logged out)</h1>

        <h2>Sign up / Login</h2>
        <ul>
            <li>Username / password</li>
        </ul>

        <h2>Welcome</h2>
        This is Gomoku (animation)

        <h2>Rules</h2>
        <ul>
            <li>Win by getting 5 or more in a row (Free-style gomoku)</li>
        </ul>
      </div>
    );
  }
}
