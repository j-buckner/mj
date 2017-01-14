import React, { Component } from 'react';
import './App.css';
import Page from './components/Page';

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
    var nextDisplayText = "";
    if (nextPage === 2) {
      nextDisplayText = "let's go somewhere far away";
    }

    this.setState({pageNum: nextPage, displayText: nextDisplayText})
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
