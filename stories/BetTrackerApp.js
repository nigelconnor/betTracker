import React from 'react';
import { storiesOf } from '@storybook/react';
import AddBetForm from '../src/components/AddBetForm';

storiesOf('Bet Tracker Form', module)
    .add('default', () => <AddBetForm />
    )