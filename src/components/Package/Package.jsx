import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const Package = ({Pack}) => {
    const {NetSpeed,image,context,price,name,_id} = Pack 

    return (
        <div className="card w-96 bg-white shadow-xl">  
        <figure className="pt-6">
          <PhotoProvider>
            <PhotoView src={image}>
            <img src={image} alt="" className="w-14"/>
            </PhotoView>
          </PhotoProvider>
        </figure>
        <h1 className='text-center text-cyan-500 text-lg'>{name}</h1>
        <div className="card-body items-center text-center">
          <p className='text-center text-lg font-semibold'>{context}</p>
          <h2 className="card-title font-bold text-3xl">{NetSpeed}</h2>
          <p className='font-semibold my-5'>USD ${price}..<small>/Month</small> </p>
          <div className="card-actions">
          <Link to={`/detailspage/${_id}`}><button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-full px-10 py-3 text-center">See Details</button></Link>
          </div>
        </div>
        </div>
    )
}

export default Package;