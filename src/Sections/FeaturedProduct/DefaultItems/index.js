import React, {Component} from 'react';
import {GetCollectionsitems} from '../../../GetAPI';
import ProductCard from '../../../Collections/ProductCard';
import Loading from '../../../Loading';

export default class DefaultItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            collection: '',
            itemDetail: ''
           
        };
    }

    componentDidMount() {
        this._getDetailList(this.props.item.id);
    }

    componentDidUpdate(prevProps) {
        window.initlOwlCarousel();
    }

    shouldComponentUpdate(nextProps, nextState) {        
        return this.state !== nextState;
    }

    _getDetailList = (id) => {
       
        let params = {
            id: id,
            limitProduct: 8
        };
        const getDetailListPromise = GetCollectionsitems(params);
        
         getDetailListPromise.then(value => {
            this.setState({
                isLoading: false,
                collection: value.collection,
                itemDetail: value.product
            });
         })
         .catch(function(error){
             console.log(error);
         });
     }

     _renderProductItemLayout = () => {
        const {isLoading} = this.state;
       
        if (isLoading) {
            return (
                <Loading/>
            );
        } else {
            return  (
                <div className="ss-carousel owl-carousel owl-theme" data-dots="true" data-nav="false" data-margin="30" data-autoplay="false" data-autospeed="10000" data-speed="300" data-column1="4" data-column2="3" data-column3="2" data-column4="2" data-column5="1">
                   { this._renderProductItem()}
                </div>
            )
        }

       
    };

    _renderProductItem = () => {
        const {itemDetail} = this.state;
        const item = itemDetail.map((item, index) => {
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
            )
        });
        return item;
       
    }

    render() {
        return (
            <div role="tabpanel"
                className={this.props.index === 0? 'tab-pane fade  active show' : 'tab-pane fade '}
                id={this.props.item.id} aria-labelledby={this.props.item.id + '-tab'}
                key={this.props.index}>

                {this._renderProductItemLayout()}
                
            </div>
        );
    }
}

