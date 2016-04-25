import {Challenges, Games, Users} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {random} from 'meteor/random';

export default function () {
  Meteor.methods({
    'challenges.new'(userIdChallenged) {
      console.log("Registering NEW challenge.");

      const userChallenging = Meteor.user();
      check(userChallenging, Object);

      const userChallenged = Challenges.findOne({_id: userIdChallenged});
      check(userChallenged, Object);

      // TODO: Current / Challenged user not busy

      const _id = `${userChallenging._id}${userChallenged._id}`;

      Challenges.insert({
        _id,
        challengeDate: new Date(),
        userChallenging,
        userChallenged
      });

      // Set interval -> remove challenge
      setTimeout(() => {
        console.log("Removed challenge due to timeout. 'this' follows:", this);
        Challenges.remove({_id});
      }, 10*1000);
    }
  });

  Meteor.methods({
    'challenges.respond'(challengeId) {
      console.log("Responding to challenge.");

      // Logged in and actual user
      const userResponding = Meteor.user();
      check(userResponding, Object);

      // Have challenge to respond to
      const challenge = Challenges.findOne({_id: challengeId});
      check(challenge, Object);

      if (userResponding._id === challenge.userChallenged._id) {
        // TODO: Current / Challenged user not busy
        // --- Not in active game

        let players = null;
        if (Random.choice([0,1])) {
          players = [userResponding, challenge.userChallenging];
        } else {
          players = [challenge.userChallenging, userResponding];
        }

        // Create new game
        const gameId = Random.id();
        Games.insert({
          _id: gameId,
          startDate: new Date(),
          moves: [],
          players
        });

        // Remove challenge
        Challenges.remove({_id: challenge._id});

        return; // TODO: Return something?
      } else {
        return; // TODO: Return something else?
      }
    }
  });
}
