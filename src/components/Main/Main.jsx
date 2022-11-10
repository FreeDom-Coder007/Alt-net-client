import React from 'react';
import { Outlet } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Main.css'



const Main = () => {
    useTitle('Home')

    return (
        <div className='main'>
          <Header/>
          <Outlet/>
          <Footer/>
        </div>
    );
};

export default Main;