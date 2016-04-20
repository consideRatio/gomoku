import React from 'react';

const Lobby = () => (
  <div>
    <h2>Users (Logged in)</h2>
        <ul>
            <li style="color: green">Arne / Online / <button>Challenge</button></li>
            <li style="color: orange">Lisa / Inactive / <button>Challenge</button></li>
            <li style="color: red">Kalle / In game / <button disabled>Challenge</button></li>
            <li style="display: none">Olov / Offline</li>
        </ul>

        <br /><br /><br />

        <p>Lobby / UserList+ / User</p>
        <table>
            <tr>
                <td><strong>> Lobby</strong></td>
                <td>> </td>
            </tr>
            <tr>
                <td><strong>> UserListContainer</strong></td>
                <td>> </td>
            </tr>
            <tr>
                <td><strong>> UserList</strong></td>
                <td>></td>
            </tr>
            <tr>
                <td><strong>> User</strong></td>
                <td>> </td>
            </tr>
        </table>
  </div>
);

export default Lobby;
