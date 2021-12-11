import React, {Component} from 'react';

export default class NewsLetter extends Component {

   
    render() {
        
        return (
            <div className="section-newsletter">

                <h3 className="footer-title"><i className="fa fa-envelope"></i>NEWSLETTER</h3>

                <p className="description-col">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

                <div className="newsletter">
                    <form action="#" method="post"  className="no-gutters row">
                        <div className="col-9">   
                            <input className="form-control" type="email" placeholder="Email address" name="EMAIL"/>
                        </div>
                        <div className="col-3">   
                            <button type="submit" className="btn newsletter__submit font-ct" name="commit" id="Subscribe">
                                <span className="newsletter__submit-text--large">GO</span>
                            </button>
                        </div>
                    </form>
                    
                </div>
            </div>
        );
    }
}

