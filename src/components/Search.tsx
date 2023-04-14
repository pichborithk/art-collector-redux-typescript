import { FormEvent, useEffect, useState } from 'react';

import {
  fetchAllCenturies,
  fetchAllClassifications,
  fetchAllCultures,
  fetchQueryResults,
} from '../api';

import { Option, Record, SearchProps } from '../types/types';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchSearch } from '../app/searchResultSlice';
import { setFeaturedResult } from '../app/featuredResultSlice';
import Select from './Select';

const Search = ({
  isSearching,
  setIsSearching,
  isFiltersOpen,
  setIsFiltersOpen,
}: SearchProps) => {
  const searchInfo = useAppSelector((state) => state.searchResult.result.info);
  const dispatch = useAppDispatch();

  const [tempResults, setTempResults] = useState<Record[]>([]);
  const [queryString, setQueryString] = useState('');

  const [culture, setCulture] = useState('any');
  const [cultureList, setCultureList] = useState<Option[]>([]);

  const [century, setCentury] = useState('any');
  const [centuryList, setCenturyList] = useState<Option[]>([]);

  const [classification, setClassification] = useState('any');
  const [classificationList, setClassificationList] = useState<Option[]>([]);

  async function getData() {
    try {
      const newCultureList = await fetchAllCultures();
      const newClassificationList = await fetchAllClassifications();
      const newCenturyList = await fetchAllCenturies();
      setCultureList(newCultureList);
      setCenturyList(newCenturyList);
      setClassificationList(newClassificationList);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const searchObj = { century, classification, culture, queryString };
      dispatch(fetchSearch(searchObj));
    } catch (error) {
      console.error(error);
    }
  }

  async function getSuggestion() {
    if (!queryString) return setTempResults([]);

    try {
      const searchObj = { century, classification, culture, queryString };
      const result = await fetchQueryResults(searchObj);
      setTempResults(result.records);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getSuggestion();
  }, [queryString]);

  return (
    <form id='search' onSubmit={handleSubmit}>
      <div>
        <fieldset className='search-input'>
          <label htmlFor=''>
            <input
              id='keywords'
              type='text'
              placeholder='Enter Keywords...'
              value={queryString}
              onChange={(event) => {
                setIsSearching(true);
                setQueryString(event.target.value);
              }}
            />
            <i className='fa-solid fa-magnifying-glass'></i>
          </label>
          {tempResults.length > 0 && isSearching && (
            <ul>
              {tempResults.map((record, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setQueryString(record.title);
                    dispatch(setFeaturedResult(record));
                  }}
                >
                  {record.title}
                </li>
              ))}
            </ul>
          )}
        </fieldset>
      </div>
      <div>
        <p>
          Filters
          <i
            className={
              isFiltersOpen
                ? 'fa-solid fa-chevron-down active'
                : 'fa-solid fa-chevron-down'
            }
            onClick={(event) => {
              event.stopPropagation();
              setIsFiltersOpen(!isFiltersOpen);
            }}
          ></i>
        </p>
        <div
          className={isFiltersOpen ? 'filters active' : 'filters'}
          onClick={(event) => event.stopPropagation()}
        >
          <Select
            name='Century'
            category={century}
            setCategory={setCentury}
            categoryList={centuryList}
          />
          <Select
            name='Classification'
            category={classification}
            setCategory={setClassification}
            categoryList={classificationList}
          />
          <Select
            name='Culture'
            category={culture}
            setCategory={setCulture}
            categoryList={cultureList}
          />
        </div>
        {searchInfo.totalrecords && (
          <span>
            Showing {searchInfo.totalrecordsperquery} of{' '}
            {searchInfo.totalrecords} objects
          </span>
        )}
        <button>SEARCH</button>
      </div>
    </form>
  );
};

export default Search;
