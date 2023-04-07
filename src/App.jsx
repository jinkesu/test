import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow,{ Controls, MiniMap, useNodesState, useEdgesState, addEdge, Background,} from 'reactflow';
import 'reactflow/dist/style.css';
import './app.css';
import { Menu } from 'antd';
// import CustomNode from './pages/CustomNodeFlow';
// import DragFlow from './pages/DragFlow/index';

const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};
const items = [
  getItem('')
]

const App = () => {
  return (
    <>
     <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    /> 
    </>
  );
};

export default App;