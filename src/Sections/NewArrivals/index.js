import React, { Component } from 'react';
import {GetCollectionsProduct} from '../../GetAPI';
import Loading from '../../Loading';
import ProductCard from '../../Collections/ProductCard';

export default class Collections extends Component {
    constructor(props) {
        super(props);
		this.state = {
            isLoading: true,
            limitProduct: 8,
            Collections: []
        }
    }

    componentDidMount() {
        this._promisAll();
       
    }

    componentDidUpdate(prevProps) {
        window.initlOwlCarousel();
        window.initMagnificPopup();
    }
    
    shouldComponentUpdate(nextProps, nextState) {        
        return this.state !== nextState;
    }

    
    _promisAll = () => {
        let params = {
            limitProduct: this.state.limitProduct
        };
        const collectionsProduct = GetCollectionsProduct(params);
        collectionsProduct.then(values => {
            if (values) {
                this.setState({
                    isLoading: false,
                    Collections: values
                });
            }
        });
    }

    _renderCollectionsItem = () => {
        const { Collections} = this.state;
        const item = Collections.map((item, index) => {
            return (

                <div className="item" key={index}>
                    <ProductCard
                        item={item}
                        _title={item._title}
                        _handle={item._handle}
                        _image={item._image}
                        _price={item._price}
                        _compareAtPrice={item._compareAtPrice}
                    />
                </div>
            );
        });
        return item;
    }

	_renderCollectionsLayout = () => {
        const {isLoading} = this.state;
        if (isLoading) {
            return (
                <Loading/>
            );
        } else {
            return (
                <div className="ss-carousel owl-carousel owl-theme" data-dots="false" data-nav="true" data-margin="30" data-autoplay="false" data-autospeed="10000" data-speed="300" data-column1="4" data-column2="3" data-column3="2" data-column4="2" data-column5="1">
                    { this._renderCollectionsItem() }
                </div>
            );
        }
    }
	
    render() {
        
        return (
            <div className="home-section clearfix">
                <div className="container">
                    <div className="widget-layout widget-listCollections">
                        <div className="home-title">
                            <h2>SHOP NEW ARRIVALS</h2>
                            <p className="description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                        <div className="widget-content">
                            <div className="products-listing grid">
                                <div className="product-layout block-content">
                                    {this._renderCollectionsLayout()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        );
    }
}