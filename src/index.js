import Phaser from 'phaser';
import PlayScene from './PlayScene';
import QuestionScene from './QuestionScene';

const Scenes = [PlayScene, QuestionScene];

const createScene = Scene => new Scene()

const initScenes = () => Scenes.map(createScene)

const config = {
    //type: Phaser.AUTO,
    type: Phaser.CANVAS,
    width: window.innerWidth,
    height: window.innerHeight,
    // width: window.screen.width,
    // height: window.screen.height,
    scale: {
      mode: Phaser.Scale.RESIZE,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 400 },
        debug: false
      }
    },
    scene: initScenes()
  };

new Phaser.Game(config);
