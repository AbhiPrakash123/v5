import { createSlice } from "@reduxjs/toolkit";

interface InputBuilder {
    data: any,
    draggedElement: null
}

export const inputBuilderSlice = createSlice({
    name: "inputBuilder",
    initialState: {
        data: [],
        draggedElement: null
    } as InputBuilder,
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
        setDraggedInputElement(state,{ payload }){
            state.draggedElement = payload
        }
    }

})

export const { addElement, deleteElement,setDraggedInputElement } = inputBuilderSlice.actions
export const getInputs = (state: { inputBuilder: InputBuilder }) => state.inputBuilder.data
export const getDraggedElement = (state: { inputBuilder: InputBuilder }) => state.inputBuilder.draggedElement
export default inputBuilderSlice.reducer