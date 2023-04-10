import React from 'react';
import { Drawer, } from "antd";


const DrawCom = (props) => {

    return (
      <>
        <div>
          <label>名字:</label>
          {/* <input value={props.nodeName} onChange={(evt) => setNodeName(evt.target.value)} /> */}
          <label>颜色:</label>
          {/* <input type="text" value={props.nodeBg} onChange={(e) => setNodeBg(e.target.value)} /> */}
        </div>
      </>
    );
}

export default DrawCom;
