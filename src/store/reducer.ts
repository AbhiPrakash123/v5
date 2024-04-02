import themeReducer from "@/lib/features/theme/themeSlice"
import inputBuilderReducer from "@/components/input/inputBuilderSlice"
import outputBuilderSlice from "@/components/output/outputBuilderSlice"
import buidlerSidebarSlice from "@/components/builderSidebar/buidlerSidebarSlice"
import editorSidebarSlice from "@/components/editorSidebar/editorSidebarSlice"
import headerSlice from "@/components/header/headerSlice"
import labSlice from "@/components/lab/labSlice"
console.log([labSlice.toString()])
const reducer = {
    theme: themeReducer,
    inputBuilder: inputBuilderReducer,
    outputBuilder: outputBuilderSlice,
    builderSidebar: buidlerSidebarSlice,
    editorSidebar: editorSidebarSlice,
    header: headerSlice,
    lab: labSlice
}
export default reducer