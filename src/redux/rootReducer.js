import { combineReducers } from "redux";
import bootstrapSlice from "./controller/boostrap.slice"
const rootReducer = combineReducers({
    boostrap: bootstrapSlice
})
export default rootReducer;