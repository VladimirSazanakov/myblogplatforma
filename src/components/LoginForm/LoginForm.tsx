import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import classes from './LoginForm.module.scss';

type Inputs = {
  email: string
  password: string
}

export default function LoginForm(props: any) {

  const formTitle = 'SignIn';
  const { register, handleSubmit, watch, formState: { errors }, } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  };

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
