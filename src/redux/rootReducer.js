import { combineReducers } from "redux";
import bootstrapSlice from "./controller/boostrap.slice"
import cartSlice from "./controller/cart.slice";
const rootReducer = combineReducers({
    boostrap: bootstrapSlice,
    cart: cartSlice
})
export default rootReducer;