import _ from "lodash";

class StubAPI {
  constructor() {
    this.bets = [
      {
        id: 1,
        bookie: "Getting from APi PaddyPower",
        category: "Soccer",
        betdescription: "Liverpool to win the league",
        odds: "3.5",
        stake: "100",
        potentialWinnings: "350",
        status: "pending",
        user: "fmullins"
      },
      {
        id: 2,
        bookie: "API returning data",
        category: "API ",
        betdescription: "Liverpool to win the league",
        odds: "3.5",
        stake: "100",
        potentialWinnings: "350",
        status: "pending",
        user: "fmullins"
      },
      {
        id: 3,
        bookie: "BetFair SportsBook",
        category: "GAA",
        betdescription: "Limerick to win the All Ireland",
        odds: "4.5",
        stake: "100",
        potentialWinnings: "450",
        status: "pending",
        user: "nigeloconnor"
      },
      {
        id: 4,
        bookie: "BetFair Exchange",
        category: "F1",
        betdescription: "Ferrari to win Constructors Championship 2019",
        odds: "4",
        stake: "50",
        potentialWinnings: "200",
        status: "pending",
        user: "nigeloconnor"
      },

      {
        id: 5,
        bookie: "BetFred",
        category: "Soccer",
        betdescription: "Ayr to win Scottish Championship 2019",
        odds: "25",
        stake: "20",
        potentialWinnings: "500",
        status: "pending",
        user: "nigeloconnor"
      }
    ];
  }

  delete(k) {
    let index = _.findIndex(this.bets, function(o) {
      return o.id == k;
    });
    if (index > -1) {
      this.bets.splice(index, 1);
      return true;
    } else return false;
  }
  getAll() {
    return this.bets;
  }

  getBet(id) {
    let result = null;
    const index = _.findIndex(this.bets, bet => {
      return bet.id == id;
    });
    if (index !== -1) {
      result = this.bets[index];
    }
    return result;
  }

  add(b, c, d, o, s, ptw, st, u) {
    let id = 1;
    let last = _.last(this.bets);
    if (last) {
      id = last.id + 1;
    }
    let len = this.bets.length;
    let newLen = this.bets.push({
      id,
      bookie: b,
      category: c,
      betdescription: d,
      odds: o,
      stake: s,
      potentialWinnings: ptw,
      status: st,
      user: u
    });
    return newLen > len;
  }

  update(key, i, b, c, d, o, s, ptw, st, u) {
    let index = _.findIndex(this.bets, function(o) {
      return o.id == key;
    });

    if (index !== -1) {
      this.bets.splice(index, 1, {
        id: i,
        bookie: b,
        category: c,
        betdescription: d,
        odds: o,
        stake: s,
        potentialWinnings: ptw,
        status: st,
        user: u
      });
      return true;
    }
    return false;
  }
}

export default new StubAPI();
