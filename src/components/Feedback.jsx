import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import './Feedback.css'; // Import the CSS file
import { dummyFeedbackData } from './dummyData'; // Import the dummy feedback data

const Feedback = () => {
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);
  const currentFeedback = dummyFeedbackData[currentFeedbackIndex];

  const handlePrevFeedback = () => {
    setCurrentFeedbackIndex((prevIndex) =>
      prevIndex === 0 ? dummyFeedbackData.length - 1 : prevIndex - 1
    );
  };

  const handleNextFeedback = () => {
    setCurrentFeedbackIndex((prevIndex) =>
      prevIndex === dummyFeedbackData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='bhar_wala_dbba'>
      <h2>User Feedback and Reviews</h2>
      <div className="reviews-container">
        <div key={currentFeedback.id} className="review-box">
          <div className="profile">
            <FontAwesomeIcon icon={faUser} className="profile-icon" />
          </div>
          <div className="review-details">
            <div className="rating">
              {Array.from({ length: Math.floor(currentFeedback.rating) }, (_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className="star-icon" />
              ))}
              {currentFeedback.rating % 1 !== 0 && (
                <FontAwesomeIcon icon={faStarHalfAlt} className="star-icon" />
              )}
            </div>
            <div className="comment">{currentFeedback.review}</div>
            <div className="user-name">- {currentFeedback.name}</div>
          </div>
        </div>
      </div>
      <div className="slider-container">
        <button onClick={handlePrevFeedback}>Prev</button>
        <span>{currentFeedbackIndex + 1} / {dummyFeedbackData.length}</span>
        <button onClick={handleNextFeedback}>Next</button>
      </div>
    </div>
  );
};

export default Feedback;
