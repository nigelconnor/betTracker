import betModel from './bets/betModel';

const bets = [
    {
        bookie: 'Getting from APi PaddyPower',
        category: 'Soccer',
        betDescription: 'Liverpool to win the league',
        odds: 3,
        stake: 100,
        potentialWinnings: 30,
        winLoss: 'N',
        settled: 'Y',
        user: 'fmullins'
    },
    {
       
        bookie: 'API returning data',
        category: 'API ',
        betDescription: 'Liverpool to win the league',
        odds: 3,
        stake: 100,
        potentialWinnings: 300,
        winLoss: 'Y',
        settled: 'N',
        user: 'fmullins'
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