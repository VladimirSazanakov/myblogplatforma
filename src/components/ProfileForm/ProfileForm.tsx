import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useGetUserQuery, useUpdateUserMutation } from '../Api/RtkQuery';
import { useAppSelector } from '../hooks/reducer';

import classes from './ProfileForm.module.scss';

type Inputs = {
  username: string;
  email: string;
  password: string;
  avatarImage: string;
  agree: any;
};

interface TRawData {
  token: string;
  body: {
    user: {
      username: string;
      email: string;
      password: string;
      image: string;
    };
  };
}

export default function ProfileForm() {
  const state = useAppSelector((state) => state.user);
  const token = state.token;

  const formTitle = 'Edit Profile';
  const [successed, setSuccessed] = useState(false);

  const [updateUser] = useUpdateUserMutation();
  const { data } = useGetUserQuery(token);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<Inputs>();
  const navigate = useNavigate();

  const userName = data ? data.user.username : '';
  const email = data ? data.user.email : '';

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const rawData = {
      token: token,
      body: {
        user: {
          username: data.username,
          email: data.email,
          password: data.password,
          image: data.avatarImage,
        },
      },
    };
    fetchUpdateUser(rawData);
  };

  useEffect(() => {
    console.log(data);
    console.log(userName);
    setValue('username', userName);
    setValue('email', email);
  }, [data]);

  const fetchUpdateUser = async (rawData: TRawData) => {
    if (rawData) {
      try {
        const data = await updateUser(rawData).unwrap();
        setSuccessed(true);
        setTimeout(() => navigate(-1), 2000);
      } catch (error: any) {
        showErrors(error.data);
      }
    }
  };

  const showErrors = (errData: any) => {
    const errItems = errData.errors;
    const errKeys = Object.keys(errItems);

    errKeys.forEach((el: string) => {
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
        default:
          break;
      }
    });
  };

  const [errImage, setErrImage] = useState(false);

  function avatarImageValid(value: string) {
    if (value === '') return;
    const image = new Image();
    image.src = value;
    image.onload = function () {
      setErrImage(false);
    };
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
                message: 'Your Username needs to be at least 3 characters',
              },
              maxLength: {
                value: 20,
                message: 'Your Username must be 20 characters or less',
              },
            })}
            aria-invalid={errors.username ? true : false}
          ></input>
          <span className={classes.errorMessage}>
            {errors.username?.message}
          </span>
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
                message: 'Please enter correct value',
              },
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
                message: 'Your password needs to be at least 6 characters',
              },
              maxLength: {
                value: 40,
                message: 'Your password must be 40 characters or less',
              },
            })}
            aria-invalid={errors.password ? true : false}
          ></input>
          <span className={classes.errorMessage}>
            {errors.password?.message}
          </span>
        </div>

        <div className={classes.itemContainer}>
          <label className={classes.formLabel}>Avatar Image (url)</label>
          <input
            type="text"
            className={classes.formInput}
            placeholder="Avatar image"
            {...register('avatarImage', {
              required: false,
              validate: avatarImageValid,
            })}
            aria-invalid={errors.avatarImage ? true : false}
          ></input>
          <span className={classes.errorMessage}>
            {errors.avatarImage?.message}
          </span>
        </div>
      </div>

      {successed ? <span className={classes.successed}>successful</span> : null}
      <div className={classes.formItem}>
        <input value={'Save'} type="submit" className={classes.formSubmitBtn} />
      </div>
    </form>
  );
}
