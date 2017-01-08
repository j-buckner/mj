import React, { Component } from 'react';
import './App.css';
import Page from './components/Page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>MJ - Choose Your Own Adventure Story</h2>
        </div>
        <Page />
      </div>
    );
  }
}

export default App;
