import React from 'react';
import { storiesOf } from '@storybook/react';
import AddBetForm from '../src/components/AddBetForm';

import Bet from '../src/components/Bet';


const bet = 
    {
        id: 1,
        bookie: 'PaddyPower',
        category: 'Soccer',
        betDescription: 'Liverpool to win the league',
        odds: '3.5',
        stake: '100',
        potentialWinnings: '350',
        winLoss: 'N',
        settled: 'Y'
    };

storiesOf('Bet Tracker', module)
    .add('form', () => <AddBetForm />
    )

    .add('Bet', () => <Bet bet = {bet} />)