import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import style from './ArticleFullText.module.scss';

interface cardTextProps {
  text: string;
}

export default function ArticleCardText(props: cardTextProps) {
  const textValue = props.text;

  return (
    <div className={style.ArticleFullText}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{textValue}</ReactMarkdown>
    </div>
  );
}
