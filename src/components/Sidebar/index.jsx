import React from "react";
import ColorSelectorNode from '../../pages/ColorSelectorNode/index';

const nodeTypes = {
  selectorNode: ColorSelectorNode,
}

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

 
  const onDragColorStart = (event, nodeType) => {

    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  }

  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the right.</div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, "input")} draggable>
        Input Node
      </div>
    </aside>
  );
};
