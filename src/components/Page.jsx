import React from 'react';

var PIXI = require('pixi.js');
import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

// const ResponsiveReactGridLayout = WidthProvider(Responsive);

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
      if (this.props.pageNum ===3) return;
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

    this.props.stage.addChild(displayText);
    this.props.renderer.render(this.props.stage);

    this.animateTextAlpha(displayText, 1);

    let layouts = {
      lg: [
        {i: 'mainGrid', x: 0, y: 0, w: 1, h: 2, static: true},
        {i: 'mainGrid2', x: 1, y: 0, w: 1, h: 2, static: true}
      ], 
      md: [{i: 'mainGrid', x: 0, y: 0, w: 1, h: 2, static: true}], 
      sm: [{i: 'mainGrid', x: 0, y: 0, w: 1, h: 2, static: true}]
    };

    return (
      <div></div>
    )
  }
}

export default Page;


      // <ResponsiveReactGridLayout className="layout" layouts={layouts}
      //   breakpoints={{lg: 1200, md: 996, sm: 768}}
      //   cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
      //   <div key={"mainGrid"}>1</div>
      // </ResponsiveReactGridLayout>