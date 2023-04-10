import React, { memo } from 'react';
import CustomHandle from '../customHandle/index';
import { Position } from 'reactflow';
import { WalletOutlined } from '@ant-design/icons';

const OutNode = memo((props) => {
    return (
        <div className='outCustom'>
            <CustomHandle type="source" position={Position.right}  />
            <div>输出型节点</div>
            <WalletOutlined  style={{ color: "#fff" }}/>
        </div>
    );
})

export default OutNode;