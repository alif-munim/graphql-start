import React from 'react';
import { Progress } from 'antd';
import 'antd/dist/antd.css';

const ProgressBar = (props) => {
  const { text, percent } = props;
  return (
    <div style={{ marginTop: '5px' }}>
      <div>
        <Progress
          percent={percent || 0}
          strokeWidth={22}
          status="active"
          trailColor="#2b3c57"
        />
      </div>
      <div style={{
        position: 'absolute',
        marginTop: '-22px',
        marginLeft: '15px',
        color: 'white',
        fontSize: '13px',
      }}
      >
        <span>{ text || '' }</span>
      </div>
    </div>
  );
};

export default ProgressBar;
