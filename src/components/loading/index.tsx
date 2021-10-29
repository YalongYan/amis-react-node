import React from 'react';
import { Spin } from 'antd';

import './index.less';

const Loading: React.FC = React.memo(() => {
  return (
    <div className="mainLoadingCtn">
      <Spin />
    </div>
  );
});

export default Loading;
