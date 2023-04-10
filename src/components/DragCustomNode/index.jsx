import React, { memo } from 'react';
import { WifiOutlined  } from '@ant-design/icons';
import './index.css';
import CustomHandle from '../customHandle/index';
import { Position } from 'reactflow';

export default memo((props) => {
  return (
    <div className='dragCustom'>
      {/* <CustomHandle type="source" position={Position.Right}  /> */}
      {/* <WifiOutlined style={{ color: "#fff" }} />
      <input type="text" defaultValue={"自已定义的节点"} /> */}
      <WifiOutlined style={{ color: "#fff" }} />
      <div>自已定义的节点</div>
      {/* <div style={{position:'absolute',width:'10px',height:'10px',borderRadius:'5px',backgroundColor:'#fff',border:'1px solid #999',right:'-5px'}}></div> */}
      <CustomHandle type="target" position={Position.Right}  />
      {/* <div>
        <span ></span>
        <input type="text" defaultValue={"自已定义的节点"} />
      </div> */}
      {/* <div className="drag_custom_node">
        <div className="icon" style={{ height: "100%", border: "1px solid #fff" }}>
          <WifiOutlined style={{ color: "#fff" }} />
        </div>
        <div className="input">
          <input type="text" defaultValue={"自已定义的节点"} />
        </div>
        </div> 
     */}
    </div>
  );
});

