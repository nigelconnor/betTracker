import React, { Component } from 'react';

export default class AddBetForm extends Component {

    state = { bookie: '', category: '', description: '', odds: '', stake: '', potentialwinnings: '', winloss: '', settled: '' };

    handleSubmit = (e) => {
        e.preventDefault();
        let bookie = this.state.bookie.trim();
        let category = this.state.category.trim();
        let description = this.state.description.trim();
        let odds = this.state.odds.trim();
        let stake = this.state.stake.trim();
        let potentialwinnings = this.state.potentialwinnings.trim();
        let winloss = this.state.winloss.trim();
        let settled = this.state.settled.trim();
        //let username = '';

        if (!bookie || !category || !description || !odds || !stake || !potentialwinnings || !winloss || !settled) {
            return;
        }
        this.props.addHandler(bookie, category, description, odds, stake, potentialwinnings, winloss, settled, "fionamullins");
        this.setState({ bookie: '', category: '', description: '', odds: '', stake: '', potentialwinnings: '', winloss: '', settled: '' });
    }
    handleBookieChange = (e) => this.setState({ bookie: e.target.value });
    handleCategoryChange = (e) => this.setState({ category: e.target.value });
    handleDescriptionChange = (e) => this.setState({ description: e.target.value });
    handleOddsChange = (e) => this.setState({ odds: e.target.value });
    handleStakeChange = (e) => this.setState({ stake: e.target.value });
    handlePotentialWinningsChange = (e) => this.setState({ potentialwinnings: e.target.value });
    handleWinLossChange = (e) => this.setState({ winloss: e.target.value });
    handleSettledChange = (e) => this.setState({ settled: e.target.value });

    render() {
        return (
            <div className="container">
                <h2>Enter a Bet</h2>
            <div className="panel">
                <div className="panel-body">
                        <div className="form-group col-md-4">
                            <label >Bookie</label>
                            <select id="inputBookie" className="form-control" placeholder="Select Bookie"
                                value={this.state.bookie}
                                onChange={this.handleBookieChange}>
                                <option>......</option>
                                <option>Bet365</option>
                                <option>BetFair Sportsbook</option>
                                <option>BetFair Exchange</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label >Category</label>
                            <select id="inputBookie" className="form-control"
                                value={this.state.category}
                                onChange={this.handleCategoryChange} >
                                <option>......</option>
                                <option>Horse Racing</option>
                                <option>Soccer</option>
                                <option>Tennis</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label >Bet Description</label>
                            <input type="text" className="form-control" id="inputbetdescription" placeholder="Bet Description"
                                value={this.state.description}
                                onChange={this.handleDescriptionChange}
                            />
                        </div>
                    </div>
                    <div className="container">
                        <div className="col-sm-2" >
                            <label >Odds</label>
                            <input type = "float" className="form-control" id="inputOdds" placeholder="2.0"
                                value={this.state.odds}
                                onChange={this.handleOddsChange}
                            />
                        </div>
                        <div className="col-sm-2" >
                            <label >Stake</label>
                            <input type="text" className="form-control" id="inputStake" placeholder="10"
                                value={this.state.stake}
                                onChange={this.handleStakeChange}
                            />
                        </div>
                        <div className="col-sm-4" >
                            <label >Potential Returns</label>
                            <input type="text" className="form-control" id="inputPotentialReturns" placeholder="20"
                                value={this.state.potentialwinnings}
                                onChange={this.handlePotentialWinningsChange} />
                        </div>
                        <div className="col-sm-2" >
                            <label >Win/Loss</label>
                            <input type="text" className="form-control" id="inputWinLoss" placeholder="N"
                                value={this.state.winloss}
                                onChange={this.handleWinLossChange}
                            />
                        </div>
                        <div className="col-sm-2" >
                            <label>Settled</label>
                            <input type="text" className="form-control" placeholder="N"
                                value={this.state.settled}
                                onChange={this.handleSettledChange}
                            />
                        </div>
                    </div>
                    <div className="container">
                        <div className="col-sm-1" >
                            <div className="buttonPosition">
                                <label></label>
                                <button type="submit" className="btn btn-success"
                                    onClick={this.handleSubmit}>Add Bet</button>
                            </div>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}