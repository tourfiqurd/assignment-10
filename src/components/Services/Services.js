import React from 'react';
import SingleServices from './../SingleServices/SingleServices';

const Services = () => {
    const { services } = Services()
    return (
        <div>
            <div className="container">
                <h1 className="text-center p-2">Our Services</h1><br /><br />
                <div className="services-container">
                    {
                        services.map(service => <SingleServices service={service}></SingleServices>)

                    }

                </div>
            </div>

        </div>
    );
};

export default Services;