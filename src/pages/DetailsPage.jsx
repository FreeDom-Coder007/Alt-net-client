import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const DetailsPage = () => {
    const PakageDetails = useLoaderData()
    console.log(PakageDetails)

    
    return (
        <section>
        <Header></Header>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
             <div><img src={PakageDetails.DetailsImage} alt=""/></div>    
             <div className="max-w-md">
               <h1 className="text-5xl font-bold">{PakageDetails.name}</h1>
               <h1>{PakageDetails.context}</h1>
               <h1>{PakageDetails.NetSpeed}</h1>
               <p className="py-6">{PakageDetails.Description}</p>
               <button type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-full px-10 py-3 text-center">Subscribe</button>
             </div>
            </div>
        </div>
        <Footer></Footer>    
        </section>
    );
};

export default DetailsPage;