import styles from './PrizeLadder.module.css';
import { Prize } from '@/types/game';

type PrizeLadderProps = {
    isMenuOpen: boolean;
    prizeLadder: Prize[];
    currentLevel: number;
};

const PrizeLadder = ({
    isMenuOpen,
    prizeLadder,
    currentLevel,
}: PrizeLadderProps) => {
    return (
        <aside
            className={`${styles.prizeLadder} ${isMenuOpen ? styles.active : ''}`}
        >
            <ol className={styles.prizeList} reversed>
                {[...prizeLadder]
                    .sort((a, b) => b.level - a.level)
                    .map((prize) => {
                        const isCurrent = prize.level === currentLevel;
                        const isPassed = prize.level < currentLevel;

                        return (
                            <li
                                key={prize.level}
                                className={`${styles.prizeItem} ${isCurrent ? styles.current : ''} ${isPassed ? styles.disabled : ''}`}
                            >
                                <span className={styles.prizeAmount}>
                                    ${prize.amount.toLocaleString()}
                                </span>
                            </li>
                        );
                    })}
            </ol>
        </aside>
    );
};

export default PrizeLadder;
