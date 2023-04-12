import Searchable from './Searchable';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setFeaturedResult } from '../app/featuredResultSlice';

const Feature = () => {
  const featuredResult = useAppSelector((state) => state.featuredResult.record);
  const dispatch = useAppDispatch();

  return (
    <div id='feature' className={featuredResult ? 'active' : ''}>
      {featuredResult && (
        <div className='object-feature'>
          <header>
            <h1>{featuredResult.title}</h1>
            <h2>{featuredResult.dated}</h2>
          </header>
          <section className='photos'>
            {featuredResult.images &&
              featuredResult.images!.map((image, index) => (
                <img
                  src={image.baseimageurl}
                  alt={image.copyright}
                  key={index}
                />
              ))}
          </section>
          <section className='facts'>
            <span className='title'>Culture</span>
            <Searchable
              searchTerm='culture'
              searchValue={featuredResult.culture}
            />
            <span className='title'>Medium</span>
            <Searchable
              searchTerm='medium'
              searchValue={featuredResult.medium}
            />
            <span className='title'>Dimensions</span>
            <span className='content'>{featuredResult.dimensions}</span>
            <span className='title'>Person</span>
            {featuredResult.people &&
              featuredResult.people!.map((person, index) => (
                <Searchable
                  key={index}
                  searchTerm='person'
                  searchValue={person.displayname}
                />
              ))}
            <span className='title'>Department</span>
            <span className='content'>{featuredResult.department}</span>
            <span className='title'>Division</span>
            <span className='content'>{featuredResult.division}</span>
            <span className='title'>Contact</span>
            <span className='content'>
              <a href={`mailto:${featuredResult.contact}`} target='_blank'>
                {featuredResult.contact}
              </a>
            </span>
            <span className='title'>Credit</span>
            <span className='content'>{featuredResult.creditline}</span>
          </section>
          <button onClick={() => dispatch(setFeaturedResult(null))}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Feature;
