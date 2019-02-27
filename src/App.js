import React, { Component } from 'react';
import Header from './components/header'
import AddBetForm from './components/AddBetForm';
import BetList from './components/BetList';
import './App.css'
import api from './dataStore/stubAPI' 


class App extends Component {
  render() {
    let list = api.getAll();
    return (
      <div>
        <Header />
      <div className="jumbotron">
        <div className="container-fluid">
          
            <AddBetForm />
          
        </div>
        
      </div>
        
        <div> <BetList bets={list} /></div>
      </div>
    );
  }
}

export default App;
