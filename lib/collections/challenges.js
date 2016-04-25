import {Mongo} from 'meteor/mongo';

import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {publicUserSchema} from './users';

const Challenges = new Mongo.Collection('challenges');

const schema = new SimpleSchema({
  challengeDate: {
    type: Date
  },
  userChallenging: {
    type: [publicUserSchema]
  },
  userChallenged: {
    type: [publicUserSchema]
  }
});

Challenges.attachSchema(schema);

export default Challenges;
