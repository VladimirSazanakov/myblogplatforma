import React, { useState } from 'react';
import { HeartFilled, HeartOutlined, HeartTwoTone } from '@ant-design/icons';
import { Space } from 'antd';
import { Link } from 'react-router-dom';

import heart from '../../img/heart.svg';

import style from './CardTitle.module.scss';
import { useAppSelector } from '../hooks/reducer';
import { useAddLikeArticleMutation, useDelLikeArticleMutation } from '../Api/RtkQuery';

export default function CardTitle(props: any) {
  const title = props.title;
  const slug = props.slug;
  // const [liked, setLiked] = useState(props.favorited);
  const liked = props.favorited;
  const likes = props.likes;
  const state = useAppSelector(state => state.user);
  const isLogin = state.isLogin;
  const token = state.token;
  console.log(liked);

  const [fetchAddLike] = useAddLikeArticleMutation();
  const [fetchDelLike] = useDelLikeArticleMutation();


  const handleHeart = () => {
    console.log('Heart handle work');
    if (isLogin) {
      const data = {
        token: token,
        slug: slug,
      }
      if (liked) {
        delLike(data);
      } else {
        addLike(data);
      }
    }

    // setLiked((liked: boolean) => !liked);
  };

  const addLike = async (data: any) => {
    try {
      const res = await fetchAddLike(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }


  const delLike = async (data: any) => {
    try {
      const res = await fetchDelLike(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={style.CardTitle}>
      <Space size={13} align="center">
        <Link to={`/article/${slug}`} className={style.title}>
          {title}
        </Link>
        <Space size={5} align="center">
          {liked ? (
            <HeartFilled
              style={{ fontSize: 14, color: 'red' }}
              onClick={() => handleHeart()}
            />
          ) : (
            <HeartOutlined
              style={{ fontSize: 14, color: 'rgba(0,0,0,0.55)' }}
              onClick={() => handleHeart()}
              disabled={!isLogin}
            />
          )}
          <span className={style.likes}>{likes}</span>
        </Space>
      </Space>
    </div>
  );
}
