import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Game from '../components/game.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();
  const gameId = FlowRouter._current.params._id;

  // Subscribe to user data!
  if (Meteor.subscribe('games.single', gameId).ready()) {
    const game = Collections.Games.findOne({_id: gameId});

    // Loads data into the contained components 'props'
    onData(null, {game});
  } else {
    onData(); // Loading if no results were returned
    // onData(null, {});
  }

  // Return a container disposal function
  return () => {};
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Game);
