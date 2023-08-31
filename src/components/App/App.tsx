import React, { useEffect } from 'react';
// import { Alert, Pagination } from 'antd';

// import { } from '../asyncActions/asyncActions';
// import { useAppDispatch, useAppSelector } from '../../hooks/redux';
// import ErrorIndicator from '../ErrorIndicator';
// import LoadIndicator from '../LoadIndicator';
// import { Ticket } from '../../types/types';

import classes from './App.module.scss';
import Header from '../Header/Header';
import ArticleCardList from '../ArticleCardList';

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <ArticleCardList />

      <main className={classes['app-main']}>Hello blog Platforma</main>
    </div>
  );
}

export default App;
