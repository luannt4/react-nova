import React, {Component} from 'react';

export default class LatestBlog extends Component {
    
    render() {
        
        return (
            <div className="widget-blog">
                <div className="home-title">      
                    <h2 className="font-ct">LATEST BLOG</h2>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                    </p>
                </div>
                <div className="widget-content">
                <div className="blog-item blog-item-1">
                        <div className="blog-info banners">
                        <div className="blog-image">
                            <a href="/">
                                <img className="img-responsive" src="//cdn.shopify.com/s/files/1/0093/3154/0030/articles/4.jpg?v=1554829001" alt="Injected humour, or words"/>
                            </a>
                            <div className="article-date-time"> 
                            <span className="days">09</span>
                            <span className="months">Apr</span>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                    <div className="widget-bottom">
                    <div className="description-bottom">
                        Every pair of jeans needs something great to go with them. And we’ve got it all.
                    </div>
                    <a className="link-view-more" href="/">LEARN MORE</a>
                    </div>
                </div>
                
            </div>
        );
    }
}

