import React from 'react';
import bannerImage from '../../Assets/Images/Screenshot_1-removebg-preview.png'
import './Home.css';
import { FcWorkflow, FcAssistant } from "react-icons/fc";
import speedMeter from '../../Assets/Images/Speed-Meter.svg';
import Amazone from '../../Assets/Badges/amazon-2-logo-svgrepo-com.svg';
import Google from '../../Assets/Badges/google-icon-logo-svgrepo-com.svg';
import Oracle from '../../Assets/Badges/oracle-svgrepo-com.svg';
import Uber from '../../Assets/Badges/uber-svgrepo-com.svg';
import infoImage from '../../Assets/Images/info image.jpg';
import { useState } from 'react';
import { useEffect } from 'react';
import Package from '../Package/Package';
import { Link } from 'react-router-dom';


const Home = () => {
    const [packages, setPackages] = useState([])
    
    useEffect(() => {
      fetch('http://localhost:5000/packages')
      .then(res => res.json())
      .then(data => setPackages(data))
    },[])
    console.log(packages)

    return (
        <div className='banner w-10/12 mx-auto'>
            <section className='flex justify-between mb-8'>
              <div className="banner-info">
               <h1 className='text-6xl text-zinc-300 font-extrabold mt-28 mb-8'>Number 1 <br/> High Speed <br/> BroadBrand Provider</h1>
               <button type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-full px-24 py-3 text-center mr-2 mb-2">Subscribe</button> 
              </div>
              <div className="banner-image">
                <img src={bannerImage} alt=""/>
              </div>
            </section>
            {/*--------------- USP Section ------------------------*/}
            <section className='usp-section flex lg:justify-between'>
               <div className="bg-white px-11 py-8 shadow-xl">
                 <div className='flex justify-center'><img className='w-16' src={speedMeter} alt=""/></div>
                 <h1 className='font-extrabold text-2xl my-5 drop-shadow-lg'>Hight Speed Internet</h1>
                 <p className='font-semibold'>
                   Increase internet Speed<br/>
                   temporary br according to your wish
                 </p>
               </div> 
               <div className="bg-white px-11 py-8 shadow-xl">
                 <div className='flex justify-center'><FcWorkflow className='text-7xl'/></div>
                 <h1 className='font-extrabold text-2xl my-5 drop-shadow-lg'>FutureStick Technology</h1>
                 <p className='font-semibold'>
                   Better Technological<br/>
                   infrustracture  helps you to emarsive<br/>
                   internet experience 
                 </p>
               </div> 
               <div className="bg-white px-11 py-8 shadow-xl">
                <div className='flex justify-center'><FcAssistant className='text-7xl'/></div>
                <h1 className='font-extrabold text-2xl my-5 drop-shadow-lg'>24/7 Customer Support</h1>
                <p className='font-semibold'>
                   We have Specialized Enegenner team<br/> 
                   to Support our Customer for<br/>
                   for alltime to helps you 
                </p>
               </div> 
            </section>
            {/*-------- Packages --------*/}
            <section className='bg-gradient-to-r from-sky-900 to-cyan-700 lg:px-11 lg:pt-11 lg:pb-28 my-20'>
               <h1 className='text-6xl text-center text-white font-mono font-bold mb-12'>Chose Your Package</h1> 
               <div className='flex lg:justify-between lg:gap-x-8'>
                 {
                   packages.map(pack => <Package key={pack._id} Pack={pack}/>)
                 }
               </div>
               <div className='text-center'><Link to='/packages'><button className="btn btn-success mt-10 px-28">See All Plans</button></Link></div>
            </section>
            <section className='trust-section my-24'>
                <h1 className='text-center text-7xl font-extrabold mb-10'>Trusted By</h1>
                <div className="badges-container flex lg:justify-around">
                    <img className='w-40' src={Amazone} alt="" />
                    <img className='w-28' src={Google} alt="" />
                    <img className='w-40' src={Oracle} alt="" />
                    <img className='w-28' src={Uber} alt="" />
                </div>
            </section>
            <section className='another-usp-section mt-20 mb-5 flex justify-between'>
                <div className='image'>
                    <img src={infoImage} alt=""/>
                </div>
                <div className="info">
                   <h1 className='text-6xl text-black font-extrabold mb-8 ml-10'>
                     Get More Then Just<br/> 
                     Faster Internet Speed
                   </h1>
                   <p className='ml-10 font-semibold'>
                     We Want to Access The internet event before <br/> 
                     5g came
                   </p> 
                </div>
            </section> 
        </div>
    )
}

export default Home;