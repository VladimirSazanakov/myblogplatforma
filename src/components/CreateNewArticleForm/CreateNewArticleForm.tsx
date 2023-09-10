import React, { useState } from 'react';
import { Checkbox, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, Controller, useFieldArray } from 'react-hook-form';
import { useCreateArticleMutation } from '../Api/RtkQuery';


import classes from './CreateNewArticleForm.module.scss';
import { useAppSelector } from '../hooks/reducer';

type Inputs = {
  title: string
  description: string
  body: string
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
  const state = useAppSelector(state => state.user);

  const [fetchCreateArticle, { data, isLoading, isError }] = useCreateArticleMutation();
  const { register, handleSubmit, formState: { errors }, getValues, control, setError } = useForm<Inputs>({ defaultValues: { tags: [''] } });

  const { fields, append, remove } = useFieldArray({
    name: "tags",
    control,
    rules: {
      required: false
    }
  })

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    const newArticle = {
      token: state.token,
      body: {
        article: {
          title: data.title,
          description: data.description,
          body: data.body,
          tagList: data.tags,
        }
      }
    }
    console.log(newArticle);
    fetchNewArticle(newArticle);
  }

  const fetchNewArticle = async (data: any) => {
    if (data) {
      try {
        await fetchCreateArticle(data).unwrap();
        setSuccessed(true);
        // setTimeout(() => navigate('/sign-in', { replace: true }), 2000);
      } catch (error: any) {
        showErrors(error.data);
      }
    }
  }

  const showErrors = (errData: any) => {
    console.log(errData);
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
            {...register('body', {
              required: 'Text is required',
            })}
            aria-invalid={errors.body ? true : false}
          ></textarea>
          <span className={classes.errorMessage}>{errors.body?.message}</span>
        </div>
      </div>

      <div className={classes.formItem}>
        <div className={classes.itemContainer}>
          <label className={classes.formLabel}>Tags</label>
          <div className={classes.tabsWrapper}>
            <div className={classes.tabsSpace}>

              {fields.map((field, index) => {
                return (
                  <>
                    <div key={field.id} className={classes.tabItem}>

                      <input
                        key={field.id}
                        type="text"
                        className={classes.formTags}
                        placeholder="Tags"
                        {...register(`tags.${index}`, {
                          required: "tags must be required",
                        })}
                        aria-invalid={errors.tags?.[index] ? true : false}
                      ></input>
                      <button className={classes.tagsDeleteBtn} onClick={() => remove(index)}>Delete</button>
                    </div>
                    <span className={classes.errorMessage}>{errors.tags?.[index]?.message}</span>
                  </>
                )
              })}
            </div>
            <input type='button' value={'Append'} className={classes.tagsAppendBtn} onClick={() => append('')} />
          </div>
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
