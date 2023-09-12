import React from 'react';
import { useUpdateArticleMutation } from '../../Api/RtkQuery';
import { useAppSelector } from '../../hooks/reducer';
import { useParams } from 'react-router-dom';
import { useGetArticleQuery } from '../../Api/RtkQuery';
import CreateNewArticleForm from '../../NewArticleFormTest';

import classes from './EditArticlePage.module.scss';

export default function EditArticlePage() {
  const { slug } = useParams();
  const state = useAppSelector(state => state.user);
  const token = state.token;
  const { data, isError, isLoading } = useGetArticleQuery({ slug, token });
  const [fetchUpdateArticle] = useUpdateArticleMutation();

  return (
    <div className={classes.SignUpPage}>
      {data ? <CreateNewArticleForm mode='edit' article={data.article} fetchFunc={fetchUpdateArticle} slug={slug} /> : null}
    </div>
  );
}
