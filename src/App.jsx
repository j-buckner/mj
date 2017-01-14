import React, { Component } from 'react';
import './App.css';
import Page from './components/Page';

var PIXI = require('pixi.js');

const pageNumToDisplayData = {
  1: { 
    mainText: "let's go on an adventure",
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

    let rendererOptions = {
      backgroundColor: '0xAADFE3',
      autoResize: true,
    }

    let renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, rendererOptions);
    renderer.view.style.position = "fixed";
    renderer.view.style.display = "block";
    
    let stage = new PIXI.Container();

    this.state = {
      pageNum: 1,
      displayData: pageNumToDisplayData[1],
      renderer: renderer,
      stage: stage, 
    };

    this.pageTransition = this.pageTransition.bind(this)  
  }

  componentDidMount() {
    let appContent = document.getElementById("main-wrapper");
    appContent.appendChild(this.state.renderer.view);

    this.state.renderer.render(this.state.stage);
  }

  pageTransition() {
    let nextPage = this.state.pageNum + 1;
    this.setState({pageNum: nextPage, displayData: pageNumToDisplayData[nextPage]})
  }

  render() {
    return (
      <div id="main-wrapper">
        <Page pageNum={this.state.pageNum} pageTransition={this.pageTransition}
            displayData={this.state.displayData} renderer={this.state.renderer}
            stage={this.state.stage} /> 
      </div>
    );
  }
}

export default App;
