import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    name: '',
    username: '',
    location: '',
    bio: '',
    avatar_url: '',
    email: '',
    html_url: '',
    company: '',
  });

  const searchGithubCandidates = async () => {
    try {
      const users = await searchGithub();
      if (users.length === 0) {
        console.warn('No users found');
        return;
      }

      const randomUser = users[Math.floor(Math.random() * users.length)];
      const userData = await searchGithubUser(randomUser.login);

      setCurrentCandidate({
        name: userData.name || 'N/A',
        username: userData.login || 'N/A',
        location: userData.location || 'N/A',
        bio: userData.bio || 'N/A',
        avatar_url: userData.avatar_url || '',
        email: userData.email || 'N/A',
        html_url: userData.html_url || '',
        company: userData.company || 'N/A',
      });
    } catch (err) {
      console.error('An error occurred while fetching candidate data:', err);
    }
  };

  // Function to add the current candidate to local storage
  const addCandidateToLocalStorage = () => {
    // Only save candidate if username is not 'N/A'
    if (currentCandidate.username !== 'N/A') {
      const storedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      const updatedCandidates = [...storedCandidates, currentCandidate];
      localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
      console.log('Candidate saved:', currentCandidate);

      // Fetch the next candidate after adding
      searchGithubCandidates();
    } else {
      console.warn('Cannot save candidate with username:', currentCandidate.username);
    }
  };

  // Fetch candidate on page load
  useEffect(() => {
    searchGithubCandidates();
  }, []);

  return (
    <>
      <h1>CandidateSearch</h1>
      <div className="candidate-card">
        <img className='candidate-image'src={currentCandidate.avatar_url || ''} alt="Candidate Avatar" />
        <div className="candidate-info">
          <h2>{`${currentCandidate.name} (${currentCandidate.username})`}</h2>
          <p>Location: {currentCandidate.location}</p>
          <p>Company: {currentCandidate.company}</p>
          <p>Email: <a href={`mailto:${currentCandidate.email}`}>{currentCandidate.email}</a></p>
          <p>Bio: {currentCandidate.bio}</p>
        </div>
      </div>
      <div className="action-buttons">
        <button className="delete-button" onClick={searchGithubCandidates}>-</button>
        <button className="add-button" onClick={addCandidateToLocalStorage}>+</button>
      </div>
    </>
  );
};

export default CandidateSearch;
