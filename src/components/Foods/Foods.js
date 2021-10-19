import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import "./Foods.css"
import useData from './../../fakeData/useData';


const Foods = () => {
    const { foods } = useData()
    console.log(foods);

    const [total, setTotal] = useState(0)
    const handleAddToCart = (price) => {
        const value = parseInt(price)
        const totalDefult = total + value
        setTotal(totalDefult)


    }


    return (
        <div>
            <div className="row">
                <div className="col-lg-9">
                    <div className="foods-container">
                        {
                            foods?.map(food => <Food key={food.id} food={food} handleAddToCart={handleAddToCart}></Food>)
                        }

                    </div>
                </div>
                <div className="fixed-item col-lg-3 p-5  mt-5">
                    <div className="border border-primary border-2">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item text-center fw-bold">Pricing</li>
                            <li className="list-group-item">Price: $ {total}</li>
                            <li className="list-group-item">Tax : $ {total / 10}</li>
                            <li className="list-group-item">Total Cost: $ {total + total / 10}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="card w-5">


                </div>

            </div>
        </div>
    );
};

export default Foods;