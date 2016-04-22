import React, {Component} from 'react';

export default class GameList extends Component {
  render() {
    const games = this.props.games.map((game) => {
      return {
        _id: game._id,
        player1: game.players[0].username,
        player2: game.players[1].username
      }
    });

    return (
      <div>
        <ul>
          {games.map((game) => (
              <li key={game._id}>{game.player1} - {game.player2}</li>
            )
          )}
        </ul>
      </div>
    );
  }
}
