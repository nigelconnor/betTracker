import React, { Component } from 'react';
import buttons from '../../config/buttonsConfig';
import _ from 'lodash'
import api from '../../dataStore/stubAPI'

export default class Bet extends Component {

  state = {
    status: '',  //will use later for edit bet
    _id: this.props.bet._id,
    bookie: this.props.bet.bookie,
    category: this.props.bet.category,
    betDescription: this.props.bet.betDescription,
    odds: this.props.bet.odds,
    stake: this.props.bet.stake,
    potentialWinnings: this.props.bet.potentialWinnings,
    winLoss: this.props.bet.winLoss,
    settled: this.props.bet.settled,
    user: this.props.bet.user,
    previousBetDetails: {
      _id: this.props.bet._id,
      bookie: this.props.bet.bookie,
      category: this.props.bet.category,
      betDescription: this.props.bet.betDescription,
      odds: this.props.bet.odds,
      stake: this.props.bet.stake,
      potentialWinnings: this.props.bet.potentialWinnings,
      winLoss: this.props.bet.winLoss,
      settled: this.props.bet.settled
    }
  };
  
  shouldComponentUpdate(nextProps, nextState) {
    let currentBet = {
      _id: this.props.bet._id,
      bookie: this.state.bookie,
      category: this.state.category,
      betDescription: this.state.betDescription,
      odds: this.state.odds,
      stake: this.state.stake,
      potentialWinnings: this.state.potentialWinnings,
      winLoss: this.state.winLoss,
      settled: this.state.settled
    }
    let same = _.isEqual(nextProps.bet, currentBet)
    return !same || (nextState.status === 'edit')
      || (nextState.status !== this.state.status)
  };
  handleEdit = () => this.setState({ status: 'edit' });
  handleSave = (e) => {
    e.preventDefault();
    let updatedBookie = this.state.bookie.trim();
    let updatedCategory = this.state.category.trim();
    let updatedBetDescription = this.state.betDescription.trim();
    let updatedOdds = this.state.odds.trim();
    let updatedStake = this.state.stake.trim();
    let updatedPotentialWinnings = this.state.potentialWinnings.trim();
    let updatedWinLoss = this.state.winLoss.trim();
    let updatedSettled = this.state.settled.trim();
    let updatedUser = this.props.bet.user;
    
    if (!updatedBookie || !updatedCategory || !updatedBetDescription || !updatedOdds || !updatedStake || !updatedPotentialWinnings || !updatedWinLoss || !updatedSettled) {
      return;
    }
    let { _id, bookie, category, description, odds, stake, potentialwinnings, winloss, settled } = this.state;
    this.setState({
      status: '',
      previousBetDetails: { _id, bookie, category, description, odds, stake, potentialwinnings, winloss, settled }
    })
    api.update(this.state.previousBetDetails._id,
      updatedBookie, updatedCategory, updatedBetDescription, updatedOdds, updatedPotentialWinnings, updatedWinLoss, updatedSettled, updatedUser)
  };

  handleCancel = () => {
    let { _id, bookie, category, betDescription, odds, stake, potentialWinnings, winLoss, settled } = this.state.previousBetDetails;
    this.setState({
      status: '',
      _id, bookie, category, betDescription, odds, stake, potentialWinnings, winLoss, settled
    });
  };

  handleDelete = () => this.setState({ status: 'del', _id: this.props.bet._id });
  handleConfirm = async (e) => {
    e.preventDefault();
    this.props.deleteHandler(this.state._id);
  };

  handleBookieChange = (e) => this.setState({ bookie: e.target.value });
  handleCategoryChange = (e) => this.setState({ category: e.target.value });
  handleDescriptionChange = (e) => this.setState({ description: e.target.value });
  handleOddsChange = (e) => this.setState({ odds: e.target.value });
  handleStakeChange = (e) => this.setState({ stake: e.target.value });
  handlePotentialWinningsChange = (e) => this.setState({ potentialwinnings: e.target.value });
  handleWinLossChange = (e) => this.setState({ winloss: e.target.value });
  handleSettledChange = (e) => this.setState({ settled: e.target.value });

