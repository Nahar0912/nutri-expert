import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Welcome to our proggram: {serviceId}</h2>
            <p>
                Nutritionists use ideas from molecular biology, biochemistry, and genetics to understand how nutrients affect the human body.Nutrition also focuses on how people can use dietary choices to reduce the risk of disease, what happens if a person has too much or too little of a nutrient, and how allergies work.Nutrients provide nourishment. Proteins, carbohydrates, fat, vitamins, minerals, fiber, and water are all nutrients. If people do not have the right balance of nutrients in their diet, their risk of developing certain health conditions increases.This article will explain the different nutrients a person needs and why. It will also look at the role of the dietitian and the nutritionist.
            </p>
        </div>
    );
};

export default Booking;