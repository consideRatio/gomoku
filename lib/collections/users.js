import {Meteor} from 'meteor/meteor';

import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const Users = Meteor.users;

const publicUserSchema = new SimpleSchema({
  _id: {
    type: String
  },
  username: {
    type: String
  }
});

export {publicUserSchema};
export default Users;
