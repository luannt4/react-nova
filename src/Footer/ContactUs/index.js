import React, {Component} from 'react';

export default class ContactUs extends Component {

   
    render() {
        
        return (
          
            <div className="section-information">

               <h3 className="footer-title"> CONTACT US</h3>

                <div className="footer-block-content">

                    <div className="address">
                        <span>Address : No 40 Baria Sreet 133/2 NewYork City, NY, United States</span>
                    </div>

                    <div className="email">
                        <span>Email : contact@market.com</span>
                    </div>

                    <div className="phone-number">
                        <span>Phone 1 : <a href="tel:0123456789"> 0123456789</a><br/>Phone 2 : <a href="tel:0123456789"> 0123456789</a></span>
                    </div>

                </div>
            </div>
        );
    }
}

