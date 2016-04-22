import React from 'react';

export default class UserList extends React.Component {
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
