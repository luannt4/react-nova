import React, {Component} from 'react';

export default class Instagram extends Component {
    
    componentDidMount() {
        window.initInstafeed()
    }

    componentDidUpdate(prevProps) {
       //window.initInstafeed();
    }

    render() {
        
        return (
          
            <div className="widget-instagram">
                <div className="home-title">      
                    <h2 className="font-ct">SHOP INSTAGRAM</h2>
                    <p className="description">
                        Use #NOVA for a chance to be featured.
                    </p>
                </div>
                <div className="widget-content">
                    <div id="instafeed" className="instagram-slide owl-carousel owl-theme" >

                    </div>
                    <div className="widget-bottom">
                    <div className="description-bottom">
                        Every pair of jeans needs something great to go with them. And we’ve got it all.
                    </div>
                    <a className="link-view-more" href="/">VIEW GALLERY</a>
                    </div>
                </div>
                
            </div>
        );
    }
}

