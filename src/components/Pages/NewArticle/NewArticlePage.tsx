import React from 'react';
import { useCreateArticleMutation } from '../../Api/RtkQuery';
import classes from './NewArticlePage.module.scss';
import CreateNewArticleForm from '../../NewArticleFormTest';

export default function NewArticlePage() {
  const newArticle = {
    title: '',
    body: '',
    description: '',
    tagList: [],
  }
  const [fetchCreateArticle] = useCreateArticleMutation();

  return (
    <div className={classes.SignUpPage}>
      <CreateNewArticleForm mode='create' article={newArticle} fetchFunc={fetchCreateArticle} />
    </div>
  );
}
