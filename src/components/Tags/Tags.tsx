import React from 'react';
import { Space } from 'antd';

import { tagList } from '../../types/types';

import style from './Tags.module.scss';

interface TTagsProp {
  tags: tagList;
}

export default function Tags(props: TTagsProp) {
  const tagsValue = props.tags;

  let key = 0;

  const tags = tagsValue.map((el: string) => {
    key++;
    return (
      <span key={key} className={style.tag}>
        {el}
      </span>
    );
  });

  return (
    <div className={style.Tags}>
      <Space size={8} align="center">
        {tags}
      </Space>
    </div>
  );
}
