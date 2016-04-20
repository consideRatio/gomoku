import {Mongo} from 'meteor/mongo';

import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const Games = new Mongo.Collection('games');

let user = new SimpleSchema({
  _id: {
    type: string
  },
  name: {
    type: string
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
    type: Array
  },
  'moves.$': {
    // Represents relative timestamps in ms since game started.
    type: Number,
    min: 0
  },
  playerBlack: {
    type: user
  },
  playerWhite: {
    type: user
  },
  outcome: {
    // technical win, resign win, timeout win, draw
    // who won?
  }
});

Games.attachSchema(schema);

export default Games;
