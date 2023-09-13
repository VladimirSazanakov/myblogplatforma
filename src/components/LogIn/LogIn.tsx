import React, { useEffect } from 'react';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../hooks/reducer';
import { useGetUserQuery } from '../Api/RtkQuery';
import {
  LOG_OUT,
  SET_LOGIN,
  SET_TOKEN,
} from '../../ReduxToolkit/reducers/user';
import avatarImgDefault from '../../img/userIcon.png';

import style from './LogIn.module.scss';

export default function LogIn() {
  const state = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const logined = state.isLogin;
  const token = state.token;
  const { data } = useGetUserQuery(token);
  const user = data ? data.user.username : ' ';
  const avatarImg = data?.user.image || avatarImgDefault;
  const avatar = <Avatar src={avatarImg} size={46} />;
  const userName = <span className={style.user_name}>{user}</span>;

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(SET_LOGIN(true));
      dispatch(SET_TOKEN(localStorage.getItem('token')));
    }
  }, []);

  const signIn = (
    <Link to="/sign-in" replace={true} className={style.LogIn_items}>
      Sign In
    </Link>
  );
  const singUp = (
    <Link to="/sign-up" replace={true} className={style.LogIn_items}>
      Sign Up
    </Link>
  );
  const logOut = (
    <Link to="" onClick={() => handleLogOut()} className={style.LogIn_logOut}>
      Log Out
    </Link>
  );

  const createAticle = (
    <Link to="/new-article" replace={true} className={style.createAticle}>
      Create aticle
    </Link>
  );

  const handleLogOut = () => {
    dispatch(LOG_OUT());
    localStorage.clear();
  };

  return (
    <div className={style.LogIn}>
      {logined ? (
        <>
          {createAticle}
          <Link className={style.proxyLink} to="/profile">
            {userName}
            {avatar}
          </Link>
          {logOut}
        </>
      ) : (
        <>
          {signIn}
          {singUp}
        </>
      )}
    </div>
  );
}
