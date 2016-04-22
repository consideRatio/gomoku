import {Mongo} from 'meteor/mongo';

import {SimpleSchema} from 'meteor/aldeed:simple-schema';
// import {UserSchema} from './users';

const Games = new Mongo.Collection('games');

const userSchema = new SimpleSchema({
  _id: {
    type: String
  },
  username: {
    type: String
  }
});

const gameSchema = new SimpleSchema({
  startDate: {
    type: Date
  },
  endDate: {
    type: Date,
    optional: true
  },
  moves: {
    type: [Object]
  },
  'moves.$.intersection': {
    // Represents the squares
    type: Number,
    min: 0,
    max: 19*19 - 1
  },
  'moves.$.timestamp': {
    // Represents relative timestamps in ms since game started.
    type: Number,
    min: 0
  },
  players: {
    type: [userSchema]
  },
  outcome: {
    type: Object
    // technical win, resign win, timeout win, draw
    // who won?
  }
});

Games.attachSchema(gameSchema);

export default Games;
