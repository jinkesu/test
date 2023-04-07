import { Handle, Position } from "reactflow";

const CustomHandle = (props) => {
  return (
    <Handle
      {...props}
      type="target"
      position={Position.Left}
      isValidConnection={(connection) => connection.source === "some-id"}
      onConnect={(params) => console.log("handle onConnect", params)}
      style={{ background: "#fff" }}
    />
  );
};

export  default CustomHandle
