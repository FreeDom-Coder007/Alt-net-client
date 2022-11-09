import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Review from './Review';
// import { PhotoProvider, PhotoView } from 'react-photo-view';
// import 'react-photo-view/dist/react-photo-view.css';

const DetailsPage = () => {
    const PakageDetails = useLoaderData()
    console.log(PakageDetails)

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    console.log(reviews)

    return (
        <section>
        <Header></Header>
        <div className="hero min-h-screen my-10">
         <div className="hero-content text-center flex flex-col border">
             <div><img src={PakageDetails.DetailsImage} alt=""/></div>    
             <div className="max-w-md mb-8">
               <h1 className="text-5xl font-bold">{PakageDetails.name}</h1>
               <h1 className='mt-10'>{PakageDetails.context}</h1>
               <h1 className='font-bold'>{PakageDetails.NetSpeed}</h1>
               <h1 className='font-semibold mt-3'>USD: ${PakageDetails.price}</h1>
               <p className="py-6 font-semibold text-2xl">{PakageDetails.Description}</p>
               <button type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-full px-10 py-3 text-center">Subscribe</button>
             </div>
         </div>
        </div>
        {/* ----------- reviews section --------------- */}
        <div className='reviews-section w-8/12 mx-auto my-10'>
            <h1 className='text-2xl font-bold border-b-2'>Customer's Feedback About our services</h1>
            <div className='review-container'>
                {
                  reviews.map(review => <Review Reviewer={review}/>)  
                }
            </div>    
        </div>
        <Footer></Footer>    
        </section>
    )
}

export default DetailsPage;