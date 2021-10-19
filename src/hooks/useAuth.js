import React, { useContext } from 'react';
import { AuthContext } from './../AuthContex/AuthContex';

const useAuth = () => {
    return useContext(AuthContext)
};

export default useAuth;