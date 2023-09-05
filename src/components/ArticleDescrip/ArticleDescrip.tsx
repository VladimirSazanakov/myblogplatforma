import React, { useState } from 'react';

import style from './ArticleDescrip.module.scss';

export default function ArticleCardText(props: any) {
  const textValue = props.description;

  return <span className={style.ArticleCardText}>{textValue}</span>;
}
