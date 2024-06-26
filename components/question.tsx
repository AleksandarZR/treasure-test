'use client'

import React, { useEffect, useState } from "react";
import styles from "./question.module.css";

interface Props {
    id: number,
    questionText: string,
    answerExpected: string[],
    cipher: string,
    onAnswered(id: number, isAnswerCorrect: boolean): void
};

export default function Question(props: Props) {
    const [answer, setAnswer] = useState("");

    const isAnswerCorrect = () => {
        if (props.answerExpected.includes(answer)) {
            return true;
        } else {
            return false;
        }
    }

    const answerChanged = (value: any) => {
        setAnswer(value);
        props.onAnswered(props.id, (props.answerExpected.includes(value))? true : false);
    }

    return (
        <div className={styles.container}>
            <p className={styles.question}>{props.questionText}</p>
            <input className={styles.answer} type="text" value={answer} onChange={e => answerChanged(e.target.value)}></input>
            <div className={isAnswerCorrect() ? styles.cipherVisible : styles.cipherInvisible}>
                {props.cipher}
            </div>
        </div>
    );
}