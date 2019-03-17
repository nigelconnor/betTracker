import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import 'w3-css/w3.css';
import './footer.css'

class Footer extends Component {
    render() {
        return (
            <footer className="w3-container w3-teal">
                <div>
                    <a href="https://github.com/nigelconnor/betTracker">GitHub</a>
                    <span>&copy; 2019 BetTracker.</span>
                </div>
            </footer>
        )
    }
}

export default withRouter(Footer); 