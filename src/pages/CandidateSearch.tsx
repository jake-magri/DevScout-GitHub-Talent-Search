import { type FormEvent, useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    name: '',
    username: '',
    location: '',
    avatar: '',
    email: '',
    html_url: '',
    company: '',
  });

  const searchGithubCandidates = () => {
    
  }

  const searchForCandidateByUsername = async (event: FormEvent, username: string) => {
    event.preventDefault();
    const data: Candidate = await searchGithubUser(username);

    setCurrentCandidate(data);
  };

  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;
