import React from 'react';

const Layout = ({header = () => null , content = () => null, footer = () => null }) => (
  <div>
    <header>
      {header()}
    </header>
    <main>
      {content()}
    </main>
    <footer>
      {footer()}
    </footer>
  </div>
);

export default Layout;
