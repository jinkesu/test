import React, { useState, useRef, useCallback, useEffect } from "react";
import ReactFlow, { useNodesState, useEdgesState } from 'reactflow';
// import DrawCom from "../../components/DrawCom";
import { Drawer } from "antd";

const UpdateNode = (props) => {
  const [open, setOpen] = useState(false);
  const onClick = (e)=>{
    setOpen(true)
  }
  const [nodesItem,setNodesItem] = useState({
    style: { backgroundColor:'#3bff18' },
    data: { label:'输出型节点', onClick},
    type: 'input',
    position: { x: 100, y: 300},
    id:'1'
  });
  const [nodes, setNodes, onNodesChange] = useNodesState([nodesItem]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  
  useEffect(()=>{
    const onClick = (e)=>{
      setOpen(true)
    }
  },[])

  useEffect(()=>{

    setNodes((nds) => {
      if (nds) {
        nds.map((node) => {
          if (node.id === '1') {
            node = {
              ...node,
              ...nodesItem,
            };
          }
          return node;
        });
      }
    });
  },[nodesItem,setNodes])
  


  const onClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange}>
        <Drawer width={500} onClose={onClose} open={open}>
          {/* <DrawCom nodesItem={nodesItem}  onChange={(e) =>setNodesItem  } />
           */}
          <div className="updatenode__controls">
            <label>节点名称:</label>
            <input value={nodesItem.data.label} onChange={(e) => setNodesItem({
              ...nodesItem,
              data:{ label:e.target.value }
            })} />
            <label className="updatenode__bglabel">背景色:</label>
            <input value={nodesItem.style.backgroundColor} onChange={(e) => setNodesItem({...nodesItem, style:{ backgroundColor:e.target.value} })} />
            {/* 
              <label className="updatenode__position">位置:</label>
              <input  /> 
            */}
          </div>
        </Drawer>
      </ReactFlow>
    </div>
  );
};

export default UpdateNode;
