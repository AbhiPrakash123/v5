import { createSlice } from "@reduxjs/toolkit";

interface EditorSidebar {
    isOpen: boolean,
    element: null | string,
    uuid: null | string,
}

export const EditorSidebarSlice = createSlice({
    name: "editorSidebar",
    initialState: {
        isOpen: false,
        element: null,
        uuid: null
    } as EditorSidebar,
    reducers: {
        open(state,{payload}) {
            state.isOpen = true
            state.element = payload.uname
            state.uuid = payload.uuid
        },
        close(state) {
            state.isOpen = false
            state.element = null
            state.uuid = null
        },
        toggle(state) {
            state.isOpen = !state.isOpen
        },
    }
})

export const { open,close,toggle } = EditorSidebarSlice.actions
export const isOpen = (state: { editorSidebar: EditorSidebar }) => state.editorSidebar.isOpen
export const editingElement = (state: { editorSidebar: EditorSidebar }) => state.editorSidebar.element
export const editingElementUUID = (state: { editorSidebar: EditorSidebar }) => state.editorSidebar.uuid
export default EditorSidebarSlice.reducer