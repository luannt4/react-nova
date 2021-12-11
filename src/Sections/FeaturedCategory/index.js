import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import Loading from '../../Loading';

export default class FeaturedCategory extends Component {
    constructor(props) {
        super(props);
		this.state = {
            isLoading: true
           
        }
    }

    componentDidMount() {
        const _this = this;
        setTimeout(function(){
            _this._promisAll();
        }, 2000);
    }

    _promisAll = () => {
        this.setState({
            isLoading: false
        });
    }

    _renderCollectionsLayout = () => {
        const {isLoading} = this.state;
        if (isLoading) {
            return ( <Loading/>);
        } 

        let listCollection = [
            {
                large: {
                    heading: 'WOMEN COLLECTIONS',
                    link: '/collections/women',
                    image:'//cdn.shopify.com/s/files/1/0093/3154/0030/files/block1-col1.png',
                    color:'#e4585d'
                },
                thumb: {
                    item1:{
                        heading: 'CLOTHERS',
                        link: '/collections/clothers-women',
                        image:'//cdn.shopify.com/s/files/1/0093/3154/0030/files/block1-col2.png',
                    },
                    item2:{
                        heading: 'ACCESSORIES',
                        link: '/collections/accessories-women',
                        image:'//cdn.shopify.com/s/files/1/0093/3154/0030/files/block1-col3.png',
                    }
                }
                
            },
            {
                large: {
                    heading: 'MENS  PICKS',
                    link: '/collections/men',
                    image:'//cdn.shopify.com/s/files/1/0093/3154/0030/files/block2-col1.png',
                    color:'#496388'
                },
                thumb: {
                    item1:{
                        heading: 'CLOTHERS',
                        link: '/collections/clothers-men',
                        image:'//cdn.shopify.com/s/files/1/0093/3154/0030/files/block2-col2.png',
                    },
                    item2:{
                        heading: 'ACCESSORIES',
                        link: '/collections/shoes',
                        image:'//cdn.shopify.com/s/files/1/0093/3154/0030/files/block2-col3.png',
                    }
                }
                
            },
            {
                large: {
                    heading: "KID'S COLLECTIONS",
                    link: '/collections/kids',
                    image:'//cdn.shopify.com/s/files/1/0093/3154/0030/files/block3-col1.png',
                    color:'#ac5233'
                },
                thumb: {
                    item1:{
                        heading: " KID'S WEAR",
                        link: '/collections/kids-wear',
                        image:'//cdn.shopify.com/s/files/1/0093/3154/0030/files/block3-col2.png',
                    },
                    item2:{
                        heading: "ACCESSORIES",
                        link: '/collections/accessories-kid',
                        image:'//cdn.shopify.com/s/files/1/0093/3154/0030/files/block3-col3.png',
                    }
                }
                
            },
            {
                large: {
                    heading: "HOMEWARE",
                    link: '/collections/homeware',
                    image:'//cdn.shopify.com/s/files/1/0093/3154/0030/files/block4-col1.png',
                    color:'#574f4d'
                },
                thumb: {
                    item1:{
                        heading: 'Decor',
                        link: '/collections/decor',
                        image:'//cdn.shopify.com/s/files/1/0093/3154/0030/files/block4-col2.png',
                    },
                    item2:{
                        heading: 'Bed Bath',
                        link: '/collections/bed-bath',
                        image:'//cdn.shopify.com/s/files/1/0093/3154/0030/files/block4-col3.png',
                    }
                }
                
            }
        ]

        const itemcollection = listCollection.map((item, index) => {
            return (
               
                <div className="items col-md-6 col-12" key={index}>
                    <div className="column-left">
                        <div className="collection-item">
                            <img className="img-responsive " alt="collection" src={item.large.image} />
                            <div className="information">
                                <div className="collection-name items-1" style={{ color: item.large.color }}>{item.large.heading}</div>
                                <NavLink to={item.large.link} title={item.large.heading}  style={{ color: item.large.color }} className="link-collection">
                                    Shop Now
                                </NavLink>
                                
                            </div>
                        </div>
                    </div>

                    <div className="column-right">
                        <div className="collection-item">
                            <NavLink to={item.thumb.item1.link} title={item.thumb.item1.heading}  >
                                <img className="img-responsive " alt={item.thumb.item1.heading} src={item.thumb.item1.image} />
                                <div className="information">
                                    <div className="collection-name">
                                    {item.thumb.item1.heading}
                                    </div>
                                </div>
                            </NavLink>
                            
                        </div>
                        <div className="collection-item">
                        <NavLink to={item.thumb.item2.link} title={item.thumb.item2.heading}  >
                                <img className="img-responsive " alt={item.thumb.item2.heading} src={item.thumb.item2.image} />
                                <div className="information">
                                    <div className="collection-name">
                                    {item.thumb.item2.heading}
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            );
        });
        
        return itemcollection;

        
    }
    render() {
        return (
            
            <div className="home-section clearfix">
                <div className="container">
                    <div className="widget-collection">
                        <div className="home-title">
                            <h2>SHOP BY CATEGORIES</h2>
                            <p className="description">Every pair of jeans needs something great to go with them. And we've got it all.</p>
                        </div>
                        <div className="widget-content">
                            <div className="row">
                                {this._renderCollectionsLayout()}
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
            
        );
    }
}

