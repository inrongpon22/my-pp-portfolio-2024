"use client";
import { Segmented } from "antd";
import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
// handle diagram
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Position,
  ConnectionMode,
  MarkerType,
} from "reactflow";
import FloatingNode from "@/components/dashboard/diagram/FloatingNode";
import SimpleFloatingEdge from "@/components/dashboard/diagram/SimpleFloatingEdge";

import "reactflow/dist/style.css";

const nodeTypes = {
  floatingNode: FloatingNode,
};

const edgeTypes = {
  floating: SimpleFloatingEdge,
};

const Dashboard = () => {
  // const [edgeType, setEdgeType] = useState<string>("default");
  const [progress, setProgress] = useState<number>(0);
  const [isShowHandle, setIsShowHandle] = useState<boolean>(true);

  const initialNodes: any = [
    {
      id: "1",
      type: "floatingNode",
      data: {
        label: "Parent Node",
        isShowHandle: isShowHandle,
      },
      position: { x: 250, y: 0 },
    },
    {
      id: "2",
      type: "floatingNode",
      data: {
        label: "Child of Parent 1",
        isShowHandle: isShowHandle,
      },
      position: { x: 100, y: 100 },
    },
    {
      id: "3",
      type: "floatingNode",
      data: {
        label: "Child of Parent 2",
        isShowHandle: isShowHandle,
      },
      position: { x: 400, y: 100 },
    },
    {
      id: "4",
      type: "floatingNode",
      data: {
        label: "Child of Node 1-1",
        isShowHandle: isShowHandle,
      },
      position: { x: 75, y: 200 },
    },
    {
      id: "5",
      type: "floatingNode",
      data: {
        label: "Child of Node 1-2",
        isShowHandle: isShowHandle,
      },
      position: { x: 50, y: 250 },
    },
  ];

  const initialEdges: any = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      label: "5 sec",
      animated: true,
      type: "floating",
    },
    { id: "e1-3", source: "1", target: "3", type: "floating" },
    {
      id: "e2-4",
      source: "2",
      target: "4",
      label: "10 sec",
      type: "floating",
    },
    {
      id: "e2-5",
      source: "2",
      target: "5",
      label: "2 sec",
      type: "floating",
    },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: "floating",
            markerEnd: { type: MarkerType.Arrow },
          },
          eds
        )
      ),
    []
  );

  // we are using a bit of a shortcut here to adjust the edge type
  // this could also be done with a custom edge for example
  const edgesWithUpdatedTypes = edges.map((edge: any) => {
    // if (edge.sourceHandle) {
    //   const edgeType = nodes.find((node: any) => node.type === "custom").data
    //     .selects[edge.sourceHandle];
    //   edge.type = edgeType;
    // }

    return edge;
  });

  const fetchAPI = async (e: any) => {
    await axios.get(
      "https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      {
        onDownloadProgress: (progressEvent: any) => {
          console.log(progressEvent);
          let percentCompleted = Math.ceil(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percentCompleted);
        },
      }
    );
  };

  // useMemo(() => {
  //   setEdges(initialEdges);
  // }, [edgeType]);

  // useMemo(() => {
  //   setNodes(initialNodes);
  // }, [isShowHandle]);

  return (
    <div className="w-full bg-slate-800 text-white">
      <div className="p-10">
        <h1>Dashboard</h1>
        {/* <div className="flex items-center">
          <label htmlFor="" className="pe-10 font-bold">
            Edge Type:{" "}
          </label>
          <Segmented
            value={edgeType}
            options={["smoothstep", "step", "default", "straight", "floating"]}
            onChange={(value) => {
              setEdgeType(value); // string
            }}
          />
        </div> */}
        <div className="flex items-center mt-3">
          <label htmlFor="" className="pe-10 font-bold">
            Show Handle:{" "}
          </label>
          <Segmented
            value={String(isShowHandle)}
            options={["true", "false"]}
            onChange={(value) => {
              setNodes((prev: any) =>
                prev.map((item: any) => {
                  return {
                    ...item,
                    data: {
                      ...item.data,
                      isShowHandle: value === "true" ? true : false,
                    },
                  };
                })
              );
              setIsShowHandle(value === "true" ? true : false); // boolean
            }}
          />
        </div>
        {/* <button className="p-3 bg-blue-700 rounded-md" onClick={fetchAPI}>
          Hello world
        </button>
        <div>Progress: {progress}%</div> */}
      </div>
      {/* starts::ReactFlow */}
      <div className="simple-floatingedges">
        <ReactFlow
          nodes={nodes}
          nodeTypes={nodeTypes}
          edges={edgesWithUpdatedTypes}
          edgeTypes={edgeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          connectionMode={ConnectionMode.Loose}
        >
          <Controls />
          <Background className="bg-slate-800" color="#eeee" gap={16} />
        </ReactFlow>
      </div>
      {/* ends::ReactFlow */}
    </div>
  );
};

export default Dashboard;
