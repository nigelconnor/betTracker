/*import express from 'express';
import stubAPI from './stubAPI';

const router = express.Router();

// get all bets
router.get('/', (req, res) => {
    const bets = stubAPI.getAll();
    res.send({ bets: bets });
});


// Add a bet
router.post('/', (req, res) => {
    const newBet = req.body;

    if (newBet && stubAPI.add(newBet.bookie, newBet.category, newBet.betDescription, newBet.odds, newBet.stake, newBet.potentialWinnings, newBet.winLoss, newBet.settled, newBet.user)) {
        return res.status(201).send({ message: 'Bet Created' });
    }
    return res.status(400).send({ message: 'Unable to find Bet in request.' });
});

// get a bet
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const bet = stubAPI.getBet(id);

    if (bet) {
        return res.status(200).send(bet);
    }
    return res.status(404).send({ message: `Unable to find Bet with id ${id}` });
});

// Update a bet
router.put('/:id', (req, res) => {
    const key = req.params.id;
    const updateBet = req.body;

    if (updateBet && stubAPI.update(key, key, updateBet.bookie, updateBet.category, updateBet.betDescription, updateBet.odds, updateBet.stake, updateBet.potentialWinnings, updateBet.winLoss, updateBet.settled, updateBet.user)) {
        res.status(200).send({ message: 'Bet Updated' });
    } else {
        res.status(400).send({ message: 'Unable to find bet in request. No Bet Found in body' });
    }
});

// delete a bet
router.delete('/:id', (req, res) => {
    const key = req.params.id;
    //const updateBet = req.body;

    if (key && stubAPI.delete(key)) {
        res.status(200).send({ message: 'Bet Deleted' });
    } else {
        res.status(400).send({ message: 'Unable to find bet in request. Unable to delete.' });
    }
});

export default router;
*/