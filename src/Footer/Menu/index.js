import React, {Component} from 'react';

export default class Menu extends Component {

   
    render() {
        
        return (
            <div className="d-flex">
                <div className="col footer-block">
                    <h3 className="footer-title"> OUR SHOPS</h3>
                    <ul className="footer-block-content">
                        <li><a href="#0">Product Support</a> </li>
                        <li><a href="#0">PC Setup &amp; Support</a></li>
                        <li><a href="#0">Services</a> </li>
                        <li><a href="#0">Extended Service Plans</a></li>
                        <li><a href="#0">Community</a></li>

                    </ul>
                </div> 

                <div className="col footer-block">
                    <h3 className="footer-title">  INFORMATION </h3>
                    <ul className="footer-block-content">
                        <li><a href="#1">Shipping guide</a></li>
                        <li><a href="#1">Deals</a></li>
                        <li><a href="#1">Store location</a></li>
                        <li><a href="#1">Afiliates</a></li>
                        <li><a href="#1">Customer point policy</a></li>
                    </ul>
                </div> 

                <div className="col footer-block">
                    <h3 className="footer-title">   SUPPORT </h3>
                    <ul className="footer-block-content">
                        <li><a href="#1">Size Guide</a></li>
                        <li><a href="#1">Track My Order</a></li>
                        <li><a href="#1">Gift Card</a></li>
                        <li><a href="#1">Discount Member</a></li>
                        <li><a href="#1">Help Center</a></li>
                    </ul>
                </div> 
                
                <div className="col footer-block">
                    <h3 className="footer-title">   MY ACCOUNT </h3>
                    <ul className="footer-block-content">
                        <li><a href="#1">Contact Us</a></li>
                        <li><a href="#1">About Us</a></li>
                        <li><a href="#1">Gift Card</a></li>
                        <li><a href="#1">F.A.Q</a></li>
                        <li><a href="#1">Wishlist</a></li>
                    </ul>
                </div>
            </div>
            
        );
    }
}

