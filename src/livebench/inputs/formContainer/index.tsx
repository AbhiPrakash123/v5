import React, { useState, DragEvent, useRef } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Settings } from './settings';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { getDraggedElement, addElement, deleteElement, getInputs } from '@/components/input/inputBuilderSlice';
import { updateElementConfiguration } from "@/components/input/inputBuilderSlice"
import { generateUUID } from '@/utils';
import InputRow from '@/components/input/inputRow';
import { InputLists } from '@/components/input';
const configuration = {
  label: "Form Container",
  elements: [],
  type: "form",
}

const DropHere = ({ uuid, configuration }: any) => {
  const dropeHereRef = useRef(null)
  const draggedElement = useAppSelector(getDraggedElement)
  const dispatch = useAppDispatch()

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (draggedElement === null) return

    // @ts-ignore
    dropeHereRef.current.style.transform = 'scale(1.2)'
  };
  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (draggedElement === null) return

    // @ts-ignore
    dropeHereRef.current.style.transform = 'scale(1)'
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
     // @ts-ignore
     dropeHereRef.current.style.transform = 'scale(1)'

    if (draggedElement === null || draggedElement?.configuration?.type === "form"){

      return
    }
   
    const newuuid = generateUUID()
    const newElement = { ...draggedElement, "uuid": newuuid }
    const config = { ...configuration, ['elements']: [...configuration.elements, newElement] }
    dispatch(updateElementConfiguration({ uuid, configuration: config }))
    // dispatch(addElement(draggedElement))
  };


  return (
    <Box
      component="section"
      sx={{ p: 2, border: '1px dashed grey' }}
      onDragOver={(e) => handleDragOver(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      onDrop={(e) => handleDrop(e)}
      ref={dropeHereRef}
      className=" tw-flex tw-items-center tw-justify-center tw-h-[64px] tw-m-2 tw-rounded-md tw-bg-blue-300"
    >
      <Typography> Drop Input </Typography>
    </Box>
  )
}

export default function FromElement(props: any) {
  const config = props?.configuration ? props.configuration : configuration
  const dispatch = useAppDispatch()
  const updateElements = (newElement:any) => {
    const config = { ...configuration, ['elements']: newElement }
    dispatch(updateElementConfiguration({ uuid: props.uuid, configuration: config }))
  }
  console.log(config.elements)
  return (
    <Box
      className=" tw-w-full tw-h-full tw-flex tw-flex-col "
    >
      {config.label ?
        <>
          <Typography gutterBottom variant="h6" component="div">
            {config.label}
          </Typography>
          <Divider />
        </>
        : ""}

      {config.elements ? <InputLists items={config.elements} builder={true} callback={updateElements} />:""}

      {props?.uuid ?
        <DropHere uuid={props.uuid} configuration={config} /> : ""}
    </Box>
  );
}
export { FromElement as element, configuration, Settings }