import React from 'react';
var PIXI = require('pixi.js');

class Page extends React.Component {
  render () {
    //Create the renderer
    var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);

    //Add the canvas to the HTML document
    document.body.appendChild(renderer.view);

    //Create a container object called the `stage`
    var stage = new PIXI.Container();

    //Tell the `renderer` to `render` the `stage`
    renderer.view.style.position = "absolute";
    renderer.view.style.display = "block";
    renderer.autoResize = true;
    renderer.resize(window.innerWidth, window.innerHeight);
    renderer.render(stage);

    return (
      <h1>Example Page</h1>
    )
  }
}

export default Page;