import React, {Component} from 'react';

export default class Register extends Component {

   
    render() {
       
        return (
           
            <div className="headerTopBlock section-register">
                <i className="fa fa-lock"></i>
                <a href="/" id="customer_login_link">Login</a> or 
                <a href="/" id="customer_register_link"> Register</a>
               
            </div>


        );
    }
}

