import React, { Component } from 'react';
import Header from './components/header'
import Footer from './components/footer'
import AddBetForm from './components/AddBetForm';
import BetList from './components/BetList';
import './App.css'
import api from './dataStore/stubAPI'

class App extends Component {

  addBet = (b, c, d, o, s, ptw, wl, stld) => {
    api.add(b, c, d, o, s, ptw, wl, stld);
    this.setState({});
  };

  deleteBet = (key) => {
    api.delete(key);
    this.setState({});
  };

  render() {
    let list = api.getAll();
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
