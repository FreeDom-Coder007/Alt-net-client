import React from 'react';
// import { Link } from 'react-router-dom';

const Review = ({Reviewer}) => {
    const {name,image,review} = Reviewer

    return (     
        <article>
          <div class="flex items-center mb-4 space-x-4">
          <img class="w-10 h-10 rounded-full" src="" alt=""/>
          <div class="space-y-1 font-medium">
            <p>{name}</p>
          </div>
          </div>
          <footer class="mb-5 "><p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
          <p class="mb-2 font-light">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
          <p class="mb-3 font-light">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
        </article>
    )

}

export default Review;