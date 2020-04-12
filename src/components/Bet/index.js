import React, { Component } from "react";
import buttons from "../../config/buttonsConfig";
///import _ from "lodash";
//import api from '../../dataStore/stubAPI'

export default class Bet extends Component {
  state = {
    opt: "", //will use later for edit bet
    _id: this.props.bet._id,
    bookie: this.props.bet.bookie,
    category: this.props.bet.category,
    betdescription: this.props.bet.betdescription,
    odds: this.props.bet.odds,
    stake: this.props.bet.stake,
    potentialWinnings: this.props.bet.potentialWinnings,
    status: this.props.bet.status,
    user: this.props.bet.user,
    previousBetDetails: {
      _id: this.props.bet._id,
      bookie: this.props.bet.bookie,
      category: this.props.bet.category,
      betdescription: this.props.bet.betdescription,
      odds: this.props.bet.odds,
      stake: this.props.bet.stake,
      potentialWinnings: this.props.bet.potentialWinnings,
      status: this.props.bet.status,
    },
  };

  handleEdit = () => this.setState({ opt: "edit" });
  handleSave = async (e) => {
    e.preventDefault();
    let updatedBookie = this.state.bookie;
    let updatedCategory = this.state.category;
    let updatedbetdescription = this.state.betdescription;
    let updatedOdds = this.state.odds;
    let updatedStake = this.state.stake;
    console.log(this.state.potentialWinnings);
    let updatedPotentialWinnings = this.state.potentialWinnings;
    let updatedStatus = this.state.status;
    let updatedUser = this.props.bet.user;

    if (
      !updatedBookie ||
      !updatedCategory ||
      !updatedbetdescription ||
      !updatedOdds ||
      !updatedStake ||
      !updatedPotentialWinnings ||
      !updatedStatus
    ) {
      return;
    }
    let {
      _id,
      bookie,
      category,
      description,
      odds,
      stake,
      potentialWinnings,
      status,
    } = this.state;
    this.setState({
      opt: "",
      previousBetDetails: {
        _id,
        bookie,
        category,
        description,
        odds,
        stake,
        potentialWinnings,
        status,
      },
    });
    this.props.updateHandler(
      this.state._id,
      updatedBookie,
      updatedCategory,
      updatedbetdescription,
      updatedOdds,
      updatedStake,
      updatedPotentialWinnings,
      updatedStatus,
      updatedUser
    );
  };

  handleCancel = () => {
    let {
      _id,
      bookie,
      category,
      betdescription,
      odds,
      stake,
      potentialWinnings,
      status,
    } = this.state.previousBetDetails;
    this.setState({
      opt: "",
      _id,
      bookie,
      category,
      betdescription,
      odds,
      stake,
      potentialWinnings,
      status,
    });
  };

  handleDelete = () => this.setState({ opt: "del", _id: this.props.bet._id });
  handleConfirm = async (e) => {
    e.preventDefault();
    this.props.deleteHandler(this.state._id);
  };

  handleBookieChange = (e) => this.setState({ bookie: e.target.value });
  handleCategoryChange = (e) => this.setState({ category: e.target.value });
  handleDescriptionChange = (e) =>
    this.setState({ betdescription: e.target.value });

  handleOddsChange = (e) => {
    this.setState({ odds: e.target.value });
    this.setState({ potentialWinnings: this.state.stake * e.target.value });
  };

  handleStakeChange = (e) => {
    this.setState({ stake: e.target.value });
    this.setState({ potentialWinnings: e.target.value * this.state.odds });
  };

  // handlePotentialWinningsChange = e => {
  //   console.log("e.target.value : " + e.target.value);
  //   this.setState({ potentialWinnings: e.target.value });
  // };

  handleStatusChange = (e) => this.setState({ status: e.target.value });

  render() {
    let activeButtons = buttons.normal;
    let leftButtonHandler = this.handleEdit;
    let rightButtonHandler = this.handleDelete;
    if (this.state.opt === "edit") {
      activeButtons = buttons.edit;
      leftButtonHandler = this.handleSave;
      rightButtonHandler = this.handleCancel;
    } else if (this.state.opt === "del") {
      activeButtons = buttons.delete;
      leftButtonHandler = this.handleCancel;
      rightButtonHandler = this.handleConfirm;
    }
    return (
      <tr className="tr">
        {this.state.opt === "edit" ? (
          <React.Fragment>
            <td key={this.state._id}>
              {" "}
              <input
                type="text"
                value={this.state.bookie}
                onChange={this.handleBookieChange}
              />
            </td>
            <td>
              {" "}
              <input
                type="text"
                value={this.state.category}
                onChange={this.handleCategoryChange}
              />
            </td>
            <td>
              {" "}
              <input
                type="text"
                value={this.state.betdescription}
                onChange={this.handleDescriptionChange}
              />
            </td>
            <td>
              {" "}
              <input
                type="number"
                value={this.state.odds}
                onChange={this.handleOddsChange}
              />
            </td>
            <td>
              {" "}
              <input
                type="number"
                value={this.state.stake}
                onChange={this.handleStakeChange}
              />
            </td>
            <td>
              {" "}
              <input
                readOnly
                className="form-control"
                type="number"
                value={this.state.odds * this.state.stake}
              />
            </td>

            <td>
              {" "}
              <select
                className="form-control form-group col-md-4"
                value={this.state.status}
                onChange={this.handleStatusChange}
              >
                <option>......</option>
                <option>pending</option>
                <option>won</option>
                <option>lost</option>
              </select>
            </td>
            <td>
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className={"btn " + activeButtons.leftButtonColor}
                  onClick={leftButtonHandler}
                >
                  {activeButtons.leftButtonVal}
                </button>
                <button
                  type="button"
                  className={"btn " + activeButtons.rightButtonColor}
                  onClick={rightButtonHandler}
                >
                  {activeButtons.rightButtonVal}
                </button>
              </div>
            </td>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <td className="td">{this.state.bookie}</td>
            <td className="td">{this.state.category}</td>
            <td className="td">{this.state.betdescription}</td>
            <td className="td">{this.state.odds}</td>
            <td className="td">{this.state.stake}</td>
            <td className="td">{this.state.potentialWinnings}</td>
            <td className="td">{this.state.status}</td>
            <td>
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className={"btn " + activeButtons.leftButtonColor}
                  onClick={leftButtonHandler}
                >
                  {activeButtons.leftButtonVal}
                </button>
                <button
                  type="button"
                  className={"btn " + activeButtons.rightButtonColor}
                  onClick={rightButtonHandler}
                >
                  {activeButtons.rightButtonVal}
                </button>
              </div>
            </td>
          </React.Fragment>
        )}
      </tr>
    );
  }
}
