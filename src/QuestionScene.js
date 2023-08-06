import BaseScene from './BaseScene';


class QuestionScene extends BaseScene 
{
  constructor() {
    super('QuestionScene');

    this.choice1Txt = {};
    this.choice2Txt = {};
    this.choice3Txt = {};
    this.choice4Txt = {};
    this.questionTxt = {};
    this.fontSize = Math.min(window.innerWidth * 0.05, window.innerHeight * 0.05);
  }

  preload() {
    super.preload();
  }


  create() {
    super.create();
    console.log("QuestionScene");
    this.AddQuestions();
  }

  AddQuestions(){
    const randomNum1 =  Phaser.Math.Between(1, 15);
    const randomNum2 =  Phaser.Math.Between(1, 15);
    const answer = randomNum1 + randomNum2;
    const mainQ = randomNum1 + " + " + randomNum2 + " = ";
    const yPosition = window.innerHeight *.40;
    const xPosition = window.innerWidth *.45;
    this.questionTxt = this.add.text(xPosition, yPosition, mainQ, { fontFamily: 'Georgia', fontSize: this.fontSize, color: '#ff0000', align: 'center' });

    this.PutChoices(answer);
  }

  PutChoices(answer){
    console.log("PutChoices");
    console.log(this.answer1Img.x);
    console.log(this.answer2Img.x);


    let uniqueNumbersArr = this.generateUniqueRandomNumbers(1, 30, 3, answer);

    const indexPosition = Phaser.Math.Between(1, 3);

    uniqueNumbersArr.splice(indexPosition, 0, answer);

    console.log("uniqueNumbersArr");
    console.log(uniqueNumbersArr);

    this.choice1Txt = this.add.text(this.answer1Img.x - 10, this.answer1Img.y + 27, uniqueNumbersArr[0], { fontFamily: 'Georgia', fontSize: this.fontSize, color: '#ff0000', align: 'center' });
    this.choice2Txt = this.add.text(this.answer2Img.x - 10, this.answer2Img.y + 27, uniqueNumbersArr[1], { fontFamily: 'Georgia', fontSize: this.fontSize, color: '#ff0000', align: 'center' });
    this.choice3Txt = this.add.text(this.answer3Img.x - 10, this.answer3Img.y + 27, uniqueNumbersArr[2], { fontFamily: 'Georgia', fontSize: this.fontSize, color: '#ff0000', align: 'center' });
    this.choice4Txt = this.add.text(this.answer4Img.x - 10, this.answer4Img.y + 27, uniqueNumbersArr[3], { fontFamily: 'Georgia', fontSize: this.fontSize, color: '#ff0000', align: 'center' });

    window.addEventListener('resize', this.UpdateTextPosition.bind(this));
  }

  generateUniqueRandomNumbers(min, max, count, excludeNumber) {
    if (max - min + 1 - (excludeNumber ? 1 : 0) < count) {
        throw new Error('Range is too small to generate unique random numbers.');
    }

    const uniqueNumbers = new Set();

    while (uniqueNumbers.size < count) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        
        if (randomNumber !== excludeNumber) {
            uniqueNumbers.add(randomNumber);
        }
    }

    return Array.from(uniqueNumbers);
  }

  UpdateTextPosition(){
    console.log("this.answer1Img.x");

    this.choice1Txt.x = this.answer1Img.x - 10;
    this.choice1Txt.y = this.answer1Img.y + 27;

    this.choice2Txt.x = this.answer2Img.x - 10;
    this.choice2Txt.y = this.answer2Img.y + 27;

    this.choice3Txt.x = this.answer3Img.x - 10;
    this.choice3Txt.y = this.answer3Img.y + 27;

    this.choice4Txt.x = this.answer4Img.x - 10;
    this.choice4Txt.y = this.answer4Img.y + 27;

    const yPosition = window.innerHeight *.40;
    const xPosition = window.innerWidth *.45;

    this.questionTxt.x = xPosition;
    this.questionTxt.y = yPosition;

    const fontSize = Math.min(window.innerWidth * 0.05, window.innerHeight * 0.05);

    this.questionTxt.setFontSize(fontSize)
    this.choice1Txt.setFontSize(fontSize);
    this.choice2Txt.setFontSize(fontSize);
    this.choice3Txt.setFontSize(fontSize);
    this.choice4Txt.setFontSize(fontSize);

  }

}

export default QuestionScene;