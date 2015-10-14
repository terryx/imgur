'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';

class App extends React.Component {

  render() {
    return (
      <div>
        <Login />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
