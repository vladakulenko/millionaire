'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import Button from '@/shared/components/Button/Button';

import styles from './GameIntroScreen.module.css';

interface GameIntroScreenProps {
    title: string;
    subTitle?: string;
    variant: 'start' | 'result';
}

const GameIntroScreen = ({
    title,
    subTitle,
    variant,
}: GameIntroScreenProps) => {
    const router = useRouter();
    const redirectTo = variant === 'start' ? '/game' : '/';
    const buttonText = variant === 'start' ? 'Start' : 'Try again';

    return (
        <main className={`${styles.main} ${styles[variant]}`}>
            <Image
                src='/images/game/hand.png'
                alt='Hand mobile'
                width={288}
                height={192}
                className={`${styles.img} ${styles.mobile}`}
                priority
            />
            <Image
                src='/images/game/hand-desktop.png'
                alt='Hand desktop'
                width={624}
                height={367}
                className={`${styles.img} ${styles.desktop}`}
                priority
            />
            <div className={styles.content}>
                <div className={styles.titleWrapper}>
                    {subTitle && <h2>{subTitle}</h2>}
                    <h1>{title}</h1>
                </div>
                <Button
                    buttonText={buttonText}
                    onClick={() => router.push(redirectTo)}
                />
            </div>
        </main>
    );
};
export default GameIntroScreen;
