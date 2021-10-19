import React from 'react';
import { Link } from 'react-router-dom';
import "./food.css"

const Food = (props) => {

    const { name, image, price, id } = props.food

    return (
        <div>
            <div className="">
                <img src={image} className=" image-style card-img-top w-5" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">How we dream about our future</p>
                    <h4>Price:{price}</h4>

                    <Link to={`food/${id}`}>
                        <button onClick={() => props.handleAddToCart(price)} className="btn btn-success rounded-pill px-4 py-2">Details</button>
                    </Link>
                    <button onClick={() => props.handleAddToCart(price)} className="btn btn-success rounded-pill px-4 py-2">Add To Cart</button>


                </div>
            </div>

        </div>
    );
};

export default Food;