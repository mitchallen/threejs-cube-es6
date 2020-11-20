/*
  In a browser must use script type="module" parameter:

  <script type="module" src="./src/app.js"></script>
 */

import {CubeSceneFactory} from './cube-scene.js';

var cubeScene = CubeSceneFactory.create({
  clear: "#111111"
});

var render = function() {
  requestAnimationFrame( render );
  cubeScene.step();
}

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){
    cubeScene.resize();
}

render();