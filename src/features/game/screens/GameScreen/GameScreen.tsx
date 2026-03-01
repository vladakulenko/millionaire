'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import rawConfig from '@/data/gameConfig.json';
import { GameConfig } from '@/types/game';

import Answers from '../../components/Answers/Answers';
import Question from '../../components/Question/Question';
import PrizeLadder from '../../components/PrizeLadder/PrizeLadder';

import styles from './GameScreen.module.css';

const gameConfig = rawConfig as GameConfig;

const GameScreen = () => {
    const router = useRouter();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentLevel, setCurrentLevel] = useState(1);

    const currentQuestion = gameConfig.questions.find(
        (q) => q.level === currentLevel,
    );

    const currentPrize = gameConfig.prizeLadder.find(
        (p) => p.level === currentLevel,
    );

    const handleCorrect = () => {
        if (currentLevel === gameConfig.questions.length) {
            router.push(`/result?amount=${currentPrize?.amount ?? 0}`);
            return;
        }

        setCurrentLevel((prev) => prev + 1);
    };

    const handleWrong = () => {
        const previousPrize = gameConfig.prizeLadder.find(
            (p) => p.level === currentLevel - 1,
        );

        router.push(`/result?amount=${previousPrize?.amount ?? 0}`);
    };

    return (
        <main className={styles.main}>
            <Image
                src={
                    isMenuOpen
                        ? '/images/game/close.png'
                        : '/images/game/menu.png'
                }
                alt=''
                width={24}
                height={24}
                className={styles.icon}
                onClick={() => setIsMenuOpen((prev) => !prev)}
            />

            <div className={styles.wrapper}>
                {currentQuestion && (
                    <>
                        <Question question={currentQuestion.question} />
                        <Answers
                            answers={currentQuestion.answers}
                            correctAnswers={currentQuestion.correctAnswers}
                            onCorrect={handleCorrect}
                            onWrong={handleWrong}
                        />
                    </>
                )}
            </div>

            <PrizeLadder
                isMenuOpen={isMenuOpen}
                prizeLadder={gameConfig.prizeLadder}
                currentLevel={currentLevel}
            />
        </main>
    );
};

export default GameScreen;
