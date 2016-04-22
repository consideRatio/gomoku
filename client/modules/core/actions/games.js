export default {
  getGames({Meteor, Collections}) {
    return Collections.Games.find({})
  },

  playStone({Meteor}, gameId, intersection) {
    console.log("placeStone", gameId, intersection);
  },
  enter({Meteor}, gameId, black) {
    console.log("enter", gameId, black);
  },
  leave({Meteor}, gameId, black) {
    console.log("leave", gameId, black);
  },
}
