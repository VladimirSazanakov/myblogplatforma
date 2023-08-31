import React, { useState } from "react";

import style from './Tags.module.scss';
import { Space } from "antd";

export default function Tags(props: any) {
  const tagsValue = ['first', 'second', 'serd'];

  let key = 0;

  const tags = tagsValue.map((el: string) => {
    key++;
    return (
      <span key={key} className={style.tag}>{el}</span>
    )
  })

  return (
    <div className={style.Tags}>
      <Space size={8} align="center">
        {tags}
      </Space>
    </div>
  )
}