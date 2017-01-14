import React, { Component } from 'react';
import './App.css';
import Page from './components/Page';

var PIXI = require('pixi.js');

const pageNumToDisplayText = {
  1: "let's go on an adventure",
  2: "let's go somewhere far away",
  3: "where shall we go?"
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
      displayText: "let's go on an adventure",
      renderer: renderer,
      stage: stage, 
    };

    this.pageTransition = this.pageTransition.bind(this)  
  }

  componentDidMount() {

    //Add the canvas to the HTML document
    let appContent = document.getElementById("main-wrapper");
    appContent.appendChild(this.state.renderer.view);

    //Tell the `renderer` to `render` the `stage`
    this.state.renderer.render(this.state.stage);
  }

  pageTransition() {
    let nextPage = this.state.pageNum + 1;
    this.setState({pageNum: nextPage, displayText: pageNumToDisplayText[nextPage]})
  }

  render() {
    return (
      <div id="main-wrapper">        
        <Page pageNum={this.state.pageNum} 
              pageTransition={this.pageTransition} 
              displayText={this.state.displayText} 
              renderer={this.state.renderer}
              stage={this.state.stage} />          
      </div>
    );
  }
}

export default App;
