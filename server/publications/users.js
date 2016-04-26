import {Users} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('users.allActiveUsers', function () {
    return Users.find(
      {
        // Publish all active users
        'status.online': true
      },
      {
        // But only the essential information
        fields: {
          _id: true,
          username: true,
          'status.online': true,
          'status.idle': true
        }
      }
    );
  });
}
