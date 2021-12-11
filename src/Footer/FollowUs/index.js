import React, {Component} from 'react';

export default class FollowUs extends Component {

   
    render() {
        
        return (
            <div className="section-social text-center">

                
                <h3 className="footer-title">FOLLOW US!</h3>
               
                    <ul className="socials-wraps">

                        <li className="facebook">
                            <a className="_blank" href="https://www.facebook.com" ><i className="fa fa-facebook"></i></a>
                            <p><span>on</span><br/>
                                 Facebook</p>
                        </li>

                        <li className="twitter"><a className="_blank" href="https://twitter.com" ><i className="fa fa-twitter"></i></a>
                            <p><span>on</span><br/>
                                 Twitter</p>
                        </li>

                        <li className="instagram"><a className="_blank" href="https://www.instagram.com/scretshop1/" ><i className="fa fa-instagram"></i></a>
                            <p><span>on</span><br/>
                                 Instagram</p>
                        </li>

                        <li className="youtube"><a className="_blank" href="https://www.youtube.com" ><i className="fa fa-youtube"></i></a>
                            <p><span>on</span><br/>
                                 Youtube</p>
                        </li>

                    </ul>
               

                <div className="link-application">

                    <a className="image-app" href="/" title="wb-imarket">

                        <img className="img-payment lazyautosizes lazyloaded" src="//cdn.shopify.com/s/files/1/0251/1323/1434/files/ios.png?v=1561549587" alt="wb-imarket" />

                    </a>

                    <a className="image-app" href="/" title="wb-imarket">

                        <img className="img-payment lazyautosizes lazyloaded" src="//cdn.shopify.com/s/files/1/0251/1323/1434/files/adroid.png?v=1561549609" alt="wb-imarket" />

                    </a>

                </div>
            </div>
        );
    }
}

