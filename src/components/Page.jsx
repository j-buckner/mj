import React from 'react';
var PIXI = require('pixi.js');

class Page extends React.Component {
  constructor(props) {
    super(props);

    //Create the renderer
    let width = window.innerWidth;
    let height = window.innerHeight;

    let renderer = PIXI.autoDetectRenderer(width, height, {backgroundColor: '0xAADFE3'});
    let stage = new PIXI.Container();

    this.state = {
      renderer: renderer,
      stage: stage, 
    };
    
  }

  animateTextAlpha(displayText, fadeDirection) {
    
    if (fadeDirection === 1) displayText.alpha += 0.0075;
    if (fadeDirection === 0) displayText.alpha -= 0.0075;

    this.state.renderer.render(this.state.stage);

    if (displayText.alpha > 0 && displayText.alpha < 1.3) {
      requestAnimationFrame(function(){
        this.animateTextAlpha(displayText, fadeDirection);
      }.bind(this));
    } else if (displayText.alpha >= 1.3) {
      if (this.props.pageNum ===3) return;
      this.animateTextAlpha(displayText, 0);
    } else if (displayText.alpha < 0) {
      if (this.props.pageNum === 3) {
        return;
      } else {
        this.props.pageTransition();
        this.state.stage.removeChild(displayText);
        return;
      }
    }
  }

  componentDidMount() {

    let renderer = this.state.renderer;
    let stage = this.state.stage;

    //Add the canvas to the HTML document
    let appContent = document.getElementById("story-wrapper");
    appContent.appendChild(renderer.view);

    //Tell the `renderer` to `render` the `stage`
    renderer.view.style.position = "fixed";
    renderer.view.style.display = "block";
    renderer.autoResize = true;
    renderer.render(stage);
  }

  render () {
    
    let displayText = new PIXI.Text(
      this.props.displayText,
      {fontFamily: "Quicksand", fontSize: "60px", fill: "white", align: 'center'}
    );

    let xPos = (window.innerWidth/2) - (displayText.width/2);
    let yPos = (window.innerHeight/2) - (displayText.height/2);
    if (this.props.pageNum === 3) {
      yPos = 100;
    }

    displayText.position.set(xPos, yPos);
    displayText.alpha = 0;

    this.state.stage.addChild(displayText);
    this.state.renderer.render(this.state.stage);

    this.animateTextAlpha(displayText, 1);
    return (
      <div></div>
    )
  }
}

export default Page;