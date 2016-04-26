import {Mongo} from 'meteor/mongo';

import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {publicUserSchema} from './users';

const Challenges = new Mongo.Collection('challenges');

const schema = new SimpleSchema({
  challengeDate: {
    type: Date
  },
  hero: {
    type: publicUserSchema
  },
  villian: {
    type: publicUserSchema
  },
  status: {
    type: String,
    allowedValues: ["pending", "accepted", "rejected", "timeout"]
  },
  gameId: {
    type: String,
    optional: true
  }
});

Challenges.attachSchema(schema);

export default Challenges;
