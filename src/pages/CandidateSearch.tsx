import { type FormEvent, useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    name: 'This is the initalized name',
    username: 'This is the initalized username',
    location: 'This is the initalized location',
    bio:'This is initialized bio',
    avatar_url: 'This is the avatar picture',
    email: 'This is the email',
    html_url: 'This is the url',
    company: 'This is the company',
  });

  const searchGithubCandidates = async () => {
    const data: Candidate = await searchGithub();
    setCurrentCandidate(data);
  }

  // const searchForCandidateByUsername = async (event: FormEvent, username: string) => {
  //   event.preventDefault();
  //   const data: Candidate = await searchGithubUser(username);

  //   setCurrentCandidate(data);
  // };

  return (
  <>
  <h1>CandidateSearch</h1>
  <div className="candidate-card">
    <img src={currentCandidate.avatar_url || ''}></img>
    <div className="candidate-info">
      <h2>{`${currentCandidate.name} (${currentCandidate.username})`}</h2>
      <p>Location: {currentCandidate.location}</p>
      <p>Company: {currentCandidate.company}</p>
      <p>Email: <a href={`mailto:${currentCandidate.email}`}>{currentCandidate.email}</a></p>
      <p>Bio: {currentCandidate.bio}</p>
    </div>
  </div>
  </>
)};

export default CandidateSearch;
