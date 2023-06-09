import { Dispatch, SetStateAction } from 'react';

export type SearchResults = {
  info: Info;
  records: Record[];
};

export type Info = {
  next?: string;
  prev?: string;
  totalrecordsperquery?: number;
  totalrecords?: number;
};

export type Record = {
  century: string;
  contact: string;
  culture: string;
  creditline: string;
  dated: string;
  department: string;
  description: string;
  dimensions: string;
  division: string;
  images?: Image[];
  medium: string;
  people?: { displayname: string }[];
  primaryimageurl?: string;
  title: string;
};

export type Image = {
  baseimageurl: string;
  copyright: string;
};

export type Option = {
  id: number;
  name: string;
};

export type fetchQueryResultsArgs = {
  century: string;
  classification: string;
  queryString: string;
  culture: string;
};

export type FetchQueryResultsFromTermAndValueArgs = {
  term: string;
  value: string;
};

export type SearchableProps = {
  searchTerm: string;
  searchValue: string;
};

export type SelectProps = {
  name: string;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  categoryList: Option[];
};

export type SearchProps = {
  isSearching: boolean;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
  isFiltersOpen: boolean;
  setIsFiltersOpen: Dispatch<SetStateAction<boolean>>;
};
