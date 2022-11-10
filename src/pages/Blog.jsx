import React from 'react';
import Header from '../components/Header/Header';
import useTitle from '../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')

    return (
        <section>
         <Header/>   
         <div className='lg:w-10/12 md:w-11/12 mx-auto mt-10 mb-20 border px-4 py-2'>
           <h1 className='text-5xl font-semibold'>Difference between SQL and NoSQL</h1>
           <p className='text-lg my-4 font-semibold'>
             SQL is primarily used to query and operate database systems,<br/>
             MySQL enables you to store, handle, delete, and modify data in an<br/>
             organized way.<br/>
             As for NoSQL, it is a non-relational database that does not use SQL.
           </p>
           <h1 className='text-5xl font-semibold'>What is JWT, and how does it work?</h1>
           <p className='text-lg my-4 font-semibold'>
             JSON Web Token (JWT) is an open standard (RFC 7519) that defines a<br/>
             compact and self-contained way for securely transmitting information<br/>
             between parties as a JSON object. This information can be verified and trusted<br/>
             because it is digitally signed
           </p>
           <h1 className='text-5xl font-semibold'>What is the difference between javascript and NodeJS?</h1>
           <p className='text-lg my-4 font-semibold'>
             JavaScript is a simple programming language that can be<br/>
             used with any browser that has the JavaScript Engine<br/>
             installed. Node. js, on the other hand, is an interpreter or<br/>
             execution environment for the JavaScript programming language
           </p>
           <h1 className='text-5xl font-semibold'>How does NodeJS handle multiple requests at the same time?</h1>
           <p className='text-lg my-4 font-semibold'>
             NodeJS receives multiple client requests and places them into EventQueue.<br/>
             NodeJS is built with the concept of event-driven architecture.<br/>
             NodeJS has its own EventLoop which is an infinite loop<br/>
             that receives requests and processes them
           </p>
         </div>
        </section>
    );
};

export default Blog;