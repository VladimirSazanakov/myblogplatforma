import React from 'react';
import { Popconfirm } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import { useAppSelector } from '../hooks/reducer';
import {
  useGetUserQuery,
  useGetArticleQuery,
  useDeleteArticleMutation,
} from '../Api/RtkQuery';

import style from './ArticleButtons.module.scss';

interface dataForArticle {
  slug: string;
  token?: string;
}
interface ArticleButtonsI {
  slug: string;
}

export default function ArticleButtons(props: ArticleButtonsI) {
  const state = useAppSelector((state) => state.user);
  const slug = props.slug;
  const token = state.token;
  const { data: dataUser } = useGetUserQuery(token);
  const { data: dataArticle } = useGetArticleQuery({ slug, token });
  const [fetchDeleteArticle, { isError }] = useDeleteArticleMutation();
  const navigate = useNavigate();

  const showButtons = () => {
    const userNameLogin = dataUser?.user.username;
    const authorName = dataArticle?.article.author.username;

    if (state.isLogin) {
      if (userNameLogin === authorName) {
        return (
          <div className={style.ArticleButtons}>
            {deleteBtn}
            {editBtn}
          </div>
        );
      }
    } else {
      return null;
    }
  };

  const handleDeleteBtn = () => {
    const data: dataForArticle = {
      token: token,
      slug: slug,
    };
    deleteArticle(data);
  };

  const deleteArticle = async (data: dataForArticle) => {
    if (data) {
      try {
        await fetchDeleteArticle(data).unwrap();
        navigate(-1);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const confirm = (e?: React.MouseEvent<HTMLElement>) => {
    handleDeleteBtn();
  };
  // const cancel = (e?: React.MouseEvent<HTMLElement>) => { };

  const deleteBtn = (
    <Popconfirm
      title="Are you sure to delete this article?"
      onConfirm={confirm}
      // onCancel={cancel}
      okText="Yes"
      cancelText="No"
      placement="right"
    >
      <button className={style.delete}>Delete</button>
    </Popconfirm>
  );

  const editBtn = (
    <Link to={`/article/${slug}/edit`} className={style.edit}>
      Edit
    </Link>
  );

  return (
    <>
      {showButtons()}
      {isError ? (
        <span className={style.errorMessage}>Error Delete Article</span>
      ) : null}
    </>
  );
}
