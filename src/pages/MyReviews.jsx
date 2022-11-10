import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const MyReviews = () => {
    const myReviews = useLoaderData()
    console.log(myReviews)
    
    return (
        <div className='reviews-section lg:w-8/12 mx-auto my-10'>
            <h1 className='text-2xl font-bold border-b-2'>Your Reviews</h1>
            <div className='review-container'>
            { myReviews ?
             <article className='my-10 border px-2 py-2 shadow-sm'>
             <div className="flex items-center mb-4 space-x-4">
              <img className="w-10 h-10 rounded-full" src={myReviews.photoURL} alt=""/>
              <div className="space-y-1 font-medium">
                <p>{myReviews.name}</p>
              </div>
             </div>
             <div>
               <p className='mb-2 text-lg'>Date: {myReviews.date}</p>
             </div>
               <p className="mb-2">{myReviews.comment}</p>
               <div className='mt-8 mb-2'>
                <button className='btn'>Edit Review</button>
                <button className='btn ml-5'>Delete Review</button>
               </div>
             </article>
            :
             <article className='my-10 border  text-center px-2 py-2'>
               <h1 className='text-5xl font-semibold'>You don't have reviews</h1>
               <Link className='btn my-5' to="/reviw-page">Post a review</Link>
             </article>
            }
            </div>    
        </div> 
    )
}

export default MyReviews;