import {Meteor} from 'meteor/meteor';

import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const Users = Meteor.users;

// export const UserSchema = new SimpleSchema({
//   _id: {
//     type: String
//   },
//   username: {
//     type: String
//   }
// });
//
// Users.attachSchema(UserSchema);

export default Users;
