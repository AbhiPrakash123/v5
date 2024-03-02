import themeReducer from "@/lib/features/theme/themeSlice"
import inputBuilderReducer from "@/components/input/inputBuilderSlice"
import outputBuilderSlice from "@/components/output/outputBuilderSlice"
const reducer = {
    theme: themeReducer,
    inputBuilder: inputBuilderReducer,
    outputBuilder: outputBuilderSlice,
}
export default reducer