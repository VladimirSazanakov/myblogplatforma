import React from 'react';
import { useParams } from 'react-router-dom';

import ArticleCardList from '../../ArticleCardList';
import { useGetArticleQuery } from '../../Api/RtkQuery';
import { useAppSelector } from '../../hooks/reducer';

import classes from './ArticleFullPage.module.scss';

export default function ArticleFullPage() {
  const state = useAppSelector((state) => state.user);
  const token = state.token;
  const { slug } = useParams();
  const { data } = useGetArticleQuery({ slug, token });

  return (
    <div className={classes.ArticleFullPage}>
      {data ? <ArticleCardList article={data.article} full /> : null}
    </div>
  );
}
