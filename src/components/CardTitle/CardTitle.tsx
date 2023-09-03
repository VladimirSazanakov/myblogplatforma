import React, { useState } from "react";
import heart from '../../img/heart.svg';

import style from './CardTitle.module.scss';
import { HeartFilled, HeartOutlined, HeartTwoTone } from "@ant-design/icons";
import { Space } from "antd";
import { Link } from "react-router-dom";

export default function CardTitle(props: any) {
  const title = props.title;
  const slug = props.slug;
  const [liked, setLiked] = useState(false);
  const likes = props.likes;

  const handleHeart = () => {
    setLiked((liked) => !liked)
  }

  return (
    <div className={style.CardTitle}>
      <Space size={13} align="center">

        <Link to={`/article/${slug}`} className={style.title}>{title}</Link>
        <Space size={5} align="center">
          {liked ? <HeartFilled style={{ fontSize: 14, color: 'red' }} onClick={() => handleHeart()} /> : <HeartOutlined style={{ fontSize: 14, color: 'rgba(0,0,0,0.55)' }} onClick={() => handleHeart()} />}
          <span className={style.likes}>{likes}</span>
        </Space>
      </Space>
    </div >
  )
}