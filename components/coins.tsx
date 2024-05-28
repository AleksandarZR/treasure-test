import styles from './coins.module.css';

interface Props {
    visibility: boolean;
};

export default function Coins(props: Props) {
    return(
        <div className={props.visibility? styles.containerVisible : styles.containerInvisible}>
            <div className={`${styles.coin} ${styles.coin1}`}>
                $
            </div>

            <div className={`${styles.coin} ${styles.coin2}`}>
                $
            </div>

            <div className={`${styles.coin} ${styles.coin3}`}>
                $
            </div>

            <div className={`${styles.coin} ${styles.coin4}`}>
                $
            </div>

            <div className={`${styles.coin} ${styles.coin5}`}>
                $
            </div>

            <div className={`${styles.coin} ${styles.coin6}`}>
                $
            </div>

            <div className={`${styles.coin} ${styles.coin7}`}>
                $
            </div>

            <div className={`${styles.coin} ${styles.coin8}`}>
                $
            </div>

            <div className={`${styles.coin} ${styles.coin9}`}>
                $
            </div>

            <div className={`${styles.coin} ${styles.coin10}`}>
                $
            </div>

            <div className={`${styles.coin} ${styles.coin11}`}>
                $
            </div>

            <div className={`${styles.coin} ${styles.coin12}`}>
                $
            </div>

            <div className={`${styles.coin} ${styles.coin13}`}>
                $
            </div>

            <div className={`${styles.coin} ${styles.coin14}`}>
                $
            </div>

            <div className={`${styles.coin} ${styles.coin15}`}>
                $
            </div>

            <div className={`${styles.coin} ${styles.coin16}`}>
                $
            </div>

            <div className={`${styles.coin} ${styles.coin17}`}>
                $
            </div>

            <div className={`${styles.coin} ${styles.coin18}`}>
                $
            </div>
        </div>
    );
}