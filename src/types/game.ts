export type Answer = {
    id: string;
    text: string;
};

export type Question = {
    id: number;
    level: number;
    question: string;
    answers: Answer[];
    correctAnswers: string[];
};

export type Prize = {
    level: number;
    amount: number;
};

export type GameConfig = {
    prizeLadder: Prize[];
    questions: Question[];
};
