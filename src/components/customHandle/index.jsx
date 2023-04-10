import { Handle, Position } from "reactflow";

const CustomHandle = (props) => {
  return (
    <Handle
      {...props}
      type={props.type || "target"}
      position={props.position||Position.Left}
      // isValidConnection={(connection) => connection.source === "some-id"}
      // onConnect={(params) => console.log("handle onConnect", params)}
      style={{ width:'10px',height:'10px',backgroundColor:'#fff',border:'1px solid #999', }}
    />
  );
};

export  default CustomHandle
