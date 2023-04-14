import { Feature, Footer, Loading, Preview, Search, Title } from './components';
import { useAppSelector } from './app/hooks';
import { useState } from 'react';
import { Record } from './types/types';

function App() {
  const isLoading = useAppSelector((state) => state.searchResult.loading);
  const [tempResults, setTempResults] = useState<Record[]>([]);

  return (
    <>
      <div id='app' onClick={() => setTempResults([])}>
        <Title />
        <Search tempResults={tempResults} setTempResults={setTempResults} />
        <Preview />
        <Footer />
        {isLoading && <Loading />}
      </div>
      <Feature />
    </>
  );
}

export default App;
