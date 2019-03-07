import React, { Component } from 'react';
import buttons from '../../config/buttonsConfig';
import _ from 'lodash';
import api from '../../dataStore/stubAPI'

export default class Bet extends Component {
    
    state = {
        status: '',  //will use later for edit bet
        id: this.props.bet.id,
        bookie: this.props.bet.bookie,
        category: this.props.bet.category,
        betDescription: this.props.bet.betDescription,
        odds: this.props.bet.odds,
        stake: this.props.bet.stake,
        potentialWinnings: this.props.bet.potentialWinnings,
        winLoss: this.props.bet.winLoss,
        settled: this.props.bet.settled,
        previousBetDetails: {
            id: this.props.bet.id,
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
        
        if (!updatedBookie || !updatedCategory || !updatedBetDescription || !updatedOdds || !updatedStake || !updatedPotentialWinnings || !updatedWinLoss || !updatedSettled) {
            return;
        }
        let { id, bookie, category, description, odds, stake, potentialwinnings, winloss, settled } = this.state;
        this.setState({
            status: '',
            previousBetDetails: { id, bookie, category, description, odds, stake, potentialwinnings, winloss, settled }
        })
        api.update(this.state.previousBetDetails.id,
            updatedBookie, updatedCategory, updatedBetDescription, updatedOdds, updatedPotentialWinnings, updatedWinLoss, updatedSettled)
    };                              

    handleCancel = () => {
        let { id, bookie, category, betDescription, odds, stake, potentialWinnings, winLoss, settled } = this.state.previousBetDetails;
        this.setState({
            status: '',
            id, bookie, category, betDescription, odds, stake, potentialWinnings, winLoss, settled
        });
    };

    handleDelete = () => this.setState({ status: 'del', id: this.props.bet.id });
    handleConfirm = (e) => {
        e.preventDefault();
        this.props.deleteHandler(this.state.id);
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
        console.log(`Bet ID - ${this.props.bet.id}`)
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
          <tr>
            {this.state.status === "edit"
              ? [
                  <td className="td"
                    value={this.props.bet.bookie} contenteditable="true"
                    onChange={this.handleBookieChange}>
                    {this.props.bet.bookie}
                  </td>,
                  <td className="td"
                    value={this.props.bet.category}
                    contenteditable='true'
                    onChange={this.handleCategoryChange}>
                    {this.props.bet.category}
                  </td>,
                  <td className="td"
                    value={this.props.bet.betDescription}
                    contenteditable='true'
                    onChange={this.handleDescriptionChange}>
                    {this.props.bet.betDescription}
                  </td>,
                  <td className="td"
                    value={this.props.bet.odds}
                    contenteditable='true'
                    onChange={this.handleOddsChange}>
                    {this.props.bet.odds}
                  </td>,
                  <td className="td"
                    value={this.props.bet.stake}
                    contenteditable='true'
                    onChange={this.handleStakeChange}>
                    {this.props.bet.stake}
                  </td>,
                  <td className="td"
                    value={this.props.bet.potentialWinnings}
                    contenteditable='true'
                    onChange={this.handlePotentialWinningsChange}>
                    {this.props.bet.potentialWinnings}
                  </td>,
                  <td className="td"
                    value={this.props.bet.winLoss}
                    contenteditable='true'
                    onChange={this.handleWinLossChange}>
                    {this.props.bet.winLoss}
                    </td>,
                  <td className="td"
                    value={this.props.bet.settled}
                    contenteditable='true'
                    onChange={this.handleWSettledChange}>
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
                  <td className="td">
                    {this.props.bet.betDescription}
                  </td>,
                  <td className="td">{this.props.bet.odds}</td>,
                  <td className="td">{this.props.bet.stake}</td>,
                  <td className="td">
                    {this.props.bet.potentialWinnings}
                  </td>,
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