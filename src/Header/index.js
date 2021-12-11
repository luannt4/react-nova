import React, {Component} from 'react';
import Promotion from './Promotion';
import Currency from './Currency';
import Register from './Register';
import Mycart from './Mycart';
import Mainmenu from './Mainmenu';
import Logo from './Logo';
import Search from './Search';
import Discount from './Discount';
export default class Header extends Component {


    render() {
        return (
            <div className="header">
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="header-top-left col-6">
                                <Promotion/>
                            </div>
                            <div className="header-top-right col-6 d-flex justify-content-end">
                                <Currency/>
                                <Register/>
                                <Mycart/>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="header-discount d-none d-lg-block" >
              
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                               <Discount/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-center">
                    <div className="container">
                        <div className="row">
                            <div className="main-megamenu col-xl-5 col-lg-5">
                                <Mainmenu/>
                            </div>
                            <div className="navbar-logo col-xl-2 col-lg-2">
                                <Logo/>
                            </div>
                            <div className="search-bar col-xl-5 col-lg-5">
                                <Search/>
                            </div>
                        </div>
                       
                    </div>
                </div>
               
               
            </div>
        );
    }
}

