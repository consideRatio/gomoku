export default {
  new({Meteor}, villianId) {
    Meteor.call('challenges.new', villianId, (error, result) => {
      if (error) {
        console.log("Action: challenges.new - Error", error);
      }
    });
  },
  respond({Meteor, FlowRouter}, challengeId, accepted) {
    Meteor.call('challenges.respond', challengeId, accepted, (error, gameId) => {
      if (error) {
        console.log("Action: challenges.respond - Error", error);
      } else {
        if (gameId) {
          console.log("Action: challenges.respond - Accepted");
          FlowRouter.go(`/game/${gameId}`)
        } else {
          console.log("Action: challenges.respond - Rejected");
        }
      }
    });
  },
  acknowledge({Meteor}, challengeId) {
    Meteor.call('challenges.acknowledge', challengeId, (error, gameId) => {
      if (error) {
        console.log("Action: challenges.acknowledge - Error", error);
      } else {
        if (gameId) {
          console.log("Action: challenges.acknowledge - Accepted");
          FlowRouter.go(`/game/${gameId}`)
        } else {
          console.log("Action: challenges.acknowledge - Rejected / Timeout");
        }
      }
    });
  }
}
