import React from 'react';
import NavBar from '../components/Layout/NavBar';
import Footer from '../components/Layout/Footer';
import InternshipCard from './internshipCard';
import CustomerReviews from './CustomerReviews';

const HomePage = () => {
  const internships = [
    {
      title: 'Software Developer Intern',
      company: 'TechCo',
      location: 'San Francisco, CA',
      description: 'Join our team as a software developer intern and work on exciting projects.',
      imageUrl: 'images/5.jpg', // Replace with actual image URL
    },
    {
      title: 'Marketing Intern',
      company: 'MarketingPro',
      location: 'New York, NY',
      description: 'Learn about marketing strategies and campaigns in a fast-paced environment.',
      imageUrl: 'images/2.png', // Replace with actual image URL
    },

    {
      title: 'Marketing Intern',
      company: 'MarketingPro',
      location: 'New York, NY',
      description: 'Learn about marketing strategies and campaigns in a fast-paced environment.',
      imageUrl: 'images/3.png', // Replace with actual image URL
    },
  ];
  return (
    <>
      <NavBar />
      <div className="hero">
        <div className="container">
          
          <div className="hero-image-container">
          <img
              src="images/home.jpg"
              alt="Welcome to Your Internship Hub" // Provide a concise and descriptive alt text
              className="hero-image"
            />
            <div className="gradient-overlay"></div>
            
            <div className="hero-text">
              <h2>Welcome to SkillKonet</h2>
              <p>Find exciting internship opportunities at top companies</p>
              <button className="btn">Explore Internships</button>
            </div>
          </div>
          <div className="internship-cards">
            {internships.map((internship, index) => (
              <InternshipCard
                key={index}
                title={internship.title}
                company={internship.company}
                location={internship.location}
                description={internship.description}
                imageUrl={internship.imageUrl}
              />
            ))}
          </div>
          
        </div>
        <div className="App">
      <h1>Customer Reviews</h1>
      <div>
          <CustomerReviews/>
      </div>
    </div>
      </div>
   
      <Footer />
    </>
  );
}

export default HomePage;
