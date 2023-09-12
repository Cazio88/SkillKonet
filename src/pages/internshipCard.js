import React from 'react';
import './InternshipCard.css'; // Import the CSS file

const InternshipCard = ({ title, company, location, description, imageUrl }) => {
  
  return (
    <div className="internship-card">
      <img src={imageUrl} alt={`${company} Internship`} className="card-image" />
      <h2>{title}</h2>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Location:</strong> {location}</p>
      <p>{description}</p>
      <button className="btn">Apply Now</button>
    </div>
  );
}

export default InternshipCard;
