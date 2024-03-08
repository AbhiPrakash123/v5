import { generateUUID } from "@/utils";
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
            const uuid = generateUUID()
            const data:any = {
                uname: payload.uname,
                configuration: payload.configuration,
                uuid
            }
            state.data = [...state.data, data]
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
            console.log("----------------\n",state.data)
        },
        setDraggedInputElement(state,{ payload }){
            state.draggedElement = payload
        }
    }

})

export const { addElement, deleteElement,setDraggedInputElement,updateElementConfiguration } = inputBuilderSlice.actions
export const getInputs = (state: { inputBuilder: InputBuilder }) => state.inputBuilder.data
export const getDraggedElement = (state: { inputBuilder: InputBuilder }) => state.inputBuilder.draggedElement
export default inputBuilderSlice.reducer