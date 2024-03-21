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
        setOutput(state,{ payload }){
            state.data = payload
        },
        updateElementConfiguration(state, { payload }) {
            state.data = state.data.map((item:any) => {
                if(item.uuid === payload.uuid){
                    item.configuration = payload.configuration
                }
                return item
            })
        },
        deleteElement(state, { payload }) {
            state.data = state.data.filter((item: any) => item.uuid !== payload)
        },
        setDraggedOutputElement(state, { payload }) {
            state.draggedElement = payload
        },
        setBreakpoint(state, { payload }) {
            state.breakpoint = payload
        },
        updateLayout(state, { payload }) {
            const { uuid, breakpoint, layout } = payload
            state.data = state.data.map((item: any) => {
                if(item.uuid === uuid){
                    item.layout[breakpoint] = layout
                }
                return item
            })
        }
    }

})

export const { addElement, deleteElement, setDraggedOutputElement, setBreakpoint,updateLayout,updateElementConfiguration,setOutput } = outputBuilderSlice.actions
export const getOutputs = (state: { outputBuilder: OutputBuilder }) => state.outputBuilder.data
export const getBreakpoint = (state: { outputBuilder: OutputBuilder }) => state.outputBuilder.breakpoint
export const getDraggedOutputElement = (state: { outputBuilder: OutputBuilder }) => state.outputBuilder.draggedElement
export default outputBuilderSlice.reducer