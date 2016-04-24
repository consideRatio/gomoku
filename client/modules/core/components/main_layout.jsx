import React from 'react';

export default ({content = () => null}) => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
        <span href="/" className="mdl-layout-title">Gomoku</span>
        <div className="mdl-layout-spacer"></div>
        <nav className="mdl-navigation mdl-layout--large-screen-only">
          <a className="mdl-navigation__link" href="/">Home</a>
          <a className="mdl-navigation__link" href="/about">About</a>
          <a className="mdl-navigation__link" href="/lobby">Lobby</a>
          <a className="mdl-navigation__link" href="/game/571a3cb104c8b90f0f14cbd6">A game</a>
        </nav>
      </div>
    </header>
    <main className="mdl-layout__content">
      <div className="page-content">{content()}</div>
    </main>
  </div>
);

// <footer className="mdl-mini-footer">
//   <div className="mdl-mini-footer__left-section">
//     <div className="mdl-logo">Title</div>
//     <ul className="mdl-mini-footer__link-list">
//       <li><a href="#">Help</a></li>
//       <li><a href="#">Privacy & Terms</a></li>
//     </ul>
//   </div>
// </footer>
