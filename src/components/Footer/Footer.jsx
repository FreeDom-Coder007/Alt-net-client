import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo/logo.png';

const Footer = () => {
    return (
        <footer className="footer p-10 header bg-gradient-to-r from-slate-800 to-black/70 text-base-content">
        <Link to='/'>
          <div className="w-28 flex items-center">
           <img className="w-full" src={logo} alt="" />
           <span className="text-white text-2xl font-semibold">AltNet</span>
          </div>
        </Link> 
        <div>
          <span className="footer-title text-white">Services</span> 
          <Link className="link link-hover text-white">Branding</Link> 
          <Link className="link link-hover text-white">Design</Link> 
          <Link className="link link-hover text-white">Marketing</Link> 
          <Link className="link link-hover text-white">Advertisement</Link>
        </div> 
        <div>
          <span className="footer-title text-white">Company</span> 
          <Link className="link link-hover text-white">About us</Link> 
          <Link className="link link-hover text-white">Contact</Link> 
          <Link className="link link-hover text-white">Jobs</Link> 
          <Link className="link link-hover text-white">Press kit</Link>
        </div> 
        <div>
          <span className="footer-title text-white">Legal</span> 
          <Link className="link link-hover text-white">Terms of use</Link> 
          <Link className="link link-hover text-white">Privacy policy</Link> 
          <Link className="link link-hover text-white">Cookie policy</Link>
        </div>
      </footer>
    );
};

export default Footer;