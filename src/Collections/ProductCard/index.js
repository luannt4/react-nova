import React, {Component} from 'react';
import { NavLink } from "react-router-dom";


export default class ProductCard extends Component {
   
    render() {
        const discont = Math.round(((this.props._compareAtPrice - this.props._price) / this.props._compareAtPrice)*100);
       
        return (
           
            <div className="product-item">
                 <div className="product-item-container grid-view-item ">
                    <div className="left-block">
                        <div className="product-image-container">
                            <NavLink to={'/products/' + this.props._handle} className="grid-view-item__link image-ajax">
                                <img className="img-responsive lazyautosizes" alt="{this.props._title}" src={this.props._image} />
                            </NavLink>
                        </div>
                        
                        {this.props._compareAtPrice !== "null" &&
                        <div className="box-labels">
                            <span className="label-product label-sale">-{discont}%</span>
                        </div>
                        }

                        <div className="button-link">
                            <div className="btn-button add-to-cart action  ">
                                <form action="/cart/add" method="post" className="variants" data-id="AddToCartForm-2108086059070">
                                    <input type="hidden" name="id" value="19280548921406"/>
                                    <a className="btn-addToCart grl btn_df" href="/" title="Add to cart">
                                        <i className="fa fa-shopping-cart"></i>
                                    </a>
                                </form>
                            </div>
                            <div className="product-addto-links">
                                <a className="btn_df btnProduct" href="/account/login" title="Wishlist">
                                    <i className="fa fa-heart"></i>
                                    <span className="hidden">Wishlist</span>
                                </a>
                            </div>
                            <div className="quickview-button">
                                <NavLink to={'/quickview/'+ this.props._handle} className="quickview iframe-link">
                                    <i className="fa fa-search"></i>
                                </NavLink>
                               
                            </div>
                        </div>
                    </div>

                    <div className="right-block">
                        <div className="caption">
                                <h4 className="title-product">
                                    <NavLink to={'/products/'+ this.props._handle} className="product-name">
                                        {this.props._title}
                                    </NavLink>
                                </h4>
                                <div className="price">
                                    <span className="price-new">${this.props._price}</span>
                                    {this.props._compareAtPrice !== "null" && 
                                    <span className="price-old">$ {this.props._compareAtPrice } </span>
                                    }
                                </div>
                                
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}