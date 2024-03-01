import themeReducer from "@/lib/features/theme/themeSlice"
import inputBuilderReducer from "@/components/input/inputBuilderSlice"
const reducer = {
    theme: themeReducer,
    inputBuilder: inputBuilderReducer
}
export default reducer