/* eslint-disable react/prop-types */
// import React from 'react';

import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { title, price, image } = product;
    return (
        <div className="border-2 p-4">
            <h1>Title : {title}</h1>
            <img className="w-full h-96" src={image} alt="" />
            <p>Price : {price}</p>

            <Link to={`/products/${product.id}`}>

                <button className="bg-red-500 px-3 py-2 text-white my-3 rounded-md">More Info</button></Link>
        </div>
    );
};

export default Product;