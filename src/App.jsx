import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow,{ Controls, MiniMap, useNodesState, useEdgesState, addEdge, Background,} from 'reactflow';
import 'reactflow/dist/style.css';
import './app.css';
import DragFlow from './pages/DragFlow/index';
// import UpdateNode from './pages/UpdateNode/index';
import SaveAndRestore from './pages/SaveAndRestore/index';


const App = () => {
  return (
    <div className='app_wrapper'>
      {/* <DragFlow></DragFlow> */}
      {/* <UpdateNode></UpdateNode> */}
      <SaveAndRestore>
        
      </SaveAndRestore>
    </div>
  );
};

export default App;