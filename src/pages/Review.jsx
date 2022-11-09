import React from 'react';

const Review = ({Reviewer}) => {
    const {name,email,photoURL,comment,Date} = Reviewer

    return (     
        <article className='my-10 border px-2 py-2'>
          <div class="flex items-center mb-4 space-x-4">
           <img class="w-10 h-10 rounded-full" src={photoURL} title={email} alt=""/>
           <div class="space-y-1 font-medium">
            <p>{name}</p>
           </div>
          </div>
          <div>
            <p className='mb-2 text-lg'>Date: {Date}</p>
          </div>
          <p class="mb-2">{comment}</p>
        </article>
    )

}

export default Review;