import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Package from '../components/Package/Package';

const Packages = () => {
    const [packages, setPackages] = useState([])
    
    useEffect(() => {
      fetch('http://localhost:5000/all-packages')
      .then(res => res.json())
      .then(data => setPackages(data))
    },[])

    return (
         <div>
            <Header></Header>
            <section className='bg-gradient-to-r from-sky-900 to-cyan-700 lg:px-11 lg:pt-11 lg:pb-28 my-20'>
              <h1 className='text-6xl text-center text-white font-mono font-bold mb-12'>Chose Your Package</h1> 
              <div className='grid justify-items-center lg:grid-cols-3 md:grid-cols-1 lg:gap-x-8 gap-y-10'>
               {
                packages.map(pack => <Package key={pack._id} Pack={pack}/>)
               }
              </div>
              <div className='text-center'><Link to='/packages'><button className="btn btn-success mt-10 px-28">See All Plans</button></Link></div>
            </section>
            <Footer></Footer>
         </div>
    )
}

export default Packages;