import React, { Component } from 'react';
import {GetCollectionsitems} from '../../GetAPI';
import ProductCard from '../ProductCard';
import Loading from '../../Loading';
import Breadcrumb from '../../Breadcrumb';

export default class CollectionsChildren extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            collection: '',
            itemDetail: '',
            page: 1,
            total_pages: 0,
            params: {
                resource: 'collections',
                id: this.props.match.params.id
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
                    id: nextId
                }
             });
         }
         return this.state !== nextState;
     }
 
     _getDetailList = (page,nextID) => {
       
        let params = {
             id: nextID,
             page:page,
             limitProduct: 50
        };
        const getDetailListPromise = GetCollectionsitems(params);
        
         getDetailListPromise.then(value => {
            this.setState({
                isLoading: false,
                total_pages: 2,
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

    _updateStatePage = (pageN) => {
        this.setState({
            page: pageN
        });
        this._getDetailList(pageN);
    }

    _plusPage = (n) => {
        let currentPage = this.state.page;
        currentPage += n;
        let totalPage = this.state.total_pages;
        if(totalPage > 10) {
            totalPage = 10;
        }
        if(currentPage > 0 && currentPage <= totalPage) {
            this._updateStatePage(currentPage);
        }
    }

    _renderPagination = (pageLimit) => {
        let page = [];
        let pageLenght;

        if(pageLimit > 10) {
            pageLenght = 10;
        }else {
            pageLenght = pageLimit;
        }
        for(let i = 1; i <= pageLenght; i++) {
            if(i === this.state.page) {
                page.push(<li key={i} className="active page-item"><span className="page-link" onClick={() => this._updateStatePage(i)}>{i}</span></li>);
            }else {
                page.push(<li key={i} className="page-item"><span className="page-link"  onClick={() => this._updateStatePage(i)}>{i}</span></li>);
            }
        }
        return page;
        
    }

    _renderLayoutPagination = () => {
        const {total_pages} = this.state;
        if(total_pages > 1) {
            return (
                <div className="toolbar-bottom d-flex justify-content-center">
                    <ul className="pagination ">
                        <li className="page-item"><span className="frist page-link" onClick={() => this._plusPage(-1)}>Prev</span></li>
                        {this._renderPagination(this.state.total_pages)}
                        <li className="page-item"><span className="last page-link" onClick={() => this._plusPage(1)}>Next</span></li>
                    </ul>
                </div>
            );
        }else {
            return '';
        }
    }

    render() {
        const {collection} = this.state;
       
        if(collection != null) {
            return (
                <div className="main-content clearfix">
                   
                        <div className="container">
                            <Breadcrumb name="collections" link="/collections" subitem={this.props.match.params.id} />
                            <div className="form-group collectionDesc">
                                <h4 className="latest-text">Collections {collection._collectionTitle} </h4>
                                <p>{collection._collectionDesc}</p>
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
                <div className="col-md-12 text-center" style={{margin: '5rem 0'}}>Sorry, there are no products in this collection</div>
            )
        }
       
    }
}