import React from 'react';
var canvas = document.getElementById('canvas-content');
var ctx = canvas.getContext('2d');

// var growTree = window.growTree;

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.drawCircle = this.drawCircle.bind(this);
    this.animateDisplayGroup = this.animateDisplayGroup.bind(this);
    this.displayOptions = this.displayOptions.bind(this);
    this.fadeOutText = this.fadeOutText.bind(this);
    this.animateTextAlpha = this.animateTextAlpha.bind(this);
    this.drawText = this.drawText.bind(this);

  }

  finishedDisplayOptions() {
    console.log('yay!');
  }

  animateDisplayGroup(option, x, y, current, curPerc, fontSizePX) {
    // this.drawCircle(option, x + 60, y, current, curPerc);
    // this.drawText(option, fontSizePX, x, window.innerHeight - 100, this.displayOptions);
    this.drawTree(x + 100, y + 20);
  }

  // drawTreeAnimate(transformX, transformY) {

  //   if (transformY < 100) return;
  //   console.log(transformY);

  //   let tree = new window.createjs.Shape();
  //   tree.graphics.f().s("#1B1D21").ss(8,1);
  //   tree.setTransform(transformX, transformY);

  //   window.stage.addChild(tree);
  //   window.stage.update();

  //   this.drawTreeAnimate(transformX, transformY - 3.2)
  // }

  drawTree(x, y) {

    // Tree

    // this.drawTreeAnimate(x, y - 3.2);

    // this.shape = new cjs.Shape();
    // this.shape.graphics.f().s("#1B1D21").ss(8,1).p("AAAgWIAAAt");
    // this.shape.setTransform(276,285.7);

    // let tree = new Graphics();
    // ctx.beginFill();
    // ctx.beginStroke("#1B1D21");
    // ctx.setStrokeStyle(8, 1);
    // ctx.setTransform(276,285.7);

    


    return;
  }

  drawCircle(option, x, y, current, curPerc) {
    var radius = 120;
    var endPercent = 100;
    var circ = Math.PI * 2;
    var quart = Math.PI / 2;

    ctx.lineWidth = 2;
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
    ctx.stroke();
    curPerc += 1;
    
    if (curPerc < endPercent + 1) {
      requestAnimationFrame(function () {
        this.drawCircle(option, x, y, curPerc / 100, curPerc)
      }.bind(this));
    } else {
      // this.displayOptions(option);
    }
  }

  displayOptions(option) {
    let options = this.props.displayData.options;
    let index = options.indexOf(option);

    let indexToX = {
      0: 240,
      1: 640,
      2: 1090
    }

    if (index === options.length - 1) {
      this.finishedDisplayOptions();
      return;
    } 

    index = index === -1 ? 0 : index + 1;
    this.animateDisplayGroup(options[index], indexToX[index], window.innerHeight - 300, 0, 0, '30px')
  }

  // animateFadeOut

  fadeOutText(text) {
    // letterXPos + ctx.measureText(text[letterIndex++]).width + ctx.lineWidth;
    // for (let letter of text) {
    //     console.log(ch.codePointAt(0).toString(16));
    // }
    // console.log(text);
    // console.log(ctx);
    // this.animateFadeOutText(text);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.props.pageTransition();
    return;
  }

  animateTextAlpha(text, font, xPosStart, letterIndex, prevLetterXPos, letterXPos, letterYPos, letterAlpha, callback) {
    // ctx.clearRect(letterXPos, 0, 60, 150);
    // console.log(window.stage);
    letterAlpha += 0.001;
    if (prevLetterXPos !== -1 ) {

      let prevLetterAlpha = (letterIndex === text.length) ? letterAlpha + 0.7 : letterAlpha + 0.1;
      if (letterIndex > 14 && letterIndex < 25 && this.props.pageNum === 1) {
        ctx.fillStyle = "rgba(213, 162, 23, "+prevLetterAlpha+")";
      } else if (letterIndex > 18 && letterIndex < 28 && this.props.pageNum === 2) {
        ctx.fillStyle = "rgba(213, 162, 23, "+prevLetterAlpha+")";
      } else {
        ctx.fillStyle = "rgba(255, 255, 255, "+prevLetterAlpha+")";
      }

      ctx.font = font;
      ctx.fillText(text[letterIndex - 1], prevLetterXPos, letterYPos);
    }

    // base case
    if (letterIndex === text.length) {
      sleep(1500).then(() => {
        callback(text);
        return;
      });
      return;
    }

    if (letterIndex > 14 && letterIndex < 24 && this.props.pageNum === 1) {
      ctx.fillStyle = "rgba(213, 162, 23, "+letterAlpha+")";
    } else if (letterIndex > 18 && letterIndex < 27 && this.props.pageNum === 2) {
      ctx.fillStyle = "rgba(213, 162, 23, "+letterAlpha+")";
    } else {
      ctx.fillStyle = "rgba(255, 255, 255, "+letterAlpha+")";
    }

    ctx.font = font;
    ctx.fillText(text[letterIndex], letterXPos, letterYPos);

    // window.stage.update();

    if (letterAlpha < 0.02) {
      requestAnimationFrame(function () {
        this.animateTextAlpha(text, font, xPosStart, letterIndex, prevLetterXPos, letterXPos, letterYPos, letterAlpha, callback);
      }.bind(this));
    }

    if (letterAlpha >= 0.02 && letterAlpha < 1) {
      ctx.fillText(text[letterIndex], letterXPos, letterYPos);  
      let nextLetterXPos = letterXPos + ctx.measureText(text[letterIndex++]).width + ctx.lineWidth;
      requestAnimationFrame(function () {
        this.animateTextAlpha(text, font, xPosStart, letterIndex, letterXPos, nextLetterXPos, letterYPos, 0.005, callback);
      }.bind(this));
    }

  }

  drawText(text, fontSizePX, x, y, callback) {
    let font = fontSizePX + " quicksandregular";
    let i = 0;
    let alpha = 0.005;

    ctx.font = font;
    ctx.lineWidth = 1; 
    ctx.lineJoin = "round"; 
    ctx.fillStyle = "rgba(255, 255, 255, "+alpha+")";

    this.animateTextAlpha(text, font, x, i, -1, x, y, alpha, callback);
  }

  render() {

    let callback = (this.props.pageNum === 3) ? this.displayOptions : this.fadeOutText;

    let x = (window.innerWidth / 2) - 450;
    let y = (window.innerHeight / 2) - 100;

    let fontSizePX = window.innerWidth > 800 ? "55px" : window.innerWidth > 600 ? "45px" : "20px";

    if (this.props.pageNum === 3) {
      y = 100;
      x = (window.innerWidth / 2) - 320;
    } 

    this.drawText(this.props.displayData.mainText, fontSizePX, x, y, callback);
    return (
      <div></div>
    )
  }
}

export default Page;