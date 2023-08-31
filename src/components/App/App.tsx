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

function App() {
  // const [articles, setArticles] = useState({});
  // const apiBlog = new ApiBlog;

  // useEffect(()=>{
  //   const response = apiBlog.getArticles();
  //   response.then((el:any)=>{
  //     console.log(el);
  //   })
  // },[])
  
  return (
    <div className={classes.App}>
      <Header />
      {/* <ArticleCardList /> */}
      <ArticleListPage />

      <main className={classes['app-main']}>Hello blog Platforma</main>
    </div>
  );
}

export default App;
