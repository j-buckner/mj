import React from 'react';
var PIXI = require('pixi.js');

class Page extends React.Component {

  animateTextAlpha(displayText, fadeDirection) {
    if (fadeDirection === 1) displayText.alpha += 0.0075;
    if (fadeDirection === 0) displayText.alpha -= 0.0075;

    this.props.renderer.render(this.props.stage);

    if (displayText.alpha > 0 && displayText.alpha < 1.3) {
      requestAnimationFrame(function(){
        this.animateTextAlpha(displayText, fadeDirection);
      }.bind(this));
    } else if (displayText.alpha >= 1.3) {
      if (this.props.pageNum === 3) return;
      this.animateTextAlpha(displayText, 0);
    } else if (displayText.alpha < 0) {
      if (this.props.pageNum === 3) {
        return;
      } else {
        this.props.pageTransition();
        this.props.stage.removeChild(displayText);
        return;
      }
    }
  }

  render() {

    let fontSizePX = window.innerWidth > 800 ? "60px" : window.innerWidth > 600 ? "45px" : "20px";    
    let displayText = new PIXI.Text(
      this.props.displayData.mainText,
      {fontFamily: "Quicksand", fontSize: fontSizePX, fill: "white", align: 'center'}
    );

    let xPos = (window.innerWidth/2) - (displayText.width/2);
    let yPos = (window.innerHeight/2) - (displayText.height/2);
    if (this.props.pageNum === 3) {
      yPos = 100;
    }

    displayText.position.set(xPos, yPos);
    displayText.alpha = 0;

    this.props.stage.addChild(displayText);
    this.props.renderer.render(this.props.stage);

    this.animateTextAlpha(displayText, 1);

    return (
      <div></div>
    )
  }
}

export default Page;