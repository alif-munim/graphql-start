import React from 'react';
import { Spin } from 'antd';
import 'antd/dist/antd.css';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Spinner = () => {
    return (
        <div>
            <Spin indicator={antIcon} />
        </div>
    )
}

export default Spinner
