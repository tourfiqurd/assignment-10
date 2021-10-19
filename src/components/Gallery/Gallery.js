import React from 'react';
import Images from './../../fakeData/Images';
import SingleImge from './../SingleImage/SingleImge';

const Gallery = () => {
    const { images } = Images()
    return (
        <div>
            <div className="">
                <div className="">
                    <div className="container-fluid">
                        <br /><br /><br />
                        <h2 className="section-title mb-2 h1 text-success text-center fw-bold text-uppercase">Our Gallery</h2>
                        <p className="text-center text-muted h5">Having and managing a correct marketing strategy is crucial in a fast moving market.</p>

                        <div className="row mt-5">
                            {
                                images.map(image => <SingleImge image={image}></SingleImge>)

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


            </div>

        </div>
    );
};

export default Gallery;