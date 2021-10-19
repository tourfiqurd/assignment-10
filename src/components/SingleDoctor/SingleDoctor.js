import React from 'react';

const SingleDoctor = (props) => {
    const { name, position, desc, img } = props.doctor

    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div className="text-center">
                <div className="card-block block-4">
                    <img width="150px" className="rounded-circle " src={img} alt="" />
                    <h2 className="text-success p-2">{name}</h2>
                    <p className="text-secondary px-2">{position}</p>
                    <p className="text-secondary px-2">{desc}</p>

                </div>
            </div>
        </div>

    );
};

export default SingleDoctor;