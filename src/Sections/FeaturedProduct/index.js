import React, { Component } from 'react';
import DefaultItems from './DefaultItems';

export default class FeaturedProduct extends Component {
    constructor(props) {
        super(props);
		this.state = {
            isLoading: true,
            tabList: this._createTabList()
           
        }
    }

	_createTabList = () => {
        let tabList = [
            {
                id: 'women',
                name: 'Women'
            },
            {
                id: 'men',
                name: 'Men'
            },
            {
                id: 'kids',
                name: 'Kids'
            },
            {
                id: 'homeware',
                name: 'Home ware'
            }
        ]
        return tabList;
    }

    

	_renderTabList = () => {
        const {tabList} = this.state;
        const itemTab = tabList.map((item, index) => {
            return (
                <li className={'tabs-menu-label'}
                    key={index}>
                    <a id={item.id + '-tab'} href={'#' + item.id} role="tab" className={index === 0? 'nav-link active' : 'nav-link'}
                        data-toggle="tab" aria-controls={item.id} aria-expanded="true">
                        {item.name}
                    </a>
                </li>
            );
        });
        return itemTab;
    }

    _renderTabContent = () => {
        const {tabList} = this.state;
        const itemContent = tabList.map((item, index) => {
            return (
                <DefaultItems
                    key={index}
                    index = {index}
                    item = {item}
                />
            );
        });
        return itemContent;
    }

    _renderTabLayout = () => {
        const {tabList} = this.state;
        if(tabList.length > 0) {
            return (
                <div role="tabpanel" data-example-id="togglable-tabs">
                    <div className="tabs-menu">
                        <ul id="myTab" className="tabs-menu_title nav nav-tabs" role="tablist">
                            { this._renderTabList() }
                        </ul>
                    </div>
                    <div  className="tab-content product-layout">
                            { this._renderTabContent() }
                    </div>
                </div>
            );
        }else {
            return '';
        }
    }
	
    render() {
        
        return (
            <div className="home-section section-tabs clearfix">
                <div className="widget-product-tabs">
                    <div className="container">
                        <div className="ltabs-tabs-container products-listing grid">
                            <div className="home-title">
                                <h2>FEATURES PRODUCTS</h2>
                                <p className="description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                            
                            {this._renderTabLayout()}
                        </div>
                    </div>
                </div>
               
            </div>
        );
    }
}