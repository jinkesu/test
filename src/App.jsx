import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow,{ Controls, MiniMap, useNodesState, useEdgesState, addEdge, Background,} from 'reactflow';
import 'reactflow/dist/style.css';
import './app.css';
import DragFlow from './pages/DragFlow/index';

const App = () => {
  return (
    <div className='app_wrapper'>
      <DragFlow></DragFlow>
    </div>
  );
};

export default App;