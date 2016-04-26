import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import MainLayout from '../components/main_layout.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();

  // Subscribe to user data!
  if (Meteor.subscribe('challenges.includingActiveUser', Meteor.userId()).ready()) {
    const challenges = Collections.Challenges.find({}).fetch();

    // Loads data into the contained components 'props'
    onData(null, {challenges});
  } else {
    onData(null, {});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  actions
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MainLayout);
