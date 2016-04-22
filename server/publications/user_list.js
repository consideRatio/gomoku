import {Users} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('userList.allUsersExcept', function (exceptUserId) {
    return Users.find(
      {_id: {$ne: exceptUserId}},
      {fields: {_id: true, username: true}}
    );
  });
}
