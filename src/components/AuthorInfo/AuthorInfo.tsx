import React, { useState } from 'react';

import style from './AuthorInfo.module.scss';
import { Avatar, Space } from 'antd';

import avatarImg from '../../img/userIcon.png';
import { format } from 'date-fns';

export default function AuthorInfo(props: any) {

  const AuthorName = 'John Dear';
  const date = '03.05.2020';

  const avatar = <Avatar src={avatarImg} size={46} />;
  const authorNameComp = <span className={style.user_name}>{AuthorName}</span>;
  const dateComp = <span className={style.date}> {format(new Date(date), 'MMMM dd, yyyy')}</span>


  // const handleSignIn = () => {
  //   setLogined(true);
  //   console.log(logined);
  // };

  // const handleSignUp = () => {};

  // const handleLogOut = () => {
  //   setLogined(false);
  //   console.log(logined);
  // };

  // const handleCrateAticle = () => {};

  return (
    <div className={style.AuthorInfo}>
      <Space size={12} align='start'>
        <Space size={0} direction='vertical'>
        {authorNameComp}
        {dateComp}
        </Space>
        {avatar}
      </Space>
    </div>

  );
}
