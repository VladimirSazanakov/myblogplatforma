import React, { useEffect, useState } from 'react';
// import { Alert, Pagination } from 'antd';

// import { } from '../asyncActions/asyncActions';
// import { useAppDispatch, useAppSelector } from '../../hooks/redux';
// import ErrorIndicator from '../ErrorIndicator';
// import LoadIndicator from '../LoadIndicator';
import { useParams } from 'react-router-dom';

import { article } from '../../../types/types';
import ArticleCardList from '../../ArticleCardList';
import ApiBlog from '../../../service/ApiBlog';
import { useGetArticleQuery } from '../../Api/RtkQuery';

import classes from './ArticleFullPage.module.scss';

export default function ArticleFullPage(props: any) {
  const { slug } = useParams();
  const { data, isError, isLoading } = useGetArticleQuery(slug);

  //const [article, setArticle] = useState();
  const apiBlog = new ApiBlog();
  // const article = data.article;
  const keyValue = 0;

  console.log(data);

  // let list: any = [];

  // useEffect(() => {
  //   const response = useGetArticleQuery(slug);
  //   response.then((el: any) => {
  //     //console.log(el);
  //     setArticles(el.articles)
  //   })
  // }, [])

  // const list = articles.map((el: any) => {
  //   console.log(el);
  //   keyValue++;
  //   if (el) return <ArticleCardList article={el} />

  // })

  // useEffect(() => {
  //   list = articles.map((el: any) => {
  //     console.log(el);
  //     keyValue++;
  //     return <ArticleCardList article={el} />
  //   })
  // }, [articles])

  //console.log(list);

  return (
    <div className={classes.ArticleFullPage}>
      {data ? <ArticleCardList article={data.article} full /> : null}
    </div>
  );
}
