import React from 'react';

import style from './ArticleDescrip.module.scss';

interface descriptionProps {
  description: string;
}

export default function ArticleCardText(props: descriptionProps) {
  const textValue = props.description;

  return <span className={style.ArticleCardText}>{textValue}</span>;
}
