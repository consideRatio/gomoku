import {Mongo} from 'meteor/mongo';

import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {publicUserSchema} from './users';

const Games = new Mongo.Collection('games');

const schema = new SimpleSchema({
  createdAt: {
    type: Date
  },
  startDate: {
    type: Date,
    optional: true
  },
  endDate: {
    type: Date,
    optional: true
  },
  moves: {
    type: [Object],
    maxCount: 19*19
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
  state: {
    type: String,
    allowedValues: ["unstarted", "active", "finished"],
    defaultValue: "unstarted"
  },
  outcome: {
    type: String,
    allowedValues: ["winner", "draw", "resign", "timeout"],
    optional: true
  },
  winner: {
    type: Number,
    allowedValues: [0, 1],
    optional: true
  },
  winningStones: {
    type: [Object],
    optional: true
  },
  'winningStones.$.x': {
    type: Number,
    min: 0,
    max: 19
  },
  'winningStones.$.y': {
    type: Number,
    min: 0,
    max: 19
  },
  'winningStones.$.intersection': {
    type: Number,
    min: 0,
    max: 19*19 - 1
  }
});

Games.attachSchema(schema);

export default Games;
