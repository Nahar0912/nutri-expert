import React from 'react';

const Video = () => {
    return (
        <div className='my-5'>
            <h2 className='my-5 text-secondary'>Our Video Tips</h2>
            <span className='mx-5'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/agPsqRDNS3g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </span>
            <span>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/XJe0eZO8IzM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </span>
        </div>
    );
};

export default Video;