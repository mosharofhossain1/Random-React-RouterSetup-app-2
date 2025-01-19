// import React from 'react';

import { Link } from "react-router-dom";

const Nab = () => {
    return (
        <div className="bg-red-600 p-4">
            <Link className="ml-4 text-white font-bold text-2xl" to={'/home'}>Home</Link>
            <Link className="ml-4 text-white font-bold text-2xl" to={'/products'}>Products </Link>

        </div>
    );
};

export default Nab;