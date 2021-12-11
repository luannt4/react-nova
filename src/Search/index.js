import React, { Component } from 'react';
import {GetSearchProduct} from '../GetAPI';
import ProductCard from '../Collections/ProductCard';
import Loading from '../Loading';
import { NavLink } from "react-router-dom";

export default class Search extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            isLoading: true,
            itemDetail: '',
            page: 1,
            params: {
                resource: 'collections',
                title: this.props.match.params.id
            }
        };
    }

    
    componentDidMount() {
        const page = this.state.page;
        this._getDetailList(page,this.props.match.params.id);
    }
    
    componentDidUpdate(prevProps) {
        window.initMagnificPopup();
    }
   

     shouldComponentUpdate(nextProps, nextState) {
         const currentId = this.props.match.params.id;
         const nextId = nextProps.match.params.id;
         
    
         const shouldQuery = currentId !== nextId;
         if(shouldQuery){
             this._getDetailList(1,nextId);
             this.setState({
                page: 1,
                params: {
                    resource: 'collections',
                    title: nextId
                }
             });
         }
         return this.state !== nextState;
     }
 
     _getDetailList = (page,nextID) => {
       
        let params = {
            title: nextID,
            page:page,
            totalProduct: 50
        };
        const getDetailListPromise = GetSearchProduct(params);
       
         getDetailListPromise.then(value => {
           
            this.setState({
                isLoading: false,
                itemDetail: value
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
            return  this._renderProductItem() ;
        }

       
    };

    _renderProductItem = () => {
        const {itemDetail} = this.state;
       
        const item = itemDetail.map((item, index) => {
            return (
                <div className="col-lg-3" key={index}>
                    <ProductCard
                        item={item}
                        _title={item._title}
                        _handle={item._handle}
                        _image={item._image}
                        _price={item._price}
                        _compareAtPrice={item._compareAtPrice}
                        _resource={this.state.params.resource}
                    />
                </div>
            )
        });
        return item;
       
        
        
    }

    

    render() {
        const {itemDetail} = this.state;
        console.log(itemDetail);
        if(itemDetail.length > 0) {
            return (
                <div className="main-content clearfix">
                   
                        <div className="container">
                            <div className="section-header-search text-center">
                                <h1 className="h2">
                                    <span className="visually-hidden">Search results:</span>
                                    {itemDetail.length} results for "{this.props.match.params.id}"
                                </h1>
                                <div className="form-search-result">
                                    <form action={'/search/'+this.props.match.params.id} >
                                        <div className="input-group">
                                            <input type="text"
                                                    name="search" placeholder="Search"
                                                    className="form-control"
                                                    autoComplete="off" required />
                                            <NavLink to={`/search/${this.props.match.params.id}`}>
                                                <button type="reset" value="Reset" className="btn btn-secondary">Submit</button>
                                            </NavLink>
                                    
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="products-listing grid">
                                <div className=" product-layout block-content">
                                    <div className="row">
                                        {this._renderProductItemLayout()}
                                        
                                    </div>
                                </div>
                              
                            </div>
                            
                        </div>                    
                   
                </div>
            );
        }else{
            return (
                <div className="main-content clearfix">
                   
                        <div className="container">
                            <div className="section-header-search text-center">
                                <h1 className="h2">
                                    <span className="visually-hidden">Search results:</span>
                                    {itemDetail.length} results for "{this.props.match.params.id}"
                                </h1>
                                <div className="form-search-result">
                                    <form action={'/search/'+this.props.match.params.id} >
                                        <div className="input-group">
                                            <input type="text"
                                                    name="search" placeholder="Search"
                                                    className="form-control"
                                                    autoComplete="off" required />
                                            <NavLink to={`/search/${this.props.match.params.id}`}>
                                                <button type="reset" value="Reset" className="btn btn-secondary">Submit</button>
                                            </NavLink>
                                    
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="products-listing grid">
                                <div className="col-md-12 text-center" style={{margin: '5rem 0'}}>Sorry, there are no products in this collection</div>
                              
                            </div>
                            
                        </div>                    
                   
                </div>
                
            )
        }
       
    }
}