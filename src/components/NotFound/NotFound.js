import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="container d-flex justify-content-center">
                <div className="row p-5 ">
                    <div className="col-md-12">
                        <div className="error-template text-center">
                            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?size=338&ext=jpg&ga=GA1.2.1684515644.1632630529" alt="" />
                            <h1>
                                Oops!</h1>
                            <h2>
                                404 Not Found</h2>
                            <div className="error-details">
                                Sorry, an error has occured, Requested page not found!
                            </div>
                            <br />
                            <div className="error-actions">
                                <Link to="/" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                                    Take Me Home </Link>
                                <Link to="/contract" className="btn btn-outline-success btn-lg m-1"><span className="glyphicon glyphicon-envelope"></span> Contact Support </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            );

        </div>
    );
};

export default NotFound;