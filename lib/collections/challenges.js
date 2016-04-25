import {Mongo} from 'meteor/mongo';


const Challenges = new Mongo.Collection('challenges');

const schema = new SimpleSchema({
  challengeDate: {
    type: Date
  },
  userChallenging: {
    type: [userSchema]
  },
  userChallenged: {
    type: [userSchema]
  }
});

Challenges.attachSchema(schema);

export default Challenges;
