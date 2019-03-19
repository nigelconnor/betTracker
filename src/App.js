import React, { Component } from 'react';
import Header from './components/header'
import Footer from './components/footer'
import AddBetForm from './components/AddBetForm';
import BetList from './components/BetList';
import './App.css'
import api from './dataStore/stubAPI'
import _ from 'lodash'

class App extends Component {

  addBet = (b, c, d, o, s, ptw, wl, stld, u) => {
    api.add(b, c, d, o, s, ptw, wl, stld, this.props.match.params.userId);
    this.setState({});
  };

  deleteBet = (key) => {
    api.delete(key);
    this.setState({});
  };

  render() {
    let list = _.sortBy(api.getAll(), 
      (l) => l.id
    );

    let filteredList = _.filter(list, (e) => (e.user.toLowerCase() === this.props.match.params.userId ))

    return (
      <div>
        <Header />
        <div className="jumbotron">
          <div className="container-fluid">
            <AddBetForm addHandler={this.addBet} />
          </div>
        </div>
        <div> <BetList bets={filteredList}
          deleteHandler={this.deleteBet} /></div>
       
        <Footer />
      </div>
    );
  }
}

export default App;
