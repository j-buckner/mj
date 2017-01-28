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
      pageNum: 3,
      displayData: pageNumToDisplayData[3],
    };

    this.pageTransition = this.pageTransition.bind(this)  
  }

  componentDidMount() {
    let canvas = document.getElementById('canvas-content');
    let context = canvas.getContext('2d');  
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.backgroundColor = '#AADFE3';

    // finally query the various pixel ratios
    let devicePixelRatio = window.devicePixelRatio || 1;
    let backingStoreRatio = context.webkitBackingStorePixelRatio ||
                        context.mozBackingStorePixelRatio ||
                        context.msBackingStorePixelRatio ||
                        context.oBackingStorePixelRatio ||
                        context.backingStorePixelRatio || 1;

    let ratio = devicePixelRatio / backingStoreRatio;

    // upscale the canvas if the two ratios don't match
    if (devicePixelRatio !== backingStoreRatio) {

        var oldWidth = canvas.width;
        var oldHeight = canvas.height;

        canvas.width = oldWidth * ratio;
        canvas.height = oldHeight * ratio;

        canvas.style.width = oldWidth + 'px';
        canvas.style.height = oldHeight + 'px';

        // now scale the context to counter
        // the fact that we've manually scaled
        // our canvas element
        context.scale(ratio, ratio);

    }
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
