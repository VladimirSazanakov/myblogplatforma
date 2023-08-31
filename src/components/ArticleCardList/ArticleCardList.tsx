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
  const full = false;
  const title = props.title;
  const tags = props.tags;
  const descroption = props.description;
  const author = props.author;

  return (
    <div className={full ? style.ArticleCardFull : style.ArticleCardList}>

      <div className={style.ArticleHeader}>

        <Space size={4} align="start" direction="vertical">

          <CardTitle title={title} />
          <Tags tags={tags} />
          <ArticleDescrip description={descroption}/>

        </Space>
        <AuthorInfo author={author} />
      </div>
      {full? <ArticleFullText />: null}

    </div>
  )
}