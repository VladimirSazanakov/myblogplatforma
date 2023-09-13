import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import classes from './LoadIndicator.module.scss';

const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;

export default function LoadIndicator() {
  return (
    <div className={classes.LoadIndicator}>
      <Spin size="large" indicator={antIcon} />
    </div>
  );
}
