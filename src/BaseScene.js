import Phaser from 'phaser';

import bg from './assets/angrybirdbg.png';
import ground from './assets/angrybirdground.png';
import badPiggies1 from './assets/pigbaddies1.png';
import badPiggies2 from './assets/pigbaddies2.png';
import badPiggies3 from './assets/pigbaddies3.png';
import badPiggies4 from './assets/pigbaddies4.png';
// import badPiggies1 from './assets/mobilebadpiggies.png';
// import badPiggies2 from './assets/mobilebadpiggies.png';
// import badPiggies3 from './assets/mobilebadpiggies.png';
// import badPiggies4 from './assets/mobilebadpiggies.png';
import angryBird from './assets/angrybird.png';

import { scaleImage } from './imageUtils.js';


class BaseScene extends Phaser.Scene {
  constructor(key) {
    super(key);
    // this.config = config;
    this.backgroundImg;
    this.groundImg;
    this.birdImg;
    this.answer1Img;
    this.answer2Img;
    this.answer3Img;
    this.answer4Img;
  }

  preload ()
  {
    this.load.image('background', bg);
    this.load.image('ground', ground);
    this.load.image('answer1Img', badPiggies1);
    this.load.image('answer2Img', badPiggies2);
    this.load.image('answer3Img', badPiggies3);
    this.load.image('answer4Img', badPiggies4);
    this.load.image('bird', angryBird);

  }

  create ()
  {
      // Set the background image as the background of the game scene
    this.backgroundImg = this.add.image(0, 0, 'background').setOrigin(0, 0);
    this.groundImg = this.physics.add.image(0, 0, 'ground').setOrigin(0, 1);
    this.birdImg = this.physics.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'bird'); 
    this.answer1Img = this.physics.add.sprite(window.innerWidth * .20, window.innerHeight * .30, 'answer1Img');
    this.answer2Img = this.physics.add.sprite(window.innerWidth * .20, window.innerHeight * .30, 'answer2Img');
    this.answer3Img = this.physics.add.sprite(window.innerWidth * .20, window.innerHeight * .30, 'answer3Img');
    this.answer4Img = this.physics.add.sprite(window.innerWidth * .20, window.innerHeight * .30, 'answer4Img');

    this.birdImg.setBounce(0.2);

    this.groundImg.body.setImmovable(true);
    this.groundImg.body.allowGravity = false;

    //answerImg physics properties
    this.answer1Img.body.setImmovable(true);
    this.answer1Img.body.allowGravity = false;

    this.answer2Img.body.setImmovable(true);
    this.answer2Img.body.allowGravity = false;

    this.answer3Img.body.setImmovable(true);
    this.answer3Img.body.allowGravity = false;

    this.answer4Img.body.setImmovable(true);
    this.answer4Img.body.allowGravity = false;

    this.physics.add.collider(this.birdImg, this.groundImg);

    this.add.text(10, 10, `Window Width: ${window.screen.width}`, {
      font: '20px Arial',
      fill: '#ffffff',
    });
    this.add.text(10, 40, `Window Height: ${window.screen.height}`, {
      font: '20px Arial',
      fill: '#ffffff',
    });
    

    this.answer1Img.setInteractive(); 
    this.answer2Img.setInteractive(); 
    this.answer3Img.setInteractive(); 
    this.answer4Img.setInteractive(); 

    this.answer1Img.on('pointerdown', () =>{
      this.HitAnswerImg(this.birdImg, this.answer1Img); 
    });

    this.answer2Img.on('pointerdown',  () => {
      this.HitAnswerImg(this.birdImg, this.answer2Img); 
    });

    this.answer3Img.on('pointerdown', () => {
      this.HitAnswerImg(this.birdImg, this.answer3Img); 
    }); 

    this.answer4Img.on('pointerdown', () => {
      this.HitAnswerImg(this.birdImg, this.answer4Img);    
    });

    this.updateBackgroundSize();

    window.addEventListener('resize', this.updateBackgroundSize.bind(this));

    this.AddCollisionDetection();

  }

  updateBackgroundSize() {

    scaleImage(this.backgroundImg, 1, 1);
    scaleImage(this.groundImg, 1, 0.07);
    scaleImage(this.birdImg, 0.04, 0.04);
    scaleImage(this.answer1Img, 0.05, 0.05);
    scaleImage(this.answer2Img, 0.05, 0.05);
    scaleImage(this.answer3Img, 0.05, 0.05);
    scaleImage(this.answer4Img, 0.05, 0.05);
  
    this.groundImg.setPosition(0, window.innerHeight);
    this.birdImg.setPosition(window.innerWidth * .08, window.innerHeight * .75); 
    this.answer1Img.setPosition(window.innerWidth * .90, window.innerHeight * .15);
    this.answer2Img.setPosition(window.innerWidth * .90, window.innerHeight * .35);
    this.answer3Img.setPosition(window.innerWidth * .90, window.innerHeight * .55);   
    this.answer4Img.setPosition(window.innerWidth * .90, window.innerHeight * .75);
  
  }

  AddCollisionDetection(){
    this.physics.add.collider(this.birdImg, this.answer1Img, () => {
      this.birdImg.setVelocity(0, 0); // Stop object2 on collision with object1
      this.birdImg.body.allowGravity = true;
    });
  
    this.physics.add.collider(this.birdImg, this.answer2Img, () => {
      this.birdImg.setVelocity(0, 0); // Stop object2 on collision with object1
      this.birdImg.body.allowGravity = true;
    });
  
    this.physics.add.collider(this.birdImg, this.answer3Img, () => {
      this.birdImg.setVelocity(0, 0); // Stop object2 on collision with object1
      this.birdImg.body.allowGravity = true;
    });

    this.physics.add.collider(this.birdImg, this.answer4Img, () => {
      this.birdImg.setVelocity(0, 0); // Stop object2 on collision with object1
      this.birdImg.body.allowGravity = true;
    });
  }

  HitAnswerImg(hitterObj, targetObj){
    hitterObj.body.allowGravity = false;

      //const launchAngle = Math.PI / 4; // Example launch angle (45 degrees)
    const launchAngle = Math.PI / 3.75;

      // Calculate the horizontal distance between object1 and object2
      const distance = Math.abs(targetObj.x - hitterObj.x);

      const startX = hitterObj.x;
      const startY = hitterObj.y;
      const endX = targetObj.x;
      const endY = targetObj.y;

      const controlPoint1X = startX + Math.cos(launchAngle) * distance / 3; 
      const controlPoint1Y = startY - Math.sin(launchAngle) * distance / 3; 

      const controlPoint2X = endX - Math.cos(launchAngle) * distance / 3; 
      const controlPoint2Y = endY - Math.sin(launchAngle) * distance / 3; 

      let curve = new Phaser.Curves.CubicBezier(
        new Phaser.Math.Vector2(startX, startY),
        new Phaser.Math.Vector2(controlPoint1X, controlPoint1Y),
        new Phaser.Math.Vector2(controlPoint2X, controlPoint2Y),
        new Phaser.Math.Vector2(endX, endY)
      );
  
      const duration = 2500;
      const steps = 100;
      let t = 0;
  
      this.time.addEvent({
        delay: duration / steps,
        repeat: steps - 1,
        callback: () => {
          t += 1 / steps;
          const position = curve.getPoint(t);
          hitterObj.x = position.x;
          hitterObj.y = position.y + 0.5 * 5 * Math.pow(t * duration / 1000, 2); // Apply gravity
        },
        // onComplete: () => {
        //   launched = false;
        // },
      });
  }

 
  
}

export default BaseScene;