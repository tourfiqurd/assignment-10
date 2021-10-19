import React, { useState } from 'react';
import "./Resister.css"
import bg from "../../images/bannerbackground.png"
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png"
import useFirebage from './../../hooks/useFiebage';
import useAuth from '../../hooks/useAuth';

const Resister = () => {
    const { googleSignIn, createAccount } = useAuth()
    const [email, setEmail] = useState()
    const [passWord, setPassword] = useState()
    const handleEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value)


    }
    const handlePassword = (e) => {

        console.log(e.target.value);
        setPassword(e.target.value)
    }


    return (
        <div className="d-flex justify-content-center">
            <div>
                <div>
                    <br /><br />
                    <h2 className="section-title mb-2 h1 text-success text-md-left text-lg-left text-center  fw-bold text-uppercase">Medilab Resister</h2>

                    <img src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?size=338&ext=jpg&ga=GA1.2.1684515644.1632630529" alt="" />
                </div>
                <div>
                    <form >




                        <input onBlur={handleEmail} className="input-field" size="31" placeholder="Enter Your Email Here" type="email" /><br />

                        <input onBlur={handlePassword} className="input-field" size="31" placeholder="Enter Your Password Here" type="password" /><br />

                        <Link to="/">
                            <button onClick={() => createAccount(email, passWord)} className="login-btn">Register</button>
                        </Link><br /><br />
                        <Link to="/login">
                            <div>Already Have An Account</div>
                        </Link>


                    </form>
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

export default Resister;