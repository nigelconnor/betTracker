import React, { Component } from 'react';
import Bet from '../Bet'


export default class BetList extends Component {
    render() {
        let displayedBets = this.props.bets.map(
            (b) => <Bet key={b.id} bet={b} 
                deleteHandler={this.props.deleteHandler} />
        );
        return (
            
            <div>
                <h1>Bet History </h1>
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Bookie</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Odds</th>
                            <th>Stake</th>
                            <th>Potenital Winninings</th>
                            <th>Win/Loss</th>
                            <th>Settled?</th>
                        </tr>
                    </thead>
                    <tbody >
                        {displayedBets}
                    </tbody >
                </table>
            </div> 
        );
    }
}