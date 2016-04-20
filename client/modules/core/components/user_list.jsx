import React, {Component} from 'react';

export default class UserList extends Component {
  render() {
    // TODO: Fetch actual data
    return (
      <div>
        <ul>
          <li style={{color: 'green'}}>Arne / Online / <button>Challenge</button></li>
          <li style={{color: 'orange'}}>Lisa / Inactive / <button>Challenge</button></li>
          <li style={{color: 'red'}}>Kalle / In game / <button disabled>Challenge</button></li>
          <li style={{display: 'none'}}>Olov / Offline</li>
        </ul>
      </div>
    );
  }
}
