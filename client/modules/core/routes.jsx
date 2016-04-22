import React from 'react';

import MainLayout from './components/main_layout.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Home from './components/home.jsx';
import Lobby from './components/lobby.jsx';

import Game from './containers/game.js';

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
        header: () => (<Header />),
        content: () => (<Home />),
        footer: () => (<Footer />)
      });
    }
  });

  FlowRouter.route('/lobby', {
    name: 'lobby',
    action() {
      mount(MainLayoutCtx, {
        header: () => (<Header />),
        content: () => (<Lobby />),
        footer: () => (<Footer />)
      });
    }
  });

  FlowRouter.route('/game/:_id', {
    name: 'game',
    action({_id}) {
      mount(MainLayoutCtx, {
        header: () => (<Header />),
        content: () => (<Game />)
      });
    }
  });
}
