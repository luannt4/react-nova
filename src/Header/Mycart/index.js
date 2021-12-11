import React, {Component} from 'react';

export default class Mycart extends Component {

   
    render() {
        
        return (
           
            <div className="headerTopBlock section-minicart">
                <a href="/" className="site-header__carts shopcart dropdown-toggle font-ct">
                <span className="cart_ico">
                    <i className="fa fa-shopping-bag"></i>
                    <span id="CartCount" className="cout_cart font-ct"><span className="cout_item">2</span> </span>
                </span>
                <span className="cart_info">
                    <span className="cart-title"><span className="title-cart">MY CART</span></span>

                    <span className="cart-total">
                        <span id="CartTotal" className="total_cart">$130.00</span>
                    </span>
                </span>
                </a>
            
            </div>


        );
    }
}

