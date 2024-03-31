import { useCallback } from "react";
import {
  useStore,
  getBezierPath,
  getSmoothStepPath,
  getStraightPath,
  BaseEdge,
  EdgeLabelRenderer,
} from "reactflow";
import { getEdgeParams } from "./utils";

function SimpleFloatingEdge({
  id,
  source,
  target,
  markerEnd,
  style,
  data,
}: any) {
  const sourceNode = useStore(
    useCallback((store) => store.nodeInternals.get(source), [source])
  );
  const targetNode = useStore(
    useCallback((store) => store.nodeInternals.get(target), [target])
  );

  if (!sourceNode || !targetNode) {
    return null;
  }

  const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(
    sourceNode,
    targetNode
  );

  const [edgePath] = getBezierPath({
    sourceX: sx,
    sourceY: sy,
    sourcePosition: sourcePos,
    targetPosition: targetPos,
    targetX: tx,
    targetY: ty,
  });

  return (
    <path
      id={id}
      className="react-flow__edge-path"
      d={edgePath}
      strokeWidth={5}
      markerEnd={markerEnd}
      style={style}
    />
  );
}

// function SimpleFloatingEdge({
//   id,
//   sourceX,
//   sourceY,
//   targetX,
//   targetY,
//   sourcePosition,
//   targetPosition,
//   data,
// }: any) {
//   const [edgePath, labelX, labelY] = getBezierPath({
//     sourceX,
//     sourceY,
//     sourcePosition,
//     targetX,
//     targetY,
//     targetPosition,
//   });

//   return (
//     <>
//       <BaseEdge id={id} path={edgePath} />
//       {data && (
//         <>
//           <EdgeLabelRenderer>
//             <div
//               style={{
//                 position: "absolute",
//                 transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
//                 background: "#ffcc00",
//                 padding: 1,
//                 borderRadius: 5,
//                 fontSize: 12,
//                 fontWeight: 700,
//               }}
//               className="nodrag nopan"
//             >
//               {data?.label}
//             </div>
//           </EdgeLabelRenderer>
//         </>
//       )}
//     </>
//   );
// }

export default SimpleFloatingEdge;
