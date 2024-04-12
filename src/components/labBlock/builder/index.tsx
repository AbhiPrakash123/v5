"use client"
import React, { useCallback, useMemo } from 'react';
import ReactFlow, {
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Position,
  EdgeText,
  Handle,
  Controls,
  Background,
  XYPosition
} from 'reactflow';
// import Controls from "reactflow"
// import Background from "reactflow"
import 'reactflow/dist/style.css';
import './style.module.css'

import { TextUpdaterNode } from "./nodes"
const CircleNode = ({ data }: any) => {
  return (
    <div className="message message-default">
      <Handle type="target" position={Position.Left} />
      <div className="message-header">Сообщение 2</div>
      <div className="message-content">
        <span>Другие элементы</span>
      </div>
      <Handle type="source" position={Position.Right} id="a" />
    </div>
  );
};

const ISL81801 = ({ data }: any) => {
  return (
    <div style={{ textAlign: 'center', border: "1px solid black", borderRadius: "5px" }}>
      <Handle type="source" position={Position.Right} id="a" />
      <Handle type="source" position={Position.Right} style={{top:"2.7em",background:"red"}} id="b" />

      <Handle type="source" position={Position.Left} id="c" />
      <Handle type="source" position={Position.Left} style={{top:"2.7em",background:"red"}} id="d" />

      <img src={data.image} alt="Custom Node" style={{ width: '200px', height: 'auro' }} />
    </div>
  );
};
const PowerSupply = ({ data }: any) => {
  const pos = {x:40,y:40}
  return (
    <div style={{ textAlign: 'center', border: "1px solid black", borderRadius: "5px" }}>
      <Handle type="target" position={Position.Bottom} style={{left:"3em",background:"red"}} id="a" />
      <Handle type="target" position={Position.Bottom} style={{left:"1.6em",background:"black"}} id="b" />
      <img src={'/power_supply.jpg'} alt="Custom Node" style={{ width: '100px', height: 'auro' }} />
    </div>
  );
};
const ElectronicLoad = ({ data }: any) => {
  const pos = {x:40,y:40}
  return (
    <div style={{ textAlign: 'center', border: "1px solid black", borderRadius: "5px",zIndex:"-1000" }}>
      <Handle type="target" position={Position.Bottom} style={{left:"9.4em",background:"red"}} id="a" />
      <Handle type="target" position={Position.Bottom} style={{left:"10.9em",background:"black"}} id="b" />
      <img src={'/electronic_load.jpg'} alt="Custom Node" style={{ width: '200px', height: 'auro' }} />
    </div>
  );
};



const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
};

const initialNodes = [
  // {
  //   id: '1',
  //   position: { x: 0, y: 150 },
  //   data: { label: 'default style 1' },
  //   ...nodeDefaults,
  // },
  // {
  //   id: '2',
  //   position: { x: 250, y: 0 },
  //   data: { label: 'default style 2' },
  //   ...nodeDefaults,
  // },
  // {
  //   id: '3',
  //   position: { x: 250, y: 150 },
  //   data: { label: 'default style 3' },
  //   ...nodeDefaults,
  // },
  // {
  //   id: '4',
  //   position: { x: 250, y: 300 },
  //   data: { label: 'default style 4' },
  //   ...nodeDefaults,
  // },
  {
    id: '1',
    type: 'ISL81801',
    data: { label: 'Custom Node 1', image: '/isl81801.jpg', id: "sdasdsadasd" },
    position: { x: 174, y: 250 },
  },
  {
    id: '2',
    type: 'PowerSupply',
    data: { label: 'Custom Node 1', image: '/power_supply.jpg', id: "sdasdsadasd" },
    position: { x: 80, y: 70 },
  },
  {
    id: '3',
    type: 'ElectronicLoad',
    data: { label: 'Custom Node 1', image: '/power_supply.jpg', id: "sdasdsadasd" },
    position: { x: 363, y: 86 },
  },
];

const initialEdges:any = [
  // {
  //   id: 'e1-2',
  //   source: '1',
  //   target: '2',
  //   animated: false,
  //   type: 'smoothstep',
  // },
  // {
  //   id: 'e1-3',
  //   source: '1',
  //   target: '3',
  //   type: 'smoothstep',
  // },
  // {
  //   id: 'e1-4',
  //   source: '1',
  //   target: '4',
  //   type: 'smoothstep',
  // },
];
const CustomEdgeLabel = ({ label }: any) => {

  return (
    <EdgeText
      x={100}
      y={100}
      label={label}
      labelStyle={{ fill: 'white' }}
      labelShowBg
      labelBgStyle={{ fill: 'red' }}
      labelBgPadding={[2, 4]}
      labelBgBorderRadius={2}
    />
  );
}

const CircuitBuilder = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // const nodeTypes = useMemo(
  //   () => ({
  //     // custom: CustomNode,
  //     circle: CircleNode
  //   }),
  //   []
  // );
  const nType = useMemo(() => ({ TextUpdaterNode, ISL81801,PowerSupply,ElectronicLoad }), []);

  const onConnect = useCallback(
    (params) => setEdges((els) => {
      console.log("=-=-=-=-=-=-=-=-=-=-=")
      console.log(params)
      console.log(els)
      return addEdge({...params,type:"smoothstep"}, els)
    }),
    []
  );
  const onChange = (param,node) => {
    console.log(node)
  }
  return (
    <div className=' tw-m-auto tw-w-full tw-h-full'>
      <div className=' tw-w-full tw-h-full'>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodeDragStop={onChange}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nType}
          fitView
        >
          <Background />
          <Controls />
          {/* <MiniMap /> */}
          {/* <CustomEdgeLabel label={"dsads"}/> */}
        </ReactFlow>
      </div>
    </div>
  );
};


export default CircuitBuilder;
