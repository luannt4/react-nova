import React, {Component} from 'react';
import {GetProductDetail} from '../GetAPI';
import Loading from '../Loading';

export default class Quickview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            value:1,
            Product: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this._getMovieDetail(id);
       
    }

   

    _getMovieDetail = (movieID) => {
        const params = {
            id: movieID,
            apiName: 'movie'
        };
        
        const getProductPromise = GetProductDetail(params);
       
        getProductPromise.then(response => {
                const data = response;
               
                this.setState({
                    isLoading: false,
                    Product: {
                        _title: `${data._title}`,
                        _handle:`${data._handle}`,
                        _desc: `${data._description}`,
                        _img: `${data._image}`,
                        _productType: `${data._productType}`,
                        _tags: `${data._tags}`,
                        _price: `${data._price}`,
                        _compareAtPrice: `${data._compareAtPrice}`,
                    }
                })
            }
        )
        .catch(function(error){
            console.log(error);
        });
    };

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const {isLoading} = this.state;
        if (isLoading) {
            return (<Loading/>);
        } else {
            return (
               
                <div className="main-content">
                     
                     <div className="shopify-section main-product">
                            <div className="product-single ">
                                <div className="d-flex">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12  horizontal">
                                        <div className="product-media thumbnais-bottom">
                                            <div className="product-photo-container">
                                                <img className="img-responsive " alt="{this.state.Product._title}" src={this.state.Product._img} />
                                            </div>
                                            <div className="slider-nav">
    
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-12 col-12 product-single__detail grid__item">
                                        <h1 className="product-single__title">{this.state.Product._title}</h1>
                                        
                                        <div className="product-info">
                                            <p className="product-single__alb instock"><label>Availability</label>: <i className="fa fa-check-square-o"></i> In stock</p>
                                            <p className="product-single__type"><label>Product type</label>: {this.state.Product._productType}</p>
                                        </div>
                                        <div className="clearfix product-price" >
                                            <p className="price-box product-single__price-product-template">
                                                <span className="product-price__price product-price__price-product-template price">
                                                       
                                                        <span className="price-new">${this.state.Product._price}</span>
                                                        {this.state.Product._compareAtPrice !== "null" && 
                                                        <span className="price-old">$ {this.state.Product._compareAtPrice } </span>
                                                        }
                                                </span>
                                            </p>
                                        </div>

                                        <form action="/cart/add" method="post"  className="product-form product-form-product-template " data-section="product-template">
                                            <div className="product-options-bottom">
                                                <div className="product-form__item product-form__item--quantity">
                                                    <label className="quantity-selector">Quantity:</label>
                                                    <div className="form_qty">
                                                        <input type="text" id="qty" name="quantity"  min="1" value={this.state.value} onChange={this.handleChange} className="quantity-selector"/>
                                                        <div className="inline">
                                                            <div className="increase items" ></div>
                                                            <div className="reduced items" ></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="product-form__item product-form__item--submit">
                                                    <button type="submit" name="add" id="AddToCart-product-template" className="btn product-form__cart-submit product-form__cart-submit--small">
                                                        <span id="AddToCartText-product-template">Add to cart</span>
                                                    </button>
                                                </div>
                                            </div>

                                        </form>
                                        

                                    </div>
                                </div>
                               
                            </div>
                                
                            </div>
                </div>
            );
        }
        
    }
}

