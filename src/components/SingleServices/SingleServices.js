import React from 'react';
import "./SingleServices.css"
import { faBookMedical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const SingleServices = (props) => {
    const { name, details, id } = props.service
    const element = <FontAwesomeIcon icon={faBookMedical} />

    return (

        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div className="card">
                <div className="card-block block-4">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{details}</p>
                    <Link to={`/services/${id}`}><button className="btn btn-outline-success">Read more  <i className="fa fa-angle-double-right ml-2"></i></button></Link>

                </div>
            </div>
        </div>
    );
};

export default SingleServices;