import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import UserList from '../components/user_list';

// TODO: Disable challenge button when you are not logged in

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  // Subscribe to user data!
  if (Meteor.subscribe('users.allUserSummaries').ready()) {
    const query = {
      _id: {$ne: Meteor.userId()}
    };
    const options = {
      sort: {username: 1},
    };
    const users = Collections.Users.find(query, options).fetch();

    onData(null, {users});
  } else {
    onData(); // Loading if no results were returned
    // onData(null, {});
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
