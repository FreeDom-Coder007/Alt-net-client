import React from 'react';
// import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
// import { AuthContext } from '../context/AuthContextProvider';
import Review from './Review';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../hooks/useTitle';

const DetailsPage = () => {
    const PakageDetails = useLoaderData()
    // const {user} = useContext(AuthContext)
    useTitle('Package Details')

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://alt-net-provider-server.vercel.app/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])


    return (
        <section>
        <Header></Header>
        <div className="hero min-h-screen my-10">
         <div className="hero-content text-center flex flex-col border">
             <div>
             <PhotoProvider>
               <PhotoView src={PakageDetails.DetailsImage}>
               <img src={PakageDetails.DetailsImage} alt=""/>
               </PhotoView>
              </PhotoProvider>
             </div>    
             <div className="max-w-md mb-8">
               <h1 className="text-5xl font-bold">{PakageDetails.name}</h1>
               <h1 className='mt-10'>Up to</h1>
               <h1 className='font-bold'>{PakageDetails.NetSpeed}</h1>
               <h1 className='font-semibold mt-3'>USD: ${PakageDetails.price}</h1>
               <p className="py-6 font-semibold text-2xl">{PakageDetails.Description}</p>
             </div>
         </div>
        </div>
        {/* ----------- reviews section --------------- */}
        <div className='reviews-section w-8/12 mx-auto my-10'>
            <h1 className='text-2xl font-bold border-b-2'>Customer's Feedback About our services</h1>
            <div className='review-container'>
                {
                  reviews.map(review => <Review key={review._id} Reviewer={review}/>)  
                }
            </div>
            <Link to="/reviw-page"><button className='btn btn-warning text-white mt-5'>Add Your Reviews</button></Link>    
        </div>
        <Footer></Footer>    
        </section>
    )
}

export default DetailsPage;