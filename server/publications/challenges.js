import {Challenges} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('challenges.includingActiveUser', function () {
    return Challenges.find({
      $or: [
        {'hero._id': this.userId},
        {'villian._id': this.userId}
      ]
    });
  });
}
