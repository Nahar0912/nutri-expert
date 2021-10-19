import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../Images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '50%' }} src={notfound} alt="" />
            <br />
            <Link to="/"><button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;