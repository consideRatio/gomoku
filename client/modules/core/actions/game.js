export default {
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
