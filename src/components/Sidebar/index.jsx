import React from "react";
import ColorSelectorNode from '../../pages/ColorSelectorNode/index';
import DragCustomNode from '../DragCustomNode/index';

export const nodeTypes = {
  // newNode: ColorSelectorNode,
  drag:DragCustomNode,
}

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div
        onDragStart={(e) => onDragStart(e,'drag')}
        draggable >
        <DragCustomNode />
      </div>
      
    </aside>
  );
};
