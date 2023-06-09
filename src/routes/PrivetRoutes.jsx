import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { Spinner } from 'react-bootstrap';

const PrivetRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    const location = useLocation();
    console.log(location)
    
    if(loading){
        return <Spinner animation="border" variant="primary" />
    }

    if(user){
        return children;
    }

    return <Navigate state={{from: location}} to='/login' replace></Navigate>;
};

export default PrivetRoutes;