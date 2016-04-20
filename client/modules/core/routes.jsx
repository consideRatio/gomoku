import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';
import Lobby from './components/lobby.jsx';
import Game from './components/game.jsx';

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
        content: () => (<Game gameId={_id} />)
      });
    }
  });
}
