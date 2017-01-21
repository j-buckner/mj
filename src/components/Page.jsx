import React from 'react';

class Page extends React.Component {

  drawText(txt) {
    let fontSizePX = window.innerWidth > 800 ? "55px" : window.innerWidth > 600 ? "45px" : "20px";
    let canvas = document.getElementById('canvas-content');    
    let ctx = canvas.getContext('2d')

    let dashLen = 220;
    let dashOffset = dashLen;
    let speed = 30;
    let x = (window.innerWidth / 2) - 450;
    let y = (window.innerHeight / 2) - 100;
    let i = 0;

    ctx.font = fontSizePX + " quicksandregular"; 
    ctx.lineWidth = 5; 
    ctx.lineJoin = "round"; 
    ctx.globalAlpha = 2/3;
    ctx.strokeStyle = "white";
    ctx.fillStyle = "white";

    (function loop() {
      ctx.strokeStyle = "white";
      ctx.fillStyle = "white";
      ctx.font = fontSizePX + " quicksandregular";
      ctx.clearRect(x, 0, 60, 150);
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
        if (i < txt.length) requestAnimationFrame(loop);
      }
    })();
  }

  render() {
    // let fontSizePX = window.innerWidth > 800 ? "55px" : window.innerWidth > 600 ? "45px" : "20px";    
    // let displayText = new PIXI.Text(
    //   this.props.displayData.mainText,
    //   {fontFamily: 'Quicksand', fontSize: fontSizePX, fill: 'white', align: 'center', letterSpacing: 5, fontWeight: 'lighter'}
    // );

    // let xPos = (window.innerWidth/2) - (displayText.width/2);
    // let yPos = (window.innerHeight/2) - ((displayText.height/2) + 35);
    // if (this.props.pageNum === 3) {
    //   yPos = 100;
    // }

    // let canvas = document.getElementById('canvas-content');
    // var ctx = canvas.getContext('2d');

    // let dashLen = 220;
    // let dashOffset = dashLen;
    // let speed = 5;
    // let txt = this.props.displayData.mainText
    // let x = 30;
    // let i = 0;

    // let font = fontSizePX + " quicksandregular"
    // ctx.font = font; 

    // console.log(ctx.font);
    // ctx.lineWidth = 5; ctx.lineJoin = "round"; ctx.globalAlpha = 2/3;
    // ctx.strokeStyle = ctx.fillStyle = "#1f2f90";

    // this.drawText(ctx, dashLen, dashOffset, speed, txt, x, i, font);


    this.drawText(this.props.displayData.mainText);

    return (
      <div></div>
    )
  }
}

export default Page;