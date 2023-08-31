import React from "react";

import style from './ArticleCardList.module.scss';
import CardTitle from "../CardTitle";
import Tags from "../Tags";
import { Space } from "antd";
import ArticleDescrip from "../ArticleDescrip";
import AuthorInfo from "../AuthorInfo";
import ArticleFullText from "../ArticleFullText";

export default function ArticleCardList(props: any) {
  const full = true;

  return (
    <div className={full ? style.ArticleCardFull : style.ArticleCardList}>

      <div className={style.ArticleHeader}>

        <Space size={4} align="start" direction="vertical">

          <CardTitle />
          <Tags />
          <ArticleDescrip />

        </Space>
        <AuthorInfo />
      </div>
      {full? <ArticleFullText />: null}

    </div>
  )
}