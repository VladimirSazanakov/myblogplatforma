import React, { useState } from "react";
import heart from '../../img/heart.svg';

import style from './CardTitle.module.scss';
import { HeartFilled, HeartOutlined, HeartTwoTone } from "@ant-design/icons";
import { Space } from "antd";

export default function CardTitle(props: any) {
  const title = 'Some Article Title';
  const [liked, setLiked] = useState(false);
  const likes = 12;

  const handleHeart=()=>{
    setLiked((liked)=>!liked)
  }

  return (
    <div className={style.CardTitle}>
      <Space size={13} align="center">

        <span className={style.title}>{title}</span>
      <Space size={5} align="center">
        {liked? <HeartFilled style={{ fontSize: 14, color: 'red' }} onClick={()=>handleHeart()}/> : <HeartOutlined style={{fontSize:14, color: 'rgba(0,0,0,0.55)'}} onClick={()=>handleHeart()} />}
        <span className={style.likes}>{likes}</span>
      </Space>
      </Space>
    </div>
  )
}