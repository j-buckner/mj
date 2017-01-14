import React from 'react';
var PIXI = require('pixi.js');

class Page extends React.Component {

  displayOptions() {
    let options = this.props.displayData.options;
    let optionText = new PIXI.Text(
      options[0],
      {fontFamily: 'Quicksand', fontSize: '30px', fill: 'white', align: 'center', letterSpacing: 3}
    );

    let xPos = 185;
    let yPos = window.innerHeight - 235;

    optionText.position.set(xPos, yPos);
    optionText.alpha = 1;

    this.props.stage.addChild(optionText);
    this.props.renderer.render(this.props.stage);
  }

  animateTextAlpha(displayText, fadeDirection) {
    if (fadeDirection === 1) displayText.alpha += 0.0075;
    if (fadeDirection === 0) displayText.alpha -= 0.0075;

    this.props.renderer.render(this.props.stage);

    if (displayText.alpha > 0 && displayText.alpha < 1.3) {
      requestAnimationFrame(function(){
        this.animateTextAlpha(displayText, fadeDirection);
      }.bind(this));
    } else if (displayText.alpha >= 1.3) {
      if (this.props.pageNum === 3) {
        this.displayOptions();
        return;
      } 
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
      {fontFamily: 'Quicksand', fontSize: fontSizePX, fill: 'white', align: 'center', letterSpacing: 3}
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