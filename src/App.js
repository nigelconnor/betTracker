import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import AddBetForm from "./components/AddBetForm";
import BetList from "./components/BetList";
import "./App.css";
import * as api from "./api";
import _ from "lodash";
import { Link } from "react-router-dom";

class App extends Component {
  state = { bets: [] };
  async componentDidMount() {
    try {
      const resp = await api.getAll();
      this.setState({
        bets: resp,
        isHidden: false
      });
    } catch (e) {
      this.setState({
        isHidden: true
      });
    }
  }

  addBet = async (b, c, d, o, s, ptw, st, u) => {
    console.log(st);
    await api
      .add(b, c, d, o, s, ptw, st, u)
      //this.setState({});
      .then(resp => {
        const newBet = {
          _id: resp.bet._id,
          bookie: b,
          category: c,
          betdescription: d,
          odds: o,
          stake: s,
          potentialWinnings: ptw,
          status: st,
          username: "fionamullins"
        };
        //"user": //this.params.match.params.userId };
        //"newperson" };
        this.setState({ bets: this.state.bets.concat([newBet]) });
      });
  };

  deleteBet = async key => {
    try {
      const resp = await api.del(key);
      this.setState({
        bets: resp
      });
    } catch (e) {
      alert(`failed to delete bet: ${e}`);
    }
  };

  updateBet = async (i, b, c, d, o, s, ptw, wl, stld, u) => {
    try {
      await api.update(i, b, c, d, o, s, ptw, wl, stld, u);
      this.setState({});
    } catch (e) {
      alert(`failed to update bet: ${e}`);
    }
  };

  render() {
    let list = _.sortBy(this.state.bets, l => l._id);
    //let filteredList = _.filter(list, (e) => (e.user.toLowerCase() === this.props.match.params.userId ))
    return (
      <div>
        <Header />
        <div className="jumbotron">
          <div className="container-fluid">
            {!this.state.isHidden && (
              <Link to={"/login"}>
                <button type="button" className="btn btn-primary">
                  Log In
                </button>
              </Link>
            )}
            {!this.state.isHidden && <AddBetForm addHandler={this.addBet} />}
          </div>
        </div>
        {!this.state.isHidden && (
          <div>
            <BetList
              bets={list}
              deleteHandler={this.deleteBet}
              updateHandler={this.updateBet}
            />
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
