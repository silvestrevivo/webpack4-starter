import React from 'react';
import { hot } from 'react-hot-loader'

const App = () => {
  return (
    <div className="container">
      <h1>Webpack4 starter!</h1>
      <div className="logo"></div>
      <footer>
        <small>Developed by @silvestrevivo</small>
      </footer>
    </div>
  );
}

export default hot(module)(App)
