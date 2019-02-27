import React, { Component } from 'react';
import betTracker from './betTrackerNEW.jpg';

class Header extends Component {
    render() {
        return (
            <div >
                <header className="App-header">
                    <img src={betTracker} alt="logo" />
                </header>
                
            </div>

        );
    }
}

export default Header;