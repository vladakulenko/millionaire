import styles from './Button.module.css';

type ButtonProps = {
    buttonText: string;
    onClick: () => void;
};

const Button = ({ buttonText, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className={styles.button}>
            {buttonText}
        </button>
    );
};

export default Button;
