import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import GameList from '../components/game_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  // Subscribe to user data!
  if (Meteor.subscribe('gameList.allGames').ready()) {
    const options = {
      sort: {startDate: 1}
    };
    const games = Collections.Games.find({}, options).fetch();

    // Loads data into the contained components 'props'
    onData(null, {games});
  } else {
    // onData(); // Loading
    onData();
  }

  // Container disposal, unsubscribe here?
  return () => {
    console.log('Container disposed!');
  }
};

export const depsMapper = (context, actions) => {
  return {
    context: () => context
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(GameList);
