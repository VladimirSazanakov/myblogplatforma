import React from 'react';
import { Avatar, Space } from 'antd';
import { format } from 'date-fns';

import { author } from '../../types/types';

import style from './AuthorInfo.module.scss';

interface TAuthorInfoProps {
  author: author;
  date: string;
}

export default function AuthorInfo(props: TAuthorInfoProps) {
  const AuthorInfo: author = props.author;
  const AuthorName = AuthorInfo.username;
  const date = props.date;
  const avatar = <Avatar src={AuthorInfo.image} size={46} />;
  const authorNameComp = <span className={style.user_name}>{AuthorName}</span>;
  const dateComp = (
    <span className={style.date}>
      {' '}
      {format(new Date(date), 'MMMM dd, yyyy')}
    </span>
  );

  return (
    <div className={style.AuthorInfo}>
      <Space size={12} align="start">
        <Space size={0} direction="vertical">
          {authorNameComp}
          {dateComp}
        </Space>
        {avatar}
      </Space>
    </div>
  );
}
