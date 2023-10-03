import React, { useState } from 'react'; // Import useState hook
import './CustomerReview.css';

const reviews = [
  {
    id: 1,
    author: 'John Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'images/r.jpg', // Add the URL of the image for this review
  },
  {
    id: 2,
    author: 'Jane Smith',
    text: 'A wonderful experience! Highly recommended.',
    imageUrl: 'images/r.jpg', // Add the URL of the image for this review
  },
  {
    id: 3,
    author: 'Alice Johnson',
    text: 'The best service I have ever received.',
    imageUrl: 'images/r.jpg', // Add the URL of the image for this review
  },
];

const CustomerReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const handleNextClick = () => {
    // Increment the current review index
    setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
  };

  return (
    <div className="review-carousel">
      <div className="review-card">
        <img
          className="review-image"
          src={reviews[currentReview].imageUrl}
          alt={`Image for Review by ${reviews[currentReview].author}`}
        />
        <p className="review-text">{reviews[currentReview].text}</p>
        <p className="review-author">- {reviews[currentReview].author}</p>
        <button className="next-button" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;
