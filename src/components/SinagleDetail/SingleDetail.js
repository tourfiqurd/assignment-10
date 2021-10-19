import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Food from '../Food/Food';
import "./singleDetails.css"
import useData from './../../fakeData/useData';
import Searvices from './../../fakeData/Searvices';


const SingleDetail = (props) => {
    const { services } = Searvices()
    console.log(services);
    const { foods } = useData()
    console.log(foods);

    const { serviceId } = useParams()
    console.log(serviceId);
    const selectedService = services[serviceId - 1]
    console.log(selectedService);





    return (
        <div>
            <div className="d-md-flex justify-content-between align-items-center p-5">
                <div className="width-50">
                    <img width="100%" src={selectedService?.img} alt="" />
                </div>
                <div className="width-50">
                    <h1 className="text-left">{selectedService?.name}</h1>
                    <p className="">{selectedService?.details}</p>


                </div>

            </div>
            <div>
                <h2>An Article</h2>
                <p className="p-2">{selectedService?.desc}</p>
            </div>
            <br />
            <br />
            <br />
            <br />


        </div>
    );
};

export default SingleDetail;