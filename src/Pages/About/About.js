import React from 'react';
import Aboutus from '../../Images/Aboutus.jpg'

const About = () => {
    return (
        <div className='d-flex'>
            <div>
                <img src={Aboutus} alt="" width='700px' height='500px'/>
            </div>
            <div className='mt-5'>
                <h1>Know About Us</h1>
                <br />
                <p>Every year, we help more than 300 million people answer their most important health questions with our expert-written, medically-reviewed articles across hundreds of health topics. Our team of writers and editors are industry experts, including healthcare professionals and health journalists, who write and continually update our 16,000+ article library. Our Medical Review Board of board-certified physicians vets our articles so you can be confident in your next steps for better health.</p>
                <br />
                <h4>Our email: nutriexpert@gmail.com</h4>
            </div>
        </div>
    );
};

export default About;