import React from 'react';

const Contract = () => {
    return (
        <div >
            <br /><br />
            <h2 className="section-title mb-2 h1 text-success text-center fw-bold text-uppercase">Contract With Us</h2>


            <div className="d-md-flex align-items-center text-white" >
                <div className="w-100 p-5">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="w-100 p-2 border border-success rounded" id="exampleFormControlInput1" placeholder="Enter Your Email Here" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">PassWord</label>
                        <input type="password" className="w-100 p-2 border border-success rounded" id="exampleFormControlInput1" placeholder="Enter Your Password Here" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="w-100 p-2 border border-success rounded" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
                <div className="w-50">
                    <img width="300px" src="https://image.freepik.com/free-vector/signing-contract-concept-illustration_114360-4909.jpg" alt="" />
                </div>

            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

        </div>
    );
};

export default Contract;