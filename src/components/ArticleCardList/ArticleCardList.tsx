import React from 'react';
import { Space } from 'antd';

import CardTitle from '../CardTitle';
import Tags from '../Tags';
import ArticleDescrip from '../ArticleDescrip';
import AuthorInfo from '../AuthorInfo';
import ArticleFullText from '../ArticleFullText';
import ArticleButtons from '../ArticleButtons';
import { ArticleCardListProps } from '../../types/types';

import style from './ArticleCardList.module.scss';

export default function ArticleCardList(props: ArticleCardListProps) {
  const { full, article } = props;
  // const article = props.article;
  const { title, description, author, slug, favorited } = article;
  const tags = article.tagList;
  // const description = article.description;
  // const author = article.author;
  // const slug = article.slug;
  const text = article.body;
  const createdDate = article.createdAt;
  const likesCount = article.favoritesCount;
  // const favorited = article.favorited;

  const buttons = (slug: string) => {
    if (!full) {
      return null;
    } else {
      return <ArticleButtons slug={slug} />;
    }
  };

  return (
    <div className={full ? style.ArticleCardFull : style.ArticleCardList}>
      <div className={style.ArticleHeader}>
        <Space size={4} align="start" direction="vertical">
          <CardTitle
            title={title}
            slug={slug}
            favoritedCount={likesCount}
            favorited={favorited}
          />
          <Tags tags={tags} />
          <ArticleDescrip description={description} />
        </Space>
        <Space size={30} direction="vertical" align="end">
          <AuthorInfo author={author} date={createdDate} />
          {buttons(slug)}
        </Space>
      </div>
      {full ? <ArticleFullText text={text} /> : null}
    </div>
  );
}
