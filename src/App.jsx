import React, { Component } from 'react';
import './App.css';
import Page from './components/Page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="story-wrapper">
          <Page />
        </div>
      </div>
    );
  }
}

export default App;
