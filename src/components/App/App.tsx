import React, { useEffect, useState } from 'react';
// import { Alert, Pagination } from 'antd';

// import { } from '../asyncActions/asyncActions';
// import { useAppDispatch, useAppSelector } from '../../hooks/redux';
// import ErrorIndicator from '../ErrorIndicator';
// import LoadIndicator from '../LoadIndicator';
// import { Ticket } from '../../types/types';

import classes from './App.module.scss';
import Header from '../Header/Header';
import ArticleCardList from '../ArticleCardList';
import ApiBlog from '../../service/ApiBlog';
import ArticleListPage from '../Pages/ArticleList';
import { useGetArticlesQuery } from '../Api/RtkQuery';

function App() {

  const { data = [], isError, isLoading } = useGetArticlesQuery();
  const state = useSelector(state => state);
  // const [articles, setArticles] = useState({});
  // const apiBlog = new ApiBlog;

  // useEffect(()=>{
  //   const response = apiBlog.getArticles();
  //   response.then((el:any)=>{
  //     console.log(el);
  //   })
  // },[])
  console.log(state);
  console.log(data);
  return (
    <div className={classes.App}>
      <Header />
      {isLoading ? 'Loading...' : null}
      {isError ? 'Error..' : null}
      {/* <ArticleCardList /> */}
      {/* <ArticleListPage /> */}

      <main className={classes['app-main']}>Hello blog Platforma</main>
    </div>
  );
}
import { useSelector } from 'react-redux';

export default App;
