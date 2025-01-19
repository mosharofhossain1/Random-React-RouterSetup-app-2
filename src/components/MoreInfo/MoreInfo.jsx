// import React from 'react';

import { useLoaderData } from "react-router-dom";

const MoreInfo = () => {
    const moreInfo = useLoaderData();
    const { title, price, image } = moreInfo;
    return (
        <div className="text-center border-2 p-3 w-96 mx-auto">
            <h1>Title : {title}</h1>
            <img className="w-96 h-96 mx-auto" src={image} alt="" />
            <p>Price : {price}</p>
        </div>
    );
};

export default MoreInfo;