import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MyReviews = () => {
    const myReviews = useLoaderData()
    console.log(myReviews)

    const handleDeleteReview = () => {
       fetch(`http://localhost:5000/reviews/${myReviews._id}`,{
         method: 'DELETE'
       })
       .then((res) => res.json())
       .then(data => {
        if(data.acknowledged){
          handleToast()
        }
        console.log(data)
      })
    }

    const handleToast = () => {
      toast.success(<h1 className='text-2xl font-semibold'>Review Deleted</h1>, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    
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
                <Link className='btn'>Edit Review</Link>
                <button onClick={handleDeleteReview} className='btn ml-5'>Delete Review</button>
                <ToastContainer/>
               </div>
             </article>
            :
             <article className='my-10 border  text-center px-2 py-2'>
               <h1 className='text-5xl font-semibold'>No reviews were added</h1>
             </article>
            }
            </div>    
        </div> 
    )
}

export default MyReviews;