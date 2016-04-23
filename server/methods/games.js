import {Games} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'games.makeMove'(gameId, intersection) {
        const game = Games.findOne({_id: gameId});

        // Checks
        // 1: Game exists
        // 2: User is logged in
        // 3: User is the active player in game
        // 4: Empty space
        if (
          game &&
          Meteor.userId &&
          Meteor.userId() === game.players[game.moves.length % 2]._id &&
          !game.moves.some((move) => move.intersection === intersection)
        ) {
          Games.update(
            {_id: gameId},
            {$push : {moves: {intersection, timestamp: Date.now() - game.startDate.getTime()}}}
          );
        }
    }
  });
}
