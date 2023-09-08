import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useRegisterNewUserMutation } from '../Api/RtkQuery';

import classes from './ProfileForm.module.scss';

type Inputs = {
  username: string
  email: string
  password: string
  avatarImage: string
  agree: any
}

type userDataApi = {
  user: {
    username: string,
    email: string,
    password: string,
  }
}
export default function ProfileForm(props: any) {
  const formTitle = 'Edit Profile';
  const [successed, setSuccessed] = useState(false);
  const [fetchCreateUser, { data, isLoading, isError }] = useRegisterNewUserMutation();
  const { register, handleSubmit, formState: { errors }, getValues, control, setError } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // const newUser: userDataApi = {
    //   user: {
    //     username: data.username,
    //     email: data.email,
    //     password: data.password,
    //   }
    // }
    // fetchNewUser(newUser);
  }

  const fetchNewUser = async (newUser: userDataApi) => {
    if (newUser) {
      try {
        await fetchCreateUser(newUser).unwrap();
        setSuccessed(true);
      } catch (error: any) {
        showErrors(error.data);
      }
    }
  }

  const showErrors = (errData: any) => {
    const errItems = errData.errors;
    const errKeys = Object.keys(errItems);
    console.log(errKeys);
    errKeys.forEach((el: string, index: number) => {
      switch (el) {
        case 'username': {
          setError('username', { message: el + ' ' + errItems[el] });
          break;
        }
        case 'email': {
          setError('email', { message: el + ' ' + errItems[el] });
          break;
        }

        case 'password': {
          setError('password', { message: el + ' ' + errItems[el] });
          break;
        }
        default: break;
      }
    });
  }
  const [errImage, setErrImage] = useState(false);

  function avatarImageValid(value: any) {
    if (value === '') return;
    let image = new Image();
    image.src = value;
    image.onload = function () {
      setErrImage(false);
    }
    image.onerror = function () {
      console.log('error image');
      setErrImage(true);
    };

    if (errImage) return 'Avatar must be image';

  }

  return (
    <form className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.formTitle}>{formTitle}</div>

      <div className={classes.formItem}>

        <div className={classes.itemContainer}>
          <label className={classes.formLabel}>Username</label>
          <input
            type="text"
            className={classes.formInput}
            placeholder="Username"
            {...register('username', {
              required: 'Username is required',
              minLength: {
                value: 3,
                message: 'Your Username needs to be at least 3 characters'
              },
              maxLength: {
                value: 20,
                message: "Your Username must be 20 characters or less"
              }
            })}
            aria-invalid={errors.username ? true : false}
          ></input>
          <span className={classes.errorMessage}>{errors.username?.message}</span>
        </div>

        <div className={classes.itemContainer}>
          <label className={classes.formLabel}>Email address</label>
          <input
            type="email"
            className={classes.formInput}
            placeholder="Email address"
            {...register('email', {
              required: 'Email address is required',
              pattern: {
                value: /\S+@\S+.\S+/,
                message: "Please enter correct value"
              }
            })}
            aria-invalid={errors.email ? true : false}
          ></input>
          <span className={classes.errorMessage}>{errors.email?.message}</span>
        </div>

        <div className={classes.itemContainer}>
          <label className={classes.formLabel}>New password</label>
          <input
            type="password"
            className={classes.formInput}
            placeholder="New password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: "Your password needs to be at least 6 characters"
              },
              maxLength: {
                value: 40,
                message: "Your password must be 40 characters or less"
              }
            })}
            aria-invalid={errors.password ? true : false}
          ></input>
          <span className={classes.errorMessage}>{errors.password?.message}</span>
        </div>

        <div className={classes.itemContainer}>
          <label className={classes.formLabel}>Avatar Image (url)</label>
          <input
            type="text"
            className={classes.formInput}
            placeholder="Avatar image"
            {...register("avatarImage", {
              required: false,
              validate: avatarImageValid,
            })}
            aria-invalid={errors.avatarImage ? true : false}
          ></input>
          <span className={classes.errorMessage}>{errors.avatarImage?.message}</span>
        </div>
      </div>

      {successed ? <span className={classes.successed}>successful</span> : null}
      <div className={classes.formItem}>
        <input
          value={'Save'}
          type="submit"
          className={classes.formSubmitBtn}
        />
      </div>
    </form >
  );
}