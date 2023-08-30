import React from "react";

import style from './Header.module.scss';
import LogIn from "../LogIn";

export default function Header (props: any){
  const appTitle = "Realworl Blog";

  return(
    <div className={style.Header}>
      <span className={style.title}>{appTitle}</span>
      <LogIn />
    </div>
  )
}