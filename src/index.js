import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './components/header'
import Login from './components/login'
import Footer from './components/footer'


class Homepage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Login />
                <p> <a href="http://localhost:3000/App/nigeloconnor"> nigeloconnor</a>
                    <span>....... </span><a href="http://localhost:3000/App/fmullins"> fmullins</a></p>
                
                <Footer />
            </div>
        );
    }
}

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/App/:userId' component={App} />
                    <Route exact path='/' component={Homepage} />
                    <Redirect from='*' to='/' />
                </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Router />,
    document.getElementById('root'))
