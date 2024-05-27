export interface Question {
    questionText: string;
    answerExpected: string;
    cipher: string;
}

export type QuestionArray = Array<Question>;

