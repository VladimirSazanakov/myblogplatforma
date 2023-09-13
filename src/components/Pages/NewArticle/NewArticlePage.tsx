import React from 'react';

import { useCreateArticleMutation } from '../../Api/RtkQuery';
import CreateNewArticleForm from '../../NewArticleFormTest';

import classes from './NewArticlePage.module.scss';

export default function NewArticlePage() {
  const newArticle = {
    title: '',
    body: '',
    description: '',
    tagList: [],
  };

  const [fetchCreateArticle] = useCreateArticleMutation();

  return (
    <div className={classes.SignUpPage}>
      <CreateNewArticleForm
        mode="create"
        article={newArticle}
        fetchFunc={fetchCreateArticle}
      />
    </div>
  );
}
