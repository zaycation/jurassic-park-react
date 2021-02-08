import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path='/home' render={() => <Home/>} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;