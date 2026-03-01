import GameIntroScreen from '@/features/game/screens/GameIntroScreen/GameIntroScreen';

type ResultPageProps = {
    searchParams: {
        amount?: string;
    };
};

export default async function Result({ searchParams }: ResultPageProps) {
    const params = await searchParams;
    const amount = params.amount ?? '0';

    return (
        <GameIntroScreen
            title={`$${amount} earned`}
            subTitle='Total score:'
            variant='result'
        />
    );
}
