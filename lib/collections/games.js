import {Mongo} from 'meteor/mongo';

import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const Games = new Mongo.Collection('games');

let user = new SimpleSchema({
  _id: {
    type: String
  },
  name: {
    type: String
  }
});

let schema = new SimpleSchema({
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
    type: [user]
  },
  outcome: {
    type: Object
    // technical win, resign win, timeout win, draw
    // who won?
  }
});

Games.attachSchema(schema);

export default Games;
