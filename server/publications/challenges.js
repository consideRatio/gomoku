import {Challenges} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('challenges.includingActiveUser', function () {
    return Challenges.find({
      $or: [
        {'userChallenging._id': Meteor.user()._id},
        {'userChallenged._id': Meteor.user()._id}
      ]
    });
  });
}
