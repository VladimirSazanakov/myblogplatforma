import React from 'react';
import { Space } from 'antd';

import CardTitle from '../CardTitle';
import Tags from '../Tags';
import ArticleDescrip from '../ArticleDescrip';
import AuthorInfo from '../AuthorInfo';
import ArticleFullText from '../ArticleFullText';
import { article } from '../../types/types';

import style from './ArticleCardList.module.scss';

export default function ArticleCardList(props: any) {
  const full = props.full;
  const article = props.article;

  // console.log(article);

  const title = article.title;
  const tags = article.tagList;
  const description = article.description;
  const author = article.author;
  const slug = article.slug;
  const text = article.body;
  const createdDate = article.createdAt;
  const likesCount = article.favoritesCount;

  return (
    <div className={full ? style.ArticleCardFull : style.ArticleCardList}>
      <div className={style.ArticleHeader}>
        <Space size={4} align="start" direction="vertical">
          <CardTitle title={title} slug={slug} likes={likesCount} />
          <Tags tags={tags} />
          <ArticleDescrip description={description} />
        </Space>
        <AuthorInfo author={author} date={createdDate} />
      </div>
      {full ? <ArticleFullText text={text} /> : null}
    </div>
  );
}
