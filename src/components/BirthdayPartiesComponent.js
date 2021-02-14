import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import Jumbotron from "./JumbotronComponent";
import CartItem from "./CartItemComponent";
import { CARTITEMS } from "../shared/cartItems";

class BirthdayParties extends Component {
    render() {
        return (
            <div id="mainContent">
                <Jumbotron
                    title="Birthday Parties"
                    subtitle="Get the coolest party since the dawn of time"
                    isRightAligned="true"
                />
                <div className="container-fluid">
                    <CartItem cartItem={CARTITEMS[9]}/>
                    <hr/>
                    <CartItem cartItem={CARTITEMS[10]}/>
                </div>
            </div>
        );
    }
}

export default BirthdayParties;