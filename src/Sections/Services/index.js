import React, {Component} from 'react';

export default class Services extends Component {
    
    _renderServicesList = () => {
        let heroCarousel = [
            {
                title: 'Official Cloves shop',
                desc: 'over 1100 products online',
                icon: 'material-icons',
                align: 'left',
            },
            {
                title: 'Free shipping and returns',
                desc: 'for members',
                icon: 'material-icons',
                align: 'center',
            },
            {
                title: 'Same-day dispatch',
                desc: 'before 8pm (Mon-Fri)',
                icon: 'material-icons',
                align: 'right',

            }
        ]

        const itemCarousel = heroCarousel.map((item, index) => {
            return (
                <div className={"policy "+item.align}  key={index}>
                    <div className="policy_inner">
                        <div className="service-ico">
                            <i className={item.icon}>check</i>
                        </div>
                        <div className="service-info">
                            <p className="title">{item.title} </p>
                            <p className="des"> {item.desc}</p>
                        </div>
                    </div>
                </div>
            );
        });
        return itemCarousel;
    }

    render() {
        
        return (
            <div className="home-section widget-services">
                <div className="container">
                    <div className="home-services">
                        <div className="services-inline">
                            {this._renderServicesList()}
                        </div>
                    </div>
               </div> 
            </div>
        );
    }
}

