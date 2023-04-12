import { Feature, Loading, Preview, Search, Title } from './components';
import { useAppSelector } from './app/hooks';

function App() {
  const isLoading = useAppSelector((state) => state.searchResult.loading);

  return (
    <>
      <div id='app'>
        <Title />
        <Search />
        <Preview />
        {isLoading && <Loading />}
      </div>
      <Feature />
    </>
  );
}

export default App;
