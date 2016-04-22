import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Game from '../components/game.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  // TODO: Subscribe to data from gameId!
  onData(null, {});

  return () => {
    // Container disposal, unsubscribe here
    console.log('Container disposed!');
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Game);
