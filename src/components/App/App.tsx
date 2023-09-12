import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from '../Header/Header';
import ArticleListPage from '../Pages/ArticleList';
import ArticleFullPage from '../Pages/ArticleFull';
import SignInPage from '../Pages/SignIn';
import SignUpPage from '../Pages/SignUp';
import ProfilePage from '../Pages/Profile';
import NewArticlePage from '../Pages/NewArticle';
import EditArticlePage from '../Pages/EditArticle';
import { PrivatePages } from '../Pages/PrivatePage';

import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <main className={classes['app-main']}>
        <Routes>
          <Route element={<PrivatePages />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/new-article" element={<NewArticlePage />} />
            <Route path="/article/:slug/edit" element={<EditArticlePage />} />
          </Route>
          <Route path="/" element={<ArticleListPage />} />
          <Route path="/articles" element={<ArticleListPage />} />
          <Route path="/article/:slug" element={<ArticleFullPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
