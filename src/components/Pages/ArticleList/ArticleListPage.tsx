import React, { useEffect, useState } from 'react';
import { Pagination, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import ApiBlog from '../../../service/ApiBlog';
import { useGetArticlesQuery } from '../../Api/RtkQuery';
import ArticleCardList from '../../ArticleCardList';
import { article } from '../../../types/types';
import { articleList } from '../../../ReduxToolkit/reducers/articleList';
import { useAppSelector } from '../../hooks/reducer';

import classes from './ArticleListPage.module.scss';

export default function ArticleListPage() {
  const limit = 5;
  const apiBlog = new ApiBlog();

  const dispatch = useDispatch();
  const state = useAppSelector((state) => state);
  const currentPage = state.articleList.currentPage;
  const totalPages = state.articleList.totalPages;
  const offset = state.articleList.offset;
  const token = state.user.token;
  const { setCurrentPage, setTotalPages, setOffset } = articleList.actions;

  let keyValue = 0;

  const { data, isError, isLoading } = useGetArticlesQuery({
    limit: limit,
    offset: offset,
    token: token,
  });

  useEffect(() => {
    if (data) {
      const pages = Math.floor(data.articlesCount / limit) + 1;
      dispatch(setTotalPages(pages));
    }
  }, [data]);

  const list =
    data &&
    data.articles.map((el: any) => {
      keyValue++;
      if (el) return <ArticleCardList key={keyValue} article={el} token={token} />;
    });

  function onChangePagination(page: number) {
    const offset = (page - 1) * limit;
    dispatch(setCurrentPage(page));
    dispatch(setOffset(offset));
  }

  return (
    <div className={classes.ArticleListPage}>
      <Space direction="vertical" size={26} align="center">
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
