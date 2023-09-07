import React, { useEffect, useState } from 'react';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/reducer';
import { useGetUserQuery } from '../Api/RtkQuery';

import avatarImg from '../../img/userIcon.png';

import style from './LogIn.module.scss';

export default function (props: any) {

  const state = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const logined = state.isLogin;
  const token = state.token;
  const { data, isError, isLoading } = useGetUserQuery(token);

  useEffect(() => {
    console.log(data);
  }, [token]),

    useEffect(() => {
      console.log('request data from server', data);
    }, [data])


  // const [logined, setLogined] = useState(false);
  const loginInfo = {};
  const user = 'John Dear';

  const signIn = (
    <Link
      to="/sign-in"
      onClick={() => handleSignIn()}
      className={style.LogIn_items}
    >
      Sign In
    </Link>
  );
  const singUp = (
    <Link
      to="/sign-up"
      onClick={() => handleSignUp()}
      className={style.LogIn_items}
    >
      Sign Up
    </Link>
  );
  const logOut = (
    <a href="#" onClick={() => handleLogOut()} className={style.LogIn_logOut}>
      Log Out
    </a>
  );
  const avatar = <Avatar src={avatarImg} size={46} />;
  const userName = <span className={style.user_name}>{user}</span>;
  const createAticle = (
    <a
      href="#"
      onClick={() => handleCrateAticle()}
      className={style.createAticle}
    >
      Create aticle
    </a>
  );

  const handleSignIn = () => {
    // setLogined(true);
    console.log(logined);
  };

  const handleSignUp = () => { };

  const handleLogOut = () => {
    // setLogined(false);
    console.log(logined);
  };

  const handleCrateAticle = () => { };

  const AuthClick = () => {
    // const { data, isError, isLoading } = useGetUserQuery(token);
    console.log('repit send token');
    console.log(data);

  }

  return (
    <div className={style.LogIn}>
      {logined ? (
        <>
          {createAticle}
          {userName}
          {avatar}
          {logOut}
        </>
      ) : (
        <>
          {signIn}
          {singUp}

        </>
      )}
      <button onClick={() => AuthClick()} >Retit send token</button>
    </div>
  );
}
