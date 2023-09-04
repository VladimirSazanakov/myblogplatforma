import React, { useState } from 'react';

import style from './LogIn.module.scss';
import { Avatar } from 'antd';

import avatarImg from '../../img/userIcon.png';
import { Link } from 'react-router-dom';

export default function (props: any) {
  const [logined, setLogined] = useState(false);
  const loginInfo = {};
  const user = 'John Dear';

  const signIn = (
    <Link to='/sign-in' onClick={() => handleSignIn()} className={style.LogIn_items}>
      Sign In
    </Link>
  );
  const singUp = (
    <Link to="/sign-up" onClick={() => handleSignUp()} className={style.LogIn_items}>
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
    setLogined(true);
    console.log(logined);
  };

  const handleSignUp = () => {};

  const handleLogOut = () => {
    setLogined(false);
    console.log(logined);
  };

  const handleCrateAticle = () => {};

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
    </div>
  );
}
