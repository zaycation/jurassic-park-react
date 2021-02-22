import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
//import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './pages/HomeComponent';
import CartModal from './modals/CartModalComponent';

import Calendar from "./pages/CalendarComponent";
import GettingHere from './pages/GettingHereComponent';
import Accessibility from './pages/AccessibilityComponent';
import Jobs from './pages/JobsComponent';
import FAQ from './pages/FAQComponent';
import Laboratory from "./pages/LaboratoryComponent";
import Cafe from "./pages/CafeComponent";
import GiftShop from './pages/GiftShopComponent';
import Dinosaurs from './pages/DinosaursComponent';
import VisitorCenter from "./pages/VisitorCenterComponent";
import BigPicPage from "./pages/BigPicPageComponent";
import Tickets from './pages/TicketsComponent';
import SeasonPasses from './pages/SeasonPassesComponent';
import Groups from "./pages/GroupsComponent";
import BirthdayParties from "./pages/BirthdayPartiesComponent";

import { DINOSAURS } from '../shared/dinosaurs';
import { BIGPICPAGEDATA } from "../shared/bigPicPageData";
import { CAFEMENU } from "../shared/cafeMenu";

/*const mapStateToProps = state => {
    return {
        dinosaurs: state.dinosaurs,
        isCartModalOpen: state.isCartModalOpen,
        cart: state.cart,
    }
}

const mapDispatchToProps = {
//    fetchDinosaurs: () => (fetchDinosaurs()),
    addToCart: cartItem => (addToCart(cartItem)),
    toggleCartModal: () => (toggleCartModal()),
}*/

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCartModalOpen: false,
            cart: [],
        }
        this.toggleCartModal = this.toggleCartModal.bind(this);
    }
    toggleCartModal() {
        this.setState({isCartModalOpen: !this.state.isCartModalOpen})
    }
    /*componentDidMount() {
        this.props.fetchDinosaurs();
    }*/
    render() {
        return (
            <div>
                <Header 
                    //openCartModal={openCartModal}
                    toggleCartModal={this.toggleCartModal}
                />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/home' component={Home} />
                            <Route path='/calendar-and-hours' render={() => <Calendar/>} />
                            <Route path='/getting-here' render={() => <GettingHere/>} />
                            <Route path='/accessibility' component={Accessibility} />
                            <Route path='/jobs' render={() => <Jobs/>} />
                            <Route path='/faq' render={() => <FAQ/>} />
                            <Route path='/laboratory' render={() => <Laboratory/>} />
                            <Route path='/cafe' render={() => <Cafe cafeMenu={CAFEMENU} />} />
                            <Route path='/gift-shop' component={GiftShop} />
                            <Route path='/dinosaurs' render={() => <Dinosaurs dinosaurs={DINOSAURS} />} />
                            <Route path='/visitor-center' render={() => <VisitorCenter/>} />
                            <Route path='/park-gate' render={() => <BigPicPage bigPicData={BIGPICPAGEDATA[1]} />} />
                            <Route path='/waterfalls' render={() => <BigPicPage bigPicData={BIGPICPAGEDATA[0]} />} />
                            <Route path='/tickets' render={() => <Tickets />} />
                            <Route path='/season-passes' render={() => <SeasonPasses />} />
                            <Route path='/groups' render={() => <Groups />} />
                            <Route path='/birthday-parties' render={() => <BirthdayParties />} />
                            <Route path='/404' render={() => <BigPicPage bigPicData={BIGPICPAGEDATA[2]} />} />
                            <Redirect to='/404' />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
                <CartModal 
                    isCartModalOpen={this.state.isCartModalOpen} 
                    cart={this.state.cart} 
                    toggleCartModal={this.toggleCartModal}
                />
            </div>
        );
    }
}

//export default Main;
export default withRouter(Main);
//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));