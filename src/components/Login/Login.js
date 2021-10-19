import React, { useState } from 'react';

import bg from "../../images/bannerbackground.png"
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png"
import { initializeApp } from 'firebase/app';
import useFirebage from './../../hooks/useFiebage';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const { googleSignIn, signOutGoogle, signInUsers } = useAuth()
    const handleEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value)


    }
    const handlePassword = (e) => {

        console.log(e.target.value);
        setPassword(e.target.value)
    }


    return (
        <div>
            <div className="d-flex justify-content-center">
                <div>
                    <div>
                        <br /><br />

                        <h2 className="section-title mb-2 h1 text-success text-md-left text-lg-left text-center  fw-bold text-uppercase">Medilab Login</h2>
                        <img src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?size=338&ext=jpg&ga=GA1.2.1684515644.1632630529" alt="" />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>

                        <form >



                            <input onBlur={handleEmail} className="input-field" size="31" placeholder="Enter Your Email Here" type="email" /><br />
                            <input onBlur={handlePassword} className="input-field" size="31" placeholder="Enter Your Password Here" type="password" /><br />
                            <Link to="/">
                                <button onClick={() => signInUsers(email, password)} className="login-btn">Login</button>
                            </Link><br /><br />
                            <div>---------or---------</div>
                            <Link to="/">
                                <button onClick={googleSignIn} className="login-btn">Continue With Google</button>
                            </Link><br />
                            <Link to="/">
                                <button onClick={signOutGoogle} className="login-btn">SignOut</button>
                            </Link>
                            <Link to="/register">
                                <div>Create New Account</div>
                            </Link>

                        </form>




                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </div>
    );
};

export default Login;