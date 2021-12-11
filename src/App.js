import React, {Component} from 'react';

import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import CollectionsChildren from './Collections/CollectionsChildren';
import Product from './Product';
import Quickview from './Quickview';
import OnTop from './OnTop';
import Search from './Search';



import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: []
        };
    }

    
    render() {
        return (
            <Router>
            <div className="App">
                <div className="page-wrapper wrapper-full">
                    {window.location.pathname.indexOf("/quickview") !== -1  ? '':<Header/>}
                   
                    <Route exact path="/" component={Home} />
                    
                    <Route path="/collections/:id" component={CollectionsChildren} />
                    <Route path="/products/:id" component={Product} />
                    <Route path="/quickview/:id" component={Quickview} />
                    <Route path="/search/:id" component={Search} />
                    {window.location.pathname.indexOf("/quickview") !== -1  ? '':<Footer/>}
                    {window.location.pathname.indexOf("/quickview") !== -1  ? '':<OnTop/>}
                    
                </div>
            
            </div>
            
            </Router>
        );
    };

}

export default App;
