import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import LogIn from '../LogIn';

import style from './Header.module.scss';
import { useAppDispatch, useAppSelector } from '../hooks/reducer';
import { articleList } from '../../ReduxToolkit/reducers/articleList';

export default function Header(props: any) {
  const appTitle = 'Realworl Blog';
  const state = useAppSelector(state => state.articleList);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setCurrentPage, setTotalPages, setOffset } = articleList.actions;

  const handleHeaderClick = () => {
    dispatch(setCurrentPage(1));
    dispatch(setOffset(0));
  }


  return (
    <div className={style.Header}>
      <Link to={'/articles'} onClick={handleHeaderClick} className={style.title}>
        {appTitle}
      </Link>
      <LogIn />
    </div>
  );
}
