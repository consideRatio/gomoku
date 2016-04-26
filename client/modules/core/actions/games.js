export default {
  makeMove({Meteor}, gameId, intersection) {
    console.log("makeMove", gameId, intersection);
    Meteor.call('games.makeMove', gameId, intersection);
  },
  enter({Meteor}, gameId, black) {
    console.log("enter", gameId, black);
  },
  leave({Meteor}, gameId, black) {
    console.log("leave", gameId, black);
  }
}
