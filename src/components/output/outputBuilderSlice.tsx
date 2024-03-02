import { createSlice } from "@reduxjs/toolkit";

interface OutputBuilder {
    data: any,
    draggedElement: null
}

export const outputBuilderSlice = createSlice({
    name: "outputBuilder",
    initialState: {
        data: [],
        draggedElement: null
    } as OutputBuilder,
    reducers: {
        addElement(state, { payload }) {
            const data:any = {
                uname: payload
            }
            state.data = [...state.data, data]
        },
        deleteElement(state, { payload }) {
            state.data = []
        },
        setDraggedOutputElement(state,{ payload }){
            state.draggedElement = payload
        }
    }

})

export const { addElement, deleteElement,setDraggedOutputElement } = outputBuilderSlice.actions
export const getOutputs = (state: { outputBuilder: OutputBuilder }) => state.outputBuilder.data
export const getDraggedOutputElement = (state: { outputBuilder: OutputBuilder }) => state.outputBuilder.draggedElement
export default outputBuilderSlice.reducer