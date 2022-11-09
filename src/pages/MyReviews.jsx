import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContextProvider';

const MyReviews = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h1 className='text-5xl'>My Reviews</h1>
        </div>
    );
};

export default MyReviews;