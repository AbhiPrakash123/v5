import React, { DragEvent, useRef } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { Settings } from './settings';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { getDraggedElement} from '@/components/input/inputBuilderSlice';
import { updateElementConfiguration } from "@/components/input/inputBuilderSlice"
import { InputLists } from '@/components/input';
import { addToContainer,getAllElements } from '@/components/lab/labSlice';

const configuration = {
  label: "Form Container",
  type: "container",
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

    if (draggedElement === null || draggedElement?.configuration?.type === "form") {
      return
    }

    const newElement = { ...draggedElement, "uuid": uuid }
    dispatch(addToContainer(newElement))

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

export default function LabContainer(props: any) {
  const config = props?.configuration ? props.configuration : configuration
  const dispatch = useAppDispatch()
  const elements = useAppSelector(getAllElements)
  console.log(elements)

  const updateElements = (newElement: any) => {
    const config = { ...configuration, ['elements']: newElement }
    dispatch(updateElementConfiguration({ uuid: props.uuid, configuration: config }))
  }
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

      {props?.items ? <InputLists items={props.items} builder={true} callback={updateElements} /> : ""}

      {props?.uuid ?
        <DropHere uuid={props.uuid} configuration={config} /> : ""}
    </Box>
  );
}
export { LabContainer as element, configuration, Settings }