import {Mongo} from 'meteor/mongo';

import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {publicUserSchema} from './users';

const Games = new Mongo.Collection('games');

const schema = new SimpleSchema({
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
    type: [publicUserSchema]
  },
  outcome: {
    type: Object
    // technical win, resign win, timeout win, draw
    // who won?
  }
});

Games.attachSchema(schema);

export default Games;
