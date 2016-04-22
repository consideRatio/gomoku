import {Games} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('games.allGameSummaries', function () {
    // TODO: Show only active ones
    // (EndDate not set)
    // TODO: Pass only relevant fields
    // Not moves etc.
    return Games.find({});
  });

  Meteor.publish('games.single', function (gameId) {
    return Game.find(gameId);
  });
}
