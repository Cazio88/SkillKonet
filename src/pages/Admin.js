import React from 'react';
import InternPositionList from './InternshipPositionList';
import LeftSideBar from '../components/Layout/LeftSideBar';

const Admin = () => {
  // Sample data for intern positions
  const internPositions = [
    { id: 1, title: 'Software Developer Intern' },
    { id: 2, title: 'Marketing Intern' },
    // Add more positions here
  ];

  return (
    <div className="admin-page">
      <LeftSideBar />
      <InternPositionList positions={internPositions} />
    </div>
  );
};

export default Admin;
