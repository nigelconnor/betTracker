import React, { Component } from 'react';
import buttons from '../../config/buttonsConfig';
//import _ from 'lodash'
//import api from '../../dataStore/stubAPI'

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
  
  /* shouldComponentUpdate(nextProps, nextState) {
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
  }; */
  handleEdit = () => this.setState({ status: 'edit'});
  handleSave = async (e) => {
    e.preventDefault();
     let updatedBookie = this.state.bookie;
    let updatedCategory = this.state.category;
    let updatedBetDescription = this.state.betDescription;
    let updatedOdds = this.state.odds;
    let updatedStake = this.state.stake;
    let updatedPotentialWinnings = this.state.potentialWinnings;
    let updatedWinLoss = this.state.winLoss;
    let updatedSettled = this.state.settled;
    let updatedUser = this.props.bet.user;
    
    if (!updatedBookie || !updatedCategory || !updatedBetDescription || !updatedOdds || !updatedStake || !updatedPotentialWinnings || !updatedWinLoss || !updatedSettled) {
      return;
    }
    let { _id, bookie, category, description, odds, stake, potentialwinnings, winloss, settled } = this.state;
    this.setState({
      status: '',
      previousBetDetails: { _id, bookie, category, description, odds, stake, potentialwinnings, winloss, settled }
    })
    this.props.updateHandler(this.state._id,
      updatedBookie, updatedCategory, updatedBetDescription, updatedOdds, updatedStake, updatedPotentialWinnings, updatedWinLoss, updatedSettled, updatedUser)
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

  //handleBookieChange = (e) => this.setState({ bookie: e.target.value });
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
    console.log(`this.state - ${this.state.bookie}`)
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
            <td> <input type="text"
              value={this.state.bookie}
              onChange={this.handleBookieChange}
            />
            </td>,
            <td> <input type ="text"
              value={this.state.category}
              onChange={this.handleCategoryChange}
              />
            </td>,
            <td> <input type = "text"
              value={this.state.betDescription}
              onChange={this.handleDescriptionChange}
              />
            </td>,
            <td> <input type = "text"
              value={this.state.odds}
              onChange={this.handleOddsChange}
              />
            </td>,
            <td> <input type="text"
              value={this.state.stake}
              onChange={this.handleStakeChange}
              />
            </td>,
            <td> <input type="text"
              value={this.state.potentialWinnings}
              onChange={this.handlePotentialWinningsChange}
              />
            </td>,
            <td> <input type="text"
              value={this.state.winLoss}
              onChange={this.handleWinLossChange}
              />
            </td>,
            <td> <input type="text"
              value={this.state.settled}
              onChange={this.handleSettledChange}
              />
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
            <td className="td">{this.state.bookie}</td>,
            <td className="td">{this.state.category}</td>,
            <td className="td">{this.state.betDescription}</td>,
            <td className="td">{this.state.odds}</td>,
            <td className="td">{this.state.stake}</td>,
            <td className="td">{this.state.potentialWinnings}</td>,
            <td className="td">{this.state.winLoss}</td>,
            <td className="td">{this.state.settled}</td>,
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