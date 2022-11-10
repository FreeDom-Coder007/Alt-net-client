import React from 'react';
import { useState } from 'react';

const EditReview = ({storedReview}) => {
    const StoredReview = storedReview.comment
 
    const [review, setReview] = useState(StoredReview)

    const handleUpdateReview = (event) => {
       event.preventDefault()

       fetch(`https://alt-net-provider-server.vercel.app/reviews/${storedReview._id}`,{
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(review)
       })
    }

    const handleTextChange = (event) => {
      const value = event.target.value
      const inputName = event.target.name
      const newReview = {...StoredReview}
      newReview[inputName] = value
      setReview(newReview)
      console.log(newReview)
  }

    return (
        <section>
          <h1 className='text-3xl font-semibold mt-14'>Update your Review here</h1>    
          <form onSubmit={handleUpdateReview} className="my-10">
            <div className="form-control">
              <textarea onChange={handleTextChange} defaultValue={storedReview.comment} name='textarea' rows="7" placeholder="Enter Your Review here" className="textarea text-2xl textarea-bordered lg:w-8/12 md:w-3/6"></textarea>
            </div>
            <button type="submit" className='btn my-4'>Update Review</button>
          </form>
        </section>
    )
}

export default EditReview;