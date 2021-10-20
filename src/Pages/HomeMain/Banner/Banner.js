import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../../Images/Banner1.jpg'
import Banner2 from '../../../Images/Banner2.jpg'
import Banner3 from '../../../Images/Banner3.jpg'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Your Health is our first priority</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>We are here for your weightloss jurney</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-secondary'>No more worry for hair fall</h3>                
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;