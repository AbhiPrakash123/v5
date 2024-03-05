import themeReducer from "@/lib/features/theme/themeSlice"
import inputBuilderReducer from "@/components/input/inputBuilderSlice"
import outputBuilderSlice from "@/components/output/outputBuilderSlice"
import buidlerSidebarSlice from "@/components/builderSidebar/buidlerSidebarSlice"

const reducer = {
    theme: themeReducer,
    inputBuilder: inputBuilderReducer,
    outputBuilder: outputBuilderSlice,
    builderSidebar: buidlerSidebarSlice
}
export default reducer