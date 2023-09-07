import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useUserLoginMutation } from '../Api/RtkQuery';

import { useAppDispatch, useAppSelector } from '../hooks/reducer';
import { SET_TOKEN, SET_LOGIN } from '../../ReduxToolkit/reducers/user';

import classes from './LoginForm.module.scss';

type Inputs = {
  email: string
  password: string
}

type userLogin = {
  user: {
    email: string
    password: string
  }
}

export default function LoginForm(props: any) {

  const bigState = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const formTitle = 'SignIn';
  const { register, handleSubmit, watch, formState: { errors }, } = useForm<Inputs>();
  const [fetchLogin, { data, isLoading, isError, status }] = useUserLoginMutation();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const userData: userLogin = {
      user: {
        email: data.email,
        password: data.password
      }
    }
    console.log('data from form', data)
    dispatch(SET_LOGIN(true));
    dispatch(SET_TOKEN(''));
    loginUser(userData);
  };

  const loginUser = async (userData: userLogin) => {
    if (userData) {
      try {
        await fetchLogin(userData);

        await console.log(data.user.token);

        await dispatch(SET_TOKEN(data.user.token));

        console.log(status);
        console.log(isLoading);
        console.log('isError', isError);
        console.log('token in state', bigState.token);

      } catch (err: any) {
        console.log('error is', err.errors);
      }
    } else {
      console.log('no data');
    }

  }

  useEffect(() => {
    console.log('token in state use effect', bigState.token);
  }, [bigState])

  return (
    <form className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.formTitle}>{formTitle}</div>

      <div className={classes.formItem}>
        <div className={classes.ItemContainer}>
          <label className={classes.formLabel}>Email address</label>
          <input
            className={classes.formInput}
            placeholder="Email address"
            {...register("email", {
              required: "Email Address is required",
              pattern: {
                value: /\S+@\S+.\S+/,
                message: "Please enter correct value"
              }
            })}
            aria-invalid={errors.email ? true : false}
          ></input>
          <span className={classes.errorMessage}>{errors.email?.message}</span>
        </div>

        <div className={classes.ItemContainer}>
          <label className={classes.formLabel}>Password</label>
          <input
            type="password"
            className={classes.formInput}
            placeholder="Password"
            {...register('password', {
              required: "Password is requires",
              minLength: {
                value: 6,
                message: 'Your password needs to be at least 6 characters'
              },
              maxLength: {
                value: 40,
                message: 'Your password must be 40 characters or less'
              }
            })}
            aria-invalid={errors.password ? true : false}
          ></input>
          <span className={classes.errorMessage}>{errors.password?.message}</span>
        </div>
      </div>
      {isError ? <span className={classes.errorMessage}>Email or password is invalid</span> : null}

      <div className={classes.formItem}>
        <button
          type="submit"
          className={classes.formSubmitBtn}
        >
          Login
        </button>
        <div className={classes.formInfo}>
          Don't have account?{' '}
          <Link className={classes.link} to="/sign-up">
            Sign Up.
          </Link>
        </div>
      </div>
    </form>
  );
}
