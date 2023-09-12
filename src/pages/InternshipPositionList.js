import React from 'react';

const InternPositionList = ({ positions }) => {
  return (
    <div className="intern-position-list">
      <h2>Intern Positions</h2>
      <ul>
        {positions.map((position) => (
          <li key={position.id}>{position.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default InternPositionList;
