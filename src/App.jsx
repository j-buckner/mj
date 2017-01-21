import React, { Component } from 'react';
import './App.css';
import Page from './components/Page';

const pageNumToDisplayData = {
  1: { 
    mainText: "let's go on an adventure together",
  },
  2: {
    mainText: "let's go somewhere far away",
  },
  3: {
   mainText: "where shall we go?",
   options: ["the forest", "the mountain", "the sea"]
  }
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      pageNum: 1,
      displayData: pageNumToDisplayData[1],
    };

    this.pageTransition = this.pageTransition.bind(this)  
  }

  componentDidMount() {
    let canvas = document.getElementById('canvas-content');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.backgroundColor = '#AADFE3';
  }

  pageTransition() {
    let nextPage = this.state.pageNum + 1;
    this.setState({pageNum: nextPage, displayData: pageNumToDisplayData[nextPage]})
  }

  render() {
    return (
      <div id="main-wrapper">
        <Page pageNum={this.state.pageNum} pageTransition={this.pageTransition}
            displayData={this.state.displayData}  /> 
      </div>
    );
  }
}

export default App;
