import {Challenges, Games, Users} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Random} from 'meteor/random';

export default function () {
  Meteor.methods({
    'challenges.new'(villianId) {
      const hero = Meteor.user();
      check(hero, Object);

      const villian = Users.findOne({_id: villianId});
      check(villian, Object);

      // TODO: Current / Challenged user not busy
      // TODO: Ensure not another challenge to the user is sent already

      const challengeId = Random.id();
      Challenges.insert({
        _id: challengeId,
        challengeDate: new Date(),
        hero,
        villian,
        status: "pending"
      });

      console.log("Method: challenges.new - Challenge inserted");

      // Set interval -> remove challenge
      const serverTimerToken = Meteor.setTimeout(() => {
        const updateCount = Challenges.update(
          {_id: challengeId, status: "pending"},
          {$set: {status: "timeout"}
        });
        if (updateCount)
          console.log("Method: challenges.new / timeout callback - Challenge timeout");
      }, 10*1000);

      return;
    }
  });



  Meteor.methods({
    'challenges.respond'(challengeId, accepted) {
      console.log("Method: challenges.respond");

      let gameId = null;

      // Logged in
      const villian = Meteor.user();
      check(villian, Object);

      // Has been challenged
      const challenge = Challenges.findOne({_id: challengeId, 'villian._id': villian._id});
      check(challenge, Object);

      // TODO: Current / Challenged user not busy

      if (accepted) {
        // Create new game
        gameId = Random.id();
        Games.insert({
          _id: gameId,
          startDate: new Date(),
          moves: [],
          players: Random.choice([0,1]) ? [villian, challenge.hero] : [challenge.hero, villian]
        });

        console.log("Method: challenges.respond - Accepted - Game inserted, challenge removed");
      } else {
        console.log("Method: challenges.respond - Rejected - Challenge removed");
      }

      Challenges.update(
        {_id: challengeId},
        {$set: {
          status: accepted ? "accepted" : "rejected",
          gameId: gameId
        }
      });

      const serverTimerToken = Meteor.setTimeout(() => {
        const removeCount = Challenges.remove({_id: challengeId});
        if (removeCount)
          console.log("Method: challenges.respond / timeout callback - Challenge cleaned up");
      }, 60*1000);

      return gameId; // Return the gameId
    }
  });



  Meteor.methods({
    'challenges.acknowledge'(challengeId) {
      console.log("Method: challenges.acknowledge");

      // Logged in
      const hero = Meteor.user();
      check(hero, Object);

      // Has challenged someone
      const challenge = Challenges.findOne({_id: challengeId, 'hero._id': hero._id});
      check(challenge, Object);

      Challenges.remove({_id: challengeId});

      return challenge.gameId; // Return the gameId
    }
  });
}
