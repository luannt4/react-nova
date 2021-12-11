import React, {Component} from 'react';
import {GetSearchProduct} from '../../GetAPI';
import { NavLink } from "react-router-dom";
import Loading from '../../Loading';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSearch: false,
            query: '',
            results: {},
        }
    }

    componentDidMount() {
        //this._promisAll(this.state.query);
        window.initSmartSearch();
    }


    _promisAll = (textQuery) => {
        let params = {
            title: textQuery,
            totalProduct: 10
        };
        const promisGetSearch =  GetSearchProduct(params);
        promisGetSearch.then(values => {
            const searchResults = values.map((item, index) => {
                return {
                    _title: `${item._title}`,
                    _handle: `${item._handle}`,
                    _image: `${item._image}`,
                    _price: `${item._price}`,
                    _compareAtPrice: `${item._compareAtPrice}`,
                };
            });

            this.setState({
                showSearch: true,
                query: textQuery,
                results: searchResults
            });
        })
        .catch(function(error){
            console.log(error);
        });
    }

    _pathDetail = '/products/';
    _renderProductItem = () => {
        const {results} = this.state;
        
        const items = results.map((item, index) => {
            return (
                <div className="smartSearch-product" key={index}>
                    <NavLink onClick={this._onClick} to={this._pathDetail + item._handle} className="smartSearch-product--link">
                        <div className="thumbnail">
                            <img src={item._image} title="album-name" className="img-responsive" alt=" " />
                        </div>
                        <div className="content-item">
                            <h4 className="title-product">
                                {item._title}
                            </h4>
                            <div className="price">
                                    <span className="price-new">${item._price}</span>
                                    {item._compareAtPrice !== "null" && 
                                    <span className="price-old">$ {item._compareAtPrice } </span>
                                    }
                            </div>
                            
                        </div>
                    </NavLink>
                </div>
                    
            );
        });

        
        return items ;
    }

    _renderLayoutResult = () => {
        const {results} = this.state;
        const limit = 4;

        if(this.state.showSearch === false  ) {
            return <Loading/>;
        }

        if(results.length > 0){
            return (
                <div >
                    <div  className="smartSearch-mainbody">
                        {this._renderProductItem()}
                    </div>
                    {results.length > limit && 
                        <div className="smartSearch-results">All Results {results.length} items</div>
                    }
                </div>
            );
        }else{
            return (
                <div className="smartSearch-noproduct" >
                    Sorry, nothing found for <strong>{this.state.query}</strong>
                </div>
            );
        }
    }

    _textValue = '';
    _delayTimer;
    _onChange = (event) => {
        this._textValue = event.target.value;
        this._doSearch(this._textValue);
    }

    _doSearch = (text) => {
        clearTimeout(this._delayTimer);
        var that = this;
        this._delayTimer = setTimeout(function() {
            if(text !== '') {
                that._promisAll(text);
            }
        }, 1000);
    }

    render() {
        return (
            <div className="form-search-bar ">
                <form action={'/search/'+this.state.query} >
                    <input type="text"
                            name="search" placeholder="Search"
                            onChange={(event) => this._onChange(event)}
                            autoComplete="off" required />
                    <NavLink to={`/search/${this.state.query}`}>
                        <button type="reset" value="Reset" className="btn btn-primary"><i className="fa fa-search"></i></button>
                    </NavLink>
                
                    <div className="box-results">
                        {this._renderLayoutResult()}
                    </div>
                </form>
            </div>

        );
    }
}

