import React from "react";

import style from './ArticleCardList.module.scss';
import CardTitle from "../CardTitle";
import Tags from "../Tags";
import { Space } from "antd";
import ArticleDescrip from "../ArticleDescrip";
import AuthorInfo from "../AuthorInfo";
import ArticleFullText from "../ArticleFullText";
import { article } from "../../types/types";

export default function ArticleCardList(props: any) {

  const full = props.full;
  const article = props.article;

  // console.log(article);

  const title = article.title;
  const tags = article.tagList;
  const description = article.description;
  const author = article.author;
  const slug = article.slug;

  return (
    <div className={full ? style.ArticleCardFull : style.ArticleCardList}>

      <div className={style.ArticleHeader}>

        <Space size={4} align="start" direction="vertical">

          <CardTitle title={title} slug={slug} />
          <Tags tags={tags} />
          <ArticleDescrip description={description} />

        </Space>
        <AuthorInfo author={author} />
      </div>
      {full ? <ArticleFullText /> : null}

    </div>
  )
}