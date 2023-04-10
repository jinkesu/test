import React, { useState, useCallback, useEffect } from "react";
import ReactFlow, { ReactFlowProvider, useNodesState, useEdgesState, addEdge, useReactFlow } from "reactflow";
import './index.css';
import { Drawer } from "antd";
import { MinusCircleOutlined } from '@ant-design/icons';

const flowKey = "example-flow";
const getNodeId = () => `randomnode_${+new Date()}`;

const SaveAndRestore = (props) => {
  const [ open, setOpen ] = useState(false);
  // const onClick = (e)=>{
  //   console.log(1111);
  //   setOpen(true)
  // }
  const [nodes, setNodes, onNodesChange] = useNodesState([
    { id: "1", data: { label: "Node 1", }, position: { x: 100, y: 100 } },
    { id: "2", data: { label: "Node 2", }, position: { x: 100, y: 200 } },
  ]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([{ id: "e1-2", source: "1", target: "2" }]);
  const [rfInstance, setRfInstance] = useState(null);
  const { setViewport } = useReactFlow();
  
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  const onSave = useCallback(() => {
    console.log(3333333333333333,'保存');
    if (rfInstance) {
      const flow = rfInstance.toObject();
      console.log('flow_++++++++++++++',flow);
      localStorage.setItem(flowKey, JSON.stringify(flow));
    }
  }, [rfInstance]);
  
  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(flowKey));
      console.log(flow,'flow--------------');
      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;
        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
        setViewport({ x, y, zoom });
      }
    };

    restoreFlow();
  }, [setNodes, setViewport]);

  const onAdd = useCallback((e) => {
    console.log(1111111111111111,'添加');
    const newNode = {
      id: getNodeId(),
      data: { label: "添加后的节点" },
      position: {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);
  
  const onDelete = useCallback((e) => {
    setNodes([]);
    setEdges([]);
    setViewport({});
    localStorage.removeItem(flowKey)
  },[setNodes]);

  // const onClear = useCallback((e,id)=>{
  //   console.log(id,'e------',e);
  //   e.preventDefault();
  //   // setNodes()
  // },[setNodes])

  const onClose = ()=>{
    setOpen(false);
  }

  useEffect(()=>{
    const onClick = (e,id)=>{
        console.log(2222,e,id);
        setOpen(true)
    }
  
    setNodes([
      { id: "1", data: { label: <div ><label>Node 1</label> <button><MinusCircleOutlined onClick={(e)=>onClear(e,'1')} /></button></div>,}, position: { x: 100, y: 100 } },
      { id: "2", data: { label: <div onClick={(e) => onClick(e,{})}><label>Node 2</label> <button> </button> </div> }, position: { x: 100, y: 200 } },
    ])

    const onClear = (e,id)=>{
      e.preventDefault();
      e.stopPropagation();
      let newNodes = [...nodes];
      let index = newNodes.filter((item)=>{return item.id == id})
      newNodes.splice(index,1)
      setNodes(newNodes)
    }
    
  },[])


  return (
    <>
      <ReactFlowProvider>
        <div style={{ width: "100vw", height: "100vh" }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setRfInstance}
          >
            <div className="save__controls">
              <button onClick={onSave}>保存</button>
              <button onClick={onRestore}>重置</button>
              <button onClick={onAdd}>添加</button>
              <button onClick={onDelete}>删除且清空</button>
            </div>
            <Drawer
              width={500}
              open={open}
              onClose={onClose}
            >123</Drawer>
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </>
  );
};

// export default SaveAndRestore;

export default () => (
    <ReactFlowProvider>
      <SaveAndRestore />
    </ReactFlowProvider>
  );