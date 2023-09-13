export type tag = string;

export type tagList = tag[];

export interface author {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: tagList;
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: author;
}

export enum filterValue {
  filter_togle_all = 'FILTER_TOGLE_ALL',
  filter_togle_no_transfer = 'FILTER_TOGLE_NO_TRANSFER',
  filter_togle_1_transef = 'FILTER_TOGLE_1_TRANSFER',
  filter_togle_2_transef = 'FILTER_TOGLE_2_TRANSFER',
  filter_togle_3_transer = 'FILTER_TOGLE_3_TRANSFER',
}

export interface FilterState {
  all: boolean;
  peresadki: boolean[];
}

export interface Action {
  type: string;
  payload?: any;
}

export interface TfetchData {
  slug: string;
  token: string;
}

export interface TCardTitleProps {
  title: string;
  slug: string;
  favorited: boolean;
  favoritedCount: number;
}

export interface ArticleCardListProps {
  full?: boolean;
  article: article;
  token?: string;
}

export enum userActions {
  setLogin = 'SET_LOGIN',
  setError = 'SET_ERROR',
  setLoading = 'SET_LOADING',
  setUserName = 'SET_USER_NAME',
  setEmail = 'SET_EMAIL',
  setToken = 'SET_TOKEN',
  setBio = 'SET_BIO',
  setImage = 'SET_IMAGE',
  logOut = 'LOG_OUT',
}
