import React from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="d-flex flex-column h-100">






                <footer className="w-100 py-4 flex-shrink-0">
                    <div className="container py-4">
                        <div className="row gy-4 gx-5">
                            <div className="col-lg-4 col-md-6">
                                <h5 className="h1 text-white">Medilab</h5>
                                <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved.</p>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <h5 className="text-white mb-3">Quick links</h5>
                                <ul className="list-unstyled text-muted">
                                    <li><Link className="active p-4" to="/">Home</Link></li>
                                    <li><Link className="p-4" to="/doctors">Doctors</Link></li>
                                    <li><Link className="p-4" to="/gallery">Gallery</Link></li>
                                    <li><Link className="p-4" to="/contract">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <h5 className="text-white mb-3">Quick links</h5>
                                <ul className="list-unstyled text-muted">
                                    <li><Link className="active p-4" to="/">Home</Link></li>
                                    <li><Link className="p-4" to="/doctors">Doctors</Link></li>
                                    <li><Link className="p-4" to="/gallery">Gallery</Link></li>
                                    <li><Link className="p-4" to="/contract">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <h5 className="text-white mb-3">Newsletter</h5>
                                <p className="small text-muted">Thanks for visiting our website !!!!!!!!!!!!!!!</p>
                                <form action="#">
                                    <div className="input-group mb-3">
                                        <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    );
};

export default Footer;