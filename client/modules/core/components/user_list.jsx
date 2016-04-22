import React, {Component} from 'react';

export default class UserList extends Component {
  render() {
    users = this.props.users.map((user) => (
      <li key={user._id}>
        {user.username}
        <button>Challenge</button>
      </li>
    ));

    return (
      <div>
        <ul>
          {users}
        </ul>
      </div>
    );
  }
}
