import React, { Component } from 'react';
import CollectionsChildren from '../Collections/CollectionsChildren';

export default class ProductLists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: {},
            page: 1,
            total_pages: 0,
            
        }
    }
    render() {
        return (
            <div className="general-agileits-w3l">
                <div className="w3l-medile-movies-grids">
                    <div className="browse-agile-w3ls general-w3ls">
                        <div className="tittle-head">
                            <h4 className="latest-text">Family Movies </h4>
                            
                        </div>
                        <div className="container">
                            <ProductLists params={this.state.params} />
                        </div>
                    </div>                    
                </div>
            </div>
        );
    }
}