import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import GameList from '../components/game_list.jsx';

export const composer = ({context, public}, onData) => {
  const {Meteor, Collections} = context();

  // Subscribe to user data!
  if (Meteor.subscribe('games.allGameSummaries').ready()) {
    // One of the players is the hero
    // None of the players is the hero

    const privateQuery = {
      'players': {$elemMatch: {_id: Meteor.userId()}}
    };
    const publicQuery = {
      'players': {$not: {$elemMatch: {_id: Meteor.userId()}}}
    };

    const query = public ? publicQuery : privateQuery;
    const options = {
      sort: {startDate: -1}
    };
    const games = Collections.Games.find(query, options).fetch();

    // Loads data into the contained components 'props'
    onData(null, {games, public});
  } else {
    onData(null, {games: [], public});
  }

  // Return a container disposal function
  return () => {};
};

export const depsMapper = (context, actions) => {
  return {
    context: () => context,

  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(GameList);
