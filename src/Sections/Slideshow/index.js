import React, {Component} from 'react';

export default class Slideshow extends Component {

    componentDidMount() {
        window.initHomeSlider()
    }

    componentDidUpdate(prevProps) {
        //window.initHomeSlider();
    }

    shouldComponentUpdate(nextProps, nextState) {        
        return this.state !== nextState;
    }
    
    _renderCarouselList = () => {
        let heroCarousel = [
            {
                heading: 'INTRODUCING',
                caption: 'PEACE, LOVE & PRINTS',
                content: 'Welcome long days at the beach with our collection of effortlessly',
                images:'images/slideshow/slider.png',
            },
            {
                heading: 'INTRODUCING',
                caption: 'PEACE, LOVE & PRINTS',
                content: 'Welcome long days at the beach with our collection of effortlessly',
                images:'images/slideshow/slider2.png',
            },
            {
                heading: 'INTRODUCING',
                caption: 'PEACE, LOVE & PRINTS',
                content: 'Welcome long days at the beach with our collection of effortlessly',
                images:'images/slideshow/slider3.png',

            }
        ]

        const itemCarousel = heroCarousel.map((item, index) => {
            return (
               
                <div className="heroCarousel--item" key={index}>
                    <img className="collection-img img-responsive" alt="SS Nova" src={item.images}  />
                    <div className="heroCarousel-content center" >
                        <div className="tp-caption-slide-1" style={{color: '#979798', fontSize: '26px'}}   >{item.heading} </div>
                        <div className="tp-caption-slide-2" style={{color: '#727273', fontSize: '45px', fontWeight:'700'}}>{item.caption}</div>
                        <div className="tp-caption-slide-3" style={{color: '#666666', fontSize: '16px', fontWeight:'400'}}>{item.content}</div>
                    </div>
                </div>
            );
        });
        return itemCarousel;
    }

    
    render() {
        
        return (
            <div className="widget-slideshow">
                <div className="container">
                    <div className="owl-carousel owl-theme home_slider">
                        {this._renderCarouselList()}
                    </div>
                </div>
            </div>
        );
    }
}

