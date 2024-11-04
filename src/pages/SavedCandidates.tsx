import React, { useEffect, useState } from 'react';
import type Candidate from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]); // State to hold the array of candidates

  // Function to fetch candidates from local storage
  const fetchCandidatesFromLocalStorage = () => {
    const storedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setCandidates(storedCandidates); // Set the candidates state
  };

  // Fetch candidates when the component mounts
  useEffect(() => {
    fetchCandidatesFromLocalStorage();
  }, []);

  return (
    <>
      <h1>Potential Candidates</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={index}>
              <td>
                <img src={candidate.avatar_url||''} alt={`${candidate.name} avatar`} style={{ width: '50px', height: '50px' }} />
              </td>
              <td>{candidate.name}</td>
              <td>{candidate.location || 'N/A'}</td>
              <td>
                <a href={`mailto:${candidate.email}`}>{candidate.email}</a>
              </td>
              <td>{candidate.company || 'N/A'}</td>
              <td>{candidate.bio || 'N/A'}</td>
              <td>
                <button onClick={() => console.log(`Reject ${candidate.name}`)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SavedCandidates;
