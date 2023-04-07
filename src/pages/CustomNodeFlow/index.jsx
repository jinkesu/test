import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow,{ Controls, MiniMap, useNodesState, useEdgesState, addEdge, Background,} from 'reactflow';

import ColorSelectorNode from '../ColorSelectorNode/index';

const nodeTypes = {
  selectorNode: ColorSelectorNode,
}
const initBgColor = '#999';
const connectionLineStyle = { stroke: '#fff' };
const snapGrid = [20, 20];
const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const CustomNodeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [bgColor,setbgColor] = useState(initBgColor)
  
  useEffect(() => {
    const onChange = (event) => {
      setNodes((nds)=>{
        console.log(nds,'nds-----');
        if(nds){
          nds && nds?.map((node)=>{
            if (node.id !== '4') {
              return node;
            }
            const color =  event.target.value;
            setbgColor(color);
            return {
              ...nodes,
              data:{
                ...nodes.data,
                color,
              }
            };
          })
        }
        const color =  event.target.value;
        setbgColor(color);  
        return nds;
      });
    };

    setNodes([
      { id: '1', position: { x: 0, y: 0 }, data: { label: '1' },style:{backgroundColor:'red'},type: 'input', },
      { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
      { id: '3', position: { x: 100, y: 300 }, data: { label: '3' }, type: 'output', },
      { id: '4',type: 'selectorNode', data: { label: 'Output end',onChange:onChange,color:initBgColor,},style:{backgroundColor:'#e25a5a'}, position: { x: 650, y: 100 }, targetPosition: 'left', }
    ]);

    setEdges([
      { id: "e1-2", source: "1", target: "2", label: "skj" },
      {
        id: "e2a-3",
        source: "2",
        target: "3",
        label: "jielu",
        sourceHandle: "a",
        animated: true,
        style: { stroke: "#fff" },
      },
      { id: "e2b-4", source: "2", target: "4", label: "888", sourceHandle: "b" },
    ]);
    
  },[])

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  
  return (
    <div style={{ height: '100vh', width:'100vw' }}>
      <ReactFlow 
        nodes={nodes} 
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
        style={{ background: bgColor }}
        snapToGrid={true}
        connectionLineStyle={connectionLineStyle}
        snapGrid={snapGrid}
        defaultViewport={defaultViewport}
        attributionPosition="bottom-left"
      >
        <MiniMap />  
        <Controls />
        {/* <Background /> */}
      </ReactFlow>
    </div>
  );
};

export default CustomNodeFlow;