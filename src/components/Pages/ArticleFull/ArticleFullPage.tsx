import React from 'react';
import { useParams } from 'react-router-dom';

import { article } from '../../../types/types';
import ArticleCardList from '../../ArticleCardList';
import { useGetArticleQuery } from '../../Api/RtkQuery';
import { useAppSelector } from '../../hooks/reducer';

import classes from './ArticleFullPage.module.scss';

export default function ArticleFullPage(props: any) {
  const state = useAppSelector((state) => state.user);
  const token = state.token;
  const { slug } = useParams();
  const { data, isError, isLoading } = useGetArticleQuery({ slug, token });

  return (
    <div className={classes.ArticleFullPage}>
      {data ? <ArticleCardList article={data.article} full /> : null}
    </div>
  );
}
