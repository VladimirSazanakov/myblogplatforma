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

export default function ArticleListPage() {
  const [articles, setArticles] = useState([]);
  const apiBlog = new ApiBlog;
  let keyValue = 0;
  let list:any = <></>;

  useEffect(()=>{
    const response = apiBlog.getArticles();
    response.then((el: any)=>{
      console.log(el);
      setArticles(el.articles)
    })
  },[])

  useEffect(()=>{
list = articles.map((el:article)=>{
  console.log(el);
    keyValue ++;
    return <ArticleCardList key = {keyValue} article={el} />
  } )
},[articles])
console.log(list);
  
  return (
    <div className={classes.ArticleListPAge}>
      {list}
    </div>
  );
}

