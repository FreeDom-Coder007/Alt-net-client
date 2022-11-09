import React from 'react';

const ReviewPage = () => {

    const handleSubmit = (event) => {
        event.preventDefault()

        const name = event.target.name.value
        const photoURL = event.target.photoURL.value
        const date = event.target.date.value
        const comment = event.target.textarea.value
        const review = {name, photoURL, date, comment,}
        console.log(review) 
        
        fetch('http://localhost:5000/reviews',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }

    return (
        <section className='w-10/12 mx-auto'>
          <h1 className='text-3xl font-semibold mt-14'>Enter your Review here</h1>    
          <form onSubmit={handleSubmit} className="my-10">
            <div className="form-control my-4">
              <input name='name' type="text" placeholder="Enter Name" className="input input-bordered w-full max-w-sm" />
            </div>
            <div className="form-control my-4">
              <input name='photoURL' type="text" placeholder="Enter photoURL" className="input input-bordered w-full max-w-sm" />
            </div>
            <div className="form-control my-4">
              <input name='date' type="date" placeholder="Enter Date" className="input input-bordered w-full max-w-sm" />
            </div>
            <div className="form-control">
              <textarea name='textarea' rows="10" placeholder="Enter Your Review here" className="textarea textarea-bordered w-2/5"></textarea>
            </div>
            <button type="submit" className='btn my-4'>Post Review</button>
          </form>
        </section>
    )
}

export default ReviewPage;