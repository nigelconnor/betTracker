import _ from 'lodash';

class StubAPI {
    constructor() {
        this.bets = [
            {
                bookie: 'PaddyPower',
                category: 'Soccer',
                betDescription: 'Liverpool to win the league',
                odds: '3.5',
                stake: '100',
                potentialWinnings: '350',
                winLoss: 'N',
                settled: 'N'
            },
            {
                bookie: 'Bet365',
                category: 'Soccer',
                betDescription: 'Liverpool to win the league',
                odds: '3.5',
                stake: '100',
                potentialWinnings: '350',
                winLoss: 'N',
                settled: 'N'
            }
            ,
            {
                bookie: 'BetFair SportsBook',
                category: 'GAA',
                betDescription: 'Limerick to win the All Ireland',
                odds: '4.5',
                stake: '100',
                potentialWinnings: '450',
                winLoss: 'N',
                settled: 'N'
            }
        ];
    }

    delete(k) {
        let elements = _.remove(this.contacts,
            (contact) => contact.phone_number === k
        );
        return elements;
    }
    getAll() {
        return this.bets;
    }

    add(n, a, p) {
        let len = this.contacts.length;
        let newLen = this.contacts.push({
            name: n, address: a, phone_number: p
        });
        return newLen > len;
    }

    update(key, n, a, p) {
        let index = _.findIndex(this.contacts,
            (contact) => contact.phone_number === key
        );
        if (index !== -1) {
            this.contacts.splice(index, 1,
                { name: n, address: a, phone_number: p });
            return true;
        }
        return false;
    }
}

export default (new StubAPI());