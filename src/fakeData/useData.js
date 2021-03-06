import React from 'react';

const useData = () => {
    const foods = [
        {
            id: 0,
            name: "Healthy Meal Plan",
            price: "23.99",
            image: "https://i.ibb.co/5rfgRqF/lunch1.png"
        },
        {
            id: 1,
            name: "Fried Chicken Bento",
            price: "6.99",
            image: "https://i.ibb.co/BsG8Fjd/lunch2.png"
        },
        {
            id: 2,
            name: "Tarragon-Rubbed-Salmon",
            price: "8 .99",
            image: "https://i.ibb.co/T8N04QS/lunch3.png"
        },
        {
            id: 3,
            name: "Honey-soy-Glazed Salmon",
            price: "7 .99",
            image: "https://i.ibb.co/HnsZGyD/lunch4.png"
        },
        {
            id: 4,
            name: "Beef Steak",
            price: "23.99",
            image: "https://i.ibb.co/MPrbJMw/lunch5.png"
        },
        {
            id: 5,
            name: "Indian Lunch",
            price: "23.99",
            image: "https://i.ibb.co/k2FSdnq/lunch6.png"
        }
    ]
    return {
        foods
    }
};

export default useData;