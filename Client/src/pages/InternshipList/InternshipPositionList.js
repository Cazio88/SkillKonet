
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import internshipModal from '../InternshipList/internshipModal';

const InternshipPositionList = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const internships = useSelector((state) => state.internships);
  const internship = [
    {
      id: 1,
      title: 'Software Developer Intern',
      company: 'TechCo',
      location: 'San Francisco, CA',
      description: 'Join our team as a software developer intern and work on exciting projects.',
      imageUrl: 'images/5.jpg', // Replace with actual image URL
    },
    {
      id: 2,
      title: 'Marketing Intern',
      company: 'MarketingPro',
      location: 'New York, NY',
      description: 'Learn about marketing strategies and campaigns in a fast-paced environment.',
      imageUrl: 'images/2.png', // Replace with actual image URL
    },
    
  ];
  const handleAddNewPositionsClick = () => {
    setIsAddModalOpen(true);
  };

  return (
    <>
      <h1>Internship Positions</h1>
      <div className="internship-cards">
        {internship.map((internship) => (
          <div key={internship.id}>
            <internshipCard
              title={internship.title}
              company={internship.company}
              location={internship.location}
              description={internship.description}
              imageUrl={internship.imageUrl}
            />
            
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
      <button onClick={handleAddNewPositionsClick}>Add New Positions</button>
      {isAddModalOpen && <internshipModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />}
    </>
  );
};

export default InternshipPositionList;

