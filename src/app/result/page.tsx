import GameIntroScreen from '@/features/game/screens/GameIntroScreen/GameIntroScreen';

type ResultPageProps = {
    searchParams: {
        amount?: string;
    };
};

const Result = ({ searchParams }: ResultPageProps) => {
    const amount = searchParams.amount ?? '0';

    return (
        <GameIntroScreen
            title={`$${amount} earned`}
            subTitle='Total score: '
            variant='result'
        />
    );
};

export default Result;
