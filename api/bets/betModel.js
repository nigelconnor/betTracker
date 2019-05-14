import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BetSchema = new Schema({
    bookie: { type: String, required: true },
    category: { type: String, required: true },
    betDescription: { type: String, required: true },
    odds: {
        type: Number,
        min: 0,
        max: 999,
    },
    stake: {
        type: Number,
        min: 0,
        max: 9999,
    },
    potentialWinnings: {
        type: Number,
        min: 0,
        max: 99999,
    },
    winLoss: {
        type: String,
        required: false
    },
    settled: {
        type: String,
        required: false
    },
    user: String
});

export default mongoose.model('Bet', BetSchema);