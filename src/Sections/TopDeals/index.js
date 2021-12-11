import React, { Component } from 'react';
import {GetTagsProduct} from '../../GetAPI';
import Loading from '../../Loading';
import { NavLink } from "react-router-dom";

export default class TopDeals extends Component {
    constructor(props) {
        super(props);
		this.state = {
            isLoading: true,
            Collections: []
           
        }
    }
	
    componentDidMount() {
       this._promisAll();
	   
    }

    componentDidUpdate(prevProps) {
        window.initlOwlCarousel();
        window.initCountd();
    }

    shouldComponentUpdate(nextProps, nextState) {        
        return this.state !== nextState;
    }

    _promisAll = () => {
        let params = {
            limitProduct: 10
        };
        const collectionsProduct = GetTagsProduct(params);
        
        collectionsProduct.then(values => {
            if (values) {
                this.setState({
                    isLoading: false,
                    Collections: values
                });
            }
        });
    }

    _getPath = () => {
        return '/products/';
    }

    _renderCollectionsItem = () => {
        const { Collections} = this.state;
        const itemDeal = Collections.map((item, index) => {
            if(item._compareAtPrice === "null") return null; 
            
            const discont = Math.round(((item._compareAtPrice - item._price) / item._compareAtPrice)*100);
            return (
                <div className='product-item'  key={index}>
                    <div className="product-item-container grid-view-item ">
                        <div className="left-block">
                            <div className="product-image-container">
                                
                                <NavLink to={this._getPath() + item._handle} title="{item._title}" className="grid-view-item__link image-ajax">
                                    <img className="img-responsive lazyautosizes" alt="{item._title}" src={item._image} />
                                </NavLink>
                            </div>
                            
                            {item._compareAtPrice !== "null" &&
                            <div className="box-labels">
                                <span className="label-product label-sale">-{discont}%</span>
                            </div>
                            }

                           
                        </div>

                        <div className="right-block">
                            <div className="caption">
                                    <h4 className="title-product">
                                            <NavLink to={this._getPath() + item._handle} title="{item._title}" className="product-name">
                                                {item._title}
                                            </NavLink>
                                    </h4>
                                    <div className="desc-product">
                                        {item._description}
                                    </div>
                                    <div className="price">
                                        <span className="price-new">${item._price}</span>
                                        {item._compareAtPrice !== "null" && 
                                        <span className="price-old">$ {item._compareAtPrice } </span>
                                        }
                                    </div>
                                    
                                    {item._deal !== "" &&
                                    <div className="countdown_tabs">
                                        <div className="countdown_inners" data-date={item._deal}></div>
                                    </div>
                                    }
                            </div>
                        </div>
                    </div>
                </div>
            );
                                        
        });

        return itemDeal;
    }

	_renderCollectionsLayout = () => {
        const {isLoading} = this.state;
        if (isLoading) {
            return (
                <Loading/>
            );
        } else {
            return (
                <div className="bg-section" style={{background : "url('//cdn.shopify.com/s/files/1/0093/3154/0030/files/bg-deals.png?v=1554698943')"}}>
                <div className="widget-content widget-product__item">
                    <div className="products-listing grid">
                            <div className="product-layout block-content">
                                <div className="ss-carousel owl-carousel owl-theme" data-dots="false" data-nav="true" data-margin="30" data-autoplay="false" data-autospeed="10000" data-speed="300" data-column1="1" data-column2="1" data-column3="1" data-column4="1" data-column5="1">
                                    { this._renderCollectionsItem() }
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
               
                
            );
        }
    }
	
    render() {
        
        return (
            <div className="home-section section-deals">
                <div className="container">
                    <div className="widget-deals">
                        <div className="home-title">
                            <h2>DEALS ZONE</h2>
                            <p className="description">
                            Every pair of jeans needs something great to go with them. And we’ve got it all.
                            </p>
                        </div>
                        
                        {this._renderCollectionsLayout()}
                       
                    </div>
                </div>
               
            </div>
        );
    }
}