'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Question from "../components/question";
import {questions} from '../data/mocks';
import {useState} from 'react';

interface QuestionPair {
    id: number;
    isAnswerCorrect: boolean;
}

export default function Home() {
    const [allAnswersCorrect, setAllAnswersCorrect] = useState(false);
    var questionPairs = new Array<QuestionPair>();

    const Initialize = () => {
        questions.forEach((q) => {
            const p: QuestionPair = { id: q.id, isAnswerCorrect: false};
            questionPairs.push(p);
        });
    }
    Initialize();

    const answerChanged = (id: number, answeredCorrectly: boolean) => {
        questionPairs.forEach((qp)=> {
            if (qp.id === id) {
                qp.isAnswerCorrect = answeredCorrectly;
            }
        });

        updateAnswerSummary();

        console.log(questionPairs);
    }

    const updateAnswerSummary = () => {
        let allAnswersAreCorrect = true;

        questionPairs.forEach((qp)=> {
            if (!qp.isAnswerCorrect) {
                allAnswersAreCorrect = false;
            }
        });
        
        setAllAnswersCorrect(allAnswersAreCorrect);
    }

    return (
        <main className={styles.main}>
            <div className={styles.picture}>
                <Image
                    src="/pirate.png"
                    alt="Pirate"
                    className={styles.pictureInner}
                    width={500}
                    height={500}
                />
            </div>

            <div className={styles.center}>
                {questions.map((q)=> (
                    <Question key={q.id} id={q.id} questionText={q.questionText} answerExpected={q.answerExpected} cipher={q.cipher} onAnswered={answerChanged}/>
                ))}
            </div>

            <div className={styles.picture}>
                <Image
                    src="/treasure.png"
                    alt="Treasure"
                    className={styles.pictureInner}
                    width={500}
                    height={500}
                />
            </div>
        </main>
    );
}