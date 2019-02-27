import React, { Component } from 'react';

export default class Bet extends Component {
    render() {
        return (
                <tr>
                <td className ="td">{this.props.bet.bookie}</td>
                <td className="td">{this.props.bet.category}</td>
                <td className="td">{this.props.bet.betDescription}</td>
                <td className="td">{this.props.bet.odds}</td>
                <td className="td">{this.props.bet.stake}</td>
                <td className="td">{this.props.bet.potentialWinnings}</td>
                <td className="td">{this.props.bet.winloss}</td>
                <td className="td">{this.props.bet.settled}</td>
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-success">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </div>
                </tr>
        );
    }
}