export default {

  signIn({Meteor, LocalState, FlowRouter, Accounts}, username, password) {

    console.log("action: SIGN IN CALLED!");

    if (!username || !password) {
      return LocalState.set('LOGIN_ERROR', 'Username & Password are required!');
    }

    LocalState.set('LOGIN_ERROR', null);

    Meteor.loginWithPassword(username, password, (err) => {
      if (err && err.reason) {
        return LocalState.set('LOGIN_ERROR', err.reason);
      }
      // FlowRouter.go('/account');
    });

  },

  loginErrorClear({LocalState}) {
    return LocalState.set('LOGIN_ERROR', null);
  },

  signOut({Accounts}) {
    Accounts.logout();
  },

  signUp({Meteor, LocalState, FlowRouter, Accounts}, username, password) {

    console.log("action: SIGN UP CALLED!");

    if (!username || !password) {
      return LocalState.set('REGISTER_ERROR', 'Please fill out all the required fileds!');
    }

    Accounts.createUser({username, password}, (err) => {
      if (err && err.reason) {
        return LocalState.set('REGISTER_ERROR', err.reason);
      }
      // FlowRouter.go('/account');
    });
  },

  registerErrorClear({LocalState}) {
    return LocalState.set('REGISTER_ERROR', null);
  },

};
