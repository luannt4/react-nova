import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

export default class BannerSlider extends Component {
    
    componentDidMount() {
        window.initBannerSlider()
    }

    componentDidUpdate(prevProps) {
       //window.initBannerSlider();
    }

    _renderCollectionsLayout = () => {
        return (
            <div className="image-slider ">
                <div className="item_banner item ">
                    <img className="img-responsive lazyloaded" src="//cdn.shopify.com/s/files/1/0093/3154/0030/files/banners-slider3.png?v=1554805051" alt="SS Nova"/>
                    <div className="infor-collection">
                        <div className="collection-name">BEDROOM <br/> FURNITURE</div>
                        <div className="collection-des">Transform your space <br/> with bedroom essentials</div>
                        <NavLink to="/collections/homeware" title="women"  className="link-collection">
                            SHOP NOW
                        </NavLink>
                    </div>
                </div>
                
                <div className="item_banner item ">
                    <img className="img-responsive lazyloaded" src="//cdn.shopify.com/s/files/1/0093/3154/0030/files/banners-slider.png?v=1554366577" alt="SS Nova"/>
                    <div className="infor-collection">
                        <div className="collection-name">BEDROOM <br/> FURNITURE</div>
                        <div className="collection-des">Transform your space <br/> with bedroom essentials</div>
                       
                        <NavLink to="/collections/frontpage" title="women"  className="link-collection">
                            SHOP NOW
                        </NavLink>
                    </div>
                </div>

                <div className="item_banner item ">
                    <img className="img-responsive lazyloaded" src="//cdn.shopify.com/s/files/1/0093/3154/0030/files/banners-slider2.png?v=1554805015" alt="SS Nova"/>
                    <div className="infor-collection">
                        <div className="collection-name">BEDROOM FURNITURE</div>
                        <div className="collection-des">Transform your space with bedroom essentials</div>
                       
                        <NavLink to="/collections/frontpage" title="women"  className="link-collection">
                            SHOP NOW
                        </NavLink>
                    </div>

                </div>
            
            </div>
            
            
        );
        
    }
    render() {
        return (
            <div className="home-section widget_multibanner banners-slider">
                <div className="container">
                    <div className="widget-content" style={{background : "url(//cdn.shopify.com/s/files/1/0093/3154/0030/files/bg-banners-slider.png)"}}>
                        <div id="slider">
                        {this._renderCollectionsLayout()}
                        </div>
                        <div className="bottom-section">
                            <p className="des-section">Extra 50% off some final sale styles *</p>
                            <a className="button-viewall" href="/">SHOP NEUTRALS</a>

                        </div>
                    </div>
                </div>
            </div>
           
        );
    }
}

