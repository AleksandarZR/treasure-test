'use client'

import React, { useEffect, useState } from "react";
import styles from "./question.module.css";

interface Props {
    questionText: string,
    answerExpected: string,
    cipher: string
};

export default function Question(props: Props) {
    const [answer, setAnswer] = useState("");

    const isAnswerCorrect = () => {
        if (answer === props.answerExpected) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className={styles.container}>
            <p className={styles.question}>{props.questionText}</p>
            <input className={styles.answer} type="text" id={props.answerExpected} value={answer} onChange={e => setAnswer(e.target.value)}></input>
            <span className={isAnswerCorrect() ? styles.cipherVisible : styles.cipherInvisible}>
                <span>{props.cipher}</span>
            </span>
        </div>
    );
}