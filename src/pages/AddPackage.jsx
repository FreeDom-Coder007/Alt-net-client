import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPackage = () => {

    const handleAddPackage = (event) => {
        event.preventDefault()
        const form = event.target
        const price = form.price.value
        const name = form.name.value
        const NetSpeed = form.netSpeed.value
        const image = form.image.value
        const DetailsImage = form.DetailsImage.value
        const Description = form.description.value
        const Package = {price, name, NetSpeed, image, DetailsImage, Description}
        form.reset()

        fetch('http://localhost:5000/packages',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Package)
        })
        .then(res => res.json())
        .then(data =>console.log(data))

        handleToastMessage()
    }

    const handleToastMessage = () => {
       toast.success(<h1 className='text-2xl font-semibold'>Service Added Succesfully</h1>, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    }

    return (
        <div className='lg:w-8/12 mx-auto my-10'>
          <h1 className='text-center text-5xl font-bold mb-16'>Add a new package in Business</h1>  
          <form onSubmit={handleAddPackage}>
            <div className="form-control my-3">
               <label className="label"><span className="label-text font-semibold text-2xl">Package Name</span></label> 
               <input name='name' type="text" placeholder="Package Name" className="input input-bordered w-full"/>
            </div>
            <div className="form-control my-3">
               <label className="label"><span className="label-text font-semibold text-2xl">Package Image</span></label> 
               <input name='image' type="text" placeholder="Package Image" className="input input-bordered w-full"/>
            </div>
            <div className="form-control my-3">
               <label className="label"><span className="label-text font-semibold text-2xl">Details Image</span></label> 
               <input name='DetailsImage' type="text" placeholder="Package Image" className="input input-bordered w-full"/>
            </div>
            <div className="form-control my-3">
               <label className="label"><span className="label-text font-semibold text-2xl">Net Speed You Want to provide</span></label> 
               <input name='netSpeed' type="text" placeholder="Net Speed Mbps/Gbps" className="input input-bordered w-full"/>
            </div>
            <div className="form-control my-3">
               <label className="label"><span className="label-text font-semibold text-2xl">Price:$</span></label> 
               <input name='price' type="number" placeholder="Price" className="input input-bordered w-full"/>
            </div>
            <div className="form-control my-3">
               <label className="label"><span className="label-text font-semibold text-2xl">Description</span></label> 
               <input name='description' type="text" placeholder="Description" className="input input-bordered w-full"/>
            </div>
            <button type="submit" className='btn'>Add Package</button>
            <ToastContainer/>
          </form>
        </div>
    )
}

export default AddPackage;