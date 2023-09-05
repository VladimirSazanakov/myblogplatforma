import React from 'react';
import { Link } from 'react-router-dom';

import LogIn from '../LogIn';

import style from './Header.module.scss';

export default function Header(props: any) {
  const appTitle = 'Realworl Blog';

  return (
    <div className={style.Header}>
      <Link to="/articles" className={style.title}>
        {appTitle}
      </Link>
      <LogIn />
    </div>
  );
}
