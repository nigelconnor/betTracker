import betModel from "./bets/betModel";

const bets = [
  {
    bookie: "PaddyPower",
    category: "Soccer",
    betdescription: "Liverpool to win the CL",
    odds: 3,
    stake: 100,
    potentialWinnings: 300,
    status: "pending",
    user: "fionamullins"
  },
  {
    bookie: "BetFair",
    category: "Soccer",
    betdescription: "Aston Villa to be promoted to Premiership",
    odds: 2,
    stake: 100,
    potentialWinnings: 200,
    status: "pending",
    user: "nigeloconnor"
  },
  {
    bookie: "Bet365",
    category: "Hurling",
    betdescription: "Limerick to win the All Ireland",
    odds: 3,
    stake: 100,
    potentialWinnings: 300,
    status: "lost",
    user: "nigeloconnor"
  },
  {
    bookie: "Betfred",
    category: "Golf",
    betdescription: "Dustin Johnson to win British Open",
    odds: 14,
    stake: 100,
    potentialWinnings: 1400,
    status: "won",
    user: "fionamullins"
  }
];
export const loadBets = () => {
  betModel.find({}).remove(function() {
    betModel.collection.insert(bets, (err, docs) => {
      if (err) {
        console.log(`failed to Load Bet Data`);
      } else {
        console.info(`${bets.length} bets were successfully stored.`);
      }
    });
  });
};
