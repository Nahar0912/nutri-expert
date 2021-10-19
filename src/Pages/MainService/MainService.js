import React, { useEffect, useState } from 'react';
import Service from '../HomeMain/Service/Service';

const MainService = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h2 className="text-secondary mt-5">Our Services</h2>
            <div className="row">
               {
                   services.map(service=><Service
                        key={service.id}
                        service={service}
                   ></Service>)
               }
           </div>
        </div>
    );
};

export default MainService;