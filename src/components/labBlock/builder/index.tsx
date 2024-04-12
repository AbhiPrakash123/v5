"use client"
import React, { useCallback, useMemo, useState } from 'react';
import { Button } from '@mui/material';
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
import BlockEditor from './blockEditor';
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
      <Handle type="source" position={Position.Right} style={{ top: "2.7em", background: "red" }} id="b" />

      <Handle type="source" position={Position.Left} id="c" />
      <Handle type="source" position={Position.Left} style={{ top: "2.7em", background: "red" }} id="d" />

      <img src={data.image} alt="Custom Node" style={{ width: '200px', height: 'auro' }} />
    </div>
  );
};
const PowerSupply = ({ data }: any) => {
  const pos = { x: 40, y: 40 }
  return (
    <div style={{ textAlign: 'center', border: "1px solid black", borderRadius: "5px" }}>
      <Handle type="target" position={Position.Bottom} style={{ left: "3em", background: "red" }} id="a" />
      <Handle type="target" position={Position.Bottom} style={{ left: "1.6em", background: "black" }} id="b" />
      <img src={'/power_supply.jpg'} alt="Custom Node" style={{ width: '100px', height: 'auro' }} />
    </div>
  );
};
const ElectronicLoad = ({ data }: any) => {
  const pos = { x: 40, y: 40 }
  return (
    <div style={{ textAlign: 'center', border: "1px solid black", borderRadius: "5px", zIndex: "-1000" }}>
      <Handle type="target" position={Position.Bottom} style={{ left: "9.4em", background: "red" }} id="a" />
      <Handle type="target" position={Position.Bottom} style={{ left: "10.9em", background: "black" }} id="b" />
      <img src={'/electronic_load.jpg'} alt="Custom Node" style={{ width: '200px', height: 'auro' }} />
    </div>
  );
};



const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
};

const initialNodes = [
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

const initialEdges: any = [];

const CircuitBuilder = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [builder, setBuilder] = useState(true)
  const nType = useMemo(() => ({ ISL81801, PowerSupply, ElectronicLoad }), []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onConnect = useCallback(
    (params:any) => setEdges((els) => {
      console.log("=-=-=-=-=-=-=-=-=-=-=")
      console.log(params)
      console.log(els)
      return addEdge({ ...params, type: "smoothstep" }, els)
    }),
    []
  );
  const onNodeClick = (param:any, node:any) => {
    if (builder) return
    console.log(node)
    handleClickOpen()
  }
  const render = (event:any) => {
    setBuilder(!builder)
  }
  return (
    <div className=' tw-m-auto tw-w-full tw-h-full'>
      <Button variant='contained' className=' tw-absolute tw-top-3 tw-right-3 tw-cursor-pointer tw-z-50' onClick={render}>
        {builder ? "Render" : "Builder"}
      </Button>
      <BlockEditor handleClose={handleClose} open={open} />
      <div className=' tw-w-full tw-h-full'>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodeClick={onNodeClick}
          // onNodeDragStop={onChange}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nType}
          fitView
          edgesUpdatable={builder}
          edgesFocusable={builder}
          nodesDraggable={builder}
          nodesConnectable={builder}
          nodesFocusable={builder}
          // draggable={!disabled}
          // panOnDrag={!disabled}
          elementsSelectable={builder}
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
