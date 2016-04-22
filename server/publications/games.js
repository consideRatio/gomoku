import {Games} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('games.allGameSummaries', function () {
    return Games.find(
      {
        // Show only active ones
        endDate: {$exists: false}
      },
      {
        fields: {
          // Pass only relevant information
          _id: true,
          startDate: true,
          players: true
        }
      }
    );
  });

  Meteor.publish('games.single', function (gameId) {
    return Games.find({_id: gameId});
  });
}
