import React, { useState } from "react";

import style from './ArticleDescrip.module.scss';

export default function ArticleCardText(props: any) {
  const textValue = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. '

   return (
    <span className={style.ArticleCardText}>
      {textValue}
    </span>
  )
}