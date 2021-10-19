import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
import bg from "../../images/bannerbackground.png"
import Foods from './../Foods/Foods';
import headerImage from "../../images/header.jpg"
import Searvices from './../../fakeData/Searvices';
import SingleServices from '../SingleServices/SingleServices';
import Dectors from './../../fakeData/Dectors';
import SingleDoctor from './../SingleDoctor/SingleDoctor';
import Images from './../../fakeData/Images';
import DepData from './../../fakeData/DepData';
import Departments from '../Departments/Departments';
import SingleImge from '../SingleImage/SingleImge';

const Home = () => {
    const { services } = Searvices()
    const { doctors } = Dectors()
    const homeDoctors = doctors.slice(0, 6)
    const { images } = Images()
    const { departments } = DepData()
    console.log(departments);


    return (
        <div>
            <div className="d-md-flex justify-content-between align-items-center p-4">
                <div className="W-100">
                    <h2 className="section-title mb-2 h1 text-success text-md-left text-lg-left text-center  fw-bold text-uppercase">Welcome to Medilab</h2>
                    <p className="text-md-left text-lg-left text-center text-muted h5">The heart of your healthcare. The Highest Quality Healthcare. The Hospital of the Future, Today. The hospital you trust to care for those you love..</p>

                </div>
                <div className="W-100">
                    <img width="100%" src={headerImage} alt="" />
                </div>
            </div>
            <div className="">
                <div className="container-fluid">
                    <h2 className="section-title mb-2 h1 text-success text-center fw-bold text-uppercase">Our DepartMents</h2>
                    <p className="text-center text-muted h5">Having and managing a correct marketing strategy is crucial in a fast moving market.</p>

                    <div className="row mt-5">
                        {
                            departments.map(deparement => <Departments deparement={deparement} key={deparement.name}></Departments>)

                        }




                    </div>

                </div>

            </div>
            <section id="what-we-do">
                <div className="container-fluid">
                    <h2 className="section-title mb-2 h1">What we do</h2>
                    <p className="text-center text-muted h5">Having and managing a correct marketing strategy is crucial in a fast moving market.</p>
                    <div className="row mt-5">

                        {
                            services.map(service => <SingleServices service={service} key={service.id} ></SingleServices>)

                        }


                    </div>

                </div>
            </section>
            <div className="">
                <div className="container-fluid">
                    <br /><br /><br />
                    <h2 className="section-title mb-2 h1 text-success text-center fw-bold text-uppercase">Our Doctors</h2>
                    <p className="text-center text-muted h5">Having and managing a correct marketing strategy is crucial in a fast moving market.</p>

                    <div className="row mt-5">

                        {
                            homeDoctors.map(doctor => <SingleDoctor doctor={doctor} key={doctor.img}></SingleDoctor>)

                        }




                    </div>

                </div>

            </div>
            <div className="">
                <div className="container-fluid">
                    <br /><br /><br />
                    <h2 className="section-title mb-2 h1 text-success text-center fw-bold text-uppercase">Our Gallery</h2>
                    <p className="text-center text-muted h5">Having and managing a correct marketing strategy is crucial in a fast moving market.</p>

                    <div className="row mt-5">
                        {
                            images.map(image => <SingleImge image={image} key={image.img}></SingleImge>)

                        }






                    </div>

                </div>

            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />










        </div >

    );
};

export default Home;