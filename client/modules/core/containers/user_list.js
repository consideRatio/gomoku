import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import UserList from '../components/user_list';

// TODO: Disable challenge button when you are not logged in

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  // Subscribe to user data!
  if (Meteor.subscribe('users.allActiveUsers').ready()) {
    const query = {
      _id: {$ne: Meteor.userId()},
      'status.online': true
    };
    const options = {
      sort: {'status.idle': 1, username: 1},
    };
    const users = Collections.Users.find(query, options).fetch();

    // Loads data into the contained components 'props'
    onData(null, {users});
  } else {
    onData(null, {users: []});
  }

  // Return a container disposal function
  return () => {};
};

export const depsMapper = (context, actions) => {
  return {
    context: () => context,
    actions
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(UserList);
