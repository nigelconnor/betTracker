import express from 'express';
import Bet from './betModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line

// Get all bets, using try/catch to handle errors
router.get('/', asyncHandler( async (req, res) => {
    try {
        const bets = await Bet.find();
        res.status(200).json(bets);
    } catch (error) {
        handleError(res, error.message);
    }
}));

// get all bets
//router.get('/', (req, res) => {
//    const bets = stubAPI.getAll();
//    res.send({ bets: bets });
//});

// Create a bet, using async handler
router.post('/', asyncHandler(async (req, res) => {
    const bet = await Bet.create(req.body);
    res.status(201).json(bet);
}));

// Update a bet
router.put('/:id', asyncHandler(async (req, res) => {
    if (req.body._id) delete req.body._id;
    console.log(req.params.id);
    const bet = await Bet.update({
        _id: req.params.id,
    }, req.body, {
            upsert: false,
        });
    if (!bet) return res.sendStatus(404);
    return res.json(200, bet);
}));

// Delete a contact
router.delete('/:id', asyncHandler(async (req, res) => {
    const bet = await Bet.findById(req.params.id);
    if (!bet) return res.send(404);
    await bet.remove();
    return res.status(204).send(bet);
}));


/**
 * Handle general errors.
 * @param {object} res The response object
 * @param {object} err The error object.
 * @return {object} The response object
 */
function handleError(res, err) {
    return res.send(500, err);
};

export default router;