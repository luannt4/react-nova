import React, {Component} from 'react';
import NewsLetter from './NewsLetter';
import FollowUs from './FollowUs';
import Copyright from './Copyright';
import ContactUs from './ContactUs';
import Menu from './Menu';
import FindYourStore from './FindYourStore';
export default class Footer extends Component {

   
    render() {
        
        return (
            <footer>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                                <FindYourStore/>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <NewsLetter/>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <FollowUs/>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="footer-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-12">
                                <Menu/>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <ContactUs/>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="footer-bottom" >
                    <div className="container">
                        <Copyright/>
                    </div>
                   
                </div>
            </footer>
        );
    }
}

