import React, { useEffect, useState } from 'react';
import { Avatar, Button, Popconfirm } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/reducer';
import { useGetUserQuery, useGetArticleQuery, useDeleteArticleMutation } from '../Api/RtkQuery';
import { LOG_OUT, SET_LOGIN, SET_TOKEN } from '../../ReduxToolkit/reducers/user';

import avatarImgDefault from '../../img/userIcon.png';

import style from './ArticleButtons.module.scss';

export default function (props: any) {

  const state = useAppSelector(state => state.user);
  const slug = props.slug;
  // const dispatch = useAppDispatch();
  // const logined = state.isLogin;

  const token = state.token;
  const { data: dataUser, isError, isLoading } = useGetUserQuery(token);
  const { data: dataArticle } = useGetArticleQuery(slug);
  const [fetchDeleteArticle] = useDeleteArticleMutation();

  // const navigate = useNavigate();


  const showButtons = () => {

    const userNameLogin = dataUser?.user.username;
    console.log(dataUser);
    console.log(dataArticle);

    const authorName = dataArticle?.article.author.username;

    if (state.isLogin) {
      if (userNameLogin === authorName) {
        return (
          <div className={style.ArticleButtons}>
            {deleteBtn}
            {editBtn}
          </div>
        )
      }

    } else {
      return null;
    }
  }



  const handleDeleteBtn = () => {
    // setLogined(true);
    console.log('Delete', slug);
    const data = {
      token: token,
      slug: slug
    }
    deleteArticle(data);
    // setTimeout(na)
  };

  const deleteArticle = async (data: any) => {
    if (data) {
      try {
        await fetchDeleteArticle(data).unwrap();
        // setSuccessed(true);
        // setTimeout(() => navigate('/sign-in', { replace: true }), 2000);
      } catch (error: any) {
        console.log(error);
        // showErrors(error.data);
      }
    }
  }
  const confirm = (e?: React.MouseEvent<HTMLElement>) => {
    handleDeleteBtn();
  };
  const cancel = (e?: React.MouseEvent<HTMLElement>) => {
  };

  const deleteBtn = (
    <Popconfirm
      title='Are you sure to delete this article?'
      // description='Are you sure to delete this article?'
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText='No'
      placement='right' >


      <button
        // onClick={() => handleDeleteBtn()}
        className={style.delete}
      >
        Delete
      </button>
    </Popconfirm>
  );


  const editBtn = (
    <Link
      to={`/article/${slug}/edit`}
      className={style.edit}
    >
      Edit
    </Link>
  );

  const handleSignUp = () => { };


  const handleCrateAticle = () => { };


  return (
    showButtons()
  );
}
