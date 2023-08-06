import bg from './assets/angrybirdbg.png';
import ground from './assets/angrybirdground.png';
import badPiggies1 from './assets/pigbaddies1.png';
import badPiggies2 from './assets/pigbaddies2.png';
import badPiggies3 from './assets/pigbaddies3.png';
import badPiggies4 from './assets/pigbaddies4.png';
import angryBird from './assets/angrybird.png';

import { scaleImage } from './imageUtils.js';
import BaseScene from './BaseScene';

class PlayScene extends BaseScene
{ 
  constructor ()
  {
    super('PlayScene');   
  }

  preload (){
    super.preload();
  }

  create(){
    super.create();

    console.log("PlayScene");

    this.scene.start('QuestionScene');
  }



  
}

export default PlayScene;