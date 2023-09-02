import React from 'react';

import style from './Header.module.scss';
import LogIn from '../LogIn';
import { Link } from 'react-router-dom';

export default function Header(props: any) {
  const appTitle = 'Realworl Blog';

  return (
    <div className={style.Header}>
      <Link to="/articles" className={style.title}>{appTitle}</Link>
      <LogIn />
    </div>
  );
}
