import React, { useState } from 'react';

import style from './AuthorInfo.module.scss';
import { Avatar, Space } from 'antd';

import avatarImg from '../../img/userIcon.png';
import { format } from 'date-fns';
import { author } from '../../types/types';

export default function AuthorInfo(props: any) {

  const AuthorInfo: author = props.author;

  const AuthorName = AuthorInfo.username
  // const date = '03/05/2020';
  const date = props.date;

  const avatar = <Avatar src={AuthorInfo.image} size={46} />;
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
