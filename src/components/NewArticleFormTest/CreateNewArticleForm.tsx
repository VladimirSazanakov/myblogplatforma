import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';

import { useAppSelector } from '../hooks/reducer';

import classes from './CreateNewArticleForm.module.scss';

type FormValues = {
  title: string;
  description: string;
  body: string;
  tags?: TObjTags[];
};

type TObjTags = {
  value: string;
};

interface TNewArticle {
  title: string;
  body: string;
  description: string;
  tagList: string[];
}

interface TNewArticleFormProps {
  mode?: string;
  article: TNewArticle;
  fetchFunc: any;
  slug?: string;
}

const arrToObj = (arr: string[]) => {
  return arr.map((el: string) => {
    return { value: el };
  });
};

const objToArr = (arrObj: TObjTags[] | undefined) => {
  return arrObj ? arrObj.map((el) => el.value) : [];
};

export default function CreateNewArticleForm(props: TNewArticleFormProps) {
  let formTitle = 'Create new article';

  if (props.mode === 'edit') {
    formTitle = 'Edit article';
  }

  const article = props.article;
  const fetchToServer = props.fetchFunc;
  const slug = props.slug;
  const navigate = useNavigate();
  const [successed, setSuccessed] = useState(false);
  const state = useAppSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    defaultValues: {
      title: article.title,
      description: article.description,
      body: article.body,
      tags: arrToObj(article.tagList),
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tags',
    rules: {
      required: false,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const newArticle = {
      token: state.token,
      slug: slug,
      body: {
        article: {
          title: data.title,
          description: data.description,
          body: data.body,
          tagList: objToArr(data.tags),
        },
      },
    };
    fetchNewArticle(newArticle);
  };

  const fetchNewArticle = async (data: any) => {
    if (data) {
      try {
        await fetchToServer(data).unwrap();
        setSuccessed(true);
        setTimeout(() => navigate('/'), 2000);
      } catch (error) {
        console.log(error);
      }
    }
  };

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
          <span className={classes.errorMessage}>
            {errors.description?.message}
          </span>
        </div>
      </div>

      <div className={classes.formItem}>
        <div className={classes.itemContainer}>
          <label className={classes.formLabel}>Text</label>
          <textarea
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
                        {...register(`tags.${index}.value` as const, {
                          required: 'tags must be required',
                        })}
                        aria-invalid={errors.tags?.[index] ? true : false}
                      ></input>
                      <button
                        className={classes.tagsDeleteBtn}
                        onClick={() => remove(index)}
                      >
                        Delete
                      </button>
                    </div>
                    <span className={classes.errorMessage}>
                      {errors.tags?.[index]?.value?.message}
                    </span>
                  </>
                );
              })}
            </div>
            <input
              type="button"
              value={'Append'}
              className={classes.tagsAppendBtn}
              onClick={() => append({ value: '' })}
            />
          </div>
        </div>
      </div>

      {successed ? <span className={classes.successed}>successful</span> : null}
      <div className={classes.formItem}>
        <input value={'Send'} type="submit" className={classes.formSubmitBtn} />
      </div>
    </form>
  );
}
