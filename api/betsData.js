import betModel from './bets/betModel';

const bets = [
    {
        bookie: 'PaddyPower',
        category: 'Soccer',
        betDescription: 'Liverpool to win the CL',
        odds: 3,
        stake: 100,
        potentialWinnings: 300,
        winLoss: 'L',
        settled: 'N',
        user: 'fmullins'
    },
    {
       
        bookie: 'BetFair',
        category: 'Soccer',
        betDescription: 'Aston Villa to be promoted to Premiership',
        odds: 2,
        stake: 100,
        potentialWinnings: 200,
        winLoss: 'L',
        settled: 'N',
        user: 'nigeloconnor'
    }
    
];
export const loadBets = () => {
    betModel.find({}).remove(function () {
        betModel.collection.insert(bets, (err, docs) => {
            if (err) {
                console.log(`failed to Load Bet Data`);
            } else {
                console.info(`${bets.length} bets were successfully stored.`);
            }
        });
    });
};