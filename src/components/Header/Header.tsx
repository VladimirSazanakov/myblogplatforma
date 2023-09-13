import React from 'react';
import { Link } from 'react-router-dom';

import LogIn from '../LogIn';
import { useAppDispatch } from '../hooks/reducer';
import { articleList } from '../../ReduxToolkit/reducers/articleList';

import style from './Header.module.scss';

export default function Header() {
  const appTitle = 'Realworl Blog';
  const dispatch = useAppDispatch();
  const { setCurrentPage, setOffset } = articleList.actions;

  const handleHeaderClick = () => {
    dispatch(setCurrentPage(1));
    dispatch(setOffset(0));
  };

  return (
    <div className={style.Header}>
      <Link
        to={'/articles'}
        onClick={handleHeaderClick}
        className={style.title}
      >
        {appTitle}
      </Link>
      <LogIn />
    </div>
  );
}
