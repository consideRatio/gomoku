import React from 'react';

import Lobby from './components/lobby';

import MainLayout from './containers/main_layout';
import Home from './containers/home';
import Game from './containers/game';

import {mount as mountOriginal, withOptions} from 'react-mounter';
const mount = withOptions({
    rootId: 'react-root'
    // rootProps: {'className': 'some-class-name'}
}, mountOriginal);

// import {Accounts} from 'meteor/accounts-base';
// console.log(Accounts);
// Accounts.ui.config({
//   passwordSignupFields: 'USERNAME_ONLY',
//   loginPath: '/',
//   minimumPasswordLength: 1
// });

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/lobby', {
    name: 'lobby',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Lobby />)
      });
    }
  });

  FlowRouter.route('/game/:_id', {
    name: 'game',
    action({_id}) {
      mount(MainLayoutCtx, {
        content: () => (<Game />)
      });
    }
  });

  FlowRouter.route('/logout', {
    name: 'app.logout',
    action() {
      Accounts.logout();
      // Meteor.logout(() => {
      FlowRouter.go('/login');
      // });
    }
  });
}
