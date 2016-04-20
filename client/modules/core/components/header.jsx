import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

export default class Header extends Component {
  render() {
    return (
      <div>
        <a href="/">Home</a> - <a href="/Lobby">Lobby</a>

      </div>
    );
  }
}
