import React, { useEffect, useState } from 'react';
// import { Alert, Pagination } from 'antd';

// import { } from '../asyncActions/asyncActions';
// import { useAppDispatch, useAppSelector } from '../../hooks/redux';
// import ErrorIndicator from '../ErrorIndicator';
// import LoadIndicator from '../LoadIndicator';

import { Pagination, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import useSelection from 'antd/es/table/hooks/useSelection';

import ApiBlog from '../../../service/ApiBlog';
import { useGetArticlesQuery, useUpdateArticleMutation } from '../../Api/RtkQuery';
import ArticleCardList from '../../ArticleCardList';
import { article } from '../../../types/types';
import { articleList } from '../../../ReduxToolkit/reducers/articleList';
import { useAppSelector } from '../../hooks/reducer';
import { useParams } from 'react-router-dom';
import { useGetArticleQuery } from '../../Api/RtkQuery';

import classes from './EditArticlePage.module.scss';

//test component;
import CreateNewArticleForm from '../../NewArticleFormTest';

export default function EditArticlePage() {

  const { slug } = useParams();
  const state = useAppSelector(state => state.user);
  const token = state.token;

  const { data, isError, isLoading } = useGetArticleQuery({ slug, token });
  const [fetchUpdateArticle] = useUpdateArticleMutation();

  console.log(slug);
  console.log(data);

  // const [articles, setArticles] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);
  // const [offset, setOffset] = useState(0);

  // const limit = 5;
  // const apiBlog = new ApiBlog;

  // const dispatch = useDispatch();

  // const state = useAppSelector((state) => state);

  // const currentPage = state.articleList.currentPage;
  // const totalPages = state.articleList.totalPages;
  // const offset = state.articleList.offset;

  // const { setCurrentPage, setTotalPages, setOffset } = articleList.actions;

  // console.log(state);

  // let keyValue = 0;

  // // let list: any = [];

  // const { data, isError, isLoading } = useGetArticlesQuery({ limit: limit, offset: offset });

  // useEffect(() => {
  //   if (data) {
  //     const pages = Math.floor(data.articlesCount / limit) + 1;
  //     dispatch(setTotalPages(pages));
  //   };

  //   console.log(data);
  // }, [data])

  // useEffect(() => {
  //   const response = apiBlog.getArticles();
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

  // const list = data && data.articles.map((el: any) => {
  //   console.log(el);
  //   keyValue++;
  //   if (el) return <ArticleCardList article={el} />
  // })

  // function onChangePagination(page: number) {
  //   const offset = (page - 1) * limit;
  //   dispatch(setCurrentPage(page));
  //   dispatch(setOffset(offset));
  // }

  // useEffect(() => {
  //   list = articles.map((el: any) => {
  //     console.log(el);
  //     keyValue++;
  //     return <ArticleCardList article={el} />
  //   })
  // }, [articles])

  //console.log(list);

  return (
    <div className={classes.SignUpPage}>
      {/* EditArticlePage */}
      {data ? <CreateNewArticleForm mode='edit' article={data.article} fetchFunc={fetchUpdateArticle} slug={slug} /> : null}
    </div>
  );
}
