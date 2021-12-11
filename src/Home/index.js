import React, { Component } from 'react';
import FeaturedCategory from '../Sections/FeaturedCategory';
import Slideshow from '../Sections/Slideshow';
import NewArrivals from '../Sections/NewArrivals';
import Instagram from '../Sections/Instagram';
import LatestBlog from '../Sections/LatestBlog';
import Services from '../Sections/Services';
import BannerSlider from '../Sections/BannerSlider';
import TopDeals from '../Sections/TopDeals';
import FeaturedProduct from '../Sections/FeaturedProduct';
export default class Home extends Component {
    
    render() {
        return (
            <div className="page-container">
                
                <Slideshow />
                <Services />
                <NewArrivals />
                <FeaturedCategory />
                <BannerSlider />
                <TopDeals />
                <FeaturedProduct/>
                <div className="home-section clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <Instagram/>
                            </div>
                            <div className="col-md-6">
                                <LatestBlog/>
                            </div>
                        </div>
                       
                        
                    </div>
                
                </div>
            </div>
            
        );
    }
}