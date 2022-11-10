import React from 'react';
import useTitle from '../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')

    return (
        <div className='bg-base-200'>
            <h1 className='text-5xl'>Bolg</h1>
        </div>
    );
};

export default Blog;