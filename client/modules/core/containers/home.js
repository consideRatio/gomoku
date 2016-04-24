import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Home from '../components/home.jsx';

export const composer = ({context}, onData) => {
  const {Meteor} = context();

  onData(null, {signedIn: !!Meteor.user()});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  actions
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Home);
