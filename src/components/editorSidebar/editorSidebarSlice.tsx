import { createSlice } from "@reduxjs/toolkit";

interface EditorSidebar {
    isOpen: boolean,
    element: any,
    type: any
}

export const EditorSidebarSlice = createSlice({
    name: "editorSidebar",
    initialState: {
        isOpen: false,
        element: null,
        type: null
    } as any,
    reducers: {
        open(state, {payload}:any) {
            const {type,uuid} = payload
            state.isOpen = true
            state.element = uuid
            state.type = type
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
export default EditorSidebarSlice.reducer