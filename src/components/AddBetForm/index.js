import React, { Component } from 'react';

export default class AddBetForm extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="form-group col-md-2">
                        <label >Bookie</label>
                        <select id="inputBookie" className="form-control">
                            <option selected>Bet365</option>
                            <option>BetFair Sportsbook</option>
                            <option>BetFair Exchange</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label >Category</label>
                        <select id="inputBookie" className="form-control">
                            <option selected>Horse Racing</option>
                            <option>Soccer</option>
                            <option>Tennis</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label >Bet Description</label>
                        <input type="text" className="form-control" id="inputBetDescription" placeholder="Bet Description"></input>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="col-sm-1" >
                        <label >Odds</label>
                        <input type="text" className="form-control" id="inputOdds" placeholder="2.0"></input>
                    </div>
                    <div className="col-sm-1" >
                        <label >Stake</label>
                        <input type="text" className="form-control" id="inputStake" placeholder="10"></input>
                    </div>
                    <div className="col-sm-2" >
                        <label >Potential Returns</label>
                        <input type="text" className="form-control" id="inputPotentialReturns" placeholder="20" />
                    </div>
                    <div className="col-sm-1" >
                        <label >Win/Loss</label>
                        <input type="text" className="form-control" id="inputWinLoss" placeholder="N" />
                    </div>
                    <div className="col-sm-1" >
                        <label>Settled</label>
                        <input type="text" className="form-control" placeholder="N" />
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="col-sm-1" >
                        <label></label>
                        <button type="submit" className="btn btn-success">Add Bet</button>
                    </div>
                </div>
            </div>
        );
    }
}