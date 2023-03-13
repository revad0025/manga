import React from 'react';
import '../css/StarRating.css';

const StarRating = ({ grade }) => {
  const numberOfStars = Math.round(grade / 10 * 5);

  return (
    <div className="flex items-center stars-rating-con">
      <div>
        {[...Array(numberOfStars)].map((_, index) => (
          <span key={index} className='star-icon '/>
        ))}
      </div>
      
      <span className='text-sm text-white'>{grade}</span>
      
    </div>
  );
};

export default StarRating;
