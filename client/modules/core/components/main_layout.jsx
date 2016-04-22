import React from 'react';

export default ({header = () => null , content = () => null, footer = () => null }) => (
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
