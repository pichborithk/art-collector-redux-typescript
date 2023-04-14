import { Feature, Footer, Loading, Preview, Search, Title } from './components';
import { useAppSelector } from './app/hooks';
import { useState } from 'react';
import { Record } from './types/types';

function App() {
  const isLoading = useAppSelector((state) => state.searchResult.loading);

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <>
      <div
        id='app'
        onClick={() => {
          setIsFiltersOpen(false);
          setIsSearching(false);
        }}
      >
        <Title />
        <Search
          isSearching={isSearching}
          setIsSearching={setIsSearching}
          isFiltersOpen={isFiltersOpen}
          setIsFiltersOpen={setIsFiltersOpen}
        />
        <Preview />
        <Footer />
        {isLoading && <Loading />}
      </div>
      <Feature />
    </>
  );
}

export default App;
