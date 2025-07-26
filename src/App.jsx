import { useState, useEffect } from 'react';
import StarshipSearch from './components/StarshipSearch/StarshipSearch';
import StarshipList from './components/StarshipList/StarshipList';
import {index} from './services/starshipServices'
import './App.css'
const App = () => {
  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);
  const [prevSearchTerm, setPrevSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await index();
      setStarshipsData(data);
      setDisplayedStarships(data);
    };
    fetchData();
  }, []);

  const handleSearch = (term) => {
    const filtered = starshipsData.filter((s) =>
      s.name.toLowerCase().includes(term.toLowerCase())
    );
    setDisplayedStarships(filtered);
    setPrevSearchTerm(term);
  };

  const handleReset = () => {
    setDisplayedStarships(starshipsData);
    setPrevSearchTerm('');
  };

  return (
    <main>
      <StarshipSearch
        onSearch={handleSearch}
        onReset={handleReset}
        resultsCount={displayedStarships.length}
        prevSearchTerm={prevSearchTerm}
      />
      <StarshipList starships={displayedStarships} />
    </main>
  );
};

export default App;