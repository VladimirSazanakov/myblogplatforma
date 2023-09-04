import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

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
import { useSelector } from 'react-redux';
import ArticleFullPage from '../Pages/ArticleFull';
import SignInPage from '../Pages/SignIn';
import SignUpPage from '../Pages/SignUp';

function App() {

  // const { data = [], isError, isLoading } = useGetArticlesQuery(undefined);
  // const state = useSelector(state => state);

  // const [articles, setArticles] = useState({});
  // const apiBlog = new ApiBlog;

  // useEffect(()=>{
  //   const response = apiBlog.getArticles();
  //   response.then((el:any)=>{
  //     console.log(el);
  //   })
  // },[])
  // console.log(state);
  // console.log(data);

  return (
    <div className={classes.App}>
      <Header />
      {/* {isLoading ? 'Loading...' : null} */}
      {/* {isError ? 'Error..' : null} */}
      {/* <ArticleCardList /> */}
      {/* <ArticleListPage /> */}

      <main className={classes['app-main']}>
        <Routes >
          <Route path='/' element={<ArticleListPage />} />
          <Route path='/articles' element={<ArticleListPage />} />
          <Route path='/article/:slug' element={<ArticleFullPage />} />
          <Route path='/sign-in' element={<SignInPage />} />
          <Route path='/sign-up' element={<SignUpPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
