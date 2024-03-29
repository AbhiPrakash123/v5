import { createSlice } from "@reduxjs/toolkit";

interface EditorSidebar {
    isOpen: boolean,
    element: any,
    type: any,
    item: any,
    data: any
}

export const EditorSidebarSlice = createSlice({
    name: "editorSidebar",
    initialState: {
        isOpen: false,
        element: null,
        type: null,
        item: null,
        data:[]
    } as any,
    reducers: {
        open(state, {payload}:any) {
            const {type,uuid,item,data} = payload
            state.isOpen = true
            state.element = uuid
            state.item = item
            state.type = type
            state.data = data
        },
        close(state) {
            state.isOpen = false
            state.element = null
            state.type = null
        },
        toggle(state) {
            state.isOpen = !state.isOpen
        },
    }
})

export const { open, close, toggle } = EditorSidebarSlice.actions
export const isOpen = (state: { editorSidebar: EditorSidebar }) => state.editorSidebar.isOpen
export const editingElementID = (state: { editorSidebar: EditorSidebar }) => state.editorSidebar.element
export const editingElementType = (state: { editorSidebar: EditorSidebar }) => state.editorSidebar.type
export const editingItem = (state: { editorSidebar: EditorSidebar }) => state.editorSidebar.item
export const editingDatas = (state: { editorSidebar: EditorSidebar }) => state.editorSidebar.data
export default EditorSidebarSlice.reducer