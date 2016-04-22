import React from 'react';
import User from './user';

export default class UserList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((user) => (
            <User key={user._id} user={user} />
          ))}
        </ul>
      </div>
    );
  }
}