  render() {
    console.log(`Props Bet ID - ${this.props.bet._id}`)
    console.log(`State - ${this.state.status}`)
    console.log(`State ID - ${this.state._id}`)
    let activeButtons = buttons.normal;
    let leftButtonHandler = this.handleEdit;
    let rightButtonHandler = this.handleDelete;
    if (this.state.status === 'edit') {
      activeButtons = buttons.edit;
      leftButtonHandler = this.handleSave;
      rightButtonHandler = this.handleCancel;
    }
    else if (this.state.status === 'del') {
      activeButtons = buttons.delete;
      leftButtonHandler = this.handleCancel;
      rightButtonHandler = this.handleConfirm;
    }
    return (
      <tr className="tr">
        {this.state.status === "edit"
          ? [
            <td className="td"
              value={this.props.bet.bookie} contentEditable="true"
              onChange={this.handleBookieChange}>
              {this.props.bet.bookie}
            </td>,
            <td className="td"
              value={this.props.bet.category}
              contentEditable='true'
              onChange={this.handleCategoryChange}>
              {this.props.bet.category}
            </td>,
            <td className="td"
              value={this.props.bet.betDescription}
              contentEditable='true'
              onChange={this.handleDescriptionChange}>
              {this.props.bet.betDescription}
            </td>,
            <td className="td"
              value={this.props.bet.odds}
              contentEditable='true'
              onChange={event => this.setState({ bookie: event.target.value.replace(/\D/, '') })}>
              {this.props.bet.odds}
            </td>,
            <td className="td"
              value={this.props.bet.stake}
              contentEditable='true'
              onChange={this.handleStakeChange}>
              {this.props.bet.stake}
            </td>,
            <td className="td"
              value={this.props.bet.potentialWinnings}
              contentEditable='true'
              onChange={this.handlePotentialWinningsChange}>
              {this.props.bet.potentialWinnings}
            </td>,
            <td className="td"
              value={this.props.bet.winLoss}
              contentEditable='true'
              onChange={this.handleWinLossChange}>
              {this.props.bet.winLoss}
            </td>,
            <td className="td"
              value={this.props.bet.settled}
              contentEditable='true'
              onChange={this.handleSettledChange}>
              {this.props.bet.settled}
            </td>,
            <div>
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className={
                    "btn " + activeButtons.leftButtonColor
                  }
                  onClick={leftButtonHandler}
                >
                  {activeButtons.leftButtonVal}
                </button>
                <button
                  type="button"
                  className={
                    "btn " + activeButtons.rightButtonColor
                  }
                  onClick={rightButtonHandler}
                >
                  {activeButtons.rightButtonVal}
                </button>
              </div>
            </div>
          ]
          : [
            <td className="td">{this.props.bet.bookie}</td>,
            <td className="td">{this.props.bet.category}</td>,
            <td className="td">{this.props.bet.betDescription}</td>,
            <td className="td">{this.props.bet.odds}</td>,
            <td className="td">{this.props.bet.stake}</td>,
            <td className="td">{this.props.bet.potentialWinnings}</td>,
            <td className="td">{this.props.bet.winLoss}</td>,
            <td className="td">{this.props.bet.settled}</td>,
            <div>
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className={
                    "btn " + activeButtons.leftButtonColor
                  }
                  onClick={leftButtonHandler}
                >
                  {activeButtons.leftButtonVal}
                </button>
                <button
                  type="button"
                  className={
                    "btn " + activeButtons.rightButtonColor
                  }
                  onClick={rightButtonHandler}
                >
                  {activeButtons.rightButtonVal}
                </button>
              </div>
            </div>
          ]}
      </tr>
    );
  }
}