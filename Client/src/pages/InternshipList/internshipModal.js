import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addInternship } from '../internshipSlice/internshipSlice';

function InternshipModal() { // Changed the function name to start with an uppercase letter
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddInternship = () => {
    // Create a new internship object
    const newInternship = {
      id: Math.random(), // You can use a better method to generate IDs
      title,
      description,
    };

    // Dispatch the action to add the internship
    dispatch(addInternship(newInternship));

    // Clear the form inputs
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleAddInternship}>Add Internship</button>
    </div>
  );
}

export default InternshipModal;
