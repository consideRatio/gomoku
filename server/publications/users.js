import {Users} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('users.allUserSummaries', function () {
    return Users.find(
      {},
      {fields: {_id: true, username: true}}
    );
  });
}
