import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import AddBetForm from '../src/components/AddBetForm';
import Bet from '../src/components/Bet';
import BetList from '../src/components/BetList'

const bet =
{
    id: 1,
    bookie: 'PaddyPower',
    category: 'Soccer',
    betdescription: 'Liverpool to win the league',
    odds: 3.5,
    stake: 100,
    potentialWinnings: 350,
    winLoss: 'N',
    settled: 'Y'
};

storiesOf('Bet Tracker Add', module)
    .add('form', () => <AddBetForm />
    )

storiesOf('Bet Tracker Bet', module)
    .add('Bet', () => <Bet bet={bet} />)

storiesOf('BetTracker Bet List', module)
    .add('List', () => {
        const defaultPosts = [
            {
                ...bet, id: 4,
                bookie: 'BetFair Exchange',
                category: 'F1',
                betdescription: 'Ferrari to win Constructors Championship 2019',
                odds: '4',
                stake: '50',
                potentialWinnings: '200',
                winLoss: 'N',
                settled: 'N',
                user: 'nigeloconnor'
            }
        ];
        return <BetList bets={defaultPosts} />
    });


