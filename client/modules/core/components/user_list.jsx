import React from 'react';
import UserListEntry from './user_list_entry';

export default class UserList extends React.Component {
  render() {
    return (
      <div className="demo-card-wide mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">User list</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <ul className="mdl-list">
            {this.props.users.map((user) => (
              <UserListEntry key={user._id} user={user} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
