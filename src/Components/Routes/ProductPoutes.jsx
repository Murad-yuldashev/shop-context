import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Contexts } from '../Context/Context';

const ProductRoutes = () => {
    const {login} = useContext(Contexts);

    return login ? <Outlet /> : <Navigate to="./login" />
}

export default ProductRoutes;
