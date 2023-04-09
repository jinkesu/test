import React, { useState, useRef, useCallback, useEffect } from 'react';
import { WifiOutlined  } from '@ant-design/icons';
import DragCustomNode from '../../components/DragCustomNode/index';

import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
} from 'reactflow';
import './index.css';
import Sidebar from '../../components/Sidebar';

const initialNodes = [
];
const nodeTypes = {
  // newNode: ColorSelectorNode,
  drag:DragCustomNode,
}
const initBgColor = '#333';
let id = 0;
const getId = () => `dndnode_${id++}`;

const DragFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [bgColor,setbgColor] = useState(initBgColor)

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds =  reactFlowWrapper &&  reactFlowWrapper?.current && reactFlowWrapper?.current?.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');
      // check if the dropped element is valid
      // document.body.appendChild(DragCustom)
      if (typeof type === 'undefined' || !type) {
        return;
      }
      console.log('e-----------------',event);
      const position = reactFlowInstance?.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
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
      const newNode = {
        id: getId(),
        type: type,
        // type:'input',
        position,
        data: {label:<DragCustomNode></DragCustomNode> },
        // data: {label:'Output end'},
        // sourcePosition:'right'
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <Sidebar />
        <div className="reactflow-wrapper" ref={reactFlowWrapper} style={{width:'calc(100vw - 300px)',height:'100vh'}}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            // fitView
            // style={{ background: bgColor }}
            nodeTypes={nodeTypes}
          >
            <Controls />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default DragFlow;
