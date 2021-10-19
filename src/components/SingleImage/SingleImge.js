import React from 'react';
import "./SingleImage.css"

const SingleImge = (props) => {
    return (
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
            <div className="text-center">
                <div className="card-block block-4">
                    <img className="image" width="100%" src={props.image.img} alt="" />

                </div>
            </div>
        </div>
    );
};

export default SingleImge;