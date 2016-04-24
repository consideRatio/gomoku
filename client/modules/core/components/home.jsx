import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
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

// <!-- Textfield with Floating Label -->
// <form action="#">
//   <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
//     <input class="mdl-textfield__input" type="text" id="sample3">
//     <label class="mdl-textfield__label" for="sample3">Text...</label>
//   </div>
// </form>
