import React from 'react';

import MainLayout from './components/main_layout';
import About from './components/about';
import Lobby from './components/lobby';

import Home from './containers/home';
import Game from './containers/game';

import {mount as mountOriginal, withOptions} from 'react-mounter';
const mount = withOptions({
    rootId: 'react-root'
    // rootProps: {'className': 'some-class-name'}
}, mountOriginal);

import {Accounts} from 'meteor/std:accounts-ui';
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
  loginPath: '/',
  minimumPasswordLength: 1
  // onSignedInHook: () => FlowRouter.go('/lobby'),
  // onSignedOutHook: () => FlowRouter.go('/')
});

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

  FlowRouter.route('/about', {
    name: 'about',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<About />)
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
