import { createSlice } from '@reduxjs/toolkit';
import CartService from '../../services/cart.services';
const initState = {
    listCart: [],
    inforCart: {
        totalAmount: 0,
        total: 0
    }
}
const cartSlice = createSlice({
    name : 'cart',
    initialState : initState,
    reducers : {
        setAddToCart: (state, action) => {
            state.listCart = action.payload;
            const inForCart = CartService.handleCart(action.payload);
            state.inforCart = inForCart;
            localStorage.setItem("cartItem", JSON.stringify(action.payload));
        }
    }
})
export const { setAddToCart } = cartSlice.actions;
export default cartSlice.reducer;