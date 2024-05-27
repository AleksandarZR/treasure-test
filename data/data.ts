// Ipak ne koristim ovo vec mocks.ts
import {Question as QuestionType, QuestionArray} from '../types/types';

export default class Data {
    questionArray: QuestionArray;

    constructor() {
        this.questionArray = new Array<QuestionType>();

        const question1: QuestionType = { questionText: "Koje godine se odigrala Kosovska bitka?", answerExpected: "1389", cipher: "5"};
        const question2: QuestionType = { questionText: "2 + 5 x 3 - 10 / 2 =", answerExpected: "12", cipher: "2"};
        const question3: QuestionType = { questionText: "Koliko krakova ima oktopod?", answerExpected: "8", cipher: "7"};
        const question4: QuestionType = { questionText: "Kako se zove prestonica Italije?", answerExpected: "Rim", cipher: "3"};
        
        this.questionArray.push(question1);
        this.questionArray.push(question2);
        this.questionArray.push(question3);
        this.questionArray.push(question4);
    }
}