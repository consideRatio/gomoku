import {Games} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'games.makeMove'(gameId, intersection) {
      const game = Games.findOne({_id: gameId});

      // Checks
      // 1: Game exists
      // 1: Game not yet finished
      // 2: User is logged in
      // 3: User is the active player in game
      // 4: Empty space
      if (
        game &&
        game.state !== "finished" &&
        Meteor.userId &&
        Meteor.userId() === game.players[game.moves.length % 2]._id &&
        !game.moves.some((move) => move.intersection === intersection)
      ) {
        let updates = {};

        // if no moves have been made already
        if (game.moves.length === 0) {
          updates.state = "active";
          updates.startDate = new Date();
        }
        // else evaluate if winning stone was placed
        else {
          const refinedMoves = refineMovesArray(game.moves, intersection);
          const winningStones = checkForWinningStones(refinedMoves);

          if (winningStones.length) {
            updates.state = "finished";
            updates.outcome = "winner";
            updates.winner = game.moves.length % 2;
            updates.winningStones = winningStones;
            updates.endDate = new Date();
          } else {
            // TODO: or, if draw-stone was placed
            // updates.state = "finished";
            // updates.outcome = "draw";
          }
        }

        Games.update(
          {_id: gameId},
          {
            $push: {
              moves: {
                intersection,
                timestamp: game.startDate ? Date.now() - game.startDate.getTime() : 0
              }
            },
            $set: updates
          }
        );
      }
    }
  });
}

// Gomoku winner logic
const refineMovesArray = (moves, intersection) => {
  let result = moves.filter((move, index) =>
    index % 2 === moves.length % 2
  );
  result.push({intersection});
  result = result.map((move) => ({
    x: move.intersection % 19,
    y: Math.floor(move.intersection/19)
  }));

  return result;
}

const checkForWinningStones = (moves) => {
  // loop directions
  //   from the latest move made...
  //   first count one way until stop
  //   then count other way until stop
  //   finally add counts together
  //   if greater than or equal to 4 - game won with these stones, remember them

  let result = [];
  const pos = moves[moves.length-1];

  for(let d = 0; d < 4; d++) {
    const stones = twoWayCount(moves, pos, directions[d]);
    if (stones.length >= 4)
      result = result.concat(stones);
  }
  if (result.length >= 4) {
    result.push(pos);
    return result.map((r) => ({x: r.x, y: r.y, intersection: r.x + r.y*19}));
  } else {
    return []
  }
};

const twoWayCount = (moves, pos, dir) => {
  const f = oneWayCount(moves, pos, dir, false);
  const b = oneWayCount(moves, pos, dir, true);
  return f.concat(b);
};

const oneWayCount = (moves, pos, dir, rev) => {
  let c = [];

  while (true) {
    // displace
    const dis = {
      x: pos.x + dir.x * (c.length+1) * (rev ? -1 : 1),
      y: pos.y + dir.y * (c.length+1) * (rev ? -1 : 1)
    };
    // bounds- and stone- check
    if (dis.x < 0 || dis.x > 18 || dis.y < 0 || dis.y > 18)
      break;
    else if (!moves.some((m) => m.x == dis.x && m.y == dis.y))
      break;
    else
      c.push(dis);
  }
  return c;
};

const directions = [
  {x:1, y:0}, // Right ----
  {x:1, y:1}, // Right Up
  {x:0, y:1}, // ----- Up
  {x:-1, y:1} // Left  Up
];
