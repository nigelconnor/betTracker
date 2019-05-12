import _ from 'lodash';

class StubAPI {
    constructor() {
        this.bets = [
            {
                id: 1,
                bookie: 'Getting from APi PaddyPower',
                category: 'Soccer',
                betDescription: 'Liverpool to win the league',
                odds: '3.5',
                stake: '100',
                potentialWinnings: '350',
                winLoss: 'N',
                settled: 'Y',
                user: 'fmullins'
            },
            {
                id: 2,
                bookie: 'API returning data',
                category: 'API ',
                betDescription: 'Liverpool to win the league',
                odds: '3.5',
                stake: '100',
                potentialWinnings: '350',
                winLoss: 'Y',
                settled: 'N',
                user: 'fmullins'
            }
            ,
            {
                id: 3,
                bookie: 'BetFair SportsBook',
                category: 'GAA',
                betDescription: 'Limerick to win the All Ireland',
                odds: '4.5',
                stake: '100',
                potentialWinnings: '450',
                winLoss: 'N',
                settled: 'N',
                user: 'nigeloconnor'
            }
            ,
            {
                id: 4,
                bookie: 'BetFair Exchange',
                category: 'F1',
                betDescription: 'Ferrari to win Constructors Championship 2019',
                odds: '4',
                stake: '50',
                potentialWinnings: '200',
                winLoss: 'N',
                settled: 'N',
                user: 'nigeloconnor'
            }

            ,
            {
                id: 5,
                bookie: 'BetFred',
                category: 'Soccer',
                betDescription: 'Ayr to win Scottish Championship 2019',
                odds: '25',
                stake: '20',
                potentialWinnings: '500',
                winLoss: 'N',
                settled: 'N',
                user: 'nigeloconnor'
            }
        ];
    }

    delete(k) {
        //let elements = _.remove(this.bets,
        //    (bet) => bet.id === k
        //);
        //return elements;
        let index = k - 1
            ;
        if (index !== -1) {
            this.bets.splice(index, 1)
        return true;}
       // else return false;
    }
    getAll() {
        return this.bets;
    }

    getBet(id) {
        let result = null;
        const index = _.findIndex(this.bets,
        (bet) => {
        return bet.id == id;
    });
    if (index !== -1) {
        result = this.bets[index];
        }
    return result;
     }

    add(b, c, d, o, s, ptw, wl, stld, u) {
        let id = 1;
        let last = _.last(this.bets);
        if (last) { id = last.id + 1; }
        let len = this.bets.length;
        let newLen = this.bets.push({
            id, bookie: b, category: c, betDescription: d, odds: o, stake: s, potentialWinnings: ptw, winLoss: wl, settled: stld, user: u
        });
        return newLen > len;
    }

    update(key, i, b, c, d, o, s, ptw, wl, stld, u) {
        //let index = _.findIndex(this.bets,
         //   (bet) => bet.id === key)
         let index = key -1 
        ;
        if (index !== -1) {
            this.bets.splice(index, 1,
                { id: i, bookie: b, category: c, betDescription: d, odds: o, stake: s, potentialWinnings: ptw, winLoss: wl, settled: stld, user: u });
            return true;
        }
        return false;
    }
}

export default (new StubAPI());