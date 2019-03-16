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
                <table className="table">
                    <thead className = "thread">
                        <tr>
                            <th className ="th">Bookie</th>
                            <th className="th">Category</th>
                            <th className="th">Description</th>
                            <th className="th">Odds</th>
                            <th className="th">Stake</th>
                            <th className="th">Potenital Winninings</th>
                            <th className="th">Win/Loss</th>
                            <th className="th">Settled?</th>
                            <th className="th">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedBets}
                    </tbody>
                </table>
            </div> 
        );
    }
}