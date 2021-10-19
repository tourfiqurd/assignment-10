import React from 'react';
import Dectors from '../../fakeData/Dectors';
import SingleDoctor from '../SingleDoctor/SingleDoctor';

const DoctorPage = () => {
    const { doctors } = Dectors()
    return (
        <div className="container">
            <div className="container-fluid">
                <br /><br /><br />
                <h2 className="section-title mb-2 h1 text-success text-center fw-bold text-uppercase">Our Doctors</h2>
                <p className="text-center text-muted h5">Having and managing a correct marketing strategy is crucial in a fast moving market.</p>

                <div className="row mt-5">

                    {
                        doctors.map(doctor => <SingleDoctor doctor={doctor}></SingleDoctor>)

                    }




                </div>

            </div>


        </div>
    );
};

export default DoctorPage;