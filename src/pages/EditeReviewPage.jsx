import React from 'react';

const EditReview = ({storedReview}) => {

    return (
        <section className='lg:w-8/12 mx-auto my-32'>
          <h1 className='text-3xl font-semibold mt-14'>Update your Review here</h1>    
          <form className="my-10">
            <div className="form-control">
              <textarea defaultValue={storedReview.comment} name='textarea' rows="7" placeholder="Enter Your Review here" className="textarea textarea-bordered lg:w-4/12 md:w-3/6"></textarea>
            </div>
            <button type="submit" className='btn my-4'>Update Review</button>
          </form>
        </section>
    )
}

export default EditReview;