import React, { Component } from 'react';
import Header from './components/header'
import Footer from './components/footer'
import AddBetForm from './components/AddBetForm';
import BetList from './components/BetList';
import './App.css'
import * as api from './api';
import _ from 'lodash'

class App extends Component {

  state = { bets: [{}] };
  
  componentDidMount() {
    api.getAll().then(resp => {
      this.setState({
        bets: resp.bets
      });
    }).catch(console.error);
  };
  
  addBet = (b, c, d, o, s, ptw, wl, stld, u) => {
    api.add(b, c, d, o, s, ptw, wl, stld, this.props.match.params.userId)
    //this.setState({});
    .then(resp => {
      const newBet = { "id": resp.id, "bookie": b, "category": c, "betDescription": d, "odds": o, "stake": s, "potentialWinnings": ptw, "winLoss": wl, "settled": stld, "user": //this.params.match.params.userId };
      "newperson" };
      this.setState({ bets: this.state.bets.concat([newBet]) });
  });

    
};

  deleteBet = (key) => {
    api.del(key)
      .then(resp => {
        this.setState({
          bets: resp.bets
        });
      }).catch(console.error);
  };

  render() {
    //let list = _.sortBy(api.getAll(), 
      let list = _.sortBy(this.state.bets, 
      (l) => l.id
    );
        console.log(list);
    //let filteredList = _.filter(list, (e) => (e.user.toLowerCase() === this.props.match.params.userId ))

    return (
      <div>
        <Header />
        <div className="jumbotron">
          <div className="container-fluid">
            <AddBetForm addHandler={this.addBet} />
          </div>
        </div>
        <div> <BetList bets={list}
          deleteHandler={this.deleteBet} /></div>
       
        <Footer />
      </div>
    );
  }
}

export default App;
