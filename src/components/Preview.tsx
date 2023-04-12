import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchPage } from '../app/searchResultSlice';
import { setFeaturedResult } from '../app/featuredResultSlice';

const Preview = () => {
  const searchResult = useAppSelector((state) => state.searchResult.result);
  const dispatch = useAppDispatch();

  return (
    <main id='preview'>
      <nav className='pagination'>
        <button
          disabled={!searchResult.info.prev && true}
          className='previous'
          onClick={() => dispatch(fetchPage(searchResult.info.prev!))}
        >
          Previous
        </button>
        <button
          disabled={!searchResult.info.next && true}
          className='next'
          onClick={() => dispatch(fetchPage(searchResult.info.next!))}
        >
          Next
        </button>
      </nav>
      <section className='results'>
        {searchResult.records.map((record, index) => {
          return (
            <div
              key={index}
              className='object-preview'
              onClick={(event) => {
                event.preventDefault();
                dispatch(setFeaturedResult(record));
              }}
            >
              {record.primaryimageurl ? (
                <img src={record.primaryimageurl} alt={record.description} />
              ) : (
                <img
                  src='https://placehold.co/240x320'
                  alt={record.description}
                />
              )}
              {record.title ? <h3>{record.title}</h3> : <h3>MISSING INFO</h3>}
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Preview;
