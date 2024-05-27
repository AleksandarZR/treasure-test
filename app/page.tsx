import Image from "next/image";
import styles from "./page.module.css";
import Question from "../components/question";
import {questions} from '../data/mocks';

export default function Home() {
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
                    <Question key={q.id} questionText={q.questionText} answerExpected={q.answerExpected} cipher={q.cipher}/>
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