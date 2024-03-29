import React, { memo } from "react";
import { Handle, Position } from "reactflow";

const FloatingNode = ({ data }: any) => {
  return (
    <>
      {data.label}
      <Handle
        type="source"
        position={Position.Top}
        id="a"
        className={data.isShowHandle ? "visible" : "invisible"}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        className={data.isShowHandle ? "visible" : "invisible"}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="c"
        className={data.isShowHandle ? "visible" : "invisible"}
      />
      <Handle
        type="source"
        position={Position.Left}
        id="d"
        className={data.isShowHandle ? "visible" : "invisible"}
      />
    </>
  );
};

export default FloatingNode;
