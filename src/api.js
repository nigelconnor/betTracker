import axios from "axios";
import auth from "./auth";

export const update = (
  id,
  newBookie,
  newCategory,
  newbetdescription,
  newOdds,
  newStake,
  newPotentialWinnings,
  newStatus,
  newUser
) => {
  return axios
    .put(`/api/bets/${id}`, {
      bookie: newBookie,
      category: newCategory,
      betdescription: newbetdescription,
      odds: newOdds,
      stake: newStake,
      potentialWinnings: newPotentialWinnings,
      status: newStatus,
      username: newUser
    })
    .then(resp => resp.data);
};

//export const getAll = async () => {
//    return await axios.get('/api/bets')
//        .then(resp => resp.data);
//};

export const getAll = async () => {
  const resp = await axios.get("/api/bets", {
    headers: { Authorization: auth.getToken() }
  });
  return resp.data;
};

export const getBet = betId => {
  return axios
    .get(`/api/bets/${betId}`, { headers: { Authorization: auth.getToken() } })
    .then(resp => resp.data);
};

export const add = (
  newBookie,
  newCategory,
  newbetdescription,
  newOdds,
  newStake,
  newPotentialWinnings,
  newStatus,
  newUser
) => {
  console.log(newStatus);
  return axios
    .post(
      "/api/bets",
      {
        bookie: newBookie,
        category: newCategory,
        betdescription: newbetdescription,
        odds: newOdds,
        stake: newStake,
        potentialWinnings: newPotentialWinnings,
        status: newStatus,
        user: newUser
      },
      { headers: { Authorization: auth.getToken() } }
    )
    .then(resp => resp.data);
};

export const del = betId => {
  return axios
    .delete(`/api/bets/${betId}`)
    .then(() => {
      return axios.get("/api/bets");
    })
    .then(resp => resp.data);
};

export const login = async (username, password) => {
  const resp = await axios.post("/api/users", {
    username: username,
    password: password
  });
  return resp.data;
};

export const signup = async (username, password) => {
  const resp = await axios.post("/api/users?action=register", {
    username: username,
    password: password
  });
  return resp.data;
};
