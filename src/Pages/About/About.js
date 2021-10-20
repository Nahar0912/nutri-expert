import React from 'react';
import Aboutus from '../../Images/Aboutus.jpg'

const About = () => {
    return (
        <div className='conatiner'>
            <div className='d-flex row align-items-center'>
                <div className='col-lg-6 col-md-6 col-12'>
                    <img src={Aboutus} alt="" width='680px' height='500px'/>
                </div>
                <div className='col-lg-6 col-md-6 col-12'>
                    <h1>Know About Us</h1>
                    <br />
                    <p>Every year, we help more than 300 million people answer their most important health questions with our expert-written, medically-reviewed articles across hundreds of health topics. Our team of writers and editors are industry experts, including healthcare professionals and health journalists, who write and continually update our 16,000+ article library. Our Medical Review Board of board-certified physicians vets our articles so you can be confident in your next steps for better health.</p>
                    <br />
                    <h4>Our email: nutriexpert@gmail.com</h4>
                </div>
            </div>
        </div>
    );
};

export default About;