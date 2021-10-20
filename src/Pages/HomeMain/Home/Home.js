import React from 'react';
import Video from '../../Videos/Video';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <Video></Video>
        </div>
    );
};

export default Home;