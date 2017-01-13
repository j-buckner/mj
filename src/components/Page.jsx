import React from 'react';
var PIXI = require('pixi.js');

class Page extends React.Component {
  constructor(props) {
    super(props);

    //Create the renderer
    let width = window.innerWidth;
    let height = window.innerHeight;

    var renderer = PIXI.autoDetectRenderer(width, height, {backgroundColor: '0xAADFE3'});

    //Create a container object called the `stage`
    var stage = new PIXI.Container();
    this.state = {
      renderer: renderer,
      stage: stage,
    };
    
  }

  // animateIntro() {
  //   // let message = new PIXI.Text(
  //   //   "",
  //   //   {fontFamily: "Quicksand", fontSize: "60px", fill: "white", align: 'center'}
  //   // );

  //   // message.position.set((window.innerWidth/2) - (message.width/2), (window.innerHeight/2) - (message.height/2));
  //   // message.alpha = 0;

  //   // this.state.stage.addChild(message);
  //   // this.state.renderer.render(this.state.stage);
  //   let text = "let's go on an adventure";

  //   let offset = 0;
  //   for(let i = 0; i < text.length; i++) {
  //     console.log("i is at ", i);
  //     let letter = new PIXI.Text(text[i], {fontFamily: "Quicksand", fontSize: "60px", fill: "white", align: 'center'});
  //     let xPos = offset;
  //     if (i == 1) xPos = 12; 
  //     letter.position.set((((window.innerWidth/2) - 300) + xPos ), (window.innerHeight/2) - (letter.height/2));
  //     letter.alpha = 0;
  //     this.state.stage.addChild(letter);
  //     this.animateLetter(letter);
  //     offset += 35;
  //   }

  // }

  // animateLetter(letter) {
  //   if (letter.alpha >= 1) return;

  //   requestAnimationFrame(function(){
  //     this.animateLetter(letter);
  //   }.bind(this));

  //   letter.alpha += 0.01;
  //   this.state.renderer.render(this.state.stage);
  // }

  animateIntro(message) {
    if (message.alpha >= 1) return;
    requestAnimationFrame(function(){
      this.animateIntro(message);
    }.bind(this));

    message.alpha += 0.01;
    this.state.renderer.render(this.state.stage);
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
    console.log("test 2");

    let message = new PIXI.Text(
      "let's go on an adventure",
      {fontFamily: "Quicksand", fontSize: "60px", fill: "white", align: 'center'}
    );

    message.position.set((window.innerWidth/2) - (message.width/2), (window.innerHeight/2) - (message.height/2));

    message.alpha = 0;

    stage.addChild(message);
    renderer.render(stage);

    this.animateIntro(message);
  }

  render () {
    return (
      <div></div>
    )
  }
}

export default Page;