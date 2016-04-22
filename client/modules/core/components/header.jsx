import React from 'react';
import {Meteor} from 'meteor/meteor';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <a href="/">Home</a> - <a href="/Lobby">Lobby</a>

      </div>
    );
  }
}
