import React, { Component } from 'react';
import './App.css';
import Page from './components/Page';

const pageNumToDisplayText = {
  1: "let's go on an adventure",
  2: "let's go somewhere far away",
  3: "where shall we go?"
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      pageNum: 1,
      displayText: "let's go on an adventure"
    };

    this.pageTransition = this.pageTransition.bind(this)  
  }

  pageTransition() {
    let nextPage = this.state.pageNum + 1;
    this.setState({pageNum: nextPage, displayText: pageNumToDisplayText[nextPage]})
  }

  render() {
    return (
      <div className="App">
        <div id="story-wrapper">
          <Page pageNum={this.state.pageNum} pageTransition={this.pageTransition} displayText={this.state.displayText}/>
        </div>
      </div>
    );
  }
}

export default App;
