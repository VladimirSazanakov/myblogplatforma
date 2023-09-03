import React, { useEffect, useState } from 'react';
// import { Alert, Pagination } from 'antd';

// import { } from '../asyncActions/asyncActions';
// import { useAppDispatch, useAppSelector } from '../../hooks/redux';
// import ErrorIndicator from '../ErrorIndicator';
// import LoadIndicator from '../LoadIndicator';

import { article } from '../../../types/types';

import classes from './ArticleListPage.module.scss';
import ArticleCardList from '../../ArticleCardList';
import ApiBlog from '../../../service/ApiBlog';
import { useGetArticlesQuery } from '../../Api/RtkQuery';
import { Pagination, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import useSelection from 'antd/es/table/hooks/useSelection';
import { articleList } from '../../../ReduxToolkit/reducers/articleList';
import { useAppSelector } from '../../hooks/reducer';



export default function ArticleListPage() {

  // const [articles, setArticles] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);
  // const [offset, setOffset] = useState(0);

  const limit = 5;
  const apiBlog = new ApiBlog;

  const dispatch = useDispatch();

  const state = useAppSelector((state) => state);

  const currentPage = state.articleList.currentPage;
  const totalPages = state.articleList.totalPages;
  const offset = state.articleList.offset;

  const { setCurrentPage, setTotalPages, setOffset } = articleList.actions;

  console.log(state);

  let keyValue = 0;

  // let list: any = [];

  const { data, isError, isLoading } = useGetArticlesQuery({ limit: limit, offset: offset });

  useEffect(() => {
    if (data) {
      const pages = Math.floor(data.articlesCount / limit) + 1;
      dispatch(setTotalPages(pages));
    };

    console.log(data);
  }, [data])

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

  const list = data && data.articles.map((el: any) => {
    console.log(el);
    keyValue++;
    if (el) return <ArticleCardList article={el} />
  })

  function onChangePagination(page: number) {
    const offset = (page - 1) * limit;
    dispatch(setCurrentPage(page));
    dispatch(setOffset(offset));
  }

  // useEffect(() => {
  //   list = articles.map((el: any) => {
  //     console.log(el);
  //     keyValue++;
  //     return <ArticleCardList article={el} />
  //   })
  // }, [articles])

  //console.log(list);

  return (
    <div className={classes.ArticleListPage}>
      <Space direction='vertical' size={26} align='center'>

        {list}
      </Space>
      <div className={classes.footer}>

        <Pagination
          current={currentPage}
          onChange={onChangePagination}
          total={totalPages * 10}
          showSizeChanger={false}
          hideOnSinglePage={true}
        />
      </div>
    </div>
  );
}

