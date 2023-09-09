import React, { useEffect, useState } from 'react';
import { Avatar } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/reducer';
import { useGetUserQuery } from '../Api/RtkQuery';
import { LOG_OUT, SET_LOGIN, SET_TOKEN } from '../../ReduxToolkit/reducers/user';

import avatarImgDefault from '../../img/userIcon.png';

import style from './LogIn.module.scss';

export default function (props: any) {

  const state = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const logined = state.isLogin;
  const token = state.token;
  const { data, isError, isLoading } = useGetUserQuery(token);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(SET_LOGIN(true));
      dispatch(SET_TOKEN(localStorage.getItem('token')));
    }
  }, []),

    useEffect(() => {
      console.log('request data from server', data);
      // data ? avatarImg = data?.user.image : null;
    }, [data])


  // const [logined, setLogined] = useState(false);
  const loginInfo = {};
  // const user = 'John Dear';
  const user = data ? data.user.username : ' ';

  // const avatarImg = data ? data.user.img ? data.user.img : avatarImgDefault : avatarImgDefault;

  let avatarImg = data?.user.image || avatarImgDefault;

  console.log(avatarImg);

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
    console.log(state);
    dispatch(LOG_OUT());
    localStorage.clear();
    // dispatch(SET_LOGIN(false));
    // dispatch(SET_TOKEN(''));
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
          <Link
            className={style.proxyLink}
            to='/profile'>
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
      {/* <button onClick={() => AuthClick()} >Retit send token</button> */}
    </div>
  );
}
