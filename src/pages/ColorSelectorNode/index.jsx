import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export default memo(({ data,isConnectable}) => {
    console.log(data,isConnectable,'data,isConnectable--------');

    return (
      <>
        <Handle
          type="target"
          position={Position.Left}
          style={{ background: "#fff",border:'1px solid #eee' }}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={isConnectable}
        ></Handle>
      <div>
        Custom Color Picker Node
      </div>
      <input className="nodrag"  type="color" onChange={data.onChange} defaultValue={data.color} />
      {/* <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 10, background: '#555' }}
        isConnectable={isConnectable}
      /> */}
      {/* <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ bottom: 10, top: 'auto', background: '#555' }}
        isConnectable={isConnectable}
      /> */}
      </>
    );
})