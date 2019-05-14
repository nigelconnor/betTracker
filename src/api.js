import axios from 'axios';

export const update = (id, newBookie, newCategory, newBetDescription, newOdds, newStake, newPotentialWinnings, newWinLoss, newSettled, newUser) => {
    return axios.put(`/api/bets/${id}`, { bookie: newBookie, category: newCategory, betDescription: newBetDescription, odds: newOdds, stake: newStake, potentialWinnings: newPotentialWinnings, winLoss: newWinLoss, settled: newSettled, user: newUser })
        .then(resp => resp.data);
};

//export const getAll = async () => {
//    return await axios.get('/api/bets')
//        .then(resp => resp.data);
//};

export const getAll = async () => {
    const resp = await axios.get('/api/bets')
    return resp.data;
};

export const getBet = betId => {
    return axios.get(`/api/bets/${betId}`)
        .then(resp => resp.data);
};

export const add = (newBookie, newCategory, newBetDescription, newOdds, newStake, newPotentialWinnings, newWinLoss, newSettled, newUser) => {
    return axios.post('/api/bets', { bookie: newBookie, category: newCategory, betDescription: newBetDescription, odds: newOdds, stake: newStake, potentialWinnings: newPotentialWinnings, winLoss: newWinLoss, settled: newSettled, user: newUser })
        .then(resp => resp.data);
};

export const del = betId => {
    return axios.delete(`/api/bets/${betId}`)
        .then(() => {
          return  axios.get('/api/bets')
        })
        .then(resp => resp.data);
          };
    