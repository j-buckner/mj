import React from 'react';
var canvas = document.getElementById('canvas-content');
var ctx = canvas.getContext('2d');  

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

class Page extends React.Component {
  constructor() {
    super();

    this.displayOptions = this.displayOptions.bind(this);
    this.fadeOutText = this.fadeOutText.bind(this);
    this.drawText = this.drawText.bind(this);
  }

  finishedDisplayOptions() {
    console.log('yay!');
  }

  displayOptions(option) {
    let options = this.props.displayData.options;
    let index = options.indexOf(option);

    let indexToX = {
      0: 200,
      1: 600,
      2: 1000
    }

    if (index === options.length - 1) {
      this.finishedDisplayOptions();
      return;
    } 

    index = index === -1 ? 0 : index + 1;
    
    this.drawText(options[index], '30px', indexToX[index], window.innerHeight - 100, this.displayOptions);
  }

  fadeOutText(txt) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.props.pageTransition();
    return;
  }

  drawText(txt, fontSizePX, x, y, callback) {

    let dashLen = 220;
    let dashOffset = dashLen;
    let speed = 30;
    let i = 0;

    ctx.font = fontSizePX + " quicksandregular"; 
    // ctx.lineWidth = 10; 
    ctx.lineJoin = "round"; 
    ctx.globalAlpha = 2/3;
    ctx.strokeStyle = "white";
    ctx.fillStyle = "white";

    let pageNum = this.props.pageNum;
    console.log(x, y);
    (function loop() {

      if (i > 14 && i < 24 && pageNum === 1) {
        ctx.strokeStyle = "#D5A217";
        ctx.fillStyle = "#D5A217";
      } else if (i > 18 && i < 27 && pageNum === 2) {
        ctx.strokeStyle = "#D5A217";
        ctx.fillStyle = "#D5A217";
      } else {
        ctx.strokeStyle = "white";
        ctx.fillStyle = "white";  
      }

      ctx.font = fontSizePX + " quicksandregular";
      // ctx.clearRect(x, 0, 60, 150);
      ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
      dashOffset -= speed;                                         // reduce dash length
      ctx.strokeText(txt[i], x, y);                               // stroke letter

      if (dashOffset > 0) requestAnimationFrame(loop);             // animate
      else {
        ctx.fillText(txt[i], x, y);                               // fill final letter
        dashOffset = dashLen;                                      // prep next char
        x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
        // ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
        // ctx.rotate(Math.random() * 0.005);                         // random rotation
        if (i < txt.length) {
          requestAnimationFrame(loop);
        } else {
          sleep(1500).then(() => {
            callback(txt);
          });
          
        }
      }
    })();
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