'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Question from "../components/question";
import Coins from '../components/coins';
import { questions } from '../data/mocks';
import { useState, useEffect } from 'react';

interface QuestionPair {
    id: number;
    isAnswerCorrect: boolean;
}
var questionPairs = new Array<QuestionPair>();

export default function Home() {
    const [allAnswersCorrect, setAllAnswersCorrect] = useState(false);

    useEffect(() => {
        console.log("Initialize called");
        if (questionPairs.length === 0) {
            questions.forEach((q) => {
                const p: QuestionPair = { id: q.id, isAnswerCorrect: false };
                questionPairs.push(p);
            });
        }
    }, []);

    const answerChanged = (id: number, answeredCorrectly: boolean) => {
        console.log('answer changed: ' + id + " " + answeredCorrectly);
        questionPairs.forEach((qp) => {
            if (qp.id === id) {
                qp.isAnswerCorrect = answeredCorrectly;
                console.log('id, qp.id, answeredCorrectly: ' + id + ' ' + qp.id + ' ' + answeredCorrectly)
            }
        });

        updateAnswerSummary();

        console.log(questionPairs);
    }

    const updateAnswerSummary = () => {
        let allAnswersAreCorrect = true;

        questionPairs.forEach((qp) => {
            if (!qp.isAnswerCorrect) {
                allAnswersAreCorrect = false;
            }
        });

        setAllAnswersCorrect(allAnswersAreCorrect);
    }

    return (
        <main className={styles.main}>
            <Coins visibility={allAnswersCorrect} />

            <div className={styles.picture}>
                <img width={400}
                    height="auto"
                    src="znanje.png"
                />
            </div>

            <div className={styles.picture}>
                <Image
                    src="pirate.png"
                    alt="Pirate"
                    className={styles.pictureInner}
                    width={500}
                    height={500}
                />
            </div>

            <div className={styles.center}>
                {questions.map((q) => (
                    <Question key={q.id} id={q.id} questionText={q.questionText} answerExpected={q.answerExpected} cipher={q.cipher} onAnswered={answerChanged} />
                ))}
            </div>

            <div className={styles.picture}>
                <Image
                    src="treasure.png"
                    alt="Treasure"
                    className={styles.pictureInner}
                    width={500}
                    height={500}
                />
            </div>
        </main>
    );
}