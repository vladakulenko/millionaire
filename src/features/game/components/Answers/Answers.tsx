import { useState } from 'react';
import styles from './Answers.module.css';
import { Answer } from '@/types/game';

type AnswersProps = {
    answers: Answer[];
    correctAnswers: string[];
    onCorrect: () => void;
    onWrong: () => void;
};

type Status = 'idle' | 'selected' | 'correct' | 'wrong';

const Answers = ({
    answers,
    correctAnswers,
    onCorrect,
    onWrong,
}: AnswersProps) => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [status, setStatus] = useState<Status>('idle');

    const handleClick = (id: string) => {
        if (status !== 'idle') return;

        setSelectedId(id);
        setStatus('selected');

        // пауза перед проверкой
        setTimeout(() => {
            const isCorrect = correctAnswers.includes(id);

            setStatus(isCorrect ? 'correct' : 'wrong');

            // пауза перед переходом
            setTimeout(() => {
                if (isCorrect) {
                    onCorrect();
                } else {
                    onWrong();
                }

                setSelectedId(null);
                setStatus('idle');
            }, 1500);
        }, 1000);
    };

    return (
        <div className={styles.answers}>
            {answers.map((answer) => {
                const isSelected = answer.id === selectedId;
                const isCorrect = correctAnswers.includes(answer.id);

                let className = styles.answer;

                if (status === 'selected' && isSelected) {
                    className += ` ${styles.selected}`;
                }

                if (status === 'correct' && isSelected) {
                    className += ` ${styles.correct}`;
                }

                if (status === 'wrong') {
                    if (isSelected) {
                        className += ` ${styles.wrong}`;
                    }
                    if (isCorrect) {
                        className += ` ${styles.correct}`;
                    }
                }

                return (
                    <button
                        key={answer.id}
                        className={className}
                        onClick={() => handleClick(answer.id)}
                        disabled={status !== 'idle'}
                    >
                        <span className={styles.answerText}>
                            <strong>{answer.id}</strong> {answer.text}
                        </span>
                    </button>
                );
            })}
        </div>
    );
};

export default Answers;
