import {Users} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('users.allUserSummaries', function () {
    return Users.find(
      {
        // Publish all users
        // TODO: Limit to active users
      },
      {
        // But only the essential information
        // TODO: Include user status
        fields: {_id: true, username: true}
      }
    );
  });
}
