import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

export default class Logo extends Component {
    render() {
        return (
            <div className="site-header-logo text-center" >
               
                <NavLink to="/" title="Home" className="site-header-logo-image">
                    <img src="//cdn.shopify.com/s/files/1/0251/1323/1434/files/logo_130x_3dfead8f-0b08-4e31-a1c0-f3eb834b89ce_130x.png?v=1561544887" alt="wb-imarket"/>
                </NavLink>
            </div>


        );
    }
}

