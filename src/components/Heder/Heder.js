import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import useFirebage from './../../hooks/useFiebage';

const Heder = () => {
    const { signOutGoogle } = useFirebage()

    const { user } = useFirebage()
    console.log(user.email);

    return (

        <div className="">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark text-center text-white ">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand pt-" >Medilab</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pt-3">
                            <li className="nav-item">
                                <li><Link className="active p-4" to="/">Home</Link></li>

                            </li>
                            <li className="nav-item">
                                <li><Link className="p-4" to="/doctors">Doctors</Link></li>

                            </li>
                            <li className="nav-item dropdown">
                                <li><Link className="p-4" to="/gallery">Gallery</Link></li>

                            </li>
                            <li>
                                <li><Link className="p-4" to="/contract">Contact</Link></li>

                            </li>
                            <li className="nav-item">
                                {user?.email ? <div> <Link to="/"><button className="btn  btn-outline-success px-3 m-1" onClick={signOutGoogle}>Logout</button></Link><img width="50px " className="rounded-circle" src={user.photoURL}></img></div> : <Link to="/login"><button className="btn  btn-outline-success px-3 m-1">Login</button></Link>}
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>







        </div>
    );
};

export default Heder;