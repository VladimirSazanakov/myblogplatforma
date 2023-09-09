import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useRegisterNewUserMutation } from '../Api/RtkQuery';

import classes from './CreateNewArticleForm.module.scss';

type Inputs = {
  title: string
  description: string
  text: string
  tags: string[]
}

type userDataApi = {
  user: {
    username: string,
    email: string,
    password: string,
  }
}
export default function CreateNewArticleForm(props: any) {
  const formTitle = 'Create new article';
  const [successed, setSuccessed] = useState(false);
  // const [fetchCreateUser, { data, isLoading, isError }] = useRegisterNewUserMutation();
  const { register, handleSubmit, formState: { errors }, getValues, control, setError } = useForm<Inputs>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
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
        // await fetchCreateUser(newUser).unwrap();
        setSuccessed(true);
        setTimeout(() => navigate('/sign-in', { replace: true }), 2000);
      } catch (error: any) {
        showErrors(error.data);
      }
    }
  }

  const showErrors = (errData: any) => {
    // const errItems = errData.errors;
    // const errKeys = Object.keys(errItems);
    // console.log(errKeys);
    // errKeys.forEach((el: string, index: number) => {
    //   switch (el) {
    //     case 'username': {
    //       setError('username', { message: el + ' ' + errItems[el] });
    //       break;
    //     }
    //     case 'email': {
    //       setError('email', { message: el + ' ' + errItems[el] });
    //       break;
    //     }

    //     case 'password': {
    //       setError('password', { message: el + ' ' + errItems[el] });
    //       break;
    //     }
    //     default: break;
    //   }
    // });
  }

  // function repearPasswordValid(value: any) {
  //   const { password, repeatPassword } = getValues();
  //   if (password != value) {
  //     return 'Password must be match';
  //   }
  // }

  return (
    <form className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.formTitle}>{formTitle}</div>

      <div className={classes.formItem}>

        <div className={classes.itemContainer}>
          <label className={classes.formLabel}>Title</label>
          <input
            type="text"
            className={classes.formInput}
            placeholder="Title"
            {...register('title', {
              required: 'Title is required',
            })}
            aria-invalid={errors.title ? true : false}
          ></input>
          <span className={classes.errorMessage}>{errors.title?.message}</span>
        </div>
      </div>

      <div className={classes.formItem}>
        <div className={classes.itemContainer}>
          <label className={classes.formLabel}>Short description</label>
          <input
            type="text"
            className={classes.formInput}
            placeholder="Description"
            {...register('description', {
              required: 'Short description is required',
            })}
            aria-invalid={errors.description ? true : false}
          ></input>
          <span className={classes.errorMessage}>{errors.description?.message}</span>
        </div>
      </div>

      <div className={classes.formItem}>
        <div className={classes.itemContainer}>
          <label className={classes.formLabel}>Text</label>
          <textarea
            // type="aria"
            className={classes.formAria}
            placeholder="Text"
            {...register('text', {
              required: 'Text is required',
            })}
            aria-invalid={errors.text ? true : false}
          ></textarea>
          <span className={classes.errorMessage}>{errors.text?.message}</span>
        </div>

        <div className={classes.itemContainer}>
          <label className={classes.formLabel}>Tags</label>
          <input
            type="text"
            className={classes.formTags}
            placeholder="Tags"
            {...register("tags", {

            })}
            aria-invalid={errors.tags ? true : false}
          ></input>
          <span className={classes.errorMessage}>{errors.tags?.message}</span>
        </div>
      </div>

      {successed ? <span className={classes.successed}>successful</span> : null}
      <div className={classes.formItem}>
        <input
          value={'Create'}
          type="submit"
          className={classes.formSubmitBtn}
        />

      </div>
    </form >
  );
}
