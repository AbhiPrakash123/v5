import { createSlice } from "@reduxjs/toolkit";

interface OutputBuilder {
    data: any,
    draggedElement: null,
    breakpoint: "lg" | "md" | "sm"
}

export const outputBuilderSlice = createSlice({
    name: "outputBuilder",
    initialState: {
        data: [],
        draggedElement: null,
        breakpoint: "lg"
    } as OutputBuilder,
    reducers: {
        addElement(state, { payload }) {
            state.data = [...state.data, payload]
        },
        deleteElement(state, { payload }) {
            state.data = []
        },
        setDraggedOutputElement(state,{ payload }){
            state.draggedElement = payload
        },
        setBreakpoint(state, { payload }){
            state.breakpoint = payload
        }
    }

})

export const { addElement, deleteElement,setDraggedOutputElement } = outputBuilderSlice.actions
export const getOutputs = (state: { outputBuilder: OutputBuilder }) => state.outputBuilder.data
export const getDraggedOutputElement = (state: { outputBuilder: OutputBuilder }) => state.outputBuilder.draggedElement
export default outputBuilderSlice.reducer