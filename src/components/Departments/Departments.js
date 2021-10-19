import React from 'react';
import DepData from './../../fakeData/DepData';

const Departments = (props) => {
    const { img, name, desc } = props.deparement
    console.log(props.deparement);
    return (

        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div className="text-center">
                <div className="card-block block-4">
                    <img src={img} alt="" />
                    <h2 className="text-success p-2">{name}</h2>
                    <p className="text-secondary px-2">{desc}</p>

                </div>
            </div>
        </div>
    );
};

export default Departments;