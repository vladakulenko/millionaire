import styles from './Question.module.css';

type QuestionProps = {
    question: string;
};

const Question = ({ question }: QuestionProps) => {
    return <div className={styles.question}>{question}</div>;
};

export default Question;
